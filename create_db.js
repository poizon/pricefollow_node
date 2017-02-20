var User = require('models/user').User;

var user = new User({
    email: "test@test.ru",
    password: "secret"
});

user.save(function (err,user,affected) {
    if (err) {
        User.findOne({email: "test@test.ru"}, function (err, tester) {
            console.log(tester);
        });
    } else {
        User.findOne({email: "test@test.ru"}, function (err, tester) {
            console.log(tester);
        });
    }
})
