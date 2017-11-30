---
path: '/adding-tab-completion-for-git-on-macOS'
date: "2016-09-02T17:12:33.962Z"
title: "Adding tab completion for Git on macOS"
tags: ["code", "git"]
---

I love [Git](https://git-scm.com/); [GitGub](https://github.com/) is my go-to [version and source control](https://en.wikipedia.org/wiki/Version_control) platform of choice for all my projects. For a while now I have been meaning to work out how to get tab autocomplete to work with branch names on macOS.

It's such a minor thing, its never been a priority, however, having to type them is frustrating and prone to annoying typing mistakes. This morning I finally took 5 min and found out it's just a matter of adding a single line to my `~/.bash_profile`; that's it. I wish I had looked this up sooner.

Add the following to your `~/.bash_profile` or `~/.bashrc`: -

```bash
source /usr/local/git/contrib/completion/git-completion.bash
```

You will need to restart your terminal or you can just reload the relevant file by entering

```bash
$ source ~/.bash_profile
```

or

```bash
$ source ~/.bashrc
```

As appropriate. Happy tabbing :)