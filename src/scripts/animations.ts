import { animate, stagger, inView } from "motion";

export function basicAnimations() {   

    inView

    inView(
        ".fade-up",
        (e) => {
            animate(e, { opacity: [0, 1], y: [10, 0] }, { ease: [0.39, 0.24, 0.3, 1], duration: 1 });

        },
        { amount: 0.25 }

    )

    inView(
        ".fade-up-stagger",
        (e) => {
            const sub = e.querySelectorAll(".stagger");
            if (sub.length > 0) {
                animate(sub, { opacity: [0, 1], y: [10, 0], }, { ease: [0.39, 0.24, 0.3, 1], duration: 1, delay: stagger(0.20, { startDelay: 0.10 }) } );
            }
        },
        { amount: 0.25 }

    )

    inView(
        ".fade-left",
        (e) => {
            animate(e, { opacity: [0, 1], x: [10, 0], }, { ease: [0.39, 0.24, 0.3, 1], duration: 1 } );
        },
    )

    inView(
        ".fade-left-delay-stagger",
        (e) => {
            const sub = e.querySelectorAll(".stagger");
            if (sub.length > 0) {
                animate(sub, { opacity: [0, 1], x: [10, 0], }, { ease: [0.39, 0.24, 0.3, 1], duration: 1, delay: stagger(0.20, { startDelay: 0.33 }) } );
            }
        },
    )


}

