GJ.add("js/util/uuid/uuid.js",["js/util/uuid/unvalid_uuids.js"],function(g,q,c){if(GJ._uuid){c.exports=GJ._uuid;return}var l="ganji_uuid",o=GJ.getCookie("gj_inner_acc"),f=365*24*60*60,k="",s=document,p=[],j={},m={},e=true,n=false,o=o?o.split("-"):null,d=function(z){if(z&&GJ.isString(z)){if(o){if(o.length!==2||z.length<23||z.indexOf("-")===-1||z.substr(z.length-1)!==o[0]||GJ.unvalidUuids[z.split("-")[0]]){return false}var w=z.split("-"),y=w[0],v=w[1].substr(0,w[1].length-1);var x=y.substr(y.length-8);if(parseInt(o[1])+parseInt(x)===parseInt(v)){return true}}else{if(z.length>20&&z.indexOf("-")===-1){return true}}}return false},h=function(){if(d(k)&&GJ.isArray(p)){GJ.each(p,function(t){if(GJ.isFunction(t)){t(k)}})}},b=function(){var t=+new Date(),v=GJ.rand(10000000,99999999),u=function(A){var y="",z,x=A.length;while(x>0){x--;y+=A.substr(x,1)}return y},w=u(t+""+GJ.rand(1,9));w=(w*1+v)+""+v;if(o){if(o.length===2){w=w+"-"+(o[1]*1+v)+""+o[0]}}return w},i=function(){GJ.use("flash",function(){if(!GJ.checkFlashPlayer("9.0.0")){j.swf=true;return}var u=GJ.guid(),t=null;$("body").append('<div style="position:absolute; top:100px; left:200px; width:1px; height:1px; z-index:1000000;"><div id="'+u+'"></div></div>');new GJ.SwfLoader({flash_url:GJ.getFormatUrl("swf/cache.swf",GJ.config.defaultServer),flash_player_version:"9.0.0",place_holder_id:u,width:1,height:1,debug:false,prevent_swf_caching:true,allow_script_access:"always",onPreload:function(){t=GJ.later(function(){j.swf=true},1000*10)},onFlashReady:function(){t.cancel();var v=this,w=n?null:v.callFlash("get",["uuid"]);if(d(w)&&!k){k=w}else{GJ.waiter(function(){return !!k},function(){v.callFlash("set",["uuid",k])})}j.swf=true}})})},r=function(){GJ.use("js/util/window_name/window_name.js",function(){tmp_uuid=n?null:GJ.windowName.get(l);if(d(tmp_uuid)&&!k){k=tmp_uuid}else{GJ.waiter(function(){return !!k},function(){GJ.windowName.set(l,k)})}j.winName=true})},a=function(){var t=GJ.later(function(){j.storage=true},3000);GJ.use("js/util/storage/storage2.js",function(v){clearTimeout(t);var w=new v();var u=n?null:w.get(l);if(d(u)&&!k){k=u}else{GJ.waiter(function(){return !!k},function(){w.set(l,k)})}j.storage=true})};GJ._uuid=function(t){k=GJ.getCookie(l);if(k){if(d(k)){if(GJ.isFunction(t)){t(k)}return k}else{n=true}}if(GJ.isFunction(t)){p.push(t)}if(!e){return}e=false;GJ.use("jquery",function(){k=null;r();a();i();GJ.waiter(function(){return !!(j.swf&&j.storage&&j.winName)},function(){if(!k){k=b()}});GJ.waiter(function(){return !!k},function(){GJ.setCookie(l,k,f);h()})});return false};c.exports=GJ._uuid;if(!GJ.uuid){GJ.uuid=GJ._uuid}if(!GJ.getCookie("ganji_uuid")){c.pause();GJ._uuid(function(t){c.resume()})}});