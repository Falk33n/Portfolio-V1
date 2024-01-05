
const scrollHandlerArchive = () => {
    const isElementInViewport = (element) => {
        const rectangle = element.getBoundingClientRect()
    
        return (
            rectangle.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
    }
    
    const whenElementIsInViewport = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target

                setTimeout(() => {
                    target.style.opacity = "1"
                }, 250)
            }
        })
    }
    
    const observeElementWithThreshold = (element, threshold, callback) => {
        const observer = new IntersectionObserver(callback, { threshold })
    
        observer.observe(element)
    
        return observer
    }
    
    const showSectionsOnScroll = () => {
        const footer = document.getElementById("footer")
        const footerObserver = observeElementWithThreshold(footer, 0.01, whenElementIsInViewport)
        
        if (isElementInViewport(footer)) {
            footerObserver.unobserve(footer)
    
            whenElementIsInViewport([{ target: footer, isIntersecting: true }], footerObserver)
        } 
    }
    
    window.addEventListener("scroll", () => {
        showSectionsOnScroll()
    })
}

const startAnimations = (
    archiveHeading, 
    archiveTitle,  
    archiveInformation,
    archiveContent,
    archiveLists
    ) => {
    setTimeout(() => {
        setTimeout(() => {
            archiveHeading.style.opacity = "1"
            archiveTitle.style.opacity = ".2"
        }, 300)

        setTimeout(() => {
            archiveTitle.style.opacity = "1"
            archiveTitle.style.transform = "translateY(0)"
        }, 500)
    }, 20)

    setTimeout(() => {
        setTimeout(() => {
            archiveInformation.style.opacity = ".2"
        }, 300)

        setTimeout(() => {
            archiveInformation.style.opacity = "1"
            archiveInformation.style.transform = "translateY(0)"
        }, 500)
    }, 300)

    setTimeout(() => {
        archiveContent.style.opacity = "1"
        archiveLists.forEach((list, currentIndex) => {                    
            setTimeout(() => {
                list.style.opacity = "1"
                list.style.transform = "translateY(0)"
            }, currentIndex * 200)
        })
    }, 600)
}

startAnimations (
    document.getElementById("archive-heading"),
    document.getElementById("archive-title"),
    document.getElementById("archive-information"),
    document.getElementById("archive-content"),
    document.querySelectorAll(".archive-list")
)

scrollHandlerArchive()