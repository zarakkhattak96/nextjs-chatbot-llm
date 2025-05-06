"use client";

import { useState } from "react";

import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import { useServerInsertedHTML } from "next/navigation";

export const AntdStylesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cache] = useState(() => createCache());
  useServerInsertedHTML(() => (
    <style
      id="antd"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }}
    />
  ));

  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};
