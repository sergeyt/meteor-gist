Package.describe({
  summary: "Provides a dead simple way to get and inject public gist into dynamic meteor template."
});

Package.on_use(function(api, where) {
  var both = ['client', 'server'];
  api.use('http', both);
  api.use('handlebars', ['client']);
  api.add_files('gist.js', both);
});
