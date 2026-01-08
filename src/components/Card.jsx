import React from 'react'
import Container from './utilities/Container.jsx'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";


const Card = () => {
    const Carts = [
        {id:1, name:'Apple iPhone 14 Pro Max 128Gb Deep Purple', pid:25139526913984, quntity:1, price:1399,img:card1},
        {id:2, name:'AirPods Max Silver', pid:53459358345, quntity:1, price:549,img:card2},
        {id:3, name:'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', pid:63632324, quntity:1, price:399,img:card3},
    ]
  return (
    <section className='py-18'>
        <Container>
            <div className="flex gap-12">
                <div className="w-1/2">
                    <h2 className='text-[24px] text-black font-semibold font-poppins leading-6 pb-10'>Shopping Cart</h2>
                    {
                        Carts.map(crt =>(
                            <div className="flex py-4 items-center pb-10 border-t border-[#A3A3A3]">
                                <div className=' w-[20%] pr-4'>
                                    <img src={crt.img} alt="" />
                                </div>
                                <div className=' w-[40%]'>
                                    <h3 className='text-[16px] text-black font-poppins font-medium leading-6'>{crt.name}</h3>
                                    <p className='text-[14px] text-black font-poppins font-normal leading-6 pt-2'>#{crt.pid}</p>
                                </div>
                                <div className="w-[20%] flex gap-2 items-center pr-4">
                                    <LuMinus className=' text-2xl text-black cursor-pointer'/>
                                    <span className='w-9.5 h-8 border border-[#D9D9D9] text-center leading-8 rounded-sm'>{crt.quntity}</span>
                                    <GoPlus  className=' text-2xl text-black cursor-pointer'/>
                                </div>
                                <div className='w-[20%] flex justify-between items-center'>
                                    <span className='text-[20px] text-black font-medium leading-8 font-poppins '>${crt.price} </span>
                                    <RiCloseLargeFill className='text-[18px] cursor-pointer'/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/2">humayun kobir</div>
            </div>
        </Container>
    </section>
  )
}

export default Card