Package.describe({
  summary: "iconv-lite - pure javascript character encoding conversion (npm integrated for meteor)"
});

Npm.depends({
  "iconv-lite": "0.4.3"
});

Package.on_use(function (api) {
  api.add_files('iconv-lite.js', 'server');
  api.export('iconv', 'server');

  if (typeof api.export !== 'undefined') {
    api.use('webapp', 'server');
  }
});
