import { expect } from "chai";

describe(`waitFor* commands`, () => {
  before(() => {
    browser.url("https://the-internet.herokuapp.com/dynamic_controls");
  });
  /*
  it(`waitForDisplayed`, () => {
    $(`#start button`).click();
    $(`#finish`).waitForDisplayed();

    expect($(`#finish h4`).getText()).to.equal(`Hello World!`);
  });
  */

  it(`waitForExist`, () => {
    $(`#start button`).click();
    $(`#finish`).getText();
  });

  /*
  it(`waitForExist`, () => {
    $(`#start button`).click();

    $(`#loading`).waitForDisplayed(undefined, true);
    const text = $(`#finish`).getText();
  });
  */

  it(`waitForEnabled`, () => {
    const input = $(`#input-example input`);
    $(`#input-example button`).click();

    input.waitForEnabled();
    input.addValue(`fooooo`);
    browser.pause(10000);
  });
});
