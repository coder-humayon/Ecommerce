import React from 'react'
import { CiHeart } from "react-icons/ci";
import discount1 from '../assets/images/discount1.png'
import discount2 from '../assets/images/product3.png'
import discount3 from '../assets/images/product4.png'
import discount4 from '../assets/images/discount2.png'
import Container from './utilities/Container';

const Discounts = () => {
    const discount = [
        {id:1, name:"Apple iPhone 14 Pro 512GB Gold (MQ233)" ,price:1437 ,image:discount1},
        {id:2, name:"AirPods Max Silver smart watch and fashon" ,price:549 ,image:discount2},
        {id:3, name:"Apple Watch Series 9 GPS 41mm Starlight Aluminium " ,price:399 ,image:discount3},
        {id:4, name:"Apple iPhone 14 Pro 1TB Gold (MQ2V3)" ,price:1499 ,image:discount4},
    ]
  return (
    <section className='pb-16'>
        <Container>
            <div className='pb-8'>
                <h3 className='text-[24px] text-[#000000] font-poppins font-medium leading-8'>Discounts up to -50%</h3>
            </div>
            <div className='grid grid-cols-4 gap-4'>
                {
                    discount.map(dis =>(
                        <div className='py-6 px-4 bg-[#F6F6F6] rounded-[9px]'>
                            <div className='pb-4'>
                                <CiHeart className='text-[32px] text-[rgba(144,144,144,0.77)] ms-auto'/>
                            </div>
                            <div className='pb-4'>
                                <img className='mx-auto' src={dis.image} alt="" />
                            </div>
                            <div className='pb-4 text-center'>
                                <h4 className='text-[16px] text-[#000000] leading-6 font-poppins font-medium '>{dis.name}</h4>
                                <h3 className='text-[24px] text-[#000000] leading-6 font-semibold font-poppins pt-4 pb-6'>${dis.price}</h3>
                                <a href="" className='text-[14px] text-white leading-6 font-poppins font-medium py-3 px-16 bg-[#000000] rounded-lg '>Buy Now</a>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </Container>
    </section>
  )
}

export default Discounts
