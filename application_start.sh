#! /bin/bash

sudo npx pm2 kill

sudo npx pm2 start /home/ec2-user/shaadibazar/shaadibazar/app.js 