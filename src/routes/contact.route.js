const express = require('express');
const { contactController } = require('../controllers');
const validate = require('../middlewares/validate');
const paramSchema = require('../validations');

const router = express.Router();

router.post('/', validate(paramSchema.contact.createContact), contactController.createContact);
router.get('/', validate(paramSchema.contact.getAllContacts), contactController.getAllContacts);
router.get('/:id', validate(paramSchema.contact.getContactById), contactController.getContactById);
router.put('/:id', validate(paramSchema.contact.updateContact), contactController.updateContact);
router.delete('/:id', validate(paramSchema.contact.deleteContact), contactController.deleteContact);

module.exports = router;
