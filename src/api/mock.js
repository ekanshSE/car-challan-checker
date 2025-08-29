export const sampleMockDatabase = {
  "MH12AB1234": [
    { id: "CH-2025-0001", date: "2025-07-09", offence: "Speeding", amount: 2000, paid: false }
  ]
};

export async function fetchChallansMock(plate) {
  await new Promise(r => setTimeout(r, 400));
  return sampleMockDatabase[plate] || [];
}