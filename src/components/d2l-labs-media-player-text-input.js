import { html, LitElement } from 'lit';
import { inputStyles } from '@brightspace-ui/core/components/inputs/input-styles.js';

class MyTextareaInputElem extends LitElement {
	static get styles() {
		return inputStyles;
	}
	render() {
		return html`
		<textarea class="d2l-input"></textarea>
	  `;
	}
}

customElements.define('d2l-labs-media-player-text-input', MyTextareaInputElem);
