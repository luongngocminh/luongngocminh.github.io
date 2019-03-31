$(function () {
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        // easing: 'linear', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });
})
$(document).ready(()=> {



    $(window).scroll(() => {
        if ($(document).scrollTop() > 100) {
            $('.navbar').removeClass('top');
            $('.active').removeClass('top');
        } else {
            $('.navbar').addClass('top');
            $('.active').addClass('top');
        }
    })
})

// $("section").each(()=>{
//     var active_nav = $(this).attr(id);
//     if ($(this).visible()) {
//         $('#nav-' + active_nav).addClass('active');
//     } else {
//         $('#nav-' + active_nav).removeClass('active');
//     }
// })


// if ($('#main').visible(true)) {
//     $('.navbar').animate({
//         opacity: 0
//     }, 1000);
// } else {
//     $('.navbar').animate({
//         opacity: 1
//     }, 1000)
// }

// $("#nav-*").each(()=>{
//     $(this).click(()=>{
//         $("#nav-").removeClass('active');
//         $(this).addClass('active');
//     })
// })