import { animate } from 'animejs';
//animation du carré qui spin
animate(".animation", {
    rotate: 360,
    loop: true,
    ease: 'linear',
    duration: 1300,
});