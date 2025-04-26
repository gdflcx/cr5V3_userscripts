// ==UserScript==
// @name        BEAT C4
// @namespace   Violentmonkey Scripts
// @match       https://beat.corp.cableone.net/d/ae0wt9aw6hp8ga/beat*
// @grant       none
// @version     1.0
// @author      -
// @description 4/25/2025, 8:58:40 AM
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==

function copyText(stringText) {
  navigator.clipboard.writeText(stringText);
  console.log("Copied");
}


function getAllInnerTextByClassName(className) {
  const elements = document.getElementsByClassName(className);
  const textValues = [];

  for (let i = 0; i < elements.length; i++) {
    textValues.push(elements[i].innerText);
  }

  return textValues;
}



VM.shortcut.register('a-l', () => {
  console.log('You just pressed Alt-L');
  let myDivTexts = getAllInnerTextByClassName("css-1qonaiz-panel-container-panel-transparent-container");
  //console.log(myDivTexts);
  //myDivTexts.forEach(item => { console.log(item); });
  //console.log('Downstream: ' + myDivTexts[5]);
  //console.log('Upstream ' + myDivTexts[6]);
  let dsArray = myDivTexts[5].split('\n');
  let usArray = myDivTexts[6].split('\n');
  console.log('dsRxLvl: ' + dsArray[2]);
  console.log('usTxPwr: ' + usArray[2]);

});

VM.shortcut.register('a-i', () => {
  console.log('You just pressed Alt-I');
  const myDivTexts = getAllInnerTextByClassName("css-1gql3gv-cellContainerOverflow");
  console.log(myDivTexts[9]);
  copyText(myDivTexts[9]);
  //let ipAddress = myDivTexts.split(',');
  //console.log(ipAddress[0]);


  /*
  let ipAddvalue = document.getElementsByClassName("interfaceButtonList ng-binding")[5].innerText;
  let wordToRemove = "IP Address: ";
  let ipAdd = ipAddvalue.replace(new RegExp(`\\b${wordToRemove}\\b`, 'g'), '');
  let result = ipAdd.trim();
  console.log("Value: " + result);
  copyText(result);
  */
});



