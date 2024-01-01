const centerSide = document.querySelector('.center-side');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');

const loginForm = document.getElementById('loginForm');

let users = [{ username: 'jgarzon3', password: 'admin123' }];

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isUserExists(username, password)) {
        centerSide.style.display = 'block';
        rightSide.style.display = 'block';
        leftSide.style.display = 'none';
        alert('Bienvenido');
        clearinput();
    } else {
        alert('Usuario no registrado');
    }
});

function isUserExists(username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            return true;
        }
    }
    return false;
}

// Event listener for 'Crear cuenta' button
const createUserButton = document.querySelector('input[value="Crear cuenta"]');
createUserButton.addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const newUser = { username: username, password: password };
    users.push(newUser);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

function clearinput() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
