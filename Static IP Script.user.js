// ==UserScript==
// @name        Static IP Script
// @namespace   C4StaticIPuserscript
// @match       http://staticip/staticip.html
// @match       http://staticip.corp.cableone.net/StaticIP.html
// @grant       none
// @version     1.0
// @author      Daniel Martinez
// @description 1/18/2025, 1:58:01 PM
// @require https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// ==/UserScript==

$("body").append ( `
    <div id="Content">
      <textarea id="testsip" rows="7" cols="50" spellcheck="false">
      </textarea>
    </div>
` );

$(document).ready(function(){
	$("#btnClear").click(function(){
    $("#testsip").val('');
	});
});


const textarea = document.getElementById('testsip'); // Replace 'myTextarea' with the ID of your textarea

textarea.addEventListener('click', function() {
  console.log('Textarea clicked!');
  let txtCurrSystem = document.getElementById("txtCurrSystem").value;
  let txtCurrNoStaticIP = document.getElementById("txtCurrNoStaticIP").value;
  let txtCurrIpBlock = document.getElementById("txtCurrIpBlock").value;
  let txtCurrSubnetMask = document.getElementById("txtCurrSubnetMask").value;
  let usableIP = "";
  let staticIP = [];
  if (txtCurrIpBlock == '') {
    $("#testsip").val('');
  }
  else {
    if (parseInt(txtCurrNoStaticIP) === 5) {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
      staticIP[3] = parseInt(staticIP[3]) + 4;
      usableIP = usableIP + " - " + staticIP[3];

    }
    else if (parseInt(txtCurrNoStaticIP) === 13) {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
      staticIP[3] = parseInt(staticIP[3]) + 12;
      usableIP = usableIP + " - " + staticIP[3];

    }
    else {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
    }
    let results = "System: " + txtCurrSystem + "\nBlock Size: " + txtCurrNoStaticIP + "\nIP: " + usableIP + "\nGateway IP: " + txtCurrIpBlock + "\nSubnetmask:  " + txtCurrSubnetMask + "\nPrimary DNS: 24.116.0.53\nSecondary DNS: 24.116.2.50";
    $("#testsip").val(results);
    testsip.select();
    document.execCommand('copy');
  }
});


/*
document.addEventListener('click', function(event) {
  // Code to execute on every click
  console.log('Click detected!');
  let txtCurrSystem = document.getElementById("txtCurrSystem").value;
  let txtCurrNoStaticIP = document.getElementById("txtCurrNoStaticIP").value;
  let txtCurrIpBlock = document.getElementById("txtCurrIpBlock").value;
  let txtCurrSubnetMask = document.getElementById("txtCurrSubnetMask").value;
  let usableIP = "";
  let staticIP = [];
  if (txtCurrIpBlock == '') {
    $("#testsip").val('');
  }
  else {
    if (parseInt(txtCurrNoStaticIP) === 5) {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
      staticIP[3] = parseInt(staticIP[3]) + 4;
      usableIP = usableIP + " - " + staticIP[3];

    }
    else if (parseInt(txtCurrNoStaticIP) === 13) {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
      staticIP[3] = parseInt(staticIP[3]) + 12;
      usableIP = usableIP + " - " + staticIP[3];

    }
    else {
      staticIP = txtCurrIpBlock.split(".");
      staticIP[3] = parseInt(staticIP[3]) + 1;
      usableIP = staticIP[0] + "." + staticIP[1] + "." + staticIP[2] + "." + staticIP[3];
    }
    let results = "System: " + txtCurrSystem + "\nBlock Size: " + txtCurrNoStaticIP + "\nIP: " + usableIP + "\nGateway IP: " + txtCurrIpBlock + "\nSubnetmask:  " + txtCurrSubnetMask + "\nPrimary DNS: 24.116.0.53\nSecondary DNS: 24.116.2.50";
    $("#testsip").val(results);
    testsip.select();
    document.execCommand('copy');
  }

});
*/


/*

$(document).ready(function(){
	$("#Search").click(function(){
    $("#testsip").val('');
    let txtCurrIpBlock = document.getElementById("txtCurrIpBlock").value;
    waitForValue("txtCurrIpBlock", () => {
      console.log("Button appeared!");
      let txtCurrSystem = document.getElementById("txtCurrSystem").value;
      let txtCurrNoStaticIP = document.getElementById("txtCurrNoStaticIP").value;
      //let txtCurrIpBlock = document.getElementById("txtCurrIpBlock").value;
      let txtCurrSubnetMask = document.getElementById("txtCurrSubnetMask").value;
      let results = "System: " + txtCurrSystem + "\nBlock Size: " + txtCurrNoStaticIP + "\nIP: " + txtCurrIpBlock + "\nSubnetmask:  " + txtCurrSubnetMask;
		  $("#testsip").val(results);
  // Do something with the button now
    });
    //let txtCurrSystem = document.getElementById("txtCurrSystem").value;
    //let txtCurrNoStaticIP = document.getElementById("txtCurrNoStaticIP").value;
    //let txtCurrIpBlock = document.getElementById("txtCurrIpBlock").value;
    //let txtCurrSubnetMask = document.getElementById("txtCurrSubnetMask").value;
    //let results = "System: " + txtCurrSystem + "\nBlock Size: " + txtCurrNoStaticIP + "\nIP: " + txtCurrIpBlock + "\nSubnetmask:  " + txtCurrSubnetMask;
		//$("#testsip").val(results);
	});
});


*/