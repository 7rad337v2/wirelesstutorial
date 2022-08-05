import "axios"
import {useState} from "react"
import axios from "axios";
function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = () =>{
    axios.post("http://10.1.50.89:3001/login",{username,password}).then(e => {  
    alert("Logged In")
    setUsername("")
    setPassword("")
    })
    
  }
  return (
    <div className="d-flex flex-column col-10 col-lg-3 m-auto mt-4">
      <h1 className="text-center">Login</h1>
        <input type= "text" placeholder="Enter email address " onChange={e => setUsername(e.target.value)} value = {username} className = "m-2 p-1"/>
        <input type= "password" placeholder="Enter password " onChange={e => setPassword(e.target.value)} value = {password} className = "m-2 p-1"/>
        <button onClick={handleSubmit} className = "btn btn-primary m-2 p-2">Login</button>
    
    </div>
  );
}

export default App;
