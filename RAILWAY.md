# Railway Deployment Guide

This guide explains how to deploy God Note to Railway.

## Prerequisites

- A Railway account (sign up at https://railway.app)
- Your repository pushed to GitHub/GitLab/Bitbucket

## Deployment Steps

1. **Connect your repository to Railway**
   - Go to Railway dashboard
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose this repository

2. **Configure Environment Variables**
   Railway will automatically detect the build and start commands from `railway.json` and `Procfile`.
   
   You may need to set the following environment variables in Railway's dashboard (Settings → Variables):
   - `NODE_ENV=production`
   - `MOCK_BACKEND=true` (if you want to use mock backend mode)
   - Any other environment variables your app requires (check webpack.cloud.config.ts for the full list)

3. **Deploy**
   - Railway will automatically build and deploy your app
   - The build command runs: `npm run build`
   - The start command runs: `npm start` (which starts the Express server)

## Environment Variables

The app uses the following environment variables (defined in webpack.cloud.config.ts):
- `NODE_ENV`
- `BOOST_HUB_BASE_URL`
- `SSE_URL`
- `REALTIME_URL`
- `GA_TRACKING_ID`
- `GITHUB_OAUTH_ID`
- `GOOGLE_CLIENT_ID`
- `INTERCOM_APP_ID`
- `STRIPE_PUBLISHABLE_KEY`
- `COUPONS_NEW_USER_STANDARD`
- `COUPONS_NEW_USER_PRO`
- `COUPONS_NEW_SPACE`
- `COUPONS_NEW_SPACE_ANNUAL`
- `MOCK_BACKEND`
- `BOOST_PDF_EXPORT_BASE_URL`
- `GITHUB_APP_URL`
- `LEGACY_CUTOFF`

Set these in Railway's environment variables section if needed.

## How It Works

1. **Build Phase**: Railway runs `npm run build` which:
   - Cleans the `compiled-cloud` directory
   - Builds the React app using webpack
   - Outputs static files to `compiled-cloud/`

2. **Start Phase**: Railway runs `npm start` which:
   - Starts the Express server (`server.js`)
   - Serves static files from `compiled-cloud/`
   - Handles React Router by serving `index.html` for all routes

## Custom Domain

After deployment, Railway will provide a default domain. You can add a custom domain in:
- Railway Dashboard → Your Project → Settings → Domains

## Troubleshooting

- **Build fails**: Check Railway logs for webpack errors
- **App doesn't load**: Verify that `compiled-cloud` directory exists after build
- **404 errors**: Ensure the Express server is correctly serving `index.html` for all routes (already configured)

