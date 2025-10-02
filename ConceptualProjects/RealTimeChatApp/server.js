const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

let onlineUsers = []; // store users {username, color}

// Generate random color for user
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

io.on('connection', (socket) => {
    console.log('A user connected');

    // New user joined
    socket.on('new user', (username) => {
        const userColor = getRandomColor();
        onlineUsers.push({ id: socket.id, username, color: userColor });
        io.emit('online users', onlineUsers);
    });

    // Chat message
    socket.on('chat message', (data) => {
        const user = onlineUsers.find(u => u.username === data.username);
        io.emit('chat message', { username: data.username, message: data.message, color: user.color });
    });

    // User disconnected
    socket.on('disconnect', () => {
        onlineUsers = onlineUsers.filter(u => u.id !== socket.id);
        io.emit('online users', onlineUsers);
        console.log('User disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
