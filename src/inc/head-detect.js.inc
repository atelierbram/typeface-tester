var root=document.documentElement;function addLoadEvent(e){var o=window.onload;"function"!=typeof window.onload?window.onload=e:window.onload=function(){o(),e()}}function loadImg(){for(var e=document.querySelectorAll("[data-src]"),o=0;o<e.length;o++)e[o].getAttribute("data-src")&&e[o].setAttribute("src",e[o].getAttribute("data-src"))}!function(){"use strict";var e;root.className=root.className.replace(/\bno-js\b/g,"")+" js ","querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach&&(root.className=root.className.replace(/\bcore\b/g,"")+" enhanced "),""!=(e=(e=document.body||document.documentElement).style).webkitFlexWrap&&""!=e.msFlexWrap&&""!=e.flexWrap||(root.className=root.className.replace(/\bno-flexbox\b/g,"")+" flexbox ")}(),addLoadEvent(function(){root.className=root.className.replace(/\bis-loading\b/g,"")+" is-loaded "}),addLoadEvent(loadImg),function(e,o){"undefined"!=typeof module?module.exports=o():"function"==typeof define&&"object"==typeof define.amd?define(o):this.domready=o()}(0,function(){var e,o=[],t=document,a=t.documentElement.doScroll,n="DOMContentLoaded",r=(a?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(n,e=function(){for(t.removeEventListener(n,e),r=1;e=o.shift();)e()}),function(e){r?setTimeout(e,0):o.push(e)}}),domready(function(){root.className=root.className.replace(/\bdombuilding\b/g,"")+" domready "}),root.setAttribute("data-useragent",navigator.userAgent),root.setAttribute("data-platform",navigator.platform),root.className+="ontouchstart"in window||"onmsgesturechange"in window?" touch":"",-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&(root.className+=" is-safari");