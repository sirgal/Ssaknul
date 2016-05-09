// ==UserScript==
// @name        twitter-video-links
// @namespace   twitter
// @include     https://twitter.com/*
// @version     1
// @grant       none
// ==/UserScript==

setInterval(function() {
  $("iframe").each(function() {
    var frame = $(this);
    
    if(frame.data('addedlink')) return;
    
    var content = frame.contents(); 

    var src = content.find('video').attr('src');
    if(src) {
      frame.closest('.tweet').append('<div>' + src + '</div>');
      frame.data('addedlink', true); 
    }
  });
}, 1000);