import React, { useEffect, useState } from 'react'

import './App.css'

import { startMirage } from './server-mock'
import { Tree } from './pages/index'
import { makeTreeArrayRegions } from './utils'
import { RegionNode } from './types'

if (process.env.NODE_ENV === 'development') {
  startMirage()
}

const App = () => {
  const [regions, setRegions] = useState<RegionNode[]>([])

  const fetchDataRegions = async () => {
    await fetch('/api/regions')
        .then(res => res.json())
        .then(json => setRegions(json))
  }

  useEffect(() => {
    fetchDataRegions()
  }, [])

  const list = makeTreeArrayRegions(regions)

  return (
      <div className='App'>
        <h1>React Tree</h1>
        <Tree trees={ list } />
      </div>
  )
}

export default App
