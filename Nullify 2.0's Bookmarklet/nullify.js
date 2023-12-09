createElement = _0x456ff2 => document.body.appendChild(document.createElement(_0x456ff2));
var UI = createElement("div");
UI.innerHTML = "\n<div style=\"width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999;\">\n\t\t<div id=\"gui\">\n                <div class=\"image\">\n        \t<img src=\"https://res.cloudinary.com/dodofguiy/image/upload/c_scale,w_48/v1671071889/icon_f6pwnj.png\" style=\"float: left; margin-right: 10px;\"/>\n      \t\t</div> <h1 style=\"font-size: 32px;\">Nullify</h1>\n\t\t<br>\n                <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Lesson Skipper</h3>\n\t\t<button onclick=\"wangEnable()\">Enable</button> <button onclick=\"wangSkip()\">Skip</button>\n\t\t<br>\n\t\t<br>\n\t\t<h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Minutes Farmer</h3>\n\t\t<button onclick=\"fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/My%20Stuff/Nullify/farmer.js').then(r => r.text()).then(r => eval(r))\">Enable</button>\n\t\t<br>\n\t\t<br>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Diagnostic Hack (experimental)</h3>\n                <h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">USE AT YOUR OWN RISK. Barely works.</h1>\n                <button id=\"diag\" button onclick=\"toggleDiag()\">Toggle</button>\n                <br>\n                <br>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Free i-Ready Games</h3>\n\t\t<button onclick=\"window.open('https://docs.google.com/document/d/1w-uay3y5pwOm45sG9JqiSopKH9DO3pejABpUPBL-uiw/edit?usp=sharing', '_blank');\">Go to site</button>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">____________________________</h3>\n\t\t<button onclick=\"window.open('https://discord.gg/aAVVuVVVcm', '_blank');\">Join the Nullify Discord</button>\n\t        <br>\n                <br>\n                <button onclick=\"window.open('https://docs.google.com/document/d/1jGegiw4cGo7_NgF2l00JJHlGCjFWBpE8YoP3FQqp2G0/edit?usp=sharing', '_blank');\">Terms of Service</button>\n                <br>\n                <br>\n        <h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">Created by WangOnTop aka God, notplu, TonicGaro, flowingsalt, and HypnoticLOL (Made the Diagnostic Hack)</h1>\n        <p><i><h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">(Press H to hide menu.)</h1></i></p>\n        </div>";
dragElement(UI.firstElementChild);
function wangEnable() {
  const _0x2284a0 = document.getElementById("html5Iframe");
  if (_0x2284a0 === undefined || _0x2284a0 === null) {
    const _0x5bb3b9 = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js";
    if (document.scripts[15].src == _0x5bb3b9) {
      alert("lesson has already been loaded, refresh the page and run before going into your lesson");
    } else {
      fetch("https://raw.githubusercontent.com/no9999999/yes/main/app-12.chunk.js").then(_0x36b3fd => _0x36b3fd.text()).then(_0x5b6cd8 => eval(_0x5b6cd8));
    }
    alert("Enabled. If you didnt enable on the \"Choose a subject\" screen then reload i-Ready and enable again. Lesson Skipper will stay enabled until you reload i-Ready.");
  } else {
    alert("You must enable Lesson Skipper on the \"Choose a subject\" screen.");
    location.reload();
  }
}
function wangSkip() {
  const _0x1b3cec = document.getElementById("html5Iframe");
  if (_0x1b3cec === undefined || _0x1b3cec === null) {
    alert("Please open a lesson.");
  } else {
    alert("Make sure you enable before skipping or Lesson Skipper will not work.");
    alert("Make sure to also farm minutes before skipping! Teachers can see how much time you spend in a lesson.");
    var _0x1ac087 = prompt("What score do you want?");
    p1(_0x1ac087);
  }
}
var diag = 1;
function toggleDiag() {
  const _0x2f18c4 = document.getElementById("diagnosticIFrame");
  if (_0x2f18c4 === undefined || _0x2f18c4 === null) {
    alert("Please open your Diagnostic.");
  } else if (diag === 1) {
    diag = 0;
    var _0x42c072 = 1000;
    XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (_0x2a0582) {
      let _0x472cb8 = JSON.parse(_0x2a0582);
      if (_0x472cb8.correct == false) {
        _0x472cb8.correct = true;
      }
      if (_0x472cb8.durationSeconds != undefined) {
        _0x472cb8.durationSeconds = _0x42c072;
      }
      this.realSend(JSON.stringify(_0x472cb8));
    };
    alert("Enabled. All answers inputted in the Diagnostic will be correct. Once you disable any previous answers should remain correct.");
    alert("Don't finish your Diagnostic too quickly or it will be marked as rushed.");
    document.getElementById("diag").innerHTML = "Disable";
  } else {
    diag = 1;
    XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
    XMLHttpRequest.prototype.realSend = undefined;
    alert("Disabled.");
    document.getElementById("diag").innerHTML = "Enable";
  }
}
function hideGui() {
  var _0x2351bd = document.getElementById("gui");
  if (_0x2351bd.style.display === "none") {
    _0x2351bd.style.display = "block";
  } else {
    _0x2351bd.style.display = "none";
  }
}
document.addEventListener("keydown", function (_0x411216) {
  if (_0x411216.code == "KeyH" || _0x411216.metaKey) {
    hideGui();
  }
});
function dragElement(_0x50b4a6) {
  var _0x5855cf = 0;
  var _0x1ced63 = 0;
  var _0x4b7f86 = 0;
  var _0xd23a34 = 0;
  function _0x5e2208(_0xb61dd) {
    (_0xb61dd = _0xb61dd || window.event).preventDefault();
    _0x4b7f86 = _0xb61dd.clientX;
    _0xd23a34 = _0xb61dd.clientY;
    document.onmouseup = _0x5264aa;
    document.onmousemove = _0x5e39f4;
  }
  function _0x5e39f4(_0x58c0e3) {
    (_0x58c0e3 = _0x58c0e3 || window.event).preventDefault();
    _0x5855cf = _0x4b7f86 - _0x58c0e3.clientX;
    _0x1ced63 = _0xd23a34 - _0x58c0e3.clientY;
    _0x4b7f86 = _0x58c0e3.clientX;
    _0xd23a34 = _0x58c0e3.clientY;
    _0x50b4a6.style.top = _0x50b4a6.offsetTop - _0x1ced63 + "px";
    _0x50b4a6.style.left = _0x50b4a6.offsetLeft - _0x5855cf + "px";
  }
  function _0x5264aa() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  if (document.getElementById(_0x50b4a6.id + "header")) {
    document.getElementById(_0x50b4a6.id + "header").onmousedown = _0x5e2208;
  } else {
    _0x50b4a6.onmousedown = _0x5e2208;
  }
}
