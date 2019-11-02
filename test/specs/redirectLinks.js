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

    browser.pause(10000);
  });
});
