
import Image from 'next/image';
import '../globals.css'

export default function Life() {
    return (
      <div className="bg-white">
          <div className="pt-40">
            <p className="text-center text-green-700 text-2xl">
              <span className="block">Life at Betty&apos;s</span>
            </p>
          </div>
          <div className="flex justify-center pt-10">
            <Image
              src='/garden-path.jpg'
              alt='A picture of the garden path to the Bettys bush garden'
              width="800"
              height="800"
              className="cursor-pointer"
              priority
          />
          </div>
          <div className="flex flex-col gap-3 pt-10">
            <p className="text-center text-black">
              <span className="block">Stuff about daily routine at Betty&apos;s will go here. Maybe mealtimes, schedules, excursions, and so on.</span>
            </p>
            <p className="text-center text-black">
              <span className="block">Maybe also something about learning frameworks, different rooms, curriculum, that sort of thing?</span>
            </p>
          </div>
        </div>
    );
  }