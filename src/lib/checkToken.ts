type ICheck = {
  permission: boolean;
};

export default async function checkToken(token: string): Promise<ICheck> {
  const res = await fetch("http://localhost:3000/api/checkToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return data;
}
