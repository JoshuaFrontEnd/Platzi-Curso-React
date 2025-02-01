import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="e">
      Has completado {completed} de {total} TODOs
    </h1>
  );
}

export { TodoCounter };
