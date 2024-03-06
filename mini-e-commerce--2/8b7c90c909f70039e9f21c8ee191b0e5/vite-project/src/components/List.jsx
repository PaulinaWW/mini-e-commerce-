import React, { useState } from 'react';
import ListItem from './ListItem';

const List = ({ data }) => {
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      {items.map(item => (
        <ListItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
};

export default List;
