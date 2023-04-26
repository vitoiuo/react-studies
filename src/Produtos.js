import React from 'react';
import Produto from './Produto';

export default function Produtos () {
    const produtos = [
      { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
      { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ]

    return (
    produtos.map((produto) => {
        return <Produto produto={produto}/>
    })
    )
}

