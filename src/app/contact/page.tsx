
import Map from '../../../components/Map'
import '../globals.css'

export default function Contact() {
    return (
      <div className="bg-white">
                <div className="pt-40">
                  <p className="text-center text-green-700 text-2xl">
                    <span className="block">Contact Us</span>
                  </p>
                </div>
                <div className="flex gap-30 pt-10 justify-center text-black">
                  
                  <div className="flex flex-col gap-5 pt-10 justify-center text-black">
                    <p>
                      <span className="block">Phone | (02) 9558 8350</span>
                    </p>
                    <p>
                      <span className="block">Address | 1A Gannon Street Tempe NSW 2044</span>
                    </p>
                  </div>
                  <div className="shadow-xl">
                    <Map />
                  </div>
                </div>
              </div>
    );
  }