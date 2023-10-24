import React from 'react'
import Router from './router'

console.log(456)

function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router />
    </React.Suspense>
  )
}

export default App
