# 使用教程

## 简介

kcli 是一个基于模版生成文件的工具

## 安装

建议全局安装

```
npm install @jack-syk/kcli -g
```

## 使用

在项目当根目录中首先创建一个 kcli.json 的文件
包含

-   template 模版的路径
-   target 输出文件的路径

示例

```
{
    "template": "./template",
    "target": "./output"
}
```

然后在项目的根目录下执行 kcli 命令

```
kcli
```

执行完毕，说明文件已经生成
