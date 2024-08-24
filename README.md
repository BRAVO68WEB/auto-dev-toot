## Auto Dev Toot

Automatically collect last 24 hours commit history of my github account, summarize them with Gemini API and post them to my Mastodon account as toot.

### Setup

1. Clone repository
```bash
git clone https://github.com/BRAVO68WEB/auto-dev-toot
```
2. Set environment variables
```bash
MASTODON_INSTANCE=
MASTODON_ACCESS_TOKEN=
GEMINI_API_KEY=
GH_USERNAME=
NOTIFY_URL=
GH_TOKEN=
```
3. Run the following command
```bash
bun run index.ts
```

### Techstack

![ICONS](https://skillicons.dev/icons?i=bun,ts,mastodon)
