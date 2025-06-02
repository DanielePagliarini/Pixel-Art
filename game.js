const cvs=document.getElementById("game"),ctx=cvs.getContext("2d");
const W=160,H=120;cvs.width=W;cvs.height=H;
function resize(){const s=Math.floor(Math.min(innerWidth/W,innerHeight/H));cvs.style.width=W*s+"px";cvs.style.height=H*s+"px";}
addEventListener("resize",resize);resize();
const p={x:W/2-4,y:H/2-4,w:8,h:8,v:1.2};
const k={};onkeydown=e=>k[e.key.toLowerCase()]=1;onkeyup=e=>k[e.key.toLowerCase()]=0;
let tDir={x:0,y:0};
const joy=document.body.appendChild(Object.assign(document.createElement("div"),{className:"joy"}));
joy.ontouchmove=e=>{const r=joy.getBoundingClientRect(),d=e.touches[0];
tDir.x=Math.max(-1,Math.min(1,(d.clientX-(r.left+r.width/2))/40));
tDir.y=Math.max(-1,Math.min(1,(d.clientY-(r.top+r.height/2))/40));};
joy.ontouchend=_=>tDir={x:0,y:0};
document.body.appendChild(Object.assign(document.createElement("div"),{className:"btn"}));
function loop(){requestAnimationFrame(loop);
  const dx=(k.a?-1:0)+(k.d?1:0)+tDir.x,dy=(k.w?-1:0)+(k.s?1:0)+tDir.y;
  p.x=Math.max(0,Math.min(W-p.w,p.x+dx*p.v));
  p.y=Math.max(0,Math.min(H-p.h,p.y+dy*p.v));
  ctx.fillStyle="#000";ctx.fillRect(0,0,W,H);
  ctx.fillStyle="#ff4040";ctx.fillRect(p.x,p.y,p.w,p.h);
}
loop();
