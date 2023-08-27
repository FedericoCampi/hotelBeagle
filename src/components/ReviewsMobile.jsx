import quotes from '../images/left-quotes-sign.png'
import '../assets/style.css';

const ReviewsMobile = () => {

    return (
        <div className="h-full relative overflow-x-scroll snap-x snap-mandatory flex flex-col">
            <div className='flex items-center flex-1 py-[20px]'>
                <h2 className='text-7xl text-white font-catchy text-center'>
                    Reseña de viajeros
                </h2>
            </div>
            <div className="background-image"></div>
            <div className="flex overflow-x-auto snap-x snap-mandatory">
                <div className="w-screen flex-shrink-0 p-4 snap-center text-white">
                    <img src={quotes} alt='quotes' className='w-[30px]'/>
                    <p className='pt-[20px]'>
                        Muy buenas prestaciones, la calidad del hotel acompaña su excelente ubicación. 
                        El desayuno es muy bueno, las habitaciones son muy cómodas, la limpieza es 
                        eficiente, la atención en general es muy agradable.
                    </p>
                    <p className='pt-[10px]'><span className='font-bold'>Felipe Maldonado</span> - Google</p>
                </div>
                <div className="w-screen flex-shrink-0 p-4 snap-center text-white">
                    <img src={quotes} alt='quotes' className='w-[30px]'/>
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
                <div className="w-screen flex-shrink-0 p-4 snap-center text-white">
                    <img src={quotes} alt='quotes' className='w-[30px]'/>
                    <p className='pt-[20px]'>
                        La verdad muy lindo hotel, bien ubicado, todo super limpio, y la 
                        atención del personal para destacar. Fueron todos muy amables, 
                        volvería sin duda!
                    </p>
                    <p className='pt-[10px]'><span className='font-bold'>Natalia Sanchez</span> - Google </p>
                </div>
            </div>
        </div>
    )
}

export default ReviewsMobile