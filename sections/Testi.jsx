import React,{useEffect, useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import Card from '../components/Card'
import dataTesti from "../data/testimoni.json"

import 'swiper/css'
import 'swiper/css/pagination'
import GroupHeading from '../components/GroupHeading'

export default function Testi() {

  const [data,setData] = useState([]);

  useEffect(()=>{
    setData(dataTesti);
  },[])
  return (
    <section className='mt-20 lg:-mt-[100px] bg-white'>
        <div className="container mx-auto">
          <GroupHeading
          heading="Apa yang mereka katakan?"
          sub="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptatem optio dolor cum quo facere exercitationem eveniet"
          />
          <Swiper
          modules={[Pagination]}
          spaceBetween = {10}
          pagination={{
            type : 'progressbar'
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
          slidesPerView={1}>
            {data.map((e,i)=>(
              <SwiperSlide key={i}>
                <Card
                type="testi"
                src={`sumber dari ${e.src}`}
                name={e.by}
                >{e.text}</Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  )
}
