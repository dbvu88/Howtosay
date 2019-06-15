import 'dotenv/config';
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import routes from './Routes'
// import models, { sequelize } from './Models'
import mysql from 'mysql'


console.log('Hello Node.js project.');

console.log(process.env.HOST);

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // database: process.env.DATABASE
})


db.connect((err) => {
    if(err) {
        throw err
    }
    console.log('MySql Connected ...')
})


const app = express()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// custom middleware
app.use((req, res, next) => (
    next()
))

// create db
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE Howtosay'
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send('Database created ...')
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.use('/api/users', routes.user);

// // reinitilize DB on server start
// const eraseDatabaseOnSync = true;

// sequelize.sync({ force: eraseDatabaseOnSync }).then( async () => {
//     if(eraseDatabaseOnSync) {
//         createUsersWithQuestions()
//     }

//     const PORT = process.env.PORT || 3000
//     app.listen(PORT, () => {
//         console.log('listening on port ' + PORT)
//     })
// })

// seed db
// const createUsersWithQuestions = async () => {
//     await models.User.create(
//         {
//             username: 'dbvu',
//             questions: [
//                 {
//                     text: 'How are you?'
//                 },
//                 {
//                     text: 'She is a great musician'
//                 }
//             ]
//         },
//         {
//             include: [models.Question]
//         }
//     )
// }