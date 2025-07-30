import { PG } from "../database/index.js";
class CategoryRepository {
  async findAllAsync() {
    try {
      const rows = await PG.query(`SELECT * FROM categories;`, []);
      return rows;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findAsync(key, value) {
    try {
      const [row] = await PG.query(`SELECT * FROM categories WHERE ${key} = $1;`, [value]);
      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createAsync(categoryName) {
    try {
      const textQuery = `
            INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *;
          `;
      const [row] = await PG.query(textQuery, [categoryName]);

      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }
  async updateAsync(id, categoryName) {
    try {
      const textQuery = `
        UPDATE categories
        SET name = $2
        WHERE id = $1
        RETURNING *;
        `;

      const [row] = await PG.query(textQuery, [id, categoryName]);
      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteAsync(id) {
    try {
      const textQuery = `
            DELETE FROM categories
            WHERE id = $1
            RETURNING *;`;

      return await PG.query(textQuery, [id]);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
export const categoryRepository = new CategoryRepository();
