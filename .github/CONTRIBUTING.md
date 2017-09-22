# 简单搜索 - 用户贡献指南

## 如何获得帮助？

您在阅读 [简单搜索](https://jiandansousuo.com) 或者其下任何项目，如果遇到问题，您可以:

1. [创建issue](https://github.com/jiandansousuo/jiandansousuo.com/issues/new?title=help)
2. 邮件发至 `admin@jiandansousuo.com`

## 如何提交代码？

1. Fork [@jiandansousuo/jiandansousuo.com](https://github.com/jiandansousuo/jiandansousuo.com)
2. 本地安装 Hexo ，可参考: <https://hexo.io/docs/index.html#Installation>
3. 修改文章或者创建新文章
4. [提交 PR](https://github.com/jiandansousuo/jiandansousuo.com/compare)

### 提交代码需知

- 使用 [Markdown](http://wowubuntu.com/markdown/) 编写文档
- 我们提倡引用文本添加来源链接，如:

```markdown
bad:
layui是经典模块化前端框架，由职业前端倾情打造。面向所有层次的前后端程序猿，零门槛开箱即用的前端UI解决方案。


good:
[layui](http://www.layui.com) 是经典模块化前端框架。由职业前端倾情打造，面向所有层次的前后端程序猿，零门槛开箱即用的前端UI解决方案。
```

- 请确认文章的 `Front-matter` 是否正确，必须包含:

```
---
title: '标题'
date: '时间'
desc: '文章描述'
author: 'Github ID'
---
```

- 在文章内合适的位置添加 `<!--more-->` ，以方便生成 [文章摘要](https://github.com/pinggod/hexo-theme-apollo/blob/master/doc%2Fdoc-zh.md#文章摘要)
- PR 前请确认运行 `npm run build` 命令正常

## 后记

开源力量是神圣的，我们期待您的参与，也感谢您的参与~
