import { Header } from "../features/header/Header";
import { Footer } from "../features/footer/Footer";

export const SettingsLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
