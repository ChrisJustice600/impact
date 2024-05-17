import { Toaster } from "@/components/ui/sonner";
import { createContext, useState } from "react";
export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ data: true });
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
      <Toaster />
    </UserContext.Provider>
  );
}
