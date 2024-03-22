"use client";
import { useState, useEffect, ChangeEvent } from "react";
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

export default function Home() {
  const [speechRecognition, setSpeechRecognition] = useState(false);
  const [typing, setTyping] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState<IProps[]>([
    { id: 0, text: "type or use voice to talk to me", who: "bot" },
  ]);
  const [synth, setSynth] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (!synth.length) {
      setSynth(speechSynthesis.getVoices());
    }
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
      //não sei a tipagem do event
      recognition.start();
      setSpeechRecognition(speechRecognition);
      recognition.onresult = async (event: any) => {
        const speech = event.results[0][0].transcript;
        setUserMessage(speech);
      };
    }
  }, [userMessage, speechRecognition, synth.length]);

  const handleSend = async () => {
    if (userMessage && !typing) {
      const token = localStorage.getItem("token") as string;
      const id = messages.length;
      setTyping(true);
      setUserMessage("");
      setMessages((prev) => [...prev, { id, text: userMessage, who: "me" }]);
      const IA = await fetchIA(userMessage, token);
      setMessages((prev) => [
        ...prev,
        { id: id + 1, text: IA.answer, who: "bot" },
      ]);
      setTyping(false);
    }
  };

  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    const msg = e.target.value;
    setUserMessage(msg);
  };
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
      <S.listMsg>
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
