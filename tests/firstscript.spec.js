// import { test } from "@playwright/test";

// test('sample first script', async ({ browser }) => {
//   const context = await browser.newContext();
//   const page = await context.newPage();

//   await page.goto('https://demoapps.qspiders.com/ui?scenario=1',{timeout:60000});

//   const url = await page.url();
//   console.log("The URL of the page is:", url);

//   const title = await page.title();
//   console.log("The title of the page is:", title);

//   // Set viewport size
//   await page.setViewportSize({ width: 1080, height: 720 });

//   // Get current viewport size
//   const viewport = page.viewportSize();
//   console.log("The viewport of the page is:", viewport);
// });

// test.only('Regiser',async({page}) => {
//     await page.goto('https://demoapps.qspiders.com/ui?scenario=2',{timeout:40000});

//     await page.getByplaceholder('Enter your name').fill('xyz');
//     await page.getByplaceholder('Enter your password').fill('xyz@1234');
//     await page.getByplaceholder('Enter your password').fil('Melvin@1234');

//     await page.getByrole('button',{name:'Register'}).click();
//     await page.pause();
// })



import {test,expect} from'@playwright/test'

test('Demo project',async({page}) =>{

await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');

await page.getByRole('button',{name:'Yes'}).click();

 const message=page.getByText('You selected "Yes"')
 await expect(message).toBeVisible();

 console.log (await message.textContent());

 await page.getByRole('button',{name:'No'}).click();

 const nomessage=page.getByText('You selected "No"')
 await expect (nomessage).toBeVisible();

 console.log (await nomessage.textContent());
});
  