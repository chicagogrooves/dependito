Package.describe({
  name: "deanius:dependito",
  summary: "Visualize your application's dependency structure",
  version: "0.0.1",
  git: "https://github.com/deanius/meteor-dependito.git"
});

Package.onUse(function(api) {
  // Meteor releases below this version are not supported
  api.versionsFrom("1.2.0.1");

  // Core packages and 3rd party packages
  api.use("ddp");
  api.use("tracker");

  // The files of this package
  api.addFiles("server/dependito.js", "server");

  // The variables that become global for users of your package
  api.export("Dependito", ["client", "server"]);
});

Npm.depends({
  "dependito": "0.3.6"
});
