"use client";

import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { Button, Flex, Layout } from "antd";
import { useTheme } from "@/src/providers/theme.provider";

const { Header } = Layout;

export const HeaderComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Header
      style={{
        padding: "0 24px",
        backgroundColor: "transparent",
        backdropFilter: "blur(10px)",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Flex
        align="center"
        justify="space-between"
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div style={{ width: 40 }} />

        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "18px",
            fontWeight: 500,
          }}
        >
          Ask Away Mi Amigo!
        </div>

        {/* Theme toggle */}
        <Button
          type="text"
          icon={isDarkMode ? <BulbOutlined /> : <BulbFilled />}
          onClick={toggleTheme}
          style={{
            fontSize: "18px",
          }}
        />
      </Flex>
    </Header>
  );
};
