// Express ମଡ୍ୟୁଲକୁ ଇମ୍ପୋର୍ଟ କରିବା
const express = require('express');

// Express ର ଏକ ଇନ୍ସ୍ଟାନ୍ସ ସୃଷ୍ଟି କରିବା
const app = express();

// JSON ଡାଟା ପାର୍ସ କରିବା ପାଇଁ ମିଡଲୱେୟର ଲଗାଇବା
app.use(express.json());

// ସାହାଯ୍ୟ ନିଆରୁ ଆଗରୁ ଗୋଟିଏ ଆର୍ରେ ଉପରେ ବସାଇ ରଖାଯାଇଥିବା ଡାଟା
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

// GET ରୂଟ: ସମସ୍ତ ଇଟମ୍ସକୁ ନିଆରୁ ନେବା
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// GET ରୂଟ: ଏକ ନିର୍ଦ୍ଧାରିତ ID ଦ୍ୱାରା ଇଟମ୍ସକୁ ନିଆରୁ ନେବା
app.get('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// POST ରୂଟ: ଏକ ନୂଆ ଇଟମ୍ ସୃଷ୍ଟି କରିବା
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT ରୂଟ: ଏକ ଥିବା ଇଟମ୍କୁ ID ଦ୍ୱାରା ଅପଡେଟ କରିବା
app.put('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const item = items.find(i => i.id === itemId);

    if (item) {
        item.name = req.body.name;
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

// DELETE ରୂଟ: ଏକ ଇଟମ୍କୁ ID ଦ୍ୱାରା ବିଲୋପ କରିବା
app.delete('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    items = items.filter(i => i.id !== itemId);
    res.status(200).json({ message: 'Item deleted successfully' });
});

// ସର୍ଭରକୁ ଆରମ୍ଭ କରିବା
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
