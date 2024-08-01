import React from 'react'
import windowSize from './hooks/windowSize'
import { FaLaptop,FaMobileAlt,FaTabletAlt  } from "react-icons/fa";

const Header = ({tittle}) => {
const {width}=windowSize()
return (
  <>
  <header className='header-container'>
  <div className='header'>{tittle}</div>
  <span className='device'>{width<640 ?<FaMobileAlt />: width<1024 ? <FaTabletAlt /> :  <FaLaptop />}</span>
  </header>
  </>
  )
}

export default Header