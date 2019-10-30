const express = require('express');
const router = express.Router();

const ContactsController = require('../controllers/Contacts'); 

router.post('/', ContactsController.create);
router.get('/', ContactsController.getAll);
router.get('/id/:id', ContactsController.getById);
router.put('/id/:id', ContactsController.update);
router.delete('/id/:id', ContactsController.delete);

module.exports = router;