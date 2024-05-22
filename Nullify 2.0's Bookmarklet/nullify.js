createElement = nullifyGUI => document.body.appendChild(document.createElement(nullifyGUI));
var UI = createElement("div");
UI.innerHTML = "\n<div style=\"width:240px; left: 1px; top: 1px; background-color: #282828EB; color: white; outline: transparent 1px; position:absolute; z-index: 99999;\">\n\t\t<div id=\"gui\">\n                <div class=\"image\">\n        \t<img src=\"https://res.cloudinary.com/dodofguiy/image/upload/c_scale,w_48/v1671071889/icon_f6pwnj.png\" style=\"float: left; margin-right: 10px;\"/>\n      \t\t</div> <h1 style=\"font-size: 32px;\">Nullify</h1>\n\t\t<br>\n                <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Lesson Skipper</h3>\n\t\t<button onclick=\"wangEnable()\">Enable</button> <button onclick=\"wangSkip()\">Skip</button>\n\t\t<br>\n\t\t<br>\n\t\t<h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Minutes Farmer</h3>\n\t\t<button onclick=\"fetch('https://raw.githubusercontent.com/TonicGaro/TonicGaro/main/My%20Stuff/Nullify/farmer.js').then(r => r.text()).then(r => eval(r))\">Enable</button>\n\t\t<br>\n\t\t<br>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Diagnostic Hack (experimental)</h3>\n                <h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">USE AT YOUR OWN RISK. Barely works.</h1>\n                <button id=\"diag\" button onclick=\"toggleDiag()\">Toggle</button>\n                <br>\n                <br>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">Free i-Ready Games</h3>\n\t\t<button onclick=\"window.open('https://docs.google.com/document/d/1w-uay3y5pwOm45sG9JqiSopKH9DO3pejABpUPBL-uiw/edit?usp=sharing', '_blank');\">Go to site</button>\n        <h3 style=\"font-size: 19px; font-style: normal !important; color: white !important;\">____________________________</h3>\n\t\t<button onclick=\"window.open('https://discord.gg/aAVVuVVVcm', '_blank');\">Join the Nullify Discord</button>\n\t        <br>\n                <br>\n                <button onclick=\"window.open('https://docs.google.com/document/d/1jGegiw4cGo7_NgF2l00JJHlGCjFWBpE8YoP3FQqp2G0/edit?usp=sharing', '_blank');\">Terms of Service</button>\n                <br>\n                <br>\n        <h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">Created by WangOnTop aka God, notplu, TonicGaro, flowingsalt, and HypnoticLOL (Made the Diagnostic Hack)</h1>\n        <p><i><h1 style=\"font-size: 12px; font-style: normal !important; color: white !important;\">(Press H to hide menu.)</h1></i></p>\n        </div>";
dragElement(UI.firstElementChild);
function wangEnable() {
  const lessonIFrame = document.getElementById("html5Iframe");
  if (lessonIFrame === undefined || lessonIFrame === null) {
    const modifiedChunk = "https://cdn.i-ready.com/instruction/student-dashboard/release-13.4.x/2/static/js/app-12.chunk.js";
    if (document.scripts[15].src == modifiedChunk) {
      alert("lesson has already been loaded, refresh the page and run before going into your lesson");
    } else {
      fetch("https://raw.githubusercontent.com/no9999999/yes/main/app-12.chunk.js").then(r => r.text()).then(r => eval(r));
    }
    alert("Enabled. If you didnt enable on the \"Choose a subject\" screen then reload i-Ready and enable again. Lesson Skipper will stay enabled until you reload i-Ready.");
  } else {
    alert("You must enable Lesson Skipper on the \"Choose a subject\" screen.");
    location.reload();
  }
}
function wangSkip() {
  const wangIframe = document.getElementById("html5Iframe");
  if (wangIframe === undefined || wangIframe === null) {
    alert("Please open a lesson.");
  } else {
    alert("Make sure you enable before skipping or Lesson Skipper will not work.");
    alert("Make sure to also farm minutes before skipping! Teachers can see how much time you spend in a lesson.");
    var skipScore = prompt("What score do you want?");
    p1(skipScore);
  }
}
var diag = 1;
function toggleDiag() {
  const diagSucks = document.getElementById("diagnosticIFrame");
  if (diagSucks === undefined || diagSucks === null) {
    alert("Please open your Diagnostic.");
  } else if (diag === 1) {
    diag = 0;
    var duration = 1000;
    XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (body) {
      let newBody = JSON.parse(body);
      if (newBody.correct == false) {
        newBody.correct = true;
      }
      if (newBody.durationSeconds != undefined) {
        newBody.durationSeconds = duration;
      }
      this.realSend(JSON.stringify(newBody));
    };
    alert("Enabled. All answers inputted in the Diagnostic will be correct. Once you disable any previous answers should remain correct.");
    alert("deobfuscating this was easy and also probably was the same because Overload had that code lmao.")
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
  var guiExists = document.getElementById("gui");
  if (guiExists.style.display === "none") {
    guiExists.style.display = "block";
  } else {
    guiExists.style.display = "none";
  }
}
document.addEventListener("keydown", function (detectHpress) {
  if (detectHpress.code == "KeyH" || detectHpress.metaKey) {
    hideGui();
  }
});
function dragElement(e) {
  var t = 0;
  var n = 0;
  var o = 0;
  var r = 0;
  function s(e) {
    (e = e || window.event).preventDefault();
    o = e.clientX;
    r = e.clientY;
    document.onmouseup = i;
    document.onmousemove = c;
  }
  function c(s) {
    (s = s || window.event).preventDefault();
    t = o - s.clientX;
    n = r - s.clientY;
    o = s.clientX;
    r = s.clientY;
    e.style.top = e.offsetTop - n + "px";
    e.style.left = e.offsetLeft - t + "px";
  }
  function i() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  if (document.getElementById(e.id + "header")) {
    document.getElementById(e.id + "header").onmousedown = s;
  } else {
    e.onmousedown = s;
  }
}
// dragelement deobfuscated because I found the nonobfuscated src somewhere else
