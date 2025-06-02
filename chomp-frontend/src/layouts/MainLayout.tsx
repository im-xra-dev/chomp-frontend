import { Header } from "../features/header/Header";

export const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-full">
    <Header />
    <main className="flex-grow pt-28 transition-all duration-300">
      {children}
    </main>
  </div>
);
