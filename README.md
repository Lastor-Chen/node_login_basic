# Basic Login System
A sample login system. <br>
This is a student project that built on Node.js with Express framework.

簡易登入系統。 <br>
這是一個用 Node.js + Express 架設網站的練習專案。

#### 練習目標
* 研究 Login 功能的製作思路。
* 處理 request & response。
* 研究 Express 頁面重新導向機制。
* 研究 Login 相關的 UX。

## Preview Pages
![preview](/public/img/preview.jpg)

#### 功能
* 使用 Bootstrap Form 驗證樣式。
* 登入失敗時，彈出 Error 訊息。
* 頁面上直接提供假登錄資料，方便測試。
* 可登出，返回登入頁面


## Usage
此專案已發布於 [Heroku](https://node-login-basic.herokuapp.com/)，可直接前往瀏覽 app 內容。

如欲查看更詳細的原始碼，請參考下方 [Dependency packages](#Dependency-packages) 與 [Installation](#Installation) 項目。 <br>
安裝完成後，使用以下步驟於本機端啟動專案。

1. 啟動 Node.js Server
    
    * 有安裝 nodemon，於專案根目錄執行
    ```
    $ npm run dev
    ```

    * 未安裝 nodemon，於專案根目錄執行
    ```
    $ npm run start
    ```

2. 於瀏覽器開啟網頁
    ```
    http://localhost:3000
    ```

3. 瀏覽完畢後，關閉 Node.js Server
    ```
    回到 cmd 按下 Ctrl + C
    ```

## Dependency packages
#### main
* [Node.js](https://nodejs.org/en/) v10.16.3

#### npm package
* [Express.js](https://expressjs.com/) v4.17.1
* [express-handlebars](https://www.npmjs.com/package/express-handlebars) v3.1.0

#### other package (imported from CDN)
* [Bootstrap](https://getbootstrap.com/) v4.3.1
  * jQuery v3.4.1
  * popper v1.14.7


## Installation
這是使用 Node.js 於 localhost 架設的網站。 <br>
必須下載後於本機端執行。

#### Download Project
1. 直接於 Github 上用瀏覽器下載 ZIP file
2. 用 Git clone 專案
```
$ git clone https://github.com/Lastor-Chen/node_sound_stupid.git [資料夾名稱]
```

#### Download Node.js
本機端必須安裝 Node.js 與相關 package 才能執行此專案。 <br>
如尚未安裝 Node.js，建議使用 nvm toolkit 下載指定版本的 Node.js

| install nvm |  |
| -------- | -------- |
| nvm-windows     | [Link to](https://github.com/coreybutler/nvm-windows) |
| nvm-macOS     | [Link to](https://github.com/nvm-sh/nvm) |

#### Download dependency npm packages
已在 package.json 中登入相關訊息，可直接執行下列指定安裝所需套件。
```
$ npm install
```

#### 選擇安裝 nodemon
本專案推薦使用 [nodemon](https://github.com/remy/nodemon) 來取代原生的 Node.js 啟動方法。
```
$ npm install -g nodemon
```
