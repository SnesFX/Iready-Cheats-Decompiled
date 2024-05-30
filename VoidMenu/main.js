let voidmenu = document.createElement("div");
voidmenu.style.background = "rgb(33,33,33)";
voidmenu.style.width = "150px";
voidmenu.style.height = "240px";
voidmenu.style.position = "fixed";
voidmenu.style.top = "0px";
voidmenu.style.left = "0px";
voidmenu.style.zIndex = "99999999";
voidmenu.style.opacity = "0.85";
voidmenu.style.borderRadius = "10px";
voidmenu.style.border = "2px solid purple";
voidmenu.style.fontFamily = "sans-serif";
voidmenu.style.textAlign = "center";
voidmenu.style.lineHeight = "0.1";
voidmenu.style.fontWeight = "bold";
voidmenu.id = "jav";
voidmenu.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.subhd {\n  color: rgb(140, 0, 255);\n  font-size:15px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\n</style>\n<img src=\"https://cdn.glitch.me/3ffb250d-17ed-4059-96f6-b63105c97664/logo.png\" width=\"40px\"></img>\n\n  <h1 class=\"hd\">Void<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">Menu</span><h1>\n\n  <p class=\"subhd\">2.6<p>\n\n<button id=\"cheatz\" class=\"nbu\" style=\"position:absolute;top:90px;left:0px;\">Cheats</span></button> \n\n<button id=\"chtagpt\" class=\"nbu\" style=\"position:absolute;top:110px;left:0px;\">ChatGPT</span></button> \n\n<button id=\"diskard\" class=\"nbu\" style=\"position:absolute;top:130px;left:0px;\">Discord</span></button> \n\n<button id=\"thamas\" class=\"nbu\" style=\"position:absolute;top:150px;left:0px;\">Themes</span></button> \n\n<button id=\"creeditz\" class=\"nbu\" style=\"position:absolute;top:170px;left:0px;\">Credits</span></button> \n\n<button id=\"outher\" class=\"nbu\" style=\"position:absolute;top:190px;left:0px;color:grey\">Other</span></button> \n  \n<button id=\"close\" class=\"nbu\" style=\"position:absolute;bottom:3px;left:0px;\">Exit</button>  \n  ";
document.body.appendChild(voidmenu);
voidmenu.addEventListener("mousedown", function (_0x77edx1422) {
  let _0x77edx149a = _0x77edx1422.clientX;
  let _0x77edx149b = _0x77edx1422.clientY;
  let _0x77edx1535 = voidmenu.style.left;
  let _0x77edx1536 = voidmenu.style.top;
  document.addEventListener("mousemove", _0x77edx1537);
  function _0x77edx1537(_0x77edx1538) {
    let _0x77edx163a = _0x77edx1538.clientX - _0x77edx149a;
    let _0x77edx163b = _0x77edx1538.clientY - _0x77edx149b;
    voidmenu.style.left = parseInt(_0x77edx1535) + _0x77edx163a + "px";
    voidmenu.style.top = parseInt(_0x77edx1536) + _0x77edx163b + "px";
  }
  document.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", _0x77edx1537);
  });
});
document.getElementById("close").onclick = closemenu;
document.getElementById("cheatz").onclick = openCheatz;
document.getElementById("diskard").onclick = diskard;
document.getElementById("chtagpt").onclick = OpenGPT;
document.getElementById("creeditz").onclick = opencreeditz;
document.getElementById("thamas").onclick = themez;
function closeCheatz() {
  console.log("cheetz element was removed succesfully");
  document.getElementById("cheetz").remove();
}
function opencreeditz() {
  if (document.getElementById("creeditzmenu")) {
    document.getElementById("creeditzmenu").remove();
  } else {
    let _0x77edx1abc = document.createElement("div");
    _0x77edx1abc.style.background = "rgb(33, 33, 33)";
    _0x77edx1abc.style.width = "150px";
    _0x77edx1abc.style.height = "200px";
    _0x77edx1abc.style.position = "fixed";
    _0x77edx1abc.style.top = "0px";
    _0x77edx1abc.style.left = "0px";
    _0x77edx1abc.style.zIndex = "99999999";
    _0x77edx1abc.style.opacity = "0.85";
    _0x77edx1abc.style.borderRadius = "10px";
    _0x77edx1abc.style.border = "2px solid purple";
    _0x77edx1abc.style.fontFamily = "sans-serif";
    _0x77edx1abc.style.textAlign = "center";
    _0x77edx1abc.style.lineHeight = "0.1";
    _0x77edx1abc.style.fontWeight = "bold";
    _0x77edx1abc.id = "creeditzmenu";
    _0x77edx1abc.innerHTML = "\n  <style>\n  .hd {\n    color: rgb(140, 0, 255);\n    font-size:25px;\n  }\n  \n  .pr {\n    font-size: 10px;\n    color:rgb(255,255,255);\n    text-decoration: none;\n  }\n  \n  .nbu { \n    color:white;\n    background:transparent;\n    border:solid 0px;\n    width:150px;\n    height: 20px;\n    font-size:15px;\n    transition: all 0.25s;\n    border-radius: 10px;\n    font-Weight:bold;\n  }\n  \n  .nbu:hover {\n    background: rgba(20, 20, 20);\n    color: rgb(144, 0, 255);\n    font-size:17px;\n  }\n\n  </style>\n  \n    <h1 class=\"hd\">VoidMenu<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1); position:absolute;top:40px;left:30px;\">\nCredits</span><h1>\n  \n  <button id=\"creditzj4v\" class=\"nbu\" style=\"position:absolute;top:60px;left:0px;\">J4V</button> \n\n  <button id=\"creditzzeakify\" class=\"nbu\" style=\"position:absolute;top:80px;left:0px;\">Zeakify</button>  \n<!-- STOP CHANGING THIS YOU MONKEY SKY --->\n  <button id=\"creditzskyyy\" class=\"nbu\" style=\"position:absolute;top:100px;left:0px;\">ItzSkyyy</button> \n\n  <button id=\"creditzjayshyper\" class=\"nbu\" style=\"position:absolute;top:120px;left:0px;\">JaysHyper</button>  \n\n  <button id=\"creditzmasteroogway\" class=\"nbu\" style=\"position:absolute;top:140px;left:0px;color:grey\">Master Oogway</button> \n  \n  <button id=\"closecreeditz\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n    ";
    document.body.appendChild(_0x77edx1abc);
    document.getElementById("creditzj4v").onclick = creditzj4v;
    document.getElementById("creditzzeakify").onclick = creditzzeakify;
    document.getElementById("creditzskyyy").onclick = creditzskyyy;
    document.getElementById("creditzjayshyper").onclick = creditzjayshyper;
    document.getElementById("closecreeditz").onclick = closecreeditz;
    _0x77edx1abc.addEventListener("mousedown", function (_0x77edx1abd) {
      let _0x77edx1c32 = _0x77edx1abd.clientX;
      let _0x77edx1c66 = _0x77edx1abd.clientY;
      let _0x77edx1c67 = _0x77edx1abc.style.left;
      let _0x77edx1c68 = _0x77edx1abc.style.top;
      document.addEventListener("mousemove", _0x77edx1d35);
      function _0x77edx1d35(_0x77edx1d36) {
        let _0x77edx1e38 = _0x77edx1d36.clientX - _0x77edx1c32;
        let _0x77edx1e39 = _0x77edx1d36.clientY - _0x77edx1c66;
        _0x77edx1abc.style.left = parseInt(_0x77edx1c67) + _0x77edx1e38 + "px";
        _0x77edx1abc.style.top = parseInt(_0x77edx1c68) + _0x77edx1e39 + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx1d35);
      });
    });
  }
}
function closecreeditz() {
  console.log("creeditz element was removed succesfully");
  document.getElementById("creeditzmenu").remove();
}
function themez() {
  alert("For some reason, themes is glitched out. Sorry! Maybe in the next version.");
}
function creditzj4v() {
  if (document.getElementById("creditzj4vid")) {
    document.getElementById("creditzj4vid").remove();
  } else {
    let _0x77edx21ef = document.createElement("div");
    _0x77edx21ef.style.background = "rgb(33, 33, 33)";
    _0x77edx21ef.style.width = "150px";
    _0x77edx21ef.style.height = "200px";
    _0x77edx21ef.style.position = "fixed";
    _0x77edx21ef.style.top = "0px";
    _0x77edx21ef.style.left = "0px";
    _0x77edx21ef.style.zIndex = "99999999";
    _0x77edx21ef.style.opacity = "0.85";
    _0x77edx21ef.style.borderRadius = "10px";
    _0x77edx21ef.style.border = "2px solid purple";
    _0x77edx21ef.style.fontFamily = "sans-serif";
    _0x77edx21ef.style.textAlign = "center";
    _0x77edx21ef.style.lineHeight = "0.1";
    _0x77edx21ef.style.fontWeight = "bold";
    _0x77edx21ef.id = "creditzj4vid";
    _0x77edx21ef.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  height: 20px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\nimg {\n\nborder: 5px solid #6600e1;\nborder-radius: 45px;\n\n}\n\nh5 {\ncolor: white;\n}\n\n</style>\n\n<img id=\"j4vPFP\" src=\"https://cdn.discordapp.com/avatars/1076258927118929990/a_7939107e9a8ce614dafb34c7094f0be0.gif?size=80\">\n\n\n  <h1 class=\"hd\">J<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">4<span class=\"hd\">V</span></span><h1>\n\n<h5>Owner</h5>\n\n<button id=\"closecreditzj4v\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx21ef);
    document.getElementById("closecreditzj4v").onclick = closecreditzj4v;
    _0x77edx21ef.addEventListener("mousedown", function (_0x77edx21f0) {
      let _0x77edx2360 = _0x77edx21f0.clientX;
      let _0x77edx2361 = _0x77edx21f0.clientY;
      let _0x77edx2362 = _0x77edx21ef.style.left;
      let _0x77edx2396 = _0x77edx21ef.style.top;
      document.addEventListener("mousemove", _0x77edx23fd);
      function _0x77edx23fd(_0x77edx23fe) {
        let _0x77edx2500 = _0x77edx23fe.clientX - _0x77edx2360;
        let _0x77edx2501 = _0x77edx23fe.clientY - _0x77edx2361;
        _0x77edx21ef.style.left = parseInt(_0x77edx2362) + _0x77edx2500 + "px";
        _0x77edx21ef.style.top = parseInt(_0x77edx2396) + _0x77edx2501 + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx23fd);
      });
    });
  }
  ;
}
function closecreditzj4v() {
  console.log("J4V Credits element was removed succesfully");
  document.getElementById("creditzj4vid").remove();
}
function creditzzeakify() {
  if (document.getElementById("creditzzeakifyid")) {
    document.getElementById("creditzzeakifyid").remove();
  } else {
    let _0x77edx2884 = document.createElement("div");
    _0x77edx2884.style.background = "rgb(33, 33, 33)";
    _0x77edx2884.style.width = "150px";
    _0x77edx2884.style.height = "200px";
    _0x77edx2884.style.position = "fixed";
    _0x77edx2884.style.top = "0px";
    _0x77edx2884.style.left = "0px";
    _0x77edx2884.style.zIndex = "99999999";
    _0x77edx2884.style.opacity = "0.85";
    _0x77edx2884.style.borderRadius = "10px";
    _0x77edx2884.style.border = "2px solid purple";
    _0x77edx2884.style.fontFamily = "sans-serif";
    _0x77edx2884.style.textAlign = "center";
    _0x77edx2884.style.lineHeight = "0.1";
    _0x77edx2884.style.fontWeight = "bold";
    _0x77edx2884.id = "creditzzeakifyid";
    _0x77edx2884.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  height: 20px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\nimg {\n\nborder: 5px solid #6600e1;\nborder-radius: 45px;\n\n}\n\nh5 {\ncolor: white;\n}\n\n</style>\n\n<img id=\"zeakifyPFP\" src=\"https://cdn.discordapp.com/avatars/751532308468859011/f0e85080b0f87e0e07811b72cbe211c6.webp?size=80\">\n\n\n  <h1 class=\"hd\">Zeak<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">ify</span><h1>\n\n<h5>Developer</h5>\n\n<button id=\"closecreditzzeakify\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx2884);
    document.getElementById("closecreditzzeakify").onclick = closecreditzzeakify;
    _0x77edx2884.addEventListener("mousedown", function (_0x77edx2885) {
      let _0x77edx28bb = _0x77edx2885.clientX;
      let _0x77edx28bc = _0x77edx2885.clientY;
      let _0x77edx28f0 = _0x77edx2884.style.left;
      let _0x77edx2924 = _0x77edx2884.style.top;
      document.addEventListener("mousemove", _0x77edx2958);
      function _0x77edx2958(_0x77edx2959) {
        let _0x77edx2a59 = _0x77edx2959.clientX - _0x77edx28bb;
        let _0x77edx2a5a = _0x77edx2959.clientY - _0x77edx28bc;
        _0x77edx2884.style.left = parseInt(_0x77edx28f0) + _0x77edx2a59 + "px";
        _0x77edx2884.style.top = parseInt(_0x77edx2924) + _0x77edx2a5a + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx2958);
      });
    });
  }
}
(function () {
  const _0x77edx2c67 = function () {
    let _0x77edx2d9e;
    try {
      _0x77edx2d9e = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x19c17d) {
      _0x77edx2d9e = window;
    }
    ;
    return _0x77edx2d9e;
  };
  const _0x77edx2c68 = _0x77edx2c67();
  _0x77edx2c68.setInterval(_0x25d043, 4000);
})();
function closecreditzzeakify() {
  console.log("Zeakify Credits element was removed succesfully");
  document.getElementById("creditzzeakifyid").remove();
}
function creditzskyyy() {
  if (document.getElementById("creditzskyyyid")) {
    document.getElementById("creditzskyyyid").remove();
  } else {
    let _0x77edx2f52 = document.createElement("div");
    _0x77edx2f52.style.background = "rgb(33, 33, 33)";
    _0x77edx2f52.style.width = "150px";
    _0x77edx2f52.style.height = "200px";
    _0x77edx2f52.style.position = "fixed";
    _0x77edx2f52.style.top = "0px";
    _0x77edx2f52.style.left = "0px";
    _0x77edx2f52.style.zIndex = "99999999";
    _0x77edx2f52.style.opacity = "0.85";
    _0x77edx2f52.style.borderRadius = "10px";
    _0x77edx2f52.style.border = "2px solid purple";
    _0x77edx2f52.style.fontFamily = "sans-serif";
    _0x77edx2f52.style.textAlign = "center";
    _0x77edx2f52.style.lineHeight = "0.1";
    _0x77edx2f52.style.fontWeight = "bold";
    _0x77edx2f52.id = "creditzskyyyid";
    _0x77edx2f52.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  height: 20px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\nimg {\n\nborder: 5px solid #6600e1;\nborder-radius: 45px;\n\n}\n\nh5 {\ncolor: white;\n}\n\n</style>\n\n<img id=\"ItzSkyyyPFP\" src=\"https://cdn.discordapp.com/avatars/850289732511465484/46692bde0f9ee74ce160bf9a387710a1.webp?size=80\">\n\n  <h1 class=\"hd\">Itz<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">Skyyy</span><h1>\n\n<h5 color=\"white\">Developer</h5>\n\n<button id=\"closecreditzskyyy\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx2f52);
    document.getElementById("closecreditzskyyy").onclick = closecreditzskyyy;
    _0x77edx2f52.addEventListener("mousedown", function (_0x77edx2f53) {
      let _0x77edx2f8a = _0x77edx2f53.clientX;
      let _0x77edx3024 = _0x77edx2f53.clientY;
      let _0x77edx3025 = _0x77edx2f52.style.left;
      let _0x77edx308c = _0x77edx2f52.style.top;
      document.addEventListener("mousemove", _0x77edx308d);
      function _0x77edx308d(_0x77edx308e) {
        let _0x77edx318e = _0x77edx308e.clientX - _0x77edx2f8a;
        let _0x77edx318f = _0x77edx308e.clientY - _0x77edx3024;
        _0x77edx2f52.style.left = parseInt(_0x77edx3025) + _0x77edx318e + "px";
        _0x77edx2f52.style.top = parseInt(_0x77edx308c) + _0x77edx318f + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx308d);
      });
    });
  }
  ;
}
function closecreditzskyyy() {
  console.log("ItzSkyyy Credits element was removed succesfully");
  document.getElementById("creditzskyyyid").remove();
}
function creditzjayshyper() {
  if (document.getElementById("creditzjayid")) {
    document.getElementById("creditzjayid").remove();
  } else {
    let _0x77edx34a4 = document.createElement("div");
    _0x77edx34a4.style.background = "rgb(33, 33, 33)";
    _0x77edx34a4.style.width = "150px";
    _0x77edx34a4.style.height = "200px";
    _0x77edx34a4.style.position = "fixed";
    _0x77edx34a4.style.top = "0px";
    _0x77edx34a4.style.left = "0px";
    _0x77edx34a4.style.zIndex = "99999999";
    _0x77edx34a4.style.opacity = "0.85";
    _0x77edx34a4.style.borderRadius = "10px";
    _0x77edx34a4.style.border = "2px solid purple";
    _0x77edx34a4.style.fontFamily = "sans-serif";
    _0x77edx34a4.style.textAlign = "center";
    _0x77edx34a4.style.lineHeight = "0.1";
    _0x77edx34a4.style.fontWeight = "bold";
    _0x77edx34a4.id = "creditzjayid";
    _0x77edx34a4.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  height: 20px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\nimg {\n\nborder: 5px solid #6600e1;\nborder-radius: 45px;\n\n}\n\nh5 {\ncolor: white;\n}\n\n</style>\n\n<img id=\"JaysHyperPFP\" src=\"https://cdn.discordapp.com/avatars/854499020152242236/8d1d072b5f1a75fc286761496ad31a4a.webp?size=80\">\n\n\n  <h1 class=\"hd\">JaysHyper</h1>\n\n\n<h5>Friend</h5>\n\n<button id=\"closecreditzjay\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx34a4);
    document.getElementById("closecreditzjay").onclick = closecreditzjay;
    _0x77edx34a4.addEventListener("mousedown", function (_0x77edx34a5) {
      let _0x77edx3756 = _0x77edx34a5.clientX;
      let _0x77edx3757 = _0x77edx34a5.clientY;
      let _0x77edx3758 = _0x77edx34a4.style.left;
      let _0x77edx378c = _0x77edx34a4.style.top;
      document.addEventListener("mousemove", _0x77edx378d);
      function _0x77edx378d(_0x77edx378e) {
        let _0x77edx3963 = _0x77edx378e.clientX - _0x77edx3756;
        let _0x77edx3964 = _0x77edx378e.clientY - _0x77edx3757;
        _0x77edx34a4.style.left = parseInt(_0x77edx3758) + _0x77edx3963 + "px";
        _0x77edx34a4.style.top = parseInt(_0x77edx378c) + _0x77edx3964 + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx378d);
      });
    });
  }
  ;
}
function closecreditzjay() {
  console.log("JaysHyper Credits element was removed succesfully");
  document.getElementById("creditzjayid").remove();
}
function closemenu() {
  alert("Successfully deleted VoidMenu menu off of your screen. To get it again, reload the page.");
  document.getElementById("jav").remove();
}
function OpenGPT() {
  if (document.getElementById("gptmenu")) {
    document.getElementById("gptmenu").remove();
  } else {
    let _0x77edx3eca = document.createElement("div");
    _0x77edx3eca.style.background = "rgb(33, 33, 33)";
    _0x77edx3eca.style.width = "300px";
    _0x77edx3eca.style.height = "400px";
    _0x77edx3eca.style.position = "fixed";
    _0x77edx3eca.style.top = "0px";
    _0x77edx3eca.style.left = "0px";
    _0x77edx3eca.style.zIndex = "99999999";
    _0x77edx3eca.style.opacity = "0.85";
    _0x77edx3eca.style.borderRadius = "10px";
    _0x77edx3eca.style.border = "2px solid purple";
    _0x77edx3eca.style.fontFamily = "sans-serif";
    _0x77edx3eca.style.textAlign = "center";
    _0x77edx3eca.style.lineHeight = "0.1";
    _0x77edx3eca.style.fontWeight = "bold";
    _0x77edx3eca.id = "gptmenu";
    _0x77edx3eca.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.subhd {\n  color: rgb(140, 0, 255);\n  font-size:15px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbuexit { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:500px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbuexit:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\n.hd {\n      color: rgb(140, 0, 255);\n      font-size: 25px;\n    }\n\n    .subhd {\n      color: rgb(140, 0, 255);\n      font-size: 15px;\n    }\n\n    .pr {\n      font-size: 10px;\n      color: rgb(255, 255, 255);\n      text-decoration: none;\n    }\n\n    .nbuexit {\n      color: white;\n      background: transparent;\n      border: solid 0px;\n      width: 300px;\n      font-size: 15px;\n      transition: all 0.25s;\n      border-radius: 10px;\n      font-weight: bold;\n    }\n\n    .nbuexit:hover {\n      background: rgba(20, 20, 20);\n      color: rgb(144, 0, 255);\n      font-size: 17px;\n    }\n\n    .nbu {\n      color: white;\n      background: transparent;\n      border: solid 0px;\n      width: 150px;\n      font-size: 15px;\n      transition: all 0.25s;\n      border-radius: 10px;\n      font-weight: bold;\n    }\n\n    .nbu:hover {\n      background: rgba(20, 20, 20);\n      color: rgb(144, 0, 255);\n      font-size: 17px;\n    }\n\n    #input {\n      width: 250px;\n      height: 100px;\n      margin: 10px;\n      padding: 10px;\n      font-family: sans-serif;\n      font-size: 15px;\n      border-radius: 10px;\n      border: 2px solid purple;\n      resize: none;\n      background-color:black;\n      color:purple;\n    }\n\n    #response {\n      width: 250px;\n      height: 100px;\n      margin: 10px;\n      padding: 10px;\n      font-family: sans-serif;\n      font-size: 15px;\n      border-radius: 10px;\n      border: 2px solid purple;\n      resize: none;\n      overflow-y: auto;\n      background-color:black;\n      color:purple;\n    }\n\n    #response::-webkit-scrollbar-thumb {\n      background-color: purple;\n      border-radius: 10px;\n    }\n\n    #response::-webkit-scrollbar-track {\n      background-color: black;\n      border: solid 2x purple;\n    }\n\n</style>\n\n  <h1 class=\"hd\">Chat<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">GPT</span><h1>\n\n  <p class=\"subhd\">ItzSkyyy's GPT Menu<p>\n  <p class=\"subhd\">Please be specific</p>\n<form>\n  <input type=\"text\" id=\"input\" name=\"input\" placeholder=\"Type your message here\">\n  </form>\n  <form id=\"response-form\">\n  <textarea id=\"response\" name=\"response\" placeholder=\"Output will appear here\" readonly></textarea>\n  </form>\n  \n<button id=\"closegpt\" class=\"nbuexit\" style=\"position:absolute;bottom:3px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx3eca);
    document.getElementById("closegpt").onclick = closegptmenu;
    const _0x77edx3ecb = "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";
    const _0x77edx3ecc = "text-davinci-003";
    const _0x77edx3ecd = document.querySelector("form");
    const _0x77edx3ece = document.getElementById("input");
    const _0x77edx3ecf = document.querySelector("#response");
    _0x77edx3ecd.addEventListener("submit", function (_0x77edx3ed0) {
      _0x77edx3ed0.preventDefault();
      const _0x77edx41a8 = _0x77edx3ece.value;
      _0x77edx3ece.value = "";
      _0x77edx41a9(_0x77edx41a8);
    });
    function _0x77edx41a9(_0x77edx41aa) {
      const _0x77edx4380 = new XMLHttpRequest();
      _0x77edx4380.open("POST", "https://api.openai.com/v1/engines/" + _0x77edx3ecc + "/completions");
      _0x77edx4380.setRequestHeader("Content-Type", "application/json");
      _0x77edx4380.setRequestHeader("Authorization", "Bearer " + _0x77edx3ecb);
      _0x77edx4380.onload = function () {
        if (_0x77edx4380.status === 200) {
          const _0x77edx44b7 = JSON.parse(_0x77edx4380.responseText);
          const _0x77edx44b8 = _0x77edx44b7.choices[0].text;
          _0x77edx3ecf.innerHTML = _0x77edx44b8;
        } else {
          alert("Error sending message to OpenAI API: " + _0x77edx4380.status);
          console.error("Error sending message to OpenAI API: " + _0x77edx4380.status);
        }
      };
      const _0x77edx44b9 = {
        prompt: _0x77edx41aa,
        max_tokens: 2048
      };
      _0x77edx4380.send(JSON.stringify(_0x77edx44b9));
    }
    _0x77edx3eca.addEventListener("mousedown", function (_0x77edx44ba) {
      let _0x77edx458f = _0x77edx44ba.clientX;
      let _0x77edx4590 = _0x77edx44ba.clientY;
      let _0x77edx45c4 = _0x77edx3eca.style.left;
      let _0x77edx45c5 = _0x77edx3eca.style.top;
      document.addEventListener("mousemove", _0x77edx4692);
      function _0x77edx4692(_0x77edx4693) {
        let _0x77edx4794 = _0x77edx4693.clientX - _0x77edx458f;
        let _0x77edx4795 = _0x77edx4693.clientY - _0x77edx4590;
        _0x77edx3eca.style.left = parseInt(_0x77edx45c4) + _0x77edx4794 + "px";
        _0x77edx3eca.style.top = parseInt(_0x77edx45c5) + _0x77edx4795 + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx4692);
      });
    });
  }
  ;
}
function closegptmenu() {
  console.log("gptmenu element was removed succesfully");
  document.getElementById("gptmenu").remove();
}
function diskard() {
  window.open("https://discord.gg/jvoid");
}
function openCheatz() {
  if (document.getElementById("cheetz")) {
    document.getElementById("cheetz").remove();
  } else {
    let _0x77edx4bac = document.createElement("div");
    _0x77edx4bac.style.background = "rgb(33, 33, 33)";
    _0x77edx4bac.style.width = "150px";
    _0x77edx4bac.style.height = "200px";
    _0x77edx4bac.style.position = "fixed";
    _0x77edx4bac.style.top = "0px";
    _0x77edx4bac.style.left = "0px";
    _0x77edx4bac.style.zIndex = "99999999";
    _0x77edx4bac.style.opacity = "0.85";
    _0x77edx4bac.style.borderRadius = "10px";
    _0x77edx4bac.style.border = "2px solid purple";
    _0x77edx4bac.style.fontFamily = "sans-serif";
    _0x77edx4bac.style.textAlign = "center";
    _0x77edx4bac.style.lineHeight = "0.1";
    _0x77edx4bac.style.fontWeight = "bold";
    _0x77edx4bac.id = "cheetz";
    _0x77edx4bac.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\n</style>\n\n  <h1 class=\"hd\">Void<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">Cheats</span><h1>\n\n<button id=\"ireadyCheatsbtn\" class=\"nbu\" style=\"position:absolute;top:40px;left:0px;\">i-Ready Cheats</span></button> \n\n<button id=\"edpuzzleCheatsbtn\" class=\"nbu\" style=\"position:absolute;top:60px;left:0px;\">EdPuzzle Cheats</span></button> \n\n<button id=\"closeCheatz\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx4bac);
    document.getElementById("ireadyCheatsbtn").onclick = openIreadyCheats;
    document.getElementById("edpuzzleCheatsbtn").onclick = OpenEdpuzzleCheats;
    document.getElementById("closeCheatz").onclick = closeCheatz;
    _0x77edx4bac.addEventListener("mousedown", function (_0x77edx4bad) {
      let _0x77edx4d8a = _0x77edx4bad.clientX;
      let _0x77edx4dbe = _0x77edx4bad.clientY;
      let _0x77edx4df2 = _0x77edx4bac.style.left;
      let _0x77edx4e26 = _0x77edx4bac.style.top;
      document.addEventListener("mousemove", _0x77edx4e5a);
      function _0x77edx4e5a(_0x77edx4e5b) {
        let _0x77edx4f5b = _0x77edx4e5b.clientX - _0x77edx4d8a;
        let _0x77edx4f5c = _0x77edx4e5b.clientY - _0x77edx4dbe;
        _0x77edx4bac.style.left = parseInt(_0x77edx4df2) + _0x77edx4f5b + "px";
        _0x77edx4bac.style.top = parseInt(_0x77edx4e26) + _0x77edx4f5c + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx4e5a);
      });
    });
  }
  ;
}
function closeCheatz() {
  console.log("cheetz element was removed succesfully");
  document.getElementById("cheetz").remove();
}
function OpenEdpuzzleCheats() {
  if (document.getElementById("Edpeezle")) {
    document.getElementById("Edpeezle").remove();
  } else {
    let _0x77edx520d = document.createElement("div");
    _0x77edx520d.style.background = "rgb(33, 33, 33)";
    _0x77edx520d.style.width = "150px";
    _0x77edx520d.style.height = "200px";
    _0x77edx520d.style.position = "fixed";
    _0x77edx520d.style.top = "0px";
    _0x77edx520d.style.left = "0px";
    _0x77edx520d.style.zIndex = "99999999";
    _0x77edx520d.style.opacity = "0.85";
    _0x77edx520d.style.borderRadius = "10px";
    _0x77edx520d.style.border = "2px solid purple";
    _0x77edx520d.style.fontFamily = "sans-serif";
    _0x77edx520d.style.textAlign = "center";
    _0x77edx520d.style.lineHeight = "0.1";
    _0x77edx520d.style.fontWeight = "bold";
    _0x77edx520d.id = "Edpeezle";
    _0x77edx520d.innerHTML = "\n<style>\n.hd {\n  color: rgb(140, 0, 255);\n  font-size:25px;\n}\n\n.pr {\n  font-size: 10px;\n  color:rgb(255,255,255);\n  text-decoration: none;\n}\n\n.nbu { \n  color:white;\n  background:transparent;\n  border:solid 0px;\n  width:150px;\n  font-size:15px;\n  transition: all 0.25s;\n  border-radius: 10px;\n  font-Weight:bold;\n}\n\n.nbu:hover {\n  background: rgba(20, 20, 20);\n  color: rgb(144, 0, 255);\n  font-size:17px;\n}\n\n</style>\n\n  <h1 class=\"hd\">Ed<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">Puzzle</span><h1>\n\n<button id=\"OpenMenu\" class=\"nbu\" style=\"position:absolute;top:40px;left:0px;\">Open Menu</span></button> \n\n<button id=\"closeEdpeezle\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n  ";
    document.body.appendChild(_0x77edx520d);
    document.getElementById("OpenMenu").onclick = OpenMenu;
    document.getElementById("closeCheatz").onclick = closeCheatz;
    _0x77edx520d.addEventListener("mousedown", function (_0x77edx520e) {
      let _0x77edx53b7 = _0x77edx520e.clientX;
      let _0x77edx53b8 = _0x77edx520e.clientY;
      let _0x77edx53b9 = _0x77edx520d.style.left;
      let _0x77edx53ba = _0x77edx520d.style.top;
      document.addEventListener("mousemove", _0x77edx5487);
      function _0x77edx5487(_0x77edx5488) {
        let _0x77edx5588 = _0x77edx5488.clientX - _0x77edx53b7;
        let _0x77edx5589 = _0x77edx5488.clientY - _0x77edx53b8;
        _0x77edx520d.style.left = parseInt(_0x77edx53b9) + _0x77edx5588 + "px";
        _0x77edx520d.style.top = parseInt(_0x77edx53ba) + _0x77edx5589 + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx5487);
      });
    });
  }
  ;
}
function closeEdpeezle() {
  console.log("closeEdpeezle element was removed succesfully");
  document.getElementById("Edpeezle").remove();
}
function OpenMenu() {
  alert("Edpuzzle Cheat is in progress. In 3.0, we might release it.");
}
function openIreadyCheats() {
  if (document.getElementById("irady")) {
    document.getElementById("irady").remove();
  } else {
    let _0x77edx5a05 = document.createElement("div");
    _0x77edx5a05.style.background = "rgb(33, 33, 33)";
    _0x77edx5a05.style.width = "150px";
    _0x77edx5a05.style.height = "200px";
    _0x77edx5a05.style.position = "fixed";
    _0x77edx5a05.style.top = "0px";
    _0x77edx5a05.style.left = "0px";
    _0x77edx5a05.style.zIndex = "99999999";
    _0x77edx5a05.style.opacity = "0.85";
    _0x77edx5a05.style.borderRadius = "10px";
    _0x77edx5a05.style.border = "2px solid purple";
    _0x77edx5a05.style.fontFamily = "sans-serif";
    _0x77edx5a05.style.textAlign = "center";
    _0x77edx5a05.style.lineHeight = "0.1";
    _0x77edx5a05.style.fontWeight = "bold";
    _0x77edx5a05.id = "irady";
    _0x77edx5a05.innerHTML = "\n  <style>\n  .hd {\n    color: rgb(140, 0, 255);\n    font-size:25px;\n  }\n  \n  .pr {\n    font-size: 10px;\n    color:rgb(255,255,255);\n    text-decoration: none;\n  }\n  \n  .nbu { \n    color:white;\n    background:transparent;\n    border:solid 0px;\n    width:150px;\n    height: 20px;\n    font-size:15px;\n    transition: all 0.25s;\n    border-radius: 10px;\n    font-Weight:bold;\n  }\n  \n  .nbu:hover {\n    background: rgba(20, 20, 20);\n    color: rgb(144, 0, 255);\n    font-size:17px;\n  }\n\n  </style>\n  \n    <h1 class=\"hd\">i<span style=\"color:rgb(0, 0, 0);text-shadow: 0px 0px 5px rgba(102,0,255,1), 0px 0px 5px rgba(102,0,255,1);\">-Ready</span><h1>\n  \n  <button id=\"skeparr\" class=\"nbu\" style=\"position:absolute;top:40px;left:0px; color:grey; disabled\">Skip Lesson</span></button> \n  \n  <button id=\"duparr\" class=\"nbu\" style=\"position:absolute;top:60px;left:0px;\">Dupe Lesson</span></button> \n  \n  <button id=\"manutefrmr\" class=\"nbu\" style=\"position:absolute;top:80px;left:0px;\">Farm Minutes</span></button> \n  \n  <button id=\"xtras\" class=\"nbu\" style=\"position:absolute;top:100px;left:0px;\">Extras</span></button> \n    \n  <button id=\"closeIreadyCheats\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n    ";
    document.body.appendChild(_0x77edx5a05);
    document.getElementById("skeparr").onclick = skeparr;
    document.getElementById("duparr").onclick = duparr;
    document.getElementById("manutefrmr").onclick = manutefrmr;
    document.getElementById("xtras").onclick = xtras;
    document.getElementById("closeIreadyCheats").onclick = closeIreadyCheats;
    _0x77edx5a05.addEventListener("mousedown", function (_0x77edx5a06) {
      let _0x77edx5baf = _0x77edx5a06.clientX;
      let _0x77edx5bb0 = _0x77edx5a06.clientY;
      let _0x77edx5be4 = _0x77edx5a05.style.left;
      let _0x77edx5c18 = _0x77edx5a05.style.top;
      document.addEventListener("mousemove", _0x77edx5c4c);
      function _0x77edx5c4c(_0x77edx5c4d) {
        let _0x77edx5d4d = _0x77edx5c4d.clientX - _0x77edx5baf;
        let _0x77edx5d4e = _0x77edx5c4d.clientY - _0x77edx5bb0;
        _0x77edx5a05.style.left = parseInt(_0x77edx5be4) + _0x77edx5d4d + "px";
        _0x77edx5a05.style.top = parseInt(_0x77edx5c18) + _0x77edx5d4e + "px";
      }
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", _0x77edx5c4c);
      });
    });
  }
  ;
}
function closeIreadyCheats() {
  console.log("irady element was removed succesfully");
  document.getElementById("irady").remove();
}
function skeparr() {
  alert("Skipper is patched. We are currently working on it. Use chat GPT or lesson dupe for i-Ready answer hacks.");
}
function duparr() {
  const _0x77edx61fa = "2|1|0|3|4".split("|");
  let _0x77edx6294 = 0;
  while (true) {
    switch (_0x77edx61fa[_0x77edx6294++]) {
      case "0":
        open(_0x77edx62c8);
        continue;
      case "1":
        var _0x77edx62c8 = document.getElementById("html5Iframe").src;
        continue;
      case "2":
        alert("Lesson has been duplicated 3 times, you may get answers.");
        continue;
      case "3":
        open(_0x77edx62c8);
        continue;
      case "4":
        open(_0x77edx62c8);
        continue;
    }
    ;
    break;
  }
}
function manutefrmr() {
  alert("Minute farmer has been enabled. Refresh your page to stop the minute farmer.");
  setInterval(function () {
    document.getElementById("play-pause").click();
    document.getElementById("continue-btn").click();
  }, 20000);
}
function xtras() {
  if (document.getElementById("moare")) {
    document.getElementById("moare").remove();
  } else {
    const _0x77edx6519 = "0|1|7|11|16|2|4|10|12|9|5|14|13|8|3|15|6".split("|");
    let _0x77edx651a = 0;
    while (true) {
      switch (_0x77edx6519[_0x77edx651a++]) {
        case "0":
          var _0x77edx651b = document.createElement("div");
          continue;
        case "1":
          _0x77edx651b.style.background = "rgb(33, 33, 33)";
          continue;
        case "2":
          _0x77edx651b.style.top = "0px";
          continue;
        case "3":
          _0x77edx651b.style.fontWeight = "bold";
          continue;
        case "4":
          _0x77edx651b.style.left = "0px";
          continue;
        case "5":
          _0x77edx651b.style.border = "2px solid purple";
          continue;
        case "6":
          _0x77edx651b.innerHTML = "\n  <style>\n  .hd {\n    color: rgb(140, 0, 255);\n    font-size:25px;\n  }\n  \n  .pr {\n    font-size: 10px;\n    color:rgb(255,255,255);\n    text-decoration: none;\n  }\n  \n  .nbu { \n    color:white;\n    background:transparent;\n    border:solid 0px;\n    width:150px;\n    height: 20px;\n    font-size:15px;\n    transition: all 0.25s;\n    border-radius: 10px;\n    font-Weight:bold;\n  }\n  \n  .nbu:hover {\n    background: rgba(20, 20, 20);\n    color: rgb(144, 0, 255);\n    font-size:17px;\n  }\n\n  </style>\n<h1 class=\"hd\" style=\"font-family: sans-serif;text-align:center;\">Extras</h1>\n\n<button class=\"nbu\" id=\"coinz\">Change Coins</button>\n\n<button class=\"nbu\" id=\"namez\">Change Name</button>\n\n<button class=\"nbu\" id=\"fics\">Fix Lesson</button>\n\n<button class=\"nbu\" id=\"leslink\">Lesson Link</button>\n\n<button class=\"nbu\" id=\"gamefree\">Free games</button>\n\n<button class=\"nbu\" id=\"dark\">Dark mode</button>\n\n<button id=\"closeExtraz\" class=\"nbu\" style=\"position:absolute;bottom:5px;left:0px;\">Exit</button>  \n";
          continue;
        case "7":
          _0x77edx651b.style.width = "150px";
          continue;
        case "8":
          _0x77edx651b.style.lineHeight = "0.1";
          continue;
        case "9":
          _0x77edx651b.style.borderRadius = "10px";
          continue;
        case "10":
          _0x77edx651b.style.zIndex = "99999999";
          continue;
        case "11":
          _0x77edx651b.style.height = "200px";
          continue;
        case "12":
          _0x77edx651b.style.opacity = "0.85";
          continue;
        case "13":
          _0x77edx651b.style.textAlign = "center";
          continue;
        case "14":
          _0x77edx651b.style.fontFamily = "sans-serif";
          continue;
        case "15":
          _0x77edx651b.id = "moare";
          continue;
        case "16":
          _0x77edx651b.style.position = "fixed";
          continue;
      }
      ;
      break;
    }
  }
  ;
  document.body.appendChild(_0x77edx651b);
  document.getElementById("coinz").onclick = coins;
  document.getElementById("namez").onclick = namechanger;
  document.getElementById("fics").onclick = fixLesson;
  document.getElementById("leslink").onclick = leslink;
  document.getElementById("closeExtraz").onclick = closeExtraz;
  document.getElementById("dark").onclick = dark;
  document.getElementById("gamefree").onclick = gamefree;
  moare.addEventListener("mousedown", function (_0x77edx65e8) {
    let _0x77edx661f = _0x77edx65e8.clientX;
    let _0x77edx6653 = _0x77edx65e8.clientY;
    let _0x77edx6654 = _0x77edx651b.style.left;
    let _0x77edx6655 = _0x77edx651b.style.top;
    document.addEventListener("mousemove", _0x77edx66ef);
    function _0x77edx66ef(_0x77edx66f0) {
      let _0x77edx67f0 = _0x77edx66f0.clientX - _0x77edx661f;
      let _0x77edx67f1 = _0x77edx66f0.clientY - _0x77edx6653;
      moare.style.left = parseInt(_0x77edx6654) + _0x77edx67f0 + "px";
      moare.style.top = parseInt(_0x77edx6655) + _0x77edx67f1 + "px";
    }
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", _0x77edx66ef);
    });
  });
}
function closeExtraz() {
  console.log("xtra element was removed succesfully");
  document.getElementById("moare").remove();
}
function dark() {
  console.log("Dark mode on.");
  document.body.style.backgroundColor = "rgb(30,30,30)";
  document.getElementsByClassName("node_modules--cainc-cauliflower-src-components-layout-___Layout__layout-flex node_modules--cainc-cauliflower-src-components-layout-___Layout__align-items-center node_modules--cainc-cauliflower-src-components-layout-___Layout__justify-content-space-between css-t7oxu9-Layout-UsernameContainer e15psnz1")[0].style.backgroundColor = "rgb(0,0,0)";
  document.getElementsByClassName("e1nmn77d1-card-body embu0a00 css-1kh7anh-createComponent-withSubjectPickerStyles-HEADER_9 node_modules--cainc-cauliflower-src-components-card-___Card__card-body")[0].style.backgroundColor = "rgb(10,10,10)";
  const _0x77edx6b01 = document.querySelectorAll("*");
  _0x77edx6b01.forEach(_0x77edx6b35 => {
    _0x77edx6b35.style.color = "white";
  });
}
function gamefree() {
  window.open("https://docs.google.com/document/d/1Y5rPs6YQtTpp5HAiE6HTuesLxHHf53VTa41nvqF7uHk/view");
}
function coins() {
  let _0x77edx6dda = prompt("How many coins do you want?", "10,000");
  document.getElementsByClassName("css-1ha21nc-Typography enj526p0")[0].innerHTML = _0x77edx6dda;
  alert("You have " + _0x77edx6dda + " coins. (ITS ONLY FOR SHOW)");
}
function namechanger() {
  let _0x77edx6f12 = prompt("Put anything inside the box.", "Ethan");
  document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0")[0].innerHTML = _0x77edx6f12;
}
function leslink() {
  if (window.html5Iframe === undefined) {
    alert("Please open a lesson.");
  } else {
    var _0x77edx704f = window.html5Iframe.src;
    alert("Your lesson link is: " + _0x77edx704f);
  }
}
function fixLesson() {
  let _0x77edx70bf = html5Iframe.src.split("?csid=")[1].split("&type")[0];
  fetch("https://login.i-ready.com/student/v2/web/lesson_component/" + _0x77edx70bf + "/markprogress/" + _0x77edx70bf, {
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json;charset=UTF-8",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1"
    },
    referrer: "https://login.i-ready.com/student/dashboard/home",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: "{\"value\":\"a\",\"bucket\":\"short_term_unsecured\",\"datatype\":\"json\"}",
    method: "POST",
    mode: "cors",
    credentials: "include"
  });
  alert("Your lesson should be fixed. If not, report a issue in discord.");
}
function instaminMath() {
  var _0x77edx7203 = prompt("How many minutes would you like?", "60");
  _0x77edx7203 = document.querySelector(".css-up62gm-Ticker-TOT.e16nsggm0").innerHTML;
  alert("You now have " + _0x77edx7203 + " minutes now. This is just for show so you can show your teacher this.");
}
function instaminReading() {
  var _0x77edx7372 = prompt("How many minutes would you like?", "60");
  _0x77edx7372 = document.querySelector(".css-1biqgf1-Ticker-TOT.e16nsggm0").innerHTML;
  alert("You now have " + _0x77edx7372 + " minutes now. This is just for show so you can show your teacher this.");
}
console.log("%cVoidMenu 2.3", "color: #8000FF;font-size: 60px;font-family:sans-serif;");
console.log("%cMade by J4V, Zeakify & ItzSkyyy", "color: #8000FF;font-size: 30px;font-family:sans-serif;");
function _0x25d043(_0x77edx743f) {
  function _0x77edx7469(_0x77edx746a) {
    if (typeof _0x77edx746a === "string") {
      return function (_0x77edx763f) {}.constructor("while (true) {}").apply("counter");
    } else if (("" + _0x77edx746a / _0x77edx746a).length !== 1 || _0x77edx746a % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    ;
    _0x77edx7469(++_0x77edx746a);
  }
  try {
    if (_0x77edx743f) {
      return _0x77edx7469;
    } else {
      _0x77edx7469(0);
    }
  } catch (_0x49a1cb) {}
}
