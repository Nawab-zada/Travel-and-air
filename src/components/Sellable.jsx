import React from 'react';
import Airblue from '../assests/Airblue.png';
import AirFrancelogo from '../assests/Air-France-Logo.png';
import Airsial from '../assests/airsial.jfif';
import Bristish from '../assests/British.jpg';
import eithad from '../assests/eithad.png';
import Klm from '../assests/KLM Logo.png';
import guf from '../assests/gulf.jfif';
import Malysia from '../assests/Malasyia.png';
import Oman from '../assests/Oman.png';
import PIA from '../assests/PIA.png';
import qatar from '../assests/qatar.png';
import serene from '../assests/Serene.png';
import sirilankan from '../assests/sirilankkan.png';
import suadia from '../assests/suadia.jpg';
import swiss from '../assests/swiss.png';
import thai from '../assests/Thai_Airways.png';
import turkish from '../assests/turkish.png';

function App() {
  // Array of all airline logos
  const airlineLogos = [
    Airblue,
    AirFrancelogo,
    Airsial,
    Bristish,
    eithad,
    Klm,
    guf,
    Malysia,
    Oman,
    PIA,
    qatar,
    serene,
    sirilankan,
    suadia,
    swiss,
    thai,
    turkish
  ];

  return (
    <>
      <div className="p-4 bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen">
        <div className="p-4 bg-white shadow-lg rounded-md w-full max-w-3xl mx-auto">
          <h2 className="text-center font-bold text-2xl text-gray-800 mb-4">Major Sellable Airlines</h2>
        </div>

        <div className="flex flex-wrap justify-center md:justify-around lg:justify-center gap-6 mt-10">
          {airlineLogos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-4"
            >
              <img className="w-40 rounded-md" src={logo} alt={`Airline Logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;