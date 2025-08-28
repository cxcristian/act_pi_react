import './globals.css'
import Navbar from './components/NavBar/Navbar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        {/* Navbar global, se renderiza una sola vez */}
        <Navbar />
        
        {/* Contenido de cada página */}
        <main className="flex-1 p-4">{children}</main>

        {/* Footer opcional */}
        <footer className="bg-gray-800 text-white text-center p-2">
          © {new Date().getFullYear()} Mi Proyecto
        </footer>
      </body>
    </html>
  )
}
