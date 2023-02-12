function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <img src="${d.attachment}" alt="${d.alt}" style="width:auto; height:16rem">
        ` 
    })

    $(element).slick({
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 4,
        adaptiveHeight: true,
        speed:1000,
        dots:true,
        autoplay:true,
        autoplaySpeed:1200,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 3,
                    dots:true,
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                    dots:true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 1,
                    dots:true,
                }
            }
        ]
    });
}

carousel(".carousel-slick", animals);
