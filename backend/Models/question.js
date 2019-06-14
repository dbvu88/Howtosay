const question = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        username: {
            type: DataTypes.STRING,
            // unique: true,
        }
    })

    // defines 1 to many relationship
    Question.associate = models => {
        Question.belongsTo(models.User)
    }

    return Question
}

export default question