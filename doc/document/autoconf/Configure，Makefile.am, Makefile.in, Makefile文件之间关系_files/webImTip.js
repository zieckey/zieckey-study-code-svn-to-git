function WHG(A){return document.getElementById(A)}var isIE=navigator.userAgent.indexOf("MSIE")>-1&&!window.opera;var webHi={posStartX:0,posEndX:0,posStartY:0,posEndY:0,posAlpha:0,posState:0,tempNum:0,eventHandler:null,closeEventHandler:null,textBlock:null,textTip:null};webHi.textBlock=WHG("hi");webHi.textTip=WHG("hiMsg");if(isIE){webHi.textBlock.style.paddingRight="2px";webHi.textBlock.style.marginRight="2px"}function openTip(A){WHG("msgPos").title=WHG("hiMsg").title="您的百度Hi有新消息，点击读取";WHG("msgRight").innerHTML=A;var C=String(A).length;var B=[13,20,26];if(C<4){webHi.posEndX=B[C-1]}else{webHi.posEndX=8*C+(isIE?2:1);if(C>=8){webHi.posEndX-=3}}if(isIE){webHi.posStartY=1;webHi.posEndY=-6;webHi.textTip.style.right=(-3-C*7)+"px";webHi.textBlock.style.paddingRight="3px"}else{webHi.posStartY=0;webHi.posEndY=-7;webHi.textTip.style.right=(-1-C*7)+"px";webHi.textBlock.style.paddingRight="2px"}webHi.textTip.style.marginTop=webHi.posStartY+"px";if(webHi.tempNum!=C){webHi.tempNum=C;webHi.posState=0;webHi.posAlpha=0;webHi.posStartX=0}if(webHi.posState>=4){webHi.posState=2;webHi.posStartY-=5;webHi.posAlpha=0}clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=null;clearInterval(webHi.eventHandler);webHi.eventHandler=setInterval(openMoveEvent,1)}function closeTip(){webHi.posStartY-=5;webHi.posAlpha=0;webHi.textTip.style.display="none";webHi.posStartX=webHi.posEndX;webHi.posEndX=isIE?2:0;clearInterval(webHi.eventHandler);webHi.eventHandler=null;clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=setInterval(closeMoveEvent,1);WHG("msgPos").title=WHG("hiMsg").title="发起即时会话";WHG("msgRight").innerHTML="0"}function closeMoveEvent(){if(webHi.posStartX-3<=webHi.posEndX){clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=null;webHi.posStartX=webHi.posEndX;webHi.textBlock.style.marginRight=webHi.posStartX+"px";return }webHi.posState=0;webHi.textBlock.style.marginRight=webHi.posStartX+"px";webHi.posStartX-=3}function openMoveEvent(){switch(webHi.posState){case 0:webHi.textBlock.style.marginRight=webHi.posStartX+"px";webHi.posStartX+=3;if(webHi.posStartX>=webHi.posEndX){webHi.posState=1}break;case 1:webHi.textTip.style.marginTop=webHi.posStartY--+"px";if(webHi.posStartY==webHi.posEndY+3){webHi.posState=2}break;case 2:webHi.textTip.style.filter="alpha(opacity ="+webHi.posAlpha+")";webHi.textTip.style.opacity=webHi.posAlpha/100;webHi.textTip.style.display="block";webHi.posState=3;break;case 3:if(webHi.posStartY>=webHi.posEndY){webHi.textTip.style.marginTop=webHi.posStartY--+"px"}var A=Math.abs(Math.sin(3.1415*webHi.posAlpha/180)*100);webHi.textTip.style.filter="alpha(opacity ="+A+")";webHi.textTip.style.opacity=A/100;webHi.posAlpha+=10;if(webHi.posAlpha>=640){webHi.posState=4}break;case 4:clearInterval(webHi.eventHandler);webHi.eventHandler=null;return }}window.IMOld=(function(){var E=null,D=0,F=null,B=null;G.interval=30*1000;G.url="http://fetch.im.baidu.com/ihaloader?op=msgcount&charset=gbk&callback=IMOld&refer=hi.baidu.com";G.reset=function(){G.onchange(0);H(0);if(G.timer){clearInterval(G.timer)}C()};G.fetch=function(){E=A();B=new Date().getTime();if(E){E=E.split("|");B=parseInt(E[1],36);D=E[0];E=null}setTimeout(function(){I();C();if(D>0&&typeof (G.onchange)=="function"){G.onchange(D)}},1000)};function I(){H(D);F=document.createElement("SCRIPT");F.type="text/javascript";F.src=G.url+(G.url.indexOf("?")>0?"&":"?")+".stamp="+new Date().getTime().toString(36);document.getElementsByTagName("HEAD")[0].appendChild(F)}function H(L){var J=new Date(),K=J.getTime();J.setTime(K+3*G.interval);document.cookie="IM_old="+L+"|"+K.toString(36)+";domain=baidu.com;path=/;expires="+J.toGMTString();if(F){F.parentNode.removeChild(F);F=null}}function A(){var J=document.cookie.match(/(^| )IM_old=([^;]*)(;|$)/);if(J!=null){return unescape(J[2])}return null}function C(){G.timer=setInterval(function(){var J=A(),L=0,K=0;if(J){J=J.split("|");K=parseInt(J[1],36);L=J[0];J=null}if(Math.abs(new Date().getTime()-K)>G.interval){I()}if(D!=L){D=L;if(typeof (G.onchange)=="function"){G.onchange(L)}}},500)}function G(J){H(J)}return G})();window.startBaiduHi=(function(){var D=navigator.userAgent.indexOf("MSIE")>-1&&!window.opera,F=navigator.userAgent.indexOf("Firefox")!=-1;function C(){var B="";try{B=new ActiveXObject("WebDetect.Detect").GetVersion()}catch(H){}try{if(typeof (navigator.mimeTypes["application/x-baiduhi"])=="object"){B=".*"}}catch(H){}return B}function G(H){var B=new Date(),I=B.getTime();B.setTime(I+30*1000);document.cookie="IM_add="+escape(H+"|hi.baidu.com|"+(new Date().getTime()).toString(36))+";domain=baidu.com;path=/;expires="+B.toGMTString();if(!/(^| )IM_=/.test(document.cookie)){if(G.f&&G.f.tagName=="FORM"){G.f.submit();return }var I=document.createElement("DIV");I.style.display="none";document.body.insertBefore(I,document.body.firstChild);I.innerHTML="<form name='__IM_REDIRECT_FORM' method='get' target='baidu_webim' action='http://web.im.baidu.com'></form>";G.f=document.forms.__IM_REDIRECT_FORM;G.f.submit();I=null}}function E(H){var B=[];for(prop in H){if(prop!="onim"&&prop!="onwebim"){B.push(prop+"="+H[prop])}}return(B.length>0?"&"+B.join("&"):"")}function A(B,K,H,J){var L=document.createElement("script");document.body.appendChild(L);L.src="http://im.baidu.com/nop?type="+B+"&sid="+K+"&id="+H+E(J)+"&t="+new Date().getTime()}return function(J,N,L,M){A(J,N,L,M);var H=C(),K;if(H==""){if(/c2cmsg|message|addcontact|addgroup|creategroup/i.test(J)){G(L);if(M&&M.onwebim){M.onwebim()}}return false}if(!(new RegExp(H.replace(/(\.)/g,"\\."),"i").test(J))){return false}var B="baidu://"+J+"/?sid="+N+"&id="+L+E(M);if(D){B=B+"&browser=IE"}else{if(F){B=B+"&browser=FF&promo=c2cmsg|message|addgroup|creategroup|addcontact"}}if(M&&M.onim){M.onim()}if(document.getElementById("__IM_REDIRECT_IFRAME")){K=document.getElementById("__IM_REDIRECT_IFRAME")}else{K=document.createElement("iframe");K.style.display="none";K.id="__IM_REDIRECT_IFRAME";document.body.appendChild(K)}K.src=B}})();window.IMOld.onchange=function(A){if(A>0){openTip(A)}else{closeTip()}};