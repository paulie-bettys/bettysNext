
import Image from "next/image";
import './globals.css'

export default function Home() {
    return (
      <>
      <div className="bg-white">
        <div className="pt-40">
          <p className="text-center text-green-700 text-2xl">
            <span className="block">Welcome to Betty Spears Childcare Centre</span>
          </p>
        </div>
        <div className="flex justify-center pt-10">
            <Image
              src='/terrace.jpg'
              alt='Picture of the Betty Spears Terrace on a beautiful day'
              width="800"
              height="800"
              className="cursor-pointer"
              priority
          />
        </div>
        <div className="flex flex-col gap-3 pt-10">
            <p className="text-center text-black">
              <span className="block">Betty Spears Child Care Centre is a well respected, community based, not for profit, Long Day Care Centre operating in Tempe since 1986.</span>
            </p>
            <p className="text-center text-black">
              <span className="block">Our centre provides high quality care and education to children aged 6 weeks to 6 years between the hours of 7.30am and 6.00pm Monday to Friday.</span>
            </p>
        </div>
      </div>
      </>
    );
  }