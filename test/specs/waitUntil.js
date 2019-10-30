import { expect } from "chai";

describe(`waitUntil`, () => {
  before(() => {
    browser.url(`https://the-internet.herokuapp.com/dynamic_controls`);
  });

  it(`should wait...`, () => {
    $(`#checkbox-example button`).click();

    browser.waitUntil(() => {
      return !$(`#checkbox`).isExisting();
    });
  });
});
