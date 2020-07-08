import React , {useState} from 'react';
import useManageChat from '../../../hooks/useManageChat';


const UserList = ()=>{
    console.log('userlist');
    let fetching= true;
    let [users, setUsers]= useState([]);
    const {socket}= useManageChat();
    console.log(socket);
    //let users=[];
    socket.emit('newUsers',{});

    socket.on('newUsers',(value)=>{
        console.log('bhai',value);
        setUsers(value);
        fetching=false;
    });

    
    
    return(
        <div>
        {fetching?users.map((user,index)=>{ return(<div key={index}>{user.name}</div>)}): 'loading'}
        </div>
    );
};

export default UserList;