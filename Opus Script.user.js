// ==UserScript==
// @name        Opus Script
// @namespace   C4OpusScriptuserscript
// @match       *://opus/*
// @grant       none
// @version     1.0
// @author      Dan M
// @description 1/4/2025, 8:35:33 AM
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==

function copyText(stringText) {
  navigator.clipboard.writeText(stringText);
  console.log("Copied");
}

VM.shortcut.register('a-l', () => {
  console.log('You just pressed Alt-L');
  //let utxp = document.querySelectorAll("[class='mainmenu ng-binding']")[3].innerText;
  //let drxl = document.querySelectorAll("[class='mainmenu ng-binding']")[7].innerText;
  let utxp = document.querySelectorAll("[class='mainmenu ng-binding']")[7].innerText;
  let drxl = document.querySelectorAll("[class='mainmenu ng-binding']")[11].innerText;
  //console.log("UTXP: " + utxp + " " + "DRXL: " + drxl);
  let signals = "UTXP: " + utxp + "\n" + "DRXL: " + drxl;
  copyText(signals);
});

VM.shortcut.register('a-i', () => {
  console.log('You just pressed Alt-I');
  let ipAddvalue = document.getElementsByClassName("interfaceButtonList ng-binding")[5].innerText;
  let wordToRemove = "IP Address: ";
  let ipAdd = ipAddvalue.replace(new RegExp(`\\b${wordToRemove}\\b`, 'g'), '');
  let result = ipAdd.trim();
  console.log("Value: " + result);
  copyText(result);
});
