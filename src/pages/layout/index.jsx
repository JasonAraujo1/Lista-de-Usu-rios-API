import React from 'react'
import { Outlet } from 'react-router'
import User from "../../assets/User.png";
export default function Layout() {
    return (
        <>
            
            <div>
                <header className='bg-gray-300 w-full'>
                    <img src={User} alt="logo" className='size-20 p-2' />
                </header>
            </div>
            <div>
                <Outlet />
            </div>
        </>


    )
}

