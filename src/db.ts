// src/db.js
export class DB {
    constructor(database) {
        this.db = database;
    }

    // Generic query executor
    async query(sql, params = []) {
        try {
            const stmt = this.db.prepare(sql);
            const result = await stmt.bind(...params).run();
            return result;
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        }
    }

    // Generic fetch executor
    async fetch(sql, params = []) {
        try {
            const stmt = this.db.prepare(sql);
            const result = await stmt.bind(...params).all();
            return result.results;
        } catch (error) {
            console.error('Database fetch error:', error);
            throw error;
        }
    }
}