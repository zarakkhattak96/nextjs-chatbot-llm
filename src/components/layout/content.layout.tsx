import { Layout, theme } from "antd";

import type { CSSProperties, FC, PropsWithChildren } from "react";

export const ContentLayout: FC<PropsWithChildren> = (props) => {
  const { token } = theme.useToken();

  const headerHeight = 110;

  const commonContentStyle: CSSProperties = {
    padding: token.paddingLG,
    background: token.colorBgContainer,
    borderRadius: token.borderRadiusLG,
    border: `1px solid ${token.colorBorder}`,
    height: global?.window && window.innerHeight - headerHeight,
    overflowY: "auto",
  };

  return (
    <Layout.Content style={commonContentStyle}>{props.children}</Layout.Content>
  );
};
