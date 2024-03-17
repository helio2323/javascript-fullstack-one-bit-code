import React from 'react';

const ListaComponent = ({ itens }) => {
  return (
    <ul>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaComponent;
