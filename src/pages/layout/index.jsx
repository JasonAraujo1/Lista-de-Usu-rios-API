import React from 'react'
import { Outlet } from 'react-router'

export default function Layout() {
    return (
        <>
            
            <div>
                <header className='bg-gray-300 w-full'>
                    <img src="src/assets/User.png" alt="logo" className='size-20 p-2' />
                </header>
            </div>
            <div>
                <Outlet />
            </div>
        </>


    )
}

