import React, { useEffect, useState } from "react";

import Home from "pages/pokemon/home";
import Login from "pages/auth/login";

import useAuthStore from "stores/useAuthStore";

export default function Index() {
  const { isLogin } = useAuthStore((state) => state);
  const [isUserLogin, setIsUserLogin] = useState("");

  useEffect(() => {
    setIsUserLogin(isLogin);
  }, [isLogin]);

  return <>{isUserLogin === "" ? null : isUserLogin ? <Home /> : <Login />}</>;
}
