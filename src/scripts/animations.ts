import { animate, stagger, inView } from "motion";

export function basicAnimations() {   

    // Default Animation
    inView(
        ".fade-in",
        (e) => {
            animate(e, { opacity: [0, 1], y: [10, 0] }, { ease: [0.39, 0.24, 0.3, 1], duration: 1 });

        },
        { amount: 0.25 }

    )

    // Stagger Animation
    inView(
        ".fade-in-stagger",
        (e) => {
            const sub = e.querySelectorAll(".stagger");
            if (sub.length > 0) {
                animate(sub, { opacity: [0, 1], y: [10, 0], }, { ease: [0.39, 0.24, 0.3, 1], duration: 1, delay: stagger(0.10, { startDelay: 0.10 }) } );
            }
        },
        { amount: 0.25 }

    )
}

