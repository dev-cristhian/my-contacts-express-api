import { PG } from "../database/index.js";
class CategoryRepository {
  async findAllAsync() {
    const rows = await PG.query(`SELECT * FROM categories;`, []);
    return rows;
  }

  async findAsync(key, value) {
    const [row] = await PG.query(`SELECT * FROM categories WHERE ${key} = $1;`, [value]);
    return row;
  }

  async createAsync(categoryName) {
    const textQuery = `
            INSERT INTO categories (name)
            VALUES ($1)
            RETURNING *;
          `;

    const [row] = await PG.query(textQuery, [categoryName]);
    return row;
  }
  async updateAsync(id, categoryName) {
    const textQuery = `
        UPDATE categories
        SET name = $2
        WHERE id = $1
        RETURNING *;
        `;

    const [row] = await PG.query(textQuery, [id, categoryName]);
    return row;
  }

  async deleteAsync(id) {
    const textQuery = `
            DELETE FROM categories
            WHERE id = $1
            RETURNING *;`;

    return await PG.query(textQuery, [id]);
  }
}
export const categoryRepository = new CategoryRepository();
