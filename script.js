const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

function createListElement() {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const deleteButton = document.createElement('button');

    div.className = 'text';
    checkBox.type = 'checkbox';
    deleteButton.innerText = 'delete';

    li.append(document.createTextNode(input.value));
    ul.append(div);
    div.append(li, checkBox, deleteButton);
    input.value = '';

    checkBox.addEventListener('click', () => {
        li.classList.toggle('done');
    })

    deleteButton.addEventListener('click', () => {
        div.remove();
    })
}

button.addEventListener('click', () => {
    if (input.value.length > 0 && input.value.startsWith(' ') !== true) {
        createListElement();
    }
});

input.addEventListener('keypress', (event) => {
    if (input.value.length > 0 && input.value.startsWith(' ') !== true && event.keyCode === 13) {
        createListElement();
    }
});