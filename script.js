document.getElementById('color-form').addEventListener('submit', function(event) {
    event.preventDefault();
    changeColor();
});

function changeColor() {
    const colorInput = document.getElementById('color-input').value;
    const heading = document.getElementById('main-heading');
    heading.style.color = colorInput;
}
