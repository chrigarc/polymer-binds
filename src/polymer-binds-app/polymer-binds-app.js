import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './one-way-bind';
import './two-way-bind';

/**
 * @customElement
 * @polymer
 */
class PolymerBindsApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Hello [[appName]]!</h1>
      <ul>
        <li><b>propExampleApp1: </b>[[propExampleApp1]]</li>
        <li><b>propExampleApp2: </b>{{propExampleApp2}}</li>
        <li><b>propExampleApp2: </b>{{propExampleApp3}}</li>
      </ul>
      <button id="button1" on-click="eventExample1">Change props value and affect two because send bind data</button>
      <one-way-bind id="component1" prop-example1="[[propExampleApp1]]" prop-example2=""></one-way-bind>
      <!-- como el component no tiene propiedades con notify aunque se le coloquen las {{}} ignora el two way data binding -->
      <one-way-bind id="component2" prop-example1="{{propExampleApp1}}" prop-example2=""></one-way-bind>
      <two-way-bind prop-example1="{{propExampleApp2}}" prop-example2="{{propExampleApp3}}"></two-way-bind>
      
    `;
  }
  static get properties() {
    return {
      appName: {
        type: String,
        value: 'polymer-binds-app',
        readonly: true
      },
      propExampleApp1:{
        value: 'Property with one way data binding and without reflectAttribute',
        type: String
      },
      propExampleApp2: {
        value: 'Property with two way data binding',
        type: String
      },
      propExampleApp3: {
          value: 'Property with {{}} but without notify',
          type: String
      },
    };
  }

  connectedCallback(){
    super.connectedCallback();
    const component1 = this.$.component1.propExample2 = 'Property with one way data binding and with reflectAttribute';
  }

  eventExample1(){
    this.set('propExampleApp1', 'change and affect');
    this.set('propExampleApp2', 'change and affect');
  }
}

window.customElements.define('polymer-binds-app', PolymerBindsApp);
