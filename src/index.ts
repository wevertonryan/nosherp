import express from 'express';
import "reflect-metadata"

import { OrderService } from './order/service';
import { ProductService } from './product/service';
import { createProduct, getProduct } from './product/controller';
import { AppDataSource } from './data-source';

const app = express();

app.use(express.json());

app.get('/orders', (req, res) => {
  const orders = OrderService();
  res.json(orders);
});

app.get('/products', getProduct);
app.post('/product', createProduct);

AppDataSource.initialize()
  .then(() => {
      console.log("Database connected")

      app.listen(3000, () => {
        console.log("Server running")
      })
    })
.catch((error) => console.log(error))
