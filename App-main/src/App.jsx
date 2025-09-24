import React from 'react'
import './app.css'
import Home from './components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className="text-center font-bold">
        <h1 className='text-5xl font-bold text-gray-800 mb-8'>AI Image Enhancer{" "}</h1>
        <p className='text-lg text-gray-500'>Upload your Image and let AI enhance to in seconds</p> <br />
      </div>
      <Home/> <br /> 

      <div className="text-lg text-gray-500">Powered By @AIDeveloper</div>
      

    </div>
  )
}

export default App