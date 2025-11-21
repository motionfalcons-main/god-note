# Rebranding Checklist for God Note

This document helps verify that all rebranding has been completed.

## ✅ Completed Rebranding Tasks

### Core Files
- [x] `package.json` - Updated name, productName, repository, author, build config
- [x] `readme.md` - Completely rewritten with new branding
- [x] `LICENSE.md` - Updated copyright and project name
- [x] `cloud.html` - Updated title
- [x] `index.html` - Updated title
- [x] `mobile.html` - Updated title
- [x] `RAILWAY.md` - Updated project name

### Source Code Files
- [x] `src/design/components/atoms/PageHelmet.tsx` - Updated default title
- [x] `src/cloud/components/TitleComponent.tsx` - Updated alt text
- [x] `src/cloud/components/error/ErrorPage.tsx` - Updated error page title and removed Boost Hub references

## 🔍 Remaining Files to Check

The following files still contain references to the original project. These may need updates depending on your needs:

### High Priority (User-Facing)
- `src/cloud/pages/home/BoostNoteFeatureIntro.tsx` - Component name and content
- `src/cloud/components/Application.tsx` - May contain branding
- `src/cloud/pages/home/HomeForm.tsx` - Homepage content
- `src/cloud/pages/home/HomePageSignInForm.tsx` - Sign-in page
- `src/cloud/lib/i18n/*.ts` - Translation files (multiple languages)
- `src/locales/enUS.ts` - Locale strings

### Medium Priority (Internal)
- `src/cloud/lib/consts.ts` - Constants including boostHubBaseUrl
- `src/cloud/lib/homepageUrls.ts` - URL references
- `src/components/BoostHubWebview.tsx` - Component name
- `src/lib/boosthub.tsx` - Library references
- Android/iOS app files (package names, app names)

### Low Priority (Documentation)
- `CONTRIBUTING.md` - Contribution guidelines
- `CODE_OF_CONDUCT.md` - Code of conduct
- `ISSUE_TEMPLATE.md` - Issue template
- `docs/development.md` - Development docs

## 🔎 Verification Commands

Run these commands to find remaining references:

```bash
# Search for "Boost Note" (case insensitive)
grep -ri "boost note" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for "BoostNote"
grep -ri "boostnote" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for "BoostIO"
grep -ri "boostio" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for "boosthub"
grep -ri "boosthub" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for original repository URL
grep -ri "github.com/BoostIO" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for original domain
grep -ri "boostnote.io" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile

# Search for author names
grep -ri "Junyoung Choi\|fluke8259\|rokt33r\|ButteryCrumpet\|Davy-c\|Komediruzecki" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=compiled-cloud --exclude-dir=compiled-mobile
```

## 📝 Notes

- Some references in code comments or internal variable names may not need to be changed if they're not user-facing
- Logo files in `static/` and `cloud-static/images/` should be replaced with your own logos
- Favicon files should be replaced with your own
- Android package name `com.boostio.boostnote` should be changed to `com.godnote.app` (already updated in package.json build config)
- iOS bundle identifier should be updated in Xcode project files

## 🚀 Next Steps

1. Review all files listed in "Remaining Files to Check"
2. Update user-facing text and component names
3. Replace logo and favicon files
4. Update Android/iOS app identifiers
5. Run verification commands to ensure no original references remain
6. Test the application to ensure everything works correctly
7. Proceed with Railway deployment

