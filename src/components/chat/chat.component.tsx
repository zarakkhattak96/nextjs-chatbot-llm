"use client";

import { Button, Flex, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prev) => [...prev, { text: message, sender: "user" }]);
      setMessage("");
      // TODO: Add bot response logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSend(e);
    }
  };

  return (
    <Flex
      vertical
      style={{
        position: "relative",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Flex
        vertical
        style={{
          padding: "20px",
          overflowY: "auto",
          flexGrow: 1,
          marginBottom: "80px",
        }}
      >
        {messages.map((msg) => (
          <Flex
            key={uuidv4()}
            justify={msg.sender === "user" ? "flex-end" : "flex-start"}
            style={{ marginBottom: "12px" }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: "16px",
                backgroundColor: msg.sender === "user" ? "#1677ff" : "#fff",
                color: msg.sender === "user" ? "#fff" : "#000",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {msg.text}
            </div>
          </Flex>
        ))}
      </Flex>

      <Flex
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px",
          backgroundColor: "#fff",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
        }}
        gap={12}
      >
        <Input.TextArea
          placeholder="Ask away my friend!"
          autoSize={{ minRows: 1, maxRows: 4 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={handleKeyPress}
          style={{ flexGrow: 1 }}
        />
        <Button type="primary" onClick={handleSend}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChatComponent;
