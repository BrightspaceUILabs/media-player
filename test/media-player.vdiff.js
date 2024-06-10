import '../media-player.js';
import { expect, fixture, focusElem, html } from '@brightspace-ui/testing';

describe('d2l-labs-media-player', () => {
	[
		'video',
		'video-with-poster',
		'audio',
	].forEach((id) => {
		it(id, async() => {
			const elem = await fixture(html`<d2l-labs-media-player></d2l-labs-media-player>`);
			await expect(elem).to.be.golden();
		});
	});

	[
		'video-with-search',
		'audio-with-search'
	].forEach((id) => {
		it(id, async() => {
			const elem = await fixture(html`<d2l-labs-media-player></d2l-labs-media-player>`);
			await focusElem(elem.shadowRoot.querySelector('#d2l-labs-media-player-search-container'));
			await expect(elem).to.be.golden();
		});
	});
});
