(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{557:function(v,_,t){"use strict";t.r(_);var e=t(7),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的标准网络协议。FTP使用两种不同的模式来建立数据连接：主动模式（Active mode）和被动模式（Passive mode）。")]),v._v(" "),t("h2",{attrs:{id:"主动模式-active-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主动模式-active-mode"}},[v._v("#")]),v._v(" 主动模式（Active mode）：")]),v._v(" "),t("p",[v._v("工作流程：")]),v._v(" "),t("ul",[t("li",[v._v("客户端通过命令通道（默认端口21）与服务器建立控制连接。")]),v._v(" "),t("li",[v._v("当需要传输文件时，客户端向服务器发送PORT命令，指定客户端用于数据传输的IP地址和端口号。")]),v._v(" "),t("li",[v._v("服务器通过控制连接从客户端的指定端口发起数据连接，将文件传输到客户端。"),t("br"),v._v("\n特点：")]),v._v(" "),t("li",[v._v("客户端主动地打开一个临时端口，用于数据连接。")]),v._v(" "),t("li",[v._v("服务器连接到客户端指定的端口，向客户端发送数据。")]),v._v(" "),t("li",[v._v("可能面临防火墙问题，因为服务器主动连接到客户端的端口，而一些防火墙可能会阻止这种类型的流量。")])]),v._v(" "),t("h2",{attrs:{id:"被动模式-passive-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#被动模式-passive-mode"}},[v._v("#")]),v._v(" 被动模式（Passive mode）：")]),v._v(" "),t("p",[v._v("工作流程：")]),v._v(" "),t("ul",[t("li",[v._v("客户端通过命令通道与服务器建立控制连接。")]),v._v(" "),t("li",[v._v("当需要传输文件时，客户端向服务器发送PASV命令。")]),v._v(" "),t("li",[v._v("服务器在一个范围内选择一个端口，并通过控制连接告知客户端，然后等待客户端连接。")]),v._v(" "),t("li",[v._v("客户端通过一个新的数据连接连接到服务器的指定端口，文件传输开始。"),t("br"),v._v("\n特点：")]),v._v(" "),t("li",[v._v("服务器在一个范围内选择一个端口，并告知客户端，由客户端连接。")]),v._v(" "),t("li",[v._v("可以更容易地穿越防火墙，因为客户端发起了数据连接。")]),v._v(" "),t("li",[v._v("通常在被动模式下更容易实现对防火墙友好的配置。")])]),v._v(" "),t("h2",{attrs:{id:"如何选择模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何选择模式"}},[v._v("#")]),v._v(" 如何选择模式：")]),v._v(" "),t("ul",[t("li",[v._v("主动模式： 通常在客户端位于防火墙后，且防火墙无法自动处理FTP流量时使用。")]),v._v(" "),t("li",[v._v("被动模式： 通常在服务器位于防火墙后，或者要求更好的防火墙穿越能力时使用。"),t("br"),v._v("\n选择模式取决于网络拓扑、防火墙配置以及安全性要求。被动模式更常见，因为它通常更容易在各种网络环境中工作。")])])])}),[],!1,null,null,null);_.default=i.exports}}]);