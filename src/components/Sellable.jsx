import { useState } from 'react'
import Airblue from '../assests/Airblue.png'
import AirFrancelogo from '../assests/Air-France-Logo.png'
import Airsial from '../assests/airsial.jfif'
import Bristish from '../assests/British.jpg'
import eithad from '../assests/eithad.png'
import Klm from '../assests/KLM Logo.png'
import guf from '../assests/gulf.jfif'
import Malysia from '../assests/Malasyia.png'
import Oman from '../assests/Oman.png'
import PIA from '../assests/PIA.png'
import qatar from '../assests/qatar.png'
import serene from '../assests/Serene.png'
import sirilankan from '../assests/sirilankkan.png'
import suadia from '../assests/suadia.jpg'
import swiss from '../assests/swiss.png'
import thai from '../assests/Thai_Airways.png'
import turkish from '../assests/turkish.png'


function App() {
 

  return (
      <>
      <div className=' p-4 '>
        <div className=' p-4 bg-slate-900 w-full'>
          <h2 className=' text-white text-center font-bold text-xl'>Major Sellable Airliines</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-12 mt-10'>
              <div>
                    <img className='w-[200px]' src={Airblue} alt="Airblue" />  
              </div>

              <div>
                    <img className='w-[200px]' src={AirFrancelogo} alt="" />
              </div>

              <div>
                    <img className='w-[200px]' src={Airsial} alt="" />
              </div>

              <div className='xl:mt-4'>
                    <img className='w-[200px]' src={Bristish} alt="" />
              </div>

              <div className='xl:mt-8'>
                    <img className='w-[200px]' src={eithad} alt="" />
              </div>


              <div className=' xl:mt-12'>
                    <img className='w-[200px]' src={guf} alt="" />
              </div>

              <div className=' xl:mt-6'>
                    <img className='w-[200px]' src={Klm} alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src={Malysia} alt="" />
              </div>

              <div className=' xl:mt-8 xl:ml-4'>
                    <img className='w-[200px]' src={Oman} alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src={PIA} alt="" />
              </div>

              <div className='  xl:mt-12'>
                    <img className='w-[200px]' src={qatar} alt="" />
              </div>

              <div className=' xl:mt-6'>
                    <img className='w-[200px]' src={serene} alt="" />
              </div>

              <div className=' xl:mt-16'>
                    <img className='w-[200px]' src={sirilankan} alt="" />
              </div>

              <div className=' xl:mt-12 xl:ml-6'>
                    <img className='w-[200px]' src={suadia} alt="" />
              </div>

              <div className=' xl:mt-8'>
                    <img className='w-[200px]' src={swiss}alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src={thai}alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src={turkish}alt="" />
              </div>

        </div>

      </div>

    
    </>
  )
}

export default App