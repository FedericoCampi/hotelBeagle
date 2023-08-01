import portada from '../images/portada.webp'
import logo from '../images/logo.jpg'
import downarrow from '../images/arrow-down.png'

const Portada = () => {

    return (
        <div className='sticky top-0 bg-green-800'>
            <img src={portada} alt='fondoPortada' 
                className='h-screen w-full object-cover opacity-70'/>
            <div className='absolute top-0 text-white w-full h-full flex flex-col justify-center 
                items-center gap-0 md:gap-3'
            >
                <h4 className='text-3xl CocoGothic_trial'>Bienvenido a</h4>
                <img className='h-[100px] pt-[10px]' src={logo} alt='logo'/>
                <div className='flex flex-col items-center font-catchy text-center'>
                    <h1 className='text-[70px] sm:text-[110px] md:text-[130px]'>Canal Beagle</h1>
                    <h3 className='text-[40px]  md:text-[80px] pb-[30px]'>Hotel</h3>
                </div>
                <div className='flex flex-col items-center'>
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