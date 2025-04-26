// ==UserScript==
// @name        ServiceNow C4
// @match       *://caboproduction.service-now.com/now/*
// @grant       GM_addStyle
// @grant       unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @version      1.0
// @author       Daniel Marinez
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// @require https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
// ==/UserScript==


function querySelectorDeep(selector, root = document) {
let result = root.querySelector(selector);
if (result) return result;

// Traverse shadow roots
let allElements = root.querySelectorAll('*');
for (let el of allElements) {
	if (el.shadowRoot) {
		let shadowResult = querySelectorDeep(selector, el.shadowRoot);
		if (shadowResult) return shadowResult;
	}
}
return null;
}


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function executeAfterDelay() {
  await delay(500);
  console.log('Executed after 500 ms');
}

async function checkElementWithRetries(selector, maxRetries = 10, delay = 100) {
    let retries = 0;
    while (retries < maxRetries) {
        let element = querySelectorDeep(selector);
        if (element) {
            return element; // Element found, return it
        }
        retries++;
        if (retries < maxRetries) {
            await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
        }
    }
    return null; // Element not found after max retries
}


function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard successfully!');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });
}


async function selectTemp(){
  let temp = querySelectorDeep("[aria-label='Templates'");
  if (temp) {
    temp.click();
    await executeAfterDelay();
    let cSave = await checkElementWithRetries("[aria-label='Save'");
    let ctemp = await checkElementWithRetries("[class='now-card-header-heading-label'");
    if (ctemp) {
      console.log('Found');
      ctemp.click();
      await executeAfterDelay();
      cSave.click();
      //ctemp.click();
      //ctemp.click();
    }
    //let ctemp = await checkElementWithRetries("[aria-label='Template card for Testdlm'");
    //ctemp.click();
    //await executeAfterDelay();
    //ctemp.click();

    //let cSave = await checkElementWithRetries("[aria-label='Save'");
      //if (cSave) {
        //cSave.click();
      //}
  }
}



(function() {

    function clickButton() {
      let name = querySelectorDeep("[aria-label='Refresh'");
      let pageTitle = document.title;
      console.log(pageTitle);
      if (name) {
        name.click();
        console.log('Clicked button');
      }
      else {
        console.log('No button');
      }
    }
    // Run the function at a set interval
    setInterval(clickButton, 10000); // Refresh every 10 seconds
})();


VM.shortcut.register('a-z', () => {
  console.log('You just pressed alt-z');
  selectTemp();
});

VM.shortcut.register('a-o', () => {
  console.log('You just pressed alt-o');
  let oaddress = querySelectorDeep("[aria-label='Address. This field has no character limit.'");
  let baconLink = querySelectorDeep("[aria-label='Bacon Link. This field has no character limit.'");
  let oDetails = querySelectorDeep("[aria-label='Additional Notes. This field has no character limit.'");
  if (oaddress && baconLink && oDetails) {
    console.log(oaddress.value + "\n" + baconLink.value + "\n" + oDetails.value);
    let text = oaddress.value + "\n" + baconLink.value + "\n" + oDetails.value;
    copyText(text);
  }
});


