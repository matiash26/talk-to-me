"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
type TAuth = {
  permission: boolean;
  setPermission: Dispatch<SetStateAction<boolean>>;
};
type Children = { children: ReactNode };

const AuthContext = createContext<TAuth>({
  permission: false,
  setPermission: () => {},
});

export default function AuthProvider({ children }: Children): JSX.Element {
  const [permission, setPermission] = useState(false);
  return (
    <AuthContext.Provider value={{ permission, setPermission }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
