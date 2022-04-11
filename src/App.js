
import mainContext from "./context/mainContext";
import Toolbar from "./Components/Toolbar";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./Components/pages/RegisterPage";
import LoginPage from "./Components/pages/LoginPage";
import ProtectedRoot from './ProtectedRoote';
import React from 'react';

import './trello-clone.css';
import Main from "./main";



const App = () => {

    const [getUsers, setUsers] = useState([])
    const [getCurrentUser, setCurrentUser] = useState(null)
    const [getPage, setPage] = useState("")
    return (
      <>
            <mainContext.Provider value={{getUsers, setUsers, getCurrentUser, setCurrentUser}}>
            
                 <BrowserRouter>
                   <Toolbar user={getCurrentUser} setUser={setCurrentUser} page={getPage}  />
                    <Routes>  
                   
                     <Route path="/register" element={<RegisterPage setPage={setPage}/>}/>
                           <Route path="/login" element={<LoginPage setPage={setPage}/>}/>
                           <Route  path="/" element={<ProtectedRoot isAllowed={true}></ProtectedRoot>} >
                        <Route path="/main" element={<Main/>} />         
                  </Route>          
                    </Routes>
                </BrowserRouter>
             </mainContext.Provider>
      </>
    );
  }
  export default App
  
  
  