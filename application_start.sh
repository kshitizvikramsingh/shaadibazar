#! /bin/bash

sudo npx pm2 kill -y

sudo npx pm2 start /home/ec2-user/shaadibazar/app.js 