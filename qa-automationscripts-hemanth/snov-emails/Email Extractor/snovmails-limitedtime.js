const puppeteer = require('puppeteer');
const fs = require('fs')
require('dotenv').config();
let config={ 
    launchOptions: {
        headless:false
    }
}
const loginpage={
    email:'#email',
    password:'#password',
    loginButton:'#buttonFormLogin'
}
const mailid=process.env.MAIL_ID;
const password=process.env.PASSWORD;
const domainsearch='https://app.snov.io/domain-search';
const domainname=process.env.DOMAIN_NAME;
puppeteer.launch(config.launchOptions).then(async browser =>{
    const page = await browser. newPage();
    await page.goto(domainsearch,{
        waitUntil: 'load',timeout:0
    });
    await page.waitForSelector('div');
    await page.type(loginpage.email,mailid);
    await page.type(loginpage.password,password);
    await page.click(loginpage.loginButton);
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.waitForSelector('div');
    await page.focus('[data-test=domain-name]');
    await page.keyboard.type(domainname, { delay: 10 });
    await page.keyboard.press('ArrowDown', { delay: 20 });
    await page.keyboard.press('Enter');
    await page.focus('[data-test=domain-search-start-search]');
    await page.keyboard.press('Enter');
    await sleep(5000);
    try {
        await page.click('.choice > :nth-child(2)');
    } catch (error) {
        sleep(2000)
        console.log(error);
        try {
            await page.click('.choice > :nth-child(2)');
        } catch (error) {
            console.log(error);   
        }
    }
    const d = new Date();
    let starttime=d.getTime();
    await sleep(4500);
    let element = await page.$('.choice__item--active > .choice__item-label');
    let totalnumbervalue = await page.evaluate(el => el.innerText, element);
    while((await page.$eval('.common-box > .btn-snovio--gray', (elem) => {
        return elem.style.display !== 'none'
        })) &&  ((new Date().getTime())-starttime)<=600000){                 
        await sleep(3000)
        try 
        {
            await page.focus('.common-box > .btn-snovio--gray');
        }catch (error) {
            break
        }
        await sleep(3000);
        // console.log(d.getTime)
        try {
            await page.click('.common-box > .btn-snovio--gray');
        } catch (error) {
            try {
                await page.click('.common-box > .btn-snovio--gray');
            } catch (error) {
                console.log(error);
            }  
        }
    }   
    const mailsdata = [];
    mailcounts=Array.from({length: totalnumbervalue}, (_, i) => i + 1);
    for(const mailcount of mailcounts){
        let classref=':nth-child('+mailcount+') > :nth-child(2) > .row__cell-text';
        let elementmail = await page.$(classref);
        if(elementmail==null){
            break
        }
        let mailvalue = await page.evaluate(el => el.innerText, elementmail);
        mailsdata.push(mailvalue);
    }
    const mailsjsondata={
        domain:domainname,
        emails:mailsdata
        }
    const jsonString = JSON.stringify(mailsjsondata)
    fs.writeFile('./mails.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
    await browser.close();
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}