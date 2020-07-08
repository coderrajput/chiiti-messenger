import React, {useState} from 'react';

import io from "socket.io-client";

const Context= React.createContext([{},()=>{}]);

const ContextProvider=(props)=>{

    const socket= io.connect('http://localhost:4000/');

    const [state,setState]=useState({
        
        users:[],
        userName:'' ,
        contactNo: 0,
        isVerified: false,
        code: 0,
        socket: socket

    });

    // socket.on('newUsers',(users)=>{
    //     setState({...state,users: users});
    // })

    return (
        <Context.Provider value={[state, setState]}>
            {props.children}
        </Context.Provider>
    );

}


export {Context, ContextProvider};