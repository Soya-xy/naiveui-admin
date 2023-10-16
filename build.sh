SERVER=ld.io:5000/exar/
REPOSITORY=web-admin
echo $1
if [ $1 ]; then
    TAG=$1
else
    read -p "请输入版本号(MMDD): " TAG
fi
V=$SERVER$REPOSITORY:$TAG
yarn build
docker build -t $V . --platform=linux/amd64
docker save $V | gzip > ./$REPOSITORY-$TAG.tgz
