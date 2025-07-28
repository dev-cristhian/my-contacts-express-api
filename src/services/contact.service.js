import { contactRepository as ContactRepository } from "../repositories/contact.repostity.js";

class ContactService {
  async findAsync(request, response) {
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).json({ message: "Contact ID is required" });
      }

      const contact = await ContactRepository.findAsync(id);

      if (!contact) {
        response.status(404).json({ message: "No contacts found" });
      }

      response.status(200).json(contact);
    } catch (error) {
      response.status(500).json({ message: "Internal server error", error: error.message });
    }
  }

  async findAllAsync(_, response) {
    try {
      const contacts = await ContactRepository.findAllAsync();
      if (!contacts || contacts.length === 0) {
        response.status(404).json({ message: "No contacts found" });
      }

      response.status(200).json(contacts);
    } catch (error) {
      response.status(500).json({ message: "Internal server error", error: error.message });
    }
  }

  create(contact) {
    contact.id = this.contacts.length + 1; // Simple ID generation
    this.contacts.push(contact);
    return contact;
  }

  update(id, updatedContact) {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      this.contacts[index] = { ...this.contacts[index], ...updatedContact };
      return this.contacts[index];
    }
    return null;
  }

  delete(id) {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      return this.contacts.splice(index, 1)[0];
    }
    return null;
  }
}
export const contactService = new ContactService();
