var express = require('express'),
    router = express.Router(),
    productsController = require('./products_controller');

router.get('/', function(req, res) {
  productsController.list(function(resp) {
    res.json(resp);
  });
});

router.post('/', function(req, res) {
  productsController.save(req.body, function(resp) {
    res.json(resp);
  });
});

router.get('/:id', function(req, res) {
  var id = { _id: req.params.id };

  productsController.show(id, function(resp) {
    res.json(resp);
  });
});

router.put('/:id', function(req, res) {
  var id = { _id: req.params.id };
  var mod = req.body;
  delete mod._id;

  productsController.update(id, mod, function(resp) {
    res.json(resp);
  });
});

router.delete('/:id', function(req, res) {
  var id = { _id: req.params.id };

  productsController.delete(id, function(resp) {
    res.json(resp);
  });
});

module.exports = router;