const express = require('express');
const cors = require('cors');
require("dotenv").config()
const sequelize = require('./database');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());
app.use(cors())
app.use('/users', userRoutes);
const port = process.env.DB_PORT
sequelize
.sync()
.then(() => {
console.log('Database synced');
app.listen(port, () => console.log(`Server listening on port ${port}`));
})
.catch((err) => console.error('Unable to sync database', err));