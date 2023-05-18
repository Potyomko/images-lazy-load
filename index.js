const images = document.querySelectorAll('img')
const options = {
    rootMargin: '150px'
}
const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) {
            console.log(entry.target);
            const image = entry.target;
            image.src = image.dataset.lazy;
            image.classList.add('appear');
            observer.unobserve(image)
        }
    })
}, options)

images.forEach(image=> io.observe(image))