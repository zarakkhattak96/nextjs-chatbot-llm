"use client";

import { Flex, theme } from "antd";
import type { FC, PropsWithChildren } from "react";
import dynamic from "next/dynamic";

const ContentLayout = dynamic(
  () =>
    import("../components/layout/content.layout").then(
      (mod) => mod.ContentLayout
    ),
  {
    ssr: false,
  }
);

interface IProps {
  title: string;
  handleBack?: () => void;
  isBack?: boolean;
}

export const ContentProvider: FC<PropsWithChildren<IProps>> = (props) => {
  const { token } = theme.useToken();

  return (
    <Flex
      vertical
      style={{
        gap: token.marginSM,
        padding: token.paddingSM,
        height: "100%",
        minHeight: "calc(100vh - 140px)", // Match ContentLayout height
      }}
    >
      <ContentLayout>{props.children}</ContentLayout>
    </Flex>
  );
};
