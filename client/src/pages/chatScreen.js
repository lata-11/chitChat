import React from 'react';
import Navbar from "../components/UI/nav/navbar";
import ShowFriend from "../components/chatWindow/showFriend";
import ShowChat from "../components/chatWindow/showChat";
import '../components/chatWindow/Chat_window.css';
import AddFriend from '../components/chatWindow/addFriend';

function ChatScreen() {
    return (
        <>
            <Navbar/>
            <div class="chat-window">
                <div class="friend-window">
                <ShowFriend/>
                </div>
                <div class="message-window">
                <ShowChat/>
                </div>
                <div class="add-friend">
                 <AddFriend/>
                </div>
            </div>
            
            
        </>
    );
}

export default ChatScreen;
