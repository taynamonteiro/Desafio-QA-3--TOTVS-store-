
const el = require('./Elementos').ELEMENTS;

class Acesso {
    acessarSite(){
        cy.visit(el.SitedeTeste);
    }

    buscarProduto(){
        cy.get(el.BuscarProdut).type(el.NomeProduto)
    }

    
}

export default new Acesso();
