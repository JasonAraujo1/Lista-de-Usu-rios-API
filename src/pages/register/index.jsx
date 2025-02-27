import React from 'react'

export default function Register() {

    return (
        <div className='flex justify-center'>
            <form action="" className='flex flex-col w-full sm:w-10 md:w-80 gap-2 outline-1 p-10 mt-30 rounded-sm bg-gray-100'>
            <h1 className='text-xl justify-center flex items-center '>CADASTRO</h1>
                <span>E-mail:</span>
                <input
                    type="email" placeholder=' email@hotmail.com'
                    className='outline mb-2 bg-white' />
                <span>Senha:</span>
                <input
                    type="password" placeholder=' ex: 123456'
                    className='outline mb-3   bg-white' />
                <button type='submit' className='bg-amber-500 outline-1 cursor-pointer' >Cadastrar</button>
            </form>
        </div>
    )
}

