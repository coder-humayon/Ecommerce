import React, { useState } from 'react'
import Container from './utilities/Container.jsx'
import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";


const Card = () => {
    const [Carts,setCarts] = useState ([
        {id:1, name:'Apple iPhone 14 Pro Max 128Gb Deep Purple', pid:25139526913984, quntity:1, price:1399,img:card1,stock:5},
        {id:2, name:'AirPods Max Silver', pid:53459358345, quntity:1, price:549,img:card2,stock:7},
        {id:3, name:'Apple Watch Series 9 GPS 41mm Starlight Aluminium ', pid:63632324, quntity:1, price:399,img:card3 ,stock:5},
    ])
    const removeCart = (id) => {
        setCarts (prev => prev.filter(item => item.id !==id))
    }
    const increment = (id) => {
        setCarts (prev => prev.map(item => item.id ===id && item.quntity < item.stock? {...item,quntity : item.quntity+1} :item))
    }
    const decrement = (id) => {
        setCarts (prev => prev.map(item => item.id ===id && item.quntity > 1 ? {...item,quntity : item.quntity-1} :item))
    }
    let subtotal = 0
      Carts.map(item => {
        subtotal += item.price*item.quntity
      })
    const [tax,setText] = useState (50)
    const [Shiping,setShiping] = useState (29)
    const total = subtotal+tax+Shiping

  return (
    <section className='py-18'>
        <Container>
            <div className="flex gap-12">
                <div className="w-1/2">
                    <h2 className='text-[24px] text-black font-semibold font-poppins leading-6 pb-10'>Shopping Cart</h2>
                    {
                        Carts.map((crt, index)=>(
                            <div className={`flex pt-12 items-center pb-13  ${index==0 ? '':'border-t border-[#A3A3A3]'}`}>
                                <div className=' w-[20%] pr-4'>
                                    <img src={crt.img} alt="" />
                                </div>
                                <div className=' w-[40%]'>
                                    <h3 className='text-[16px] text-black font-poppins font-medium leading-6'>{crt.name}</h3>
                                    <p className='text-[14px] text-black font-poppins font-normal leading-6 pt-2'>#{crt.pid}</p>
                                    <span>stock-{crt.stock}</span>
                                </div>
                                <div className="w-[20%] flex gap-2 items-center pr-4">
                                    <LuMinus onClick={() => decrement(crt.id)} className=' text-2xl text-black cursor-pointer'/>
                                    <span className='w-9.5 h-8 border border-[#D9D9D9] text-center leading-8 rounded-sm'>{crt.quntity}</span>
                                    <GoPlus onClick={() => increment(crt.id)} className=' text-2xl text-black cursor-pointer'/>
                                </div>
                                <div className='w-[20%] flex justify-between items-center'>
                                    <span className='text-[20px] text-black font-medium leading-8 font-poppins '>${crt.price*crt.quntity} </span>
                                    <RiCloseLargeFill onClick={() => removeCart(crt.id) } className='text-[18px] cursor-pointer'/>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-1/2 py-14 px-16 border border-[#EBEBEB] rounded-[10px]">
                    <h2 className='text-[20px] text-[#111111] font-poppins font-bold leading-4 pb-10'>Order Summary</h2>
                    <form  className='relative'>
                        <div className='flex flex-col gap-2 pb-6'>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Discount code / Promo code </label>
                            <input className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="text" placeholder='Code' />
                        </div>
                        <div className='flex flex-col gap-2  '>
                            <label className='text-[14px] text-[#545454] font-poppins font-medium leading-4pb-2'>Your bonus card number</label>
                            <input className='w-full p-4 border border-[#9F9F9F] rounded-lg outline-0 text-[#979797] text-[14px] leading-6' type="text" placeholder='Enter Card Number' />
                        </div>
                        <button className='text-[12px] text-black font-medium font-poppins leading-4 border border-black rounded-md w-19 h-8 absolute bottom-3 right-4 cursor-pointer'>Apply</button>
                    </form>
                    <div className='pt-6'>
                        <h2 className='flex justify-between text-[16px] text-black font-poppins font-medium leading-6 pb-5'>Subtotal <span>${subtotal}</span></h2>
                        <h2 className='flex justify-between text-[16px] text-[#545454] font-poppins font-normal leading-6 pb-5'>Estimated Tax <span className=' text-black font-poppins font-medium'>${tax}</span></h2>
                        <h2 className='flex justify-between text-[16px] text-[#545454] font-poppins font-normal leading-6 pb-5'>Estimated shipping & Handling <span className=' text-black font-poppins font-medium'>${Shiping}</span></h2>
                        <h2 className='flex justify-between text-[16px] text-black font-poppins font-medium leading-6 '>total <span>${total}</span></h2>
                        <div className='pt-12 '>
                            <button className='w-full text-center py-4 text-white rounded-md bg-black text-[16px] font-medium font-poppins cursor-pointer'>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Card