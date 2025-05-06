import { Flex, Layout, theme, Typography } from "antd";

import type { FC } from "react";

interface IProps {
  title: string;
  handleBack?: () => void;
  isBack?: boolean;
}

export const HeaderLayout: FC<IProps> = (props) => {
  const { token } = theme.useToken();
  const { Text } = Typography;

  return (
    <Layout.Header
      style={{
        borderRadius: 12,
        border: `1px solid ${token.colorBorder}`,
        paddingInline: token.paddingLG,
        paddingBlock: token.paddingSM,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        background: token.colorBgContainer,
        height: 66,
      }}
    >
      <Flex justify={"space-between"}>
        <Flex gap={6}>
          <Flex vertical>
            <Text strong>{props.title}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};
