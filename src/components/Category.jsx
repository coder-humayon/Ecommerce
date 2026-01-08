import React, { useRef } from 'react'
import Container from './utilities/Container'
import { CiMobile4 } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { LiaHeadphonesSolid } from "react-icons/lia";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SlCamera } from "react-icons/sl";
import { MdVideogameAsset } from "react-icons/md";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoChevronBackSharp } from "react-icons/io5";
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';

const Category = () => {
    const Categoris = [
        {id:1, name:'Phones', icon:<CiMobile4/>},
        {id:2, name:'Smart Watches', icon:<BsSmartwatch/>},
        {id:3, name:'Cameras', icon:<SlCamera/>},
        {id:4, name:'Headphones', icon:<LiaHeadphonesSolid/>},
        {id:5, name:'Computers', icon:<HiOutlineComputerDesktop/>},
        {id:6, name:'Gaming', icon:<MdVideogameAsset/>},
        {id:7, name:'Phones', icon:<CiMobile4/>},
        {id:7, name:'Phones', icon:<CiMobile4/>},
        {id:7, name:'Phones', icon:<CiMobile4/>},
        {id:7, name:'Phones', icon:<CiMobile4/>},
    ]
    const swiperRef = useRef(null)

  return (
    <>
      <section className='py-20 bg-[#FAFAFA]'>
        <Container>
            <div className="flex pb-8 justify-between items-center">
                <div>
                    <h2 className='text-[24px] text-[#000000] font-poppins leading-8 font-medium'>Browse By Category</h2>
                </div>
                <div className='flex gap-4'>
                    <IoChevronBackSharp onClick={() => swiperRef.current?.slidePrev()} className='text-[32px] text-[#000000] cursor-pointer'/>
                    <IoChevronForwardSharp onClick={() => swiperRef.current?.slideNext()} className='text-[32px] text-[#000000] cursor-pointer'/>
                </div>
            </div>
                <div className="">
                    <Swiper
                    spaceBetween={32}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                   >
                    {
                        Categoris.map(category => (
                            <SwiperSlide>
                            <div className=" py-6 bg-[#EDEDED] rounded-[15px] text-center">
                                <div className='text-[48px] text-[#000000] flex justify-center'>
                                    {category.icon}
                                </div>
                                <h3 className='pt-2  text-[16px] text-[#000000] font-poppins leading-6 font-medium'>{category.name}</h3>
                            </div>
                            </SwiperSlide>
                        ))
                    }
                    </Swiper>
                </div>
        </Container>
      </section>
    </>
  )
}

export default Category
