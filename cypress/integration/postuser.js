const bodyreq = require('../fixtures/body_req.json')

describe('post user API Automation Test', ()=> {
    it('/POST', ()=> {

    cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', bodyreq)

  .then((response) => {
    expect(response).property('status').to.equal(201)
    expect(response.body).property('title').to.equal('recommendation')
    expect(response).property('body').to.contain({body: 'motorcycle',})
    expect(response.body).property('userId').to.be.a('number').and.eq(12)
    })

    })

})