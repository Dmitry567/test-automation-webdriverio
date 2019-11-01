import { expect } from "chai";

describe("ALLERGAN", () => {
  before(() => {
    browser.url("https://www.google.com");
  });

  it("should open google and type ALLERGAN in search bar", () => {
    const input = $('//input[@title="Search"]');
    input.setValue("ALLERGAN");
    browser.keys("Enter");
  });

  describe("Main page", () => {
    before(() => {
      browser.url("https://www.allergan.com/");
    });

    it("should check for home title", () => {
      const homeResultTitle = $('//h1[@class="home-title"]').getText();
      const expectedIncludesTitle = "LIVE BOLDLY";

      expect(homeResultTitle).to.include(expectedIncludesTitle);
    });

    it("should click Watch video button", () => {
      const myButton = $('//a[@class="btn-primary with-arrow-right"]');
      myButton.click();

      browser.pause(40000);
    });
  });
});
