/* FUNCAO CRIAR LINHA  */

import { clienteService } from "./service.js"

const criarLinha = (nome, email) => {
     const html_content = `<td class="td" data-td>${nome}</td>
     <td>${email}</td>
     <td>
         <ul class="tabela__botoes-controle">
             <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
             <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
         </ul>
     </td> `
     const linhaTr = document.createElement('tr')
     linhaTr.innerHTML = html_content

     return linhaTr 
}


/* TABELA PARA ADICIONAR */
const tabela = document.querySelector('[data-tabela]')


/* LISTANDO  */
clienteService.listaCliente().then(data => {
     data.forEach(element => {
          tabela.appendChild(criarLinha(element.nome, element.email))
     });
})