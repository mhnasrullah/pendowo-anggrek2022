import React from 'react'
import Head from 'next/head'
import Collection from '../sections/Collection'
import Faq from '../sections/Faq'
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'
import Testi from '../sections/Testi'
import data from "../data/home.json"

export const DataContext = React.createContext();

export default function Home() {
  return (
    <DataContext.Provider value={data}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>
     <Navbar/>
     <Header/>
     <Testi/>
     <Collection/>
     <Faq/>
    </DataContext.Provider>
  )
}
