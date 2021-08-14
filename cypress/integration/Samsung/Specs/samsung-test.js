import { SamsungPages } from "../Page-Objects/SamsungPages";

let targeturl = 'https://www.samsung.com/in/'
let longwait = 60000



describe('Purchase a device from Samsung website', () => {

    const samsungPages = new SamsungPages()
    const pinCode = '004485';

    it('Verify samsung home page is opened', () => {
      
        samsungPages.navigateHomePage()
       
    })


    it('Go to the device page', () => {
        
        samsungPages.navigateToTheDevicePage(longwait)  
    })
    

    it('Click on continue or add to cart button', () => {

       samsungPages.clickOnAddToCartButton(longwait)
        
    })

    it('Click on skip button', () => {

        samsungPages.clickOnSkipButton(longwait)
        
    })

    it('Pay Now', () => {

        samsungPages.payNow(longwait)

        })


    it('Continue as guest', () => {
        samsungPages.clickOnContinueAsGuest(longwait)
    })

    it('Click on pin code field and verify if the error message is displayed', () => {
        cy.wait(longwait)

        //click on pin code without filling the field to make sure that the error is displayed 
        cy.get('input[type="text"][name="postalCode"]',{ timeout: longwait }).click()
        cy.get('input[type="text"][name="line1"]',{ timeout: longwait }).click()
        cy.contains('This is a required field.',{ timeout: longwait }).should(be.visible)

        //Type a valid pin code 
        //cy.get('input[type="text"][name="postalCode"]',{ timeout: longwait }).type(pinCode).should('have.value','004485')
        samsungPages.typePinCode (pinCode)
        cy.contains('This is a required field.',{ timeout: longwait }).should(be.invisible)
    
  
        
    })


      

})

