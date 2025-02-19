export class DB {
    constructor(database) {
        if (!database || typeof database.prepare !== "function") {
            throw new Error("Invalid database instance passed to DB class");
        }
        this.db = database;
    }

    // Run a query (INSERT, UPDATE, DELETE)
    async query(sql, params = []) {
        try {
            const stmt = this.db.prepare(sql);
            const result = await stmt.bind(...params).run();
            return result;
        } catch (error) {
            console.error("Database query error:", error);
            throw error;
        }
    }

    // Fetch data (SELECT)
    async fetch(sql, params = []) {
        try {
            const stmt = this.db.prepare(sql);
            const result = await stmt.bind(...params).all();
            return result.results;
        } catch (error) {
            console.error("Database fetch error:", error);
            throw error;
        }
    }

}
