// src/routes/adminRoutes.js
import { Hono } from 'hono';
import { ClientCtl } from '../controllers/clientsController.ts';

export const clientRoutes = new Hono();


clientRoutes.post('/create', async (c) => {
    const clientsController = new ClientCtl(c.env.DB);
    return clientsController.createClient(c);
});

clientRoutes.post('/admin', async (c) => {
    const clientsController = new ClientCtl(c.env.DB);
    return clientsController.createAdmin(c);
});

clientRoutes.get('/admin/:email', async (c) => {
    const clientsController = new ClientCtl(c.env.DB);
    return clientsController.getAdminByEmail(c);
});