import { type ReactNode } from "react";
import { Sidebar, Explorer, Footer, Tabs } from "./";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-full w-full">
        <Sidebar />
        <Explorer />
        <div className="flex h-full w-full flex-col">
          <Tabs />
          <main className="h-full w-full items-center justify-center p-8">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
