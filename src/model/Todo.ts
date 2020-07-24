import { Model, DataTypes } from "sequelize";
import mysql from '../connection/mysql'

class Todo extends Model {}
Todo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        todoName: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            comment: '任务名称',
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '任务状态 0 未开始 1 成功 2 失败',
        },
        integral: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '任务积分',
        },
        userId: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '关联用户id',
        }
    },
    {
        sequelize: mysql,
        freezeTableName: true,
        tableName: "todo",
    }
);

// 强制初始化数据库
// Todo.sync({ force: true });

export default {
    insert(model: any) {
        return Todo.create(model);
    },
    get(id: number) {
        return Todo.findOne({
            where: {
                id,
            },
        });
    },
    update(id: number, data: any) {
        return Todo.update(data, {
            where: { id },
        });
    },
    getList(userId: number) {
        return Todo.findAll({
            where: { userId },
        });
    },
    getCount() {
        return Todo.findAndCountAll({});
    },
    del(id: number) {
        return Todo.destroy({ where: { id } });
    }
};
