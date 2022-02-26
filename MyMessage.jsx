const MyMessage = ({message}) => {
    /*this if is render the msg if msg is img*/
    if(message?.attachments?.length > 0){
        return(
            <img 
            src={message.attachments[0].file} 
            alt="message-attachment"
            className="message-image"
            style={{float: 'right' }}
            
            />
        )
    }
   /* <---------- false of img and given some styles-------*/
    return(
        <div className="message" style={{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#254158', marginTop:'15px' }}>
    
            {message.text}
        </div>
    )
    }
    
    
    export default MyMessage;
    