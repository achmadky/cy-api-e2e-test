describe('get user API Automation Test', ()=> {
    it('/GET', ()=> {
        cy.request('GET', 'https://jsonplaceholder.cypress.io/posts').then((response)=> {
            expect(response).to.have.property('status', 200)
            
            expect(response.body[0]).to.have.property('title').to.be.a('string')
            expect(response.body[0]).to.have.property('body').to.be.a('string')
            expect(response.body[0]).to.have.property('userId').to.be.a('number')
            expect(response.body[0]).to.have.property('id').to.be.a('number')

        })
    })
})