// src/models/clientModel.js
import { DB } from '@/db.ts';

export class ClientModel {
    constructor(database) {
        this.db = new DB(database);
    }

    // Create a new client
    async create(email, password) {
        const sql = 'INSERT INTO admin (email, password) VALUES (?, ?)';
        const result = await this.db.query(sql, [email, password]);
        return result.meta.last_row_id; // Return the ID of the newly created admin
    }

    // Find an admin by email
    async findByEmail(email) {
        const sql = 'SELECT * FROM admin WHERE email = ?';
        const result = await this.db.fetch(sql, [email]);
        return result[0]; // Return the first matching admin
    }

    // Find an admin by ID
    async findById(id) {
        const sql = 'SELECT * FROM admin WHERE id = ?';
        const result = await this.db.fetch(sql, [id]);
        return result[0]; // Return the first matching admin
    }

    // Delete an admin
    async delete(id) {
        const sql = 'DELETE FROM admin WHERE id = ?';
        const result = await this.db.query(sql, [id]);
        return result.meta.changes > 0; // Return true if the deletion was successful
    }
}