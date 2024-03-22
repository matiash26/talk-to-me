"use client";
import { ReactNode, useCallback, useEffect } from "react";
import AuthProvider from "@/context/auth";
import checkToken from "@/lib/checkToken";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth";
import * as S from "./styles";
type TChildren = { children: ReactNode };

export default function RootLayout({ children }: Readonly<TChildren>) {
  const { permission, setPermission } = useAuth();
  const router = useRouter();

  const validateToken = useCallback(async () => {
    const token = localStorage.getItem("token") as string;
    if (!token) router.push("/token");

    const response = await checkToken(token);
    setPermission(response.permission);
    if (!response.permission) {
      router.push("/token");
    }
  }, [router, setPermission]);

  useEffect(() => {
    if (!permission) validateToken();
  }, [validateToken, permission]);
  const Loading = (
    <S.main>
      <S.Container>
        <S.Loading>LOADING PAGE</S.Loading>
      </S.Container>
    </S.main>
  );
  return <AuthProvider>{permission ? children : Loading}</AuthProvider>;
}
