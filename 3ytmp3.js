$(document).ready(function(){function plus($f,$r,$s){return $s.replace(new RegExp("("+(typeof($f)==="string"?$f.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&"):$f.map(function(i){return i.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}).join("|"))+")","g"),typeof($r)==="string"?$r:typeof($f)==="string"?$r[0]:function(i){return $r[$f.indexOf(i)]});}var ss=[2,3,4,5,6,7,8,9,10];var dd=getRandomInt(9);function getRandomInt(max){return Math.floor(Math.random()*Math.floor(max));}sv=!ss[dd]?'1':ss[dd];var sb='id';var a=!1,o=!1,s="mp3",r=!1,e=!1,c=[checking,loading,converting],i=["46/121/109/99/100/110/46/119/101/98/115/105/116/101","120/110/120","111/100/103","97/100/111","106/108/100","116/122/103","117/117/106","98/107/108","102/110/119","101/101/113","101/98/114","97/115/120","103/104/110","101/97/108","104/114/104","113/117/113","122/107/105","116/102/102","97/111/108","101/101/117","107/107/114","121/117/105","121/121/100","104/100/105","100/100/98","105/105/114","105/104/105","104/101/104","120/97/97","110/105/109","111/109/112","101/101/122","114/112/120","99/120/113","116/121/112","97/109/118","114/108/118"],z="100/108",h="121/116/109/112/51/46/112/108/117/115",t=$("#theme").attr("href");switch(t){case"d":t="l";break;case"l":t="d";break;default:t="l"}for(var n=0;n<$("script").length;n++)if(r=/ytmp3\.js\?[a-z]{1}\=[a-zA-Z0-9\-\_]{16,40}/.exec($("script")[n].src)){r=function(t){var e=0,r=0,s="";for(;r<t.length;r++){if(e=t.charCodeAt(r),p("54/52","n")<e&&e<p("57/49","n"))e=e==p("54/53","n")?p("57/48","n"):e-1;else if(p("57/54","n")<e&&e<p("49/50/51","n"))e=e==p("49/50/50","n")?p("57/55","n"):e+1;else if(p("52/55","n")<e&&e<p("53/51","n"))switch(e){case p("52/56","n"):e=p("53/55","n");break;case p("52/57","n"):e=p("53/54","n");break;case p("53/48","n"):e=p("53/53","n");break;case p("53/49","n"):e=p("53/52","n");break;case p("53/50","n"):e=p("53/51","n")}else p("53/50","n")<e&&e<p("53/56","n")?e=Math.round(p(e.toString())/2).toString().charCodeAt(0):e==p("52/53","n")&&(e=p("57/53","n"));s+=String.fromCharCode(e)}return s}(r.toString().slice(11));break}function p(t,e){if(-1<t.indexOf("/")){for(var t=t.split("/"),r=0,s="";r<t.length;r++)s+=String.fromCharCode(t[r]);return"s"==e?s:parseInt(s)}return"s"==e?String.fromCharCode(t):parseInt(String.fromCharCode(t))}var d=document.createElement("link");d.setAttribute("rel","stylesheet"),d.setAttribute("href","/assets/css/font-awesome-4.7.0/css/font-awesome.min.css"),$("head").append(d);var u=document.createElement("script");function l(t,e,r){var msg=plus(["code1","code2","js_url"],[t,e,p(h,"s")],error_msg);$("#converter_wrapper").before(msg).remove(),$("#error").show(),$("#error").after('<div id="pa"><iframe src="https://'+p(h,"s")+'" width="" height="" scrolling="no"></iframe></div>');var s=!1;1==t?4==e&&(s=!0):2==t&&(1!=e&&5!=e&&6!=e&&7!=e||(s=!0)),s&&$.ajax({url:"/e.php",async:!1,cache:!1,data:{f:t,e:e,v:r},type:"POST"})}function f(t,e,r,s,n){a=!1,$("#progress").hide(),-1<s.indexOf("h")?$("#buttons a:nth-child(1)").attr("href","https://"+p(h,"s")+"/p"):$("#buttons a:nth-child(1)").attr("href","https://"+p(z,"s")+p(i[0],"s")+"/"+s+"/"+t),"undefined"!=typeof Dropbox&&Dropbox.isBrowserSupported()&&$("#buttons a:nth-child(2)").css("display","inline-block"),$("#buttons").show(),$("#converter_wrapper").after('<div id="pa"><iframe src="https://'+p(h,"s")+'/pa" width="" height="" scrolling="no"></iframe></div>')}function b(t,e){r?(a=!0,$("form").hide(),$("#progress").show(),$.ajax({url:"https://d"+(sv-1)+p(i[0],"s")+"/check.php",data:{v:t,f:e,k:r},dataType:"jsonp",tryCount:0,retryLimit:5000,success:function(r){if($.each(r,function(t,e){r[t]="hash"==t||"title"==t||"user"==t?e:parseInt(e)}),0<r.error)return l(1,r.error,t),!1;0<r.title.length?$("#title").html(r.title):$("#title").html("no title"),0<r.ce?f(t,0,r.sid,r.hash,r.user):function t(e,s,n,a){$.ajax({url:"https://d"+(sv-1)+p(i[0],"s")+"/progress.php",data:{id:n},dataType:"jsonp",tryCount:0,retryLimit:5000,success:function(r){if($.each(r,function(t,e){r[t]="hash"==t?e:parseInt(e)}),0<r.error)return l(2,r.error,e),!1;switch(r.progress){case 0:case 1:case 2:$("#progress span").html(c[r.progress]);break;case 3:o=!0,f(e,0,r.sid,n,a)}o||window.setTimeout(function(){t(e,s,n,a)},2e2)},error:function(e,r,o){if("timeout"==r)return this.tryCount++,this.tryCount<=this.retryLimit?void $.ajax(this):void 0;if(500==e.status);else if((this.tryCount++,this.tryCount<=this.retryLimit))return void $.ajax(this);}})}(t,e,r.hash,r.user)}})):l(1,0,t)}u.setAttribute("src","https://www.dropbox.com/static/api/2/dropins.js"),u.setAttribute("id","dropboxjs"),u.setAttribute("data-app-key","KEY"),u.setAttribute("async","async"),$("body").append(u),$.ajax({url:"/p.php",data:{c:1},dataType:"jsonp",success:function(t){t.p&&(e=!0)}}),$("#theme").click(function(){switch(t){case"d":t="l";break;case"l":t="d"}switch($("link").attr("href","/css/a/"+t+".css?_="+(new Date).getTime()),$("#logo").attr("src","/images/"+t+".png"),t){case"d":$(this).attr("href","l").text("Theme [Light]");break;case"l":$(this).attr("href","d").text("Theme [Dark]")}return $.ajax({url:"/t.php",async:!1,cache:!1,data:{t:t},type:"POST"}),!1}),$("#formats a").click(function(){if(!a)switch($(this).attr("id")){case"mp3":switch(s="mp3",t){case"d":$("#mp3").css("packground-color","#243961"),$("#mp4").css("packground-color","#121d31");break;case"l":$("#mp3").css("packground-color","#007cbe"),$("#mp4").css("packground-color","#0087cf")}break;case"mp4":switch(s="mp4",t){case"d":$("#mp4").css("packground-color","#243961"),$("#mp3").css("packground-color","#121d31");break;case"l":$("#mp4").css("packground-color","#007cbe"),$("#mp3").css("packground-color","#0087cf")}}return!1}),$("#buttons a").click(function(){switch($(this).text()){case dload:return e&&(window.open("https://"+p(h,"s")+"/p"),e=!1),document.location.href=$(this).attr("href"),!1;case"Dropbox":var t={success:function(){$("#buttons a:nth-child(2)").text("Saved")},progress:function(){$("#buttons a:nth-child(2)").text("Uploading").append(' <i class="fa fa-cog fa-spin">')},cancel:function(){$("#buttons a:nth-child(2)").text("Dropbox")},error:function(t){$("#buttons a:nth-child(2)").text("Error")}};return Dropbox.save($("#buttons a:nth-child(1)").attr("href"),$.trim($("#title").html())+".mp3",t),!1;default:return!0}}),$("form").submit(function(){if(!(v=(-1<(t=$("#input").val()).indexOf("youtube.com/shorts/")?e=!!(e=/\/shorts\/[a-zA-Z0-9\-\_]{11}/.exec(t))&&e.toString().substr(8):-1<t.indexOf("youtube.com/")?e=!!(e=/v\=[a-zA-Z0-9\-\_]{11}/.exec(t))&&e.toString().substr(2):-1<t.indexOf("youtu.be/")&&(e=!!(e=/\/[a-zA-Z0-9\-\_]{11}/.exec(t))&&e.toString().substr(1)),e)))return l(0,0,!1),!1;var t,e;try{var r=document.createElement("script");r.setAttribute("src","URL"),r.setAttribute("async","async"),$("body3").append(r)}catch(t){console.log(t)}return b(v,s),!1})});
