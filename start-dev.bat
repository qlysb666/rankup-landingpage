@echo off
setlocal
cd /d "%~dp0"

REM check npm
where npm >nul 2>nul || (
  echo npm not found. Install Node.js from https://nodejs.org/
  pause
  exit /b 1
)

REM install deps if missing
if not exist node_modules (
  echo Installing dependencies...
  npm install || (
    echo npm install failed.
    pause
    exit /b 1
  )
)

echo Starting dev server on http://localhost:5173 ...
npm run dev -- --host --port 5173

echo Dev server exited. Press any key to close.
pause
