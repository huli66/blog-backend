# 该 image 文件继承官方的 node image，冒号表示标签，这里表示8.4版本
FROM node:16.14.0
# 将当前目录下的所有文件（除了 .dockerignore 排除的路径），都拷贝进 image 文件的 /app 目录
COPY . /blogbackend
# 指定接下来的工作路径为 /app
WORKDIR /blogbackend
# 在 /app 目录下运行 npm install 命令
RUN npm install
# 将容器的 3000 端口暴露出来，允许外部连接这个端口
EXPOSE 4100