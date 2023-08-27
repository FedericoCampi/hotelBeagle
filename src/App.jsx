import Footer from './components/Footer'
import HabYPromo from './components/HabYPromo'
import MidSection from './components/MidSection'
import Navbar from './components/Navbar'
import Reviews from './components/Reviews'
import Portada from './components/Portada'

import pic1 from './images/hotelpic1recor.png'
import { useEffect, useState } from 'react'
import MidSectionMobile from './components/MidSectionMobile'
import ReviewsMobile from './components/ReviewsMobile'

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResizeScreen = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResizeScreen); // Add event listener for window resize
    
        return () => {
            window.removeEventListener('resize', handleResizeScreen); // Remove event listener on component unmount
        };
    }, []);

  return (
    <div className=''>
      <Navbar/>
      <div className='relative h-[200vh]'>
        <Portada/>
      </div>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-white p-[30px] sm:p-[50px] 
        py-[75px] block md:flex'
      >
        <div id='hotel' className='w-full md:w-2/4 flex flex-col gap-8'>
          <h3 className='text-4xl sm:text-6xl text-green-800 font-catchy'>Disfrutá en el centro de la ciudad de Ushuaia</h3>
          <p className='text-[17px] sm:text-[20px] text-gray-600 CocoGothic_trial'>
            Canal Beagle Hotel es un alojamiento 4 estrellas ubicado en pleno centro de la ciudad, 
            a pocos metros del Canal de Beagle y frente al Puerto de Ushuaia, con estacionamiento propio.
          </p>
          <p className='text-[17px] sm:text-[20px] text-gray-600 CocoGothic_trial'>
            Se encuentra situado en la misma manzana que el Hard Rock Café Ushuaia y se puede 
            llegar caminando a los principales comercios y museos y a los restaurantes más 
            importantes de la ciudad.
          </p>
        </div>
        <div className='h-full w-full md:w-2/4 flex justify-center pt-[30px]'>
          <img className='max-h-[300px] sm:max-h-full w-full sm:w-auto pl-0 md:pl-[50px] object-cover' src={pic1}/>
        </div>
      </section>
      {screenWidth < 768 ? (
        <MidSectionMobile/>
      ):(
        <MidSection/>
      )}
        <HabYPromo/>
      {screenWidth < 768 ? (
      <ReviewsMobile/>
      ):(
      <Reviews/>
      )}
        <Footer/>
    </div>
  )
}

export default App
