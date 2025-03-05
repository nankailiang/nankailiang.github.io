(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{575:function(v,_,l){"use strict";l.r(_);var i=l(7),t=Object(i.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("h2",{attrs:{id:"浏览器输入url会发生什么"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#浏览器输入url会发生什么"}},[v._v("#")]),v._v(" 浏览器输入url会发生什么")]),v._v(" "),l("ul",[l("li",[v._v("浏览器先判断是否为合法的url格式，不合法则在搜索引擎中搜索")]),v._v(" "),l("li",[v._v("合法后，DNS解析会先判断缓存中是否有url的ip地址。")]),v._v(" "),l("li",[v._v("缓存的查询顺序是：浏览器缓存 -> 操作系统缓存（本地的hosts文件） -> 路由器缓存 -> 本地的DNS服务器缓存")]),v._v(" "),l("li",[v._v("在缓存中没有的情况，则向服务器发起请求查询ip地址。")]),v._v(" "),l("li",[v._v("查询IP地址的顺序是：根域名服务器 -> 顶级域名服务器 -> 权威域名服务器。直到查找到返回，并将其存储在缓存中下次使用")]),v._v(" "),l("li",[v._v("TSP建立连接，也就是三次握手")]),v._v(" "),l("li",[v._v("第一次握手，携带建立连接请求SYN=1和随机序列seq=x")]),v._v(" "),l("li",[v._v("第二次握手，携带确定字段ACK=1、连接请求SYN=1、随机序列seq=y和ack为上一次握手的seq+1，就是x+1")]),v._v(" "),l("li",[v._v("第三次握手，携带确定字段ACK=1、ack=y+1、seq=x+1")]),v._v(" "),l("li",[v._v("如果是https，还有一个TLS四次握手")]),v._v(" "),l("li",[v._v("第一次握手，客户端向服务端发送 支持的协议版本 + 支持的加密方法 + 生成的随机数")]),v._v(" "),l("li",[v._v("第二次握手，服务端向客户端发送 证书 + 公钥 + 随机数")]),v._v(" "),l("li",[v._v("第三次握手前，客户端会先验证证书有没有过期、域名对不对、是否可信机构颁发的。")]),v._v(" "),l("li",[v._v("没有问题或者用户接受不受信的证书，浏览器会生成一个新的随机数")]),v._v(" "),l("li",[v._v("第三次握手，将之前的三个随机数通过一定的算法生成会话秘钥，之后的加密解密都是用这个秘钥")]),v._v(" "),l("li",[v._v("第四次握手，服务端收到回复，是用确定的加密方法进行解密，得到第三个随机数，使用同样的算法计算出会话秘钥")]),v._v(" "),l("li",[v._v("建立连接之后，浏览器发送http请求")]),v._v(" "),l("li",[v._v("请求报文由请求行、请求头、空行和请求体组成")]),v._v(" "),l("li",[v._v("服务器解析请求报文，返回响应报文")]),v._v(" "),l("li",[v._v("响应报文由响应行、响应头、空行和响应体组成，我们需要的html文件就在响应体中")]),v._v(" "),l("li",[v._v("浏览器拿到html文件并开始解析，构建dom tree。遇到css文件，下载并构建CSSOM tree。等到两者都构建完成之后，一起构建Render tree。然后进行布局和绘制")]),v._v(" "),l("li",[v._v("其中遇到了script标签，则停止构建dom tree，等下载完成之后才会继续构建dom tree")]),v._v(" "),l("li",[v._v("当资源传输完毕之后，TSP关闭连接，进行四次挥手的操作，其中四次挥手的操作客户端和服务器都可以发起")]),v._v(" "),l("li",[v._v("第一次挥手，携带断开连接的FIN=1、确定字段ACK=1、随机序列seq=u，ack=v")]),v._v(" "),l("li",[v._v("第二次挥手，携带确定字段ACK=1、随机序列seq=v，ack=u+1")]),v._v(" "),l("li",[v._v("第三次挥手，携带确定字段ACK=1、断开连接FIN=1、随机序列seq=w、ack=u+1")]),v._v(" "),l("li",[v._v("第四次挥手，携带确定字段ACK=1，随机序列seq=u+1，ack=w+1")]),v._v(" "),l("li",[v._v("等待2MSL后进入关闭状态")]),v._v(" "),l("li",[v._v("断开连接，结束通讯")])])])}),[],!1,null,null,null);_.default=t.exports}}]);