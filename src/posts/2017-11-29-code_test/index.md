---
path: '/code-test-example'
date: "2017-07-29T17:12:33.962Z"
title: "Code Test"
tags: ["code"]
---

```javascript{1,4-6}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```