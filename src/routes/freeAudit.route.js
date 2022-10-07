const express = require('express');
const { freeAuditController } = require('../controllers');
const validate = require('../middlewares/validate');
const paramSchema = require('../validations');

const router = express.Router();

router.post('/', validate(paramSchema.freeAudit.createFreeAudit), freeAuditController.createFreeAudit);
router.get('/', validate(paramSchema.freeAudit.getAllFreeAudits), freeAuditController.getAllFreeAudits);
router.get('/:id', validate(paramSchema.freeAudit.getFreeAuditById), freeAuditController.getFreeAuditById);
router.put('/:id', validate(paramSchema.freeAudit.updateFreeAudit), freeAuditController.updateFreeAudit);
router.delete('/:id', validate(paramSchema.freeAudit.deleteFreeAudit), freeAuditController.deleteFreeAudit);

module.exports = router;
