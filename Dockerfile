# 使用命令 `docker image build -t blog-backend .` 构建镜像

# 该 image 文件继承官方的 node image，冒号表示标签，
# 这里表示 alpine 版本，打出来的镜像体积会比用基础 node 镜像打出来更小
FROM node:16-alpine
# 将当前目录下的所有文件（除了 .dockerignore 排除的路径），都拷贝进 image 文件的 /app 目录
COPY . /app
# 指定接下来的工作路径为 /app
WORKDIR /app
# 在 /app 目录下运行 npm install 命令
RUN npm install

# 如果项目代码比较多这里可以先构建项目，然后把 node_modules 和 dist 里面的内容放到镜像即可

# 将容器的 4090 端口暴露出来，允许外部连接这个端口
EXPOSE 4090
# 容器启动时执行执行
CMD npm start