Package.describe({
  name: "sergeyt:gist",
  summary: "Provides a dead simple way to get and inject public gist into dynamic meteor template.",
  git: "https://github.com/sergeyt/meteor-gist.git",
  version: "0.1.0"
});

Package.onUse(function(api) {
  var anywhere = ['client', 'server'];
  api.versionsFrom('METEOR@0.9.0');
  api.use('http', anywhere);
  api.use('ui', 'client');
  api.addFiles('index.js', anywhere);
});
