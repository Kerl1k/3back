import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../sequelize.js";

const User = sequelize.define("User", {
  login: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

(async () => {
  await sequelize.sync();
  // Code here
})();

export default User;
