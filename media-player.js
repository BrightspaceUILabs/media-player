import '@brightspace-ui/core/components/icons/icon.js';
import '@d2l/seek-bar/d2l-seek-bar.js';
import { css, html, LitElement } from 'lit-element/lit-element.js';
import { InternalLocalizeMixin } from './src/mixins/internal-localize-mixin';
import { styleMap } from 'lit-html/directives/style-map';

const nativeControls = !document.createElement('video').canPlayType;

class MediaPlayer extends InternalLocalizeMixin(LitElement) {

	static get properties() {
		return {
			src: { type: String },
			_fullscreen: { type: Boolean },
			_hidingControls: { type: Boolean },
			_hoveringSpeedContainer: { type: Boolean },
			_hoveringVolumeContainer: { type: Boolean },
			_muted: { type: Boolean },
			_playing: { type: Boolean },
			_secondsDuration: { type: Number },
			_secondsElapsed: { type: Number },
			_speed: { type: Number },
			_videoContainerStyle: { type: Object },
			_volume: { type: Number },
		};
	}

	static get styles() {
		return css`
			.d2l-media-player-container {
				align-items: center;
				display: flex;
				height: 100%;
				justify-content: center;
				width: 100%;
			}

			.video-container {
				border-radius: 4px;
				display: flex;
				flex-direction: column;
				height: 100%;
				justify-content: center;
				margin: 0 auto;
				position: relative;
				width: 100%;
			}

			video {
				border-radius: 4px;
				height: 100%;
				width: 100%;
			}

			#video-controls {
				background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
				bottom: 0;
				height: 53px;
				left: 0;
				position: absolute;
				right: 0;
				transition: all 0.2s ease;
			}

			#video-controls > * {
				position: relative;
				top: -9px;
			}

			#seek-bar {
				--d2l-knob-focus-color: #fff;
				--d2l-knob-focus-size: 4px;
				--d2l-knob-size: 15px;
				--d2l-outer-knob-color: var(--d2l-color-celestine-plus-1);
				--d2l-progress-border-radius: 0;
				left: 0;
				position: relative;
				right: 0;
			}

			.control-element {
				border-radius: 4px;
				display: inline-block;
				font-size: 1rem;
				margin: 0 2px;
				padding: 10px 10px;
				position: relative;
			}

			.control-element:hover {
				background: rgba(255, 255, 255, 0.2);
				cursor: pointer;
			}

			#time:hover {
				background: rgba(255, 255, 255, 0);
				cursor: auto;
			}

			button:hover {
				cursor: pointer;
			}

			.control-display {
				color: white;
			}

			button {
				background-color: transparent;
				border: none;
				outline: none;
				padding: 0;
			}

			.left {
				float: left;
				height: 28px;
			}

			.right {
				float: right;
				height: 28px;
			}

			.right > * {
				float: right;
			}

			#volume-container {
				padding: 0;
			}

			#volume-button {
				font-size: 1rem;
				z-index: 1;
			}

			#volume-level-container {
				bottom: 41px;
				height: 40px;
				left: -19px;
				padding: 0px;
				position: absolute;
				width: 75px;
			}

			#volume-level-background {
				background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
				border-radius: 0px 5px 5px 0px;
				height: 38px;
				left: 36px;
				padding: 0px 10px;
				position: relative;
				top: 2px;
				width: 125px;
			}

			#volume-level {
				--d2l-knob-focus-color: #fff;
				--d2l-knob-focus-size: 4px;
				--d2l-knob-size: 18px;
				--d2l-outer-knob-color: var(--d2l-color-celestine-plus-1);
				position: relative;
				top: 12px;
			}

			#volume-button {
				// height: 18px;
				height: 43px;
				width: 42px;
				position: relative;
			}

			#speed-container {
				height: 0px;
			}

			#speed-container > button {
				font-size: 0.8rem;
			}

			#speed-level-container {
				bottom: 50px;
				height: 15px;
				position: relative;
				top: -50px;
				width: 45px;
			}

			#speed-level-background {
				background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
				border-radius: 5px 5px 0px 0px;
				bottom: 14px;
				height: 240px;
				left: -33px;
				position: absolute;
				width: 110px;
			}

			#speed-level-background > button {
				border-bottom: 1px solid rgba(255, 255, 255, 0.2);
				color: white;
				display: block;
				font-size: 0.8rem;
				padding: 7px 30px;
				width: 100%;
			}

			#speed-level-background > button:hover {
				background: rgba(255, 255, 255, 0.3);
			}

			.rotated {
				transform: rotate(-90deg);
			}
		`;
	}

