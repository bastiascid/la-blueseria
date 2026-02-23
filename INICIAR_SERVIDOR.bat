@echo off
chcp 65001 > nul
title La Blueseria - Servidor Web
echo.
echo  Iniciando servidor de La Blueseria...
echo.
python "%~dp0server.py"
echo.
pause
