var path = require("path");

/**
 * GET /
 *
 * host: {addr}:{port}
 * user-agent: My User Agent/1.0
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 201;

  const content = 'OK';
  const response = Buffer.from(content);

  res.setHeader("content-type", "text/html");
  res.setHeader("date", "Sat, 26 Oct 1985 08:20:00 GMT");
  res.setHeader("connection", "close");
  res.setHeader("content-length", response.length);

  res.setHeader("x-yakbak-tape", path.basename(__filename, ".js"));

  res.write(response);

  res.end();

  return __filename;
};
