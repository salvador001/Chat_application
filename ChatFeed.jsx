import { render } from '@testing-library/react';
import { ChatHeader } from 'react-chat-engine';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';


const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

const renderReadReceipts = (message, isMyMessage) => {
    return chat.people.map((person, index) => person.last_read === message.id && (
        <div 
        key={'read_${index}'}
        className="read-receipt"
        style={{
            float: isMyMessage? 'right' : 'left',
             backgroundImage: 'url(${person?.person?.avatar})'
        }}
        />
    ))

}

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key];
            /*if there are messages then find the last message*/
            const lastMessageKey = index === 0 ? null : keys[index - 1];

            const isMyMessage = userName === message.sender.username;
            return (
                <div key={'msg_${index}'} style={{ width: '100%' }}>
                    <div className="message-block">

                        {/*condition for the messages*/

                            isMyMessage    /*if it is my message then */
                                ? <MyMessage message={message} />
                                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />  /*we are passing props of message*/ /*and if it is not */
                        }
                    </div>
                    <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>

                      {renderReadReceipts(message, isMyMessage)}
                    </div>


                </div>
            )

        })


    }
//yha chat people wale me bug ar ah not showing picture //
    if (!chat) return 'Loading...';
    return (
        <div className="chat-feed">

            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    
                    {chat.people.map((person) => '')}

                </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
            <div className="message-form-container">
                <MessageForm {...props} chatId={activeChat} />

            </div>
        </div>
    )
}
/*here ?was used to ensure that we must have chat before we try to acess the title*/
export default ChatFeed;
