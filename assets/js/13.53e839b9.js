(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{526:function(t,e,v){"use strict";v.r(e);var _=v(7),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"bfc-block-formatting-context"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc-block-formatting-context"}},[t._v("#")]),t._v(" BFC (Block Formatting Context)")]),t._v(" "),v("p",[t._v("BFC，即块级格式化上下文。BFC的主要功能是创建一个隔离的渲染区域，其中内部元素的布局不会受到外部或相邻元素的影响。它能解决一些常见的布局问题，如浮动元素的包含和边距塌陷。")]),t._v(" "),v("h3",{attrs:{id:"bfc的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bfc的特点"}},[t._v("#")]),t._v(" BFC的特点")]),t._v(" "),v("ul",[v("li",[t._v("一个隔离的容器，其中的内部元素不会影响外部的元素。")]),t._v(" "),v("li",[t._v("容器能自动适应并包含浮动的子元素，不会影响其自身的高度。")]),t._v(" "),v("li",[t._v("可以防止边距塌陷，即使在父子元素间也是如此。")]),t._v(" "),v("li",[t._v("明确了浮动元素与非浮动元素之间的布局关系。")])]),t._v(" "),v("h3",{attrs:{id:"如何触发bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何触发bfc"}},[t._v("#")]),t._v(" 如何触发BFC")]),t._v(" "),v("ol",[v("li",[t._v("将"),v("code",[t._v("float")]),t._v("属性设置为"),v("code",[t._v("left")]),t._v("或"),v("code",[t._v("right")]),t._v("。")]),t._v(" "),v("li",[t._v("将"),v("code",[t._v("position")]),t._v("属性设置为"),v("code",[t._v("absolute")]),t._v("或"),v("code",[t._v("fixed")]),t._v("。")]),t._v(" "),v("li",[t._v("将"),v("code",[t._v("overflow")]),t._v("属性设置为"),v("code",[t._v("hidden")]),t._v("、"),v("code",[t._v("auto")]),t._v("或"),v("code",[t._v("scroll")]),t._v("。")]),t._v(" "),v("li",[t._v("将"),v("code",[t._v("display")]),t._v("属性设置为"),v("code",[t._v("inline-block")]),t._v("、"),v("code",[t._v("table-cell")]),t._v("、"),v("code",[t._v("table-caption")]),t._v("、"),v("code",[t._v("flex")]),t._v("、"),v("code",[t._v("inline-flex")]),t._v("或"),v("code",[t._v("grid")]),t._v("。")]),t._v(" "),v("li",[t._v("使用标准的块级元素，如"),v("code",[t._v("div")]),t._v("、"),v("code",[t._v("p")]),t._v("、"),v("code",[t._v("h1")]),t._v("至"),v("code",[t._v("h6")]),t._v("、"),v("code",[t._v("ul")]),t._v("、"),v("code",[t._v("ol")]),t._v("、"),v("code",[t._v("li")]),t._v("等，它们默认生成BFC，但通常无需额外设置。")]),t._v(" "),v("li",[t._v("使用"),v("code",[t._v("display: flow-root")]),t._v("，这是专为创建BFC而设的属性值。")])]),t._v(" "),v("h4",{attrs:{id:"示例代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例代码"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".bfc-element")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 通过将overflow设置为非visible值来触发BFC */")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 或者使用其他方式 */")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* float: left; */")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* position: absolute; */")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* display: flex; */")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);