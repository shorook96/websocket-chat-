const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.set('views', 'Views');
app.use(express.static('Views'));


app.get('/', (req, res) => {
    return res.render('index.html');
});


io.on('connection', socket => {
    socket.on('send-message', data => {
        io.sockets.emit('send-message', data)
        
    });
});


server.listen(5000,()=>{
    console.log("hello")
});
