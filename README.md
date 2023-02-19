# Pokedex Dattabot
This project is simple Pokémon dex for Dattabot Frontend Engineer Technical Test. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Live Demo
Open [Pokedex Dattabot Live](https://main--stirring-dragon-d1666f.netlify.app/) to view it live.

### Checklist requirement
- [x] Login Page (using dummy json, for certain user)
- [x] Profile Page (using dummy json)
- [x] Home Page (diplay Pokemon's twitter @Pokemon timeline followed by "Your Pokemon" list)
- [x] Get Your Pokemon
- [x] Pokemon Library

## About Project

### Project Dependencies
- **mui/material** as component library
- **axios** for HTTP request library
- **react-infinite-scroll-component** for infinite scrolling feature
- **zustand** as react state management library
- **react-twitter-embed** to embed Twitter timeline


### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Authentication
 You can see the list of valid user in [user_dummy.json](https://github.com/kikipratiwi/pokedex-dattabot/blob/main/dummy-data/user_dummy.json) in this project `/dummy-data/user_dummy.json`. Use `username` and `password` property for login.

