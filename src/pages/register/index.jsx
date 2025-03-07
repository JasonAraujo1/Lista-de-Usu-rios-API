import React, { useState } from 'react'

export default function Register() {
    const [inputDataEmail, setInputDataEmail] = useState("")
    const [inputDataSenha, setInputDataSenha] = useState("")


    async function handleClick(event) {
        event.preventDefault()
        const data = {
            email: inputDataEmail,
            password: inputDataSenha
        }
        const url = "https://reqres.in/api/users"

        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        console.log(data)
        console.log(res)

    }

    return (
        <div className='flex justify-center'>
            <form className='flex flex-col w-full sm:w-10 md:w-80 gap-2 outline-1 p-10 mt-30 rounded-sm bg-gray-100'>
                <h1 className='text-xl justify-center flex items-center '>CADASTRO</h1>
                <span>E-mail:</span>
                <input
                    type="email" placeholder='email@hotmail.com'
                    className='outline mb-2 bg-white'
                    onChange={(event) => setInputDataEmail(event.target.value)} />
                <span>Senha: </span>
                <input
                    onChange={(event) => setInputDataSenha(event.target.value)}
                    type="password" placeholder=' ex: 123456'
                    className='outline mb-3   bg-white' />
                <button onClick={handleClick} type='submit' className='bg-amber-500 outline-1 cursor-pointer' >Cadastrar</button>
            </form>
        </div>
    )
}

