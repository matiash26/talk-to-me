import { GoogleGenerativeAI } from "@google/generative-ai";
export async function POST(request: Request) {
  const res = await request.json();
  const reply = res.reply;
  const token = res.token;
  const genAI = new GoogleGenerativeAI(token);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const fetch = await model.generateContent(
    `just reply without special characters: ${reply} `
  );
  const response = fetch.response;
  const text = response.text();
  return Response.json({ answer: text });
}
