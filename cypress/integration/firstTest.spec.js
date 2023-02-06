/// <reference types="Cypress" />

//describe ('Testing something in Google', () => {
//    it ('I can search', () => {
//        cy.visit('http://google.com');
//        cy.get("input[title='Поиск']").type('что-то').type('{enter}')
//        cy.contains('https://kakpishem.ru')
//        cy.contains('https://kak-pravilno.net')
//
//    });
//});

it('By ID', () => {
    cy.visit("http://dev.galaktika.ru/wiki/login.action")
    cy.get('#os_username')
})

it('By class', () => {
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('.DocSearch-Button-Placeholder')
})

it('By tag', () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
    cy.get('div')
})

it('By tag value', () => {
    cy.visit("http://dev.galaktika.ru/wiki/login.action")
    cy.get('[name="os_password"]')
})


it('By diffrent tag', () => {
    cy.visit("http://dev.galaktika.ru/wiki/login.action")
    cy.get('[id="loginButton"][type="submit"]')
})

it('By types', () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
    cy.get('button[type="button"][class^="clean-btn close closeButton_CVFx announcementBarClose_gvF7"]')
})

it('By contains name', () => {
    cy.visit("https://www.vtb.ru/")
    cy.get('*[class^="card"]')
})

it('Using get with find and eg', () => {
    cy.visit("https://moskva.beeline.ru/customers/products/mobile/tariffs/details/up4/")
    cy.get('tbody').find('td').find('div')
})

it.only('Using get with find and eg', () => {
    cy.viewport(1800,1000)
    cy.visit("https://docs.cypress.io/api/commands/and")
    cy.get('main').find('div').find('div').find('div').find('ul').find('li').find('a').eq(5)
})