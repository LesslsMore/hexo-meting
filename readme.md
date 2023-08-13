# hexo-meting

一个在 [Hexo](https://hexo.io) 页面中嵌入 tencent netease 个人歌单小插件.

[![package version](https://badge.fury.io/js/hexo-meting.svg)](https://www.npmjs.com/package/hexo-meting)
[![npm](https://img.shields.io/npm/dt/hexo-meting.svg)](https://www.npmjs.com/package/hexo-meting)
[![GitHub license](https://img.shields.io/github/license/lesslsmore/hexo-meting.svg)](https://github.com/lesslsmore/hexo-meting/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/hexo-meting.png)](https://nodei.co/npm/hexo-meting/)

## 原理

hexo-meting 采用了以下开源组件

[APlayer](https://aplayer.js.org/#/zh-Hans/)

https://github.com/metowolf/MetingJS

https://neteasecloudmusicapi-docs.4everland.app/

运行网易 api
```shell
node app.js
```

https://jsososo.github.io/QQMusicApi/#/?id=qqmusicapi

运行腾讯 api
```shell
npm start
```


## 安装

``` bash
$ npm install hexo-meting --save
```

## 配置

设置网易、腾讯 id

## 使用
```shell
$ hexo meting
```

## 升级

我会不定期更新一些功能或者修改一些Bug，所以如果想使用最新的特性，可以用下面的方法来更新:

1. 修改 package.json 内 hexo-meting 的版本号至最新
2. 重新安装最新版本`npm install hexo-meting --save`

或者使用`npm install hexo-meting --update --save`直接更新。

## 菜单

如果上面的显示没有问题就可以在主题的配置文件 `_config.yml` 里添加如下配置来为这些页面添加菜单链接.

```yaml
menu:
  Home: /
  Archives: /archives
  meting: /meting     #This is your meting page
```

## 免责声明

本项目仅供学习交流使用，不得用于任何商业用途。

数据来源于互联网公开内容，没有获取任何私有和有权限的信息（个人信息等），由此引发的任何法律纠纷与本人无关。

## 反馈

系统刚上线，可能还不够完善。如果大家在使用的过程中数据有问题、或者有什么问题和意见，欢迎随时提issue。

如果你觉得这个插件很好用，欢迎右上角点下 star ⭐️，表达对作者的鼓励。

## Star History

[![Stargazers over time](https://starchart.cc/lesslsmore/hexo-meting.svg)](https://starchart.cc/lesslsmore/hexo-meting)

## Lisense

MIT
