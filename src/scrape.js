const puppeteer = require('puppeteer')

const scrape = async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/')
  await page.click('article.product_pod a')

  const result = await page.evaluate(() => {
    const title = document.querySelector('h1').innerText
    const price = document.querySelector('.price_color').innerText
    return {title, price}
  })

  browser.close()
  return result
}

scrape().then((value) => {
  console.log(value)
})
