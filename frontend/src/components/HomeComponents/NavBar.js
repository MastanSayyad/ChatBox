import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../../assets/images/logo-large.png'
import NavList from './NavList'
export default function NavBar() {
  return (
    <div className=' flex justify-between max-[607px]:justify-center'>
        <div className='text-white flex flex-row items-center'>
            <img src={Logo} alt='logo' className='w-10'/>
            <div path="/" className='text-white text-2xl font-Roboto font-semibold ml-2'> <Link to="/">ChatBox</Link></div>
        </div>
        <NavList></NavList>
    </div>
  )
}
