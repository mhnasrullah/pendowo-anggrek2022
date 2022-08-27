import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'
import { likeConRight,likeConLeft } from '../constants/Style'
import Paragraph from '../components/Paragraph'
import { DataContext } from '../pages'

export default function Header() {

  const {headingMain,subHeadingMain,imgHeaderMain,imgHeaderSecond} = React.useContext(DataContext);
  
  return (
    <section className='bg-white'>
      <div className="flex flex-col lg:flex-row">
        <img src={imgHeaderMain} className='h-[216px] md:h-[400px] lg:h-[450px] lg:w-10/12 object-cover object-center'/>
        <div className={`${likeConRight} -mt-14 z-[2] bg-white lg:bg-trans   relative py-8 px-5 lg:mt-8`}>
          <Heading
          type="st">{headingMain}</Heading>
        </div>
      </div>
      <div className='lg:flex lg:w-full'>
        <div className={`${likeConLeft} relative bg-white py-8 px-5 lg:w-7/12`}>
          <Paragraph className="mb-5 lg:w-10/12">{subHeadingMain}</Paragraph>
          <Link href="/kontak" >
            <a className='bg-brown py-2 px-4 text-white lg:h-fit'>Kontak Kami</a>
          </Link>
          <hr className='hidden lg:block mt-10 border-light-green'/>
        </div>
        <img src={imgHeaderSecond} className='object-center object-cover w-full h-[200px] lg:h-[500px] -mt-14 lg:w-5/12 mr-auto'/>
      </div>
    </section>
  )
}