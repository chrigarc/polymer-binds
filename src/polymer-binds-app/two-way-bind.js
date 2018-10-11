import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class TwoWayBind extends PolymerElement {
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
                value: 'Two Way Data Binding',
                readonly: true
            },
            propExample1: {
                type: String,
                notify: true //required by two way data binding
            },
            propExample2: {
                type: String,
            }
        };
    }

    eventExample1(){
        this.set('propExample1', "New Value do affect Father");
        this.set('propExample2', "New Value don't affect Father");
    }
}

window.customElements.define('two-way-bind', TwoWayBind);
