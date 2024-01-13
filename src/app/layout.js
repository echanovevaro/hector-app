import { Inter } from "next/font/google"
import "./globals.css"
import MainNavigation from "../components/MainNavigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Héctor Romero",
  description: "Obra y exposiciones del artista Héctor Romero",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen w-screen`}>
        <MainNavigation />
        {children}
      </body>
    </html>
  )
}
