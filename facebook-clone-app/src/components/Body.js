import React from 'react'
import Left from './Left'
import Middle from './Middle'
import Right from './Right'
import Navbar from './Navbar'

const Body = () => {
  return (
    <>
    <Navbar/>
    <div className='h-[92vh] flex'>
        <Left/>
        <Middle/>
        <Right/>
    </div>
    </>
  )
}

export default Body