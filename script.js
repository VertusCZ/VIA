
/***mobile navigation***/
$('.click').click(function ()
{
    $('.move').toggleClass(".addLeftMargin");
    $('.hide').toggleClass(".addBonusMargin");
    $('.mobile-nav-back').toggleClass(".addInlineBlock");
});

(function($){
    $(function(){
        $(".click").click(function(){
            $(".jq--nav-icon").fadeToggle(0);
            $(".nav-background").fadeToggle(0);
            $(".mobile-nav-back").fadeToggle(0);
            $(".nav-logo").fadeToggle(0);


        });
        $(".mobile-nav-back").click(function(){
            $(".jq--nav-icon").fadeToggle(0);
            $(".nav-background").fadeToggle(0);
            $(".mobile-nav-back").fadeToggle(0);
            $(".nav-logo").fadeToggle(0);
        });
    });
})(jQuery);

