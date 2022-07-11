const express = require("express");
const cors = require("cors");
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const app = express();

app.use(cors());
app.use(express.json())

app.post('/seed', seed)

const { getUserInfo } = require('./controller')
const { getLotr } = require('./controller')
const { updateUserInfo } = require('./controller')

app.get('/users', getUserInfo)
app.get("/api/lotr", getLotr)
app.put('/user', updateUserInfo)


var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: 'e03733324d4b4190ae42f519ce107bd2',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello world!");

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server listening on ${port}`))