import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class OneWayBind extends PolymerElement {
    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[name]]!</h2>
      <p><b>propExample1: </b> [[propExample1]]</p>
      <p><b>propExample2: </b> [[propExample2]]</p>
      <button id="button1" on-click="eventExample1">Change propExample1 value</button>
    `;
    }
    static get properties() {
        return {
            name: {
                type: String,
                value: 'One Way Data Binding',
                readonly: true
            },
            propExample1: {
                type: String
            },
            propExample2: {
                type: String,
                value: 'This value must change if propExample change and result reflect in attributes DOM component',
                reflectToAttribute: true
            }
        };
    }

    eventExample1(){
        this.set('propExample1', "New Value don't affect Father");
    }
}

window.customElements.define('one-way-bind', OneWayBind);
