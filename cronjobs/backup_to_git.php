<?php
date_default_timezone_set("America/Los_Angeles");
echo '>> cd ~/public_html/';
echo shell_exec('cd ~/public_html/');

echo '>> echo "Backup to git: '.date("m-d-Y h:i:sa").' LAX" >> log.txt';
echo shell_exec('echo "Backup to git: '.date("m-d-Y h:i:sa").' LAX" >> log.txt');

echo '>> git add .';
echo shell_exec('git add .');

echo '>> git commit -m "Backup on '.date("m-d-Y h:i:sa");
echo shell_exec('git commit -m "Backup on '.date("m-d-Y h:i:sa"));

echo '>> '.base64_decode('Z2l0IHB1c2ggaHR0cHM6Ly9rY2lydGFwdHJpY2s6THVjazE1MjQzR29vZEBnaXRodWIuY29tIG1hc3Rlcg==');
echo shell_exec(base64_decode('Z2l0IHB1c2ggaHR0cHM6Ly9rY2lydGFwdHJpY2s6THVjazE1MjQzR29vZEBnaXRodWIuY29tIG1hc3Rlcg=='));
php>
