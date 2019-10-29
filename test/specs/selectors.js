import { expect } from "chai";

describe("Overview selectors", () => {
  before(() => {
    browser.url("https://the-internet.herokuapp.com/");
  });

  it("should verify selectors", () => {
    const text = $("h1.heading").getText();

    console.log(text);
  });

  it("should verify selectors", () => {
    const text = $("h2=Available Examples").getText();

    console.log(text);
  });

  it("should verify selectors", () => {
    $(`ul`)
      .$(`a=Checkboxes`)
      .click();

    browser.pause(30000);
  });
});

// it("should verify selectors", () => {
//  $('//a[@href="/broken_images"]').click();
// });
//});
