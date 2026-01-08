import React from 'react'
import summer1 from '../assets/images/summer2.png'
import summer2 from '../assets/images/summer1.png'
import ShopButton from "./utilities/ShopButton";

const Summersale = () => {
  return (
    <>
     <section className=' bg-linear-to-r from-[rgba(46,46,46,0.83)] to-[#000000]'>
        <div className="flex items-center">
            <div className="[w-40%]">
            <img src={summer1} alt="" />
            </div>
            <div className="[w-35%] ml-[-100px] text-center">
                <h2 className='text-[44px] text-[#FFFFFF] font-poppins leading-11 font-light'>Big Summer Sale</h2>
                <p className='text-[13px] text-[#787878] font-poppins leading-8 pb-10 font-normL'>Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <ShopButton className='text-white'/>
            </div>
            <div className="[w-25%] ms-auto">
                <img src={summer2} alt="" />
            </div>
        </div>
     </section>
    </>
  )
}

export default Summersale
