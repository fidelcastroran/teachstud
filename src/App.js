import './App.css';
import {Routes, Route} from "react-router-dom";
import  { useState } from 'react';
import UserComponent from './Components/UserComponent';
import AddUser from './Components/AddUser';
import  { data }  from './Data/data';

function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">
       <Routes>
       <Route exact path="/" ><UserComponent user={user} setUser={setUser}/></Route>
       <Route path = "/add/user"><AddUser user={user} setUser={setUser} /></Route>
       
       </Routes>
    </div>
  );
}

export default App;
