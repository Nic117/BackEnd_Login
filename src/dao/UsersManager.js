import { userModel } from "./models/userModel.js";

export default class UserManager {

    async createUser(user) {
        try {
            const newUser = await userModel.create(user);
            return newUser.toJSON();
        } catch (error) {
            throw new Error(`Error al crear usuario: ${error.message}`);
        }
    }

    async getUsersBy(filter) {
        try {
            return await userModel.findOne(filter).lean();
        } catch (error) {
            throw new Error(`Error al buscar usuario: ${error.message}`);
        }
    }
}