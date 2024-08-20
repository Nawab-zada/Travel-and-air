import React from 'react';
import image10 from '../assests/image 10.png';
import image11 from '../assests/image 11.png';

const About = () => {
  return (
    <section className="px-4 py-8">
      <div className="flex flex-col md:flex-row-reverse justify-end max-w-full h-auto md:h-[200px] mx-auto bg-blue-950 rounded-l-full  md:justify-items-end gap-4 md:gap-2 p-4">
        <div className="text-white gap-5 mt-4 md:mt-10 text-sm">
          <h6 className="text-center md:text-left">Mr. Shoaib Butt</h6>
          <p className="text-center md:text-left">CEO</p>
          <p className="text-xs md:text-sm text-center md:text-left">
            He started his career in 1973 with American Express. He joined British Airways in 1976. He possesses a long managerial experience of over 25 years (1976 - 2001) of dedicated work for British Airways at Islamabad and Rawalpindi with an excellent sales performance record.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src={image10} alt="logo" className="w-40 h-40 md:w-52 md:h-52 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-full h-auto mx-auto bg-blue-950 rounded-r-full md:justify-items-end gap-4 md:gap-2 mt-6 p-4">
        <div className="text-white gap-5 mt-4 md:mt-10 text-sm">
          <h6 className="text-center md:text-left">Mr. Adeel Shoaib Butt</h6>
          <p className="text-center md:text-left">Director</p>
          <p className="text-xs md:text-sm text-center md:text-left">
            He started his career in the aviation industry 14 years ago with one of the renowned airlines, Turkish Airlines. He started working with Turkish Airlines from the day the airline started its operation from Islamabad Station. During his tenure with Turkish Airlines from 2011 till 2017, he worked in every department of the airline from airline sales, marketing, and operations, giving him extensive experience in the aviation industry. In 2017, he decided to join Travel Air International as Director.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <img src={image11} alt="logo" className="w-40 h-40 md:w-52 md:h-52 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default About;
