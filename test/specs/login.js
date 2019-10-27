//import { expect } from "chai";

//describe("Login form", () => {
// before(() => {
//   browser.url("https://stage.pasv.us/user/login");
//  });

//  it("should login", () => {
//    const emailField = $('//input[@name="email"]');
//    const passwordField = $('//input[@name="password"]');
//    const button = $('//button[$type="submit"]');

//    const EMAIL = "admin@test.com";
//    const PASSWORD = "11111";

//    emailField.setValue(EMAIL);
//    passwordField.setValue(PASSWORD);

//    button.click();

//    browser.pause(1000);
//  });

//  it("should have success message", () => {
//    const userName = "Ruslan Admin";
//    const h1 = $("//h1").getText();

//    expect(h1).to.eq(userName);
//  });
//});

import { url } from "../specs/constants";
import { user } from "../constants";

export default function loginAction(browser) {
  browser.url(url.login);

  const emailField = $('//input[@name="email"]');
  const passwordField = $('//input[@name="password"]');
  const button = $('//button[@type="submit"]');

  emailField.setValue(user.admin.email);
  passwordField.setValue(user.admin.password);

  button.click();
  // browser.pause(1000)
}
