4/10/2025
========= 

This is a simple NodeJs project to test the following:
- How to run in digital ocean
- How to deploy to digital ocean (from GitHub)
- How to handle startup location and running from digital ocean 

I will keep the app very minimal to start, and may add to it if further 
testing is needed.

I pushed this to GitHub, then ran the following from my Digital Ocean server (as labman):
git clone https://github.com/ScottCooper520/digital-ocean-test 

I then installed pm2, which allows a project to run as a process.
sudo npm install pm2@latest -g

And now, would start the app (from within dist) with:
pm2 start ./server/app.js 

Can then use the following to stop it (this name is app, this id is 0):
pm2 stop app 
-or-
pm2 stop 0


I will also plan to install Nginx as a reverse proxy server. This is used to allow 
external access to the server. See:
https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-20-04




