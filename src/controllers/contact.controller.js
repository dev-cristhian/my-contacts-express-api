import { contactService as ContactService } from "../services/contact.service.js";
class ContactController {
  async findAsync(request, response) {
    await ContactService.findAsync(request, response);
  }

  async findAllAsync(request, response) {
    await ContactService.findAllAsync(request, response);
  }

  createAsync(request, response) {}

  updateAsync(request, response) {}

  deleteAsync(request, response) {}
}
export const contactController = new ContactController();
