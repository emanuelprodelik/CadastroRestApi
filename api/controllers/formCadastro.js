module.exports = app => {

    var controllerFormCadastro = {
        getPage: function(req, res, next) {
            res.render('mainPage', {page: 'postUsersForm', get: "", post: "active", icon: "fa-user-plus", iconLabel: "Cadastrar"});
        },
    }

    return controllerFormCadastro;
};