import { css, html, LitElement } from 'lit';
import { inputStyles } from '@brightspace-ui/core/components/inputs/input-styles.js';

class MyTextareaInputElem extends LitElement {
	static get styles() {
		return [ css`
			textarea.d2l-input {
				border-style: none;
				box-shadow: none;
				height: 100%;
				hyphens: auto;
				min-height: 0;
				min-width: 0;
				outline: none;
				overflow: auto;
				resize: none;
				scrollbar-width: thin;
			}

`, inputStyles];
	}

	constructor() {
		super();
		this._area = null;
	}

	get text() {
		return this._textArea.value;
	}

	set text(newText) {
		if (typeof newText === 'string' || newText instanceof String) {
			this._textArea.value = newText;
		}
	}

	render() {
		return html`
		<textarea class="d2l-input" id="textarea"></textarea>
	  `;
	}

	get _textArea() {
		if (this._area === null) {
			this._area = this.shadowRoot.querySelector('textarea');
		}
		return this._area;
	}
}

customElements.define('d2l-labs-media-player-text-input', MyTextareaInputElem);
