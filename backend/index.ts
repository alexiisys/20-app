import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import cors from "cors";

const app = express();
const PORT = 3000;

const coupons = [
  {
    id: uuidv4(),
    title: 'Free Shipping onas Orders over $10',
    description: 'Automatically applied at checkout',
    code: '',
    category: 'Shipping',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    valid_until: '2025-08-31T23:59:59Z',
    link: 'https://temu.com/free-shipping',
  },
  {
    id: uuidv4(),
    title: '10% Off Electronics52',
    description: 'Valid for allff electronics items',
    code: 'ELEC10',
    category: 'Electronics',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    valid_until: '2025-11-30T23:59:59Z',
    link: 'https://temu.com/electronics-sale',
  },
  {
    id: uuidv4(),
    title: 'Buy 1 Get 1 Free42',
    description: 'Applicable to select fashion items',
    code: 'B1G1',
    category: 'Fashion',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    valid_until: '2025-04-31T23:59:59Z',
    link: 'https://temu.com/fashion-bogo',
  },
  {
    id: uuidv4(),
    title: 'Buy 1 Get 1 Free23',
    description: 'Applicable to select fashion items',
    code: 'B1G1',
    category: 'Fashion',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    valid_until: '2025-02-31T23:59:59Z',
    link: 'https://temu.com/fashion-bogo',
  },
  {
    id: uuidv4(),
    title: 'Buy 1 Get 1 Free',
    description: 'Applicable to select fashion items',
    code: 'B1G1',
    category: 'Fashion',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg',
    valid_until: '2025-08-31T23:59:59Z',
    link: 'https://temu.com/fashion-bogo',
  },
];

app.get('/coupons', (req, res) => {
  console.log(1);
  res.json(coupons);
});

app.get('/coupons/:id', (req, res) => {
  console.log(2);
  const coupon = coupons.find((c) => c.id === req.params.id);
  if (!coupon) {
    return res.status(404).json({ error: 'Coupon not found' });
  }
  res.json(coupon);
});

app.get('/categories', (req, res) => {
  console.log(3);
  const categories = [...new Set(coupons.map((c) => c.category))];
  res.json(categories);
});

app.get('/categories/:category/coupons', (req, res) => {
  console.log(4);
  const { category } = req.params;
  const filtered = coupons.filter(
    (c) => c.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filtered);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
