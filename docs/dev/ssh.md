# SSH

一种用于安全通信的网络协议。

## 生成新的 SSH 密钥

```sh
ssh-keygen -t ed25519
```

## 查看 SSH 密钥

```sh
cat ~\.ssh\id_ed25519.pub
```

## 测试 SSH 连接

```sh
ssh -T git@github.com
```

## 配置 GitHub 在 HTTPS 端口使用 SSH

```text
Host github.com
HostName ssh.github.com
Port 443
User git
```

## 配置代理

```text
ProxyCommand "C:\Program Files\Git\mingw64\bin\connect.exe" -S 127.0.0.1:7890 %h %p
```
