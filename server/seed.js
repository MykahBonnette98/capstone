module.exports = {
  seed: (req, res) => {
    sequelize
      .query(
        `
        drop table if exists users;

        create table users (
            user_id serial primary key, 
            first_name varchar(100), 
            last_name varchar(100), 
            email varchar(50), 
        );
        insert into users (first_name, last_name, email)
        values(1, first name, last name, email)
        `
      )
      .then(() => {
        console.log("DB seeded!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("error seeding DB", err));
  },
};
