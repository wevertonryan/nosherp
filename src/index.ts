import express from 'express';

import { OrderService } from './order/service';


const app = express();

app.get('/orders', (req, res) => {
  const orders = OrderService();
  res.json(orders);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
