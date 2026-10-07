# keyhannajafian.github.io

Source for the academic portfolio of Dr. Keyhan Najafian. The site presents research on learning from limited labeled data across precision agriculture, medical imaging, and biosignal analysis, along with a static publications section.

The homepage is a React app built with Vite and Tailwind CSS. It is deployed to GitHub Pages by the workflow in `.github/workflows/` on every push to `main`.

## Run locally

Requires Node.js 20 or later.

```sh
npm install
npm run dev      # development server on http://localhost:3000
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Adding a publication

The publications pages are pre-rendered static HTML, generated separately from the React app.

1. Add an entry to the `publications` array in `data/publications.json`, following the fields of the existing entries (`slug`, `title`, `authors`, `venue`, `year`, `abstract`, `bibtex`, and so on).
2. Regenerate the pages:

   ```sh
   python3 tools/build_publications.py
   ```

   The script writes the publication pages into `public/`. Vite copies them into `dist/` at build time.
3. Commit the updated JSON and the generated files under `public/`.
