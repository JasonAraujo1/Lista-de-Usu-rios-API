import React from 'react'

export default function Filtro() {
    return (
        <div className='flex gap-2  my-2 w-full sm:w-10 md:w-200 mx-auto'>
            <div className='border-2 p-3 gap-3 flex flex-col pr-15 '>
                <h1 className='font-extrabold text-xl'>Filtra por:</h1>
                <p>Publicações</p>
                <p>Comentários</p>
                <p>Albuns</p>
            </div>
            <div> 
                <div>
                    <div>
                        <p>Fulano de tal</p>
                        <p>Email@hotmail.com</p>
                    </div>
                    <div>
                        <p>Endereço</p>
                        <p>Pais, estado</p>
                    </div>


                </div>
                <div className='border-2 mt-5 p-2'>
                    <h1 className='font-extrabold text-xl'>Resultado:</h1>
                    <h2 className='font-extrabold'>Título</h2>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ratione exercitationem repellend</h2>

                    <h2 className='font-extrabold'>Postagem:</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus tenetur similique corporis qui. Ullam eos iure tenetur dolorem incidunt, inventore aspernatur? Alias eveniet sequi voluptas quos nam eum quis odio!</p>
                </div>
            </div>
        </div>
    )
}

