import React from 'react'
import ShopButton from './utilities/ShopButton'
import popular1 from '../../src/assets/images/popular1.png'
import popular2 from '../../src/assets/images/popular2.png'
import popular3 from '../../src/assets/images/popular3.png'
import popular4 from '../../src/assets/images/popular4.png'

const Popular = () => {
    const populars = [
        {id:1, name:"Popular Products", prescription:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",image:popular2},
        {id:2, name:"Popular Products", prescription:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",image:popular3},
        {id:3, name:"Popular Products", prescription:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",image:popular2},
        {id:4, name:"Popular Products", prescription:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",image:popular3}
    ]
  return (
    <>
      <section className='pb-16'>
        <div className="flex">
            {
                populars.map(pop => {
                  let bgcolor = ""
                  let text = ""
                  if (pop.id ==1) {
                     bgcolor ="light"
                  }
                  else  if (pop.id ==2) {
                     bgcolor ="#F9F9F9"
                  }
                  else  if (pop.id ==3) {
                     bgcolor ="#EAEAEA"
                  }
                  else  if (pop.id ==4) {
                     bgcolor ="#2C2C2C"
                     text="white"
                  }
                  return(
                    <div className="w-1/4 overflow-hidden" style={{backgroundColor:bgcolor}}>
                        <img className={pop.id === 4 ? "ms-auto" : "mx-auto"} src={pop.image} alt="" />
                        <div className='px-8 pb-12'>
                            <h3 style={{color:text}} className='text-[28px] text-[#000000] font-poppins font-light leading-12 pb-4 pt-14'>{pop.name}</h3>
                            <p className='text-[12px] text-[#909090] font-poppins font-light leading-6 pb-8'>{pop.prescription}</p>
                            <ShopButton className={`text-${text}`}/>
                        </div>
                    </div>
                  )
                }
                )
            }
        </div>
      </section>
    </>
  )
}

export default Popular
