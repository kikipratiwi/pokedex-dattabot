import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLogin: false,
      userLogin: {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        username: "",
        birthDate: "",
        image: "",
      },
      setLogin: (login, userLogin) =>
        set(() => ({ isLogin: login, userLogin })),
    }),
    { name: "user" },
  ),
);

export default useAuthStore;
