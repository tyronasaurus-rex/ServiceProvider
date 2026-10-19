# Smart links

One page for new songs and albums. Put the link in a bio, story, or post. Listeners choose a service, and the first button follows their phone — Apple Music on iPhone, Spotify on Android — or whichever service they picked last.

The sample artist is **Mara Voss**. Replace the name, artwork, and links before you publish.

## Make it yours

`data/site.json` is the artist: name, tagline, bio, and social accounts.

`data/releases.json` is the music. The release with `"featured": true` is what the main link opens. Every other release has its own address:

```text
https://your-name.github.io/SPSmartLinks/#afterglow
```

A date in the future turns that release into a pre-save page with a countdown. A date today or earlier shows it as out now. Only services with a URL get a button.

```json
{
  "slug": "afterglow",
  "title": "Afterglow",
  "type": "single",
  "releaseDate": "2026-10-17",
  "cover": "assets/covers/afterglow.jpg",
  "accent": "#e07a45",
  "featured": true,
  "blurb": "One sentence about the song.",
  "links": {
    "spotify": "https://open.spotify.com/track/...",
    "apple": "https://music.apple.com/..."
  }
}
```

`type` is `single`, `album`, or `ep`. Albums and EPs can include a `tracks` list of `{ "title": "...", "duration": "3:42" }`.

Service keys: `spotify`, `apple`, `youtubeMusic`, `youtube`, `amazon`, `deezer`, `tidal`, `soundcloud`, `bandcamp`, `audiomack`, `pandora`, `itunes`.

Add anything else with `extra`:

```json
"extra": [{ "label": "Music video", "url": "https://..." }]
```

Covers work best as square JPG, PNG, or WebP files in `assets/covers/`. `accent` is a bright color used for the page glow — orange, blue, and gold all read well on the dark background.

For a timed drop, use a full timestamp: `"releaseDate": "2026-11-06T00:00:00"`.

The sample service buttons point at each platform's homepage so the page is clickable. Swap them for the release URLs from your distributor before sharing the page.

When you change the featured release, also update the title, description, and `og:image` in `index.html`. Link previews do not run the page script. Use a JPG or PNG for that image.

## Publish on GitHub Pages

1. Push this repository to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch (`master` or `main`) and the `/ (root)` folder, then save.

GitHub shows the site URL on that page. The first deploy can take about a minute. The `.nojekyll` file is already here so Pages serves the site as-is.

## Preview locally

Opening `index.html` directly will not load the releases. From this folder:

```bash
python -m http.server 4173
```

Then open [http://localhost:4173](http://localhost:4173).
