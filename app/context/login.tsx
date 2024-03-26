import { createContext, useState } from "react";
import { TProductItem } from "../commons/types";

export const LoginContextWrap = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (x: boolean) => {},
  cart: {} as {
    [key: string]: TProductItem;
  },
});

export const useLoginContext = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return {
    isLoggedIn,
    setIsLoggedIn,
  };
};
