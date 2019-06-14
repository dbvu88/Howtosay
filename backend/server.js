import 'dotenv/config';
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './Routes'
import models, { sequelize } from './Models'


console.log('Hello Node.js project.');

console.log(process.env.MY_SECRET);

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware
app.use((req, res, next) => (
    next()
))


app.get('/', (req, res) => {
    res.send('hello world')
})

app.use('/api/users', routes.user);


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})