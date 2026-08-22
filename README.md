# Adventure

QQ 宠物冒险岛（Adventure）文件归档与静态部署站点。

This repository deploys the QQ Pet Adventure Island game as its own standalone site, separate from the [`awesome-qpet-games`](https://github.com/QPetLover/awesome-qpet-games) collection and the [`QPetGames`](https://github.com/QPetLover/QPetGames) mini-games site.

## Contents

- `site/index.html` - static page entry
- `site/myfont.swf` - original Flash resource used by the page
- `metadata/files.yml` - archived file metadata and checksums
- `docs/deploy.md` - GitHub Pages deployment notes

## Local Preview

```bash
python -m http.server 8000 --directory site
```

Then open http://localhost:8000/.

## Deploy

The repository includes a GitHub Pages workflow that publishes the `site/` directory from `main`.

## Notice

This is an unofficial nostalgia/archive project. QQ Pet related assets belong to their respective rights holders. See [`NOTICE.md`](NOTICE.md).
