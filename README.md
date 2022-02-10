# media-player

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/media-player.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/media-player)

> Note: this is a ["labs" component](https://github.com/BrightspaceUI/guide/wiki/Component-Tiers). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#working-with-design)
> - [ ] [design.d2l entry](http://design.d2l/)
> - [ ] [Architectural sign-off](https://github.com/BrightspaceUI/guide/wiki/Before-you-build#web-component-architecture)
> - [x] [Continuous integration](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-continuously-with-travis-ci)
> - [x] [Cross-browser testing](https://github.com/BrightspaceUI/guide/wiki/Testing#cross-browser-testing-with-sauce-labs)
> - [x] [Unit tests](https://github.com/BrightspaceUI/guide/wiki/Testing#testing-with-polymer-test) (if applicable)
> - [x] [Accessibility tests](https://github.com/BrightspaceUI/guide/wiki/Testing#automated-accessibility-testing-with-axe)
> - [x] [Visual diff tests](https://github.com/BrightspaceUI/visual-diff)
> - [x] [Localization](https://github.com/BrightspaceUI/guide/wiki/Localization) with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

A LitElement based media player component, designed for similarity across browsers. Capable of playing video and audio content.

> Displaying video
![Example of video](demo/example-video.gif)

> Displaying audio
![Example of audio](demo/example-audio.gif)

## Installation

To install from NPM:

```shell
npm install @brightspace-ui-labs/media-player
```

## d2l-labs-media-player

```html
<script type="module">
    import '@brightspace-ui-labs/media-player/media-player.js';
</script>
<d2l-labs-media-player src="/video.webm"></d2l-labs-media-player>
```

**Attributes:**

| Attribute | Type | Default | Description |
|--|--|--|--|
| allow-download| Boolean | false | If set, will allow the media to be downloaded.
| autoplay | Boolean | false | If set, will play the media as soon as it has been loaded. |
| crossorigin | String | null | If set, will set the `crossorigin` attribute on the underlying media element to the set value.
| hide-captions-selection | Boolean | false | If set, the menu item to configure captions is hidden. |
| hide-seek-bar | Boolean | false | If set, the seek bar will not be shown. |
| locale | String | en | If set, will display chapter titles in the given locale when possible. |
| loop | Boolean | false | If set, once the media has finished playing it will replay from the beginning. |
| media-type | ["video", "audio"] | null | Whether the video or audio player should be rendered. If not set, a loading indicator will be displayed until set.
| metadata | JSON | false | Metadata JSON of the video, contains chapters and cuts data. |
| poster | String | null | URL of the image to display in place of the media before it has loaded. |
| src | String |  | URL of the media to play. If multiple sources are desired, use `<source>` tags instead (see below). |
| thumbnails | String |  | If set, will show thumbnails on preview. See below for required format. |

```
<!-- Render a media player with a source file and loop the media when it reaches the end -->

<d2l-labs-media-player loop src="./local-video.mp4"></d2l-labs-media-player>
```

**Properties:**

| Property | Type | Get/Set | Description |
|--|--|--|--|
| currentTime | Number | Get & Set | Current time playback time of the media in seconds. |
| activeCue | Object | Get | VTTCue instance for the currently-displayed captions cue. If no cue is currently displayed, the value is null. |
| duration | Number | Get | Total duration of the media in seconds. |
| ended | Boolean | Get | Whether or not the video has ended. |
| paused | Boolean | Get | Whether or not the video is currently paused. |
| sourceType | ["audio", "video", "unknown"] | Get | The source type of the media.
| textTracks | [TextTrack] | Get | The TextTracks, for handling WebVTT. (See [MDN link](https://developer.mozilla.org/en-US/docs/Web/API/TextTrack))

```
// Programatically determine the current playback time of the media player

console.log(`Current playback time of the media player = ${this.document.querySelector('d2l-labs-media-player').currentTime} sec`);
```

**Methods:**

| Method | Type | Description |
|--|--|--|
| exitFullscreen() | void | Requests to exit fullscreen mode from the browser. Ignored if it is not playing video content, or if the video is not in fullscreen mode.
| play() | void | Begins playing the media. Ignored if the media is already playing.
| pause() | void | Pauses the media. Ignored if the media is already paused.
| requestFullscreen() | void | Requests fullscreen mode from the browser. Ignored if it is not playing video content, or the video is already in fullscreen mode.

```
// Programatically pause the media player

this.document.querySelector('d2l-labs-media-player').pause();
```

**Events:**

| Event | Description |
|--|--|
| cuechange | Dispatched when the currently-displayed captions cue changes. |
| ended | Dispatched when the media has reached the end of its duration. |
| error | Dispatched when the media failed to load. |
| loadeddata | Dispatched when the media at the current playback position has finished loading. Often the first frame. |
| loadedmetadata | Dispatched when the metadata for the media has finished loading. |
| play | Dispatched when the media begins playing. |
| pause | Dispatched when the media is paused. |
| timeupdate | Dispatched when the currentTime of the media player has been updated. |
| trackloaded | Dispatched when a track element has loaded. |
| trackloadfailed | Dispatched when a track element could not be loaded from the provided src attribute. |
| tracksmenuitemchanged | Dispatched when the tracks menu item has changed. |
```
// Listen for the loadeddata event

this.document.querySelector('d2l-labs-media-player').addEventListener('loadeddata', () => {
	console.log('loadeddata event has been dispatched');
});
```

## Multiple qualities using `<source>`

The media player supports switching to different qualities. If multiple `<source>` tags are present, a quality selector will be available in the menu. In this case, do not set `src` on `d2l-labs-media-player`.

```
<d2l-labs-media-player>
  <source src="sample-video-144p.mp4" label="SD">
  <source src="sample-video.mp4" label="HD" default>
</d2l-labs-media-player
```

**Attributes**

| Attribute | Type | Default | Description |
|--|--|--|--|
| label | String, required | | The label for the track, displayed to the user for selection.
| src | String, required | | The URL of the source file.
| default | Boolean | false | The source to be selected by default. If no source has the `default` attribute, then the first `<source>` tag is selected by default. Only one default should be set.

## Showing thumbnails preview with `thumbnails` attribute

Provide a url to the thumbnails sprite image. This sprite is a grid of images taken from the video, at a set interval.

> e.g. sample video thumbnails sprite
![Example thumbnails sprite](demo/th90w160i1-samplevideo.png)

The thumbnail file name must use the following format:
`th<height>w<width>i<interval>-<hash>.[png|jpg]`

- `width` and `height` are the width/height px of each individual thumbnail
- `interval` indicates how many seconds apart each thumbnail is

For example, a sprite image named `th90w160i5-<hash>png` has the thumbnails 5 seconds apart, with width 160px and height 90px.

| Attribute | Required | Default | Description |
|--|--|--|--|
| hash | optional |  |
| height | optional | 90px | Height px of each individual thumbnail in the sprite.
| interval | required | | Interval in seconds between each thumbnail.
| width | optional | 160px | Width px of each individual thumbnail in the sprite.

## Chapters with `metadata` attribute

Provide metadata JSON e.g. [getMetadata endpoint](http://d2l-content-service-docs.s3-website-us-east-1.amazonaws.com/#operation/getMetadata)

Example format:
```
{
    "cuts": [
      "in": 20,
      "out": 30
    ],
    "chapters": [
      {
        "time": 0,
        "title": {
          "en": "Chapter One",
          "fr": "Chapitre Un"
        }
      },
      {
        "time": 30,
        "title": {
          "en": "Chapter Two",
          "fr": "Chapitre Deux"
        }
      },
      {
        "time": 70,
        "title": {
          "en": "Chapter Three",
          "fr": "Chapitre Trois"
        }
      }
    ]
}
```

## Captions and Subtitles Using `<track>`

The media player supports captions and subtitles, provided as `.srt` or `.vtt` files. If any valid tracks are present, a captions menu will be presented in the settings menu with an item for each track.

```html
<script type="module">
    import '@brightspace-ui-labs/media-player/media-player.js';
</script>
<d2l-labs-media-player src="/video.webm">
	<track src="/english-captions.srt" srclang="en" label="English" kind="captions">
	<track src="/french-captions.vtt" srclang="fr" label="French" kind="captions">
</d2l-labs-media-player>
```

**Attributes**

| Attribute | Type | Default | Description |
|--|--|--|--|
| kind | ["captions", "subtitles"], required | | The kind of track.
| label | String, required | | The label for the track, displayed to the user for selection.
| src | String, required | | The URL of the source file.
| srclang | String, required | | The language's code.
| default | Boolean | false | The track to be selected by default. If D2L.MediaPlayer.Preferences.Track is defined in local storage, then it will take precedence over this attribute.
| default-ignore-preferences | Boolean | false | Same as default, but if D2L.MediaPlayer.Preferences.Track is defined, it will be ignored and this track will be selected instead.

## Local Storage

The media player uses local storage to persist the user's playback speed, track selections, and volume.

**Items**

| Key | Description |
| -- | -- |
| D2L.MediaPlayer.Preferences.Speed | Playback speed that was last selected.
| D2L.MediaPlayer.Preferences.Track | Identifier for the kind and language of the track that was last selected.
| D2L.MediaPlayer.Preferences.Volume | Volume that was last selected.

## Accessibility

The following features are implemented to improve accessibility:

- all controls can be accessed using the mouse or keyboard
- captions can be provided to the media player
- important events, such as a media source failing to load, are displayed visually and announced by screen readers

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

### Running the demos

To start a [@web/dev-server](https://modern-web.dev/docs/dev-server/overview/) that hosts the demo page and tests:

```shell
npm start
```

### Linting

```shell
# eslint and lit-analyzer
npm run lint

# eslint only
npm run lint:eslint

# lit-analyzer only
npm run lint:lit
```

### Testing

```shell
# lint & run headless unit tests
npm test

# unit tests only
npm run test:headless

# debug or run a subset of local unit tests
npm run test:headless:watch
```

### Visual Diff Testing

This repo uses the [@brightspace-ui/visual-diff utility](https://github.com/BrightspaceUI/visual-diff/) to compare current snapshots against a set of golden snapshots stored in source control.

The golden snapshots in source control must be updated by the [visual-diff GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/visual-diff).  If a pull request results in visual differences, a draft pull request with the new goldens will automatically be opened against its branch.

To run the tests locally to help troubleshoot or develop new tests, first install these dependencies:

```shell
npm install @brightspace-ui/visual-diff@X mocha@Y puppeteer@Z  --no-save
```

Replace `X`, `Y` and `Z` with [the current versions](https://github.com/BrightspaceUI/actions/tree/main/visual-diff#current-dependency-versions) the action is using.

Then run the tests:

```shell
# run visual-diff tests
npx mocha './test/**/*.visual-diff.js' -t 10000
# subset of visual-diff tests:
npx mocha './test/**/*.visual-diff.js' -t 10000 -g some-pattern
# update visual-diff goldens
npx mocha './test/**/*.visual-diff.js' -t 10000 --golden
```

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`. Read on for more details...

The [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`.

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
