"use client";

import "@/src/styles/global.style.css";
import "@ant-design/v5-patch-for-react-19";
import { ThemeProvider } from "@/src/providers/theme.provider";
import { LoadingProvider } from "@/src/providers/loading.provider";
import { HeaderComponent } from "@/src/components/header/header.component";
import { Layout } from "antd";

const { Content } = Layout;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoadingProvider>
          <ThemeProvider>
            <Layout style={{ minHeight: "100vh" }}>
              <HeaderComponent />
              <Content
                style={{
                  marginTop: 64,
                  padding: "24px",
                  height: "calc(100vh - 64px)",
                }}
              >
                {children}
              </Content>
            </Layout>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
