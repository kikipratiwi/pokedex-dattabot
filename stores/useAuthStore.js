import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      setLogin: (login) => set(() => ({ isLogin: login })),
    }),
    { name: "user" },
  ),
);

export default useAuthStore;
