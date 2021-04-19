import { InitOptions, ModelAttributes } from "sequelize/types";

export interface SequelizeModelDefine {
    attributes: ModelAttributes;
    options: InitOptions;
}
