import React, { useState } from 'react'
import { fetchApiLogin } from '../../services/fetchApi'



export default function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    async function handleClick(event) {
        event.preventDefault()
        const data = await fetchApiLogin()
        console.log(data)

        const dataFind = data.find((item)=>item.email === userEmail && item.password === userPassword)
        console.log(dataFind)

    }


    return (

        <div>
            <form action="" className=''>
                <input
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                    type="email" placeholder='email@hotmail.com'
                    className='outline' />
                <input
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                    type="password" placeholder='ex: 123456'
                    className='outline' />
                <button type='submit' className='outline' onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

