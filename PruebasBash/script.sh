#!/bin/bash
read -p "Introduce el nombre del proyecto: " proyectName
mkdir -p "./$projectName"

indexFile="./$projectName/index.html"
touch $indexFile

styleFile="./$projectName/style.css"
touch $styleFile

scriptFile="./$projectName/script.js"
touch $scriptFile