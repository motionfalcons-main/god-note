# 🚀 Quick Deploy Guide - God Note Web App on Railway

## ✅ Everything is Ready!

Your project is already configured for Railway deployment. Just follow these steps:

## Step 1: Push to GitHub

```bash
# Make sure all changes are committed
git add .
git commit -m "Rebrand to God Note and configure for Railway"
git push origin main
```

## Step 2: Deploy on Railway

1. **Go to Railway**: https://railway.app
2. **Sign up/Login** (use GitHub to connect)
3. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository: `motionfalcons-main/god-note`
4. **Railway will automatically**:
   - Detect the build command: `npm run build`
   - Detect the start command: `npm start`
   - Build your web app
   - Deploy it

## Step 3: Configure Environment Variables (Optional)

In Railway Dashboard → Your Project → Variables, add:

```
NODE_ENV=production
MOCK_BACKEND=true
```

(Only if you want to use mock backend mode)

## Step 4: Get Your URL

- Railway will provide a URL like: `https://your-app-name.up.railway.app`
- You can add a custom domain in Settings → Domains

## 🎉 Done!

Your web app will be live at the Railway URL!

## What Happens During Deployment

1. **Build Phase**: 
   - Runs `npm run build`
   - Builds React app using webpack
   - Outputs to `compiled-cloud/` directory

2. **Start Phase**:
   - Runs `npm start` (starts Express server)
   - Serves static files from `compiled-cloud/`
   - Handles all routes (React Router)

## Troubleshooting

**Build fails?**
- Check Railway logs in the dashboard
- Make sure all dependencies are in `package.json`

**App shows 404?**
- Verify `compiled-cloud/index.html` exists after build
- Check Railway logs for errors

**Need help?**
- Check Railway logs: Dashboard → Your Project → Deployments → View Logs

