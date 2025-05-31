
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div style={{ padding: '2rem', color: '#004085', backgroundColor: '#e9f5ff' }}>
      <h1>Painel LexMind V4</h1>
      <p>Autenticação, filtro e conexão com API prontos!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
