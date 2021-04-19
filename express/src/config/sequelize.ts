import { Sequelize } from "sequelize";
import { define as userModelDefine } from "../components/users/model";
import { define as postModelDefine } from "../components/posts/model";
import { define as likeModelDefine } from "../components/postlike/model";

const sequelize = new Sequelize("podium", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

userModelDefine(sequelize);
postModelDefine(sequelize);
likeModelDefine(sequelize);

sequelize.sync();

export default sequelize;
