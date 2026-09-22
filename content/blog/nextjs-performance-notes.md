---
title: "Next.js Performance Notes for Portfolio Sites"
excerpt: "A practical checklist I use to keep pages fast without over-engineering."
date: "2026-03-04"
tags:
  - nextjs
  - performance
  - seo
published: true
---

A few rules I reuse on portfolio and product sites:

- keep components small and focused
- avoid over-fetching on the server
- use caching intentionally
- size media assets with clear constraints
- write real metadata — titles, descriptions, canonicals, Open Graph

Performance is mostly consistent habits, not one magic trick.

## Example

```ts
export async function getServerData() {
  const res = await fetch("https://api.example.com/data", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
```

| Strategy | Best For | Note |
| --- | --- | --- |
| SSG | Mostly static pages | Fast and cacheable |
| ISR | Semi-dynamic content | Great for blogs |
| SSR | Highly dynamic data | More server load |
