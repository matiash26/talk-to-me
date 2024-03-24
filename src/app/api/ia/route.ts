import { GoogleGenerativeAI } from "@google/generative-ai";
type IProps = {
  id: number;
  who: string;
  text: string;
};

type IRequest = {
  reply: IProps[];
  token: string;
};

export async function POST(request: Request) {
  const res = await request.json();
  const body = res as IRequest;
  const reply = body.reply;
  const arrangingTheText = reply
    .map((el, x) => {
      if (x === reply.length - 1) {
        return `*LAST MESSAGE* (user):${el.text}`;
      }
      return `${el.who === "bot" ? "(you)" : `(user)`}: ${el.text}`;
    })
    .join(" - ");
  const token = res.token;
  const genAI = new GoogleGenerativeAI(token);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const fetch = await model.generateContent(
    `Previous messages: ${arrangingTheText}`
  );
  const response = fetch.response;
  const text = response.text();
  return Response.json({ answer: text });
}
