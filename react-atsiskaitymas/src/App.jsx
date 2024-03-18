import React from 'react';


const seaPlaners = [
  { id: 1, type: "man", name: 'Linas', color: "blue" },
  { id: 2, type: "car", name: 'Opel', color: "red" },
  { id: 3, type: "animal", name: 'Vilkas', color: "green" },
  { id: 4, type: "fish", name: 'Ungurys', color: "yellow" },
  { id: 5, type: "man", name: 'Tomas', color: "green" },
  { id: 6, type: "animal", name: 'Bebras', color: "red" },
  { id: 7, type: "animal", name: 'Barsukas', color: "green" },
  { id: 8, type: "car", name: 'BMW', color: "blue" },
  { id: 1, type: "car", name: 'ZIL', color: "red" },
  { id: 1, type: "man", name: 'Teta Zita', color: "yellow" },

];


const Bala = () => {
  return (
    <div>
      <h2>Sea Planers</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {seaPlaners.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tvenkinys = () => {
  return (
    <div>
      <h2>Tvenkinys</h2>
      <div>
        <h3>Pirmas Daiktas</h3>
        <Daiktas id={2} />
      </div>
      <div>
        <h3>Antras Daiktas</h3>
        <Daiktas id={3} />
      </div>
    </div>
  );
};

const Valtis = ({ name }) => {
  return <p>Valtis: {name}</p>;
};

const Laivas = ({ name }) => {
  return <p>Laivas: {name}</p>;
};

const Sala = ({ name }) => {
  return <p>Sala: {name}</p>;
};

const Jura = () => {
  return (
    <div>
      <h2>Jūra</h2>
      {seaPlaners.map(item => {
        switch (item.type) {
          case "man":
            return <Valtis key={item.id} name={item.name} />;
          case "car":
            return <Laivas key={item.id} name={item.name} />;
          case "animal":
            return <Sala key={item.id} name={item.name} />;
          case "fish":
            return <p key={item.id}>Jūra: {item.name}</p>;
          default:
            return null;
        }
      })}
    </div>
  );
};

const App = () => {
  return <Jura />;
};

const Vardas = () => {
  const sortedSeaPlaners = seaPlaners.slice().sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <h2>Vardas</h2>
      {sortedSeaPlaners.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

const Tipai = () => {
  const sortedSeaPlaners = seaPlaners.slice().sort((a, b) => a.type.localeCompare(b.type));
  return (
    <div>
      <h2>Tipai</h2>
      {sortedSeaPlaners.map(item => (
        <p key={item.id}>{item.type}</p>
      ))}
    </div>
  );
};

const Spalvos = () => {
  const sortedSeaPlaners = seaPlaners.slice().sort((a, b) => a.color.localeCompare(b.color));
  return (
    <div>
      <h2>Spalvos</h2>
      {sortedSeaPlaners.map(item => (
        <p key={item.id}>{item.color}</p>
      ))}
    </div>
  );
};

const Vandenynas = () => {
  return (
    <div>
      <h1>Vandenynas</h1>
      <Vardas />
      <Tipai />
      <Spalvos />
    </div>
  );
};


export default Bala;
// export default Pasaulis;
// export default Vandenynas;
// export default App;


