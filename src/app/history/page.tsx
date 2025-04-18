'use client'

import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import '../globals.css'

export default function Home() {
    return (
      <div className="bg-white">
        <header className="sticky">
          <Navbar />
        </header>
          <div className="pt-40">
            <p className="text-center text-green-700 text-2xl">
              <span className="block">Our History</span>
            </p>
          </div>
          <div className="flex justify-center pt-10">
            <Image
              src='/beach-shack.jpg'
              alt='Picture of the Betty Spears beach shack'
              width="800"
              height="800"
              className="cursor-pointer"
              priority
          />
          </div>
          <div className="flex flex-col gap-3 pt-10">
            <p className="text-center text-black">
              <span className="block">History of the centre, who was Betty Spears, that sort of thing</span>
            </p>
            <p className="text-center text-black">
              <span className="block">Maybe something about the connection to Tempe community as well?</span>
            </p>
          </div>
        </div>
    );
  }