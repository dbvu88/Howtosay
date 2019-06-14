import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        dialect: 'postgres'
    }
)

const models = {
    User: sequelize.import('./user'),
    Question: sequelize.import('./question'),
}

Object.keys(models).forEach(key => {
    console.log(models)
    if ('associate' in models[key]) {
        models[key].associate(models)
    }
})

export { sequelize }
export default models