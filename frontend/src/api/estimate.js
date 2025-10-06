export const getEstimate = async (data) => {
  const res = await fetch('http://localhost:5000/api/estimate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  return res.json();
};
