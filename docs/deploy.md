
# Deploy

The repository includes a GitHub Pages workflow that publishes the `site/` directory.

## Manual Preview

```bash
python -m http.server 8000 --directory site
```

## GitHub Pages

The workflow in `.github/workflows/pages.yml` uploads `site/` as a Pages artifact and deploys it from the `main` branch.
