import ChatComponent from "../components/chat/chat.component";
import { ContentProvider } from "../providers/content.provider";

export const ChatContainer = () => {
  return (
    <ContentProvider title="Ask Away My Friend!">
      <ChatComponent />
    </ContentProvider>
  );
};
