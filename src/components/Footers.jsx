import React from 'react'
import footer from '../assets/images/footer.png'
import Container from './utilities/Container'
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

const Footers = () => {
  return (
    <section className='py-26 bg-black'>
        <Container>
            <div className="flex">
                <div className="w-[40%] pr-26">
                    <img src={footer} alt="" />
                    <p className='pt-6 text-[13px] text-[#CFCFCF] font-poppins font-medium leading-[170%]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                </div>
                <div className="w-[30%]">
                    <h4 className='text-[16px] text-white font-poppins font-semibold pt-0 pb-2'>Services</h4>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>Bonus program</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>Gift cards</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>Credit and payment</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>Service contracts</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>Non-cash account</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block'>ayment</a>
                </div>
                <div className="w-[30%]">
                    <h4 className='text-[16px] text-white font-poppins font-semibold pt-0 pb-2'>Assistance to the buyer</h4>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>Find an order</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>Terms of delivery</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>Exchange and return of goods</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>Guarantee</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>Frequently asked questions</a>
                    <a href="" className='text-[14px] text-[#CFCFCF] leading-8 font-light font-poppins block '>erms of use of the site</a>
                </div>
            </div>
            <div className='flex pt-6 text-[16px] gap-9 text-white '>
                <IoLogoTwitter/>
                <FaFacebookF/>
                <IoLogoTiktok/>
                <FaInstagram/>
            </div>
        </Container>
    </section>
  )
}

export default Footers
