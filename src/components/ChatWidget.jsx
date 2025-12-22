import React, { useEffect, useState } from 'react';

const ChatWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay loading the heavy CustomGPT script to improve initial page load performance (LCP/TBT)
    const loadScript = () => {
      if (isLoaded || document.getElementById('customgpt-chat-script')) return;
      
      setIsLoaded(true);
      const script = document.createElement('script');
      script.id = 'customgpt-chat-script';
      script.src = "https://cdn.customgpt.ai/js/chat.js";
      script.defer = true;
      
      script.onload = () => {
        if (window.CustomGPT) {
          window.CustomGPT.init({
            p_id: '88174',
            p_key: '753d22f90965230c7eac8e489e242b9b'
          });
        }
      };

      document.body.appendChild(script);
    };

    // Load on idle/timeout (4s) or user interaction
    const timer = setTimeout(loadScript, 4000);
    const handleInteraction = () => {
      loadScript();
      cleanup();
    };

    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { once: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });

    // Cleanup function to remove the widget when component unmounts
    return () => {
      cleanup();
      // Remove the script tag
      const existingScript = document.getElementById('customgpt-chat-script');
      if (existingScript) {
        existingScript.remove();
      }

      // Attempt to remove the injected widget container
      const widget = document.getElementById('customgpt_chat_widget');
      if (widget) widget.remove();
      
      const iframes = document.querySelectorAll('body > iframe');
      iframes.forEach(iframe => {
        if (iframe.src && iframe.src.includes('customgpt.ai')) {
          iframe.remove();
        }
      });
    };
  }, [isLoaded]);

  // This component doesn't render any visible React UI, it just manages the external script
  return null;
};

export default ChatWidget;