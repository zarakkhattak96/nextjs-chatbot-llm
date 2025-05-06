import { Layout, theme } from "antd";

import type { CSSProperties, FC, PropsWithChildren } from "react";

export const ContentLayout: FC<PropsWithChildren> = (props) => {
  const { token } = theme.useToken();

  const commonContentStyle: CSSProperties = {
    padding: token.paddingLG,
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    height: "calc(100vh - 123px)", // Account for header and margins
    overflowY: "hidden",
  };

  return (
    <Layout.Content style={commonContentStyle}>{props.children}</Layout.Content>
  );
};
