// @ts-check
const { test, expect } = require("@playwright/test");

test("homepage title is correct", async ({ page }) => {
  await page.goto("localhost:3000");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/React App/);
  let pageTitle = await page.locator("#pageTitle");
  await expect(pageTitle).toHaveText("QA Automation Demo Github CI");
});
