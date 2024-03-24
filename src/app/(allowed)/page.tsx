"use client";
import { useState, useEffect, ChangeEvent, useCallback, useRef } from "react";
import { FiSend } from "react-icons/fi";
import UserMessage from "../../Components/UserMessage";
import fetchIA from "@/lib/fetchIA";
import * as S from "./styles";
import Typing from "@/Components/Typing";

type IProps = {
  id: number;
  who: string;
  text: string;
};
const messageInit = {
  id: 0,
  text: "type or use voice to talk to me",
  who: "bot",
};
export default function Home() {
  const [typing, setTyping] = useState(false);
  const [speechRecognition, setSpeechRecognition] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState<IProps[]>([messageInit]);
  const [synth, setSynth] = useState<SpeechSynthesisVoice[]>([]);
  const chatScroll = useRef<HTMLUListElement>();

  const handleSend = useCallback(async () => {
    if (userMessage && !typing) {
      const token = localStorage.getItem("token") as string;
      const id = messages.length;
      setTyping(true);
      setUserMessage("");
      const newMessage = { id, text: userMessage, who: "me" };
      setMessages((prev) => [...prev, newMessage]);
      const IA = await fetchIA([...messages, newMessage], token);
      setMessages((prev) => [
        ...prev,
        { id: id + 1, text: IA.answer, who: "bot" },
      ]);
      setTyping(false);
    }
  }, [messages, typing, userMessage]);

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const msg = e.target.value;
    setUserMessage(msg);
  };
  useEffect(() => {
    document.title = "chatting";

    const sendByKey = (event: KeyboardEvent) => {
      if (event.key === "Enter") handleSend();
    };
    if (chatScroll.current) {
      chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }
    if (!synth.length) {
      setSynth(speechSynthesis.getVoices());
    }
    //ouvir o que está sendo falado
    let recognition: any;
    if (!speechRecognition) {
      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;
      if (!SpeechRecognition) {
        console.error("Speech recognition is not supported in this browser.");
        return;
      }
      recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.start();
      setSpeechRecognition(speechRecognition);
      //não sei a tipagem do event
      recognition.onresult = async (event: any) => {
        const speech = event.results[0][0].transcript;
        setUserMessage((prev) => `${prev} ${speech}`);
      };
    }
    window.addEventListener("keydown", sendByKey);
    return () => window.removeEventListener("keydown", sendByKey);
  }, [userMessage, speechRecognition, handleSend, synth]);
  return (
    <S.main>
      <S.userProfile>
        <S.userPicture src="IA.jpg" />
        <S.userName>
          <p>Matias IA</p>
          <span className="dot">.</span>
          <span>online</span>
        </S.userName>
      </S.userProfile>
      <S.listMsg ref={chatScroll}>
        {messages.map((msg) => (
          <UserMessage key={msg.id} message={msg} voice={synth} />
        ))}
        {typing && <Typing />}
      </S.listMsg>
      <S.chatContainer>
        <S.chat value={userMessage} onChange={handleMessage} />
        <S.record onClick={handleSend}>
          <FiSend />
        </S.record>
      </S.chatContainer>
    </S.main>
  );
}
