const puppeteer = require('puppeteer');
const VisualDiff = require('@brightspace-ui/visual-diff');

describe('d2l-labs-media-player', () => {

	const visualDiff = new VisualDiff('d2l-labs-media-player', __dirname);

	let browser, page;

	before(async() => {
		browser = await puppeteer.launch();
		page = await visualDiff.createPage(browser);
		await page.setViewport({ width: 800, height: 1600 });
		await page.goto(`${visualDiff.getBaseUrl()}/test/media-player.visual-diff.html`, { waitUntil: ['networkidle0', 'load'] });
		await page.bringToFront();
	});

	beforeEach(async() => {
		await visualDiff.resetFocus(page);
	});

	after(async() => await browser.close());

	[
		'video',
		'video-with-poster',
		'video-with-search',
		'audio',
		'audio-with-search',
	].forEach((id) => {
		it(id, async function() {
			const rect = await visualDiff.getRect(page, `#${id}`);
			await visualDiff.screenshotAndCompare(page, this.test.fullTitle(), { clip: rect });
		});
	});
});
