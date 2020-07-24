import UserModel from "../model/user";

class UserService {
    async login(username: string, openId: string) {
        const model = {
            username,
            openId,
            avatar: '',
            integral: 0
        };
        const result = UserModel.insert(model);
        return result;
    }
}

export default new UserService()