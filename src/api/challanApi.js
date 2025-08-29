export async function fetchChallansReal(plate) {
  const res = await fetch(`/api/challans?reg_no=${plate}`);
  if (!res.ok) throw new Error("API Error: " + res.status);
  return await res.json();
}