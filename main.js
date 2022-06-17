const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// define-element
const html = $('html')
const navbar = $('.navbar')
const sliderItem = $('.slider__item')
const sliderWidth = sliderItem.offsetWidth
const sliderDotList = $$('.slider__dot-item')
const sliderDotItem = $('.slider__dot-item')
const toTop = $('.btn-to-top')
const lastScrollTop = 0
const i = 0




// Function handleEvent
const handleEvent = function() {
    // Trần Đức ****************** begin
    
    // Click remove overLay
    const overlay = $('.overlay')
    const overlayIcon = $('.overlay__icon')
    const overlayContent = $('.overlay__content')

    overlayIcon.onclick = function() {
        overlay.classList.add('hide')
    }

    overlayContent.onclick = function(e) {
        e.stopPropagation()
    }
    
    // Click => move slide
    sliderDotList.forEach((dot, index) => {
        dot.onclick = function() {
            $('.slider__dot-item.active').classList.remove('active')
            
            this.classList.add('active')
            sliderItem.style.marginLeft = 0 - (sliderWidth * index) + 'px'

        }
    })
    // Trần Đức ****************** end

    // Click out of element
    html.onclick = function (e) {
        navbarScanWrap.classList.remove('active')
        languageSwap.classList.remove('active')
        overlay.classList.add('hide')
    }

    // Click open/close element
    const navbarScan = $('.navbar-scan')
    const navbarScanWrap = $('.navbar-scan__wrap')
    const navBotLanguage = $('.nav-bot__language')
    const languageSwap = $('.language-swap')
    var isOpen = false

    navbarScan.onclick = function (e) {
        if(isOpen) {
            isOpen = false
            navbarScanWrap.classList.remove('active')
        } else {
            isOpen = true
            navbarScanWrap.classList.add('active')
        }

        e.stopPropagation()
    }

    navBotLanguage.onclick = function (e) {
        if(isOpen) {
            isOpen = false
            languageSwap.classList.remove('active')
        } else {
            isOpen = true
            languageSwap.classList.add('active')
        }

        e.stopPropagation()
    }

    // Open Form-cart
    const cartIcon = $('.nav-bot__cart-icon')
    const cartForm = $('.cart-form')
    const slider = $('.slider')
    const content = $('.content')
    const buyTag = $('.buy-tag')

    cartIcon.onclick = function () {
        slider.classList.add('hide')
        content.classList.add('hide')
        cartForm.classList.add('active')
        formContainer.classList.remove('active')
        buyTag.classList.add('hide')
    }

    // Đạt********** begin
    // Open Form-login
    const loginWrapper = $('.login-wrapper')
    const formContainer = $('.form-container')

    loginWrapper.onclick = function () {
        formContainer.classList.add('active')
        slider.classList.add('hide')
        content.classList.add('hide')
        cartForm.classList.remove('active')
        buyTag.classList.add('hide')
    }
    // Đạt********** end


    // Scroll hide/appear navbar
    document.onscroll = function() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop

        if(scrollTop > lastScrollTop) {
            navbar.classList.add('hide')
        } else {
            navbar.classList.remove('hide')
        }

        // add/remove active to top
        if(scrollTop >= 150) {
            toTop.classList.add('active')
        } else {
            toTop.classList.remove('active')
        }
    }

    // click open/close menu on scroll
    const menuOpen = $('.menu-open')
    const menuClose = $('.menu-close')
    const navTopList = $('.navbar-top-mobile-tablet')

    menuOpen.onclick = function() {
        this.classList.remove('active')
        menuClose.classList.add('active')
        navTopList.classList.add('active')
    }

    menuClose.onclick = function() {
        menuOpen.classList.add('active')
        this.classList.remove('active')
        navTopList.classList.remove('active')
    }
}

handleEvent()
