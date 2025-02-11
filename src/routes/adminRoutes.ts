// src/routes/adminRoutes.js
import { Hono } from 'hono';
import { AdminController } from '../controllers/adminController.ts';

export const adminRoutes = new Hono();

adminRoutes.post('/admin', async (c) => {
    const adminController = new AdminController(c.env.DB);
    return adminController.createAdmin(c);
});

adminRoutes.get('/admin/:email', async (c) => {
    const adminController = new AdminController(c.env.DB);
    return adminController.getAdminByEmail(c);
});