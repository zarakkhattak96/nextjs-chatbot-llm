import "@/src/styles/global.style.css";
import "@ant-design/v5-patch-for-react-19";

import { App } from "antd";
import { ConfigProvider } from "antd";
import { theme } from "@/src/theme";
import { AntdStylesProvider } from "../providers/antdStyles.provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <AntdStylesProvider>
          <ConfigProvider theme={theme.lightTheme}>
            <App />
          </ConfigProvider>
        </AntdStylesProvider>
      </body>
    </html>
  );
}
