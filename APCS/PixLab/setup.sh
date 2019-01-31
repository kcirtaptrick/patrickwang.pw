#!/bin/bash
cd /home/ubuntu/workspace
wget http://patrickwang.pw/APCS/PixLab/pixlab.sh
sudo apt-get update
sudo apt-get install default-jdk
git clone https://github.com/kcirtaptrick/PixLab.git
cd PixLab
rm -rf .git
cd /home/ubuntu
git clone https://github.com/kcirtaptrick/cloud9-vnc.git
cd cloud9-vnc/
rm -rf .git
sudo apt-get update
sudo chmod a+x install.sh
sudo ./install.sh

