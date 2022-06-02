const btn = document.querySelector("button");
const textArea = document.querySelector('#list');
const text = document.querySelector('#item-input');
const form = document.querySelector('#new-item-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(text.value)
    text.value = "";
});

btn.addEventListener('click', e => {
    var elem = document.createElement('p');
    elem.innerText = text.value;
    elem.classList.add('list-item');
    textArea.appendChild(elem);

    elem.addEventListener('click', e => {
        textArea.removeChild(elem);
    })
});

