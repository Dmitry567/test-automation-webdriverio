import { expect } from "chai";

describe("Main page", () => {
  before(() => {
    browser.url("https://www.allergan.com/");
  });

  it("should check for home title", () => {
    const homeResultTitle = $('//h1[@class="home-title"]').getText();
    const expectedIncludesTitle = "LIVE BOLDLY";

    expect(homeResultTitle).to.include(expectedIncludesTitle);
  });

  it("should detected if an element is displayed", () => {
    const isDisplayed = $('//a[@href="/patients-caregivers"]').isDisplayed();
    expect(isDisplayed).to.be.false;
  });

  it("should detected if an element is displayed", () => {
    const isDisplayed = $('//a[@href="/healthcare-providers"]').isDisplayed();
    expect(isDisplayed).to.be.false;
  });
  it("should detected if an element is displayed", () => {
    const isDisplayed = $('//a[@href="/careers"]').isDisplayed();
    expect(isDisplayed).to.be.true;
  });
  it("should detected if an element is displayed", () => {
    const isDisplayed = $('//a[@href="/investors"]').isDisplayed();
    expect(isDisplayed).to.be.true;

    browser.pause(10000);
  });
});
