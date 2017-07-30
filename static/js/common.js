$(function() {
    //导航
    $('.nav li').hover(function() {
        $('span', this).stop().css('height', '2px');
        $('span', this).animate({
            left: '0',
            width: '100%',
            right: '0'
        }, 200);
    }, function() {
        $('span', this).stop().animate({
            left: '50%',
            width: '0'
        }, 200);
    });

    $(".lnav dl").each(function() {
        $(this).find("dd:last-child a").css("border-bottom", "none");
    })
    $(".zk").click(function() {
        $(this).next(".yhs").toggle()
    })

    $.ajax({
        url: '//119.90.53.154:45321/user/register',
        type: 'post',
        data: {},
        success: function(e) {

        }
    })


})