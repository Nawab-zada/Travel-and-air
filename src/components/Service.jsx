import React from 'react';
import reservation from '../assests/reservation.png'
import visa from '../assests/visa.png'

function Service(props) {
    return (
        <div className='p-4'>
            <div className=' bg-slate-900 w-full p-4 '>
                <p className=' text-xl text-white text-center'>Our Services</p>
              
            </div>

            <div className='flex flex-wrap  gap-10 justify-around'>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>AirLine Reservation</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Ticketing for all major airlines</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Worldwide hotel accomodation</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Tour and packages car</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Visa assistance</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Travel Insurance</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>Ticket Delivery at doorStep</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[260px]' src={reservation} alt="" />
                        <p className='font-semibold text-sm'>24 hour on services</p>
                    </div>
                    <div className=' xl:mt-6'>
                        <img className='w-[200px]' src={visa} alt="" />
                        <p className='font-semibold text-sm'>Visa Master card Acceptance</p>
                    </div>
                </div>
        </div>
    );
}

export default Service;