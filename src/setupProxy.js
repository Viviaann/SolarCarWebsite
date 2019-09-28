const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/", { target: "http://localhost:3001/" }));

  /*mailer({ email, name, text: message }).then(() => {
    console.log(`Sent the message "${message}" from <${name}> ${email}.`);
    res.redirect('/#success');
  }).catch((error) => {
    console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
    res.redirect('/#error');
  })*/
};
