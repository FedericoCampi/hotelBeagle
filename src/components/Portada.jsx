import portada from '../images/portada.jpg'
import logo from '../images/logo.jpg'
import downarrow from '../images/arrow-down.png'
import { useEffect, useState } from 'react';

const Portada = () => {

    const [isDivVisible, setIsDivVisible] = useState(false);

    useEffect(() => {
      // Set the visibility to true after the component mounts to trigger the fade-in effect.
        setIsDivVisible(true);
    }, []);

    return (
        <div className='sticky top-0 bg-[#1a3b1f]'>
            <img src={portada} alt='fondoPortada' 
                className='h-screen w-full object-cover opacity-70'/>
            <div className='justify-evenly absolute top-0 text-white w-full h-full flex flex-col
                items-center gap-0 md:gap-3'
            >
                <h4 className={`text-3xl font-catchy ${
                    isDivVisible ? 'fade-enter-active fade-exit' : 'opacity-0'
        }           transition-opacity duration-800`}>
                    Bienvenido a
                </h4>
                <img className={`h-[180px] w-[100px] pt-[10px] ${
                    isDivVisible ? 'fade-enter-active fade-exit' : 'opacity-0'
        }           transition-opacity duration-1000`} src={logo} alt='logo'/>
                <div className={`flex flex-col font-catchy items-center ${
                    isDivVisible ? 'fade-enter-active fade-exit' : 'opacity-0'
        }           transition-opacity duration-[1200ms]`}>
                    <p className='text-[70px] sm:text-[110px] md:text-[130px] h-[80px] sm:h-[140px]'>Canal Beagle</p>
                    <p className='text-[40px] md:text-[80px] text-start'>Hotel</p>
                </div>
                <div className={`flex flex-col items-center ${
                    isDivVisible ? 'fade-enter-active fade-exit' : 'opacity-0'
        }           transition-opacity duration-[2000ms]`}>
                    <button className='text-green-800 bg-white h-[40px] w-[190px] sm:h-[45px] sm:w-[200px]  CocoGothic_trial font-bold'>
                        DESPLAZAR PARA MÁS
                    </button>
                    <img src={downarrow} className='w-[40px]'/>
                </div>
            </div>
            
        </div>
    )
}

export default Portada