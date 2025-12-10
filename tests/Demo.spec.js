import { test, expect } from '@playwright/test';

test('Run all field', async ({ page }) => {

//   await page.goto('https://demoapps.qspiders.com/ui');
//   await page.getByPlaceholder('Enter your name').fill('Melvin');
//   await page.getByPlaceholder('Enter Your Email').fill('melvin@gmail.com');
//   await page.getByPlaceholder('Enter your password').fill('Abc@123');
//   await page.getByRole('button', { name: 'Register' }).first().click();
//   await page.waitForTimeout(2000);

//   await expect(page.getByText('Registered successfully').first()).toBeVisible();
//   await page.waitForTimeout(2000);

//   await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0');
//   await page.getByRole('button', { name: 'Yes' }).click();
//   await page.waitForTimeout(2000);

//   // FIXED: removed nth(1)
//   await expect(page.getByText('You selected "Yes"')).toBeVisible();
//   await page.waitForTimeout(2000);

//   await page.getByRole('button', { name: 'No' }).click();
//   await expect(page.getByText('You selected "No"')).toBeVisible();

//   await page.goto('https://demoapps.qspiders.com/ui/link');
//   await page.locator('#kids').click();
//   await page.waitForTimeout(2000);

// await page.goto('https://demoapps.qspiders.com/ui/link/linkNew?sublist=1')
// await page.screenshot({path:'Screeshot.png',fullPage: true}); 

await page.goto ('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=8663055880192083909&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9149508&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1')

await page.getByRole('img',{name:'Cushion covers, bedsheets & more'}).click();


 await page.getByText('Buy Home Furnishing Products Online at Amazon India').screenshot({path: 'text.png' })

});

