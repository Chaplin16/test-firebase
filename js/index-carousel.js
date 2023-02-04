const animals = [
    {        
        id:1,
        attachment:"images/chat.jpg",
        alt:"très beau chat"
    },
    {        
        id:2,
        attachment:"images/renard-polaire.jpg",
        alt:"renard polaire magnifique"
    }
]

function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <div> 
            <img src="${d.attachment}" alt="${d.alt}" style="width:auto; height:16rem">
        </div>` 
    })

    $(element).slick({
        centerMode: false,
        centerPadding: '1.5rem',
        slidesToShow: 5,
        adaptiveHeight: true,
        speed:1000,
        dots:true,
        autoplay:true,
        autoplaySpeed:1200,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 4,
                    dots:true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '40px',
                    slidesToShow: 2,
                    dots:true,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    centerPadding: '20px',
                    slidesToShow: 2,
                    dots:true,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1,
                    dots:true,
                }
            }
        ]
    });
}

carousel(".carousel-slick", animals);
