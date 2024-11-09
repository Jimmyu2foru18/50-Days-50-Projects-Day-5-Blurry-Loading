const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
const fps = 60
const duration = 3000 // 3 seconds
const interval = 1000 / fps

const loadingMessages = [
    'Initializing blur effect (filter: blur(30px))...',
    'Calculating viewport dimensions...',
    'Applying CSS transitions...',
    'Setting up animation frames...',
    'Implementing smooth opacity changes...',
    'Adjusting background positioning...',
    'Fine-tuning performance metrics...',
    'Optimizing render pipeline...',
    'Finalizing visual effects...'
];

let int = setInterval(blurring, interval)

function blurring() {
    const increment = (interval / duration) * 100
    load = Math.min(load + increment, 100)

    if (load >= 100) {
        clearInterval(int)
        loadText.style.opacity = '0'
        setTimeout(() => loadText.style.display = 'none', 300)
    }

    // Select message based on load progress
    const messageIndex = Math.floor((load / 100) * loadingMessages.length)
    const currentMessage = loadingMessages[Math.min(messageIndex, loadingMessages.length - 1)]
    
    // Create detailed loading message
    const detailedText = `${Math.floor(load)}%\n${currentMessage}`
    loadText.innerHTML = detailedText
    
    document.documentElement.style.setProperty('--loading-progress', load)
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return Number(((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min).toFixed(2)
}

window.addEventListener('resize', () => {
    bg.style.width = `calc(100vw + 60px)`
    bg.style.height = `calc(100vh + 60px)`
})
