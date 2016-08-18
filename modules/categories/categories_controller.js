var Categories = require('./categories_model');

exports.list = function(callback) {
  Categories.find({}, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível retornar as categorias!'
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
  Categories.findOne(id, function(err, data) {
    if (err || data === null) {
      callback({
        status: 'error',
        message: 'Não foi possível retornar a categoria!'
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
  var product = new Categories(product);

  product.save(function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível adicionar a categoria!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Categoria adicionada com sucesso!',
        data: data
      });
    }
  });
}

exports.update = function(id, mod, callback) {
  Categories.update(id, mod, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível atualizar a categoria!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Categoria atualizada com sucesso!',
        data: data
      });
    }
  });
}

exports.delete = function(id, callback) {
  Categories.remove(id, function(err, data) {
    if (err) {
      callback({
        status: 'error',
        message: 'Não foi possível excluir a categoria!'
      });
    } else {
      callback({
        status: 'success',
        message: 'Categoria excluída com sucesso!',
        data: data
      });
    }
  });
}