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

  findAsync(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const contact = MOCK_CONTACTS.find((contact) => contact.id === id);
        resolve(contact);
      }, 1000);
    });
  }
}

export const contactRepository = new ContactRepository();
