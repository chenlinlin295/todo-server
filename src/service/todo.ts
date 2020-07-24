import TodoModel from "../model/Todo";

class TodoService {
    async add(userId: number, todoName: string, integral: number) {
        const model = {
            todoName,
            status: 0,
            integral,
            userId
        };
        const result = TodoModel.insert(model);
        return result;
    }
    async getAll(userId: number) {
        const result = TodoModel.getList(userId);
        return result;
    }
}

export default new TodoService()