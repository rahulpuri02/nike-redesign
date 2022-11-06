import React from 'react'
import { Hero, Sales } from './components'
import { heroapi, popularsales, topratedsales,  } from './data/data'

function App() {
  return (
   <>
   <main>
    <Hero heroapi={heroapi} />
    <Sales endpoint={popularsales} />
    <Sales endpoint={topratedsales} />
   </main>
   </>
  )
}

export default App