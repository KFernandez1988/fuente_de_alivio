const { check, validationResults } = require('express-validator');

const checks = {
  id: check('id')
    .isUUID().withMessage('Id is not valid, please go back and try again'),
  title: check('title')
    .exists().withMessage('Decision title require')
    .isLength(3)
    .withMessage('Decision title is requireto be at least 3 character'),
  type: check('type').exists().withMessage('Decision type is require')
    .isIn(['public', 'private'])
    .withMessage('Decision must be public or private'),
  value: check('value')
    .exists().withMessage('Option value require')
    .isLength(1)
    .withMessage('Option value is require'),
  decisionId: check('decisionId').isUUID()
    .withMessage('Decision id is not valid, please go back and try again'),
};

const checkForErrors = (req, res, next) => {
  const erros = validationResults(req);

  if (!erros.isEmpty()) return next(erros.mapped());

  return next();
};

exports.validate = (method) => {
  switch (method) {
    case 'createDecisions': {
      return [checks.title, checks.type, checkForErrors];
    }
    case 'editDecision': {
      return [check.id, checks.title, checks.type, checkForErrors];
    }
    case 'deleteDecision': {
      return [check.id, checkForErrors];
    }
    case 'createOption': {
      return [checks.title, checks.type, checkForErrors];
    }
    case 'editOption': {
      return [check.id, checks.title, checks.type, checkForErrors];
    }
    case 'deleteOption': {
      return [check.id, checkForErrors];
    }
    default: {
      return [];
    }
  }
};
