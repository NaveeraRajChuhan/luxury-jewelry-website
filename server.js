const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Mock Data
const products = [
    { name: 'Gold Diamond Ring', category: 'ring', price: '$450', img: 'ring.jpg' },
    { name: 'Silver Necklace', category: 'necklace', price: '$200', img: 'necklace.jpg' },
    { name: 'Pearl Earrings', category: 'earring', price: '$150', img: 'earring.jpg' },
    { name: 'Crystal Bracelet', category: 'bracelet', price: '$120', img: 'bracelet.jpg' },
    { name: 'Dream Catcher Pendant', category: 'catcher', price: '$80', img: 'catcher.jpg' },
    { name: 'Luxury Watch', category: 'watch', price: '$500', img: 'watch.jpg' },
    // { name: 'Diamond Stud Earrings', category: 'earring', price: '$300', img: 'earring2.jpg' },
    // { name: 'Sapphire Bracelet', category: 'bracelet', price: '$250', img: 'bracelet2.jpg' },
    // { name: 'Emerald Necklace', category: 'necklace', price: '$400', img: 'necklace2.jpg' }
];

app.get('/', (req, res) => res.render('home'));

app.get('/shop', (req, res) => {
    const category = req.query.category;
    const filteredProducts = category 
        ? products.filter(p => p.category === category) 
        : products;
    res.render('shop', { products: filteredProducts, category });
});

app.get('/about', (req, res) => res.render('about'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));