const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
 app.use(
  "/api",
  createProxyMiddleware({
   target: "http://54.218.71.97:8080",
   changeOrigin: true,
  })
 );
};
