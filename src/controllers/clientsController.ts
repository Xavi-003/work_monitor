// src/controllers/adminController.js
import { ClientModel } from '@/models/clientModel.ts';

export class ClientsController {
    constructor(database) {
        this.clientModel = new ClientModel(database);
    }

    async createClient(c) {
        const { email, password } = await c.req.json();

        if (!email || !password) {
            return c.json({ error: 'Email and password are required' }, 400);
        }
        try {
            const adminId = await this.clientModel.create(email, password);
            return c.json({ message: 'Admin created successfully', id: adminId });
        } catch (error) {
            return c.json({ error: 'Failed to create admin' }, 500);
        }
    }

    async getAdminByEmail(c) {
        const email = c.req.param('email');

        try {
            const admin = await this.clientModel.findByEmail(email);
            if (!admin) {
                return c.json({ error: 'Admin not found' }, 404);
            }
            return c.json(admin);
        } catch (error) {
            return c.json({ error: 'Failed to fetch admin' }, 500);
        }
    }

    async login(c) {
        const { email, password } =await c.req.json();
        try {
            const admin = await this.clientModel.findByEmail(email);
            if (!admin) {
                return c.json({ message: 'Admin not found' }, 404);
            }
            return c.json(admin);
        } catch (error) {
            return c.json({ error: 'Failed to fetch admin' }, 500);
        }
    }
}