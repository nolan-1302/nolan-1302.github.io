---
title: 'S&box Svelte Kit Package Viewer'
description: "To experiment with Svelte Kit, I made a s&box package viewer"
date: 'Nov 3 2024'
---

Ever since I made this site, I've been itching to do some more web dev using Svelte Kit. Svelte 5 just came out so I thought it would be a good time to make something simple. I added blogs from the S&box api to this site a few days ago, I wondered if I could make a simple package viewer for S&box. Garry says the S&box site will never support mobile, so I thought why not make a simple site that works on mobile. So thats what I did. Making the site was just a learning opportunity for me.

<Header title="Svelte 5" />

Svelte 5 is more complicated than Svelte 4, in some ways. Svelte changed the way you denfine varibles, it looks worse, but I learned to like it.

```ts
//Svelte 4
let count = 0;
//Svelte 5
let count = $state(0);
```
On first glance it looks worse, but it gives you more control over your site.

<Header title="How it works" />

### Package Listing 

Facepunch added api endpoints, they spit out what it shown on the website. I just had to learn how to output them as an interface, and I would have package lists done.

```
  "Ident": "fortwars",
  "Title": "Fortwars",
  "Summary": "A classic Gmod Fortwars gamemode",
  ```

Each of these routes have +page.server.ts files which parses the url and sends the right fetch request to the backend.

<Header title="Takeaways" />

I learned a alot from this project. Even though it was only a day of work, it still taught me many things about webdev. A alot of the styling on the site is temp, but I'm definitely improving at styling as a whole. I have room to improve, although I look forward to! I'm going to work on [Fortwars](/projects/fortwars) for the next bit and I'm excited to continue improving.

<Img src="../sboxpackageviewer/gamepage.png" />

<Img src="../sboxpackageviewer/orgpage.png" />

<Spotify src="track/4BSR9I4ExlCJdXJo2GpBD5" />