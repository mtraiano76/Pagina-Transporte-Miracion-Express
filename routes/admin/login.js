var express = require('express');
var router = express.Router();
var usuariosModel = require("./../../models/usuariosModel");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout',

  });
});

module.exports = router;

router.post("/", async function (req, res, next) {
  try {
    console.log(req.body);
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosModel.getUsersAndPassword(usuario, password);
    // esto es: var data = select * from usuarios where usuario = Miguel and password = md5(1234)
    // columna id, usuario, password

    console.log(data)

    if (data != undefined) {

      req.session.id_usuario = data.id; // 1
      req.session.nombre = data.usuario; // Miguel

      res.redirect("/admin/novedades")
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true
      })
    }

  } catch (error) {
    console.log(error)
  }
})