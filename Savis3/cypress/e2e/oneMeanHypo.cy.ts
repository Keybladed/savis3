// describe('template spec', () => {
//     beforeEach(() => {
//         cy.viewport(1920, 1080)
//         cy.visit('localhost:4200/onemean')
//     })
//     it('passes', () => {
//         cy.viewport(1920, 1080)
//         cy.visit('localhost:4200/onemean')
//     })

//     it('should enter numbers and load the data', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//     })
//     it('should select choose file', () => {
//       cy.get('#fileinput').click({ force: true });
//     })

//     it('should input data in the sample size box', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleSize').clear()
//         cy.get('#sampleSize').type('5')
//         cy.get('#run-sim-btn').click()
//         cy.wait(5000)
//     })
//     it('should input data in the sample number box', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//     })
//     it('should increase and decrease the MIN value', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//         cy.get('#min').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#min').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#min').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#min').type('{downarrow}')
//         cy.wait(200)
//         cy.get('#min').type('{downarrow}')
//         cy.wait(200)
//     })
//     it('should increase and decrease the MAX value', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//         cy.get('#max').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#max').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#max').type('{uparrow}')
//         cy.wait(200)
//         cy.get('#max').type('{downarrow}')
//         cy.wait(200)
//         cy.get('#max').type('{downarrow}')
//         cy.wait(200)
//     })
//     it('should check the "include min" box', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//         cy.get('#minBox').click()
//     })
//     it('should check the "include max" box', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//         cy.get('#maxBox').click()
//     })
//     it('should reset data', () => {
//         cy.get('#text\\ box').type('95 \n 84 \n 70\n85\n71\n88\n95\n69\n')
//         cy.get('[type="submit"]').click()
//         cy.get('#sampleNum').clear()
//         cy.get('#sampleNum').type('6')
//         cy.get('#run-sim-btn').click()
//         cy.get('#minBox').click()
//         cy.get('#button-div > [type="button"]').click()
//         cy.wait(1000)
//     })

// })