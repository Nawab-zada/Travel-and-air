import React from 'react';
import reservation from '../assests/reservation.png';
import visa from '../assests/visa.png';

function Service(props) {
    return (
        <div className='p-4 bg-gradient-to-b from-gray-100 to-gray-300'>
            <div className='bg-slate-900 w-full p-4 rounded-lg shadow-md'>
                <p className='text-xl text-white text-center font-semibold'>Our Services</p>
            </div>

            <div className='flex flex-wrap gap-10 justify-center mt-8'>
                {[ 
                    { image: reservation, text: "AirLine Reservation" },
                    { image: reservation, text: "Ticketing for all major airlines" },
                    { image: reservation, text: "Worldwide hotel accommodation" },
                    { image: reservation, text: "Tour and packages car" },
                    { image: reservation, text: "Visa assistance" },
                    { image: reservation, text: "Travel Insurance" },
                    { image: reservation, text: "Ticket Delivery at doorStep" },
                    { image: reservation, text: "24 hour on services" },
                    { image: visa, text: "Visa Master card Acceptance" }
                ].map((service, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg shadow-lg p-4 w-[260px] transition-transform transform hover:scale-105 hover:shadow-2xl'>
                        <img className='w-full rounded-t-lg mb-4' src={service.image} alt={service.text} />
                        <p className='font-semibold text-center text-gray-700'>{service.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Service;
