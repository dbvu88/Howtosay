import db from '../Database'
import { Router } from 'express'
const router = Router()

const execute = (res, sql, message='successfully executed', parameters=null) => {
    db.query(sql, parameters, (err, result) => {
        if(err) {
            // console.log(err.sqlMessage)
            res.status(500).json(err)
        } else {
            res.status(200).send({
                message,
                result
            })
        }
        
    })
}

// create db
router.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE Howtosay'
    execute(res, sql, 'Database created ...')
})

// create table
router.get('/createuserstable', (req, res) => {
    const sql = `CREATE TABLE users(
        id int AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255),
        CONSTRAINT uc_users UNIQUE (username, email)
        );`

    execute(res, sql, 'Users Table created ...')
})

// seed route
router.get('/createusers/', (req, res) => {
    const sql = `INSERT INTO 
    users(username, password, email)
    VALUES 
    ('ducbavu', '****', ''), 
    ('ducvu', '****', ''),
    ('ducba', '****', '');`

    execute(res, sql, 'Users Records created ...')
})

// drop users table
router.get('/dropuserstable', (req, res) => {
    const sql = `DROP TABLE users;`

    execute(res, sql, 'Users Table droped ...')

})

// test route
router.post('/createuser', (req, res) => {
    const sql = `INSERT INTO 
    users(username, password, email)
    VALUES 
    (?, ?, ?);`

    const value = [
        req.body.username,
        req.body.password,
        req.body.email
    ]

    execute(res, sql, 'User created ...', value)

})

export default router
