import "./ListaDeNotas.css";

function ListaDeNotas({ notas }) {
  return (
    <div className="lista-container">
      <div className="notas-grid">
        {notas.map((nota) => (
          <div key={nota.id} className="nota-card">
            <h3 className="nota-titulo">{nota.titulo}</h3>
            <p className="nota-descricao">{nota.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaDeNotas;
