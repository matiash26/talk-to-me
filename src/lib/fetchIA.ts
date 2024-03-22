type IAnswerIA = {
  answer: string;
};

export default async function fetchIA(
  text: string,
  token: string
): Promise<IAnswerIA> {
  const api = process.env.NEXT_PUBLIC_URL_API as string;
  const res = await fetch(api + "ia", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reply: text, token }),
  });
  const data = await res.json();
  return data;
}
