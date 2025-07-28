import { contactService as ContactService } from "../services/contact.service.js";
class ContactController {
  async findAsync(request, response) {
    await ContactService.findAsync(request, response);
  }

  async findAllAsync(request, response) {
    await ContactService.findAllAsync(request, response);
  }

  async createAsync(request, response) {
    await ContactService.createAsync(request, response);
  }

  async updateAsync(request, response) {
    await ContactService.updateAsync(request, response);
  }

  async deleteAsync(request, response) {
    await ContactService.deleteAsync(request, response);
  }
}
export const contactController = new ContactController();
