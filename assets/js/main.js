// document.addEventListener('DOMContentLoaded', () => {
//     // Get video elements and bounding sections
//     const video1 = document.querySelector('#v0');
//     const section1 = document.querySelector('#video-section');
//     const video2 = document.querySelector('#v1');
//     const section2 = document.querySelector('.section2');

//     // Check if elements exist
//     if (!video1 || !section1 || !video2 || !section2) {
//         console.error("One or more video elements or sections are missing from the DOM.");
//         return;
//     }

//     // Function to update video playback based on scroll position
//     const updateVideoPlayback = () => {
//         // Update for video 1
//         updateVideo(video1, section1);

//         // Update for video 2
//         updateVideo2(video2, section2);

//         // Continue the loop
//         requestAnimationFrame(updateVideoPlayback);
//     };

//     // Function to handle video 1 update
//     const updateVideo = (video, section) => {
//         const scrollTop = window.scrollY;
//         const sectionRect = section.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         const rawPercentScrolled = (scrollTop - (sectionRect.top + scrollTop)) / section.scrollHeight;
//         let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

//         if (sectionRect.bottom > 0 && sectionRect.top < windowHeight) {
//             video.style.display = "block";
//         } else {
//             video.style.display = "none";
//         }

//         console.log('object');

//         video.currentTime = video.duration * percentScrolled;
//     };

//     // Function to handle video 2 update with custom logic
//     const updateVideo2 = (video, section) => {
//         const scrollTop = window.scrollY;
//         const sectionRect = section.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         const rawPercentScrolled = (scrollTop - (sectionRect.top + scrollTop)) / section.scrollHeight;
//         let percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

//         if (sectionRect.bottom > 0 && sectionRect.top < windowHeight) {
//             video.style.display = "block";
//         } else {
//             video.style.display = "none";
//         }

//         // Apply the custom logic for percentScrolled
//         if (percentScrolled > 0 && percentScrolled < 0.13) {
//             percentScrolled = percentScrolled / 0.2;
//         } else if (percentScrolled > 0.13 && percentScrolled < 0.880) {
//             percentScrolled = percentScrolled + 0.521;
//             if (percentScrolled > 0.85) {
//                 percentScrolled = 0.85;
//             }
//         }

//         video.currentTime = video.duration * percentScrolled;
//     };

//     // Start the video playback update loop
//     requestAnimationFrame(updateVideoPlayback);
// });

document.addEventListener('DOMContentLoaded', () => {
    const video1 = document.querySelector('#v0');
    const section1 = document.querySelector('#video-section');
    const video2 = document.querySelector('#v1');
    const section2 = document.querySelector('.section2');

    if (!video1 || !section1 || !video2 || !section2) {
        console.error("One or more video elements or sections are missing from the DOM.");
        return;
    }

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // start observing when 10% of the section is visible
    };

    const handleIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showVideo(entry.target);
                startVideoPlayback(entry.target);
            } else {
                hideVideo(entry.target);
                stopVideoPlayback(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    observer.observe(section1);
    observer.observe(section2);

    let video1Playing = false;
    let video2Playing = false;

    const startVideoPlayback = (section) => {
        if (section === section1) {
            video1Playing = true;
            requestAnimationFrame(updateVideo1);
        } else if (section === section2) {
            video2Playing = true;
            requestAnimationFrame(updateVideo2);
        }
    };

    const stopVideoPlayback = (section) => {
        if (section === section1) {
            video1Playing = false;
        } else if (section === section2) {
            video2Playing = false;
        }
    };

    const updateVideo1 = () => {
        if (video1Playing) {
            const percentScrolled = calculateScrollPercent(section1);
            video1.currentTime = video1.duration * percentScrolled;
            requestAnimationFrame(updateVideo1);
        }
    };

    const updateVideo2 = () => {
        if (video2Playing) {
            let percentScrolled = calculateScrollPercent(section2);
            percentScrolled = adjustPercentScrolled(percentScrolled);
            video2.currentTime = video2.duration * percentScrolled;
            requestAnimationFrame(updateVideo2);
        }
    };

    const calculateScrollPercent = (section) => {
        const scrollTop = window.scrollY;
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const rawPercentScrolled = (scrollTop - (sectionRect.top + scrollTop)) / section.scrollHeight;
        return Math.min(Math.max(rawPercentScrolled, 0), 1);
    };

    const adjustPercentScrolled = (percentScrolled) => {
        if (percentScrolled > 0 && percentScrolled < 0.13) {
            return percentScrolled / 0.2;
        } else if (percentScrolled > 0.13 && percentScrolled < 0.880) {
            percentScrolled += 0.521;
            if (percentScrolled > 0.85) {
                return 0.85;
            }
        }
        return percentScrolled;
    };

    const showVideo = (section) => {
        if (section === section1) {
            video1.style.display = "block";
        } else if (section === section2) {
            video2.style.display = "block";
        }
    };

    const hideVideo = (section) => {
        if (section === section1) {
            video1.style.display = "none";
        } else if (section === section2) {
            video2.style.display = "none";
        }
    };
});
