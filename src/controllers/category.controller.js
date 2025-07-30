import { categoryService as CategoryService } from "../services/category.service.js";
export class CategoryController {
  async findAsync(request, response) {
    await CategoryService.findAsync(request, response);
  }

  async findAllAsync(request, response) {
    await CategoryService.findAllAsync(request, response);
  }

  async createAsync(request, response) {
    await CategoryService.createAsync(request, response);
  }

  async updateAsync(request, response) {
    await CategoryService.updateAsync(request, response);
  }

  async deleteAsync(request, response) {
    await CategoryService.deleteAsync(request, response);
  }
}
export const categoryController = new CategoryController();
