// ==UserScript==
// @name        facebook-remove-likes
// @namespace   fb
// @include     https://www.facebook.com/
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function() {
  var classesToRemove = ['UFICommentLikeButton', 'UFILikeSentence'];
  
  classesToRemove.forEach(function(cl) {
    var likes = document.getElementsByClassName(cl);

    while(likes[0]) {
      likes[0].parentNode.removeChild(likes[0]);
    }
  });
}, 1000);