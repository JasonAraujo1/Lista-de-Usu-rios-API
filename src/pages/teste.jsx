import React, { useState } from 'react'



export default function Teste() {

  const [ display, setDisplay] = useState("coments")

  return (
    <div>
      { display === "posts" ? "exibir posts" : null}
      { display === "coments" ? "exibir coments" : null}
    </div>
  )
}

 