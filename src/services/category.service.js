import { categoryRepository as CategoryRepository } from "../repositories/category.repository.js";
export class CategoryService {
  #throwInternalError(response, error) {
    return response.status(500).json({
      message: "Internal server error",
      error: error.message || "An unexpected error occurred",
    });
  }

  async findAsync(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({ message: "Category ID is required" });
    }

    try {
      const category = await CategoryRepository.findAsync("id", id);

      if (!category) {
        return response.status(404).json({ message: "No category found" });
      }

      return response.status(200).json(category);
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }

  async findAllAsync(_, response) {
    try {
      const categories = await CategoryRepository.findAllAsync();
      if (!categories || categories.length === 0) {
        return response.status(404).json({ message: "No categories found" });
      }

      return response.status(200).json(categories);
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }

  async createAsync(request, response) {
    const body = request.body;
    const { name } = body;

    if (!name) {
      return response.status(400).json({ message: "Category name is required" });
    }

    try {
      const newCategory = await CategoryRepository.createAsync(name);
      return response.status(201).json(newCategory);
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }

  async updateAsync(request, response) {
    try {
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
    } catch (error) {
      return this.#throwInternalError(response, error);
    }
  }

  async deleteAsync(request, response) {
    const { id } = request.params;
    try {
      if (!id) {
        return response.status(400).json({ message: "Category ID is required" });
      }

      const category = await CategoryRepository.findAsync("id", id);

      if (!category) {
        return response.status(404).json({ message: "Category not found" });
      }

      await CategoryRepository.deleteAsync(id);
      return response.status(204).send();
    } catch (error) {
      this.#throwInternalError(response, error);
    }
  }
}
export const categoryService = new CategoryService();
