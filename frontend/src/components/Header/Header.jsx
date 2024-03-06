import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
    let isLogin = true;
    let navigate = useNavigate()
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            <h3 className="w-auto text-2xl font-bold h-6 sm:h-7"> <span className='bg-yellow-300 rounded-md px-2 py-1'>DEV</span> Threds</h3>
                        </NavLink>



                    </div>

                    <div className="flex items-center">
                        <button className=" mx-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        {
                            isLogin ?
                                <button type="button" onClick={() =>{ navigate('/profile')}} className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className="object-cover w-full h-full" alt="avatar" />
                            </div>
                                </button>
                                :
                                <NavLink to="/login">
                                    <FaRegUserCircle className='text-2xl text-slate-700' />
                                </NavLink>
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header