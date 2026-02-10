import { useState } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";
function App() {
  const [notas, setNotas] = useState([
    { id: 1, titulo: "Título", descricao: "Escreva sua nota" },
    { id: 2, titulo: "Título", descricao: "Escreva sua nota" },
    { id: 3, titulo: "Título", descricao: "Escreva sua nota" },
  ]);

  const adicionarNota = (titulo, descricao) => {
    const novaNota = {
      id: notas.length + 1,
      titulo,
      descricao,
    };
    setNotas([...notas, novaNota]);
  };

  return (
    <div className="App">
      <FormularioCadastro onAdicionarNota={adicionarNota} />
      <ListaDeNotas notas={notas} />
    </div>
  );
}

export default App;