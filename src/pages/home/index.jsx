import React, { useEffect, useState } from 'react'
import { fetchApiUsers } from '../../services/fetchApi'

export default function Home() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [foundUser, setFoundUser] = useState(null)

  useEffect(() => {
    async function onLoad() {
      const data = await fetchApiUsers()
      setUsers(data)

    }
    onLoad()
  }, [])


  function handleClickSearchUser() {
    const user = users.find(user => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setFoundUser(user)
  }

  return (
    <div>


      <main className='flex flex-col items-center'>

        <div className='flex w-full sm:w-10 md:w-190 gap-2 items-center mt-10 mb-3'>
          {/*INPUT E BTN SEARCH */}
          <div className='flex items-center w-8/9'>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} className='outline-2 rounded-l-md bg-gray-200 w-full px-2 cursor-pointer' placeholder='Encontre um usuário' />
            <button className='bg-amber-500 rounded-r-md w-8 h-7 cursor-pointer' onClick={handleClickSearchUser}>
              <span className="material-symbols-outlined border-2 rounded-r-md w-8 h-7 ">search</span>
            </button>
          </div>

          {/*SELECT OPTION*/}
          <div >
            <select id="" className='outline-1 rounded-sm bg-gray-100 p-0.5 cursor-pointer'>
              <option value="" selected>cidades</option>
              <option value="" ></option>
            </select>
          </div>
        </div>

        {/*TABELA*/}
        <div>
          {foundUser ? (
            <div>
              <table className="border-collapse border border-gray-400 text-center w-full sm:w-10 md:w-200">

                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2 text-2xl">Nome</th>
                  <th className="border border-gray-400 px-4 py-2 text-2xl">E-mail</th>
                  <th className="border border-gray-400 px-4 py-2 text-2xl">Cidade</th>
                </tr>


                <tr>

                  <td className="border border-gray-400 px-4 py-2">{foundUser.name}</td>
                  <td className="border border-gray-400 px-4 py-2">{foundUser.email}</td>
                  <td className="border border-gray-400 px-4 py-2">{foundUser.address.city}</td>

                </tr>
              </table>
            </div>

          ) : (<p>usuario nao encontrado</p>)}

        </div>
      </main>
    </div>
  )
}

