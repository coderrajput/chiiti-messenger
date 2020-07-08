const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors= require('cors');
const app = express();
const server = http.createServer(app);

const verifyCode='baba';


let users=[];

const whitelist = ['http://localhost:3000','http://localhost:4000'];
const corsOptions = {
  credentials: true, // This is important.
  origin: (origin, callback) => {
    if(whitelist.includes(origin))
      return callback(null, true)

      callback(new Error('Not allowed by CORS'));
  }
}

app.use(cors(corsOptions));

const io = socketio(server);

io.on('connection',socket=>{
  
  //to verify user on login and save credentials  
  socket.on('verifyUser',({username,contactNo,code})=>{
    let owner={};
        //console.log(username, contactNo, code);
        if(code===verifyCode){
          owner.socketId= socket.id;
          owner.name= username;
          owner.contactNo=contactNo;
          //console.log(owner);
          users.push(owner); 
          console.log(users.length);
          console.log(users);
          socket.emit('codeStatus',[true , owner]);
          socket.emit('newUsers',users);
        }else {
          socket.emit('codeStatus',false);
        }
    });

    socket.on('newUsers',({})=>{

      socket.emit('newUsers',users);

    });


})


const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


