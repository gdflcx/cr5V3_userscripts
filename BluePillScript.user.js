// ==UserScript==
// @name        BluePillScript
// @namespace   C4BluePilluserscript
// @match       *://bluepill/*
// @grant       none
// @version     1.0
// @author      Dan M
// @description 1/4/2025, 11:08:58 AM
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==

function copyText(stringText) {
  navigator.clipboard.writeText(stringText);
  console.log("Copied");
}

VM.shortcut.register('a-l', () => {
  console.log('You just pressed Alt-L');
  let usTxPwr = document.querySelectorAll(".fastPollerTable td")[28].innerText;
  let dsRxLvl = document.querySelectorAll(".fastPollerTable td")[8].innerText;
  //console.log("UTXP: " + utxp + " " + "DRXL: " + drxl);
  let signals = "UTXP: " + usTxPwr + " " + "\nDRXL: " + dsRxLvl;
  copyText(signals);
});

VM.shortcut.register('a-i', () => {
  console.log('You just pressed Alt-I');
  let ipAddvalue = document.querySelector("#cmIPLink > u").innerText;
  let wordToRemove = "CM IP: ";
  let ipAdd = ipAddvalue.replace(new RegExp(`\\b${wordToRemove}\\b`, 'g'), '');
  let result = ipAdd.trim();
  console.log("Value: " + result);
  copyText(result);
});