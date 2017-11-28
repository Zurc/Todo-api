var Sequelize = require('sequelize');
// initialize an instance with new...
var sequelize = new Sequelize(undefined, undefined, undefined, {
    'dialect': 'sqlite',
    'storage': 'basic-squlite-database.sqlite'
});

// model
var Todo = sequelize.define('todo', {
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            // notEmpty: true
            len: [1, 250]
        }
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

var User = sequelize.define('user', {
    email: Sequelize.STRING
})

Todo.belongsTo(User);
User.hasMany(Todo);

sequelize.sync({
    // force: true
}).then(function() {
    console.log('Everything is synced');

    User.findById(1).then(function(user) {
        // sequelize create this f(x) based on the model, 
        // adds the get in front and the s at the end
        user.getTodos({
            where: {
                completed: false
            }
        }).then(function(todos) {
            todos.forEach(function(todo) {
                console.log(todo.toJSON())
            });
        });
    });

    // User.create({
    //     email: "test@test.com"
    // }).then(function() {
    //     return Todo.create({
    //         description: "Walk the dog"
    //     });
    // }).then(function(todo) {
    //     User.findById(1).then(function(user) {
    //         user.addTodo(todo); // associate a todo with the user
    //     })
    // });

});