const router = require('express').Router();

const decisionCtrl = require('../controller/decisions');
const validionCtrl = require('../controller/validation');

router.get('/new', decisionCtrl.renderDecisionForm);

router.post('/new', [
  validionCtrl.validate('createDecisions'),
  decisionCtrl.renderDecisionFormWithErrors,
  decisionCtrl.saveDecision,
]);

router.get('/edit/:id', decisionCtrl.renderEditForm);

router.post('/edit/:id', [
  validionCtrl.validate('editDecisions'),
  decisionCtrl.renderDecisionFormWithErrors,
  decisionCtrl.saveDecision,
]);

router.get('/delete/:id', [
  validionCtrl.validate('deleteDecisions'),
  decisionCtrl.goBackOnError,
  decisionCtrl.deleteDecision,
]);

router.get('/', decisionCtrl.renderDashboard);

router.get('/:id', decisionCtrl.renderDashboard);

module.exports = router;
