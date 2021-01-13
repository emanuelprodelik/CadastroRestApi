module.exports = app => {

    var controllerRegister = {
        get: function(req, res, next) {
            res.render('loginPage', {presentation:"Cadastre-se",form: "registerForm", request:"/", requestIcon:"fa-user" ,requestName: "Fazer Login"});
        },
        post: function(req, res, next) {
            var dataObj = req.body;
            var userModel = app.models.user;
            var dbUtil = app.lib.dbUtil;


            dbUtil.save(dataObj, userModel).then((userID) => {
                console.log("usuario salvo id:");
                console.log(userID);
                res.status(200).send();
            }).catch(
                (e) => {
                    console.log("falha ao salvar novo usuario");
                    console.log(e);
                    res.status(400).send();
                }
            );
        }
    };

    return controllerRegister;
};