# Ubuntu

一个以桌面应用为主的 Linux 操作系统。

## 配置镜像

备份配置文件

```sh
sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak
```

阿里云公网镜像

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.aliyun.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.aliyun.com@g" /etc/apt/sources.list
```

阿里云内网镜像

```sh
sudo sed -i "s@http://.*archive.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://mirrors.cloud.aliyuncs.com@g" /etc/apt/sources.list
```

更新索引

```sh
sudo apt update
```

## 安装 zsh

```sh
sudo apt install zsh
```

## 安装 ohmyzsh

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## 安装 ohmyzsh 插件

```sh
cd ~/.oh-my-zsh/plugins
gcl https://github.com/zsh-users/zsh-autosuggestions.git
gcl https://github.com/zsh-users/zsh-syntax-highlighting.git
```

## 配置 ohmyzsh

编辑 .zshrc

```sh
vim ~/.zshrc
```

去掉 # 注释，启用第 35 行内容

```sh
DISABLE_MAGIC_FUNCTIONS="true"
```

配置插件

```sh
plugins=(
  git
  sudo
  command-not-found
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

最后执行

```sh
source ~/.zshrc
```
