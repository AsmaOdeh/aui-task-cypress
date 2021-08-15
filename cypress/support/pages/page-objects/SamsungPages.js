const pageSelectors = {
  addToCartBtn: 'a[class="cta cta--contained cta--emphasis add-to-cart-btn"]',
  pdpButtonText: 'a[title="CONTINUE"][an-tr="price bar_add to cart-flagship pdp-button-text"]',
  skipBtn: '#addon_skip',
  payNowBtn: '.sticky-content > .order-p6-summary-price-details > .os-btn-holder > .btn-primary',
  continueGuest: '#b2C_Continue_Guest',
  postalCode: 'input[type="text"][name="postalCode"]',
  inputErrorMsg: 'div.input-error-msg',
  shippingLabel: '.c-s-a-p'

}
export class SamsungPages {
  navigateHomePage(){

    cy.visit('/')
    cy.contains('Samsung')
  }

  navigateToTheDevicePage(){

    cy.visit('/smartphones/galaxy-z-fold2/buy/')
    cy.get(pageSelectors.addToCartBtn).should('be.visible')
  }

  clickOnAddToCartButton(){
    cy.get(pageSelectors.pdpButtonText).click({force:true});
  }

  clickOnSkipButton(){

    cy.get(pageSelectors.skipBtn).click({force:true})
    cy.url().should('include', '/web/cart/')

  }

  clickPayNowButton(){
    cy.get(pageSelectors.payNowBtn).click({force:true})
    cy.intercept({
      method: 'GET',
      url:'/websdksettings*'
    }).as( 'loadPage')
    cy.wait('@loadPage', {timeout: 60000})
  }

  clickOnContinueAsGuest(){
    cy.get(pageSelectors.continueGuest).click({force:true})
  }

  clickPinCode(){
    cy.get(pageSelectors.postalCode).click()
  }

  typePinCode(pinCode){
    cy.get(pageSelectors.postalCode).type(pinCode)
  }

  verifyErrorMessageDisplayed(shouldBeDisplayed){
    cy.get(pageSelectors.inputErrorMsg).should(shouldBeDisplayed ? 'be.visible' : 'not.be.visible')
  }

  clickShippingLabel(){
    cy.get(pageSelectors.shippingLabel).click()
  }

  notEmptyShoppingCart(){
    return cy.get(pageSelectors.postalCode).length
  }
}
