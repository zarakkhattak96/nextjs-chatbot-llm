"use client";

import { Button, Flex, Input, theme } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTheme } from "@/src/providers/theme.provider";
import { SendOutlined } from "@ant-design/icons";
import { ChatPlaceholderComponent } from "./chatPlaceholder.component";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
}

interface Quote {
  q: string;
  a: string;
  c: string;
  h: string;
}

interface ChatComponentProps {
  initialQuotes: Quote[];
}

const ChatComponent = ({ initialQuotes }: ChatComponentProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { isDarkMode } = useTheme();
  const { useToken } = theme;
  const { token } = useToken();

  const handleSend = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: uuidv4(), text: message, sender: "user" },
      ]);
      setMessage("");
      // TODO: Add bot response logic here
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSend(e);
    }
  };

  const backgroundColor = isDarkMode ? token.colorBgContainer : "#f5f5f5";

  return (
    <Flex
      vertical
      style={{
        height: "100%",
        backgroundColor,
        borderRadius: token.borderRadius,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Flex
        vertical
        style={{
          padding: "20px",
          overflowY: "auto",
          flexGrow: 1,
          paddingBottom: "100px",
        }}
      >
        {messages.map((msg) => (
          <Flex
            key={msg.id}
            justify={msg.sender === "user" ? "flex-end" : "flex-start"}
            style={{ marginBottom: "12px" }}
          >
            <div
              style={{
                maxWidth: "70%",
                padding: "12px 16px",
                borderRadius: token.borderRadiusLG,
                backgroundColor:
                  msg.sender === "user"
                    ? token.colorPrimary
                    : isDarkMode
                    ? token.colorBgElevated
                    : token.colorBgContainer,
                color:
                  msg.sender === "user"
                    ? token.colorTextLightSolid
                    : token.colorText,
                boxShadow: token.boxShadow,
              }}
            >
              {msg.text}
            </div>
          </Flex>
        ))}
        {messages.length === 0 && (
          <Flex
            vertical
            justify="center"
            align="center"
            style={{ height: "100%" }}
          >
            <ChatPlaceholderComponent initialQuotes={initialQuotes} />
          </Flex>
        )}
      </Flex>

      <Flex
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          background: `linear-gradient(180deg, transparent, ${backgroundColor} 20%)`,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            backgroundColor,
            borderRadius: token.borderRadiusLG,
            boxShadow: token.boxShadowTertiary,
          }}
        >
          <Input.TextArea
            placeholder="Ask away my friend!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={handleKeyPress}
            size="large"
            autoSize={false}
            rows={1}
            style={{
              paddingRight: "60px",
              border: "none",
              backgroundColor: "transparent",
              resize: "none",
              height: "50px",
              overflow: "auto",
            }}
          />
          <Button
            type="primary"
            onClick={handleSend}
            icon={
              <SendOutlined color={isDarkMode ? token.colorText : "black"} />
            }
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          />
        </div>
      </Flex>
    </Flex>
  );
};

export default ChatComponent;
