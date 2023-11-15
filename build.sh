yarn 
yarn build
cd build
scp -r * syscc@172.16.254.236:/home/syscc/docker/nginx/www/welfare-form
cd ..
