export class SamsungPages {

    

navigateHomePage(longwait){

    cy.visit('https://www.samsung.com/in/', { timeout: longwait })
    cy.contains('Samsung')
}

navigateToTheDevicePage(longwait){
     
     cy.visit('https://www.samsung.com/in/smartphones/galaxy-z-fold2/buy/')
     cy.wait(longwait)
     cy.get('a[class="cta cta--contained cta--emphasis add-to-cart-btn"]').should('be.visible')  
}

clickOnAddToCartButton(longwait){
     
    cy.wait(longwait)
    cy.get('a[title="CONTINUE"][an-tr="price bar_add to cart-flagship pdp-button-text"]',{ timeout: longwait }).click({force:true});
    
}

clickOnSkipButton(longwait){

    cy.wait(longwait)
    cy.get('#addon_skip',{ timeout: longwait }).click({force:true})
    cy.url().should('include', '/web/cart/')
    
}

payNow(longwait){
    cy.get('.sticky-content > .order-p6-summary-price-details > .os-btn-holder > .btn-primary',{ timeout: longwait }).click({force:true})
}

clickOnContinueAsGuest(longwait){
    cy.get('#b2C_Continue_Guest',{ timeout: longwait }).click({force:true})
}

typePinCode (pinCode){
    cy.get('input[type="text"][name="postalCode"]',{ timeout: longwait }).click()
    cy.typePinCode(pinCode)
}


}