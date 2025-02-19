node 版本建議 18 為佳

## 本專案使用到的技術
* 前端：Vue2 + element UI + SCSS
* 資料： 以 json-server 模擬後端環境，串接 API
* e2e 測試：playwright + cypress
* 部署：前台（Netlify） + json-server (Render) / Docker

## File details 資料夾結構
```
|- src/
    |- components/
        |- childComponents
            |- addListBtn.vue
            |- addProductBtn.vue
            |- listData.vue(存放訂單資訊)
            |- logoutBtn.vue
            |- productData.vue(存放產品資訊)
        |- mainComponents
            |- listFooter.vue
            |- listHeader.vue
    |- router/
        |- index.js
    |- store/
        |- store.js
        |- productModule.js(存放產品狀態)
        |- listModule.js(存放訂單狀態)
        |- adminModule.js(存放權限狀態)

    |- views/
        |- ListInfo/
            |- _id.vue(編輯訂單)
        |- ProductInfo/
            |- _id.vue(編輯產品)
        |- AddList.vue(新增訂單)
        |- AddProduct.vue(新增產品)
        |- Admin.vue(根目錄)
        |- List.vue(顯示訂單，渲染listData元件的內容)
        |- product.vue(顯示產品，渲染productData元件的內容)
|- db.json(API)

```
## Branch detail 分支說明
```
1. feature/order: 訂單和產品相關

2. feature/docker: Dockerfile & docker-compose

3. feature/e2e-testing: playwright & cypress tests

4. master
```

## User flow 用戶操作流程
```
一般使用者：
根目錄(登入及註冊) => 查看訂單 => 編輯或刪除訂單

管理者：
根目錄(登入) => 查看訂單 or 查看產品列表 => 編輯或刪除產品列表

管理者帳密：
email: hannah@admin.com
password: 111111

使用者帳密：
email: test@gmail.com
password: 111111
```

## Project setup 如何啟動專案

### Install project with yarn
```
cd order
yarn install
```
### Run front desk
```
yarn run serve
```
### Run Json-server
```
npx json-server --watch db.json
npx json-server --watch db.json -p 3001(指定port)
```
### Run e2e tests

#### If you want to run playwright:
```
直接查看檢測報告
[step1] git checkout feature/e2e-testing

[step2] yarn run test

[step3] npx playwright show-report

逐步查看各環節的測試
[step1]  git checkout feature/e2e-testing

[step2]  npx playwright test --debug 或 npx playwright test --headed
```


#### If you want to run cypress:
```
[step1] yarn run serve

[step2] yarn run cypress open
```


### docker hub
https://hub.docker.com/repository/docker/hannahtw/traning101-105/general

