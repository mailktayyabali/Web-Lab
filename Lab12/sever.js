const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
let items = [
    { id: 1, name: 'Item One', description: 'This is item one.' },
    { id: 2, name: 'Item Two', description: 'This is item two.' },
    { id: 3, name: 'Item Three', description: 'This is item three.' }
];
app.post('/items', (req, res) => {
    const newItem = req.body;
    newItem.id = items.length + 1;
    items.push(newItem);
    res.status(201).json(newItem);
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find(i => i.id === itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});