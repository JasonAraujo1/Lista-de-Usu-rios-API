import React, { useState } from 'react'
import { fetchApiLogin } from '../../services/fetchApi'



export default function Login() {
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    async function handleClick(event) {
        event.preventDefault()
        const data = await fetchApiLogin()
        // console.log(data)

        const dataFind = data.find((item) => item.email === userEmail && item.password === userPassword)
        console.log("data find", dataFind)
        {!dataFind ? (
          alert("Usuário ou senha incorretos!"))
          : alert("login correto!")}
    }


    return (

        <div className='flex justify-center'>

            <form action="" className='flex flex-col w-full sm:w-10 md:w-80 gap-2 outline-1 p-10 mt-30 rounded-sm bg-gray-100'>
                <h1 className='text-xl justify-center flex'>LOGIN</h1>
                <span>E-mail:</span>
                <input
                    value={userEmail}
                    onChange={(event) => setUserEmail(event.target.value)}
                    type="email" placeholder=' email@hotmail.com'
                    className='outline mb-2  bg-white' />
                <span>Senha:</span>
                <input
                    value={userPassword}
                    onChange={(event) => setUserPassword(event.target.value)}
                    type="password" placeholder=' ex: 123456'
                    className='outline mb-3  bg-white' />
                <button type='submit' className='bg-amber-500 outline-1 cursor-pointer' onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

