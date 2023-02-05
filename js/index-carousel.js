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
    },
    {        
        id:3,
        attachment:"images/tortue.jpg",
        alt:"tortue de mer"
    },
    {        
        id:4,
        attachment:"images/cygne.jpg",
        alt:"cygne magnifique"
    },
    {        
        id:5,
        attachment:"images/panda.jpg",
        alt:"panda gourmand"
    },
    {        
        id:6,
        attachment:"images/serpent.jpg",
        alt:"serpent terrifiant"
    },
    {        
        id:7,
        attachment:"images/oie.jpg",
        alt:"oie en colère"
    },
    {        
        id:8,
        attachment:"images/mouette.jpg",
        alt:"mouette du grau du roi"
    },
    {        
        id:9,
        attachment:"images/hamster.jpg",
        alt:"hamster mignon"
    },
    {        
        id:10,
        attachment:"images/renard-roux.jpg",
        alt:"renard des bois"
    }
]

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
