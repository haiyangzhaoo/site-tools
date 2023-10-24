import React from 'react'
import Router from './router'

console.log(123)

function App() {
  return (
    <React.Suspense fallback={<div>loading...</div>}>
      <Router />
    </React.Suspense>
  )
}

export default App
