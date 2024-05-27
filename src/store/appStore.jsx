import { create } from "zustand";
import { persist } from "zustand/middleware";

let appStore = (set) => ({
  deopen: true,
  updateOpen: (deopen) => set((state) => ({ deopen: deopen })),
});

appStore = persist(appStore, { name: "app-store" });
export const useAppStore = create(appStore);
