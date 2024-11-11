const $ = document,
    navMenu = $.querySelector(".menu"),
    navIcon = $.querySelector(".nav-icon"),
    navIconClose = $.querySelector(".nav-icon-close"),
    logo = $.querySelector(".logo"),
    overlay = $.querySelector('.overlay')

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      alert("مثلا استاد قرار بود با گوشی نبینی");
    }

navIcon.addEventListener("click", () => {
    navMenu.style.top = "0";
    navIcon.style.opacity = "0";
    navIcon.style.visibility = "hidden";
    logo.style.visibility = "hidden";
    logo.style.opacity = "0";
    overlay.style.opacity = '1'
    overlay.style.visibility = 'visible'
});

function hideMenu() {
    navMenu.style.top = "-40rem";
    navIcon.style.opacity = "1";
    navIcon.style.visibility = "visible";
    logo.style.visibility = "visible";
    logo.style.opacity = "1";
    overlay.style.opacity = '0'
    overlay.style.visibility = 'hidden'
}

navIconClose.addEventListener("click", hideMenu);

overlay.addEventListener('click', hideMenu)

const swiper = new Swiper(".mySwiper", {
        effect: "fade",
        speed: 1e3,
        autoplay: {
            delay: 5e3
        },
        breakpoints: {
            640: {
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        }
    }),
    swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: !0,
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            640: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            },
            1536: {
                slidesPerView: 5
            }
        }
    }),
    swiper3 = new Swiper(".mySwiper3", {
        speed: 1e3,
        autoplay: {
            delay: 1e4
        },
        breakpoints: {
            640: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: !0
                }
            }
        }
    })