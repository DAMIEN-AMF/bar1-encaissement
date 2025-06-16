import { useState } from 'react';

const products = [
  { name: 'Pepsi 33cl', price: 4 },
  { name: 'Ice Tea 33cl', price: 4 },
  { name: 'Red Bull 25cl', price: 5 },
  { name: 'Pinte Fada Blonde 50cl', price: 8 },
];

const App = () => {
  const [selected, setSelected] = useState(null);
  const [payment, setPayment] = useState(null);
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([]);

  const encaisser = () => {
    if (!selected || !payment) return;
    setTotal(t => t + selected.price);
    setHistory(h => [...h, { ...selected, payment }]);
    setSelected(null);
    setPayment(null);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Encaissement – Bar 1</h1>
      <h2>Total : {total}€</h2>
      <div>
        {products.map((p) => (
          <button key={p.name} onClick={() => setSelected(p)} style={{ margin: 4 }}>
            {p.name} – {p.price}€
          </button>
        ))}
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setPayment('CB')} style={{ margin: 4 }}>CB</button>
        <button onClick={() => setPayment('Espèces')} style={{ margin: 4 }}>Espèces</button>
      </div>
      <button onClick={encaisser} disabled={!selected || !payment} style={{ marginTop: 10 }}>
        Encaisser
      </button>
      <ul>
        {history.map((h, i) => (
          <li key={i}>{h.name} – {h.price}€ ({h.payment})</li>
        ))}
      </ul>
    </div>
  );
};

export default App;