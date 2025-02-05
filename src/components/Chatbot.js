import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = () => {
        if (input.trim() === "") return; // Prevent empty messages
        setMessages([...messages, { text: input, type: "user" }]);
        setInput("");

        // Simulate bot response
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Hi, I'm VeggieBot! How can I help?", type: "bot" },
            ]);
        }, 1000);
    };

    // Handle enter key press
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-toggle" onClick={toggleChatbot}>
                💬 Chat
            </button>

            {isOpen && (
                <div className="chatbot-box">
                    <div className="chatbot-header">
                        Chatbot
                        <button className="close-btn" onClick={toggleChatbot}>✖</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`chat-message ${msg.type}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress} // Listen for Enter key
                            placeholder="Type a message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
