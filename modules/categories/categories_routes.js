var express = require('express'),
    router = express.Router(),
    categoriesController = require('./categories_controller');

router.get('/', function(req, res) {
  categoriesController.list(function(resp) {
    res.json(resp);
  });
});

router.post('/', function(req, res) {
  categoriesController.save(req.body, function(resp) {
    res.json(resp);
  });
});

router.get('/:id', function(req, res) {
  var id = { _id: req.params.id };

  categoriesController.show(id, function(resp) {
    res.json(resp);
  });
});

router.put('/:id', function(req, res) {
  var id = { _id: req.params.id };
  var mod = req.body;
  delete mod._id;

  categoriesController.update(id, mod, function(resp) {
    res.json(resp);
  });
});

router.delete('/:id', function(req, res) {
  var id = { _id: req.params.id };

  categoriesController.delete(id, function(resp) {
    res.json(resp);
  });
});

module.exports = router;