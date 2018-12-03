#!/bin/bash

echo '>> cd ~/public_html/'
cd ~/public_html/

DATE=`date '+%m-%d-%Y %H:%M:%S'`

echo '>> echo "Backup to git: $DATE UTC" >> log.txt'
echo "Backup to git: $DATE UTC" >> log.txt

echo '>> git add .'
git add .

echo '>> git commit -m "Backup on $DATE"'
git commit -m "Backup on $DATE"

INFO=`echo Z2l0IHB1c2ggaHR0cHM6Ly9rY2lydGFwdHJpY2s6THVjazE1MjQzR29vZEBnaXRodWIuY29tL2tjaXJ0YXB0cmljay9wYXRyaWNrd2FuZy5wdy5naXQgbWFzdGVyCg== | base64 -d`

echo '>> $INFO'
eval $INFO
