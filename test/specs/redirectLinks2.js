import { expect } from "chai";

describe("Main page", () => {
  before(() => {
    browser.url("https://www.allergan.com/");
  });

  it("should verify that element link Twitter is displayed", () => {
    const linkTwitter = $(
      '//a[@href="https://twitter.com/user/status/1191762227453399042"]'
    );
    expect(linkTwitter.isDisplayed()).to.be.true;
  });

  it("click on link Twitter should redirect to Allergan pic on Twitter", () => {
    $('//a[@href="https://t.co/xzipc81Kau"]').click();
    const actualText = $(
      '//img[@class="avatar js-action-profile-avatar"]'
    ).getText();
    const expected = "Allergan";

    expect(actualText).to.eq(expected);
  });
});
