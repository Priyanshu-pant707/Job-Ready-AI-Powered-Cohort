const socket = io();

const loginContainer = document.getElementById('login-container');
const usernameInput = document.getElementById('username-input');
const joinBtn = document.getElementById('join-btn');

const chatContainer = document.getElementById('chat-container');
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const usersList = document.getElementById('users');

let username = '';

// Join chat with username
joinBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if(username) {
        loginContainer.style.display = 'none';
        chatContainer.style.display = 'block';
        socket.emit('new user', username);
    }
});

// Send message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value) {
        socket.emit('chat message', { username, message: input.value });
        input.value = '';
    }
});

// Receive messages
socket.on('chat message', (data) => {
    const item = document.createElement('li');
    item.textContent = `${data.username}: ${data.message}`;
    item.style.color = data.color; // different color per user
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});

// Update online users list
socket.on('online users', (users) => {
    usersList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.username;
        li.style.color = user.color;
        usersList.appendChild(li);
    });
});
