
const scrollHandler = () => {
    const skipContentContainer = document.getElementById("skip-content-button-container")
    let lastScroll = 0
    let scrolledToTop = false
    let timer
    
    const navigationBarOnScroll = (navigationBarContainer, biggerNavigationBar, smallerNavigationBar, logo, logoLink, logoBackground) => {
        let currentScroll = window.scrollY

        if (currentScroll > lastScroll) {
            if (currentScroll > 65) {
                navigationBarContainer.style.transform = "translateY(-100%)"
            }
        } else if (currentScroll === 0) {
            navigationBarContainer.style.height = "8rem"
            navigationBarContainer.style.boxShadow = "none"
            navigationBarContainer.style.transform = "translateY(0)"
            biggerNavigationBar.style.marginBottom = "-2rem"
            smallerNavigationBar.style.marginTop = "1.75rem"
            logoLink.style.marginTop = "-2.5rem"
            logo.style.marginTop = "0"
            logoBackground.style.marginTop = "0"
        } else {
            navigationBarContainer.style.transform = "translateY(0)"
            navigationBarContainer.style.height = "6rem"
            navigationBarContainer.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, .3)"
            biggerNavigationBar.style.marginBottom = "0"
            smallerNavigationBar.style.marginTop = "0.4rem"
            logoLink.style.marginTop = "-3.75rem"
            logo.style.marginTop = "-2.35rem"
            logoBackground.style.marginTop = "-2.35rem"
        }

        lastScroll = currentScroll
    }

    const showSkipContentButton = () => {
        if (!scrolledToTop) {
            skipContentContainer.style.display = "block"
            setTimeout(() => {
                skipContentContainer.style.transform = "translateX(-2.5rem)"
                scrolledToTop = true
            }, 300)
        }
    }

    const isItScrolledToTop = () => {
        if (window.scrollY === 0) {
            if (!scrolledToTop) {
                timer = setTimeout(() => {
                    skipContentContainer.style.display = "block"

                    setTimeout(() => {
                        skipContentContainer.style.transform = "translateX(-2.5rem)"

                        scrolledToTop = true
                    }, 300)
                }, 40000)
            }
        } else {
            clearTimeout(timer)
            skipContentContainer.style.transform = "translateX(-20rem)"

            scrolledToTop = false

            setTimeout(() => {
                skipContentContainer.style.display = "none"
            }, 300)
        }
    }

    setTimeout(showSkipContentButton, 40000)
    
    window.addEventListener("scroll", () => {
        navigationBarOnScroll (
            document.getElementById("navigation-bar-container"),
            document.getElementById("bigger-navigation-bar"), 
            document.getElementById("smaller-navigation-bar"), 
            document.getElementById("logo"), 
            document.getElementById("logo-link"),
            document.getElementById("logo-background")
        )
        isItScrolledToTop()
    })
}

const reloadPage = (navigationEntries) => {
    window.onload = () => {
        if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
            setTimeout(() => {
                window.scrollTo(0, 0)
            }, 100)
        }
    }
}

const showMenuHandler = (menu, menuBackground, navigationBarContainer, smallerNavigationBar, menuLineOne, menuLineTwo, menuLineThree, mediaQuery) => {
    let menuOpen = false

    const showMenu = () => {
        if (menuOpen) {
            menu.style.transform = "translateX(50rem)"
            menuBackground.style.transform = "translateX(50rem)"
            menuLineOne.style.transform = "rotateZ(0)"
            menuLineOne.style.width = "3.5rem"
            menuLineTwo.style.width = "3rem"
            menuLineTwo.style.transform = "rotateZ(0)"
            smallerNavigationBar.style.alignItems = "flex-end"

            setTimeout(() => {
                menuLineThree.style.display = "block"
                smallerNavigationBar.style.gap = "0.75rem"
            }, 200)

            setTimeout(() => {
                navigationBarContainer.style.animation = "change-navigation-background .15s forwards 3.5s"
                navigationBarContainer.style.background = "var(--navigation-background)"
                navigationBarContainer.style.backdropFilter = "blur(1.6rem)"
                menu.style.display = "none"
                menuBackground.style.display = "none"
                menuOpen = false
            }, 300)
        } else {
            navigationBarContainer.style.animation = "none"
            navigationBarContainer.style.background = "transparent"
            navigationBarContainer.style.backdropFilter = "blur(0)"
            navigationBarContainer.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)"
            smallerNavigationBar.style.gap = "0"
            smallerNavigationBar.style.alignItems = "center"
            menu.style.display = "flex"
            menuBackground.style.display = "block"
            menuLineOne.style.transform = "rotateZ(315deg)"
            menuLineOne.style.width = "3rem"
            menuLineTwo.style.width = "3rem"
            menuLineTwo.style.transform = "rotateZ(225deg)"
            menuLineThree.style.display = "none"

            setTimeout(() => {
                menu.style.transform = "translateX(0)"
                menuBackground.style.transform = "translateX(0)"
                menuOpen = true
            }, 20)
        }
    }

    smallerNavigationBar.addEventListener("click", () => {
        showMenu()
    })

    mediaQuery.addEventListener("change", () => {
        if (mediaQuery.matches) {    
            menu.style.display = "none"
            menuBackground.style.display = "none"
            menuLineOne.style.width = "3.5rem"
            menuLineOne.style.transform = "rotateZ(0)"
            menuLineTwo.style.width = "3rem"
            menuLineTwo.style.transform = "rotateZ(0)"
            menuLineThree.style.display = "block"
            smallerNavigationBar.style.alignItems = "flex-end"
            smallerNavigationBar.style.gap = "0.75rem"
            menuOpen = false
        }
    })

    return showMenu
}

const logoAnimation = (logo, logoLink) => {
    logoLink.addEventListener("mouseenter", () => {
        logo.style.top = "-1px"
        logo.style.left = "-2.4rem"
    })

    logoLink.addEventListener("mouseleave", () => {
        logo.style.top = "1px"
        logo.style.left = "-2rem"
    })
}

scrollHandler()

reloadPage(performance.getEntriesByType("navigation"))

showMenuHandler (
    document.getElementById("menu"), 
    document.getElementById("menu-background"), 
    document.getElementById("navigation-bar-container"), 
    document.getElementById("smaller-navigation-bar"), 
    document.getElementById("menu-line-one"), 
    document.getElementById("menu-line-two"), 
    document.getElementById("menu-line-three"),
    window.matchMedia("(min-width: 768px)")
)

logoAnimation (
    document.getElementById("logo"), 
    document.getElementById("logo-link")
)