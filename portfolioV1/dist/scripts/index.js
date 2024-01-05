
const scrollHandlerIndex = () => {
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
    
                if (target.id === "work-more") {
                    const visibleWorkCards = document.querySelectorAll(".work-more-visible")
    
                    visibleWorkCards.forEach((card, currentIndex) => {                    
                        card.style.transition = "transform .8s ease-in-out, opacity .6s ease-in-out"
                    
                        setTimeout(() => {
                            card.style.opacity = "1"
                            card.style.transform = "translateY(0)"
                    
                            setTimeout(() => {
                                card.style.transition = "transform .15s ease-in-out, opacity .6s ease-in-out"
                            }, 200)
                        }, currentIndex * 200)
                    })
                }
                if (target.id === "contact") {
                    const footer = document.getElementById("footer")
    
                    setTimeout(() => {
                        footer.style.opacity = "1"
                    }, 350)
                }

                setTimeout(() => {
                    target.style.opacity = "1"
    
                    setTimeout(() => {
                        target.style.transform = "translateY(0)"
                    }, 150)
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
        const about = document.getElementById("about")
        const experience = document.getElementById("experience")
        const work = document.getElementById("work")
        const workRightSideAll = document.querySelectorAll(".work-right-side")
        const workRightSideOne = workRightSideAll[0]
        const workLeftSide = document.getElementById("work-left-side")
        const workRightSideTwo = workRightSideAll[1]
        const workMore = document.getElementById("work-more")
        const contact = document.getElementById("contact")
        const aboutObserver = observeElementWithThreshold(about, 0.3, whenElementIsInViewport)
        const experienceObserver = observeElementWithThreshold(experience, 0.2, whenElementIsInViewport)
        const workObserver = observeElementWithThreshold(work, 0.1, whenElementIsInViewport)
        const workRightSideOneObserver = observeElementWithThreshold(workRightSideOne, 0.07, whenElementIsInViewport)
        const workLeftSideObserver = observeElementWithThreshold(workLeftSide, 0.2, whenElementIsInViewport)
        const workRightSideTwoObserver = observeElementWithThreshold(workRightSideTwo, 0.2, whenElementIsInViewport)
        const workMoreObserver = observeElementWithThreshold(workMore, 0.1, whenElementIsInViewport)
        const contactObserver = observeElementWithThreshold(contact, 0.3, whenElementIsInViewport)

        if (isElementInViewport(about)) {
            aboutObserver.unobserve(about)

            whenElementIsInViewport([{ target: about, isIntersecting: true }], aboutObserver)
        } else if (isElementInViewport(experience)) {
            experienceObserver.unobserve(experience)

            whenElementIsInViewport([{ target: experience, isIntersecting: true }], experienceObserver)
        } else if (isElementInViewport(work)) {
            workObserver.unobserve(work)

            whenElementIsInViewport([{ target: work, isIntersecting: true }], workObserver)
        } else if (isElementInViewport(workRightSideOne)) {
            workRightSideOneObserver.unobserve(workRightSideOne)

            whenElementIsInViewport([{ target: workRightSideOne, isIntersecting: true }], workRightSideOneObserver)
        } else if (isElementInViewport(workLeftSide)) {
            workLeftSideObserver.unobserve(workLeftSide)

            whenElementIsInViewport([{ target: workLeftSide, isIntersecting: true }], workLeftSideObserver)
        } else if (isElementInViewport(workRightSideTwo)) {
            workRightSideTwoObserver.unobserve(workRightSideTwo)

            whenElementIsInViewport([{ target: workRightSideTwo, isIntersecting: true }], workRightSideTwoObserver)
        } else if (isElementInViewport(workMore)) {
            workMoreObserver.unobserve(workMore)

            whenElementIsInViewport([{ target: workMore, isIntersecting: true }], workMoreObserver)
        } else if (isElementInViewport(contact)) {
            contactObserver.unobserve(contact)

            whenElementIsInViewport([{ target: contact, isIntersecting: true }], contactObserver)
        }
    }
    
    window.addEventListener("scroll", () => {
        showSectionsOnScroll()
    })
}

const startAnimations = (
    smallerNavigationBar,
    biggerNavigationBarAbout, 
    biggerNavigationBarExperience, 
    biggerNavigationBarWork, 
    biggerNavigationBarContact, 
    resumeButton, 
    resumeButtonBackground,
    heroWelcome, 
    heroTitle,  
    heroAbout,
    heroButton,
    heroButtonBackground,
    bottomLeftNavigation, 
    bottomRightNavigation) => {
    setTimeout(() => {
        setTimeout(() => {
            smallerNavigationBar.style.transform = "scale(.9)"
            smallerNavigationBar.style.opacity = "50"
        }, 250)

        setTimeout(() => {
            smallerNavigationBar.style.transform = "scale(1)"
            smallerNavigationBar.style.opacity = "1"
        }, 500)
    }, 3600)

    setTimeout(() => {
        setTimeout(() => {
            biggerNavigationBarAbout.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            biggerNavigationBarAbout.style.opacity = "1"
            biggerNavigationBarAbout.style.marginBottom = "0"
        }, 500)
    }, 3600)

    setTimeout(() => {
        setTimeout(() => {
            biggerNavigationBarExperience.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            biggerNavigationBarExperience.style.opacity = "1"
            biggerNavigationBarExperience.style.marginBottom = "0"
        }, 500)
    }, 3750)

    setTimeout(() => {
        setTimeout(() => {
            biggerNavigationBarExperience.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            biggerNavigationBarExperience.style.opacity = "1"
            biggerNavigationBarExperience.style.marginBottom = "0"
        }, 500)
    }, 3750)

    setTimeout(() => {
        setTimeout(() => {
            biggerNavigationBarWork.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            biggerNavigationBarWork.style.opacity = "1"
            biggerNavigationBarWork.style.marginBottom = "0"
        }, 500)
    }, 3900)

    setTimeout(() => {
        setTimeout(() => {
            biggerNavigationBarContact.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            biggerNavigationBarContact.style.opacity = "1"
            biggerNavigationBarContact.style.marginBottom = "0"
        }, 500)
    }, 4050)

    setTimeout(() => {
        setTimeout(() => {
            resumeButton.style.opacity = ".2"
        }, 285)

        setTimeout(() => {
            resumeButton.style.opacity = "1"
            resumeButton.style.marginTop = "3rem"
        }, 500)
    }, 4200)

    setTimeout(() => {
        setTimeout(() => {
            resumeButtonBackground.style.opacity = ".2"
        }, 490)

        setTimeout(() => {
            resumeButtonBackground.style.opacity = "1"
            resumeButtonBackground.style.marginTop = "3rem"
        }, 500)
    }, 4200)

    setTimeout(() => {
        setTimeout(() => {
            heroWelcome.style.opacity = ".2"
        }, 205)

        setTimeout(() => {
            heroWelcome.style.opacity = "1"
            heroWelcome.style.marginBottom = "0"
        }, 500)
    }, 4400)

    setTimeout(() => {
        setTimeout(() => {
            heroTitle.style.opacity = ".2"
        }, 205)

        setTimeout(() => {
            heroTitle.style.opacity = "1"
            heroTitle.style.marginBottom = "0"
        }, 500)
    }, 4550)

    setTimeout(() => {
        setTimeout(() => {
            heroAbout.style.opacity = ".2"
        }, 205)

        setTimeout(() => {
            heroAbout.style.opacity = "1"
            heroAbout.style.marginBottom = "0"
        }, 500)
    }, 4700)

    setTimeout(() => {
        setTimeout(() => {
            heroButton.style.opacity = ".2"
        }, 205)

        setTimeout(() => {
            heroButton.style.opacity = "1"
            heroButton.style.marginBottom = "0"
        }, 500)
    }, 4850)

    setTimeout(() => {
        setTimeout(() => {
            heroButtonBackground.style.opacity = ".2"
        }, 490)

        setTimeout(() => {
            heroButtonBackground.style.opacity = "1"
            heroButtonBackground.style.marginBottom = "0"
        }, 500)
    }, 4850)

    setTimeout(() => {
        setTimeout(() => {
            bottomLeftNavigation.style.opacity = ".2"
        }, 240)

        setTimeout(() => {
            bottomLeftNavigation.style.opacity = "1"
        }, 500)
    }, 5300)

    setTimeout(() => {
        setTimeout(() => {
            bottomRightNavigation.style.opacity = ".2"
        }, 240)

        setTimeout(() => {
            bottomRightNavigation.style.opacity = "1"
        }, 500)
    }, 5300)
}

const aboutImageAnimation = (aboutImageCover, aboutImage, aboutImageBackground) => {
    aboutImageCover.addEventListener("mouseenter", () => {
        aboutImage.style.margin = "-.5 0 0 -1rem"
        aboutImage.style.filter = "grayscale(0) saturate(1) contrast(1) brightness(1)"
        aboutImageBackground.style.margin = "2.25rem 0 0 2.25rem"
    })
    
    aboutImageCover.addEventListener("mouseleave", () => {
        aboutImage.style.margin = "0"
        aboutImage.style.filter = "grayscale(1) saturate(6) contrast(2) brightness(2)"
        aboutImageBackground.style.margin = "1.75rem 0 0 1.75rem"
    })
}

const changeJobHandler = (firstJob, secondJob, thirdJob, fourthJob, firstJobContainer, secondJobContainer, thirdJobContainer, fourthJobContainer) => {
    firstJob.addEventListener("click", () => {
        firstJob.classList.remove("job-not-active")
        firstJobContainer.classList.remove("hidden")
        secondJob.classList.remove("job-active")
        secondJobContainer.classList.remove("block")
        thirdJob.classList.remove("job-active")
        thirdJobContainer.classList.remove("block")
        fourthJob.classList.remove("job-active")
        fourthJobContainer.classList.remove("block")
    
        firstJob.classList.add("job-active")
        firstJobContainer.classList.add("block")
        secondJob.classList.add("job-not-active")
        secondJobContainer.classList.add("hidden")
        thirdJob.classList.add("job-not-active")
        thirdJobContainer.classList.add("hidden")
        fourthJob.classList.add("job-not-active")
        fourthJobContainer.classList.add("hidden")
    
        firstJobContainer.style.opacity = "0"
        firstJobContainer.style.animation = "none"
    
        setTimeout(() => {
            firstJobContainer.style.animation = "appear-animation .15s forwards"
        }, 150)
    })

    secondJob.addEventListener("click", () => {
        firstJob.classList.remove("job-active")
        firstJobContainer.classList.remove("block")
        secondJob.classList.remove("job-not-active")
        secondJobContainer.classList.remove("hidden")
        thirdJob.classList.remove("job-active")
        thirdJobContainer.classList.remove("block")
        fourthJob.classList.remove("job-active")
        fourthJobContainer.classList.remove("block")
    
        firstJob.classList.add("job-not-active")
        firstJobContainer.classList.add("hidden")
        secondJob.classList.add("job-active")
        secondJobContainer.classList.add("block")
        thirdJob.classList.add("job-not-active")
        thirdJobContainer.classList.add("hidden")
        fourthJob.classList.add("job-not-active")
        fourthJobContainer.classList.add("hidden")
    
        secondJobContainer.style.opacity = "0"
        secondJobContainer.style.animation = "none"
    
        setTimeout(() => {
            secondJobContainer.style.animation = "appear-animation .15s forwards"
        }, 150)
    })

    thirdJob.addEventListener("click", () => {
        firstJob.classList.remove("job-active")
        firstJobContainer.classList.remove("block")
        secondJob.classList.remove("job-active")
        secondJobContainer.classList.remove("block")
        thirdJob.classList.remove("job-not-active")
        thirdJobContainer.classList.remove("hidden")
        fourthJob.classList.remove("job-active")
        fourthJobContainer.classList.remove("block")
    
        firstJob.classList.add("job-not-active")
        firstJobContainer.classList.add("hidden")
        secondJob.classList.add("job-not-active")
        secondJobContainer.classList.add("hidden")
        thirdJob.classList.add("job-active")
        thirdJobContainer.classList.add("block")
        fourthJob.classList.add("job-not-active")
        fourthJobContainer.classList.add("hidden")
    
        thirdJobContainer.style.opacity = "0"
        thirdJobContainer.style.animation = "none"
    
        setTimeout(() => {
            thirdJobContainer.style.animation = "appear-animation .15s forwards"
        }, 150)
    })

    fourthJob.addEventListener("click", () => {
        firstJob.classList.remove("job-active")
        firstJobContainer.classList.remove("block")
        secondJob.classList.remove("job-active")
        secondJobContainer.classList.remove("block")
        thirdJob.classList.remove("job-active")
        thirdJobContainer.classList.remove("block")
        fourthJob.classList.remove("job-not-active")
        fourthJobContainer.classList.remove("hidden")
    
        firstJob.classList.add("job-not-active")
        firstJobContainer.classList.add("hidden")
        secondJob.classList.add("job-not-active")
        secondJobContainer.classList.add("hidden")
        thirdJob.classList.add("job-not-active")
        thirdJobContainer.classList.add("hidden")
        fourthJob.classList.add("job-active")
        fourthJobContainer.classList.add("block")
    
        fourthJobContainer.style.opacity = "0"
        fourthJobContainer.style.animation = "none"
    
        setTimeout(() => {
            fourthJobContainer.style.animation = "appear-animation .15s forwards"
        }, 150)
    })
}

const workAnimations = (workLinks, workImageCovers, workImages, workCardsLink, workCardHeadings, workCards, workCardDestinations) => {
    workLinks.forEach((workLink, currentIndex) => {
        const workImageCover = workImageCovers[currentIndex]
        const workImage = workImages[currentIndex]

        workLink.addEventListener("mouseenter", function() {
            workImageCover.style.background = "transparent"
            workImage.style.filter = "grayscale(0) saturate(2) contrast(1)"
            workImage.style.opacity = "1"
        })
        
        workLink.addEventListener("mouseleave", function() {
            workImageCover.style.background = "var(--accent)"
            workImage.style.filter = "grayscale(1) saturate(1) contrast(2)"
            workImage.style.opacity = ".15"
        })
    })

    workCardsLink.forEach((workCardLink, currentIndex) => {
        const workCardHeading = workCardHeadings[currentIndex] 
        const workCard = workCards[currentIndex]

        workCardLink.addEventListener("mouseenter", function() {
            workCard.style.transform = "translateY(-.75rem)"
            workCardHeading.style.color = "var(--accent)"
        })
    
        workCardLink.addEventListener("mouseleave", function() {
            workCard.style.transform = "translateY(0)"
            workCardHeading.style.color = "var(--text-bright)"
        })
    })

    workCardDestinations.forEach((workCardDestination, currentIndex) => {
        const workCardHeading = workCardHeadings[currentIndex] 
        const workCard = workCards[currentIndex]

        workCardDestination.addEventListener("mouseenter", function() {
            workCard.style.transform = "translateY(-.75rem)"
            workCardHeading.style.color = "var(--accent)"
        })
    
        workCardDestination.addEventListener("mouseleave", function() {
            workCard.style.transform = "translateY(0)"
            workCardHeading.style.color = "var(--text-bright)"
        })
    })
}

const workCardsAnimation = (workMoreButton, workCardsHidden) => {
    let workButtonActive = false

    workMoreButton.addEventListener("click", () => {    
        workCardsHidden.forEach((card, currentIndex) => {
            card.style.transition = "transform .8s ease-in-out, opacity .6s ease-in-out"
            card.style.display = "block"
    
            setTimeout(() => {
                card.style.opacity = "1"
                card.style.transform = "translateY(0)"
    
                setTimeout(() => {
                    card.style.transition = "transform .15s ease-in-out, opacity .6s ease-in-out"
                }, 200)
            }, currentIndex * 200)
        })
    
        if (!workButtonActive) workMoreButton.textContent = "Show Less"
        else {
            workCardsHidden.forEach((card) => {
                card.style.display = "none"
                card.style.opacity = "0"
                card.style.transform = "translateY(2.5rem)"
            })
    
            workMoreButton.textContent = "Show More"
        }
    
        workButtonActive = !workButtonActive
    })
}

startAnimations (
    document.getElementById("smaller-navigation-bar"),
    document.getElementById("bigger-navigation-bar-about"),
    document.getElementById("bigger-navigation-bar-experience"),
    document.getElementById("bigger-navigation-bar-work"),
    document.getElementById("bigger-navigation-bar-contact"),
    document.getElementById("resume-button"),
    document.getElementById("resume-button-background"),
    document.getElementById("hero-welcome"),
    document.getElementById("hero-title"),
    document.getElementById("hero-about"),
    document.getElementById("hero-button"),
    document.getElementById("hero-button-background"),
    document.getElementById("bottom-left-navigation"),
    document.getElementById("bottom-right-navigation")
)

scrollHandlerIndex()

workCardsAnimation (
    document.getElementById("work-more-button"),
    document.querySelectorAll(".work-more-hidden")
)

changeJobHandler (
    document.getElementById("first-job"),
    document.getElementById("second-job"),
    document.getElementById("third-job"),
    document.getElementById("fourth-job"),
    document.getElementById("first-job-container"),
    document.getElementById("second-job-container"),
    document.getElementById("third-job-container"),
    document.getElementById("fourth-job-container")
)

aboutImageAnimation (
    document.getElementById("about-image-cover"),
    document.getElementById("about-image"),
    document.getElementById("about-image-background")
)

workAnimations (
    document.querySelectorAll(".work-link"),
    document.querySelectorAll(".work-image-cover"),
    document.querySelectorAll(".work-image"),
    document.querySelectorAll(".work-more-link"),
    document.querySelectorAll(".work-more-title"),
    document.querySelectorAll("#work-more-content section"),
    document.querySelectorAll(".work-more-destination")
)