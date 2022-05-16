import { useState} from 'react';

import './App.css';


function dobro(n) {
  return n * 2;
}


function App() {
  const [numero, setNumero] = useState(0);
  const [resposta, setResposta] = useState(0);

function calcularClick() {
  let x = dobro(numero);
  setResposta(x);
}
let Programa = 'Programa dobro'
  return (
    <div className="App">
      <p>VAI CORINTHIANS </p>
      <h2> {Programa} </h2>
      <div>
        <label>numero</label>
        <input type="text" className="Caixa-de-texto"
        value={numero} onChange={e => setNumero(Number(e.target.value))}
        />
      </div>
      <div>
        <button className="botao" onClick = {calcularClick}>Calcular</button>
      </div>
      <div>
        O dobro é <span> {resposta} </span>
      </div>
    </div>
  );
}

export default App;
