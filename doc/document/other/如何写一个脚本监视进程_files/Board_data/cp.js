(function(){var kenny="",arr="",inIfr=false,doc=document,st=new Date(),undefined;(function(){doc.write("<div style=display:none>-</div>");var url=makeUrl();if(adsNum()){return}else{doc.write('<iframe align="center,center" marginwidth=0 marginheight=0 scrolling=no frameborder=0 width='+cpro_w+" height="+cpro_h+' allowtransparency src="'+url+'"></iframe>')}})();function makeUrl(){var gloNames,gloValues,paramNames,paramValues,scr=screen,nav=navigator;gloNames=["template","client","h","w","ads_c","rad","cbd","cbg","ctitle","cdesc","curl","clink","cflush","ts","at","channel","cad","aurl","acolor","uap","flush"];gloValues=["text_default_125_125","","125","125",{},"","","","","","","","",1,"text_image_video_flash",0,1,"","",1];for(var i=0;i<gloNames.length-1;i++){checkGlo("cpro_"+gloNames[i],gloValues[i])}if(undef(typeof cpro_flush)||(cpro_flush<1)||(cpro_flush>4)||!cpro_flush){cpro_flush=4}if(undef(typeof GloCproCn)){GloCproCn=1}else{GloCproCn++}var GloCproCpCn=0;window.GloCproCpCount=window.GloCproCpCount||{};if(cpro_client){if(typeof(GloCproCpCount[cpro_client])=="undefined"){GloCproCpCount[cpro_client]={};GloCproCpCn+=1}if(cpro_channel){if(typeof(GloCproCpCount[cpro_client][cpro_channel])=="undefined"){GloCproCpCount[cpro_client][cpro_channel]=1;GloCproCpCn+=2}}}ins("fv",flashVersion());ins("tn",cpro_template);ins("n",cpro_client);ins("rsi1",cpro_h);ins("rsi0",cpro_w);ins("rad",cpro_rad);insE("rss0",cpro_cbd);insE("rss1",cpro_cbg);insE("rss2",cpro_ctitle);insE("rss3",cpro_cdesc);insE("rss4",cpro_curl);insE("rss5",cpro_clink);insE("rss6",cpro_cflush);ins("rsi5",cpro_flush);ins("ts",cpro_ts);ins("at",getAt());ins("if",checkIframe());insE("word",getLocation());insE("refer",ref());insE("ch",cpro_channel);ins("lmt",Date.parse(doc.lastModified)/1000);ins("csp",scr.width+","+scr.height);ins("ccd",scr.colorDepth);ins("chi",history.length);ins("cja",nav.javaEnabled());ins("cpl",nav.plugins.length);ins("cmi",nav.mimeTypes.length);ins("cce",nav.cookieEnabled);ins("csl",nav.systemLanguage||nav.language);ins("rt",new Date()-st);ins("cad",cpro_cad);insE("aurl",cpro_aurl);insE("rss7",cpro_acolor);insE("cpa",cpro_uap);ins("dt",Math.round((new Date).getTime()/1000));if(!undef(typeof GloCproTn)){ins("pn",GloCproAn_+"|"+GloCproTn)}if(undef(typeof GloCproTn)){GloCproTn=cpro_template}else{GloCproTn+=":"+cpro_template}if(undef(typeof GloCproAn_)){try{GloCproAn_=cpro_161}catch(e){GloCproAn_=0}}else{try{GloCproAn_+=":"+cpro_161}catch(e){}}ins("ev",getEff());ins("jn","1");ins("cn",GloCproCpCn);for(var i=5;i<gloNames.length;i++){window["cpro_"+gloNames[i]]=undefined}return"http://cpro.baidu.com/cpro/ui/uijs.php?"+arr.slice(1)}function undef(v){return v=="undefined"}function checkGlo(name,value){if(undef(typeof window[name])){window[name]=value}}function enc(v){return typeof encodeURIComponent=="function"?encodeURIComponent(v):escape(v)}function ins(n,v){arr=arr.concat("&"+n+"="+v)}function insE(n,v){ins(n,enc(v))}function nav(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}function effVal(k,i){var eff,VarPow_=Math.pow(2,k);try{eff=eval("cpro_"+VarPow_+i)}catch(e){eff=0}window["cpro_"+VarPow_+i]=0;if(eff<0||eff>=VarPow_){eff=0}return eff}function getLocation(){return(noFrame()||inIfr)?location.href:ref()}function ref(){return doc.referrer}function noFrame(){return self===top}function isCross(){try{top.location.toString()}catch(e){return true}return false}function getAt(){if(cpro_at!=""){var atArr=cpro_at.split("_"),at=0;for(var i=0;i<atArr.length;i++){switch(atArr[i]){case"text":at|=1;break;case"image":case"flash":at|=2;at|=4;break;case"video":at|=8;break}}return at}else{return cpro_at}}function getEff(){var effArr={"4":2,"3":3,"2":4,"1":7},eff=0,isMv=0,plu=0;for(var key in effArr){for(var i=effArr[key];i>=1;i--){var v=effVal(key,i);if(isMv){eff=eff<<key}else{isMv=1;plu=(v>=8)?2147483648:0;v%=8}eff+=v}}return eff+plu}function checkIframe(){if(noFrame()){return 0}var win=window,body=doc.body,w=1,h=1,cif=1;var el=doc.documentElement;if(isCross()){cif+=2}if(win.innerHeight){w=win.innerWidth;h=win.innerHeight}else{if(el&&el.clientHeight){w=el.clientWidth;h=el.clientHeight}else{if(body){w=body.clientWidth;h=body.clientHeight}}}if(h<10||w<40){cif+=4}else{if(h<cpro_h||w<cpro_w){cif+=8}}if(h>=2*cpro_h||w>=2*cpro_w){inIfr=true}return cif}function adsNum(){var t=cpro_template.split("_")[0];if(!cpro_ads_c[t]){cpro_ads_c[t]=1}else{cpro_ads_c[t]++}return cpro_ads_c[t]>3}function flashVersion(){var f="ShockwaveFlash.ShockwaveFlash";var n=navigator;if(n.plugins&&n.mimeTypes.length){var fla=n.plugins["Shockwave Flash"];if(fla&&fla.description){return fla.description.replace(/[^\d\.]/g,"").split(".")[0]}}else{if(nav("ie")){var A=ActiveXObject;try{var fla=new A(f+".7")}catch(e){try{var fla=new A(f+".6");fla.AllowScriptAccess="always";return 6}catch(e){}try{fla=new A(f)}catch(e){}}if(fla!=null){try{return fla.GetVariable("$version").split(" ")[1].split(",")[0]}catch(e){}}}}return 0}})();