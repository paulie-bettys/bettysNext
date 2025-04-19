'use client'

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="sticky">
          <Navbar />
        </header>
        <div className="pb-10">
          {children}
        </div>
        <div className="bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  )
}