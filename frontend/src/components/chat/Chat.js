import React, { useContext} from 'react';
import useManageChat from '../../hooks/useManageChat';
import {Context} from '../../context/Context';
import  UserList from './UsersList/UserList';

const Chat=()=>{
    const [state , setState] = useContext(Context);
    let name= state.userName;
    console.log(state);
    return(
    <div>
    <UserList />
    
    </div>
       
       
       
    );
};

export default Chat;