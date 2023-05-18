import React, { useState } from 'react'
import Router from './router'

function App() {
  return (
    <React.Suspense fallback={<div>loading</div>}>
      <Router />
    </React.Suspense>
  )
}

export default App
