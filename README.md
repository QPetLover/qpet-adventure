# qpet-adventure

QQ 宠物冒险岛（Adventure）独立部署仓库与 npm 包。

This repository deploys the QQ Pet Adventure Island game as its own standalone site and publishes the same files as the `qpet-adventure` npm package, separate from the [`awesome-qpet-games`](https://github.com/QPetLover/awesome-qpet-games) collection and the [`QPetGames`](https://github.com/QPetLover/QPetGames) mini-games site.

## Contents

- `site/index.html` - static page entry with the Ruffle player
- `site/myfont.swf` - font Flash resource used by the page
- `site/vendor/ruffle/` - vendored Ruffle v0.5.0 web runtime (Apache-2.0 / MIT), self-hosted
- `site/xmxd.swf` - the Adventure Island game loader, plus its part files `xmxd_*_*.swf` and `risk_check.xml` (recovered from the wzhecnu server on 2026-08-22, Git LFS)
- `metadata/files.yml` - archived file metadata
- `metadata/checksums.sha256` - SHA-256 verification manifest
- `docs/deploy.md` - deployment notes

## Local Preview

```bash
python3 -m http.server 8000 --directory site
```

Then open http://localhost:8000/.

## npm Package

Package name: `qpet-adventure`. The tarball ships `site/`, `metadata/`, README, NOTICE, CREDITS and LICENSE, so consumers can copy or serve the game files directly.

```bash
npm install qpet-adventure
```

Publishing is tag-driven: push a `v*` tag and the `Publish npm` workflow runs `npm publish --access public --provenance`. Before the first publish, configure npm Trusted Publishing for this repository on npmjs.com (package `qpet-adventure`, repository `QPetLover/qpet-adventure`), then tag a release.

## Deploy

The repository includes a GitHub Pages workflow that publishes the `site/` directory from `main` to https://qpetlover.cn/qpet-adventure/.

## Notice

This is an unofficial nostalgia/archive project. QQ Pet related assets belong to their respective rights holders. See [`NOTICE.md`](NOTICE.md).
