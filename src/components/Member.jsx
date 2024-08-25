// TeamMembers.js
import React from 'react';
import image10 from '../assests/image 10.png';
import image11 from '../assests/image 11.png';
const Member = () => {
  // Array of team members
  const members = [
    {
      id: 1,
      name: 'Mr. Shoaib Butt',
      role: 'CEO',
      description:
        'He started his career in 1973 with American Express. He joined British Airways in 1976. He possesses a long managerial experience of over 25 years (1976 -2001) of dedicated work for British Airways at Islamabad and Rawalpindi with an excellent sales performance record.',
      image: {image11}
    },
    {
      id: 2,
      name: 'Mr. Adeel Shoaib Butt',
      role: 'Director',
      description:
        'He started his career in the aviation industry 14 years ago with Turkish Airlines. He worked in various departments, gaining extensive experience in sales, marketing, and operations. In 2017, he joined Travel Air International as Director.',
      image: {image10}
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
      <div className="flex flex-wrap justify-center">
        {members.map((member) => (
          <div key={member.id} className="w-full md:w-1/2 lg:w-1/3 p-2">
            <div className="border border-gray-200 rounded-lg p-4 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-2 text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
