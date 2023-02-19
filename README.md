# Pokedex Dattabot
This project is simple Pokémon dex for Dattabot Frontend Engineer Technical Test. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Live Demo
Open [Pokedex Dattabot Live](https://main--stirring-dragon-d1666f.netlify.app/) to view it live.

### Checklist requirement
- [x] Login Page (using dummy json, for certain user)
- [x] Profile Page (using dummy json)
- [x] Home Page (diplay Pokémon's twitter @Pokemon timeline followed by "Your Pokémon" list)
- [x] Get Your Pokémon
- [x] Pokémon Library
- [x] Responsive view

### App Screenshot

#### Login Page
![image](https://user-images.githubusercontent.com/20922216/219912012-639ebf5c-e35f-4a96-b3ae-470e43770b15.png)

#### Home Page
![image](https://user-images.githubusercontent.com/20922216/219912149-368af87a-6b87-4aba-8355-60344a5cd31e.png)

![image](https://user-images.githubusercontent.com/20922216/219912344-f38e8dc0-12cd-49d6-b382-9f66cc9167f2.png)

![image](https://user-images.githubusercontent.com/20922216/219912415-9a4f91e2-5402-4fa7-8812-106bb54b29e6.png)

#### Library Page
![image](https://user-images.githubusercontent.com/20922216/219912531-736adea8-9dc5-4479-a49a-43b76020df34.png)

![image](https://user-images.githubusercontent.com/20922216/219912581-f7c195a9-2321-49b6-be97-0514942d3cba.png)

#### Get Pokémon Page
![image](https://user-images.githubusercontent.com/20922216/219912771-f9c32c31-3c75-4e03-8fe9-bc054f113884.png)

![image](https://user-images.githubusercontent.com/20922216/219913107-0039d27f-4dcb-4117-8b59-f06cdf0d5c5d.png)

#### Profile Page
![image](https://user-images.githubusercontent.com/20922216/219913237-e32a186a-d709-4a9a-8250-cd6c70504b17.png)


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

