"use client";

import { Flex, Spin, theme } from "antd";
import { createContext, useContext, useEffect, useState } from "react";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [cache] = useState(() => createCache());
  const { token } = theme.useToken();

  useServerInsertedHTML(() => (
    <style
      id="antd"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));

  useEffect(() => {
    // Simulate checking if styles are loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <StyleProvider cache={cache}>
        <Flex
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: token.colorBgContainer,
          }}
          justify="center"
          align="center"
        >
          <Spin size="large" />
        </Flex>
      </StyleProvider>
    );
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <StyleProvider cache={cache}>{children}</StyleProvider>
    </LoadingContext.Provider>
  );
}
