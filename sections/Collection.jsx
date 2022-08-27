import React, { useContext, useEffect, useState } from 'react'
import GroupHeading from '../components/GroupHeading'
import {Swiper,SwiperSlide} from "swiper/react"
import { Navigation } from 'swiper'
import Card from '../components/Card'
import dataKoleksi from "../data/koleksi.json"

import "swiper/css"
import "swiper/css/navigation"
import { DataContext } from '../pages'

export default function Collection() {
  const {headingKoleksi,subHeadingKoleksi} = useContext(DataContext);

  const [data,setData] = useState([]);
  
  useEffect(()=>{
    setData(dataKoleksi);
  },[]);

  return (
    <section className='mt-20 lg:mt-44 bg-white'>
        <div className="container mx-auto">
            <GroupHeading
            direction='right'
            heading={headingKoleksi}
            sub={subHeadingKoleksi}/>
            <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl : ".cusEl",
              nextEl : ".nextEl"
            }}
            breakpoints={{
              768 : {
                slidesPerView : 2
              },
              992 : {
                slidesPerView : 3
              },
            }}
            className='py-10 lg:mt-16'
            slidesPerView={1}
            spaceBetween={10}>
            
            {data.map((e,i)=>(
              <SwiperSlide key={i}>
                <Card
                type="koleksi"
                pic={e.img}
                name={e.name}
                subName={e.subName}/>
              </SwiperSlide>
            ))}
              <div className="w-full flex justify-center lg:mt-10 mt-5">
                <button className='cusEl lg:mx-5 mx-3 text-3xl text-green' type='button'>&larr;</button>
                <button className='nextEl lg:mx-5 mx-3 text-3xl text-green' type='button'>&rarr;</button>
              </div>
            </Swiper>
        </div>
    </section>
  )
}
