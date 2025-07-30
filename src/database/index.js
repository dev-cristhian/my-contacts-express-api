import { Client } from "pg";

export class PG {
  static #buildClient() {
    return new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }

  static async query(textQuery, params) {
    const client = this.#buildClient();

    try {
      await client.connect();

      const { rows } = await client.query(textQuery, params);
      return rows;
    } catch (error) {
      console.error("Database query failed:", error);
      throw error;
    } finally {
      await client.end();
    }
  }
}
