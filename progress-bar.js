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
				overflow: hidden;
				position: relative;
				width: 100%;
			}

			:host([hidden]) {
				display: none !important;
			}

			#progressContainer {
				--d2l-calculated-progress-background-color: var(--d2l-progress-background-color, var(--d2l-color-corundum-65-opacity));
				--d2l-calculated-progress-border-radius: var(--d2l-progress-border-radius, 6px);
				--d2l-calculated-progress-shadow-color: var(--d2l-progress-shadow-color, var(--d2l-color-galena-88-opacity));
				--d2l-progress-container-color: var(--d2l-calculated-progress-background-color);
				background: var(--d2l-progress-container-color, var(--d2l-color-gypsum));
				border-radius: var(--d2l-calculated-progress-border-radius);
				box-shadow: inset 0 1px 0 0 var(--d2l-calculated-progress-shadow-color);
				height: var(--d2l-progress-height, 6px);
				position: relative;
			}

			#primaryProgress {
				@apply --d2l-progress-primary;
				background: var(--d2l-progress-active-color, var(--d2l-color-celestine));
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
