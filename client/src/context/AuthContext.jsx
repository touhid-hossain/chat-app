import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    // console.log('authUser function calling')
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

//   useEffect(() => {
//     console.log('authUser updating')
//     if (authUser) {
//       localStorage.setItem("chat-user", JSON.stringify(authUser));
//     } else {
//       localStorage.removeItem("chat-user");
//     }
//   }, [authUser]);

  const value = {
    authUser,
    setAuthUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
