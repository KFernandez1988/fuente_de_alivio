exports.renderOptionForm = (req, res) => {
  res.render('option/form');
};

// eslint-disable-next-line no-unused-vars
exports.renderOptionFromWithErros = (errors, req, res, next) => {
  const { title, type } = req.body;

  res.render('decision/form', { title, type, errors });
};

exports.saveOption = async (req, res) => {
  const { title, type } = req.body;

  const { id } = req.params;

  let data = {};

  data = id ? await req.API.post(`/option/${id}`, { title, type })
    : data = await req.API.post('/option', { title, type });

  res.redirect(`admin/options/edit/${data.id}`);
};

exports.renderEditForm = async (req, res) => {
  const { id } = req.params;

  const decision = await req.API.get(`/option/${id}`);

  res.render('option/form', decision);
};

exports.goBackOnError = (req, res) => {
  res.redirect('back');
};

exports.deleteDecision = async (req, res) => {
  const { id } = req.params;

  await req.API.delete(`/options/${id}`);

  res.redirect('admin/option');
};
