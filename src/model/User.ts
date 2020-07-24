import { Model, DataTypes, Op } from "sequelize";
import mysql from '../connection/mysql'

class User extends Model {}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            comment: '用户昵称',
        },
        openId: {
            type: DataTypes.STRING(200),
            defaultValue: '',
            comment: '微信openId',
        },
        avatar: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            comment: '用户头像',
        },
        integral: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '积分',
        }
    },
    {
        sequelize: mysql,
        freezeTableName: true,
        tableName: "user",
    }
);

// 强制初始化数据库
// User.sync({ force: true });

export default {
    insert(model: any) {
        return User.create(model);
    },
    get(id: number) {
        return User.findOne({
            where: {
                id,
            },
        });
    },
    update(id: number, data: any) {
        return User.update(data, {
            where: { id },
        });
    },
    getList(attributes = ["id"]) {
        return User.findAll({
            attributes,
        });
    },
    getCount() {
        return User.findAndCountAll({});
    },
    del(id: number) {
        return User.destroy({ where: { id } });
    }
};
