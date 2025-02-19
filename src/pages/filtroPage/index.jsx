import React, { useEffect, useState } from 'react'
import { fetchApiUsers } from '../../services/fetchApi'
import { NavLink } from 'react-router'

export default function Filtro() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function onLoad() {
            const data = await fetchApiUsers()
            setUsers(data)
            console.log("DADOS FILTRO:", data)
        }
        onLoad()
    }, [])


    return (
       
        <div className='flex gap-2  my-2 w-full sm:w-10 md:w-200 mx-auto'>

            <div className='border-2 p-3 gap-3 flex flex-col pr-15 '>

                <h1 className='font-extrabold text-xl'>Filtra por:</h1>
                <p className='cursor-pointer'>Publicações</p>
                <p className='cursor-pointer'>Comentários</p>
                <p className='cursor-pointer'>Albuns</p>
            </div>
            <div>
              
                {users.map((item) =>
                    <>
                        <div>
                            <div>
                                <p>{item.name}</p>
                                <p>{item.email}</p>
                            </div>
                            <div>
                                <p>Endereço: {item.address.street}, {item.address.suite}.</p>
                                <p>{item.address.city}, zipcode: {item.address.zipcode}</p>
                            </div>
                        </div>

                        <div className='border-2 mt-5 p-2 mb-16'>
                            <h1 className='font-extrabold text-xl'>Resultado:</h1>
                            <h2 className='font-extrabold'>Título</h2>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione exercitationem repellend</h2>

                            <h2 className='font-extrabold'>Postagem:</h2>
                            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tenetur similique corporis qui. Ullam eos iure tenetur dolorem incidunt, inventore aspernatur? Alias eveniet sequi voluptas quos nam eum quis odio!</p>

                        </div>
                    </>
                )}
            </div>
            <NavLink to='/home'>
                <button className='outline-1 rounded-sm px-6 bg cursor-pointer mt-4'>Home</button>
            </NavLink>
        </div>

    )
}

