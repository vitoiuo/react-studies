import React from 'react'

export default function Modal({modal, setModal}) {
  if (modal)
    return (
      <div>
          Esse é um modal hehehe
          <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    )
}
