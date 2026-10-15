import { useState } from 'react';

 function ContadorHabitos() {
  const [contador, setContador] = useState(0);

 
  const [nomeHabito, setNomeHabito] = useState('');

  
  const aumentar = () => {
    setContador(prev => prev + 1);
  };

  
  const diminuir = () => {
    setContador(prev => {
      
      return prev > 0 ? prev - 1 : 0;
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Contador de Hábitos</h1>
      
      
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="input-habito" style={{ display: 'block', marginBottom: '8px' }}>
          Digite o nome do hábito:
        </label>
        <input
          id="input-habito"
          type="text"
          value={nomeHabito}
          onChange={(e) => setNomeHabito(e.target.value)}
          placeholder="Ex: Beber água, Ler livro..."
          style={{ padding: '8px', width: '250px' }}
        />
      </div>

      
      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
        <h3>Hábito: {nomeHabito || "<em>Sem nome definido</em>"}</h3>
        <p style={{ fontSize: '18px' }}>
          Progresso: <strong>{contador}</strong> vezes realizado
        </p>
        
        
        <button 
          onClick={diminuir} 
          disabled={contador === 0}
          style={{ padding: '8px 16px', marginRight: '10px', cursor: contador === 0 ? 'not-allowed' : 'pointer' }}
        >
          Diminuir
        </button>
        <button 
          onClick={aumentar} 
          style={{ padding: '8px 16px', cursor: 'pointer' }}
        >
          Aumentar
        </button>
      </div>
    </div>
  );
}

export default ContadorHabitos;