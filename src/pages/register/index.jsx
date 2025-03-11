import React, { useState } from 'react'

export default function Register() {
    const [inputDataEmail, setInputDataEmail] = useState("")
    const [inputDataSenha, setInputDataSenha] = useState("")
    const [inputDataNome, setInputDataNome] = useState("")
    const [inputDataTelefone, setInputDataTelefone] = useState("")


    async function handleClick(event) {
        event.preventDefault()

        // Regex para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex para validação de telefone (formato: (00)0000-0000 ou (00)90000-0000)
        const telefoneRegex = /^\d{10,}$/;

        if (!inputDataNome || !inputDataEmail || !inputDataSenha || !inputDataTelefone) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        if (!emailRegex.test(inputDataEmail)) {
            alert("E-mail inválido! Use um formato como email@example.com");
            return;
        }

        if (!telefoneRegex.test(inputDataTelefone)) {
            alert("Telefone inválido! Use o formato (XX)XXXXX-XXXX");
            return;
        }

        if (inputDataSenha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        alert("Cadastro realizado com sucesso!");

        const data = {
            name: inputDataNome,
            email: inputDataEmail,
            password: inputDataSenha,
            tel: inputDataTelefone
        }
        const url = "https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users"
        //"https://67be079f321b883e790ee0ed.mockapi.io/api/v1/users" api correta do mockapi

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
                <span>Nome:</span>
                <input
                    type="email" placeholder='Fulano'
                    className='outline mb-2 bg-white'
                    onChange={(event) => setInputDataNome(event.target.value)} />

                <span>E-mail:</span>
                <input
                    type="email" placeholder='email@hotmail.com'
                    className='outline mb-2 bg-white'
                    onChange={(event) => setInputDataEmail(event.target.value)} />

                <span>Senha: </span>
                <input
                    onChange={(event) => setInputDataSenha(event.target.value)}
                    type="text" placeholder=' ex: 123456'
                    className='outline mb-3   bg-white' />

                <span>Telefone:</span>
                <input
                    type="email" placeholder='(00)0000-0000'
                    className='outline mb-2 bg-white'
                    onChange={(event) => setInputDataTelefone(event.target.value)} />
                <button onClick={handleClick} type='submit' className='bg-amber-500 outline-1 cursor-pointer' >Cadastrar</button>
            </form>
        </div>
    )
}

