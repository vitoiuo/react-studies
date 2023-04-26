export default function Produtos () {
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
    ]

    return (
        produtos.map(({ nome, propriedades }) => {
            return <div
                key={nome}
                style={{border: '1px solid', padding:'8px', margin:'8px'}}
            >
                <h3>{ nome }</h3>
                { propriedades.map((prop) => {
                        return <li key={prop}>{ prop }</li>
                }) }
            </div>
        })
    )
}

