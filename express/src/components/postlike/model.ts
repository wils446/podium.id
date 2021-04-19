import { Sequelize, Model, DataTypes } from "sequelize";
import { SequelizeModelDefine } from "../../common/interfaces/SequelizeModelDefine";
import { PostLikeModelInterface } from "./interface";

export class PostLike extends Model implements PostLikeModelInterface {
    public id!: number;
    public userId!: number;
    public postId!: number;
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
            postId: {
                type: DataTypes.INTEGER,
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
            tableName: "postlikes",
            modelName: "PostLike",
        },
    };
    PostLike.init(modelDefiner.attributes, modelDefiner.options);
};
