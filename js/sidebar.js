// build time:Wed Oct 30 2019 22:43:49 GMT+0800 (中国标准时间)
$(function(){$(".toggle-sidebar-info > span").on("click",function(){var i=$(this).attr("data-toggle");$(this).attr("data-toggle",$(this).text());$(this).text(i);t()});$("#toggle-sidebar").on("click",function(){if(!isMobile()&&$("#sidebar").is(":visible")){var t=$(this).hasClass("on");t?$(this).removeClass("on"):$(this).addClass("on");if(t){$("#page-header").removeClass("open-sidebar");$("body").velocity("stop").velocity({paddingLeft:"0px"},{duration:200});$("#sidebar").velocity("stop").velocity({translateX:"0px"},{duration:200});$("#toggle-sidebar").velocity("stop").velocity({rotateZ:"0deg",color:"#1F2D3D"},{duration:200})}else{$("#page-header").addClass("open-sidebar");$("body").velocity("stop").velocity({paddingLeft:"300px"},{duration:200});$("#sidebar").velocity("stop").velocity({translateX:"300px"},{duration:200});$("#toggle-sidebar").velocity("stop").velocity({rotateZ:"180deg",color:"#99a9bf"},{duration:200})}}});function t(){if($(".author-info").is(":visible")){$(".author-info").velocity("stop").velocity("transition.slideLeftOut",{duration:300,complete:function(){$(".sidebar-toc").velocity("stop").velocity("transition.slideRightIn",{duration:500})}})}else{$(".sidebar-toc").velocity("stop").velocity("transition.slideRightOut",{duration:300,complete:function(){$(".author-info").velocity("stop").velocity("transition.slideLeftIn",{duration:500})}})}}});
//rebuild by neat 