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
            Cookies: `refreshToken=DGed6n4BDMDen8JB65J/Wq7l9frvbaUJl+VeQFKAVNY5Rkl4AXWEXCrjYST9qRikn/tnq9NCou+ijoaT8GWccA==;userID=${Cookies.get(
              "userID"
            )}`,
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
