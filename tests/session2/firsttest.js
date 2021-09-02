import { Selector } from 'testcafe';

fixture `codingchallenge`
    .page `www.google.com`;

test
('contactus', async t => {
    const googleSearch = Selector('input[title="Search"]')
    const searchButton = Selector('a[class="ab_button"]')
    const securepayButton = Selector('div[class="button-group"]')
    const contactUs = Selector('span').withText('Contact us');
    const supportForm = Selector('#support-form');
    const firstName = Selector('input[name="firstName"]');
    const lastName = Selector('input[name="lastName"]');
    const email = Selector('input[name="email"]');
    const phone = Selector('input[name="phone"]');
    const company = Selector('input[name="company"]');
    const website = Selector('input[name="website"]');
    const amount = Selector('div[class="c-select"]')
    const amountSelect = Selector('option[value="0"]');
    const message = Selector('textarea[name="message"]');
    //google page
    await t
        .expect(googleSearch.value).eql('')
        .typeText(googleSearch,"Securepay")
        .pressKey('enter')
        .expect(searchButton.visible).ok()
        .click(searchButton)
        .expect(securepayButton.visible).ok()
    //Main page
        .takeElementScreenshot(contactUs)
        .click(contactUs)
    //Contact us page
        .expect(supportForm.visible).ok()
    //enter firstname
        .expect(firstName.value).eql('')
        .typeText(firstName,random(5))
    //enter lastname
        .expect(lastName.value).eql('')
        .typeText(lastName,random(5))
    //enter email
        .expect(email.value).eql('')
        .typeText(email,random(5)+ "@yopmail.com")
    //enter phone
        .expect(phone.value).eql('')
        .typeText(phone,random(10,'num'))
    //enter company name
        .expect(company.value).eql('')
        .typeText(company,random(5))
    //enter website
        .expect(website.value).eql('')
        .typeText(website,random(5)+".com.au")
    //select amount
        .click(amount)
        .click(amountSelect)
    //enter message
        .expect(message.value).eql('')
        .typeText(message,random(5))
        .takeScreenshot()
    .wait(5000);
});
function random(length,text='string') {
    var result           = '';
    var characters;
    if (text == "string")
    {
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    else
    {
        characters = '0123456789';
    }
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
function makenum(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
//skip this test
test
    .skip
    ('CodingChallenge', async t => {
        console.log("this is my first code");
    });


