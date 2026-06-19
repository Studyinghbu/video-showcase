# 视频展厅

这是一个不依赖框架的静态视频网站。

## 本地浏览

在 PowerShell 中运行：

```powershell
.\start-site.ps1
```

浏览器会打开 `http://localhost:8000`。也可以直接双击 `index.html` 浏览。

## 公网部署

本项目可通过 GitHub Pages 发布。推送到 GitHub 后，在仓库的
`Settings > Pages` 中选择从 `main` 分支根目录部署，发布完成后即可通过
`https://<用户名>.github.io/<仓库名>/` 访问。

## 添加视频

1. 把新视频及其封面放入目录。
2. 在 `app.js` 顶部的 `videos` 数组中增加一项。
3. 填写标题、视频路径、封面路径、时长和清晰度信息。
