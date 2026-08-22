# QQ Pet Adventure

QQ 宠物冒险岛文件归档与静态部署站点。

This repository keeps the QQ Pet Adventure Island files separate from the general [`awesome-qpet-games`](https://github.com/QPetLover/awesome-qpet-games) collection, because it is better maintained as its own deployable site.

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
