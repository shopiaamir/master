// Menu Dropdown
$("#cssmenu ul ul li:odd").addClass("odd"),$("#cssmenu ul ul li:even").addClass("even"),$("#cssmenu > ul > li > a").click(function(){$("#cssmenu li").removeClass("active"),$(this).closest("li").addClass("active");var s=$(this).next();return s.is("ul")&&s.is(":visible")&&($(this).closest("li").removeClass("active"),s.slideUp("normal")),s.is("ul")&&!s.is(":visible")&&($("#cssmenu ul ul:visible").slideUp("normal"),s.slideDown("normal")),0==$(this).closest("li").find("ul").children().length});
// Menu Slide
$(document).ready( function() {  
    $('.menu').click(function () {
    $('#css-menu').css({right:'0'});
});
    $('.close-menu').click(function() {
    $('#css-menu').css({right:'-340px'});
});
 });
//Sticky
$(function(){if($("#HTML1").length){var o=$("#HTML1"),t=$("#HTML1").offset().top,i=$("#HTML1").height();$(window).scroll(function(){var s=$("#banner728-bottom").offset().top-i-20,n=$(window).scrollTop(),f=$(window).width();if(n>t&&f>759?o.css({position:"fixed",top:5}):o.css("position","static"),n>s){var c=s-n;o.css({top:c})}})}});
//Back Top
function scrollToTop(){verticalOffset="undefined"!=typeof verticalOffset?verticalOffset:0,element=$("body"),offset=element.offset(),offsetTop=offset.top,$("html, body").animate({scrollTop:offsetTop},600,"linear")}$(function(){$(document).on("scroll",function(){$(window).scrollTop()>100?$(".smoothscroll-top").addClass("show"):$(".smoothscroll-top").removeClass("show")}),$(".smoothscroll-top").on("click",scrollToTop)});
//Pre Auto Selection
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,kbd,blockquote"),i=0;i<pres.length;i++)pres[i].addEventListener("click",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
