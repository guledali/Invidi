/// <reference types="Cypress" />

describe('Test our videoplayer', function() {

      it('it should visit localhost', function() {
        cy.visit('http://localhost:9000')
      })

      it('it should find a videoplayer', function() {
        cy.get("div").should('have.class', 'fluid_video_wrapper')
      })
      
      it('it should play the videoplayer', function() {
        cy.get('[class="fluid_initial_play_button"]').click()
      })
  })