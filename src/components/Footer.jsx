import { AiOutlineClockCircle, AiOutlineMail, AiOutlineInstagram } from 'react-icons/ai'
import { BsPhone } from 'react-icons/bs'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import location from '../images/iconsFooter/location-pin.png'
import { useEffect, useState } from 'react'

const Footer = () => {

    const [fontSize, setFontSize] = useState(16); // Initial font size, adjust as needed

    const handleResize = () => {
        const resizableDiv = document.getElementById('resizableDiv');
        const maxWidth = 300; // Set the maximum width you want to allow
        const maxHeight = 200; // Set the maximum height you want to allow
    
        // Calculate the new font size based on the div's dimensions
        const newFontSize = Math.min(
            maxWidth / resizableDiv.scrollWidth,
            maxHeight / resizableDiv.scrollHeight
        ) * 20; // Use 16 as the initial font size, adjust as needed
    
        // Apply the new font size
        setFontSize(newFontSize);
    };

    useEffect(() => {
      handleResize(); // Call handleResize on component mount to set initial font size
      window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
        };
    }, []);


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
    <div id='contacto' className='bg-[#1a3b1f] p-[50px] text-white'>
        <div className='flex flex-col'>
            <h3 className='text-4xl font-catchy'>Canal Beagle Hotel</h3>
            <div className='flex items-center'>
                <img className='w-[21px]' src={location}/>
                <h5 className='flex text-1xl pt-[10px] pl-[5px]'>Av. Maipú 547, Ushuaia, Argentina</h5>
            </div>
        </div>
        <div className={`${screenWidth < 768 ? 'flex flex-wrap' : 'flex'} gap-12 pt-[20px]`}>
            <div className='w-full max-w-[400px] grow'>
                <iframe width="100%" height="100%" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Av.%20Maip%C3%BA%20547,%20V9410%20Ushuaia,%20Tierra%20del%20Fuego+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
                </iframe>
            </div>
            <div id="resizableDiv" className='w-full flex flex-col grow max-w-[400px] border border-gray-300 overflow-hidden resize-both py-[15px] px-[25px]'
                style={{ fontSize: `${fontSize}px` }}
            >
                <p className='py-[5px] font-bold' style={{ fontSize: `${fontSize +10}px` }}>
                    Reservas
                </p>
                <div className='flex flex-col h-[60%] justify-between pt-[10px]'>
                    <div className='flex'>
                        <AiOutlineClockCircle size={28}/>
                        <p className='flex items-center pl-[10px]'>
                            Lunes a viernes 10 a 18hrs, Sabados 10 a 14hrs
                        </p>
                    </div>
                    <div className='flex'>
                        <BsPhone size={22}/>
                        <p className='flex items-center pl-[10px]'>
                            +54-2901 436100
                        </p>
                    </div>
                    <div className='flex'>
                        <AiOutlineMail size={22}/>
                        <p className='flex items-center pl-[10px]'
                            style={{overflowWrap: `anywhere`}}
                        >
                            reservas@canalbeaglehotel.com.ar
                        </p>
                    </div>
                </div>
            </div>
            <div id="resizableDiv" className='max-w-[400px] flex flex-col w-full grow border border-white py-[15px] px-[25px]'>
                <p className='pt-[5px] font-bold' style={{ fontSize: `${fontSize +10}px` }}>
                    Seguinos en redes sociales
                </p>
                <div className='flex flex-col h-[100%] justify-evenly'>
                    <div className='flex gap-4'>
                        <FiFacebook size={40}/>
                        <FiTwitter size={40}/>
                        <AiOutlineInstagram size={40}/>
                    </div>
                    <div>
                        <p>Etiquetanos en tus fotos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Footer