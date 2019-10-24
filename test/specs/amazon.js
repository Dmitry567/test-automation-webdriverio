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

      const expected = "Amazon";

      expect(text).to.equal(expected);
    });
  });
});
