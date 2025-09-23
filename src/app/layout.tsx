import "./globals.css";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
