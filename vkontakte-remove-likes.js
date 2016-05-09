// ==UserScript==
// @name        vkontakte-remove-likes
// @namespace   vk
// @include     https://vk.com/*
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function() {
  var classesToRemove = ['post_like', 'like_wrap'];
  classesToRemove.forEach(function(cl) {
    var paras = document.getElementsByClassName(cl);

    while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
  });
  
  var idsToRemove = ['pv_like_wrap'];
  idsToRemove.forEach(function(i) {
    var paras = document.getElementById(i);
    paras.parentNode.removeChild(paras);
  });
}, 1000);