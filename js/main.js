let boxes = document.querySelectorAll('.container div');

boxes.forEach(box => {
    box.addEventListener('click', Hide)
});

function Hide() {
    this.style.opacity=0;
}