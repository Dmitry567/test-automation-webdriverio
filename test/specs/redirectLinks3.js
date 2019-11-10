import { expect } from "chai";

describe("Main page", () => {
  before(() => {
    browser.url("https://www.allergan.com/");
  });
  it("it should verify that link Investors is displayed", () => {
    const linkInvestors = $('//a[@href="/investors"]');
    expect(linkInvestors.isDisplayed()).to.be.true;
  });
  it("click to Investors link should redirect to Investors page", () => {
    $('//a[@href="/investors"]').click();
    const actualText = $('//a[@class="segment-name"]').getText();
    const expected = "Investors";

    expect(actualText).to.eq(expected);
  });
  it("it should detect if element is existing", () => {
    const element = $("//h1");
    const isExisting = element.isExisting();

    console.log(isExisting);
  });
});
