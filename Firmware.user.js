// ==UserScript==
// @name        Firmware
// @namespace   Firmware Script
// @match       *://hsdtoolbox/tools/firmware/updater.php
// @grant       none
// @version     1.04252025a
// @author      Daniel Martinez
// @downloadURL https://github.com/gdflcx/FirmwareToolus/raw/refs/heads/main/Firmware.user.js
// @description 12/25/2024, 3:32:22 PM
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at       document-idle
// ==/UserScript==

function selectByText(text) {
  const dropdown = document.querySelector('select[name="file2"]');

  for (let i = 0; i < dropdown.options.length; i++) {
    if (dropdown.options[i].text === text) {
      dropdown.selectedIndex = i;
      dropdown.dispatchEvent(new Event('change', { 'bubbles': true }));
      break;
    }
  }

  dropdown.addEventListener("change", function() {
  // Code to execute when the dropdown value changes
  console.log("Dropdown value changed!");
  });
}

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
    console.log('Arris 502 SIP');
    selectByText('Arris 502 SIP');
  }
  else if (targetElement.textContent.includes('512')) {
    console.log('Arris 512 SIP');
    selectByText('Arris 512 SIP');
  }
  else if (targetElement.textContent.includes('552G')) {
    console.log('Arris 552G SIP');
    selectByText('Arris 552G SIP');
  }
  else if (targetElement.textContent.includes('602G')) {
    console.log('Arris 602G SIP');
    selectByText('Arris 602G SIP');
  }
  else if (targetElement.textContent.includes('604G')) {
    console.log('Arris 604G SIP');
    selectByText('Arris 604G SIP');
  }
  else if (targetElement.textContent.includes('608G')) {
    console.log('Arris 608G SIP');
    selectByText('Arris 608G SIP');
  }
  else if (targetElement.textContent.includes('652G')) {
    console.log('Arris 652G SIP');
    selectByText('Arris 652G SIP');
  }
  else if (targetElement.textContent.includes('722G')) {
    console.log('Arris 722G SIP');
    selectByText('Arris 722G SIP');
  }
  else if (targetElement.textContent.includes('802G')) {
    console.log('Arris 802G SIP');
    selectByText('Arris 802G SIP');
  }
  else if (targetElement.textContent.includes('804G')) {
    console.log('Arris 804G SIP');
    selectByText('Arris 804G SIP');
  }
  else if (targetElement.textContent.includes('822G')) {
    console.log('Arris 822G SIP');
    selectByText('Arris 822G SIP');
  }
  else if (targetElement.textContent.includes('852G')) {
    console.log('Arris 852G SIP');
    selectByText('Arris 852G SIP');
  }
  else if (targetElement.textContent.includes('862G')) {
    console.log('Arris 862G SIP');
    selectByText('Arris 862G SIP');
  }
  else if (targetElement.textContent.includes('CM8200A')) {
    console.log('Arris CM8200A');
    selectByText('Arris CM8200A');
  }
  else if (targetElement.textContent.includes('CM820A')) {
    console.log('Arris CM820A');
    selectByText('Arris CM820A');
  }
  else if (targetElement.textContent.includes('DG1660')) {
    console.log('Arris DG16XX');
    selectByText('Arris DG16XX');
  }
  else if (targetElement.textContent.includes('DG1670')) {
    console.log('Arris DG16XX');
    selectByText('Arris DG16XX');
  }
  else if (targetElement.textContent.includes('DG3270A')) {
    console.log('Arris DG3270A');
    selectByText('Arris DG3270A');
  }
  else if (targetElement.textContent.includes('DG3450')) {
    console.log('Arris DG3450');
    selectByText('Arris DG3450');
  }
  else if (targetElement.textContent.includes('DG860P2')) {
    console.log('Arris DG860P2');
    selectByText('Arris DG860P2');
  }
  else if (targetElement.textContent.includes('DG9450')) {
    console.log('Arris DG9450');
    selectByText('Arris DG9450');
  }
  else if (targetElement.textContent.includes('G34/G36')) {
    console.log('Arris G34/G36');
    selectByText('Arris G34/G36');
  }
  else if (targetElement.textContent.includes('MG5225')) {
    console.log('Arris MG5225 Moxi');
    selectByText('Arris MG5225 Moxi');
  }
  else if (targetElement.textContent.includes('S33 ')) {
    console.log('Arris S33/S33v2');
    selectByText('Arris S33/S33v2');
  }
  else if (targetElement.textContent.includes('S33v2')) {
    console.log('Arris S33/S33v2');
    selectByText('Arris S33/S33v2');
  }
  else if (targetElement.textContent.includes('SB612')) {
    console.log('Arris SB612X');
    selectByText('Arris SB612X');
  }
  else if (targetElement.textContent.includes('SB6141')) {
    console.log('Arris SB6141');
    selectByText('Arris SB6141');
  }
  else if (targetElement.textContent.includes('SB6180')) {
    console.log('Arris SB6180');
    selectByText('Arris SB6180');
  }
  else if (targetElement.textContent.includes('SB6182')) {
    console.log('Arris SB6182');
    selectByText('Arris SB6182');
  }
  else if (targetElement.textContent.includes('SB6183')) {
    console.log('Arris SB6183');
    selectByText('Arris SB6183');
  }
  else if (targetElement.textContent.includes('SB6190')) {
    console.log('Arris SB6190');
    selectByText('Arris SB6190');
  }
  else if (targetElement.textContent.includes('SB8200 ')) {
    console.log('Arris SB8200');
    selectByText('Arris SB8200');
  }
  else if (targetElement.textContent.includes('SBG10')) {
    console.log('Arris SBG10');
    selectByText('Arris SBG10');
  }
  else if (targetElement.textContent.includes('SBG6400')) {
    console.log('Arris SBG6400');
    selectByText('Arris SBG6400');
  }
  else if (targetElement.textContent.includes('SBG6580 ')) {
    console.log('Arris SBG6580');
    selectByText('Arris SBG6580');
  }
  else if (targetElement.textContent.includes('SBG6580-2')) {
    console.log('Arris SBG6580-2');
    selectByText('Arris SBG6580-2');
  }
  else if (targetElement.textContent.includes('SBG6700-AC')) {
    console.log('Arris SBG6700-AC');
    selectByText('Arris SBG6700-AC');
  }
  else if (targetElement.textContent.includes('SBG6782-AC')) {
    console.log('Arris SBG6782-AC');
    selectByText('Arris SBG6782-AC');
  }
  else if (targetElement.textContent.includes('SBG6900-AC')) {
    console.log('Arris SBG6900-AC');
    selectByText('Arris SBG6900-AC');
  }
  else if (targetElement.textContent.includes('SBG6950AC2')) {
    console.log('Arris SBG6950AC2');
    selectByText('Arris SBG6950AC2');
  }
  else if (targetElement.textContent.includes('SBG7400AC2')) {
    console.log('Arris SBG7400AC2');
    selectByText('Arris SBG7400AC2');
  }
  else if (targetElement.textContent.includes('SBG7580-AC')) {
    console.log('Arris SBG7580-AC');
    selectByText('Arris SBG7580-AC');
  }
  else if (targetElement.textContent.includes('SBG7600AC2')) {
    console.log('Arris SBG7600AC2');
    selectByText('Arris SBG7600AC2');
  }
  else if (targetElement.textContent.includes('SBG8300')) {
    console.log('Arris SBG8300');
    selectByText('Arris SBG8300');
  }
  else if (targetElement.textContent.includes('SBG900')) {
    console.log('Arris SBG900');
    selectByText('Arris SBG900');
  }
  else if (targetElement.textContent.includes('SBG901')) {
    console.log('Arris SBG901');
    selectByText('Arris SBG901');
  }
  else if (targetElement.textContent.includes('TG16')) {
    console.log('Arris TG16XX');
    selectByText('Arris TG16XX');
  }
  else if (targetElement.textContent.includes('WBM760A')) {
    console.log('Arris WBM760A');
    selectByText('Arris WBM760A');
  }

  //Hitron
  else if (targetElement.textContent.includes('CGNM-2252')) {
    console.log('Hitron CGNM-2252');
    selectByText('Hitron CGNM-2252');
  }
  else if (targetElement.textContent.includes('CGNVM-3582')) {
    console.log('Hitron CGNVM-3582');
    selectByText('Hitron CGNM-3582');
  }
  else if (targetElement.textContent.includes('CODA-458')) {
    console.log('Hitron CODA-4582/4589');
    selectByText('Hitron CODA-4582/4589');
  }
  else if (targetElement.textContent.includes('CODA-5519')) {
    console.log('Hitron CODA-5519');
    selectByText('Hitron CODA-5X1X');
  }
  else if (targetElement.textContent.includes('CODA-5712')) {
    console.log('Hitron CODA-5712');
    selectByText('Hitron CODA-5X1X');
  }
  else if (targetElement.textContent.includes('CODA-5719')) {
    console.log('Hitron CODA-5719');
    selectByText('Hitron CODA-5X1X');
  }
  else if (targetElement.textContent.includes('CODA-57-RES')) {
    console.log('Hitron CODA-57-RES');
    selectByText('Hitron CODA57');
  }
  else if (targetElement.textContent.includes('EN2251-HSP')) {
    console.log('Hitron EN2251/HSP');
    selectByText('Hitron EN2251/HSP');
  }
  else if (targetElement.textContent.includes('NOVA-2002')) {
    console.log('Hitron NOVA-2002');
    selectByText('Hitron NOVA-2002');
  }
  else if (targetElement.textContent.includes('CODA ')) {
    console.log('Hitron CODA');
    selectByText('Hitron CODA (retail)');
  }
  else if (targetElement.textContent.includes('CODA56')) {
    console.log('Hitron CODA56');
    selectByText('Hitron CODA56 (retail)');
  }

  //Linksys
  else if (targetElement.textContent.includes('CG7500')) {
    console.log('Linksys CG7500');
    selectByText('Linksys CG750');
  }
  else if (targetElement.textContent.includes('CM3008')) {
    console.log('Linksys CM3008');
    selectByText('Linksys CM3008');
  }
  else if (targetElement.textContent.includes('CM3016')) {
    console.log('Linksys CM3016');
    selectByText('Linksys CM3016');
  }
  else if (targetElement.textContent.includes('CM3024')) {
    console.log('Linksys CM3024');
    selectByText('Linksys CM3024');
  }

  //Motorola
  else if (targetElement.textContent.includes('MB7220 ')) {
    console.log('Motorola/Zoom MB7220');
    selectByText('Motorola/Zoom MB7220');
  }
  else if (targetElement.textContent.includes('MB7420 ')) {
    console.log('Motorola/Zoom MB7420');
    selectByText('Motorola/Zoom MB7420');
  }
  else if (targetElement.textContent.includes('MB7621 ')) {
    console.log('Motorola/Zoom MB7621');
    selectByText('Motorola/Zoom MB7621');
  }
  else if (targetElement.textContent.includes('MB8600 ')) {
    console.log('Motorola/Zoom MB8600');
    selectByText('Motorola/Zoom MB8600');
  }
  else if (targetElement.textContent.includes('MG7310 ')) {
    console.log('Motorola/Zoom MG7310');
    selectByText('Motorola/Zoom MG7310');
  }
  else if (targetElement.textContent.includes('MG7315 ')) {
    console.log('Motorola/Zoom MG7315');
    selectByText('Motorola/Zoom MG7315');
  }
  else if (targetElement.textContent.includes('MG7540 ')) {
    console.log('Motorola/Zoom MG7540');
    selectByText('Motorola/Zoom MG7540');
  }
  else if (targetElement.textContent.includes('MG7550 ')) {
    console.log('Motorola/Zoom MG7550');
    selectByText('Motorola/Zoom MG7550');
  }
  else if (targetElement.textContent.includes('MG7700 ')) {
    console.log('Motorola/Zoom MG7700');
    selectByText('Motorola/Zoom MG7700');
  }
  else if (targetElement.textContent.includes('MG8702 ')) {
    console.log('Motorola/Zoom MG8702');
    selectByText('Motorola/Zoom MG8702');
  }

  //Netgear
  else if (targetElement.textContent.includes('C3000 ')) {
    console.log('Netgear C3000');
    selectByText('Netgear C3000');
  }
  else if (targetElement.textContent.includes('C3700 ')) {
    console.log('Netgear C3700');
    selectByText('Netgear C3700');
  }
  else if (targetElement.textContent.includes('C3700v2 ')) {
    console.log('Netgear C3700v2');
    selectByText('Netgear C3700v2');
  }
  else if (targetElement.textContent.includes('C6220 ')) {
    console.log('Netgear C6220');
    selectByText('Netgear C6220');
  }
  else if (targetElement.textContent.includes('C6230 ')) {
    console.log('Netgear C6230');
    selectByText('Netgear C6230');
  }
  else if (targetElement.textContent.includes('C6250 ')) {
    console.log('Netgear C6250');
    selectByText('Netgear C6250');
  }
  else if (targetElement.textContent.includes('C6300 ')) {
    console.log('Netgear C6300');
    selectByText('Netgear C6300');
  }
  else if (targetElement.textContent.includes('C6300BD ')) {
    console.log('Netgear C6300BD');
    selectByText('Netgear C6300BD');
  }
  else if (targetElement.textContent.includes('C6300v2 ')) {
    console.log('Netgear C6300v2');
    selectByText('Netgear C6300v2');
  }
  else if (targetElement.textContent.includes('C6900 ')) {
    console.log('Netgear C6900');
    selectByText('Netgear C6900');
  }
  else if (targetElement.textContent.includes('C7000 ')) {
    console.log('Netgear C7000');
    selectByText('Netgear C7000');
  }
  else if (targetElement.textContent.includes('C7000v2 ')) {
    console.log('Netgear C7000v2');
    selectByText('Netgear C7000v2');
  }
  else if (targetElement.textContent.includes('C7500 ')) {
    console.log('Netgear C7500');
    selectByText('Netgear C7500');
  }
  else if (targetElement.textContent.includes('C7800 ')) {
    console.log('Netgear C7800');
    selectByText('Netgear C7800');
  }
  else if (targetElement.textContent.includes('CAX30 ')) {
    console.log('Netgear CAX30');
    selectByText('Netgear CAX30');
  }
  else if (targetElement.textContent.includes('CAX80 ')) {
    console.log('Netgear CAX80');
    selectByText('Netgear CAX80');
  }
  else if (targetElement.textContent.includes('CM1000 ')) {
    console.log('Netgear CM1000');
    selectByText('Netgear CM1000');
  }
  else if (targetElement.textContent.includes('CM1000v2 ')) {
    console.log('Netgear CM1000v2');
    selectByText('Netgear CM1000v2');
  }
  else if (targetElement.textContent.includes('CM1100 ')) {
    console.log('Netgear CM1100');
    selectByText('Netgear CM1100');
  }
  else if (targetElement.textContent.includes('CM1200 ')) {
    console.log('Netgear CM1200');
    selectByText('Netgear CM1200');
  }
  else if (targetElement.textContent.includes('CM2000 ')) {
    console.log('Netgear CM2000');
    selectByText('Netgear CM2000');
  }
  else if (targetElement.textContent.includes('CM400 ')) {
    console.log('Netgear CM400');
    selectByText('Netgear CM400');
  }
  else if (targetElement.textContent.includes('CM500 ')) {
    console.log('Netgear CM500');
    selectByText('Netgear CM500');
  }
  else if (targetElement.textContent.includes('CM600 ')) {
    console.log('Netgear CM600');
    selectByText('Netgear CM600');
  }
  else if (targetElement.textContent.includes('CM700 ')) {
    console.log('Netgear CM700');
    selectByText('Netgear CM700');
  }
  else if (targetElement.textContent.includes('CMD31T ')) {
    console.log('Netgear CMD31T');
    selectByText('Netgear CMD31T');
  }
  else if (targetElement.textContent.includes('N450 ')) {
    console.log('Netgear N450');
    selectByText('Netgear N450');
  }
  else if (targetElement.textContent.includes('CG3000Dv2 ')) {
    console.log('Netgear N450/CG3000Dv2');
    selectByText('Netgear N450/CG3000Dv2');
  }
  else if (targetElement.textContent.includes('CBR40 ')) {
    console.log('Netgear Orbi CBR40');
    selectByText('Netgear CBR40');
  }

  //TP-Link
  else if (targetElement.textContent.includes('CR700 ')) {
    console.log('TP-Link Archer CR700');
    selectByText('TP-Link Archer CR700');
  }
  else if (targetElement.textContent.includes('TC-7610 ')) {
    console.log('TP-Link TC-7610');
    selectByText('TP-Link TC-7610');
  }
  else if (targetElement.textContent.includes('TC-7620 ')) {
    console.log('TP-Link TC-7620');
    selectByText('TP-Link TC-7620');
  }
  else if (targetElement.textContent.includes('TC-W7960 ')) {
    console.log('TP-Link TC-W7960');
    selectByText('TP-Link TC-W7960');
  }


  //Zoom
  else if (targetElement.textContent.includes('5241 ')) {
    console.log('Zoom 5241');
    selectByText('Zoom 5241');
  }
  else if (targetElement.textContent.includes('5341 ')) {
    console.log('Zoom 5341');
    selectByText('Zoom 5341');
  }
  else if (targetElement.textContent.includes('5341J ')) {
    console.log('Zoom 5341J');
    selectByText('Zoom 5341J');
  }
  else if (targetElement.textContent.includes('5345 ')) {
    console.log('Zoom 5345');
    selectByText('Zoom 5345');
  }
  else if (targetElement.textContent.includes('5350 ')) {
    console.log('Zoom 5350');
    selectByText('Zoom 5350');
  }
  else if (targetElement.textContent.includes('5352 ')) {
    console.log('Zoom 5352');
    selectByText('Zoom 5352');
  }
  else if (targetElement.textContent.includes('5354 ')) {
    console.log('Zoom 5354');
    selectByText('Zoom 5354');
  }
  else if (targetElement.textContent.includes('5360 ')) {
    console.log('Zoom 5360');
    selectByText('Zoom 5360');
  }
  else if (targetElement.textContent.includes('5363 ')) {
    console.log('Zoom 5363');
    selectByText('Zoom 5363');
  }
  else if (targetElement.textContent.includes('5370 ')) {
    console.log('Zoom 5370');
    selectByText('Zoom 5370');
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
  // For example, send it to an analytics service
});
