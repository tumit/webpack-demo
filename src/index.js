import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'กรุงเทพมหานคร'], ' ');
  element.classList.add('hello');

  var ngIcon = new Image();
  ngIcon.src = Icon;

  element.appendChild(ngIcon);

  return element;
}

document.body.appendChild(component());
