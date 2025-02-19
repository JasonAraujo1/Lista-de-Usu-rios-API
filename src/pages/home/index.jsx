import React, { useEffect, useState } from 'react'
import { fetchApiUsers } from '../../services/fetchApi'
import { NavLink, useNavigate } from 'react-router'
import Filtro from '../filtroPage'

export default function Home() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    async function onLoad() {
      const data = await fetchApiUsers()
      setUsers(data)

    }
    onLoad()
  }, [])


  function handleClickSearchUser() {
    const user = users.filter(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))//verifica se o parâmetro esta dentro do texto. ex: j esta dentro de jason? j está , então é true
    setUsers(user)
  }
  function handleClickSelectOption(event) {//O evento gerado pelo <select> ao mudar de valor é automaticamente passado como argumento para a função.
    const option = users.filter(({ address }) => address.city === event.target.value)
    setUsers(option)
  }
  function handleNavigate(id){
    return navigate(`user/${id}`)
  }


  return (
    <div>

      <main className='flex flex-col items-center'>

        <div className='flex w-full sm:w-10 md:w-190 gap-2 items-center mt-10 mb-3'>
          {/*INPUT E BTN SEARCH */}
          <div className='flex items-center w-8/9'>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} className='outline-2 rounded-l-md bg-gray-200 w-full px-2 cursor-pointer' placeholder='Encontre um usuário' />
            <button className='bg-amber-500 rounded-r-md w-8 h-7 cursor-pointer' onClick={handleClickSearchUser}>
              <span className="material-symbols-outlined border-2 rounded-r-md w-8 h-7 ">search</span>
            </button>
          </div>

          {/*SELECT OPTION*/}

          <div >
            <select onChange={handleClickSelectOption} id="" className='outline-1 rounded-sm bg-gray-100 p-0.5 cursor-pointer'>
              <option value="" selected>cidades</option>
              {users.map(({ address }) =>
                <option value={address.city}> {address.city} </option>
              )}
            </select>
          </div>
        </div>

        {/*TABELA*/}
        <div>

          <div>
            <table className="border-collapse border border-gray-400 text-center w-full sm:w-10 md:w-200">

              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2 text-2xl">Nome</th>
                <th className="border border-gray-400 px-4 py-2 text-2xl">E-mail</th>
                <th className="border border-gray-400 px-4 py-2 text-2xl">Cidade</th>
              </tr>


              {users.map((element) => (
                <tr onClick={()=> handleNavigate(element.id)}>
                  <td className="border border-gray-400 px-4 py-2 cursor-pointer">{element.name}</td>
                  <td className="border border-gray-400 px-4 py-2 cursor-pointer">{element.email}</td>
                  <td className="border border-gray-400 px-4 py-2 cursor-pointer">{element.address.city}</td>
                </tr>
              ))}
            </table>
           
          </div>

          



        </div>
        <NavLink to='/filtro'>
          <button className='outline-1 rounded-sm px-6 bg cursor-pointer mt-4'>Filtros</button>
        </NavLink>
        
      </main>
      
    </div>
  )
}

