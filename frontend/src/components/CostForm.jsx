import React, { useState } from 'react';
import { getEstimate } from '../api/estimate';

function CostForm() {
  const [form, setForm] = useState({
    length: '', lanes: '', terrain: '', pavement: '', location: ''
  });
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await getEstimate(form);
    setResult(res.result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="length" placeholder="Length (km)" onChange={handleChange} />
        <input name="lanes" placeholder="Lanes" onChange={handleChange} />
        <input name="terrain" placeholder="Terrain (flat/hilly)" onChange={handleChange} />
        <input name="pavement" placeholder="Pavement type" onChange={handleChange} />
        <input name="location" placeholder="Location/Region" onChange={handleChange} />
        <button type="submit">Estimate</button>
      </form>

      <pre>{result}</pre>
    </div>
  );
}

export default CostForm;
