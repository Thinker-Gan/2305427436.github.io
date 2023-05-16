let navberItem = document.querySelectorAll('.item')
for(let i = 0; i < navberItem.length; i++) {
    navberItem[i].addEventListener('click', function () {
        for(let i = 0;i < navberItem.length; i++) {
            navberItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['希望所有的喜欢都是相互的，希望所有的爱都是深爱，希望所有的在一起都是一辈子','Frontend Developer', "Linkin Park", "OICQ Users"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})