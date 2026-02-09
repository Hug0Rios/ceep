import { useState } from "react";
import "./FormularioCadastro.css";

function FormularioCadastro({ onAdicionarNota }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titulo.trim() && descricao.trim()) {
      onAdicionarNota(titulo, descricao);
      setTitulo("");
      setDescricao("");
    }
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          className="formulario-input"
        />
        <textarea
          placeholder="Escreva sua nota"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="formulario-textarea"
        />
        <button type="submit" className="formulario-button">
          Criar Nota
        </button>
      </form>
    </div>
  );
}

export default FormularioCadastro;
