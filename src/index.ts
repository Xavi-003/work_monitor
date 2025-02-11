// src/index.js
import { Hono } from 'hono';
import { adminRoutes } from '@/routes/adminRoutes.ts';

const app = new Hono();

app.get('/', (c) => {
  return c.json({ message: "hello!" });
})
// Register admin routes
app.route('/admin', adminRoutes);

export default app;