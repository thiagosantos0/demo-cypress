describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
        // abre o site
        cy.visit('http://localhost:5000/')
    })
    it('Teste 2: Verifica item na página', () => {
        // Verifica se existe o item desejado
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })
    it('Teste 3: Calcula Frete', () => {
        cy.get('[data-id=3]').within(() => {
            cy.get('input').type('10000-000')
            cy.contains('Calcular Frete').click().then
            cy.wait(2000)
        })
        cy.get('.swal-text').contains('O frete é: R$')
        
        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })
    it('Teste 4: Comprar', () => {
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click().then
            cy.wait(3000)
        })
        cy.get('.swal-text').contains('Sua compra foi realizada com sucesso')
        
        // Fecha o pop-up com o aviso da compra
        cy.get('.swal-button').click()
    })

  })