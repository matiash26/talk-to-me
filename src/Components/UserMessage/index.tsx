import { useEffect, useRef, memo } from "react";
import * as S from "./styles";

type IProps = {
  message: {
    who: string;
    text: string;
  };
  voice: SpeechSynthesisVoice[];
};

function UserMessage({ message, voice }: IProps): JSX.Element {
  const spokenRef = useRef(false);

  useEffect(() => {
    if (message.who !== "me" && !spokenRef.current) {
      let utterance = new SpeechSynthesisUtterance(message.text);
      utterance.volume = 1;
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.voice = voice[6];
      speechSynthesis.speak(utterance);
      spokenRef.current = true;
    }
  }, [message, voice.length, voice]);

  return (
    <S.container who={message.who}>
      <S.msgContent who={message.who}>
        <S.picture src={message.who === "me" ? "/matias.jpg" : "IA.jpg"} />
        <S.msgContainer>
          <S.userName>{message.who !== "me" && "Matias IA"}</S.userName>
          <S.message who={message.who}>{message.text}</S.message>
        </S.msgContainer>
      </S.msgContent>
    </S.container>
  );
}

export default memo(UserMessage);
