// TeamMembers.js
import React from 'react';
import image10 from '../assests/image 10.png'
import image from '../assests/image 11.png'
function MeetOurTeam() {
  return (
    <div className='p-8 bg-gray-100'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Meet Our Team</h2>

      <div className='flex flex-col items-center gap-12'>
        {/* Team Member 1 - Shifted to the left */}
        <div className='flex flex-col md:flex-row-reverse bg-blue-950 text-white rounded-r-full overflow-hidden shadow-lg w-full max-w-4xl ml-auto'>
          <div className='flex-none md:w-1/3'>
            <img className='w-full h-full object-cover' src={image10} alt='Team Member 1' />
          </div>
          <div className='p-6 flex flex-col justify-center'>
            <h3 className='text-xl font-semibold'>Mr. Shoaib Butt</h3>
            <p className='text-sm text-blue-300'>CEO</p>
            <p className='mt-4 text-gray-200'>
            He started his career in 1973 with American Express. He joined British
Airways in 1976. He possesses a long managerial experience of over 25
years (1976 -2001) of dedicated work for British Airways at Islamabad and
Rawalpindi with an excellent sales performance record.
            </p>
          </div>
        </div>

        {/* Team Member 2 - Shifted to the right */}
        <div className='flex flex-col md:flex-row bg-blue-950 text-white rounded-l-full overflow-hidden shadow-lg w-full max-w-4xl mr-auto'>
          <div className='flex-none md:w-1/3'>
            <img className='w-full h-full object-cover' src={image} alt='Team Member 2' />
          </div>
          <div className='p-6 flex flex-col justify-center text-xs w-[500px]'>
            <h3 className='text-xl font-semibold'>Mr. Adeel Shoaib Butt</h3>
            <p className='text-sm text-blue-300'>Director</p>
            <p className='mt-4 text-gray-200'>
            He Started his career in aviation industry 14 years ago with one of the renowned airline Turkish
Airlines. Started working with Turkish Airlines from the day Airline started its operation from
Islamabad Station. During his tenure with Turkish Airlines from 2011 Till 2017 he worked in every
department of airline from Airline Sales, marketing and operations, giving him extensive
experience in aviation industry. In 2017 he decided to join Travel Air International as Director.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetOurTeam;
