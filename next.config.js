const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  118n: {
    locals: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});
