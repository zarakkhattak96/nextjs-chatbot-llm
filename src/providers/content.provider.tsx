"use client";

import { Flex, theme } from "antd";

import type { FC, PropsWithChildren } from "react";
import { HeaderLayout } from "../components/layout/header.layout";
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
        height: "100%",
        gap: token.marginSM,
        padding: token.paddingSM,
      }}
    >
      <HeaderLayout
        title={props.title}
        handleBack={props.handleBack}
        isBack={props.isBack}
      />
      <ContentLayout>{props.children}</ContentLayout>
    </Flex>
  );
};
