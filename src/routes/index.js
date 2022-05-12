const { Router } = require('express');
const router = Router();

// Importamos los routers
const user = require('./user');

// Seteamos router
router.use('/user', user);


module.exports = router;