import db from '../Database'
import { Router } from 'express'
const router = Router()

const execute = (sql, message) => {
    db.query(sql, (err, result) => {
        if(err) throw err
        console.log(result)
        res.send(message)
    })
}

// create db
router.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE Howtosay'
    execute(sql, 'Database created ...')
})

// create table
router.get('/createuserstable', (req, res) => {
    const sql = `CREATE TABLE users(id int AUTO_INCREMENT,
        username VARCHAR(255),
        password VARCHAR(255),
        email VARCHAR(255))`

    execute(sql, 'Users Tabel created ...')
})

export default router
