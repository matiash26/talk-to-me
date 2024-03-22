type ICheck = {
  permission: boolean;
};

export default async function checkToken(token: string): Promise<ICheck> {
  const api = process.env.NEXT_PUBLIC_URL_API as string;
  const res = await fetch(api + "checkToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return data;
}
