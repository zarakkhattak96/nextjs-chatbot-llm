"use client";

import {
  UserOutlined,
  GithubOutlined,
  GoogleOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { Flex, Typography } from "antd";
import Link from "next/link";
import { useMemo } from "react";

interface Quote {
  q: string;
  a: string;
  c: string;
  h: string;
}

interface ChatPlaceholderComponentProps {
  initialQuotes: Quote[];
}

export const ChatPlaceholderComponent = ({
  initialQuotes,
}: ChatPlaceholderComponentProps) => {
  const { Text, Title } = Typography;

  const randomQuote = useMemo(
    () => initialQuotes[Math.floor(Math.random() * initialQuotes?.length)],
    [initialQuotes]
  );

  return (
    <>
      <Flex justify="center" align="center" vertical gap={24}>
        <Title level={1}>Ask away my friend!</Title>
      </Flex>

      <Flex vertical justify="center" align="center">
        <Flex align="center" gap={8}>
          <BulbOutlined style={{ fontSize: 24 }} />
          <Text>{randomQuote?.q}</Text>
        </Flex>
      </Flex>

      <Flex justify="center" align="center" gap={16} style={{ marginTop: 32 }}>
        <Link href={"https://www.google.com"} target="_blank">
          <Text>
            <GoogleOutlined style={{ fontSize: 16, marginRight: 8 }} />
            Google
          </Text>
        </Link>

        <Link
          href={"https://github.com/zarakkhattak96/nextjs-chatbot-llm"}
          target="_blank"
        >
          <Text>
            <GithubOutlined style={{ fontSize: 16, marginRight: 8 }} />
            Github Repo
          </Text>
        </Link>

        <Link href={"https://www.github.com/zarakkhattak96"} target="_blank">
          <Text>
            <UserOutlined style={{ fontSize: 16, marginRight: 8 }} />
            Profile
          </Text>
        </Link>
      </Flex>
    </>
  );
};
