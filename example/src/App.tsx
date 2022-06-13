import React from 'react'

import {
  TranslateX,
  TranslateY,
  useScrollPercent
} from 'react-onscroll-animate'
import 'react-onscroll-animate/dist/index.css'

const App = () => {
  const scrollPercent = useScrollPercent()

  return (
    <div style={{ height: '300vh', width: '100vw', backgroundColor: 'grey' }}>
      <h1 style={{ position: 'fixed', marginLeft: '50%' }}>{scrollPercent}</h1>
      <TranslateX {...{ startAndEnd: [0, 20], x: 200 }}>
        <div>FadeIn effect from 50% to 100%</div>
      </TranslateX>
      <TranslateY {...{ startAndEnd: [0, 20], y: 100 }}>
        <div style={{ marginTop: '20%' }}>FadeOut effecto from 50% to 100%</div>
      </TranslateY>
    </div>
  )
}

export default App
