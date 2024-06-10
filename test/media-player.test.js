import '../media-player.js';
import { expect, fixture, html } from '@brightspace-ui/testing';
import { runConstructor } from '@brightspace-ui/core/tools/constructor-test-helper.js';

describe('d2l-labs-media-player', () => {

	describe('accessibility', () => {
		it('should pass all axe tests', async() => {
			const el = await fixture(html`<d2l-labs-media-player></d2l-labs-media-player>`);
			await expect(el).to.be.accessible();
		});
	});

	describe('constructor', () => {
		it('should construct', () => {
			runConstructor('d2l-labs-media-player');
		});
	});
});
