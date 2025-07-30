import { contactRepository as ContactRepository } from "../repositories/contact.repository.js";

class ContactService {
  #throwInternalError(response, error) {
    return response.status(500).json({
      message: "Internal server error",
      error: error.message || "An unexpected error occurred",
    });
  }

  async findAsync(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        return response.status(400).json({ message: "Contact ID is required" });
      }

      const contact = await ContactRepository.findAsync("id", id);

      if (!contact) {
        return response.status(404).json({ message: "No contacts found" });
      }

      return response.status(200).json(contact);
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }

  async findAllAsync(_, response) {
    try {
      const contacts = await ContactRepository.findAllAsync();
      if (!contacts || contacts.length === 0) {
        return response.status(404).json({ message: "No contacts found" });
      }

      return response.status(200).json(contacts);
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }

  async createAsync(request, response) {
    try {
      const body = request.body;
      const { name, email, phone, categoryId } = body;

      for (const requiredField of ["name", "email", "phone"]) {
        if (!body[requiredField]) {
          return response.status(400).json({ message: `${requiredField} is required` });
        }
      }

      const contact = await ContactRepository.findAsync("email", email);

      if (contact) {
        return response.status(400).json({ message: "Contact with this email already exists" });
      }

      const newContact = {
        id: crypto.randomUUID(),
        name,
        email,
        phone,
        categoryId: categoryId || null,
      };

      await ContactRepository.createAsync(newContact);
      return response.status(201).json(newContact);
    } catch (error) {
      return this.#throwInternalError(response, error);
    }
  }

  async updateAsync(request, response) {
    try {
      const { id } = request.params;
      const body = request.body;
      if (!id) {
        return response.status(400).json({ message: "Contact ID is required" });
      }

      const contact = await ContactRepository.findAsync("id", id);
      if (!contact) {
        return response.status(404).json({ message: "Contact not found" });
      }

      const { name, email, phone, categoryId } = body;
      for (const requiredField of ["name", "email", "phone"]) {
        if (!body[requiredField] && !contact[requiredField]) {
          return response.status(400).json({ message: `${requiredField} is required` });
        }
      }

      const existingContact = await ContactRepository.findAsync("email", email);
      if (existingContact && existingContact.id !== id) {
        return response.status(400).json({ message: "Contact with this email already exists" });
      }

      const updatedContact = {
        id,
        name: name || contact.name,
        email: email || contact.email,
        phone: phone || contact.phone,
        categoryId: categoryId || contact.categoryId,
      };

      await ContactRepository.updateAsync(id, updatedContact);
      return response.status(200).json(updatedContact);
    } catch (error) {
      return this.#throwInternalError(response, error);
    }
  }

  async deleteAsync(request, response) {
    try {
      const { id } = request.params;

      if (!id) {
        return response.status(400).json({ message: "Contact ID is required" });
      }

      const contact = await ContactRepository.findAsync("id", id);
      if (!contact) {
        return response.status(404).json({ message: "Contact not found" });
      }

      await ContactRepository.deleteAsync(id);
      return response.status(204).send();
    } catch (error) {
      return this.#throwInternalError(response, error);
    }
  }
}
export const contactService = new ContactService();
