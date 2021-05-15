exports.renderLanding = async (req, res) => {
  const decisions = req.API.get('/decisions/public');
  res.render('home', { decisions });
};

exports.renderDecisionForm = (req, res) => {
  res.render('decisions/form', { title: '', type: 'private' });
};
// eslint-disable-next-line no-unused-vars
exports.renderDecisionFormWithErrors = (errors, req, res, next) => {
  const { title, type } = req.body;

  res.render('decisions/form', { title, type, errors });
};

exports.saveDecision = async (req, res) => {
  const { title, type } = req.body;

  const { id } = req.params;

  let data = {};

  data = id ? await req.API.post(`/decisions/${id}`, { title, type })
    : data = await req.API.post('/decisions', { title, type });

  res.redirect(`admin/decisions/edit/${data.id}`);
};

exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const decision = await req.API.get(`/decisions/${id}`);

  res.render('decisions/form', decision);
};

exports.goBackOnError = (req, res) => {
  res.redirect('back');
};

exports.deleteDecision = async (req, res) => {
  const { id } = req.params;

  await req.API.delete(`/decision/${id}`);

  res.redirect('admin/decisions');
};

exports.renderDashboard = async (req, res) => {
  const decisions = await req.API.get('/decisions');
  res.render('decisions/list', { decisions });
};

exports.renderAdminDetail = async (req, res) => {
  const { id } = req.params;
  const decision = await req.API.get(`/decisions/${id}`);
  const options = await req.API.get(`options?decisionId=${id}`);
  res.render('decisions/detail', { decision, options });
};
