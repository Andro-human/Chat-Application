import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = ({user}) => {
    return (
    <div className ="background" style={{height: '100vh', width: "100vw" }}>
        <PrettyChatWindow 
            projectId={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
            username={user.username}
            secret={user.secret}
            style={{ height: "100%" }}
        />
    </div>
    );
  };
  export default ChatsPage;
