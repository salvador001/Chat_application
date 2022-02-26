import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';


import './App.css';

const App = () => {
        if (!localStorage.getItem('username')) return <LoginForm / >


            return ( < ChatEngine height = "100vh"
                projectID = "6e127594-b997-4426-ab2b-b8106824e573"
                userName = { localStorage.getItem('username') }
                userSecret = { localStorage.getItem('password') }
                renderChatFeed = {
                    (chatAppProps) => < ChatFeed {...chatAppProps }
                    />} / >
                );
            }

        export default App;