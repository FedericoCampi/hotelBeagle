import { useEffect, useState } from 'react';
import quotes from '../images/left-quotes-sign.png'

const Reviews = () => {

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
    <div className="relative bg-green-800">
            <img src="https://static.wixstatic.com/media/ec3017_4c350e047f064a568ce7404c6144bf57~mv2.jpg/v1/fill/w_665,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec3017_4c350e047f064a568ce7404c6144bf57~mv2.jpg" alt='fondoPortada' 
                className='w-full h-full min-h-[h-screen] object-cover opacity-60 absolute inset-0 z-0'/>
            <div className='relative z-10 text-[#E7ECEE] w-full flex flex-col 
                items-center justify-evenly px-[50px] h-full'
            >
                <div className='flex items-center flex-1 py-[20px]'>
                    <h2 className='text-7xl font-catchy text-center'>Reseña de viajeros</h2>
                </div>
                <div   className={`${screenWidth < 700 ? 'flex flex-wrap text-center' : 'flex'} 
                    h-full w-full gap-16 flex-[2_2_0%] text-[14px] md:text-[1rem]`}
                    >
                    <div className='grow w-full'>
                        <div className='h-[30px]'>
                            <img src={quotes} alt='quotes' className='w-[30px]'/>
                        </div>
                        <p className='pt-[20px]'>
                            Muy buenas prestaciones, la calidad del hotel acompaña su excelente ubicación. 
                            El desayuno es muy bueno, las habitaciones son muy cómodas, la limpieza es 
                            eficiente, la atención en general es muy agradable.
                        </p>
                        <p className='pt-[10px]'><span className='font-bold'>Felipe Maldonado</span> - Google</p>
                    </div>
                    <div className='grow w-full'>
                        <div className='h-[30px]'>
                            <img src={quotes} alt='quotes' className='w-[30px]'/>
                        </div>
                        <p className='pt-[20px]'>
                            Excelente hotel!! Muy bien ubicado!!Cerca de todo!! A unos metros de 
                            donde vas las excursiones. A una calle de la principal. <span className='hidden md:block'>Todo el personal 
                            muy cordial!! Siempre dispuesto a ayudar en todo!! </span>Desde la recepción, 
                            desayuno,limpieza,spa!! Nada librado al azar!! Muy lindas y confortables 
                            las habitaciones. Bien climatizadas. Amplias. El desayuno super completo 
                            y delicioso!! 
                        </p>
                        <p className='pt-[10px]'><span className='font-bold'>Silvia Nisebe</span> - Google</p>
                    </div>
                    <div className='grow w-full'>
                        <div className='h-[30px]'>
                            <img src={quotes} alt='quotes' className='w-[30px]'/>
                        </div>
                        <p className='pt-[20px]'>
                            La verdad muy lindo hotel, bien ubicado, todo super limpio, y la 
                            atención del personal para destacar. Fueron todos muy amables, 
                            volvería sin duda !
                        </p>
                        <p className='pt-[10px]'><span className='font-bold'>Natalia Sanchez</span> - Google </p>
                    </div>
                </div>
            </div>
    </div>
)
}

export default Reviews