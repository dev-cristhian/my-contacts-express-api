import { categoryRepository as CategoryRepository } from "../repositories/category.repository.js";
export class CategoryService {
  async findAsync(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "Category ID is required" });
    }

    const category = await CategoryRepository.findAsync("id", id);

    if (!category) {
      return response.status(404).json({ message: "No category found" });
    }

    return response.status(200).json(category);
  }

  async findAllAsync(_, response) {
    const categories = await CategoryRepository.findAllAsync();
    if (!categories || categories.length === 0) {
      return response.status(404).json({ message: "No categories found" });
    }

    return response.status(200).json(categories);
  }

  async createAsync(request, response) {
    const body = request.body;
    const { name } = body;

    if (!name) {
      return response.status(400).json({ message: "Category name is required" });
    }

    const newCategory = await CategoryRepository.createAsync(name);
    return response.status(201).json(newCategory);
  }

  async updateAsync(request, response) {
    const { id } = request.params;
    const body = request.body;
    if (!id) {
      return response.status(400).json({ message: "Category ID is required" });
    }

    const category = await CategoryRepository.findAsync("id", id);
    if (!category) {
      return response.status(404).json({ message: "Category not found" });
    }

    const { name } = body;
    if (!name) {
      return response.status(400).json({ message: "Category name is required" });
    }

    const updatedCategory = await CategoryRepository.updateAsync(id, name);
    return response.status(200).json(updatedCategory);
  }

  async deleteAsync(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "Category ID is required" });
    }

    const category = await CategoryRepository.findAsync("id", id);

    if (!category) {
      return response.status(404).json({ message: "Category not found" });
    }

    await CategoryRepository.deleteAsync(id);
    return response.status(204).send();
  }
}
export const categoryService = new CategoryService();
