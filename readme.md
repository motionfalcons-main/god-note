<div align="center">
  <img src="static/logo_with_text_teal.svg" width="400">

  God Note is a document driven project management tool that maximizes remote DevOps team velocity.
  
</div>

![uiimage](./static/img_ui.png)

## 📦 Download App

### 🖥 Desktop

- [🌎 Web App](https://your-domain.com)

## 💥 Have some troubles?

If you find a bug, please create an issue in the GitHub issue tracker.

## 🤲 Wanna contribute?

If you're interested in our project, you can participate in many different ways.

- Sharing your idea
- Helping community
- Resolving existing issues

## Development

Currently, we provide the frontend source code only so you cannot host our backend server by yourself.
But you can participate in development via mock backend mode. Although it still doesn't cover every API yet, you can access the basic folder and document management.

### How to run the app

Create .env file.

```sh
NODE_ENV=development
MOCK_BACKEND=true
```

Run webpack processors. You have to run them in separate terminals.

```sh
npm run dev:cloud
# You can skip next two scripts if you don't need to run electron app.
npm run dev:electron
npm run dev:webpack
```

### How to extend mock backend

When the mode is enabled, all API calls will be passed to `src/cloud/api/mock/mockHandler.ts`.

The source code is quite similar to a router interface. All you need to is `method`, `pathname` and a handler function. So, when you confront `Not Found` error while calling `GET /api/something`, you can simply add a mock route like below.

```ts
{
  method: 'get',
  pathname: 'api/something',
  handler: ({ search }): GetSomethingResponse => {
    return {
      ...something
    }
  },
}
```

### Scripts

- Development scripts
  - `npm run dev:cloud` : Run webpack for the cloud space
  - `npm run dev:webpack` : Run webpack for the desktop app main window renderer
  - `npm run dev:electron` : Run webpack for the desktop app main processor
  - `npm run dev:mobile` : Run webpack for the mobile app
  - `npm run lint` : Check lint errors
  - `npm run format` : Try to fix lint errors automatically
  - `npm test` : Run test script
  - `npm run tsc` : Check type errors
- Build scripts
  - `npm run build:electron-production` : Build assets for the desktop app
  - `npm run build:cloud-production` : Build assets for the cloud space
  - `npm run build:mobile-production` : Build assets for the mobile app
  - `npm start` : Run the web server (for Railway deployment)
  - `npm run start:electron` : Run the desktop app with prebuilt assets
  - `npm run meta` : Prepare meta data for the desktop app building(Generate package.json for electron-build module)
  - `npm run prepack` : Create desktop app installers without signing
  - `npm run release` : Create desktop app installers for production and upload them to GitHub

## 🚀 Railway Deployment

This project is configured for deployment on Railway. See [RAILWAY.md](./RAILWAY.md) for deployment instructions.

## ⚖️ License

[GPL-3.0](./LICENSE.md)
