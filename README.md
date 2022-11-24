## 一个FTP可视化搜索的功能开发
## 打造自己专属方向的文献数据库
众所周知，windows下有一款搜索文件飞快的软件，everything，可以毫秒级的速度找到电脑上所有文件名与搜索类似的文件
而在linux系统下也有类似的需求，但现有的搜索工具都是基于命令行的，非常不友好
于是一个针对快速查阅上万篇论文，模糊搜索并预览的网页诞生了
功能有：
* 模糊搜索关键字，在10G文件达到毫秒级响应结果

* 允许一次性拖拽上传多个文件
* 允许多选复制文件Url，方便分享论文给课题组其他成员
* 可以在线直接预览pdf和图片文件，无需下载
* 配合我写的油猴插件，可以实现影响因子，期刊名等信息一并展示
ask：为什么不把这个脚本直接放项目里，要完善的还很多，api也不是那么稳定，因此暂时做成脚本的形式

预备条件：自己一台完备的服务器且配置好FTP，这个网页主要作用是显示和查找，因为网页无法上传文件夹

前端：bootstrap，layui组件，jquery和原生js和Vue（cdn版）进行数据操作

后端：很简单的springboot，完成上传、查询、删除接口即可

检索影响因子：油猴脚本这一部分工作量算是最大的，基于对scihub api的请求改到对自己网页检索可用，遍历几十条ajax速度太慢了
，但又不像其他检索网站会显示期刊号和名称等信息，只能根据文献名称请求查询响应速度...可用就行。

使用时
需要修改的地方：
```java
/**
 * 1、FileUploadController.java中，需要修改自己的服务器的url
 */
public static String serverUrl = "http://xx.xx.xx.xx:y/file/";
```
```java
/**
 * 2、FileUploadController.java中，pic_path也需要修改
 */
if ("bin".equals(bin_path)) {
    pic_path = tomcat_path.substring(0, System.getProperty("user.dir").lastIndexOf("/")) + "/../../ftpServer/ftprepository/";
} else {
    pic_path = tomcat_path + "/../../ftpServer/ftprepository/";
}
```
```javascript
//3、index.html和ftp.html中
//输入你想要的md5验证密码
//例如'14e1b600b1fd579f47433b88e8d85291'代表123456
//双md5是逆向解密不了的，直接放前端也是几乎100%安全的
if (pwd_md5 == '14e1b600b1fd579f47433b88e8d85291'){
    //...
}
```
maven项目打包和部署的步骤不作赘述
实现的效果如图
1、查看文献||显示预览图

2、搜索文献||直接打开链接

3、翻页

4、影响因子插件效果
