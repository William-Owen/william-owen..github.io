---
path: '/adding-tab-completion-for-git-on-osx'
date: "2016-09-02T17:12:33.962Z"
title: "Adding tab completion for Git on OSX"
tags: ["code", "Git"]
---

I love Git, its the go-to version and source control platform of choice for all my projects. For a while now I have been meaning to work out how to get tab autocomplete to work for branch names. Having to type them is frustrating. This morning I found out its just a matter of adding a single line to my `~/.bash_profile`; thats it. I really wish I had looked this up sooner.

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