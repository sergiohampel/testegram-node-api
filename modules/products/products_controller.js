var Products = require('./products_model');

exports.list = function(callback) {
  Products.find({}, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível retornar os produtos!'
      });
    } else {
      callback({
        status: 'success',
        data: data
      });
    }
  });
}

exports.show = function(id, callback) {
  Products.findOne(id, function(err, data) {
    if (err || data === null) {
      callback({
        status: 'error',
        message: 'Não foi possível retornar o produto!'
      });
    } else {
      callback({
        status: 'success',
        data: data
      });
    }
  });
}

exports.save = function(product, callback) {
  var product = new Products(product);

  product.save(function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível adicionar o produto!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Produto adicionado com sucesso!',
        data: data
      });
    }
  });
}

exports.update = function(id, mod, callback) {
  Products.update(id, mod, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível atualizar o produto!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Produto atualizado com sucesso!',
        data: data
      });
    }
  });
}

exports.delete = function(id, callback) {
  Products.remove(id, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível excluir o produto!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Produto excluído com sucesso!',
        data: data
      });
    }
  });
}