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
 const userId = ''

 module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`select * from users
             on user_id = user_id
            where user_id = ${userId};`)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },
    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            email,
        } = req.body

        sequelize.query(
            `UPDATE users SET
               first_name = '${firstName}', 
               last_name = '${lastName}', 
               email = '${email}', 
            WHERE user_id = ${userId};`)
             
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))
},


    getLotr: (req, res) => {
        const lotr = ["Boromir! (The Protector)", 
        "Pippin! (The Performer)", 
        "Legolas! (The Composer)",
        "Sam! (The Champion)",
        "Elrond! (The Mastermind)",
        "Frodo! (The Healer)",
        "Gollum! (The liar & Thief)"
    ]

        let randomIndex = Math.floor(Math.random() * lotr.length);
        let randomLotr = lotr[randomIndex];
      
        res.status(200).send(randomLotr);
    }
}

