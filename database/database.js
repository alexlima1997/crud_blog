import { Sequelize } from 'sequelize';

export const connection = new Sequelize('guia_press', 'root', '1q2w!Q@W',{
    host: 'localhost',
    dialect: 'mysql',
});
