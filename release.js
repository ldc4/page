// 先临时hard code，把e-nav发布到当前目录下
// 后续提供命令行工具，以及支持不同项目的发布

var process = require('child_process');
process.exec('cp -rf ../e-nav/build/* ./e-nav');
