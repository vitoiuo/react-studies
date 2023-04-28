import React from 'react';

const App = () => {
  const [item, setItens] = React.useState({})
  let [loading, setLoading] = React.useState(false)

  async function fetchTablets (event) {
    setLoading(true)
    let data = (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`))
    data = await data.json()

    setItens(data)
    setLoading(false)
  }
  async function fetchSmartphones (event) {
    setLoading(true)
    let data = (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`))
    data = await data.json()

    setItens(data)
    setLoading(false)
  }
  async function fetchNotebooks (event) {
    setLoading(true)
    let data = (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`))
    data = await data.json()

    setItens(data)
    setLoading(false)
  }

  return <>
    <h1>Produtos</h1>
    <button onClick={fetchTablets}>Tablet</button>
    <button onClick={fetchSmartphones}>Smartphone</button>
    <button onClick={fetchNotebooks}>Notebook</button>

    <div>
      {loading && <div>Loading...</div>}

      {item.id && (
         <>
          <h2>{`${item.nome} (${item.vendido ? "Disponivel": 'Vendido'})`}</h2>
          {item.fotos?.map((foto) => {
            return <img key={foto.titulo} alt={foto.titulo} src={foto.src} />
          })}
          <p>{ `R$ ${item.preco} - ${item.descricao}`}</p>
         </>
      )}
      
    </div>
  </>
}

export default App