# media-player

[![NPM version](https://img.shields.io/npm/v/@brightspace-ui-labs/media-player.svg)](https://www.npmjs.org/package/@brightspace-ui-labs/media-player)

> Note: this is a ["labs" component](https://daylight.d2l.dev/developing/getting-started/component-tiers/). While functional, these tasks are prerequisites to promotion to BrightspaceUI "official" status:
>
> - [ ] [Design organization buy-in](https://daylight.d2l.dev/developing/creating-component/before-building/#working-with-design)
> - [ ] [Architectural sign-off](https://daylight.d2l.dev/developing/creating-component/before-building/#web-component-architecture)
> - [x] [Continuous integration](https://daylight.d2l.dev/developing/testing/tools/#continuous-integration)
> - [x] [Cross-browser testing](https://daylight.d2l.dev/developing/testing/cross-browser/)
> - [x] [Unit tests](https://daylight.d2l.dev/developing/testing/tools/) (if applicable)
> - [x] [Accessibility tests](https://daylight.d2l.dev/developing/testing/accessibility/)
> - [x] [Visual diff tests](https://daylight.d2l.dev/developing/testing/visual-difference/)
> - [x] Localization with Serge (if applicable)
> - [x] Demo page
> - [x] README documentation

A Lit element based media player component, designed for similarity across browsers. Capable of playing video and audio content.

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
| download-filename | String | null | If set along with `allow-download`, will use the provided value as the base of the filename (the extension will be automatically appended)
| duration-hint | Number | 1 | Measured in seconds. If set and the duration cannot be determined automatically, this value will be used instead.
| hide-captions-selection | Boolean | false | If set, the menu item to configure captions is hidden. |
| hide-seek-bar | Boolean | false | If set, the seek bar will not be shown. |
| loop | Boolean | false | If set, once the media has finished playing it will replay from the beginning. |
| media-type | ["video", "audio"] | null | Whether the video or audio player should be rendered. If not set, a loading indicator will be displayed until set.
| metadata | JSON | false | Metadata JSON of the video, contains chapters and cuts data. |
| poster | String | null | URL of the image to display in place of the media before it has loaded. |
| src | String |  | URL of the media to play. If multiple sources are desired, use `<source>` tags instead (see below). |
| thumbnails | String |  | If set, will show thumbnails on preview. See below for required format. |
| play-in-view | Boolean | false | If set, will stop the media playback if not in view

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
| durationchange | Dispatched when the video or media displayed has changed its duration |
| ended | Dispatched when the media has reached the end of its duration. |
| error | Dispatched when the media failed to load. |
| loadeddata | Dispatched when the media at the current playback position has finished loading. Often the first frame. |
| loadedmetadata | Dispatched when the metadata for the media has finished loading. |
| play | Dispatched when the media begins playing. |
| pause | Dispatched when the media is paused. |
| seeked | Dispatched when the user finishes navigating through the media's timeline using the seek bar. |
| seeking | Dispatched when the user starts navigating through the media's timeline using the seek bar. |
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

### Troubleshooting Common Issues

- **Captions fail to load due to a "Protocols, domains, and ports must match" error**
    - **Solution:** Set the Media Player's `crossorigin` property to the appropriate value (either "anonymous" or "use-credentials").
    - **Explanation:** If your captions sources are on a different origin, CORS needs to be enabled on the `<video>`/`<audio>` element. Otherwise, the browser will block requests to that origin due to the security measures outlined in [the same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy). The Media Player passes its `crossorigin` property directly to the `<video>`/`<audio>` element's `crossorigin` attribute, which sets the CORS policy. (If the `crossorigin` attribute _isn't_ defined, CORS will not be used at all.)

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

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
