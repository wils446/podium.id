"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var model_1 = require("../components/users/model");
var model_2 = require("../components/posts/model");
var model_3 = require("../components/postlike/model");
var sequelize = new sequelize_1.Sequelize("podium", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
model_1.define(sequelize);
model_2.define(sequelize);
model_3.define(sequelize);
sequelize.sync();
exports.default = sequelize;
