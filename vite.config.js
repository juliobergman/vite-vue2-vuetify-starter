const { createVuePlugin } = require("vite-plugin-vue2");

module.exports = {
  transpileDependencies: ["vuetify"],
  plugins: [createVuePlugin()],
};
