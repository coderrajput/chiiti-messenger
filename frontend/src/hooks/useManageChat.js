import React, { useContext} from 'react';
import {Context} from '../context/Context';



const useManageChat=()=>{
    const [state , setState] = useContext(Context);
   
    let owner= state.userName;
    let users= [...state.users];
    let ownerContactNo= state.contactNo;
    let isVerified= state.isVerified;
    let verificationCode= state.code;
    const socket = state.socket;

    //manane the user login
    function manageLogin(username, contactNo, code, callback){
    
        //onsole.log(state);
        //console.log(username, contactNo , code);
        socket.emit('verifyUser',{username, contactNo, code});

        socket.on('codeStatus', (msg)=>{
            //console.log('babaji',msg);
            //let username, contactNo;
            // fetchUsers();
            owner= msg[1].name;
            ownerContactNo=msg[1].contactNo;
            console.log(username, contactNo);
            //let owner= msg[1];
            setState({...state,userName: owner, contactNo: ownerContactNo, isVerified: true});
            console.log(state);
            //console.log(owner);
            callback(msg[0]);
            //console.log(state);
            
        });
    }

  
    //function to fetch the users list
    // function fetchUsers(){

    //     socket.on('newUsers',(newUsers)=>{
    //         users=newUsers;
    //         setState({...state, users: users})
           
    //     })
    // }

    return {
        manageLogin,
        socket,
    }
};

export default useManageChat;
