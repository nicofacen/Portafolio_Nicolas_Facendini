import { useEffect, useRef, useState } from "react";

const TYPING_MS = 700;

// El mensaje de bienvenida guarda la clave de traducción y las preguntas/respuestas guardan
// el id de la pregunta, así cambian de idioma junto con la página.
const INITIAL_MESSAGE = { from: "bot", key: "chat.welcome" };

export function useChat(isOpen) {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping, isOpen]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const ask = (faqId) => {
    if (isTyping) return;

    setMessages((prev) => [...prev, { from: "user", faqId, part: "q" }]);
    setIsTyping(true);
    timer.current = setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", faqId, part: "a" }]);
      setIsTyping(false);
    }, TYPING_MS);
  };

  return { messages, isTyping, ask, messagesEndRef };
}
