const puppeteer = require('puppeteer');
const data = require('./data.js')

let ffs = async() => {
  const urls = await urls(process.argv[3])

  for (i=0; i<urls.length; i++) {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
    });

    // Do your magic here...
    const page = await browser.newPage();

    await page.setExtraHTTPHeaders({
      'referer': 'https://discordapp.com'
    });

    await page.goto(urls[i]);
    await browser.close();
  }
}
ffs()