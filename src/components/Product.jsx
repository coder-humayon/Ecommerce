import React from 'react'
import Container from './utilities/Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { CiHeart } from "react-icons/ci";
import product1 from '../../src/assets/images/product1.png'
import product2 from '../../src/assets/images/product2.png'
import product3 from '../../src/assets/images/product3.png'
import product4 from '../../src/assets/images/product4.png'
import product5 from '../../src/assets/images/product5.png'
import product6 from '../../src/assets/images/product6.png'
import product7 from '../../src/assets/images/product7.png'
import product8 from '../../src/assets/images/product8.png'

const Product = () => {
    const newarrival = [
        {id:1,name:"Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",price:900, image:product1},
        {id:2,name:"Blackmagic Pocket Cinema Camera 6k",price:2535, image:product2},
        {id:3,name:"Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",price:399, image:product3},
        {id:4,name:"AirPods Max Silver",price:549, image:product4},
        {id:5,name:"Samsung Galaxy Watch6 Classic 47mm Black",price:369, image:product5},
        {id:6,name:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",price:1799, image:product6},
        {id:7,name:"Galaxy Buds FE Graphite",price:99.99, image:product7},
        {id:8,name:"Apple iPad 9 10.2  64GB Wi-Fi Silver (MK2L3) 2021",price:398, image:product8},
    ]
    const bestseller = [
        {id:3,name:"Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",price:399, image:product3},
        {id:7,name:"Galaxy Buds FE Graphite",price:99.99, image:product7},
        {id:8,name:"Apple iPad 9 10.2  64GB Wi-Fi Silver (MK2L3) 2021",price:398, image:product8},
    ]
    const featured = [
        {id:7,name:"Galaxy Buds FE Graphite",price:99.99, image:product7},
        {id:6,name:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",price:1799, image:product6},
        {id:3,name:"Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",price:399, image:product3},
        {id:2,name:"Blackmagic Pocket Cinema Camera 6k",price:2535, image:product2},
        {id:5,name:"Samsung Galaxy Watch6 Classic 47mm Black",price:369, image:product5},
        {id:8,name:"Apple iPad 9 10.2  64GB Wi-Fi Silver (MK2L3) 2021",price:398, image:product8},
    ]
  return (
    <section className='py-14'>
        <Container>
            <div>
                 <Tabs selectedTabClassName="active">
                    <TabList className="flex pb-8 gap-8">
                    <Tab ><button className=' text-[18px] text-[#8B8B8B]  font-poppins font-medium leading-8 cursor-pointer'>New Arrival</button></Tab>
                    <Tab ><button className=' text-[18px] text-[#8B8B8B]  font-poppins font-medium leading-8 cursor-pointer'>Bestseller</button></Tab>
                    <Tab ><button className=' text-[18px] text-[#8B8B8B]  font-poppins font-medium leading-8 cursor-pointer'>Featured Products</button></Tab>
                    </TabList>

                    <TabPanel className="grid grid-cols-4 gap-4">
                            {
                            newarrival.map(newarr => (
                                <div className='px-4 py-6 bg-[#F6F6F6] rounded-[9px]'>
                                    <div className='pb-4'>
                                        <CiHeart className='ms-auto text-[32px] text-[#909090]' />
                                    </div>
                                    <div className='pb-4'>
                                        <img className='mx-auto' src={newarr.image} alt="" />
                                    </div>
                                    <div className='text-center pb-6'>
                                        <h4 className='text-[16px] text-[#000000] font-poppins font-medium leading-6 pb-4'>{newarr.name}</h4>
                                        <h3 className='text-[24px] text-[#000000] font-poppins font-semibold leading-6  pb-9'>${newarr.price}</h3>
                                        <a className='text-[16px] text-[#FFFFFF] font-poppins font-medium leading-6 py-3 px-16 bg-black rounded-[8px]' href="">Buy Now</a>
                                    </div>
                                </div>
                             ))
                            }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-4 gap-4">
                            {
                            bestseller.map(best => (
                                <div className='px-4 py-6 bg-[#F6F6F6] rounded-[9px]'>
                                    <div className='pb-4'>
                                        <CiHeart className='ms-auto text-[32px] text-[#909090]' />
                                    </div>
                                    <div className='pb-4'>
                                        <img className='mx-auto' src={best.image} alt="" />
                                    </div>
                                    <div className='text-center pb-6'>
                                        <h4 className='text-[16px] text-[#000000] font-poppins font-medium leading-6 pb-4'>{best.name}</h4>
                                        <h3 className='text-[24px] text-[#000000] font-poppins font-semibold leading-6  pb-9'>${best.price}</h3>
                                        <a className='text-[16px] text-[#FFFFFF] font-poppins font-medium leading-6 py-3 px-16 bg-black rounded-[8px]' href="">Buy Now</a>
                                    </div>
                                </div>
                             ))
                            }
                    </TabPanel>
                    <TabPanel className="grid grid-cols-4 gap-4">
                            {
                            featured.map(feature => (
                                <div className='px-4 py-6 bg-[#F6F6F6] rounded-[9px]'>
                                    <div className='pb-4'>
                                        <CiHeart className='ms-auto text-[32px] text-[#909090]' />
                                    </div>
                                    <div className='pb-4'>
                                        <img className='mx-auto' src={feature.image} alt="" />
                                    </div>
                                    <div className='text-center pb-6'>
                                        <h4 className='text-[16px] text-[#000000] font-poppins font-medium leading-6 pb-4'>{feature.name}</h4>
                                        <h3 className='text-[24px] text-[#000000] font-poppins font-semibold leading-6  pb-9'>${feature.price}</h3>
                                        <a className='text-[16px] text-[#FFFFFF] font-poppins font-medium leading-6 py-3 px-16 bg-black rounded-[8px]' href="">Buy Now</a>
                                    </div>
                                </div>
                             ))
                            }
                    </TabPanel>
                </Tabs>
            </div>
        </Container>
    </section>
  )
}

export default Product
