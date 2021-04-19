import { Sequelize, Model, DataTypes } from "sequelize";
import { SequelizeModelDefine } from "../../common/interfaces/SequelizeModelDefine";
import { PostModelInterface } from "./interface";

export class Post extends Model implements PostModelInterface {
    public id!: number;
    public userId!: number;
    public username?: string;
    public caption!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

export const define = async (sequelize: Sequelize) => {
    const modelDefiner: SequelizeModelDefine = {
        attributes: {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            caption: {
                type: DataTypes.STRING,
            },
            createdAt: {
                type: DataTypes.DATE,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        options: {
            sequelize,
            timestamps: true,
            tableName: "posts",
            modelName: "Post",
        },
    };
    Post.init(modelDefiner.attributes, modelDefiner.options);
};
