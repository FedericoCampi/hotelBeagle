import hab3adult from '../images/hab3adult.jpg'
import suite from '../images/suite.jpg'

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import '../assets/style.css';
import { useEffect, useRef, useState } from 'react';

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

const HabMobile = () => {

  const firstDivRef = useRef(null);
  const thirdDivRef = useRef(null);
  const observer = useRef(null);

  const [arrowBack, setArrowBack] = useState(true);
  const [arrowFoward, setArrowFoward] = useState(true);

  useEffect(() => {
    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === firstDivRef.current) {
          if (entry.isIntersecting) {
            setArrowBack(false)
          } else {
            setArrowBack(true)
          }
        }
        if (entry.target === thirdDivRef.current) {
          if (entry.isIntersecting) {
            setArrowFoward(false)
          } else {
            setArrowFoward(true)
          }
        }
      });
    });

    if (firstDivRef.current) {
      observer.current.observe(firstDivRef.current);
    }
    if (thirdDivRef.current) {
      observer.current.observe(thirdDivRef.current);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
    
  }, []);

    return (
        <div className="overflow-x-scroll snap-x snap-mandatory flex">
            {habitaciones?.map((item, index)=> (
              <div key={item.id} className='flex-shrink-0 w-screen p-8 snap-center'
              >
                <div
                  className={`${arrowBack === false ? 'hidden' : ''} absolute top-[50%] left-3 animate-hbounce`}
                  // className="" 
                  style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
                  >
                  <MdArrowBackIos className='text-green-800 text-5xl'/>
                </div>
                <div
                  className={`${arrowFoward === false ? 'hidden' : ''} absolute top-[50%] right-3 animate-hbounce`}
                  // className="" 
                  style={{ animationDuration: '2s', animationIterationCount: 'infinite' }}
                  >
                  <MdArrowForwardIos className='text-green-800 text-5xl'/>
                </div>
                <img src={item.img} alt={item.tipo} className='object-cover h-[200px] w-full'/>
                <div className='flex flex-col justify-between mt-[15px] border border-gray-400 
                    w-full text-gray-600 CocoGothic_trial p-3'
                    ref={index === 0 ? firstDivRef : index === 2 ? thirdDivRef : null} // Set refs for the first and third divs
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
    )
}

export default HabMobile