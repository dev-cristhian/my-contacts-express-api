const MOCK_CONTACTS = [
  {
    id: crypto.randomUUID(),
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    categoryId: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    categoryId: crypto.randomUUID(),
  },
];

class ContactRepository {
  findAllAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_CONTACTS);
      }, 1000);
    });
  }

  findAsync(key, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contact = MOCK_CONTACTS.find((contact) => contact[key] === value);
        resolve(contact);
      }, 1000);
    });
  }

  createAsync(contact) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newContact = { ...contact, id: crypto.randomUUID() };
        MOCK_CONTACTS.push(newContact);
        resolve(newContact);
      }, 1000);
    });
  }

  updateAsync(id, updatedContact) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = MOCK_CONTACTS.findIndex((contact) => contact.id === id);
        if (index !== -1) {
          MOCK_CONTACTS[index] = { ...MOCK_CONTACTS[index], ...updatedContact };
          resolve(MOCK_CONTACTS[index]);
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  deleteAsync(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = MOCK_CONTACTS.findIndex((contact) => contact.id === id);
        if (index !== -1) {
          const deletedContact = MOCK_CONTACTS.splice(index, 1);
          resolve(deletedContact[0]);
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}

export const contactRepository = new ContactRepository();
