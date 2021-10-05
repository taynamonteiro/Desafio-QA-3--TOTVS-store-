///<reference types="cypress" />

import Acesso from '../support/pages/Acesso'
import Produto from '../support/pages/Produto'

describe('Desafio QA-3', () =>{

    beforeEach(() =>{
        Acesso.acessarSite();
        Acesso.buscarProduto();
        cy.get('[href="https://totvs.store/br/produto/treinamento-backoffice-linha-protheus-arq-release.html"] > .product-card-title').invoke('text').as('produtoSelecionado')
        Produto.acessarProduto();
        cy.get('.price').invoke('text').as('valorProduto')       
    })

    it('Buscar Produto', function () {
        Acesso.buscarProduto();
    })

    it('Acessar produto e validação', function () {
        cy.get('.base').should('contain', this.produtoSelecionado);

    })

    it('Adicionar produto ao carrinho', function () {
        Produto.adicionarCarrinho();
    })

    it('Validação de produto no carrinho', function () {
        Produto.adicionarCarrinho();
        cy.get('.product-item-name > a').should('contain', this.produtoSelecionado)
        cy.get('.option-value > :nth-child(2)').invoke('text').should('contain', this.valorProduto)   
    });

})