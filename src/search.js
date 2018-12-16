const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({headless: false, slowMo: 100})
  const page = await browser.newPage()

  await page.goto('https://google.com')

  // Type into search box.
  await page.type('[name=q]', 'Headless Chrome')

  await page.waitForSelector('.sbct')
  await page.click('.sbct')

  await page.waitFor(3000)

  await browser.close()
})()
