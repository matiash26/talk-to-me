type IAnswerIA = {
  answer: string;
};

export default async function fetchIA(
  text: string,
  token: string
): Promise<IAnswerIA> {
  const res = await fetch("http://localhost:3000/api/ia", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reply: text, token }),
  });
  const data = await res.json();
  return data;
}
