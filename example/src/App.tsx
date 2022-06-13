import React from 'react'

import { Scale, useScrollPercent } from 'react-onscroll-animate'
import 'react-onscroll-animate/dist/index.css'

const App = () => {
  const scrollPercent = useScrollPercent()

  return (
    <div style={{ height: '300vh', width: '100vw', backgroundColor: 'grey' }}>
      <h1 style={{ position: 'fixed', marginLeft: '50%' }}>{scrollPercent}</h1>

      <Scale {...{ startAndEnd: [0, 50], values: [1, 1], origin: [0, 0] }}>
        <div style={{ marginTop: '20%' }}>Scaleeee this shit</div>
      </Scale>
    </div>
  )
}

export default App
