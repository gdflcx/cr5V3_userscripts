// ==UserScript==
// @name        Firmware
// @namespace   Firmware Script
// @match       *://hsdtoolbox/tools/firmware/updater.php
// @grant       none
// @version     1.0
// @author      -
// @description 12/25/2024, 3:32:22 PM
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at       document-idle
// ==/UserScript==

/*
function getModel(){
  //console.log('Howdy!');
  var model = document.getElementById('modemver').textContent;
  if (model === '  ') {
    console.log("True");
    //console.log(model);
    //setInterval(getModel, 5000);
  }


}

getModel();
*/

function waitForTextChange(element, callback) {
  const observer = new MutationObserver(() => {
    callback();
    observer.disconnect(); // Stop observing after the change
  });

  observer.observe(element, { childList: true, characterData: true, subtree: true });
}


const targetElement = document.getElementById('modemver');

waitForTextChange(targetElement, () => {
  console.log('Text content changed!');
  console.log(targetElement.textContent);
  // Do something after the text content has changed
  document.querySelector('select[name="colo"]').value = '10.192.59.163';

  //Arris
  if (targetElement.textContent.includes('Arris 502')) {
    console.log('Arris 502');
    document.querySelector('select[name="file2"]').value = 'TS0601137_111615_NA.MODEL_4_5.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('512')) {
    console.log('Arris 512');
    document.querySelector('select[name="file2"]').value = 'TS0601134_120712_NA.MODEL_5_ML.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('552G')) {
    console.log('Arris 552G');
    document.querySelector('select[name="file2"]').value = 'TS060177_102309_NA.MODEL_5_WR.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('602G')) {
    console.log('Arris 602G');
    document.querySelector('select[name="file2"]').value = 'TS0601137_111615_NA.MODEL_6.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('604G')) {
    console.log('Arris 604G');
    document.querySelector('select[name="file2"]').value = 'TS0601137_111615_NA.MODEL_6.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('608G')) {
    console.log('Arris 608G');
    document.querySelector('select[name="file2"]').value = 'TS0601137_111615_NA.MODEL_6_ML.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('652G')) {
    console.log('Arris 652G');
    document.querySelector('select[name="file2"]').value = 'TS0601137_111615_NA.MODEL_6_WR.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('722G')) {
    console.log('Arris 722G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S_122215_NA.MODEL_7_8.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('802G')) {
    console.log('Arris 802G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5AT_032521_NA.MODEL_860.GW.MONO-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('804G')) {
    console.log('Arris 804G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5AR_072720_NA.MODEL_7_8.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('822G')) {
    console.log('Arris 822G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5AT_032521_NA.MODEL_7_8.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('852G')) {
    console.log('Arris 852G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5Q_071217_NA.852.GW.SIP.MONO-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('862G')) {
    console.log('Arris 862G');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5AT_032521_NA.862.GW.SIP.MONO-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM8200A')) {
    console.log('Arris CM8200A');
    document.querySelector('select[name="file2"]').value = 'AB01.02.053.01_112320_193.0A.NSH.NA-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM820A')) {
    console.log('Arris CM820A');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5R_112017_NA.WBM760_CM820-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG1660')) {
    console.log('Arris DG16XX');
    document.querySelector('select[name="file2"]').value = 'TS0901103GY_042023_NA.16XX.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG1670')) {
    console.log('Arris DG16XX');
    document.querySelector('select[name="file2"]').value = 'TS0901103GY_042023_NA.16XX.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG3270A')) {
    console.log('Arris DG3270A');
    document.querySelector('select[name="file2"]').value = 'TS0901103CM_070318_NA.24XX.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG3450')) {
    console.log('Arris DG3450');
    document.querySelector('select[name="file2"]').value = 'AR01.04.054.04_081921-cableone.simg';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG860P2')) {
    console.log('Arris DG860P2');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5AT_032521_NA.MODEL_860.GW.MONO-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('DG9450')) {
    console.log('Arris DG9450');
    document.querySelector('select[name="file2"]').value = 'AB01.05.018.01_042023-cableone.simg';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG5225')) {
    console.log('Arris MG5225');
    document.querySelector('select[name="file2"]').value = 'TS071475_110415_NA.MODEL_9.MG5000.SIP-cableone2.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('S33')) {
    console.log('Arris S33/S33v2');
    document.querySelector('select[name="file2"]').value = 'TB01.03.001.11_051722-cableone.simg';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB612')) {
    console.log('Arris SB612X');
    document.querySelector('select[name="file2"]').value = 'SB_KOMODO-1.0.7.3-SCM02-NOSH.NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB6141')) {
    console.log('Arris SB6141');
    document.querySelector('select[name="file2"]').value = 'SB_KOMODO-1.0.7.3-SCM02-NOSH.NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB6180')) {
    console.log('Arris SB6180');
    document.querySelector('select[name="file2"]').value = 'SB6180-3.5.8.6-GA-01-525-NOSH-NNDMN-cableone2.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB6182')) {
    console.log('Arris SB6182');
    document.querySelector('select[name="file2"]').value = 'SB6182-6.5.3.2-GA-01-140-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB6183')) {
    console.log('Arris SB6183');
    document.querySelector('select[name="file2"]').value = 'D30CM-OSPREY-2.4.0.0-GA-03-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB6190')) {
    console.log('Arris SB6190');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.1602.TM.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SB8200 ')) {
    console.log('Arris SB8200');
    document.querySelector('select[name="file2"]').value = 'AB01.02.053.05_051921-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG10')) {
    console.log('Arris SBG10');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.SB10.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6400')) {
    console.log('Arris SBG6400');
    document.querySelector('select[name="file2"]').value = 'D30GW-HARRIER-1.5.2.7-GA-00-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6580 ')) {
    console.log('Arris SBG6580');
    document.querySelector('select[name="file2"]').value = 'SBG6580-8.9.0.5-GA-03-154-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6580-2')) {
    console.log('Arris SBG6580');
    document.querySelector('select[name="file2"]').value = 'D30GW-SEAEAGLE-1.5.4.0-GA-09-NOSH-NNDAN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6700-AC')) {
    console.log('Arris SBG6700-AC');
    document.querySelector('select[name="file2"]').value = 'D30GW-EAGLE-1.5.4.0-GA-10-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6782-AC')) {
    console.log('Arris SBG6782-AC');
    document.querySelector('select[name="file2"]').value = 'D30GW-EAGLE-1.5.4.0-GA-10-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6900-AC')) {
    console.log('Arris SBG6900-AC');
    document.querySelector('select[name="file2"]').value = 'D30GW-OSPREY-1.5.4.0-GA-09-NOSH-NNDAN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG6950AC2')) {
    console.log('Arris SBG6950AC2');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.1692.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG7400AC2')) {
    console.log('Arris SBG7400AC2');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.1692.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG7580-AC')) {
    console.log('Arris SBG7580-AC');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.24XX.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG7600AC2')) {
    console.log('Arris SBG7600AC2');
    document.querySelector('select[name="file2"]').value = 'TS0901103AA78_010820_NA.1692.GW.ATOM-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG8300')) {
    console.log('Arris SBG8300');
    document.querySelector('select[name="file2"]').value = 'AR01.02.078.04_092820_711.NCS.10.7.NA-cableone.simg';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG900')) {
    console.log('Arris SBG900');
    document.querySelector('select[name="file2"]').value = 'SBG900-2.1.18.0-SCM00-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('SBG901')) {
    console.log('Arris SBG901');
    document.querySelector('select[name="file2"]').value = 'SBG901-2.1.7.0-GA-00-386-NOSH-NNDMN-cableone.p7';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('TG16')) {
    console.log('Arris TG16XX');
    document.querySelector('select[name="file2"]').value = 'TS0901103S_122215_NA.16XX.GW.ATOM.SIP-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('WBM760A')) {
    console.log('Arris WBM760A');
    document.querySelector('select[name="file2"]').value = 'TS0901103S5R_112017_NA.WBM760_CM820-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

  //Hitron
  else if (targetElement.textContent.includes('CGNM-2252')) {
    console.log('Hitron CGNM-2252');
    document.querySelector('select[name="file2"]').value = 'CGNM_4.5.11.25b3-211130-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CGNVM-3582')) {
    console.log('Hitron CGNVM-3582');
    document.querySelector('select[name="file2"]').value = 'CGNVM_4.5.11.46b1-220701-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA-458')) {
    console.log('Hitron CODA-4582/4589');
    document.querySelector('select[name="file2"]').value = 'CODA458X-7.2.4.7.1b13-230428-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA-5519')) {
    console.log('Hitron CODA-5519');
    document.querySelector('select[name="file2"]').value = 'CODA5X1X-BIOS-7.3.5.1.2b12-20240802-D30-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA-5712')) {
    console.log('Hitron CODA-5712');
    document.querySelector('select[name="file2"]').value = 'CODA5X1X-BIOS-7.3.5.1.2b12-20240802-D30-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA-5719')) {
    console.log('Hitron CODA-5719');
    document.querySelector('select[name="file2"]').value = 'CODA5X1X-BIOS-7.3.5.1.2b12-20240802-D30-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA-57-RES ')) {
    console.log('Hitron CODA-57-RES');
    document.querySelector('select[name="file2"]').value = 'CODA-5X-RES-7.3.5.0.1b6-SEC-24062621-NA-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('EN2251')) {
    console.log('Hitron EN2251');
    document.querySelector('select[name="file2"]').value = 'EN2251-7.2.4.7.1b7-011623-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('NOVA-2002')) {
    console.log('Hitron NOVA-2002');
    document.querySelector('select[name="file2"]').value = 'NOVA-200X-1.9.4b15-nosign-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA ')) {
    console.log('Hitron CODA');
    document.querySelector('select[name="file2"]').value = 'CODA-46-RTL-7.3.5.0.1b2-053123-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CODA56')) {
    console.log('Hitron CODA56');
    document.querySelector('select[name="file2"]').value = 'CODA-56-RTL-7.3.5.0.1b2-230531-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

  //Linksys
  else if (targetElement.textContent.includes('CG7500')) {
    console.log('Linksys CG7500');
    document.querySelector('select[name="file2"]').value = 'FW_CG7500_1.0.00.023-171012-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM3008')) {
    console.log('Linksys CM3008');
    document.querySelector('select[name="file2"]').value = 'FW_CM3008_1.0.00.013-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM3016')) {
    console.log('Linksys CM3016');
    document.querySelector('select[name="file2"]').value = 'FW_CM3016_1.0.00.013-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM3024')) {
    console.log('Linksys CM3024');
    document.querySelector('select[name="file2"]').value = 'FW_CM3024_1.0.00.013-cableone.sbn';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

  //Motorola
  else if (targetElement.textContent.includes('MB7220 ')) {
    console.log('Motorola/Zoom MB7220');
    document.querySelector('select[name="file2"]').value = 'MOTO_7220-5.7.1.18-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MB7420 ')) {
    console.log('Motorola/Zoom MB7420');
    document.querySelector('select[name="file2"]').value = 'MOTO_7420-5.7.1.31-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MB7621 ')) {
    console.log('Motorola/Zoom MB7621');
    document.querySelector('select[name="file2"]').value = '7621-5.7.1.7-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MB8600 ')) {
    console.log('Motorola/Zoom MB8600');
    document.querySelector('select[name="file2"]').value = '8600-19.3.17-D30-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG7310 ')) {
    console.log('Motorola/Zoom MG7310');
    document.querySelector('select[name="file2"]').value = 'MOTO_7310-5.7.1.27-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG7315 ')) {
    console.log('Motorola/Zoom MG7315');
    document.querySelector('select[name="file2"]').value = 'MOTO_7315-5.7.1.36-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG7540 ')) {
    console.log('Motorola/Zoom MG7540');
    document.querySelector('select[name="file2"]').value = 'MOTO_7540-5.7.1.36-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG7550 ')) {
    console.log('Motorola/Zoom MG7550');
    document.querySelector('select[name="file2"]').value = 'MOTO_7550-5.7.1.43-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG7700 ')) {
    console.log('Motorola/Zoom MG7700');
    document.querySelector('select[name="file2"]').value = '7700-5.7.1.8-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('MG8702 ')) {
    console.log('Motorola/Zoom MG8702');
    document.querySelector('select[name="file2"]').value = '8702-19.3.18-D30-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

  //Netgear
  else if (targetElement.textContent.includes('C3000 ')) {
    console.log('Netgear C3000');
    document.querySelector('select[name="file2"]').value = 'C3700-100NAS_V2.02.23s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C3700 ')) {
    console.log('Netgear C3700');
    document.querySelector('select[name="file2"]').value = 'C3700-100NAS_V2.02.23s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C3700v2 ')) {
    console.log('Netgear C3700v2');
    document.querySelector('select[name="file2"]').value = 'C3700v2_V1.02.12s_monolith-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6220 ')) {
    console.log('Netgear C6220');
    document.querySelector('select[name="file2"]').value = 'C6220_V1.02.11s_monolith-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6230 ')) {
    console.log('Netgear C6230');
    document.querySelector('select[name="file2"]').value = 'C6230_V1.00.20s_monolith-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6250 ')) {
    console.log('Netgear C6250');
    document.querySelector('select[name="file2"]').value = 'C6250-100NAS_V1.02.02s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6300 ')) {
    console.log('Netgear C6300');
    document.querySelector('select[name="file2"]').value = 'C6300-100NAS_V3.01.14s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6300BD ')) {
    console.log('Netgear C6300BD');
    document.querySelector('select[name="file2"]').value = 'C6300BD-1CXNAS_V2.03.01s_monolith-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6300v2 ')) {
    console.log('Netgear C6300v2');
    document.querySelector('select[name="file2"]').value = 'C6300V2_V1.03.11s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C6900 ')) {
    console.log('Netgear C6900');
    document.querySelector('select[name="file2"]').value = 'C6900_V1.01.35s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C7000 ')) {
    console.log('Netgear C7000');
    document.querySelector('select[name="file2"]').value = 'C7000-100NAS_V1.01.34s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C7000v2 ')) {
    console.log('Netgear C7000v2');
    document.querySelector('select[name="file2"]').value = 'C7000v2_V1.03.08s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C7500 ')) {
    console.log('Netgear C7500');
    document.querySelector('select[name="file2"]').value = 'C7500_V1.01.46s_Monolith_210324-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('C7800 ')) {
    console.log('Netgear C7800');
    document.querySelector('select[name="file2"]').value = 'C7800_V6.01.07s_Monolith_210317-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CAX30 ')) {
    console.log('Netgear CAX30');
    document.querySelector('select[name="file2"]').value = 'CAX30_V1.04.10s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CAX80 ')) {
    console.log('Netgear CAX80');
    document.querySelector('select[name="file2"]').value = 'CAX80_V1.02.08s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM1000 ')) {
    console.log('Netgear CM1000');
    document.querySelector('select[name="file2"]').value = 'CM1000_V7.01.01s_monolith_200214-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM1000v2 ')) {
    console.log('Netgear CM1000v2');
    document.querySelector('select[name="file2"]').value = 'CM1000v2_V10.01.07s_220228-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM1100 ')) {
    console.log('Netgear CM1100');
    document.querySelector('select[name="file2"]').value = 'CM1100_V10.01.07s_220310-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM1200 ')) {
    console.log('Netgear CM1200');
    document.querySelector('select[name="file2"]').value = 'CM1200_V3.02.01s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM2000 ')) {
    console.log('Netgear CM2000');
    document.querySelector('select[name="file2"]').value = 'CM2000_V2.01.04s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM400 ')) {
    console.log('Netgear CM400');
    document.querySelector('select[name="file2"]').value = 'CM400_V2.01.06s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM500 ')) {
    console.log('Netgear CM500');
    document.querySelector('select[name="file2"]').value = 'CM500-100NAS_V1.01.14s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM600 ')) {
    console.log('Netgear CM600');
    document.querySelector('select[name="file2"]').value = 'CM600-100NAS_V1.01.22s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CM700 ')) {
    console.log('Netgear CM700');
    document.querySelector('select[name="file2"]').value = 'CM700_V1.02.08s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CMD31T ')) {
    console.log('Netgear CMD31T');
    document.querySelector('select[name="file2"]').value = 'CMD31T-100NAS__20170217_001_V504qs-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('N450 ')) {
    console.log('Netgear N450');
    document.querySelector('select[name="file2"]').value = 'N450-100NAS_V3.01.35s_monolith-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('CBR40 ')) {
    console.log('Netgear Orbi CBR40');
    document.querySelector('select[name="file2"]').value = 'CBR40_V1.01.06s-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

  //TP-Link
  else if (targetElement.textContent.includes('CR700 ')) {
    console.log('TP-Link Archer CR700');
    document.querySelector('select[name="file2"]').value = 'Archer-CR700v1_1_0_20170314_sto-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('TC-7610 ')) {
    console.log('TP-Link TC-7610');
    document.querySelector('select[name="file2"]').value = 'TC-7610v1_1_0_20160920_sto-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('TC-7620 ')) {
    console.log('TP-Link TC-7620');
    document.querySelector('select[name="file2"]').value = 'TC-7620v1_1_0_20160722_sto-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('TC-W7960 ')) {
    console.log('TP-Link TC-W7960');
    document.querySelector('select[name="file2"]').value = 'TC-W7960v1_2_0_20180412_sto-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }


  //Zoom
  else if (targetElement.textContent.includes('5241 ')) {
    console.log('Zoom 5241');
    document.querySelector('select[name="file2"]').value = 'Zoom_5241_5_35_33_5a.Gen-cableone.bin';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5341 ')) {
    console.log('Zoom 5341');
    document.querySelector('select[name="file2"]').value = 'Zoom_5341-3.1.0.1pre3-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5341J ')) {
    console.log('Zoom 5341J');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5341J_5.5.8.6J-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5345 ')) {
    console.log('Zoom 5345');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5345-5.5.10.8-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5350 ')) {
    console.log('Zoom 5350');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5350_V5.5.3.6_GA-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5352 ')) {
    console.log('Zoom 5352');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5352_v5.5.8.6-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5354 ')) {
    console.log('Zoom 5354');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5354-5.5.10.9-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5360 ')) {
    console.log('Zoom 5360');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5360-5.5.10.4-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5363 ')) {
    console.log('Zoom 5363');
    document.querySelector('select[name="file2"]').value = 'Zoom_5363_5.510.3.4-NOSH-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }
  else if (targetElement.textContent.includes('5370 ')) {
    console.log('Zoom 5370');
    document.querySelector('select[name="file2"]').value = 'ZOOM_5370-5.5.10.1-cableone.img';
    document.querySelector('select[name="file2"]').dispatchEvent(new Event('change', { 'bubbles': true }));
  }

});

document.addEventListener('click', function(event) {
  // Get information about the clicked element
  const targetElement = event.target;
  const elementId = targetElement.id;
  const elementClass = targetElement.className;
  const elementTagName = targetElement.tagName;
  const elementText = targetElement.textContent;

  // Log the click information
  console.log('Click Event:', {
    target: targetElement,
    id: elementId,
    class: elementClass,
    tagName: elementTagName,
    text: elementText
  });

  // Do something else with the click data
  // For example, send it to an analytics service
});
