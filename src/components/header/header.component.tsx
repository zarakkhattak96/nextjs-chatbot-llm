"use client";

import { BulbOutlined, BulbFilled } from "@ant-design/icons";
import { Button, Flex, Layout, theme } from "antd";
import { useTheme } from "@/src/providers/theme.provider";

const { Header } = Layout;

export const HeaderComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { token } = theme.useToken();

  return (
    <Header
      style={{
        backgroundColor: "transparent",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "auto",
      }}
    >
      <Flex
        justify="center"
        style={{
          padding: "24px",
          display: "flex",
          justifySelf: "center",
          width: "90%",

          backgroundColor: isDarkMode ? token.colorBgContainer : "#f5f5f5",
          borderRadius: token.borderRadius,
          boxShadow: token.boxShadowTertiary,
        }}
      >
        <Flex
          align="center"
          justify="space-between"
          style={{
            width: "100%",
            maxWidth: "500px",
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

          <Button
            type="text"
            icon={isDarkMode ? <BulbOutlined /> : <BulbFilled />}
            onClick={toggleTheme}
            style={{
              fontSize: "18px",
            }}
          />
        </Flex>
      </Flex>
    </Header>
  );
};
