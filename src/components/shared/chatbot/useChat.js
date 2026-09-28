import { useEffect, useRef, useState } from "react";

const API_URL = import.meta.env.PUBLIC_CHATBOT_API_URL;

// Los mensajes fijos del bot guardan la clave de traducción en vez del texto,
// así cambian de idioma junto con la página. No se envían como historial a la IA.
const INITIAL_MESSAGE = { from: "bot", key: "chat.welcome" };

export function useChat(isOpen) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, isOpen]);

  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const history = messages;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);

    if (!API_URL) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", key: "chat.notConnected" },
      ]);
      return;
    }

    setIsTyping(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        data.reply ? { from: "bot", text: data.reply } : { from: "bot", key: "chat.noReply" },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", key: "chat.error" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return { messages, isTyping, sendMessage, messagesEndRef };
}
