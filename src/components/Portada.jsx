import portada from '../images/portada.jpg'
import logo from '../images/logo.jpg'
import downarrow from '../images/arrow-down.png'
import { useEffect } from 'react';

import '../assets/style.css';

import AOS from "aos";
import "aos/dist/aos.css";

const Portada = () => {

    const handleButtonClick = () => {
        window.scrollBy({
            top: window.innerHeight - 130, // Scroll down by 200px
            behavior: 'smooth'
        });
    };

    useEffect(() => {

        AOS.init();
        AOS.refresh();

    }, []);

    return (
        <div className='sticky top-0 bg-[#1a3b1f] h-screen'>
            <img src={portada} alt='fondoPortada'
                className='h-screen w-full object-cover opacity-70'/>
            <div className='justify-evenly absolute top-0 text-white w-full h-full flex flex-col
                items-center gap-0 md:gap-3'
            >
                <h4 className={`text-5xl sm:text-4xl font-catchy pt-[10px]`} data-aos="fade-up" data-aos-duration="500">
                    Bienvenido a
                </h4>
                <img className='h-auto w-[120px] sm:w-[80px] pt-[10px]' data-aos="fade-up" data-aos-duration="1000"
                    src={logo} alt='logo'
                />
                <div className='flex flex-col font-catchy items-center' data-aos="fade-up" data-aos-duration="1500">
                    <p className='text-center text-[90px] sm:text-[110px] md:text-[130px] h-[80px] sm:h-[130px]'>Canal Beagle</p>
                    <p className='text-[50px] md:text-[80px] text-start'>Hotel</p>
                </div>
                <div className='fade-up flex flex-col items-center' onClick={handleButtonClick}>
                    <button className='text-white h-[35px] w-[180px] sm:h-[40px] sm:w-[200px] CocoGothic_trial font-bold glass-back'>
                        DESPLAZAR PARA MÁS
                    </button>
                    <img src={downarrow} className='w-[40px] animate-bounce pt-[10px] cursor-pointer'
                        style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Portada