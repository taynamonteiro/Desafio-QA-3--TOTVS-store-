const el = require('./Elementos 2').ELEMENTS;

class Produto {
   
    acessarProduto(){
        cy.get(el.botaoProdut).click()
    }

    adicionarCarrinho(){
        cy.get('#product-addtocart-button').click()
    }

}

export default new Produto();
