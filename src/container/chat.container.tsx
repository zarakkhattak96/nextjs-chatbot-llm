"use client";

import { fetchQuotesAction } from "../actions/quotes.action";
import ChatComponent from "../components/chat/chat.component";
import { ContentProvider } from "../providers/content.provider";
import { useAction } from "../hooks/useAction";
import { Spin } from "antd";

export const ChatContainer = () => {
  const { data: quotes, isLoading, error } = useAction(fetchQuotesAction);

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (error) {
    console.error("Error loading quotes:", error);
  }

  return (
    <ContentProvider title="Ask Away My Friend!">
      <ChatComponent initialQuotes={quotes || []} />
    </ContentProvider>
  );
};
