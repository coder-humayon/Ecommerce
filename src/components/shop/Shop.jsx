import React, { useEffect, useState } from 'react'
import Container from '../utilities/Container'
import { IoChevronForwardSharp } from "react-icons/io5";
import PriceRange from '../utilities/PriceRange';
import { IoChevronDownSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoIosCheckmark } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import pr1 from '../../assets/images/pr1.png'
import pr2 from '../../assets/images/pr2.png'
import pr3 from '../../assets/images/pr3.png'
import pr4 from '../../assets/images/pr4.png'
import pr5 from '../../assets/images/pr5.png'
import pr6 from '../../assets/images/pr6.png'
import pr7 from '../../assets/images/pr7.png'
import pr8 from '../../assets/images/pr8.png'
import pr9 from '../../assets/images/pr9.png'
import ReactPaginate from "react-paginate";
import { VscChevronLeft } from "react-icons/vsc";
import { VscChevronRight } from "react-icons/vsc";
import { Link } from 'react-router';
import axios from 'axios';




const Shop = () => {
    const [PriceOpen, setPriceOpen] = useState (false)
    const [BrandOpen, setBrandOpen] = useState (false)
    const [BrandInput, setBrandInput] = useState ('')
    const [ramOpen,setRamOpen] = useState (false)
    const [ramInput,setRamInput] = useState ('')
    const [Open,setOpen] = useState (false)
    const [Sort,setSort] = useState ("By Rating")
    const brands = ['Apple','samsung','xiaomi', 'Poco','OPPO','Honor','Motorola','nokia','realme']
    const ram = ['16GB','32GB','64GB', '128GB','256GB','512GB']
    const searchBrand = brands.filter((item) => item.toLowerCase().includes(BrandInput.toLowerCase()));
    const searchRam = ram.filter((item) => item.toLowerCase().includes(ramInput.toLowerCase()));
    const SortList = ['By Rating', 'By Price',]

    const [Products,setPoducts] = useState ([])
    const [sortby,setSortby] = useState ('rating')
        useEffect(() =>{
        axios.get(`https://dummyjson.com/products?sortBy=${sortby}`)
        .then(res => setPoducts(res.data.products)
        )
    })

      const [currentPage, setCurrentPage] = useState(0);
    
      const itemsPerPage = 6;
      const pageCount = Math.ceil(Products.length / itemsPerPage);
    
      const offset = currentPage * itemsPerPage;
      const currentItems = Products.slice(offset, offset + itemsPerPage);
        const startItem = offset + 1;
        const endItem = offset + currentItems.length;
    
      const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        };
        


  return (
    <>
        <section className='pb-10'>
            <Container>
                <div className="flex items-center gap-4 py-11">
                    <div >
                        <a className='flex text-[16px] text-[#A4A4A4] leading-4 font-medium font-poppins items-center gap-4' href=""><span>Home</span> <IoChevronForwardSharp className='text-[24px]'/></a>
                    </div>
                    <div>
                        <a className='flex text-[16px] text-[#A4A4A4] leading-4 font-medium font-poppins items-center gap-4' href=""><span>Catalog</span> <IoChevronForwardSharp className='text-[24px]'/></a>
                    </div>
                    <div>
                        <span className=' text-[16px] text-[#000000] leading-4 font-medium font-poppins '>Smartphones</span>
                    </div>
                </div>
                <div className="flex gap-8 pt-6 items-baseline">
                    <div className="w-1/4 ">
                       <div className=''>
                            <h2 onClick={() => setPriceOpen ((prev) => !prev)} className='flex justify-between text-[18px] text-black leading-6 font-medium font-poppins items-center transition-transform duration-500 border-b border-[#B5B5B5] pb-4'>
                            <span>Price</span> 
                            <IoChevronDownSharp className={`text-[24px] cursor-pointer transition-transform duration-500 ${PriceOpen ? 'rotate-180': 'rotate-0'}`}/></h2>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out pt-6 ${PriceOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]" }`}>
                                <div className="overflow-hidden">
                                    <PriceRange />
                                </div>
                            </div>
                       </div>
                       <div className=' '>
                        <h2 onClick={() => setBrandOpen ((prev) => !prev)} className='flex justify-between text-[18px] text-black leading-6 font-medium font-poppins items-center transition-transform duration-500  border-b border-[#B5B5B5] pb-3'>
                        <span>Brand</span>
                        <IoChevronDownSharp className={`text-[24px] cursor-pointer transition-transform duration-500 ${BrandOpen ? 'rotate-180': 'rotate-0'}`}/></h2>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out pt-6 ${BrandOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                                <div className="overflow-hidden custom-scrollbar overflow-y-auto max-h-[300px]">
                                    <div className=' relative'>
                                        <input onChange={(e) => setBrandInput(e.target.value)}
                                        type="text"
                                        placeholder='Search'
                                        className='py-3 ps-12 pr-4 outline-0 border-0 bg-[#F5F5F5] rounded-lg text-[14px] leading-[18px] text-[#656565] font-poppins font-medium w-full' />
                                        <CiSearch className=' absolute top-1/2 left-4 -translate-y-1/2 text-[24px] text-[#656565]'/>
                                    </div>
                                        {
                                            searchBrand.map((br, index)  => (
                                                <div className='pt-4'>
                                                <input 
                                                id={`brand${index}`} 
                                                type="radio" name='brand' className='hidden' />
                                                <label htmlFor={`brand${index}`} className=' flex gap-2 items-center text-[15px] text-black font-poppins font-medium leading-6 cursor-pointer'>
                                                    <span className='w-4 h-4 rounded-[3px] border border-[#D3D3D3] inline-block '><IoIosCheckmark className='text-white'/></span>
                                                    {br}
                                                </label>
                                                </div>
                                            ))
                                        }
                                </div>
                            </div>
                       </div>
                       <div className=' '>
                        <h2 onClick={() => setRamOpen ((prev) => !prev)} className='flex justify-between text-[18px] text-black leading-6 font-medium font-poppins items-center transition-transform duration-500  border-b border-[#B5B5B5] pb-3'>
                        <span>Built-in memory</span>
                        <IoChevronDownSharp className={`text-[24px] cursor-pointer transition-transform duration-500 ${ramOpen ? 'rotate-180': 'rotate-0'}`}/></h2>
                            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out pt-6 ${ramOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                <div className="overflow-hidden custom-scrollbar overflow-y-auto max-h-[200px]">
                                    <div className=' relative'>
                                        <input onChange={(e) => setRamInput(e.target.value)}
                                        type="text"
                                        placeholder='Search'
                                        className='py-3 ps-12 pr-4 outline-0 border-0 bg-[#F5F5F5] rounded-lg text-[14px] leading-[18px] text-[#656565] font-poppins font-medium w-full' />
                                        <CiSearch className=' absolute top-1/2 left-4 -translate-y-1/2 text-[24px] text-[#656565]'/>
                                    </div>
                                        {
                                            searchRam.map((ram, index)  => (
                                                <div className='pt-4'>
                                                <input 
                                                id={`ram${index}`} 
                                                type="radio" name='brand' className='hidden' />
                                                <label htmlFor={`ram${index}`} className=' flex gap-2 items-center text-[15px] text-black font-poppins font-medium leading-6 cursor-pointer'>
                                                    <span className='w-4 h-4 rounded-[3px] border border-[#D3D3D3] inline-block '><IoIosCheckmark className='text-white'/></span>
                                                    {ram}
                                                </label>
                                                </div>
                                            ))
                                        }
                                    
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="w-3/4">
                        <div className="flex justify-between items-baseline">
                            <div className="">
                                <p className='text-[16px] text-[#6C6C6C] leading-6 font-poppins font-medium'>Selected Products: <span className='text-[20px] text-[#000000]'>{startItem}–{endItem} of {Products.length}</span></p>
                            </div>
                            <div className="w-[256px] relative">
                                <button onClick={() => setOpen (!Open)} className='flex w-full justify-between items-center border border-[#D4D4D4] py-3 px-4 rounded-lg cursor-pointer'>
                                    <span className='text-[14px
                                     text-black font-normal font-poppins leading-4'>{Sort}</span>
                                    <IoChevronDownSharp className={`text-[24px] text-[#9F9F9F] ${Open ? 'rotate-180':'rotate-0'}`}/>
                                </button>
                                {
                                    Open && (
                                        <ul className=' flex flex-col gap-2 py-3  bg-[#ddddddfa] rounded-lg absolute top-12 left-0 w-full '>
                                            {
                                                SortList.map((item, index )=> (
                                                    <li onClick={() => { 
                                                        setSort(item);
                                                        setOpen(false);
                                                        sortby=='rating' ? setSortby('price'):setSortby('rating')
                                                    }} className={` ${index !== SortList.length -1?'border-b border-[#b3a2a2] pb-2  ':''} px-4 hover:bg-[#c6c6c6] cursor-pointer`}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                            </div>
                        </div> 
                        <div className='grid grid-cols-3 gap-4 pt-6'>
                            {
                                currentItems.map((prod,index) =>(
                                    <div key={index} className='py-6 px-4 bg-[#F6F6F6] rounded-[9px]'>
                                        <div className='pb-4'>
                                           <CiHeart className='ms-auto text-[32px] text-[#909090]'/>
                                        </div>
                                        <div>
                                            <Link to={`/product/details/${prod.id}`}><img src={prod.thumbnail} alt="" className='mx-auto' /></Link>
                                        </div>
                                        <div className='text-center'>
                                            <p className='text-[16px] text-[#000000] font-poppins font-medium leading-6 py-4'><Link to={`/product/details/${prod.id}`}>{prod.title}</Link></p>
                                            <h3 className='text-black font-poppins font-semibold text-[24px] leding-6 pb-6'>$ <Link to="/product/detailsto={`/product/details/${prod.id}`}">{prod.price}</Link> </h3>
                                            <Link to={`/product/details/${prod.id}`}><button className='text-[14px] text-white font-poppins font-medium leading-6 py-3 px-16 bg-black rounded-[8px] cursor-pointer'> Buy Now </button></Link>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                        <div>
                            <div className="flex justify-center mt-10">
                                <ReactPaginate
                                    previousLabel={<VscChevronLeft />}
                                    nextLabel={<VscChevronRight />}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={1}
                                    pageRangeDisplayed={2}
                                    onPageChange={handlePageClick}
                                    containerClassName={"flex gap-2 items-center"}
                                    pageClassName={
                                    "px-3 py-1 bg-[#F6F6F6] rounded-[5px] cursor-pointer font-popins font-medium text-[16px] text-black leading-6"
                                    }
                                    activeClassName={"bg-black text-white"}
                                    previousClassName={
                                    "text-[24px] text-black cursor-pointer pr-4"
                                    }
                                    nextClassName={"text-[24px] text-black cursor-pointer ps-4"}
                                    disabledClassName={"opacity-50 cursor-not-allowed"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Shop
