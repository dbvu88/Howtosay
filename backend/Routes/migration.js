import db from '../Database'
import { Router } from 'express'
const router = Router()

const execute = (res, sql, message=null) => {
    db.query(sql, (err, result) => {
        if(err) {
            // console.log(err.sqlMessage)
            res.status(500).json(err)
        }
        res.status(200).send({
            message,
            result
        })
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
        username VARCHAR(255),
        password VARCHAR(255),
        email VARCHAR(255)
        )`

    execute(res, sql, 'Users Table created ...')
})

export default router
