const messages = require('./messages');
import Button from './button';
import Kitten from './image';

const newMessage = ()=> (`<p>${messages.hi} ${messages.event} <br>${Kitten}</p>`);
//const newMessage = ()=> (Button.button);

const app = document.getElementById('app');
app.innerHTML = newMessage();
//Button.attachEl();

if (module.hot) {
    module.hot.accept();
}