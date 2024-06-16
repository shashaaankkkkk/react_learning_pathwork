import React from 'react';

function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
