const router = require('express').Router();

const optionCtrl = require('../controller/options');
const validionCtrl = require('../controller/validation');

router.get('/new', optionCtrl.renderOptionForm);
router.post('/new', [
  validionCtrl.validate('createoption'),
  optionCtrl.renderOptionFromWithErros,
  optionCtrl.saveOption,
]);

router.get('/edit/:id', optionCtrl.renderEditForm);

router.post('/edit/:id', [
  validionCtrl.validate('editoptions'),
  optionCtrl.renderOptionFromWithErros,
  optionCtrl.saveOption,
]);

router.get('/delete/:id', [
  validionCtrl.validate('deleteOptions'),
  optionCtrl.goBackOnError,
  optionCtrl.deleteDecision,
]);

module.exports = router;
