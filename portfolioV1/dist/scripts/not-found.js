const startAnimations = (notFoundTitle, notFoundDescription, notFoundButton, notFoundButtonBackground, footer) => {
    setTimeout(() => {
        setTimeout(() => {
            notFoundTitle.style.opacity = "0.2"
        }, 250)

        setTimeout(() => {
            notFoundTitle.style.transform = "translateY(0)"
            notFoundTitle.style.opacity = "1"
            
            setTimeout(() => {
                notFoundTitle.style.opacity = "0"
            }, 250)

            setTimeout(() => {
                notFoundTitle.style.opacity = "1"
            }, 700)

            setTimeout(() => {
                notFoundTitle.style.opacity = "0"
            }, 1300)

            setTimeout(() => {
                notFoundTitle.style.opacity = "1"
            }, 1650)
        }, 500)
    }, 20)

    setTimeout(() => {
        setTimeout(() => {
            notFoundDescription.style.opacity = "0.2"
        }, 250)

        setTimeout(() => {
            notFoundDescription.style.transform = "translateY(0)"
            notFoundDescription.style.opacity = "1"
        }, 500)
    }, 300)

    setTimeout(() => {
        setTimeout(() => {
            notFoundButton.style.opacity = "0.2"
        }, 250)

        setTimeout(() => {
            notFoundButton.style.marginTop = "5rem"
            notFoundButton.style.opacity = "1"
        }, 500)
    }, 600)

    setTimeout(() => {
        setTimeout(() => {
            notFoundButtonBackground.style.opacity = "0.1"
        }, 450)

        setTimeout(() => {
            notFoundButtonBackground.style.opacity = "1"
        }, 500)
    }, 600)

    setTimeout(() => {
        setTimeout(() => {
            footer.style.opacity = "0.2"
        }, 250)

        setTimeout(() => {
            footer.style.opacity = "1"
        }, 500)
    }, 900)
}

startAnimations (
    document.getElementById("not-found-title"),
    document.getElementById("not-found-description"),
    document.getElementById("not-found-button"),
    document.getElementById("not-found-button-background"),
    document.getElementById("footer")
)