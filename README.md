# Comfy Store

E-Commerce furniture store using React and Tailwind.

功能包括：登录、注册、查询商品、筛选商品、添加购物车、下订单、结算和夜间模式。

## Setup DaisyUI

1. 安装 DaisyUI
    ```sh
    npm i  -D daisyui@latest @tailwindcss/typography
    ```
2. 添加 daisyUI 到 `tailwind.config.js` file:
    ```cjs
    module.exports = {
      //...
      plugins: [require('@tailwindcss/typography'), require('daisyui')],
    }
    ```

## Server Side / API

1. [API Docs](https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi)
2. 用 Thunder Client 插件测试是否能获取到数据