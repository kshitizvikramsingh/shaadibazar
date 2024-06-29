#! /bin/bash
rm -rf /home/ec2-user/shaadibazar
mkdir /home/ec2-user/shaadibazar
cd /home/ec2-user/shaadibazar

git clone https://github.com/kshitizvikramsingh/shaadibazar.git

npm init -y
npm install