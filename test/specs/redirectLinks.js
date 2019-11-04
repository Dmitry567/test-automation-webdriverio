import { expect } from "chai";

describe("Main page", () => {
  before(() => {
    browser.url("https://www.allergan.com/");
  });
  it("click to Contact link should redirect to Contact page", () => {
    $('//a[@href="/contact"]').click();
    const actualH1Text = $("//h1").getText();
    const expected = "CONTACT ALLERGAN";

    expect(actualH1Text).to.eq(expected);
  });

  it("should verify the Contact Allergan text area is displayed", () => {
    const contactAllergan = $('//h4[@data-anchor="Contact_Allergan"]');
    expect(contactAllergan.isDisplayed()).to.be.true;
  });

  it("should verify that Please select a recipient area is displayed", () => {
    const pleaseSelectARecipient = $('//span[@class="label"]');
    expect(pleaseSelectARecipient.isDisplayed()).to.be.true;
  });
});
