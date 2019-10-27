import { expect } from "chai";

describe("AMAZON", () => {
  before(() => {
    browser.url("https://www.google.com");
  });

  it("should open google and type AMAZON in search bar", () => {
    const input = $('//input[@title="Search"]');
    input.setValue("AMAZON");
    browser.keys("Enter");
  });

  describe("Main page", () => {
    before(() => {
      browser.url("https://www.amazon.com/");
    });

    it("should have correct site name", () => {
      const element = $('//div[@id="nav-logo"]');
      const text = element.getText();

      const expected = "Try Prime";

      expect(text).to.equal(expected);
    });

    it("should type SAMSUNG in the search bar of AMAZON", () => {
      const input = $('//input[@type="text"]');
      input.setValue("SAMSUNG");
      browser.keys("ENTER");
    });
  });
});
