const express = require('express');
const { exampleController } = require('../controllers');
const validate = require('../middlewares/validate');
const paramSchema = require('../validations');

const router = express.Router();

router.post('/', validate(paramSchema.example.createExample), exampleController.createExample);
router.get('/', validate(paramSchema.example.getAllExamples), exampleController.getAllExamples);
router.get('/:id', validate(paramSchema.example.getExampleById), exampleController.getExampleById);
router.put('/:id', validate(paramSchema.example.updateExample), exampleController.updateExample);
router.delete('/:id', validate(paramSchema.example.deleteExample), exampleController.deleteExample);

module.exports = router;
