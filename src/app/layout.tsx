"use client";

import "@/src/styles/global.style.css";
import "@ant-design/v5-patch-for-react-19";
import { ThemeProvider } from "@/src/providers/theme.provider";
import { LoadingProvider } from "@/src/providers/loading.provider";
import { HeaderComponent } from "@/src/components/header/header.component";
import { Layout, Flex } from "antd";

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
            <Layout>
              <HeaderComponent />
              <Flex justify="center">
                <Content
                  style={{
                    marginTop: 100,
                    padding: "0 24px",
                    width: "100%",
                    maxWidth: "1200px",
                  }}
                >
                  {children}
                </Content>
              </Flex>
            </Layout>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
