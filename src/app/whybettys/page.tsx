
import Image from 'next/image';
import '../globals.css'

export default function Home() {
    return (
      <div className="bg-white">
          <div className="pt-40">
            <p className="text-center text-green-700 text-2xl">
              <span className="block">Why Bettys?</span>
            </p>
          </div>
          <div className="flex justify-center pt-10">
            <Image
              src='/bettys-from-terrace.jpg'
              alt='Picture of Betty spears rooms from the terrace'
              width="800"
              height="800"
              className="cursor-pointer"
              priority
          />
          </div>
          <div className="flex flex-col gap-3 pt-10">
            <p className="text-center text-black">
              <span className="block">This page could make the case for why your kid should attend Betty's.</span>
            </p>
            <p className="text-center text-black">
              <span className="block">Lots of stuff we could possibly put here, although maybe it should just go on the home page?</span>
            </p>
          </div>
        </div>
    );
  }