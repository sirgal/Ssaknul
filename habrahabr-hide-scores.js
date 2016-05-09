// ==UserScript==
// @name        habrahabr-hide-scores
// @namespace   habrahabr
// @description hides scores (karma and comments) on habrahabr
// @include     https://habrahabr.ru/*
// @include     https://geektimes.ru/*
// @include     https://megamozg.ru/*
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function() {
  var scores = Array.from(document.getElementsByClassName('voting-wjt__counter-score'));

  scores.forEach(function(x) {
    x.innerHTML='X'
  });
}, 1000);