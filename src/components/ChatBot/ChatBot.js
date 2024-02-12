import React, { useEffect, useRef } from 'react';

const Chatbot = () => {
  const chatRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Myat's Assistant Bot",
        "botId": "c405d92f-1086-4a36-902b-dccae832bd9b",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "c405d92f-1086-4a36-902b-dccae832bd9b",
        "webhookId": "49569269-7fcf-4e21-8ae3-3f19e42495d2",
        "lazySocket": true,
        "themeName": "prism",
        "botName": "Myat's Assistant Bot",
        "avatarUrl": "https://i.postimg.cc/0QYCYHwV/image.jpg",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/62beeeae-26ab-4a6c-a07d-1e7ad4b3fd79/v72907/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "theme": "prism",
        "themeColor": "#2563eb"
    });

      // Attach click event to open the chat when the icon is clicked
      const chatIcon = document.getElementById('chatIcon');
      if (chatIcon) {
        chatIcon.addEventListener('click', handleChatIconClick);
      }

      // Close chat on click outside
      document.addEventListener('click', handleClickOutside);
    };

    return () => {
      const chatIcon = document.getElementById('chatIcon');
      if (chatIcon) {
        chatIcon.removeEventListener('click', handleChatIconClick);
      }

      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChatIconClick = () => {
    window.botpressWebChat.sendEvent({ type: 'toggle' });
    window.botpressWebChat.sendEvent({ type: 'createConversation' })

  };

  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      window.botpressWebChat.sendEvent({ type: 'hide' });
    }
  };

  return (
    <>
      {/* Your chat icon that triggers the chat */}
      <div id="chatIcon"></div>

      {/* Chatbot container */}
      <div id="webchat" ref={chatRef} />
    </>
  );
};

export default Chatbot;
