document.addEventListener("DOMContentLoaded", function () {
    // Initialize Locomotive Scroll
    const scrollContainer = document.querySelector("[data-scroll-container]");
    const locoScroll = new LocomotiveScroll({
        el: scrollContainer,
        smooth: true,
        getDirection: true,
        smartphone: { smooth: true },
        tablet: { smooth: true }
    });

    // Register GSAP's ScrollTrigger plugin and configure with Locomotive Scroll
    gsap.registerPlugin(ScrollTrigger);
    
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: scrollContainer.style.transform ? "transform" : "fixed"
    });

    // Refresh ScrollTrigger and Locomotive Scroll after setup
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();

    // Fade-in images based on scroll position
    document.querySelectorAll('.fade-image').forEach(img => {
        gsap.fromTo(img, { opacity: 0 }, {
            opacity: 1,
            scrollTrigger: {
                trigger: img,
                scroller: scrollContainer,
                start: "top 80%",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Sticky Navigation
    const fixedElement = document.querySelector('.fixed');
    locoScroll.on('scroll', (args) => {
        fixedElement.classList.toggle('sticky', args.scroll.y >= 100);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#0"])').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.getElementById(this.getAttribute('href').substring(1));
            if (targetElement) {
                locoScroll.scrollTo(targetElement);
            }
        });
    });

    // Opacity effect based on data attributes
    document.querySelectorAll('[data-scroll-opacity]').forEach(element => {
        const startOpacity = parseFloat(element.getAttribute('data-scroll-opacity')) || 0;
        const endOpacity = parseFloat(element.getAttribute('data-scroll-opacity-end')) || 1;

        gsap.fromTo(element, { opacity: startOpacity }, {
            opacity: endOpacity,
            scrollTrigger: {
                trigger: element,
                scroller: scrollContainer,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // // Video playback control based on scroll position
    // const video = document.getElementById('v0');
    // const videoSection = document.getElementById('video-section');
    // const playbackConst = 500; // Adjust this value for faster or slower playback

    // if (video && videoSection) {
    //     video.addEventListener('loadedmetadata', function() {
    //         const sectionHeight = Math.floor(video.duration) * playbackConst;
    //         videoSection.style.height = sectionHeight + "px";
    //     });

    //     ScrollTrigger.create({
    //         trigger: videoSection,
    //         scroller: scrollContainer,
    //         start: "top top",
    //         end: "bottom top",
    //         // pin: video,
    //         scrub: true,
    //         onUpdate: (self) => {
    //             video.currentTime = video.duration * self.progress;
    //         }
    //     });
    // } else {
    //     console.error("One or more elements are missing from the DOM.");
    // }

    const registerVideo = (boundSelector, videoSelector) => {
        const bound = document.querySelector(boundSelector);
        const video = document.querySelector(videoSelector);
    
        if (!bound || !video) {
            console.error("The bound element or video element is missing from the DOM.");
            return;
        }
    
        const updateVideoPlayback = () => {
            if (video.duration) {
                const scrollTop = locoScroll.scroll.instance.scroll.y;
                const boundRect = bound.getBoundingClientRect();
                const windowHeight = window.innerHeight;
    
                const rawPercentScrolled = (scrollTop - (boundRect.top + scrollTop)) / bound.scrollHeight;
                let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    
                // Show video when any part of the section is in the viewport
                if (boundRect.bottom > 0 && boundRect.top < windowHeight) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }

                // Control video playback
                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(updateVideoPlayback);
        };
    
        // Initial call and attach scroll event listener
        requestAnimationFrame(updateVideoPlayback);
    };

    const registerVideo2 = (boundSelector, videoSelector) => {
        const bound = document.querySelector(boundSelector);
        const video = document.querySelector(videoSelector);
    
        if (!bound || !video) {
            console.error("The bound element or video element is missing from the DOM.");
            return;
        }
    
        const updateVideoPlayback = () => {
            // console.clear();
            if (video.duration) {
                const scrollTop = locoScroll.scroll.instance.scroll.y;
                const boundRect = bound.getBoundingClientRect();
                const windowHeight = window.innerHeight;
    
                const rawPercentScrolled = (scrollTop - (boundRect.top + scrollTop)) / bound.scrollHeight;
                let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
    
                // Show video when any part of the section is in the viewport
                if (boundRect.bottom > 0 && boundRect.top < windowHeight) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }
    
                console.log('Traget 1', percentScrolled)
                
                
                if(percentScrolled > 0 && percentScrolled < 0.13) {
                    percentScrolled = percentScrolled / 0.2
                } 
                else if (percentScrolled > 0.13 && percentScrolled < 0.880) {
                    percentScrolled = percentScrolled + 0.521

                    if(percentScrolled > 0.85) {
                        percentScrolled = 0.85
                    }
                }

                console.log('Traget 2', percentScrolled)
                // Control video playback
                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(updateVideoPlayback);
        };
    
        // Initial call and attach scroll event listener
        requestAnimationFrame(updateVideoPlayback);
    };
    
    // Example usage
    registerVideo('#video-section', '#v0');
    registerVideo2('.section2', '#v1');

    
    // Update Locomotive Scroll and ScrollTrigger on window resize
    window.addEventListener('resize', () => {
        locoScroll.update();
        ScrollTrigger.refresh();
    });
});
