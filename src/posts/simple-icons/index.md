---
path: "/simple-icons-project"
date: "2017-12-03T00:00:00.000Z"
title: "Simple Icons project for great SVG Icons"
tags: ["Resource", "Icons", "React"]
---

I recently came across this fantastic project by [Dan Leech](https://danleech.com/) called Simple Icons. The project aim to create free SVG icons for popular brands. Having all these standardised and freely available in one place is a fantastic idea and I would love to see this project get more support.

I have even made a modest contribution to the icons database myself, adding the Google Chrome, Stylus and Typekit icons.

You can clone [Simple Icons Git Hub project](https://github.com/simple-icons/simple-icons) or you can see all the icons on there site [SimpleIcons.org](SimpleIcons.org) and just download the icons you need.

## CDN Usage

A really nice bonus is that the icons can be used directly from a CDN; JSDelivr or Unpkg. Simply use URL for the CDN:

```HTML
<img width="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg" />

<img width="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/stackoverflow.svg" />
```

## Adding it to React

I used the CDN links and the (react-svg)[https://github.com/atomic-app/react-svg] React component to inject the icons into my page.

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

