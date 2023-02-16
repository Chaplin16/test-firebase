const animals = [
    {        
        id:1,
        attachment:"../images/chat.jpg",
        alt:"très beau chat"
    },
    {        
        id:2,
        attachment:"../images/renard-polaire.jpg",
        alt:"renard polaire magnifique"
    },
    {        
        id:3,
        attachment:"../images/tortue.jpg",
        alt:"tortue de mer"
    }

];


function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <img src="${d.attachment}" alt="${d.alt}" style="width:auto; height:16rem">
        ` 
    })

    $(element).slick({
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 5,
        adaptiveHeight: true,
        speed:1000,
        dots:true,
        autoplay:true,
        autoplaySpeed:1200,
        arrows: true,
        infinite: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1650,
                settings: {
 
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1250,
                settings: {

                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
    
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {

                    slidesToShow: 1,
                }
            }
        ]
    });
}

carousel(".carousel", animals);

