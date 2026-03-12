describe('template spec', () => {
  it('passes', () => {
    // set viewport to match Expo device resolution
    cy.viewport(400, 850)
    
    // visit the local Expo app server (Metro bundler)
    // ensure the packager is running (e.g. "expo start --web" or similar)
    cy.visit('http://localhost:8081')
  })
})