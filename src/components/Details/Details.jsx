import React, { useState ,useEffect } from 'react'
import Container from '../utilities/Container'
import { IoChevronForwardSharp } from "react-icons/io5";
import one1 from '../../assets/images/1.png'
import one2 from '../../assets/images/2.png'
import one3 from '../../assets/images/3.png'
import one4 from '../../assets/images/4.png'
import { ImMobile } from "react-icons/im";
import { BsCpu } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { TiCamera } from "react-icons/ti";
import { IoMdReverseCamera } from "react-icons/io";
import { PiBatteryVerticalHighBold } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { BsShop } from "react-icons/bs";
import { GoVerified } from "react-icons/go";



const Details = () => {
    const [privewImg,setPrivewImg] = useState(one1)
    const [imgIndex,setImgIndex] = useState(0)
    const gellary =[one1,one2,one3,one4]
    const hamdleClick = (img,index) => {
        setPrivewImg(img)
        setImgIndex(index)
    }
    const colors =[
        {id:1, name:"black",code:'#000000' ,img:one1},
        {id:2, name:"purple",code:'#781DBC',img:one2},
        {id:3, name:"red",code:'#E10000',img:one3},
        {id:4, name:"orange",code:'#E1B000',img:one4},
        {id:5, name:"silver",code:'#E8E8E8'}
    ]
    const [sizes,setZizes] = useState ([
        {id:1, name:"128GB",price:1300,discount:1500},
        {id:2, name:"256GB",price:1400,discount:1600},
        {id:3, name:"512GB",price:1500,discount:1700},
        {id:4, name:"1TB",price:1600,discount:1800},
    ])
    const [price,setPrice] = useState (0)
    const [discount, setDiscount] = useState(0)
    const [selectedSize, setSelectedSize] = useState(null)
    const handleprice = (id) => {
        const selectsize = sizes.find(item => item.id ===id);
        if (selectsize) {
            setPrice(selectsize.price);
            setDiscount(selectsize.discount);
            setSelectedSize(id);
        }
    }
    useEffect(() => {
        if (sizes.length > 0) {
            handleprice(sizes[0].id);
        }
    }, []);
    const [showMore,setShowMore] = useState (false)

    
  return (
    <>
        <section className='pb-20'>
            <Container>
                <div className="flex py-11 gap-4 ">
                    <div>
                        <a href="" className='flex items-center gap-4 text-[16px] text-[#A4A4A4] font-poppins font-medium leading-4 '>
                            <span>Home</span>
                            <IoChevronForwardSharp className='text-[24px]'/>
                        </a>
                    </div>
                    <div>
                        <a href="" className='flex items-center gap-4 text-[16px] text-[#A4A4A4] font-poppins font-medium leading-4 '>
                            <span>Catalog</span>
                            <IoChevronForwardSharp className='text-[24px]'/>
                        </a>
                    </div>
                    <div>
                        <a href="" className='flex items-center gap-4 text-[16px] text-[#A4A4A4] font-poppins font-medium leading-4 '>
                            <span>Smartphones</span>
                            <IoChevronForwardSharp className='text-[24px] '/>
                        </a>
                    </div>
                    <div>
                        <a href="" className='flex items-center gap-4 text-[16px] text-[#A4A4A4] font-poppins font-medium leading-4 '>
                            <span>Apple</span>
                            <IoChevronForwardSharp className='text-[24px] '/>
                        </a>
                    </div>
                    <div>
                        <span className='text-[16px] text-black font-poppins font-medium leding-4'>iPhone 14 Pro Max</span>
                    </div>
                </div>
                <div className="flex gap-12 pt-28">
                    <div className="w-1/2 flex gap-12 items-center">
                        <div className="w-[15%] flex flex-col gap-6">
                            {
                                gellary.map((gel,index) => (
                                    <img onClick={ () => hamdleClick (gel,index)} src={gel} className={` duration-300 w-18.5 h-23.5 cursor-pointer ${imgIndex === index ? "opacity-100 scale-130 " :'opacity-40'}`}  alt="" />
                                ))
                            }
                        </div>
                        <div className="w-[85%]">
                            <img src={privewImg} className=' w-[413px] h-[516px]'  alt="" />
                        </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            <h2 className='text-blck font-poppins text-[40px] font-bold leading-10 pb-6'>Apple iPhone 14 Pro Max</h2>
                            <h3 className='text-black font-poppins font-medium text-[32px] leading-12 flex gap-4 items-center pb-6'>${price} <del className='text-[#A0A0A0] font-poppins font-medium text-[24px] leading-8 '>${discount}</del></h3>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div>
                                <h3 className='text-[15px] text-black font-poppins font-normal leading-6'>Select color :</h3>
                            </div>
                            <div className='flex gap-2'>
                                {
                                    colors.map((col,index) =>(
                                        <div key={index} className='color'>
                                            <input type="radio" id={`color ${col.id}`} name='color' className='hidden' />
                                            <label htmlFor={`color ${col.id}`}>
                                                <span onClick={ () => hamdleClick (col.img,index)} title={col.name} style={{ backgroundColor: col.code}} className='w-8 h-8 rounded-full inline-block'></span>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="size pt-6">
                            <div className='flex gap-4'>
                                {
                                    sizes.map((size,index) =>(
                                        <div key={index} >
                                            <input checked={selectedSize === size.id}  onChange={() => handleprice(size.id) } type="radio" id={`size ${size.id}`} name='color' className='hidden' />
                                            <label htmlFor={`size ${size.id}`}>
                                                <span className='w-23.5 rounded-lg h-12 leading-12 inline-block border border-[#D5D5D5] text-center text-[#6F6F6F] text-[14px] font-poppins font-medium leading-4'>{size.name}</span>
                                            </label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <ImMobile className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>Screen size <span className='text-[#4E4E4E] pr-3'>6.7"</span></span>
                            </div>
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <BsCpu className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>CPU <span className='text-[#4E4E4E] pr-3'>Apple A16 Bionic</span></span>
                            </div>
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <CiMicrochip className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>Number of Cores<span className='text-[#4E4E4E] pr-3'>6</span></span>
                            </div>
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <TiCamera className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>Main camera  <span className='text-[#4E4E4E] pr-3'>48-12 -12 MP</span></span>
                            </div>
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <IoMdReverseCamera className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>Front-camera <span className='text-[#4E4E4E] pr-3'>12 MP</span></span>
                            </div>
                            <div className="p-4 bg-[#F4F4F4] rounded-lg flex gap-2 items-center">
                                <PiBatteryVerticalHighBold className='text-[24px] text-[#4E4E4E]'/>
                                <span className='text-[14px] text-[#A7A7A7] font-poppins font-normal leading-4'>Battery capacity <span className='text-[#4E4E4E] pr-3'>4323 mAh</span></span>
                            </div>
                        </div>
                        <div className='pt-6'>
                            <div  className=' relative'>
                                <p className={`${showMore ? 'max-h-[400px]': 'max-h-[75px]'} overflow-hidden transition-all duration-500 text-[14px] text-[#6C6C6C] font-poppins font-normal leading-6 `}>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque vitae repudiandae tempore iure a! Voluptatibus, neque suscipit consectetur eius quam ab. Voluptatem exercitationem suscipit nihil quasi nam fugiat possimus ex!</p>
                                {
                                    !showMore && <div className=' absolute bottom-5 left-0 w-full h-10 bg-linear-to-t from-white to-transparent'></div>
                                }

                            <a onClick={() => setShowMore (!showMore)} className='text-[14px] text-black underline font-poppins font-normal leading-6 '>{showMore ? 'less...':'more...'}</a>
                            </div>

                            <div className='pt-8 flex gap-4 justify-between'>
                                <button className='py-4 px-16.5 border border-[#000000] rounded-md text-[16px] text-black font-medium font-poppins leading-6 cursor-pointer'>Add to Wishlist</button>
                                <button className='py-4 px-16.5 border border-[#000000] rounded-md text-[16px] text-white font-medium font-poppins leading-6 cursor-pointer bg-black'>Add to Wishlist</button>
                            </div>
                        </div>
                        <div className="pt-8">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="flex gap-4 items-center">
                                    <div className="p-4 bg-[#F6F6F6] rounded-[12px]">
                                        <CiDeliveryTruck className='text-2xl text-[#797979]'/>
                                    </div>
                                    <div className="">
                                        <span className='text-[13px] text-[#717171] font-poppins font-medium leading-6'>Free Delivery</span>
                                        <h4 className='text-[13px] text-black font-poppins font-medium leading-6'>1-2 day</h4>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="p-4 bg-[#F6F6F6] rounded-[12px]">
                                        <BsShop className='text-2xl text-[#797979]'/>
                                    </div>
                                    <div className="">
                                        <span className='text-[13px] text-[#717171] font-poppins font-medium leading-6'>In Stock </span>
                                        <h4 className='text-[13px] text-black font-poppins font-medium leading-6'>Today </h4>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="p-4 bg-[#F6F6F6] rounded-[12px]">
                                        <GoVerified className='text-2xl text-[#797979]'/>
                                    </div>
                                    <div className="">
                                        <span className='text-[13px] text-[#717171] font-poppins font-medium leading-6'>Guaranteed</span>
                                        <h4 className='text-[13px] text-black font-poppins font-medium leading-6'>1 year</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
        <section>
            <Container>

            </Container>
        </section>
    </>
  )
}

export default Details
