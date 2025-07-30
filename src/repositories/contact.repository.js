import { PG } from "../database/index.js";

class ContactRepository {
  async findAllAsync() {
    try {
      const textQuery = `
        SELECT c.id, c.name, c.email, c.phone, cat.name AS category_name
        FROM contacts c
        LEFT JOIN categories cat ON c.category_id = cat.id
        ORDER BY c.name ASC;
      `;

      const rows = await PG.query(textQuery, []);
      return rows;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async findAsync(key, value) {
    try {
      const textQuery = `
        SELECT c.id, c.name, c.email, c.phone, cat.name AS category_name
        FROM contacts c
        LEFT JOIN categories cat ON c.category_id = cat.id
        WHERE c.${key} = $1
        ORDER BY c.name ASC;
      `;

      const [row] = await PG.query(textQuery, [value]);
      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createAsync(contact) {
    try {
      const textQuery = `
        INSERT INTO contacts (name, email, phone, category_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const params = [contact.name, contact.email, contact.phone, contact.categoryId];

      const [row] = await PG.query(textQuery, params);

      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateAsync(id, updatedContact) {
    try {
      const { name, email, phone, categoryId } = updatedContact;

      const textQuery = `
        UPDATE contacts
        SET name = $2, email = $3, phone = $4, category_id = $5
        WHERE id = $1
        RETURNING *;
      `;

      const [row] = await PG.query(textQuery, [id, name, email, phone, categoryId]);
      return row;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async deleteAsync(id) {
    const textQuery = `
      DELETE FROM contacts
      WHERE id = $1
      RETURNING *;
    `;
    try {
      return await PG.query(textQuery, [id]);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export const contactRepository = new ContactRepository();
