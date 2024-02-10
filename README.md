# Comfy Store

E-Commerce furniture store using React and Tailwind

## Used Tools

- React Router
- React Query
- Axios
- Redux Toolkit
- DaisyUI

## Covering

- 设置服务器（Setup Server）
- 分页（Pagination）
- filter

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
