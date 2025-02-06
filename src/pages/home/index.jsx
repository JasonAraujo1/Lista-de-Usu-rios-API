import React from 'react'

export default function Home() {
  return (
    <div>
      

      <main className='flex flex-col items-center'>
       
        <div className='flex w-full sm:w-10 md:w-190 gap-2 items-center mt-10 mb-3'>
         {/*INPUT E BTN SEARCH */}
          <div className='flex items-center w-8/9'>
            <input type="text" className='outline-2 rounded-l-md bg-gray-200 w-full px-2 cursor-pointer' placeholder='Encontre um usuário'/>
            <button className='bg-amber-500 rounded-r-md w-8 h-7 cursor-pointer'>
              <span className="material-symbols-outlined border-2 rounded-r-md w-8 h-7 ">search</span>
            </button>
          </div>

        {/*SELECT OPTION*/}
          <div >
            <select name="" id="" className='outline-1 rounded-sm bg-gray-100 p-0.5 cursor-pointer'>
              <option value="" selected>cidades</option>
              <option value="" ></option>
            </select>
          </div>
        </div>

        {/*TABELA*/}
        <div>
          <table class="border-collapse border border-gray-400 text-center w-full sm:w-10 md:w-200">
            <tr class="bg-gray-200">
              <th class="border border-gray-400 px-4 py-2 text-2xl">Nome</th>
              <th class="border border-gray-400 px-4 py-2 text-2xl">Coluna 2</th>
              <th class="border border-gray-400 px-4 py-2 text-2xl">Coluna 3</th>
            </tr>
            <tr>
              <td class="border border-gray-400 px-4 py-2">Dado 1</td>
              <td class="border border-gray-400 px-4 py-2">Dado 2</td>
              <td class="border border-gray-400 px-4 py-2">Dado 3</td>
            </tr>
          </table>


        </div>
      </main>
    </div>
  )
}

