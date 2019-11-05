import { expect } from "chai";

describe("Main page", () => {
  before(() => {
    browser.url("https://www.allergan.com/");
  });
  it("should verify that element Search is displayed on the Main page", () => {
    const Search = $('//a[@href="/search"]');
    expect(Search.isDisplayed()).to.be.true;
  });
  it("click on link Search should redirect to Search page", () => {
    $('//a[@href="/search"]').click();
    const actualH1Text = $("//h1").getText();
    const expected = "SEARCH ALLERGAN";

    expect(actualH1Text).to.eq(expected);
  });

  it("should verify that element Search Bar is displayed on the Search page", () => {
    const searchBar = $('//input[@type="text"]');
    expect(searchBar.isDisplayed()).to.be.true;
  });

  it("should type CARE in the Search Bar", () => {
    const input = $('//input[@type="text"]');
    input.setValue("CARE");

    browser.pause(10000);
  });
});
