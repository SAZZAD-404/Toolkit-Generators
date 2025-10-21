@echo off
git add .
git commit -m "Update project"
git push
echo.
echo Pushed to GitHub! Check Actions tab for deployment status.
pause
