describe('Automate E2E Test BukaLapak', ()=> {
    it('user should be able to open bukalapak website', ()=> {
        cy.visit('https://www.bukalapak.com/')
            
    })

    it('user should not be able to register with invalid format',()=> {
        cy.get('.bl-link > .pr-4').click()
        cy.url().should('include', '/register')
        cy.contains('Daftar dulu, yuk')
        cy.get('.bl-text-field__inner').type('test')
        cy.get('.mv-24 > .bl-button').click()
        cy.contains('Format nomor handphone atau email tidak sesuai.')
    })

    it('user should be able to register',()=> {
        cy.visit('https://www.bukalapak.com/')
        cy.get('.bl-link > .pr-4').click()
        cy.url().should('include', '/register')
        cy.contains('Daftar dulu, yuk')
        cy.get('.bl-text-field__inner').type('081996262020')
        cy.get('.mv-24 > .bl-button').click()
        cy.contains('Verifikasi Pendaftaran')
        cy.get('.p-24 > div > div > div > .bl-button--outline').click()
    })

    it('user should be able to login',()=> {
        cy.visit('https://www.bukalapak.com/')
        cy.get('.te-header-login > .pr-4').click()
        cy.url().should('include', '/login')
        cy.contains('Login dulu, yuk')
        cy.get('.container-flf > .wrapper-input-identity > .bl-text-field > .bl-text-field__boxed > .bl-text-field__inner').type('dieclixz@gmail.com')
        cy.get('#submit_button').click()
        cy.contains('Masukkan Password')
        cy.get('.wrapper-form-ipl > .mb-20 > .bl-text-field > .bl-text-field__boxed > .bl-text-field__inner').type('daaaaaaaaa')
        cy.get('#btn-login').click()
        cy.wait(5000)

    })


    it('user should be able to search product',()=> {
        cy.visit('https://www.bukalapak.com/')
        cy.get('#v-omnisearch__input').type('iphone 13').type('{enter}')
        

    })
    
    it('user should be able to add to cart product',()=> {
        cy.visit('https://www.bukalapak.com/')
        cy.scrollTo(0, 2100)
        cy.get(':nth-child(1) > .loop--recommendations > :nth-child(1) > .bl-section > .bl-container > .bl-carousel > .bl-carousel__wrapper > .bl-carousel__container > :nth-child(1) > .bl-product-card > .bl-product-card__wrapper > .bl-product-card__thumbnail > .bl-thumbnail > .bl-thumbnail--slider > :nth-child(1) > .slide > .bl-thumbnail--img').click()

        // cy.get('.bl-carousel:nth-child(2) > .bl-carousel__wrapper:nth-child(1) > .bl-carousel__container:nth-child(1) > .bl-carousel__slide:nth-child(2) > .bl-product-card:nth-child(1) > .bl-product-card__wrapper:nth-child(1) > .bl-product-card__thumbnail:nth-child(1) > .bl-thumbnail:nth-child(1) > .bl-thumbnail--slider:nth-child(1) .bl-thumbnail--img:nth-child(1)').click()
        // cy.get('.bl-flex-item:nth-child(1) > .bl-product-card > .bl-product-card__wrapper > .bl-product-card__thumbnail > .bl-thumbnail > .bl-thumbnail--slider > div > .slide > .bl-thumbnail--img').click()
        // cy.get('#section-main-product > .c-product-details-section__main > .c-main-product__action > .c-main-product__action-buttons > .c-main-product__action__cart').click()
        // cy.get('.c-dialog__panel > .c-dialog__panel__footer > .c-cart-dialog__footer > .c-cart-dialog__action > .c-cart-dialog__cart-button').click()

    })

})