import "react-native-gesture-handler";
import Navigation from "./app/navigation/index";
import { useLoginContext, LoginContextWrap } from "./app/context/login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useCart from "./app/commons/stores/cart";

import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
export default function App() {
  const data = useLoginContext();
  const cart = useCart((state) => state.cart);

  useEffect(() => {
    const db = SQLite.openDatabase("db.db");
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists carts (id integer primary key not null, itemId integer);"
      );
      tx.executeSql(
        "create table if not exists items (id integer primary key not null, title string, price integer, image string);"
      );
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoginContextWrap.Provider value={{ ...data, cart }}>
        <Navigation />
      </LoginContextWrap.Provider>
    </QueryClientProvider>
  );
}
