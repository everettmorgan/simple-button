const { expect } = require('chai');
const puppeteer = require('puppeteer');
const path = require('path');

describe("button#cta", function() {
  describe("click", function() {
    it("should change p's innerText to 'You clicked it!'", async function() {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox"]
      });
      const page = await browser.newPage();
      await page.goto(`file://${path.join(path.resolve("."), "circleci.html")}`);

      const btn = await page.$("#cta");
      btn.click();

      page.$eval("#text", function(el) {
        expect(el.innerText).to.equal("You clicked it!");
      })

      await browser.close();
    })
  })
})