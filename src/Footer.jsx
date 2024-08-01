import React from 'react'

const Footer = () => {
  const today=new Date()
  return (
    <p className='footer'>Copyright&copy;{today.getFullYear()}</p>
  )
}

export default Footer