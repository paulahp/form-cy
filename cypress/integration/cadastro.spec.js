/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

// Mocha -> Test Runner 
// describe, context e it


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/')

        //input de texto / textarea / email  → type
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        //Inputs radio / checkboxes → check
        cy.get('input[value=m]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        //Inputs do tipo combobox / selects → select 
        cy.get('select#countries').select('Dinamarca', {force:true})
        cy.get('select#years').select('1994', {force:true})
        cy.get('select#months').select('Dezembro', {force:true})
        cy.get('select#days').select('2', {force:true})


        //Inputs de senha → type
        cy.get('input#firstpassword').type('C@s@1721')
        cy.get('input#secondpassword').type('C@s@1721')

        cy.get('#submitbtn').click()

        //Espero que a minha aplicação seja direcionada para a listagem
        //url
        //deve conter listagem
        //should contain listagem
        cy.url().should('contain', 'listagem')


        // input#firstpassword
        // input#secondpassword



        // select#countries
        // select#years
        // select#months
        // select#days
        // input[name=firstName]
        // input[name=lasttName]
        // textarea[name=adress]
        // input[name=emailAdress]
        // input[value=m]  
        // input[type=checkbox]
  






    });
});