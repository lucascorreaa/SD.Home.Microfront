const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "suporte-de-domingo",
    projectName: "home",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      filename: "bundle.min.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/dist/",
    },
  });
};
