---
title: Markdown 相关
description: 工欲善其事，必先利其器
date: 2022-07-22
tags:
  - 工具
---

# Markdown 相关设置

## 部分代码片段

````json
{
  "New blog": {
    "scope": "markdown",
    "prefix": "blog",
    "body": [
      "---",
      "title: ${1:new_blog}",
      "description: ${2:newblog}",
      "date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE} ${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}",
      "tags: ",
      "\t - ${3:前端}",
      "---",
      "",
      "# ${4:title}",
      ""
    ],
    "description": "create a new blog"
  },
  "code": {
    "scope": "markdown",
    "prefix": "code",
    "body": ["```$1", "$2", "```", ""],
    "description": "code"
  }
}
````

## 部分设置

```json
{
  // 自带 markdown 配置
  "[markdown]": {
    "editor.unicodeHighlight.ambiguousCharacters": true,
    "editor.unicodeHighlight.invisibleCharacters": true,
    "editor.wordWrap": "on",
    // 快速补全
    "editor.quickSuggestions": {
      "other": true,
      "comments": true,
      "strings": true
    },
    // 显示空格
    "editor.renderWhitespace": "all",
    "editor.snippetSuggestions": "top",
    "editor.tabCompletion": "on",
    "editor.acceptSuggestionOnEnter": "on"
  }
}
```
