let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.part2',
        pin: true, // Pins the section while scrolling
        start: '0% 50%', // Triggers when the top of '.part2' reaches 50% of the viewport
        end: '50% 50%', // Ends when scrolling past 50% of viewport
        markers: true, // Debug markers (remove in production)
        scrub: 1, // Smooth scrubbing effect
        snap: {
            snapTo: 'labels', // Snap to timeline labels
            duration: { min: 0.2, max: 3 },
            delay: 0.2,
            ease: 'power1.inOut'
        }
    }
});

