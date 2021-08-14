import { SamsungPages } from "../../support/pages/page-objects/SamsungPages";

describe('Purchase a device from Samsung website', () => {

    const samsungPages = new SamsungPages()
    const pinCode = '004485';

    it('Verify samsung home page is opened', () => {
        samsungPages.navigateHomePage()
    })


    it('Go to the device page', () => {
        samsungPages.navigateToTheDevicePage()
    })

    it('Click on continue or add to cart button', () => {
       samsungPages.clickOnAddToCartButton()
    })

    it('Click on skip button', () => {
        samsungPages.clickOnSkipButton()
    })

    it('Pay Now', () => {
        samsungPages.clickPayNowButton()
    })
    it('Continue as guest', () => {
        samsungPages.clickOnContinueAsGuest()
    })

    it('Click on pin code field and verify if the error message is displayed', () => {
        samsungPages.clickPinCode()
        samsungPages.clickShippingLabel()
        samsungPages.verifyErrorMessageDisplayed(true)
        samsungPages.typePinCode(pinCode)
        samsungPages.verifyErrorMessageDisplayed(false)
    })
})
