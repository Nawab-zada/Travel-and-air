import React from "react";
import png from '../assests/image 6 (1).png';
import image7 from '../assests/image 7.png';
import pixel from '../assests/pexels-vince-2265876 2.png'


function Abouts() {
  return (
    <section className="px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:mx-10 flex justify-center">
          <img src={png} alt="png" className="w-full max-w-xs md:max-w-sm" />
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0">
          <p className="text-lg font-semibold">Explore Travel Air International</p>
        </div>
        <div className="md:mx-10 mt-2 flex justify-center">
          <img src={image7} alt="image7" className="w-full max-w-xs md:max-w-sm" />
        </div>
      </div>

      <div className="max-w-full md:w-[500px] mx-auto mt-6 text-sm text-center md:text-left">
        <p>
          TRAVELAIR INTERNATIONAL is one of the leading IATA accredited travel agencies of Islamabad (Pakistan) well established since 1974, offering airline reservations, ticketing of major international and domestic airlines and a variety of other travel-related services.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="w-full md:w-3/4 mx-2 mt-5">
          <img src={pixel}alt="pixel"/>
        </div>

        <div className="w-full md:w-3/4 gap-4 text-sm">
          <div>
            <h1 className="mx-auto md:flex justify-center font-bold leading-9 text-[25px] mt-10 text-center">
              Welcome Travel Air <br></br> International
            </h1>
          </div>

          <div className="mt-2">
            <h1 className="font-bold text-center md:text-left">Vision</h1>
            <p className="mt-7 text-center md:text-left">
              To see Travelair International has become a standard and aspires to be seen as the benchmark against which others are judged.
            </p>

            <div>
              <h3 className="mt-5 font-bold text-center md:text-left">Mission & Objective</h3>
              <p className="mt-3 text-center md:text-left">
                Endeavor to expand the tourism potential and strive to excel in providing optimum value travel services to the travelers and to excel in tourism related services backed by efficient and effective planning while seeking to enlarge their scope and dimension.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h5 className="mx-auto flex justify-center mt-12 font-bold text-[30px] text-center">Meet Our Team</h5>
      </div>

      <div>
     
     
      </div>
    </section>
  );
}

export default Abouts;
