import React from 'react'

export default function Produto({produto}) {
    return <div
      key={produto.nome}
      style={{border: '1px solid', padding:'8px', margin:'8px'}}
    >
      <h3>{ produto.nome }</h3>
      { produto.propriedades.map((prop) => {
              return <li key={prop}>{ prop }</li>
          })
      }
    </div>
}
