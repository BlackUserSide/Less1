document.getElementById('hamburger').onclick = () => {
    let el = document.getElementById('hamburger')
    el.classList.toggle('is-active')
    let el1 = document.getElementById('nav')
    el1.classList.toggle('list-active')
}