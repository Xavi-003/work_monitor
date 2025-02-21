// src/index.js
import { Hono } from 'hono';
import { cors } from "hono/cors";
import { adminRoutes } from '@/routes/adminRoutes.ts';
import { clientRoutes } from '@/routes/clientRoutes.ts';

const app = new Hono();
// CORS middleware
app.use(cors({ origin: "*" }));

app.use("*", async (c, next) => {
  console.log("🚀 Checking Cloudflare D1 instance:", c.env.DB); // Debugging log

  if (!c.env.DB) {
      throw new Error("D1 Database instance (c.env.DB) is undefined!");
  }
  await next();
});

app.get('/', (c) => {
  return c.json({ message: "hello!" });
})
// Register admin routes
app.route('/api/admin', adminRoutes);
// Register client routes
app.route('/api/client', clientRoutes);

export default app;