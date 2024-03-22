"use client";
import { ChangeEvent, useState } from "react";
import * as S from "./style";
import checkToken from "@/lib/checkToken";
import { useRouter } from "next/navigation";
export default function Token() {
  const [token, setToken] = useState("");
  const [alert, setAlert] = useState("");
  const router = useRouter();

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setToken(e.target.value);
  };

  const handleSave = async () => {
    if (alert) setAlert("");
    if (token) {
      localStorage.setItem("token", token);
      const validateToken = await checkToken(token);
      if (validateToken.permission) {
        router.push("/");
        return;
      }
      setAlert("verify the token and try again");
    }
  };
  console.log(alert);
  return (
    <S.Container>
      <S.Content>
        <S.Label href="https://aistudio.google.com/app/apikey" target="_blank">
          Click here to get your free token
        </S.Label>
        <S.Title>you need to get your token to access</S.Title>
        {alert && <S.Alert>{alert}</S.Alert>}
        <S.InputField onChange={handleInput} />
        <S.Button onClick={handleSave}>SAVE</S.Button>
      </S.Content>
    </S.Container>
  );
}
