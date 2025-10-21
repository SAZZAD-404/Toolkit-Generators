@echo off
echo ========================================
echo   Sync and Push to GitHub
echo ========================================
echo.

echo [1/5] Pulling remote changes...
git pull origin main --allow-unrelated-histories
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Merge conflict detected. Resolving...
    git add .
    git commit -m "Merge remote changes"
)
echo.

echo [2/5] Adding new files...
git add .
echo.

echo [3/5] Committing changes...
git commit -m "Add GitHub Actions deployment and update config"
if %ERRORLEVEL% EQU 0 (
    echo Committed successfully
) else (
    echo No changes to commit
)
echo.

echo [4/5] Pushing to GitHub...
git push origin main
echo.

echo [5/5] Done!
echo.
echo ========================================
echo   SUCCESS!
echo ========================================
echo.
echo Changes pushed to GitHub!
echo.
echo Now enable GitHub Pages:
echo 1. Go to: https://github.com/SAZZAD-404/Toolkit-Generators/settings/pages
echo 2. Under "Source", select "GitHub Actions"
echo 3. Wait 2-3 minutes
echo 4. Visit: https://sazzad-404.github.io/Toolkit-Generators/
echo.
pause
