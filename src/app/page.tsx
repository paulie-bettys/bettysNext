'use client'

import Navbar from "../../components/Navbar";
import './globals.css'

export default function Home() {
    return (
      <>
      <div className="bg-white">
        <header className="sticky">
          <Navbar />
        </header>
          <div className="pt-35">
            <p className="text-center text-green-700 text-2xl">
              <span className="block">Hello and welcome to Betty Spears!</span>
            </p>
          </div>
        </div>
      </>
    );
  }