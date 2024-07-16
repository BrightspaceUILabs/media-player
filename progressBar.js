import '@brightspace-ui/core/components/colors/colors.js';
import { css, html, LitElement } from 'lit';

class ProgressBar extends LitElement {
	static get properties() {
		return {
			value: { type: Number },
			min: { type: Number },
			max: { type: Number }
		};
	}

	static get styles() {
		return css`
			:host {
				display: block;
				width: 100%;
				position: relative;
				overflow: hidden;
			}

			 :host([hidden]) {
				display: none !important;
			}

			#progressContainer {
				position: relative;
				height: var(--d2l-progress-height, 6px);
				background: var(--d2l-progress-container-color, var(--d2l-color-gypsum));
			}

			#primaryProgress {
				background: var(--d2l-progress-active-color, var(--d2l-color-celestine));
				height: 100%;
			}
		`;
	}

	constructor() {
		super();
		this.value = 0;
		this.min = 0;
		this.max = 100;
	}

	render() {
		return html`
		<div id="progressContainer">
			<div id="primaryProgress" class="fit"></div>
		</div>`;
	}

	updated(changedProperties) {
		if (changedProperties.has('value') || changedProperties.has('min') || changedProperties.has('max')) {
			this._progressChanged(this.value);
		}
	}

	_calcRatio(value) {
		return (value - this.min) / (this.max - this.min);
	}

	_clampValue(value) {
		return Math.max(this.min, Math.min(this.max, value));
	}

	_progressChanged(value) {
		this.value = this._clampValue(value);

		const mainRatio = this._calcRatio(this.value) * 100;
		const progress = this.shadowRoot.getElementById('primaryProgress');

		this._transformProgress(progress, mainRatio);
	}

	_transformProgress(progress, ratio) {
		progress.style.width = `${ratio}%`;
	}
}
customElements.define('d2l-progress', ProgressBar);
