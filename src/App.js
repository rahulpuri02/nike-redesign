import React from 'react'
import { Hero, Sales, FlexContent, TopStories, Footer, Navbar, Cart } from './components'
import { heroapi, popularsales, topratedsales, highlight, sneaker, story, footerAPI } from './data/data'

function App() {
  return (
   <>
    <Navbar />
    <Cart />
   <main className='flex flex-col gap-16 sm:gap-13 relative overflow-x-hidden'>
    <Hero heroapi={heroapi} />
    <Sales endpoint={popularsales} ifExists />
    <FlexContent endpoint2={highlight} ifExists />
    <Sales endpoint={topratedsales} />
    <FlexContent endpoint2={sneaker}/>
    <TopStories stories={story} />
    <Footer footerAPI ={footerAPI} />
   </main>
   </>
  )
}

export default App