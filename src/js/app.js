import '../css/app.css';
import Alpine from 'alpinejs'
import intersect from '@alpinejs/intersect'
import JSConfetti from 'js-confetti'

Alpine.plugin(intersect)

console.log('Hello from app.js');

window.Alpine = Alpine

Alpine.start()
const jsConfetti = new JSConfetti()

const addConfetti = () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     })     
}

window.addConfetti = addConfetti