# 轮子 - 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/Freddy-Gong/gulu-demo-1.svg?branch=master)](https://www.travis-ci.org/Freddy-Gong/gulu-demo-1)

## 介绍

这是我在学习Vue过程中做的一个UI框架，希望对你有用。

## 开始使用

1. 添加 CSS 样式
使用本框架，CSS中开启border-box
```
*,*::before,*::after{box-sizing:border-box}
```
IE 8 及以上浏览器都支持此样式

你还需要设置颜色等变量（后续会改为 SCSS 变量）
```
:root {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
        }
```
IE 15 及以上浏览器都支持此样式

2. 安装 gulu
    ```
    npm i -S freddy-gong-1
    yarn add -D freddy-gong-1
    ```

3. 引入
   ```
   import {Button,ButtonGroup,Icon} from 'freddy-gong-1'
   import 'freddy-gong-1/dist/index.css'

   export default {
       name:'app',
       components:{
           HelloWorld,
           'g-button':Button,
           'g-icon':Icon
       }
   }
   ```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码



