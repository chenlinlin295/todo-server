import { Model, DataTypes } from "sequelize";
import mysql from '../connection/mysql'

class Wish extends Model {}
Wish.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        wishName: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            comment: '心愿名称',
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '心愿进行状态  0 未完成   1已完成',
        },
        consume: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '消耗积分',
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
        tableName: "wish",
    }
);

// 强制初始化数据库
Wish.sync({ force: true });

export default {
    insert(model: any) {
        return Wish.create(model);
    },
    get(id: number) {
        return Wish.findOne({
            where: {
                id,
            },
        });
    },
    update(id: number, data: any) {
        return Wish.update(data, {
            where: { id },
        });
    },
    getList(attributes = ["userId"]) {
        return Wish.findAll({
            attributes,
        });
    },
    getCount() {
        return Wish.findAndCountAll({});
    },
    del(id: number) {
        return Wish.destroy({ where: { id } });
    }
};
