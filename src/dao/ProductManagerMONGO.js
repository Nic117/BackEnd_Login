import { productsModelo } from './models/productsModelo.js';

export default class ProductManager {

    async getProducts() {
        try {
            return await productsModelo.find().lean();
        } catch (error) {
            throw new Error("Error al obtener productos: " + error.message);
        }
    }

    async getProductsPaginate(filter, options) {
        try {
            return await productsModelo.paginate(filter, options);
        } catch (error) {
            throw new Error("Error al obtener productos paginados: " + error.message);
        }
    }

    async getSortProducts(sort) {
        try {
            return await productsModelo.find().sort({ [sort]: 1 }).lean();
        } catch (error) {
            throw new Error("Error al obtener productos ordenados: " + error.message);
        }
    }

    async addProduct(product) {
        try {
            return await productsModelo.create(product);
        } catch (error) {
            throw new Error("Error al agregar producto: " + error.message);
        }
    }

    async getProductsBy(filtro) {
        try {
            return await productsModelo.findOne(filtro).lean();
        } catch (error) {
            throw new Error("Error al obtener producto por filtro: " + error.message);
        }
    }

    async updateProduct(id, updateData) {
        try {
            return await productsModelo.findByIdAndUpdate(id, updateData, { runValidators: true, returnDocument: "after" });
        } catch (error) {
            throw new Error("Error al actualizar producto: " + error.message);
        }
    }

    async deleteProduct(id) {
        try {
            return await productsModelo.deleteOne({ _id: id });
        } catch (error) {
            throw new Error("Error al eliminar producto: " + error.message);
        }
    }
}
