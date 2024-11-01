function App() {
  const items = [  { title: 'Cabbage', category: 'veg', id: 1 },
    { title: 'Brinjal', category: 'veg', id: 2 },
    { title: 'Tomato', category: 'veg', id: 3 },
    { title: 'Mutton', category: 'non-veg', id: 4 },
    { title: 'Fish', category: 'non-veg', id: 5 },
    { title: 'Chicken', category: 'non-veg', id: 6 },

  ];

  const vegItems = items.filter(item => item.category === 'veg');
  const nonvegItems = items.filter(item => item.category === 'non-veg');

  const allItems = items.map((item, index) => (
    <li key={item.id} style={{ color: item.category === 'veg' ? 'green' : 'red' }}>
      Title: {item.title}, 
      Category: {item.category}, 
      ID: {item.id}
      {index < items.length - 1 && ', '}
    </li>
  ));

  return (
    <>
      <h1 style={{ color: 'blue' }}>Food Items</h1>
      <ul>{allItems}</ul>
      {vegItems.length === 0 && <p style={{ color: 'green' }}>No vegetarian items available.</p>}
      {nonvegItems.length === 0 && <p style={{ color: 'red' }}>No Non-vegetarian items available.</p>}
    </>
  );
}

export default App;