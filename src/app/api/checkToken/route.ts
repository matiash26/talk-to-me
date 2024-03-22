import { GoogleGenerativeAI } from "@google/generative-ai";
export async function POST(request: Request) {
  const res = await request.json();
  if (res?.token) {
    try {
      const genAI = new GoogleGenerativeAI(res.token);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const fetch = await model.generateContent(`can you say test?`);
      return Response.json({ permission: true });
    } catch (error) {
      return Response.json({ permission: false });
    }
  }
  return Response.json({ permission: false });
}
