javascript:(function(){
  var e=document.createElement("div");
  e.style="position:fixed;top:30%;left:40%;background-color:#222222;border:2px solid #cccccc;color:#cccccc;font-family:sans-serif;padding:20px;border-radius:0px;cursor:move;height:200px;width:250px;box-shadow:0 0 10px #cccccc;z-index:99999;";
  e.innerHTML="<h2 style='margin:0 0 10px;font-size:22px;font-weight:bold;text-align:center;color:#FFD700;'>test menu</h2><hr style='border:none;border-top:1px solid #cccccc;'><button id='button1' style='background-color:#cccccc;border:none;border-radius:3px;padding:8px 16px;color:#222222;margin:10px;font-size:16px;font-weight:bold;box-shadow:0 0 10px #cccccc;'>Test</button>";
  document.body.appendChild(e);
  var t=!1,n,r;
  e.addEventListener("mousedown",function(o){
    t=!0,n=o.clientX-e.offsetLeft,r=o.clientY-e.offsetTop
  }),
  document.addEventListener("mousemove",function(o){
    t&&(e.style.left=o.clientX-n+"px",e.style.top=o.clientY-r+"px")
  }),
  document.addEventListener("mouseup",function(){
    t=!1;
  });

  var overlay = document.createElement("div");
  overlay.style="position: fixed; top: 0; right: 0; background-color: #222222; color: #cccccc; font-size: 16px; padding: 10px; z-index: 99999;";
  overlay.innerHTML = "<p>example</p>";
  document.body.appendChild(overlay);

  document.getElementById('button1').addEventListener('click',function(){
    alert('button working!');
  });
})();
