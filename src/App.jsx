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

import AOS from "aos";
import "aos/dist/aos.css";

import './assets/style.css';

function App() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResizeScreen = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResizeScreen); // Add event listener for window resize

        AOS.init();
        AOS.refresh();

        return () => {
            window.removeEventListener('resize', handleResizeScreen); // Remove event listener on component unmount
        };
    }, []);


  return (
    <div className=''>
      <div className='relative h-[200vh]'>
        <Portada/>
      </div>
      <section id='hotel' className='px-[30px] pb-[10px] relative z-40 -mt-[100vh] min-h-screen bg-white pt-[40px] sm:px-[50px] block md:flex'
      >
        <div className='w-full md:w-2/4 flex flex-col gap-8' data-aos="fade-right" data-aos-duration="2000">
          <h3 className='text-4xl sm:text-6xl text-green-800 font-catchy'>Disfrutá en el centro de la ciudad de Ushuaia</h3>
          <p className='text-[17px] sm:text-[20px] text-gray-600 CocoGothic_trial'>
            Canal Beagle Hotel es un alojamiento 4 estrellas ubicado en pleno centro de la ciudad, 
            a pocos metros del Canal de Beagle y frente al Puerto de Ushuaia, con estacionamiento propio.
          </p>
          <p className='text-[17px] sm:text-[20px] text-gray-600 CocoGothic_trial'>
            Se encuentra situado en la misma manzana que el Hard Rock Café Ushuaia y se puede 
            llegar caminando a los principales comercios y museos y a los restaurantes más 
            importantes de la ciudad.<span className='hidden 2xl:block'>Sumérgete en una experiencia inigualable 
              mientras exploras la belleza natural y la cultura vibrante de Ushuaia desde la comodidad y 
              el estilo incomparables del Hotel Marítimo del Canal.</span>
          </p>
        </div>
        <div className='max-h-screen w-full md:w-2/4 flex justify-center pt-[15px] pb-[50px]' data-aos="fade-down" data-aos-duration="2000">
          <img className='max-h-full w-full sm:w-auto pl-0 md:pl-[50px] object-cover' src={pic1}/>
        </div>
      </section>
      <Navbar/>
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
      {/* <div className="flex justify-center items-center min-h-screen w-full bg-orange-900">
        <p data-aos="fade-up" className='text-6xl text-white'>hi</p>
      </div> */}
    </div>
  )
}

export default App
