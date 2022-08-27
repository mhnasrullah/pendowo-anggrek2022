import React from 'react'
import Name from './Name'
import Paragraph from './Paragraph'

export default function Card({children,name,src,type,pic,subName}) {
  const testi = (
    <div className='bg-white p-5 mb-3 shadow-lg relative'>
        <img
        src="/assets/icons/tiktik.svg"
        className='absolute -mt-8' />
        <Paragraph>{children}</Paragraph>
        <Name className="mt-3">{name}</Name>
        <p className='text-green opacity-50 text-sm'>{src}</p>
    </div>
  );
  const koleksi = (
    <>
      <img src={pic} className="w-full h-80 object-cover object-center lg:h-[400px]"/>
      <Name className="mt-3">{name}</Name>
      <Paragraph className="opacity-50">{subName}</Paragraph>
    </>
  );

  if(type === "testi"){
    return testi;
  }
  if(type === "koleksi"){
    return koleksi;
  }
}
