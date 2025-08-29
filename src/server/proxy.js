import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 5000;

// Example proxy route (replace with real RTO API)
app.get('/api/challans', async (req, res) => {
  const { reg_no } = req.query;
  // Here you would call the real Govt RTO API securely
  // Example: const response = await fetch(`https://gov-rto.example/api?reg=${reg_no}`);
  // const data = await response.json();
  // For demo, return mock
  res.json({ challans: [{ id: 'DEMO-001', date: '2025-01-01', offence: 'Demo offence', amount: 500, paid: false }] });
});

app.listen(PORT, () => console.log(`Proxy server running at http://localhost:${PORT}`));