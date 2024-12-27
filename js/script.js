window.onload = function () {
    var swiper = new Swiper('.wrap', {
        direction: "horizontal",
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 0,
        slidesPerView: "auto",
        grabCursor: true,
        centeredSlides: true,
        speed: 1000, 
        effect: "coverflow",
        coverflowEffect: {
            rotate: 50,
            stretch: -100,
            depth: 400,
            modifier: 1,
            slideShadows: false,
        },
    });

    var slider_dd = document.getElementById("div-dd");
    var slider_skul = document.getElementById("div-skul");
    var slider_dg = document.getElementById("div-dg");
    var slider_lyra = document.getElementById("div-lyra");
    var slider_vision = document.getElementById("div-vision");

    slider_dd.onclick = function () {
        const slides = swiper.slides;
        let targetIndex = Array.from(slides).findIndex(slide => slide.id === "div-dd");

        if (targetIndex !== -1) {
            const realIndex = swiper.slides[targetIndex].getAttribute('data-swiper-slide-index');
            swiper.setTransition(300); 
            swiper.slideToLoop(realIndex);
            var modal = document.getElementById("modal_deathdoor");
            modal.style.display = 'block';
            setTimeout(() => {
                swiper.setTransition(swiper.params.speed);
            }, 300);
        }
    };

    slider_skul.onclick = function () {
        const slides = swiper.slides;
        let targetIndex = Array.from(slides).findIndex(slide => slide.id === "div-skul");

        if (targetIndex !== -1) {
            const realIndex = swiper.slides[targetIndex].getAttribute('data-swiper-slide-index');
            swiper.setTransition(300);
            swiper.slideToLoop(realIndex);
            var modal = document.getElementById("modal_skul");
            modal.style.display = 'block';
            setTimeout(() => {
                swiper.setTransition(swiper.params.speed);
            }, 300);
        }
    };

    slider_dg.onclick = function () {
        const slides = swiper.slides;
        let targetIndex = Array.from(slides).findIndex(slide => slide.id === "div-dg");

        if (targetIndex !== -1) {
            const realIndex = swiper.slides[targetIndex].getAttribute('data-swiper-slide-index');
            swiper.setTransition(300);
            swiper.slideToLoop(realIndex);
            var modal = document.getElementById("modal_dg");
            modal.style.display = 'block';
            setTimeout(() => {
                swiper.setTransition(swiper.params.speed);
            }, 300);
        }
    };

    slider_lyra.onclick = function () {
        const slides = swiper.slides;
        let targetIndex = Array.from(slides).findIndex(slide => slide.id === "div-lyra");

        if (targetIndex !== -1) {
            const realIndex = swiper.slides[targetIndex].getAttribute('data-swiper-slide-index');
            swiper.setTransition(300); 
            swiper.slideToLoop(realIndex);
            var modal = document.getElementById("modal_lyra");
            modal.style.display = 'block';

            setTimeout(() => {
                swiper.setTransition(swiper.params.speed);
            }, 300);
        }
    };

    slider_vision.onclick = function () {
        const slides = swiper.slides;
        let targetIndex = Array.from(slides).findIndex(slide => slide.id === "div-vision");

        if (targetIndex !== -1) {
            const realIndex = swiper.slides[targetIndex].getAttribute('data-swiper-slide-index');
            swiper.setTransition(300); 
            swiper.slideToLoop(realIndex);
            var modal = document.getElementById("modal_vision");
            modal.style.display = 'block';

            setTimeout(() => {
                swiper.setTransition(swiper.params.speed);
            }, 300);
        }
    };
    
    var closeButton = document.getElementById("close_btn_dd");
    closeButton.onclick = function () {
        var modal_dd = document.getElementById("modal_deathdoor");
        modal_dd.style.display = 'none';

        var iframe_dd = document.getElementById("if_dd");
        const src = iframe_dd.src;
        iframe_dd.src = "";
        iframe_dd.src = src;
    };

    var closeButton = document.getElementById("close_btn_skul");
    closeButton.onclick = function () {
        var modal_skul = document.getElementById("modal_skul");
        modal_skul.style.display = 'none';

        var iframe_skul = document.getElementById("if_skul");
        const src = iframe_skul.src;
        iframe_skul.src = "";
        iframe_skul.src = src;
    };

    var closeButton = document.getElementById("close_btn_dg");
    closeButton.onclick = function () {
        var modal_dg = document.getElementById("modal_dg");
        modal_dg.style.display = 'none';

        var iframe_dg = document.getElementById("if_dg");
        const src = iframe_dg.src;
        iframe_dg.src = "";
        iframe_dg.src = src;
    };

    var closeButton = document.getElementById("close_btn_lyra");
    closeButton.onclick = function () {
        var modal_lyra = document.getElementById("modal_lyra");
        modal_lyra.style.display = 'none';
    };

    var closeButton = document.getElementById("close_btn_vision");
    closeButton.onclick = function () {
        var modal_vision = document.getElementById("modal_vision");
        modal_vision.style.display = 'none';
    };
};
