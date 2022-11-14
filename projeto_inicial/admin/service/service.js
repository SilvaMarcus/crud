/* REQUISICAO */
const listaCliente = () => {
     return fetch(`http://localhost:3000/profile`)
     .then(resposta => {
          return resposta.json()
     }) 
}



const criarCliente = (nome,email) => {
     return fetch(`http://localhost:3000/profile`, {
          method: 'POST',
          headers: {
               'Content-Type' : 'application/json'
          },
          body: JSON.stringify({
               nome: nome,
               email: email
          })
     })
     .then(response => {
          return response.body
     })
}



export const clienteService = {
     listaCliente,
     criarCliente
}









