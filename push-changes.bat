@echo off
echo ========================================
echo   Push Changes to GitHub
echo ========================================
echo.

echo Adding files...
git add .
echo.

echo Committing...
git commit -m "Configure GitHub Pages deployment"
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo ========================================
echo   DONE!
echo ========================================
echo.
echo GitHub Actions will automatically build and deploy.
echo Your site will be live in 2-3 minutes at:
echo https://sazzad-404.github.io/Toolkit-Generators/
echo.
pause
