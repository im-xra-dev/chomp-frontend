import { Footer } from "../features/footer/Footer";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);
