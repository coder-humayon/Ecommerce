import React from 'react'
import Container from '../utilities/Container'
import logo from '../../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { Link, Links, } from 'react-router';



const Navbar = () => {
  return (
    <nav className=' items-center '>
        <Container>
            <div className="flex gap-8 items-center justify-between">
                <div className="">
                    <a href=""><img src={logo} alt="" /></a>
                </div>
                <div className='w-[30%] relative'>
                    <input type="text" className=' w-full text-[14px] leading-[18px] text-[#656565] p-4 ps-12 bg-[#F5F5F5] rounded-lg outline-0' placeholder='Search' />
                    <CiSearch className=' absolute top-[50%] -translate-y-[50%] left-4 text-[24px] text-[#989898]'/>
                </div>
                <div className='menu'>
                    <ul className='flex gap-13 '>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="">About</a></li>
                        <li><Link to="shop">Shop</Link></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
                <div className='[&>dev]: text-[24px] [&>dev]:text-black'>
                    <div className='flex gap-6'>
                        <IoIosHeartEmpty />
                        <Link to='/card'><IoCartOutline /></Link>
                        <Link to="/register">
                            <LuUser />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
        <div className='py-2 bg-[#2E2E2E]'>
            <Container>
                <div className="flex catagory justify-between">
                    <a href="" className='flex items-center gap-2'>
                        <CiMobile4 className='text-[24px]' /> <span>Phones</span>
                    </a>
                    <a href="" className='flex items-center gap-2'>
                        <HiOutlineComputerDesktop className='text-[24px]' /> <span>Computers</span>
                    </a>
                    <a href="" className='flex items-center gap-2'>
                        <BsSmartwatch className='text-[24px]' /> <span>Smart Watches</span>
                    </a>
                    <a href="" className='flex items-center gap-2'>
                        <CiCamera className='text-[24px]' /> <span>Cameras</span>
                    </a>
                    <a href="" className='flex items-center gap-2'>
                        <MdOutlineHeadphones className='text-[24px]' /> <span>Headphones</span>
                    </a>
                    <a href="" className='flex items-center gap-2'>
                        <FaGamepad className='text-[24px]' /> <span>Gaming</span>
                    </a>
                </div>
            </Container>
        </div>
    </nav>
  )
}

export default Navbar
