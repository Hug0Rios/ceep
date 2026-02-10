function CardNota({ titulo, descricao }) {
  return (
    <div className="nota-card">
      <h3 className="nota-titulo">{titulo}</h3>
      <p className="nota-descricao">{descricao}</p>
    </div>
  );
}

export default CardNota;