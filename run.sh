#!/bin/sh
cd /root/play-projects && git pull origin master
cd /root/play-projects && npm i 
cd /root/play-projects && npm run build

rm -rf /usr/share/nginx/build
scp -r /root/play-projects/build /usr/share/nginx

