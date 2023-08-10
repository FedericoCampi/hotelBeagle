import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";

import logo from '../images/logo.jpg'
import arg from '../images/iconsNavbar/argentina.png'
import usa from '../images/iconsNavbar/usa.png'
import brazil from '../images/iconsNavbar/brazil.png'
import menu from '../images/iconsNavbar/menu.png';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setIsScrolled(currentScrollPos > prevScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
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
        <div className={`h-[125px] bg-[#1a3b1f] z-50 fixed top-0 w-full transition-all 
            duration-[1000ms] ease-in-out ${isScrolled ? 'translate-y-0' : '-translate-y-full'}
            flex text-white py-[10px]`}
        >
            <div className="pr-[100px] sm:pr-[250px] lg:pr-0 flex flex-col items-center flex-1 font-catchy">
                <img src={logo} className='h-[50px] w-[30px]'/>
                <h3 className="text-2xl pt-1 h-7">Canal Beagle</h3>
                <h5 className="text-[15px]">HOTEL</h5>
            </div>
            <div className="hidden lg:flex  flex-[2_2_0%] w-full h-full items-center">
                <div className="flex-[2_2_0%] w-full h-full flex gap-9 items-center">
                    <button>EL HOTEL</button>
                    <button>FOTOS</button>
                    <button>SERVICIOS</button>
                    <button>CONTACTO</button>
                </div>
                <div className="m-1 flex gap-3 border border-green-600 p-2 rounded-xl"
                >
                    {screenWidth > 1200 ? (
                        <>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={arg}/>ES</button>
                            <div className="w-[1px] bg-white"></div>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={usa}/>EN</button>
                            <div className="w-[1px] bg-white"></div>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={brazil}/>PT</button>
                        </>
                    ):(
                        <>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={arg}/></button>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={usa}/></button>
                            <button className="flex items-center gap-1"><img className="w-[30px]" src={brazil}/></button>
                        </>
                    )}
                    
                    
                </div>
            </div>
            <div className="hidden lg:items-center lg:flex lg:justify-evenly flex-col flex-1 pr-[30px]">
                <p className="px-[30px] text-[12px] mb-0">
                    Reservas:+54 02901 436100 (lun a vie 10-18hs, sáb 10-14hs)Recepción:+54 02901 42135
                </p>
                <button className="bg-white text-green-800 border border-green-800 p-[10px]"
                    style={{ display: 'inline-block', width: 'fit-content' }}
                >
                    RESERVAR AHORA!
                </button>
            </div>



            <div className="flex lg:hidden w-[20%] h-full items-center" onClick={handleShow}>
                <img className="w-[30px] h-[30px]" src={menu} alt="menu"/>
            </div>

            <Offcanvas style={{width:"350px"}} className="" show={show} onHide={handleClose}>
                <Offcanvas.Header className="bg-[#4c645c]" closeButton>
                <Offcanvas.Title className="flex justify-center items-center w-full">
                    <img src={logo} className='h-[50px] w-[30px]'/>
                    <div className="text-white font-catchy pl-[15px]">
                        <h4 className="text-2xl">Canal Beagle</h4>
                        <h5 className="text-[15px]">HOTEL</h5>
                    </div>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="bg-[#4c645c]">
                    <div className="flex flex-col gap-3 text-white">
                        <button className="p-[10px] w-full border-b border-black">EL HOTEL</button>
                        <button className="p-[10px] w-full border-b border-black">FOTOS</button>
                        <button className="p-[10px] w-full border-b border-black">SERVICIOS</button>
                        <button>CONTACTO</button>
                    </div>
                    <div className="my-[20px] py-[10px] flex w-full justify-center gap-3 
                    text-white border border-green-600 rounded-xl"
                    >
                        <button className="flex items-center gap-1"><img className="w-[30px]" src={arg}/>ES</button>
                        <div className="w-[1px] bg-black"></div>
                        <button className="flex items-center gap-1"><img className="w-[30px]" src={usa}/>EN</button>
                        <div className="w-[1px] bg-black"></div>
                        <button className="flex items-center gap-1"><img className="w-[30px]" src={brazil}/>PT</button>
                    </div>
                    <div className="text-white flex flex-col items-center">
                        <p className="text-[12px]">
                            Reservas:+54 02901 436100 (lun a vie 10-18hs, sáb 10-14hs)Recepción:+54 02901 42135
                        </p>
                        <button className="bg-white text-green-800 border border-green-800 p-[10px] w-[70%]"
                            style={{ display: 'inline-block' }}
                        >
                            RESERVAR AHORA!
                        </button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navbar