import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import {ContextProvider} from './context/Context';


import Login from './components/login/Login';
import Chat from './components/chat/Chat';

function App() {
  return (
    <>
      <ContextProvider>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>

          <Route path="/chat">
            <Chat />
          </Route>
        
        </Switch>
      </ContextProvider>
    </>
  );
}

export default App;
