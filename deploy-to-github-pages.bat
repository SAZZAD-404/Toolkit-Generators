@echo off
echo ========================================
echo   Deploy to GitHub Pages
echo   URL: https://sazzad-404.github.io/Toolkit-Generators/
echo ========================================
echo.

echo [1/5] Building project...
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

echo [2/5] Creating gh-pages branch...
git branch -D gh-pages 2>nul
git checkout -b gh-pages
echo.

echo [3/5] Copying dist files to root...
xcopy /E /I /Y dist\* .
echo.

echo [4/5] Committing built files...
git add -f dist
git add index.html
git commit -m "Deploy to GitHub Pages"
echo.

echo [5/5] Pushing to gh-pages branch...
git push -f origin gh-pages
echo.

echo [6/6] Switching back to main branch...
git checkout main
echo.

echo ========================================
echo   DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Your site will be live in 2-3 minutes at:
echo https://sazzad-404.github.io/Toolkit-Generators/
echo.
echo Go to GitHub repository settings and:
echo 1. Click on "Pages" in the left sidebar
echo 2. Under "Source", select "gh-pages" branch
echo 3. Click "Save"
echo.
pause
