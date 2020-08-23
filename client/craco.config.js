const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#3f4448', '@font-family' : "Inter"},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};