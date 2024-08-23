import { useState } from 'react'


function App() {
 

  return (
    <>
      <div className=' p-4 '>
        <div className=' p-4 bg-slate-900 w-full'>
          <h2 className=' text-white text-center font-bold text-xl'>Major Sellable Airliines</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-7 mt-10'>
              <div>
                    <img className='w-[200px]' src="./public/Airblue.png " alt="" />
              </div>

              <div>
                    <img className='w-[200px]' src="./public/airsial.jfif " alt="" />
              </div>

              <div>
                    <img className='w-[200px]' src="./public/British.jpg " alt="" />
              </div>

              <div className='xl:mt-4'>
                    <img className='w-[200px]' src="./public/eithad.png " alt="" />
              </div>

              <div className='xl:mt-4'>
                    <img className='w-[200px]' src="./public/gulf.jfif " alt="" />
              </div>

              <div className=' xl:mt-6'>
                    <img className='w-[200px]' src="./public/KLM Logo.png " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/Malasyia.png " alt="" />
              </div>

              <div className=' xl:mt-6'>
                    <img className='w-[200px]' src="./public/Oman.png " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/PIA.png " alt="" />
              </div>

              <div className=' xl:mt-8 xl:ml-4'>
                    <img className='w-[200px]' src="./public/qatar.png " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/serene.png " alt="" />
              </div>

              <div className='  xl:mt-12'>
                    <img className='w-[200px]' src="./public/sirilankkan.png " alt="" />
              </div>

              <div className=' xl:mt-6'>
                    <img className='w-[200px]' src="./public/suadia.jpg " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/swiss.png " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/Thai_Airways.png " alt="" />
              </div>

              <div className=''>
                    <img className='w-[200px]' src="./public/turkish.png " alt="" />
              </div>

        </div>

      </div>

    
    </>
  )
}

export default App