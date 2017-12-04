---
path: "/simple-icons-project"
date: "2017-12-03T00:00:00.000Z"
title: "Simple Icons project for great SVG Icons"
tags: ["Resource", "Icons", "React"]
---

Today I came across this fantastic project Started by [Dan Leech](https://twitter.com/bathtype) called Simple Icons. The are creating free SVG icons for popular brands.

You can clone [Simple Icons Git Hub project](https://github.com/simple-icons/simple-icons) or you can see all on one page at [SimpleIcons.org](SimpleIcons.org) and download the icons you need.

## CDN Usage

A really nice bonus is that the icons can be served from a CDN; JSDelivr or Unpkg. Simply use the simple-icons npm package and specify a version in the URL like the following:

```HTML
<img width="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg" />
<img width="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg" />
```

## Adding it to React

I use the CDN links and the (react-svg)[https://github.com/atomic-app/react-svg] great React component to inject the icons into my page.

```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';

ReactDOM.render(
  <ReactSVG
    path="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg"
    className="svg"
    wrapperClassName="svg-wrapper"
  />,
  document.querySelector('.Root')
);
```

### See it in action

You can see this all working in the footer of this site :)