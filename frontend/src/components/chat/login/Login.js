import React ,{useState} from 'react';
import useManageChat from '../../hooks/useManageChat';
import {Redirect} from 'react-router-dom';

import { Link, useHistory } from "react-router-dom";


const Login=()=>{
    const history = useHistory();

    let {manageLogin} = useManageChat();
    let [userName, setUser]= useState('name');
    let [contact, setContact]= useState('91-9XXXXXXXX');
    let [verificationCode, setCode]=useState();
    let [isDetailEntered, setBoolean]= useState(false);    

    let [codeStatus, setStatus]= useState('');

    function handleSubmit(e){
     
        e.preventDefault();
        manageLogin(userName,contact,verificationCode,setStatus);   
       
    }

    const login=(
        <div>
                <div> 
                    <label>Name</label>    
                    <input type="text" value={userName} onChange={(e)=>{setUser(e.target.value)}} />
                </div>
                <div>
                    <label>Mobile Number</label>
                    <input type="number" onChange={(e)=>{setContact(e.target.value)}} />
                </div>

                <a  onClick={(e)=>{setBoolean(true)}}>Next</a>
        </div>
                
    );

    const code =(
        <div>
            <label>Enter the code</label>
            <input  type= "text" onChange={(e)=>{setCode(e.target.value)}}/>
            <button>verify</button>
        </div>
    );


    return(
       
            <form onSubmit={handleSubmit}>
                {!isDetailEntered && !codeStatus? login: code}
                {codeStatus? <Redirect to="/chat"/>: null}
            </form>
        
    );
};
export default Login;