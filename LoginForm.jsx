import { useState } from "react";
import axios from "axios";



const LoginForm = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
   const [error, setError]  = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID':"6e127594-b997-4426-ab2b-b8106824e573", 'User-Name' : username, 'User-Secret':password}
//agar try and catch block use ho to usse uper wala function async hona chahiye 
try{
        //username \ password => chat engine -> give message
await axios.get('https://api.chatengine.io/chats', { headers: authObject});
localStorage.setItem('username', username);
localStorage.setItem('password', password);

window.location.reload();


 //works out -> logged in 

} catch(error){
     setError('Oops, incorrect credentials.')
  // error -> try with new username.... 
  
    

}
 


       
      
    }
    return(
<div className="wrapper">

<div className="form">
    <h1 className="title">Talk n Vibe</h1>
    <form onSubmit={handleSubmit}>

<input type="text" value={username} onChange={(e) =>  setUsername(e.target.value)}  className="input" placeholder="Username" required />
<input type="password" value={password} onChange={(e) =>  setPassword(e.target.value)}  className="input" placeholder="Password" required />
<div align="center">
    <button type="submit" className="button">

        <span>Bang the Party</span>
    </button>
</div>
<h2 className="error"> {error}</h2>
    </form>
</div>


</div>
    );


}
export default LoginForm