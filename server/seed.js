require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})
module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists users;

        create table users (
            user_id serial primary key, 
            first_name varchar(100), 
            last_name varchar(100), 
            email varchar(50), 
        );
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}
