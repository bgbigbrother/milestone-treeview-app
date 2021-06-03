import AppTemplate from './js/template.js';

const moduleName = 'milestone-app';

export default class AppModule extends HTMLElement {
  constructor() {
    super(name);
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const template = new AppTemplate(moduleName).get();
    this.shadow.appendChild(template.content.cloneNode(true));
	  this.loginElement = document.querySelector('milestone-login-form');
	  this.loginElement.setAttribute('show', 'true');
	  this.loginElement.addEventListener('login', this.onLogin.bind(this))
  }

  onLogin() {
    let treeviewElement = document.createElement('milestone-treeview');
    treeviewElement.setAttribute('show', 'true');
    document.querySelector('div').appendChild(treeviewElement);
  }
}

window.customElements.define(moduleName, AppModule);
