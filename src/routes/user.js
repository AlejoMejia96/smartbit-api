const { Router, response } = require('express');
const router = Router();
const { User } = require('../db');

router.get('users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    let userInfo = await User.findOne({where: { id }});

    if(userInfo) {
      return res.send(userInfo);
    } else {
      return res.send({ response: "Usuario no existe" })
    }
  } catch(err){
    console.log(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    let userExist = await User.findOne({ where: { email } });
  
    if(userExist){
      const { user } = userExist;
  
      if(user.password === password){
        return res.send({ response: user.id });
      }
      if(user.password !== password){
        return res.send({ response: "Clave no válida" });
      }
    } else {
      return res.send({ response: "El usuario no existe" });
    }
  } catch(err){
    console.log(err);
  }
});

router.post('/register', async (req, res) => {
  const { name, email, password, image, description } = req.body;
  try {
    if(name && email && password && image && description){
      let info = await User.create({ name, email, password, image, description });
      console.log(info);
      res.status(200).send({ response: "Usuario creado exitosamente" })
    } else {
      res.status(404).send({response: "Complete todos los campos"})
    }
  } catch(err){
    console.log(err);
  }
});

module.exports = router;