	static _formatTime(totalSeconds) {
		let str = '';

		const minutes = Math.floor((totalSeconds % 3600) / 60);
		const hours = Math.floor(totalSeconds / 3600);

		if (hours > 0) {
			str += `${hours}:`;

			if (minutes < 10) {
				str += '0';
			}
		}

		str += `${minutes}:`;

		const seconds = totalSeconds % 60;
		if (seconds < 10) {
			str += '0';
		}

		str += seconds;

		return str;
	}

	static get _hideDelay() {
		return 2000;
	}

	static get _keyBindings() {
		return {
			play: 'k',
			mute: 'm',
			fullscreen: 'f'
		};
	}

	constructor() {
		super();

		this.duration = '00:00';
		this._fullscreen = false;
		this._hidingControls = true;
		this._hoveringSpeedContainer = false;
		this._hoveringVideoControls = false;
		this._hoveringVolumeContainer = false;
		this._muted = false;
		this._playing = false;
		this._secondsDuration = 1;
		this._secondsElapsed = 0;
		this._speed = 1;
		this._videoContainerStyle = { cursor: 'auto' };
		this._volume = 1;

		this._listenForKeyboard = this._listenForKeyboard.bind(this);
	}

	render() {
		return html`
		<div class="d2l-media-player-container">
			<div class="video-container" id="video-container" style=${styleMap(this._videoContainerStyle)} @mousemove=${this._showControlsTemporarily}>
				<video ?controls="${nativeControls}" class="video" id="video" preload="metadata" @play=${this._onPlay} @pause=${this._onPause} @loadedmetadata=${this._initializeVideo} @timeupdate=${this._updateTimeElapsed} @click=${this._togglePlay} @volumechange=${this._onVolumeChange}>
					<source src="${this.src}">
				</video>

				<div id="video-controls" ?hidden="${nativeControls || (this._hidingControls)}" @mouseenter=${this._startHoveringControls} @mouseleave=${this._stopHoveringControls}>
					<d2l-seek-bar fullWidth solid id="seek-bar" value="${Math.floor(this._secondsElapsed / this._secondsDuration * 100)}" aria-label="SeekBar" aria-valuenow="${Math.floor(this._secondsElapsed / this._secondsDuration * 100)}" @drag-end=${this._onDragEndSeek} @position-change=${this._onPositionChangeSeek}></d2l-seek-bar>
					<div class="left">
						<button class="control-element" title="${this._getPlayTooltip()}" @click=${this._togglePlay}>
							<d2l-icon class="control-display" icon="${this._getPlayIcon()}"></d2l-icon>
						</button>

						<div class="control-element" id="volume-container" @mouseenter=${this._startHoveringVolumeContainer} @mouseleave=${this._stopHoveringVolumeContainer}>
							<button id="volume-button" title="${this._getMuteTooltip()}" @click=${this._toggleMute}>
								<d2l-icon class="control-display" icon="tier1:volume"></d2l-icon>
							</button>

							<div class="rotated" id="volume-level-container" ?hidden="${!this._hoveringVolumeContainer}">
								<div id="volume-level-background">
									<d2l-seek-bar solid id="volume-level" vertical="" value="${Math.round(this._volume * 100)}" @drag-end=${this._onDragEndVolume} @position-change=${this._onPositionChangeVolume}></d2l-seek-bar>
								</div>
							</div>
						</div>

						<div class="control-element control-display" id="time">
							${MediaPlayer._formatTime(this._secondsElapsed)} / ${MediaPlayer._formatTime(this._secondsDuration)}
						</div>
					</div>
					<div class="right">
						<button class="control-element" title="${this._getFullscreenTooltip()}" @click=${this._toggleFullscreen}>
							<d2l-icon class="control-display" icon="${this._getFullscreenIcon()}"></d2l-icon>
						</button>

						<div id="speed-container" @mouseenter=${this._startHoveringSpeedContainer} @mouseleave=${this._stopHoveringSpeedContainer}>
							<button class="control-element control-display">
								${this._speed}x
							</button>

							<div id="speed-level-container">
								<div id="speed-level-background" ?hidden="${!this._hoveringSpeedContainer}">
									<button value="0.25" @click=${this._updatePlaybackRate}>0.25</button>
									<button value="0.5" @click=${this._updatePlaybackRate}>0.5</button>
									<button value="0.75" @click=${this._updatePlaybackRate}>0.75</button>
									<button value="1" @click=${this._updatePlaybackRate}>Normal</button>
									<button value="1.25" @click=${this._updatePlaybackRate}>1.25</button>
									<button value="1.5" @click=${this._updatePlaybackRate}>1.5</button>
									<button value="2" @click=${this._updatePlaybackRate}>2</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		`;
	}

	connectedCallback() {
		super.connectedCallback();

		document.addEventListener('keydown', this._listenForKeyboard);
	}

	disconnectedCallback() {
		super.disconnectedCallback();

		document.removeEventListener('keydown', this._listenForKeyboard);
	}

