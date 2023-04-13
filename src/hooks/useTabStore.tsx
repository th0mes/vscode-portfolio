import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type Tab = {
  title: string;
  path: string;
};

interface TabState {
  tabs: Tab[];
  add: (tab: Tab) => void;
  remove: (path: string) => void;
}

export const useTabStore = create<TabState>()(
  devtools((set) => ({
    tabs: [
      { path: "/", title: "Tabs.tsx" },
      { path: "/test", title: "Social.tsx" },
    ],
    add: (tab) => {
      set((state) => ({ tabs: [...state.tabs, tab] }));
      localStorage.setItem("tabs", JSON.stringify(tab));
    },
    remove: (path) =>
      set((state) => ({
        tabs: state.tabs.filter((obj) => obj.path !== path),
      })),
  }))
);
