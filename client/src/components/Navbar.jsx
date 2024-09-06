import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { HiMiniXMark } from "react-icons/hi2";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        {path: "/", title: "Start A Search"}, 
        {path: "/my-job", title: "My Jobs"}, 
        {path: "/salary", title: "Salary Estimated"}, 
        {path: "/post-job", title: "Post A Job"}, 
    ]

  return (
    <header className='bg-slate-200 max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
            
            <Link to="/" className='font-bold flex items-center gap-0.5 text-2xl'><span className='text-sky-700'>Job</span><span className='text-slate-800'>Site</span></Link>

            {/* Nav Items for large devices*/}
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path,title}) => (
                        <li key={path} className='text-gray-800 font-semibold'>
                            <NavLink
                                to={`path`}
                                className={({ isActive }) => isActive ? "active" : "" 
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

            {/* Sign Up and Login */}
            <div className='text-black font-semibold space-x-5 hidden lg:block'>
                <Link to='/login' className='text-black bg-slate-200 py-2 px-5 border-2 border-black rounded'>Log In</Link>
                <Link to='/sign-up' className='text-white bg-sky-500 py-2 px-5 border-2 border-white rounded'>Sign Up</Link>
            </div>

            {/* Mobile Menu */}
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                        isMenuOpen ? <HiMiniXMark className='w-5 h-5 text-black'/> : <FaBars className='w-5 h-5 text-black'/>
                    }
                </button>
            </div>
        </nav>

        {/* NavItems For Mobile */}
        <div className={`px-4 bg-gray-800 py-2  rounded-md ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
            {
                    navItems.map(({path,title}) => (
                        <li key={path} className=' font-semibold text-white py-1'>
                            <NavLink
                                to={`path`}
                                className={({ isActive }) => isActive ? "active" : "" 
                                }
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
                <li className='text-white py-1 font-bold'>
                <Link to='/login'>Log In</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar