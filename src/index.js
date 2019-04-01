$(function () {
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: 0 // offste (in px) for fixed top navigation
    });
})


$(document).ready(()=> {

    const viewportWidth = $(window).width();
    const slides = $('.slides');
    const cardContainer = $('.card-container');
    const nextBtn = $('.slide-btn--right');
    const prevBtn = $('.slide-btn--left');
    const dotsNav = $('.slide-nav');
    const dots = Array.from(dotsNav.children())

    // Make navigation menu transparent when top
    $(window).scroll(() => {
        if ($(document).scrollTop() > 100) {
            $('.navbar').removeClass('top');
            $('.active').removeClass('top');
        } else {
            $('.navbar').addClass('top');
            $('.active').addClass('top');
        }
    })


    //---------------------------Slide back and forwd btn--------------------
    const setSlidePositon = (index, item) => {
        $(item).css('left',  viewportWidth*index + 'px');
    }
    cardContainer.each(setSlidePositon);


    const moveToSlide = (currentSlide, targetSlide) => {
        slides.css('transform', 'translateX(-'+targetSlide.css('left')+')');
        currentSlide.removeClass('current-slide');
        targetSlide.addClass('current-slide');

    }

    const updateDots = (currentDot, targetDot) => {
        currentDot.removeClass('current-slide');
        targetDot.addClass('current-slide');
    }

    //Next button
    $('.slide-btn--right').click(() => {
        const currentSlide = slides.find(".current-slide");
        const nextSlide = currentSlide.next() ;
        const currentDot = dotsNav.find(".current-slide");
        const nextDot = currentDot.next()
        const targetIndex = nextSlide.index();

        moveToSlide(currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrow(targetIndex);
    });
    //Back button
    $('.slide-btn--left').click(() => {
        const currentSlide = slides.find(".current-slide");
        const prevSlide = currentSlide.prev() ;
        const currentDot = dotsNav.find(".current-slide");
        const prevDot = currentDot.prev()
        const targetIndex = prevSlide.index();

        moveToSlide(currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrow(targetIndex);

    })
    //----------------------------------------------------------
    //Click the dots to move between slides

    dotsNav.click( e => {
        const targetDot = e.target.closest('button');

        if(!targetDot) return;
        const currentSlide = slides.find(".current-slide");
        const currentDot = dotsNav.find(".current-slide");
        const targetIndex = dots.findIndex(dot => dot === targetDot)
        
        
        const targetSlide = $(cardContainer[targetIndex]);

        moveToSlide(currentSlide, targetSlide);
        updateDots(currentDot, $(targetDot))
        hideShowArrow(targetIndex);
    })
    
    //When its the first card or last card
    const hideShowArrow = (targetIndex) => {
        if (targetIndex === 0) {
            prevBtn.addClass('hidden');
            nextBtn.removeClass('hidden');
        } else if (targetIndex === slides[0].childElementCount - 1) {
            prevBtn.removeClass('hidden');
            nextBtn.addClass('hidden');
        } else {
            prevBtn.removeClass('hidden');
            nextBtn.removeClass('hidden');
        }
    }
    

})