	firstUpdated() {
		super.firstUpdated();

		this._video = this.shadowRoot.getElementById('video');
		this._seekBar = this.shadowRoot.getElementById('seek-bar');
		this._volumeLevel = this.shadowRoot.getElementById('volume-level');
		this._videoContainer = this.shadowRoot.getElementById('video-container');

		this._showControlsTemporarily();
	}

	_getFullscreenIcon() {
		return this._fullscreen ? 'tier1:smallscreen' : 'tier1:fullscreen';
	}

	_getPlayIcon() {
		return this._playing ? 'tier1:pause' : 'tier1:play';
	}

	_getPlayTooltip() {
		return `${this._playing ? this.localize('pause') : this.localize('play')} (${MediaPlayer._keyBindings.play})`;
	}

	_getFullscreenTooltip() {
		return `${this._fullscreen ? this.localize('exitFullscreen') : this.localize('fullscreen')} (${MediaPlayer._keyBindings.fullscreen})`;
	}

	_getMuteTooltip() {
		return `${this._muted ? this.localize('unmute') : this.localize('mute')} (${MediaPlayer._keyBindings.mute})`;
	}

	_onDragEndSeek() {
		if (this._seekBar) { // _onDragEndSeek() is called once before firstUpdated()
			this._updateCurrentTimeOfVideo(this._seekBar.immediateValue / 100);
		}
	}

	_onPositionChangeSeek() {
		this._updateCurrentTimeOfVideo(this._seekBar.immediateValue / 100);
		this._showControlsTemporarily();
	}

	_updateCurrentTimeOfVideo(fraction) {
		this._video.currentTime = Math.floor(fraction * this._secondsDuration);
	}

	_onDragEndVolume() { // _onDragEndVolume() is called once before firstUpdated()
		if (this._volumeLevel) {
			this._video.volume = this._volumeLevel.immediateValue / 100;
		}
	}

	_onPositionChangeVolume() {
		this._video.volume = this._volumeLevel.immediateValue / 100;
	}

	_onVolumeChange() {
		this._volume = this._video.volume;
	}

	_onPlay() {
		this._playing = true;
	}

	_onPause() {
		this._playing = false;
	}

	_togglePlay() {
		if (this._video.paused) {
			this._video.play();
		} else {
			this._video.pause();
		}
	}

	_toggleMute() {
		if (this._muted) {
			this._video.volume = this.preMuteVolume;
		} else {
			this.preMuteVolume = this._video.volume;
			this._video.volume = 0;
		}

		this._muted = !this._muted;
	}

	_toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
			this._fullscreen = false;
		} else {
			this._videoContainer.requestFullscreen();
			this._fullscreen = true;
		}
	}

	_initializeVideo() {
		this._secondsDuration = Math.floor(this._video.duration);
	}

	_updateTimeElapsed() {
		this._secondsElapsed = Math.floor(this._video.currentTime);
	}

	_listenForKeyboard(e) {
		switch (e.key) {
			case MediaPlayer._keyBindings.play:
				this._togglePlay();
				this._showControlsTemporarily();
				break;
			case MediaPlayer._keyBindings.mute:
				this._toggleMute();
				this._showControlsTemporarily();
				break;
			case MediaPlayer._keyBindings.fullscreen:
				this._toggleFullscreen();
				this._showControlsTemporarily();
				break;
		}
	}

	_startHoveringControls() {
		this._hoveringVideoControls = true;
		this._showControls();
	}

	_stopHoveringControls() {
		this._hoveringVideoControls = false;
		this._showControlsTemporarily();
	}

	_showControls() {
		this._hidingControls = false;
		this.lastTimeEntered = Date.now();
		this._videoContainerStyle = { ...this._videoContainerStyle, cursor: 'auto' };
	}

	_showControlsTemporarily() {
		this._showControls();

		setTimeout(() => {
			if (Date.now() - this.lastTimeEntered >= MediaPlayer._hideDelay && !this._hoveringVideoControls && this._playing) {
				this._hidingControls = true;
				this._videoContainerStyle = { ...this._videoContainerStyle, cursor: 'none' };
			}
		}, MediaPlayer._hideDelay);
	}

	_updatePlaybackRate(e) {
		const rate = e.target.value;
		this._speed = rate;
		this._video.playbackRate = rate;
		this._hoveringSpeedContainer = false;
	}

	_startHoveringSpeedContainer() {
		this._hoveringSpeedContainer = true;
	}

	_stopHoveringSpeedContainer() {
		this._hoveringSpeedContainer = false;
	}

	_startHoveringVolumeContainer() {
		this._hoveringVolumeContainer = true;
	}

	_stopHoveringVolumeContainer() {
		this._hoveringVolumeContainer = false;
	}
}

customElements.define('d2l-media-player', MediaPlayer);
