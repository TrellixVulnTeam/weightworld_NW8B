$(document).ready((function(){$(document).keyup((function(e){27==e.keyCode&&$(".search-close").on("click",(function(){$("#searchbox").removeClass("show"),$("#searchbox").addClass("hide")}))})),$(".search-close").on("click",(function(){$("#searchbox").removeClass("show"),$("#searchbox").addClass("hide")}));var e=$(".navbar").outerHeight();if($("#searchbox").css("height",e+"px"),$(window).resize((function(){var e=$(".navbar").outerHeight();$("#searchbox").css("height",e+"px")})),$("body").click((function(e){$(e.target).parents("#countryCombo").length||"countryCombo"==e.target.id?($(".countyList").slideToggle(),$(".sel-lang").toggleClass("open")):($(".countyList").slideUp(),$(".sel-lang").removeClass("open"))})),$("#all_county_list li").click((function(){"re_en"!=$(this).attr("id")?$("#re_en").css("display","block"):$("#re_en").css("display","none");var e=$(this).html();""!=e&&$("#countryCombo").html(e)})),$(window).width()<767){var i=".footer-middle_menuWrap";$(i).click((function(e){$(this).hasClass("active")?($(i).removeClass("active"),$(this).removeClass("active")):($(i).removeClass("active"),$(this).addClass("active"))}));var s=$(".footer-middle_socialList");$(s).remove(),$(".mobilesocialMedia").html(s)}$(".cartIcon").click((function(){$(".cart-slide").animate({width:"toggle"})})),$(".cart-slide-cross").click((function(){$(".cart-slide").animate({width:"toggle"})})),$(window).resize((function(){$(window).width()>767&&$((function(){var e=document.getElementById("best-seller-leaf"),i=document.getElementById("subscribe-wrap");new Parallax(e,{relativeInput:!0}),new Parallax(i,{relativeInput:!0})}))})),$(window).resize((function(){$(window).width()<768?$(".footer-top-mobi_slider").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1}):$(".footer-top-mobi_slider").slick("unslick")})),$(".bestSellerSliderContainer").length&&$(".bestSellerSlider").each((function(){if($(this).find(".bestSellerSliderInnerContainer").length>2){var e=$(this).attr("id"),i=$("#"+e+" .bestSellerSliderContainer").not(".slick-initialized");$(this);i.on("init",(function(e,i){$(".slick-dots li").each((function(e,i){$(this).find("button").addClass("heading"+e)})),i.$slides.each((function(e,i){var s=$(this).find("h2 .bestSellerTag").text();$(".heading"+e).text(s)}))})),i.slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,focusOnSelect:!0,dots:!0,appendDots:$(".customSlickDots")}),colorSettings={section:["#84ac89","#beb068","#b068be","#6876be"]},changeColors=function(e){$(".bestSeller").css({backgroundColor:colorSettings.section[e]})},changeColors(0),$(".bestSellerSliderContainer").on("beforeChange",(function(e,i,s,o){changeColors(o)}))}})),$(".bSliderContainer").slick({variableWidth:!0,infinite:!0,slidesToScroll:1,autoplay:!0,arrows:!1,focusOnSelect:!0,dots:!0});var o=$(".topBelt").outerHeight()+$("nav.navbar").outerHeight();$(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+o+"px)"),$(window).resize((function(){var e=$(".topBelt").outerHeight()+$("nav.navbar").outerHeight();$(".bSlider .bSliderImageWrapper").css("min-height","calc(100vh - "+e+"px)")})),$(".carousel").slick({slidesToShow:4,slidesToScroll:1,arrows:!0,infinite:!1,responsive:[{breakpoint:1370,settings:{arrows:!1}},{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".rangeSliderCarousel").slick({slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!0,responsive:[{breakpoint:1370,settings:{arrows:!1}},{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:2,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".customerImageSliderCarousel").slick({variableWidth:!0,slidesToShow:7,slidesToScroll:1,autoplay:!0,centerMode:!0,autoplaySpeed:0,cssEase:"linear",speed:1e4,infinite:!0,arrows:!1,responsive:[{breakpoint:1023,settings:{slidesToShow:2,slidesToScroll:1,arrows:!1}},{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]}),$(".customerReviewSlider").slick({variableWidth:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,arrows:!1,responsive:[{breakpoint:767,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]});var t=$(".customerReviewLeftSection").outerHeight();if($(".customerReview").css("height",t+"px"),$(window).resize((function(){var e=$(".customerReviewLeftSection").outerHeight();$(".customerReview").css("height",e+"px")})),$(window).width()<1023){var l=t/2;$(".suppYouCanTrust").css("margin-top",l+"px")}$(window).resize((function(){if($(window).width()<1023){var e=t/2;$(".suppYouCanTrust").css("margin-top",e+"px")}})),$(".latestArticalCarousel").slick({variableWidth:!1,slidesToShow:4,slidesToScroll:1,infinite:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{variableWidth:!0,slidesToShow:2,slidesToScroll:1,infinite:!0,arrows:!1}},{breakpoint:768,settings:{variableWidth:!0,slidesToShow:1,slidesToScroll:1,infinite:!0,arrows:!1}}]}),$(".sliderImageTitle").sameHeight(),$(".suppMobiSlider").slick({variableWidth:!1,slidesToShow:6,slidesToScroll:3,infinite:!1,arrows:!1,responsive:[{breakpoint:1024,settings:{variableWidth:!1,slidesToShow:3,slidesToScroll:1,arrows:!1,infinite:!1}}]}),$(".best-seller-mobile-slider").slick({variableWidth:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1}),$(window).resize((function(){$(window).width()<768?$(".best-seller-mobile-slider").slick({variableWidth:!0,slidesToShow:1,slidesToScroll:1,infinite:!1,arrows:!1}):$(".best-seller-mobile-slider").slick("unslick")}));let r=document.getElementById("searchbox"),n=document.getElementById("search-input"),a=document.getElementById("searchbox-close"),c=document.getElementById("searchIcon"),d=()=>{"show"===r.className?(r.className="hide",c.className="",n.value="",n.blur()):(r.className="show",c.className="active",n.focus())};c.addEventListener("click",d),a.addEventListener("click",d),n.addEventListener("keyup",()=>{13==event.keyCode&&d()})}));