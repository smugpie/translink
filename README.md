# Translink API explorer

Very early days, this one, but it will hopefully become a website for visualising
NI Railways services using the Translink API.

_This is very experimental and not ready for production yet!_

My API key is limited to 3000 requests per day so get your own key! Follow the
instructions at https://www.translink.co.uk/api to get your key.

The site was built using Astro and Svelte, just because I like both.

## Installing

Prerequisites: Node.js v18 is installed (either on its own or using nvm)

Rename `.sample.env` to `.env`. In that file, add the API key you obtained
from Translink.

```
npm i
npm run dev
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more about Astro?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
