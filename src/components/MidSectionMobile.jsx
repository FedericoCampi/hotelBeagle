import caja from '../images/iconsMidSection/cajaFuerte.png'
import wifi from '../images/iconsMidSection/wifi.png'
import secador from '../images/iconsMidSection/secador.png'
import tv from '../images/iconsMidSection/tv.png'
import frigobar from '../images/iconsMidSection/frigobar.png'
import coffee from '../images/iconsMidSection/coffe.png'
import relax from '../images/iconsMidSection/relax.png'
import piscina from '../images/piscina.jpg';

const infoMidSection = [
    {
        "id": 1,
        "img": "https://static.wixstatic.com/media/ec3017_eabed12a94e34640a78645cf5cf44394~mv2.jpg/v1/fill/w_961,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec3017_eabed12a94e34640a78645cf5cf44394~mv2.jpg",
        "title": "Para descansar",
        "subTitle": "Habitaciones y Suites",
        "desc": "Comodidad y diseño en nuestras 54 habitaciones y 4 suites amplias con bañera disponibles para su estadía",
        "icons":[
            {
                "img": caja,
                "name": "Caja de seguridad"
                },
            {
                "img": wifi,
                "name": "Wifi de alta velocidad"
            },
            {
                "img": secador,
                "name": "Secador de cabello"
            },
            {
                "img": tv,
                "name": "TV con cable"
            },
            {
                "img": frigobar,
                "name": "Frigobar"
            }
        ]
    },
    {
        "id": 2,
        "img": "https://static.wixstatic.com/media/ec3017_c83e4bdab9ca456f9d24fc4bd5a1f178~mv2.jpg/v1/fill/w_296,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec3017_c83e4bdab9ca456f9d24fc4bd5a1f178~mv2.jpg",
        "title": "Para comenzar el día",
        "subTitle": "Desayuno buffet continental",
        "desc": "El desayuno incluye diversos panificados de elaboración propia, se sirven infusiones calientes, jugos, cereales y yogurt, junto a jamón, queso y pastelería deliciosa.",
        "icons":[
            {
                "img": coffee,
                "name": "Desayuno incluido"
                }
        ]
    },
    {
        "id": 3,
        "img": piscina,
        "title": "Para sentirse bien",
        "subTitle": "Spa y piscina",
        "desc": "Disfruta todo el año de nuestra piscina cubierta, sauna, bañera con hidromasajes y gimnasio.",
        "icons":[
            {
                "img": relax,
                "name": "Espacio de relax"
                }
        ]
    }
]

const MidSectionMobile = () => {

    return (
        <div>
            {infoMidSection?.map(item => (
                <div key={item.id} className='border border-green-500'>
                    <div  className='flex flex-col p-[30px] sm:p-[60px] h-full sm:flex-row sm:border-0'>
                        <div className='w-full sm:w-2/4 flex justify-center'>
                            <img src={item.img} alt={item.title} className='max-h-[250px] w-full h-full object-cover'/>
                        </div>
                    </div>
                    <div className='w-full sm:w-2/4 flex flex-col items-center p-[20px] sm:p-[40px] justify-evenly'>
                        <h2 className='text-5xl text-green-800 font-catchy border-b-2 border-green-700 text-center'>{item.title}</h2>
                        <h4 className='text-3xl text-green-800 font-catchy font-light'>{item.subTitle}</h4>
                        <p className='text-center text-[18px] text-gray-600 
                            CocoGothic_trial'>{item.desc}
                        </p>
                        <div className='flex'>
                            {item.icons?.map(icon => (
                                <div className='flex flex-col items-center pt-[10px]' key={icon.name}
                                    style={{width:` ${100/item.icons.length}%`}}
                                >
                                    <img src={icon.img} alt={icon.desc} className='h-[50px]'/>
                                    <p className='text-center text-[14px] text-gray-600 CocoGothic_trial'>
                                        {icon.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    )
}

export default MidSectionMobile