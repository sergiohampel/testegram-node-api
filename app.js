var app = require('./config/app_config'),
    db = require('./config/db_config'),
    api = {};

api.products = require('./modules/products/products_routes');
api.categories = require('./modules/categories/categories_routes');

app.use('/api/v1/products', api.products);
app.use('/api/v1/categories', api.categories);

app.get("/api", function(req, resp) {
  resp.send("Testegram API!");
});

module.exports = app;