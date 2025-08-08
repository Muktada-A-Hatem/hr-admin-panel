"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import Cookies from "js-cookie";

interface AuthContextType {
  jwt: string | null;
  fetchNewJwt: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [jwt, setJwt] = useState(null);

  const fetchNewJwt = async () => {
    try {
      const response = await fetch(
        "http://" + process.env.NEXT_PUBLIC_PUBLIC_API_URL + "/api/Auth/test",
        {
          method: "GET",
          credentials: "include",
          headers: {
            // Cookies: `refreshToken=${encodeURIComponent(
            //   Cookies.get("refreshToken")!
            // )}; userID=${Cookies.get("userID")};`,
            // Cookies: `refreshToken=DTMJuXAjqKiUsv0JvrHu4%2B0v%2BxsLCdqrOO%2BMsAIJPrZHZL82Rvc0gbksaBqg2ZflS8u1Gl4SitOJgZglEkwVGg%3D%3D; userID=2`,
          },
        }
      );
      if (!response.ok) {
        if (response.status === 401) {
          if (window.location.pathname !== "/Login") {
            // window.location.href = "/Login";
            console.log(window.location.href);
          }
          return;
        }
        // throw new Error(Error: "${response.statusText}");
      }

      const data = await response.json();
      setJwt(data.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      fetchNewJwt();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ jwt, fetchNewJwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
