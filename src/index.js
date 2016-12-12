var app = document.getElementById('app');
var messages = require('./messages');
app.innerHTML = "Hello with plugin<p>" + messages.hi + '<p> ' + messages.event + '!!!';


if (module.hot) {
    module.hot.accept();
}