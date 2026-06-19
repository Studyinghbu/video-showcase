$ErrorActionPreference = "Stop"
$port = 8000
$url = "http://localhost:$port"

Write-Host "视频网站已启动：$url" -ForegroundColor Green
Write-Host "按 Ctrl+C 停止服务。" -ForegroundColor DarkGray
Start-Process $url
python -m http.server $port --bind 127.0.0.1
