// @ts-check
const { test, expect } = require("@playwright/test");

test("homepage title is correct", async ({ page }) => {
  await page.goto("https://www.greencompassdev.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
  let pageTitle = await page.locator("#pageTitle");
  await expect(pageTitle).toHaveText("QA Automation Demo Github CI");
});

// test("Join Now Route", async ({ page }) => {
//   await page.goto("https://www.greencompassdev.com/");
//   await page.getByRole("link", { name: "LOGIN" }).click();
//   await page.getByRole("link", { name: "Join Now" }).click();
//   await expect(page).toHaveURL(
//     "https://www.greencompassdev.com/enrollment/become-an-associate"
//   );
// });
