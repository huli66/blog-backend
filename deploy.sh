# 登录 docker，执行时传入的参数
echo -e "----------docker Login----------"
docker login --username=$1 --password=$2

# 停止之前的容器，docker stop <ContainerName>
echo -e "----------docker Stop----------"
docker stop backend

# 删除之前的容器和镜像，
echo -e "----------docker Rm----------"
docker rm backend
docker rmi huli66/blog-backend:latest

# 拉取最新的镜像，
echo -e "----------docker Pull----------"
docker pull huli66/blog-backend:latest

# 运行新的容器，容器的 4090 端口映射到本机的 3090 端口
echo -e "----------docker Run----------"
docker run --rm -d -p 3090:4090 --name backend huli66/blog-backend:latest

echo -e "----------deploy Success----------"