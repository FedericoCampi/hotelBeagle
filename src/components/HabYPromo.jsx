import hab3adult from '../images/hab3adult.jpg'
import suite from '../images/suite.jpg'
import laptop from '../images/laptop.jpg'
import spa from '../images/spa.jpg'
import suitcase from '../images/suitcase.jpg'

const habitaciones = [
  {
    "id": 1,
    "img": "https://static.wixstatic.com/media/ec3017_964571869076490dae215f6046eee4ad~mv2.jpg/v1/fill/w_926,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ec3017_964571869076490dae215f6046eee4ad~mv2.jpg",
    "capac": "2 adultos",
    "tipo": "Habitación Doble Estándar",
    "price": "desde 200 USD la noche"
  },
  {
    "id": 2,
    "img": hab3adult,
    "capac": "3 adultos",
    "tipo": "Habitación Triple Estándar",
    "price": "desde 280 USD la noche"
  },
  {
    "id": 3,
    "img": suite,
    "capac": "4 adultos",
    "tipo": "Suite",
    "price": "desde 350 USD la noche"
  }
]
const promos = [
  {
    "id": 1,
    "img": laptop,
    "title": "Early bird discount",
    "desc": "List your offers, promos, or special membership privileges and perks here to entice people to book your property.",
  },
  {
    "id": 2,
    "img": spa,
    "title": "Wellhall members Club",
    "desc": "List your offers, promos, or special membership privileges and perks here to entice people to book your property.",
  },
  {
    "id": 3,
    "img": suitcase,
    "title": "Book 3 nights, get 1 night free",
    "desc": "List your offers, promos, or special membership privileges and perks here to entice people to book your property.",
  }
]

const HabYPromo = () => {
  return (
    <div className='pb-[20px] px-[30px] sm:px-[50px] h-full'>
      <div className='h-full'>
        <h2 className='py-[30px] text-center text-5xl pb-[30px] text-green-800 font-catchy'>Habitaciones</h2>
        <div className='flex flex-col sm:flex-row'>
          {habitaciones?.map(item => (
            <div key={item.id} className='flex flex-col sm:max-h-[400px] w-full sm:w-[35%] py-[10px] px-[10px]'>
              <img src={item.img} alt={item.tipo} className='object-cover min-h[200px] h-[40%]'/>
              <div className='flex flex-col justify-between mt-[15px] border border-gray-400 
                p-[15px] text-gray-600 CocoGothic_trial'
              >
                <p>{item.capac}</p>
                <div className='py-[20px'>
                  <h3 className='pt-[20px] text-2xl py-[10px]'>{item.tipo}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='h-full'>
        <h2 className='py-[30px] text-center text-5xl pb-[30px] text-green-800 font-catchy'>Promociones</h2>
        <div className='flex flex-col sm:flex-row'>
          {promos?.map(item => (
            <div key={item.id} className='flex flex-col sm:max-h-[400px] w-full sm:w-[35%] py-[10px] px-[10px]'>
              <img src={item.img} alt={item.title} className='object-cover max-h-[200px] h-[40%]'/>
              <div className='flex flex-col justify-between mt-[15px] border border-gray-400 
              p-[15px] text-gray-600 CocoGothic_trial '
              >
                <h3 className='text-2xl py-[20px]'>{item.title}</h3>
                <p className='pb-[20px]'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>

      </div> 
    </div>
  )
}

export default HabYPromo