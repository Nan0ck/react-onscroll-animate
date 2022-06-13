import React from 'react'

import { Fade, Show, useScrollPercent } from 'react-onscroll-animate'
import 'react-onscroll-animate/dist/index.css'

const App = () => {
  const scrollPercent = useScrollPercent()

  return (
    <div style={{ height: '300vh', width: '100vw', backgroundColor: 'grey' }}>
      <h1 style={{ position: 'fixed', marginLeft: '50%' }}>{scrollPercent}</h1>
      <Show {...{ startAndEnd: [50, 100] }}>
        <div>FadeIn effect from 50% to 100%</div>
      </Show>
      <Fade {...{ startAndEnd: [50, 100] }}>
        <div style={{ marginTop: '20%' }}>FadeOut effecto from 50% to 100%</div>
      </Fade>
    </div>
  )
}

export default App
