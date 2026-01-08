import React from 'react'
import macbook1 from '../../src/assets/images/macbook1.png'
import macbook2 from '../../src/assets/images/macbook2.png'
import macbook3 from '../../src/assets/images/macbook3.png'
import macbook4 from '../../src/assets/images/macbook4.png'
import ShopButton from './utilities/ShopButton'
const Macbook = () => {
  return (
    <section>
        <div className="flex ">
            <div className="w-[50%]">
                <div className='flex items-center'>
                    <div className="w-1/2">
                        <img src={macbook1} alt="" />
                    </div>
                    <div className="w-1/2">
                        <h3 className='text-[45px] text-[#000000] font-medium font-poppins leading-[45px] pb-4'>Playstation 5</h3>
                        <p className='text-[14px] text-[#909090] font-poppins font-normal leading-6'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className='w-1/2 flex bg-[#EDEDED] items-center'>
                        <div>
                            <img src={macbook2} alt="" />
                        </div>
                        <div className='px-12'>
                            <h3 className='text-[24px] text-[#000000] font-medium font-poppins leading-10'>Apple </h3>
                            <h3 className='text-[24px] text-[#000000] font-medium font-poppins leading-10 '>AirPods <strong>Max</strong></h3> 
                            <p className='text-[14px] text-[#909090] font-poppins font-normal leading-6 pr-8'>Computational audio. Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className='w-1/2 flex  bg-[#353535] items-center'>
                        <div className="w-1/2">
                            <img src={macbook3} alt=""/>
                        </div>
                        <div className="w-1/2 pr-5">
                            <h3 className='text-[24px] text-[#FFFFFF] font-medium font-poppins leading-10'>Apple </h3>
                            <h3 className='text-[24px] text-[#FFFFFF] font-medium font-poppins leading-10 '> Vision <strong>Pro</strong></h3> 
                            <p className='text-[10px] text-[#909090] font-poppins font-normal leading-6 '>An immersive way to experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] flex bg-[#EDEDED] items-center">
                <div className='w-[70%] ps-14'>
                    <p className='text-[#000000] text-[60px] font-thin leading-14 font-poppins'>Macbook <span className='font-bold'>Air</span></p>
                    <p className='text-[14px] text-[#909090] font-poppins font-normal leading-6 pb-8 pt-4'>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    <ShopButton></ShopButton>
                </div>
                <div className='w-[30%]'>
                    <img src={macbook4}alt="" className='' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Macbook
