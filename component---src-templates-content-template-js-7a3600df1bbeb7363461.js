(window.webpackJsonp=window.webpackJsonp||[]).push([[12,1],{137:function(e,a,t){"use strict";t.r(a);t(157),t(69),t(379);var n=t(6),r=t.n(n),o=(t(549),t(0)),i=t.n(o),l=t(168),s=t(301),c=t.n(s),u=t(150),M=(t(550),t(142)),N=t(4),g=t.n(N),m=function(e){var a=e.part,t=e.letter;return i.a.createElement(M.a,{flex:!0,className:"container spacing",centered:!0},i.a.createElement("a",{className:"edit-link",target:"__BLANK",href:"https://github.com/fullstackopen-2019/fullstackopen-2019.github.io/edit/source/src/content/osa"+a+"/osa"+a+t+".md"},i.a.createElement("span",null,"Ehdota muutosta materiaalin sisältöön")))};m.propTypes={part:g.a.number.isRequired,letter:g.a.string.isRequired};var d=m,p=t(152),D=t(163),y=t(177),T=t.n(y),j=t(270),E=(t(146),t(161),t(162)),h=(t(551),t(141)),w=t(552),z=t.n(w),k=t(186),f=t.n(k),I=t(159),x=t.n(I),v=t(189),b=function(e){function a(a){var t;return(t=e.call(this,a)||this).componentDidMount=function(){var e=Array.from(document.querySelectorAll("h3")),a=document.querySelector("h1"),n=e.map(function(e){return e.id=z()(e.innerText),e.classList.add("offset"),{text:e.innerText,id:e.id,level:e.nodeName}});t.setState({headings:n,h1Top:a.offsetTop})},t.loopThroughPartsNode=function(e){var a=t.state.headings,n=t.props,r=n.part,o=n.letter,l=n.currentPath,s=n.currentPartTitle,c=n.colorCode,u=[];for(var M in e)s!==e[M]?u.push(i.a.createElement(h.Link,{key:M,className:"left-navigation-link",style:{borderColor:c},to:"/osa"+r+"/"+f()(e[M])},M+" "+e[M])):u.push(i.a.createElement(v.a,{containerClassName:"accordion--side-navigation",style:{color:c},titleStyle:{backgroundColor:c,borderColor:c},initiallyOpened:!0,key:M,title:o+" "+e[M],list:a.map(function(e){return{href:l+"#"+e.id,text:e.text}})}));return u},t.state={h1Top:0,headings:[]},t}return r()(a,e),a.prototype.render=function(){var e=this.props.part;return i.a.createElement(M.a,{tag:"ul",flex:!0,dirColumn:!0,className:"scroll-navigation "+this.props.className},this.loopThroughPartsNode(x.a[e]))},a}(o.Component);b.defaultProps={className:""},b.propTypes={className:g.a.string,colorCode:g.a.string.isRequired};var L=b,O=t(174),C=t(144),A=t(268),S=t.n(A),Y=t(172),Q=t.n(Y),U=t(156),B=t.n(U),P=t(300),_=t(259),R=t.n(_);t.d(a,"default",function(){return G}),t.d(a,"contentPageQuery",function(){return W});var G=function(e){function a(a){var t;return(t=e.call(this,a)||this).handleScroll=function(){t.setState({top:window.scrollY})},t.state={h1Top:0,h1Title:"",otherTitles:"",top:0},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=Array.from(document.querySelectorAll("a")),a=document.querySelector("h1"),t=document.querySelectorAll("h3"),n=Array.from(t).map(function(e){return e.innerText}),r=this.props.data.markdownRemark.frontmatter;e.map(function(e){return e.style="border-color: "+C[P.a[r.part]],e.target="_blank",e.onmouseover=function(){e.style.backgroundColor=C[P.a[r.part]]},e.onmouseleave=function(){e.style.backgroundColor="transparent"},null}),this.setState({h1Top:a.offsetTop,h1Title:a.innerText,otherTitles:[].concat(n)}),window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.props.data.markdownRemark,a=e.frontmatter,t=e.html,n=a.mainImage,r=a.letter,o=a.part,s=C[P.a[o]],N={replace:function(e){var a=e.type,t=e.name,n=e.attribs,r=e.children;return"tag"===a&&"picture"===t?i.a.createElement("picture",null,i.a.createElement("img",{style:{borderColor:s},alt:"fullstack content",src:r[0].attribs.src})):"tag"===a&&"pre"===t?i.a.createElement("pre",null,S()(r,N)):"tag"===a&&"content"===n.class?i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"course-content col-6 push-right-3"},S()(r,N))):"tag"===a&&"tasks"===n.class?i.a.createElement(u.a,{style:{backgroundColor:s},className:"spacing spacing--after tasks"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"course-content col-6 push-right-3",style:{borderColor:s,backgroundColor:"transparent"}},"pre"===r.name?i.a.createElement("pre",null,S()(r,N)):S()(r,N)))):void 0}};return i.a.createElement(D.a,null,i.a.createElement(E.a,{title:"Fullstack osa"+o+" | "+this.state.h1Title,description:Q.a,keywords:[].concat(B.a,[this.state.h1Title],this.state.otherTitles)}),this.state.top>300&&i.a.createElement("div",{className:"arrow-go-up",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},i.a.createElement("img",{src:c.a,alt:"arrow-up"})),i.a.createElement("div",{className:"course-container spacing--after"},i.a.createElement(u.a,{className:"part-main__banner spacing--mobile--small",backgroundColor:s,style:{backgroundImage:"url("+R.a.resolve(n.publicURL)+")",backgroundColor:s}},i.a.createElement("div",{className:"container spacing--after"},i.a.createElement(l.a,{className:"breadcrumb",content:[{backgroundColor:s,text:"Fullstack",link:"/#course-contents"},{backgroundColor:s,text:"osa "+o,link:"/osa"+o},{backgroundColor:C.black,text:x.a[o][r]}]}))),i.a.createElement(M.a,{className:"course"},i.a.createElement(M.a,{flex:!0,className:"container",relative:!0},i.a.createElement(L,{part:o,letter:r,currentPartTitle:x.a[o][r],currentPath:"/osa"+o+"/"+f()(x.a[o][r]),colorCode:s,className:"col-2 spacing",style:{top:this.state.h1Top}}),i.a.createElement(M.a,{className:"course-content col-6 push-right-3",autoBottomMargin:!0},i.a.createElement("p",{className:"col-1 letter",style:{borderColor:s}},r),i.a.createElement(O.a,{headingLevel:"h1",text:x.a[o][r]}))),T()(t,N)),!1,i.a.createElement(d,{part:o,letter:r}),i.a.createElement(j.a,{part:o,letter:r})),i.a.createElement(p.a,null))},a}(o.Component),W="1293465836"},141:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return m}),t.d(a,"StaticQueryContext",function(){return N}),t.d(a,"StaticQuery",function(){return g});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(147),s=t.n(l);t.d(a,"Link",function(){return s.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var c=t(184),u=t.n(c);t.d(a,"PageRenderer",function(){return u.a});var M=t(31);t.d(a,"parsePath",function(){return M.a});var N=r.a.createContext({}),g=function(e){return r.a.createElement(N.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},142:function(e,a,t){"use strict";t(28);var n=t(143),r=t.n(n),o=(t(260),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.Tag,t=e.children,n=e.className,o=e.flex,i=e.dirColumn,l=e.spaceAround,c=e.spaceBetween,u=e.centered,M=e.autoMargin,N=e.autoBottomMargin,g=e.horizontalHalf,m=e.flexStart,d=e.noWrap,p=e.centeredInDesktop,D=e.relative,y=r()(e,["Tag","children","className","flex","dirColumn","spaceAround","spaceBetween","centered","autoMargin","autoBottomMargin","horizontalHalf","flexStart","noWrap","centeredInDesktop","relative"]),T=[];return o&&T.push("element--flex"),M&&T.push("element--auto-margin"),N&&T.push("element--auto-bottom-margin"),i&&T.push("element--column"),l&&T.push("element--space-around"),c&&T.push("element--space-between"),u&&T.push("element--centered"),g&&T.push("element--horizontal-half"),m&&T.push("element--flex-start"),d&&T.push("element--no-wrap"),p&&T.push("element--centered-in-desktop"),D&&T.push("element--relative"),s.a.createElement(a,Object.assign({className:n+" "+T.join(" ")},y),t)};c.defaultProps={className:"",Tag:"div"},c.propTypes={Tag:i.a.string,children:i.a.node,className:i.a.string,flex:i.a.bool,spaceAround:i.a.bool,spaceBetween:i.a.bool,dirColumn:i.a.bool,centered:i.a.bool,horizontalHalf:i.a.bool,autoMargin:i.a.bool,autoBottomMargin:i.a.bool,flexStart:i.a.bool,noWrap:i.a.bool,centeredInDesktop:i.a.bool,relative:i.a.bool},a.a=c},144:function(e){e.exports={white:"#ffffff",black:"#33332d",main:"#e1e1e1",violet:"#B795F3",turquoise:"#82F7EB",green:"#AEFFDA","dark-orange":"#EB8755","light-orange":"#EEAC5D",yellow:"#F7F382",pink:"#E693CB",blue:"#706BE4","light-blue":"#82D2F7","light-violet":"#B2BBF0"}},145:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28),t(185);var n=t(143),r=t.n(n),o=(t(262),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.src,t=e.alt,n=(e.hover,e.className),o=e.overlay,i=e.contain,l=e.circle,c=e.extraSmall,u=e.small,M=e.medium,N=e.large,g=e.fullWidth,m=e.actualSize,d=e.squareBig,p=r()(e,["src","alt","hover","className","overlay","contain","circle","extraSmall","small","medium","large","fullWidth","actualSize","squareBig"]),D=[];return i&&D.push("image--contain"),g&&D.push("image--full-width"),l&&D.push("image--circle"),c&&D.push("image--extra-small"),u&&D.push("image--small"),M&&D.push("image--medium"),N&&D.push("image--large"),d&&D.push("image--square-big"),m&&D.push("image--acctual-size"),s.a.createElement("div",Object.assign({className:"image "+n+" "+D.join(" ")},p),s.a.createElement("div",{className:"image__container"},s.a.createElement("img",{style:{backgroundColor:o,backgroundOpacity:"0.5"},className:"image__content",src:a,alt:t})))};c.defaultProps={src:"",alt:"",overlay:"",className:""},c.propTypes={overlay:i.a.string,src:i.a.oneOfType([i.a.string,i.a.object]),alt:i.a.oneOfType([i.a.string,i.a.array]),hover:i.a.string,className:i.a.string,contain:i.a.bool,circle:i.a.bool,extraSmall:i.a.bool,small:i.a.bool,medium:i.a.bool,large:i.a.bool,squareBig:i.a.bool,fullWidth:i.a.bool,actualSize:i.a.bool}},146:function(e,a,t){"use strict";t.d(a,"a",function(){return M});t(28),t(165);var n=t(143),r=t.n(n),o=(t(173),t(177)),i=t.n(o),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=function(e){var a=e.text,t=e.className,n=e.heading,o=e.headingFontSize,l=e.bold,s=e.centered,c=e.noPadding,M=e.headingFont,N=r()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),g=[];s&&g.push("centered"),l&&g.push("bold"),c&&g.push("body-text--no-padding"),M&&g.push("heading-font");return u.a.createElement("div",Object.assign({className:"body-text "+t},N),n.title&&function(){if(n){var e=n.level;return u.a.createElement(e,{className:"body-text__title",style:o?{fontSize:o}:{}},n.title)}return null}(),a&&"string"==typeof a?u.a.createElement("p",{className:"body-text__content "+g.join(" ")},a):a&&a.map(function(e){return u.a.createElement("div",{key:e,className:"body-text__content "+g.join(" ")},i()(e))}))};M.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},M.propTypes={heading:s.a.shape({text:s.a.string,level:s.a.string}),headingFontSize:s.a.string,text:s.a.oneOfType([s.a.string,s.a.array]),className:s.a.string,centered:s.a.bool,bold:s.a.bool,noPadding:s.a.bool}},150:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(143),r=t.n(n),o=(t(160),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.className,t=e.backgroundColor,n=r()(e,["className","backgroundColor"]),o=t?{backgroundColor:t}:null;return s.a.createElement("div",Object.assign({className:"banner "+a,style:o},n))};c.defaultProps={className:""},c.propTypes={className:i.a.string}},152:function(e,a,t){"use strict";t(153);var n=t(142),r=t(145),o=t(141),i=t(0),l=t.n(i),s=t(158),c=t.n(s),u=t(164),M=t(154),N=[{src:t.n(M).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return l.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(n.a,{className:"col-5 push-right-3 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},N.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(r.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},l.a.createElement("div",{className:"footer__navigation-link-container"},u.b.map(function(e){return l.a.createElement(o.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},e.text)}))))}},153:function(e,a,t){},154:function(e,a,t){e.exports=t.p+"static/uoh_centre-3689cf9983a2ebc8089c8f078a9c4769.svg"},156:function(e,a){e.exports=["fullstack","full stack open 2019","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","full stack open","web-sovelluskehitys","web","houston","houston inc","websovelluskehitys","web-sovellus","React","Redux","Node.js","Node","MongoDB","GraphQL","REST","REST api","single page -sovellus","ohjelmointi"]},158:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjQ3cHgiIGhlaWdodD0iODJweCIgdmlld0JveD0iMCAwIDI0NyA4MiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMuMiAoNzI2NDMpIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPmxvZ28vaG91c3RvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwb2x5Z29uIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAwLjAyNjcxOTI2NzMgMTM4LjIwODE2NyAzNi40NjU0MzgxIDAgMzYuNDY1NDM4MSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxvZ28vaG91c3RvbiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImhvdXN0b25fc2ltcGxlLmVwcy1jb3B5LTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjU4MTg5MywgMjMuMjYzMDQwKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICA8cGF0aCBkPSJNODIuODA1MTI5OCwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDI1LjUzNjU1MDkgTDg1Ljk5MzYyOSwyNS41MzY1NTA5IEw4NS45OTM2MjksMTMuNTA2NjYwMyBMOTAuNDA2NTQ5MywxMy41MDY2NjAzIEw5MC40MDY1NDkzLDEwLjQ0NTY3ODQgTDc4LjM3NTEwMzYsMTAuNDQ1Njc4NCBMNzguMzc1MTAzNiwxMy41MDY2NjAzIEw4Mi44MDUxMjk4LDEzLjUwNjY2MDMgWiBNOTYuNDkxMDQ5NSwxNy45NjM2ODg1IEM5Ni40OTEwNDk1LDIwLjU1OTU1NzIgOTguMzE3ODU1NywyMi43MDc5ODQyIDEwMC44ODYxNTcsMjIuNzA3OTg0MiBDMTAzLjQ1NDg4MiwyMi43MDc5ODQyIDEwNS4yNDcxOTQsMjAuNTk1NDY1NyAxMDUuMjQ3MTk0LDE4LjAxNzk3NTMgTDEwNS4yNDcxOTQsMTguMDAwMDIxMSBDMTA1LjI0NzE5NCwxNS40MDQyOTM3IDEwMy40MjA1MjksMTMuMjU1ODY2NyAxMDAuODUyMjI4LDEzLjI1NTg2NjcgQzk4LjI4MzUwMjMsMTMuMjU1ODY2NyA5Ni40OTEwNDk1LDE1LjM2ODM4NTMgOTYuNDkxMDQ5NSwxNy45NDU3MzQzIEw5Ni40OTEwNDk1LDE3Ljk2MzY4ODUgWiBNOTMuMTQ3MDQxMywxOC4wMTc5NzUzIEw5My4xNDcwNDEzLDE3Ljk4MjA2NjkgQzkzLjE0NzA0MTMsMTMuNjg1NDk1NiA5Ni40MDQ4MTI3LDEwLjE3NjkzMDYgMTAwLjg4NjE1NywxMC4xNzY5MzA2IEMxMDUuMzY3OTI1LDEwLjE3NjkzMDYgMTA4LjU5MTM0MywxMy42NDk3Mjg1IDEwOC41OTEzNDMsMTcuOTQ1NzM0MyBMMTA4LjU5MTM0MywxNy45NjM2ODg1IEMxMDguNTkxMzQzLDIyLjI2MDI1OTggMTA1LjMzMzU3MiwyNS43Njg4MjQ3IDEwMC44NTIyMjgsMjUuNzY4ODI0NyBDOTYuMzcwMzE4LDI1Ljc2ODgyNDcgOTMuMTQ3MDQxMywyMi4zMTQxMjI0IDkzLjE0NzA0MTMsMTguMDE3OTc1MyBMOTMuMTQ3MDQxMywxOC4wMTc5NzUzIFogTTcwLjQxMTkxMzcsMjIuNzk3MDQ4NSBDNjguNzU2ODc0MiwyMi43OTcwNDg1IDY3LjM3ODIxNjYsMjIuMDgxMjgzMSA2Ni4wNjg0MDcsMjAuOTcxNzk3NCBMNjQuMTcyMTg3MiwyMy4zMTY0NDg0IEM2NS45MTMxODA4LDI0LjkyNzk0NTQgNjguMTM2Njc2MiwyNS43MzMzNDA0IDcwLjM0MzA2NTYsMjUuNzMzMzQwNCBDNzMuNDgwMTA1NSwyNS43MzMzNDA0IDc1LjY2OTI0NzYsMjQuMDUwMTY4IDc1LjY2OTI0NzYsMjEuMDYxMDAzIEw3NS42NjkyNDc2LDIxLjAyNTA5NDUgQzc1LjcyMTEzMSwxOC4zOTM0NTg4IDc0LjA0ODU2MTUsMTcuMzAxNzg1OCA3MS4xMDExMDExLDE2LjQ5NTgyNTMgQzY4LjU4NDY4MzQsMTUuODMzOTIyNiA2Ny45NjM5MTk5LDE1LjUxMTMxMjIgNjcuOTYzOTE5OSwxNC41MDg5ODYyIEw2Ny45NjM5MTk5LDE0LjQ3MzA3NzggQzY3Ljk2MzkxOTksMTMuNzM4OTM0MSA2OC42MDIyMTM1LDEzLjE2NjY2MTEgNjkuODI1NjQ0OSwxMy4xNjY2NjExIEM3MS4wNDk2NDE4LDEzLjE2NjY2MTEgNzIuMzA3OTkyMSwxMy43MjA5Nzk5IDczLjYwMDgzNywxNC42NTIwNTQ1IEw3NS4yNTU1OTM4LDEyLjE0NTk1NjkgQzczLjc4OTk5MjUsMTAuOTEwNjUwMiA3MS45ODA3MTY0LDEwLjIzMDM2OTIgNjkuODYwNTYzNywxMC4yMzAzNjkyIEM2Ni44OTU3MTQ3LDEwLjIzMDM2OTIgNjQuNzc1NTYyLDEyLjAzODY1NTcgNjQuNzc1NTYyLDE0Ljc3NzU5MjYgTDY0Ljc3NTU2MiwxNC44MTMwNzY5IEM2NC43NzU1NjIsMTcuODAyNjY2MSA2Ni42NzEwNzQ5LDE4LjY0NDUzNSA2OS41ODQxODE5LDE5LjQzMjExNzMgQzcyLjAxNDY0NTYsMjAuMDc2NjMxMiA3Mi41MTQ2Nzc2LDIwLjUwNjI2MDEgNzIuNTE0Njc3NiwyMS4zNDc3MDQ5IEw3Mi41MTQ2Nzc2LDIxLjM4MzA0NzkgQzcyLjUxNDY3NzYsMjIuMjYwMjU5OCA3MS43MjIyODg4LDIyLjc5NzA0ODUgNzAuNDExOTEzNywyMi43OTcwNDg1IEw3MC40MTE5MTM3LDIyLjc5NzA0ODUgWiBNMzEuMzM2NDY5NywxNy45NjM2ODg1IEMzMS4zMzY0Njk3LDIwLjU1OTU1NzIgMzMuMTYzNywyMi43MDc5ODQyIDM1LjczMTg1OTksMjIuNzA3OTg0MiBDMzguMzAwMTYxMSwyMi43MDc5ODQyIDQwLjA5MjQ3MjYsMjAuNTk1NDY1NyA0MC4wOTI0NzI2LDE4LjAxNzk3NTMgTDQwLjA5MjQ3MjYsMTguMDAwMDIxMSBDNDAuMDkyNDcyNiwxNS40MDQyOTM3IDM4LjI2NTI0MjMsMTMuMjU1ODY2NyAzNS42OTY5NDEsMTMuMjU1ODY2NyBDMzMuMTI5MjA1MywxMy4yNTU4NjY3IDMxLjMzNjQ2OTcsMTUuMzY4Mzg1MyAzMS4zMzY0Njk3LDE3Ljk0NTczNDMgTDMxLjMzNjQ2OTcsMTcuOTYzNjg4NSBaIE0yOC4wMDk3MDg5LDE4LjAxNzk3NTMgTDI4LjAwOTcwODksMTcuOTgyMDY2OSBDMjguMDA5NzA4OSwxMy42ODU0OTU2IDMxLjI2NzQ4MDMsMTAuMTc2OTMwNiAzNS43NDg4MjQ1LDEwLjE3NjkzMDYgQzQwLjIzMDczNDIsMTAuMTc2OTMwNiA0My40MzYxOTgsMTMuNjQ5NzI4NSA0My40NTQwMTA5LDE3Ljk0NTczNDMgTDQzLjQ1NDAxMDksMTcuOTYzNjg4NSBDNDMuNDU0MDEwOSwyMi4yNjAyNTk4IDQwLjE5NjIzOTUsMjUuNzY4ODI0NyAzNS43MTQ4OTUzLDI1Ljc2ODgyNDcgQzMxLjIzMjU2MTUsMjUuNzY4ODI0NyAyOC4wMDk3MDg5LDIyLjMxNDEyMjQgMjguMDA5NzA4OSwxOC4wMTc5NzUzIEwyOC4wMDk3MDg5LDE4LjAxNzk3NTMgWiBNNTMuODMwNDE3MSwyNS43MzMzNDA0IEM1Ny43NDI4ODEyLDI1LjczMzM0MDQgNjAuMjA3ODM5NywyMy40OTU4NDkyIDYwLjIwNzgzOTcsMTguOTMwNjcxNSBMNjAuMjA3ODM5NywxMC40MjcxNTg3IEw1Ny4wMDE4MTAzLDEwLjQyNzE1ODcgTDU3LjAwMTgxMDMsMTkuMDczNzM5OCBDNTcuMDAxODEwMywyMS40NzI2Nzc2IDU1LjgxMjMwODEsMjIuNjkwMDMgNTMuODY0NzcwNCwyMi42OTAwMyBDNTEuOTE3Mzc0MSwyMi42OTAwMyA1MC43Mjc3MzA1LDIxLjQxODk1NjMgNTAuNzI3NzMwNSwxOC45NjY1OCBMNTAuNzI3NzMwNSwxMC40MjcxNTg3IEw0Ny41Mzg2NjU4LDEwLjQyNzE1ODcgTDQ3LjUzODY2NTgsMTkuMDM3ODMxMyBDNDcuNTM4NjY1OCwyMy40Nzc4OTUgNDkuOTE3OTUzLDI1LjczMzM0MDQgNTMuODMwNDE3MSwyNS43MzMzNDA0IEw1My44MzA0MTcxLDI1LjczMzM0MDQgWiBNMy4xNTQ1NywzMy4xOTgxOTQ4IEwxMzUuMDM2NjMyLDMzLjE5ODE5NDggTDEzNS4wMzY2MzIsMy4zMDI0NDQ4OCBMMy4xNTQ1NywzLjMwMjQ0NDg4IEwzLjE1NDU3LDMzLjE5ODE5NDggWiBNMCwzNi40NzM5MjA0IEwxMzguMjA4MTY3LDM2LjQ3MzkyMDQgTDEzOC4yMDgxNjcsMC4wMjY3MTkyNjczIEwwLDAuMDI2NzE5MjY3MyBMMCwzNi40NzM5MjA0IFogTTE0LjgyMzExNDMsMTkuNDg1NDE0NCBMMjAuNzE4NjAwNSwxOS40ODU0MTQ0IEwyMC43MTg2MDA1LDI1LjUzNjU1MDkgTDIzLjkwNzY2NTIsMjUuNTM2NTUwOSBMMjMuOTA3NjY1MiwxMC40NDU2Nzg0IEwyMC43MTg2MDA1LDEwLjQ0NTY3ODQgTDIwLjcxODYwMDUsMTYuNDA2MDU0MiBMMTQuODIzMTE0MywxNi40MDYwNTQyIEwxNC44MjMxMTQzLDEwLjQ0NTY3ODQgTDExLjYzNDc1NjUsMTAuNDQ1Njc4NCBMMTEuNjM0NzU2NSwyNS41MzY1NTA5IEwxNC44MjMxMTQzLDI1LjUzNjU1MDkgTDE0LjgyMzExNDMsMTkuNDg1NDE0NCBaIE0xMTUuODY0OTIyLDE1Ljk0MTUwNjUgTDEyMi44OTc2MDIsMjUuNTM2NTUwOSBMMTI1LjYyMDk4OCwyNS41MzY1NTA5IEwxMjUuNjIwOTg4LDEwLjQ0NTY3ODQgTDEyMi40NjY0MTgsMTAuNDQ1Njc4NCBMMTIyLjQ2NjQxOCwxOS43MzYyMDggTDExNS42NTgzNzcsMTAuNDQ1Njc4NCBMMTEyLjcxMDkxNywxMC40NDU2Nzg0IEwxMTIuNzEwOTE3LDI1LjUzNjU1MDkgTDExNS44NjQ5MjIsMjUuNTM2NTUwOSBMMTE1Ljg2NDkyMiwxNS45NDE1MDY1IEwxMTUuODY0OTIyLDE1Ljk0MTUwNjUgWiIgaWQ9IkZpbGwtMSIgZmlsbD0iIzAwMDEwNSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},159:function(e,a){e.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}}},160:function(e,a,t){},161:function(e,a,t){"use strict";t.d(a,"a",function(){return l});t(28),t(267);var n=t(4),r=t.n(n),o=t(0),i=t.n(o),l=function(e){var a=e.children,t=e.largeMargin,n=e.className,r=e.childrenClassName,o=e.backgroundColor,l=e.props,s=e.hover;return i.a.createElement("div",Object.assign({className:"triple-border "+n+" "+(t?"triple-border--large-margin":""),style:s?{backgroundColor:"black",color:"white",padding:t?"":"0.2em"}:{padding:t?"":"0.2em"}},l),i.a.createElement("div",{className:"triple-border__container "+r,style:{backgroundColor:o,zIndex:10}},a))};l.defaultProps={className:"",childrenClassName:"",largeMargin:!1,hover:!1,backgroundColor:"transparent"},l.propTypes={children:r.a.node.isRequired,className:r.a.string,childrenClassName:r.a.string,largeMargin:r.a.bool,backgroundColor:r.a.string,hover:r.a.bool}},162:function(e,a,t){"use strict";var n=t(299),r=t(141),o=t(376),i=t.n(o),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=t(258),N=t.n(M),g=t(259),m=t.n(g);function d(e){var a=e.description,t=e.lang,o=e.meta,l=e.image,s=e.keywords,c=e.title,M=l||N.a;return u.a.createElement(r.StaticQuery,{query:p,render:function(e){var n=a||e.site.siteMetadata.description;return u.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{name:"og:image",content:m.a.resolve(M)},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n},{name:"twitter:image",content:m.a.resolve(M)},{name:"google-site-verification",content:"ds9pQKiK3kjhRSHHbf5ccoG-oJggn7Lq4A8uHxM3Mkw"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(o)})},data:n})}d.defaultProps={lang:"fi",image:null,meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,image:s.a.string,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=d;var p="1025518380"},163:function(e,a,t){"use strict";t(264),t(265);var n=t(6),r=t.n(n),o=(t(266),t(0)),i=t.n(o),l=t(141),s=t(164),c=t(161),u=function(e){function a(a){var t;return(t=e.call(this,a)||this).header=i.a.createRef(),t.handleScroll=function(){var e=window.scrollY;t.setState({top:e,headerClass:t.state.top>10&&e>t.state.top?"header--small":""})},t.state={top:0,headerClass:""},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.render=function(){var e=this.state.headerClass;return i.a.createElement("div",{ref:this.header,className:"header "+e,style:{backgroundColor:""!==e?"transparent":"white"}},i.a.createElement("div",{className:"container",style:{alignItems:"center",justifyContent:"flex-start"}},i.a.createElement(l.Link,{to:"/",className:"header__logo"},""===e?i.a.createElement(c.a,{className:"nav-item-hover",childrenClassName:"triple-border__logo"},"{() => fs}"):i.a.createElement(c.a,{hover:!0,className:"nav-item-hover",childrenClassName:"triple-border__logo"},"fs")),"header--small"!==this.state.headerClass&&i.a.createElement(s.a,null)))},a}(o.Component),M=t(4),N=function(e){var a=e.children;return i.a.createElement("div",{className:"main-wrapper"},i.a.createElement(u,null),a)};N.propTypes={children:t.n(M).a.node.isRequired};a.a=N},164:function(e,a,t){"use strict";t(28);var n=t(6),r=t.n(n),o=(t(263),t(0)),i=t.n(o),l=t(143),s=t.n(l),c=t(141),u=t(4),M=t.n(u),N=function(e){var a=e.text,t=e.path,n=e.className,r=s()(e,["text","path","className"]);return i.a.createElement("li",Object.assign({},r,{className:"navigation__item "+n}),i.a.createElement(c.Link,{className:"nav-item-hover",to:t},a))};N.propTypes={text:M.a.string.isRequired,path:M.a.string.isRequired,className:M.a.string},N.defaultProps={className:""},t.d(a,"b",function(){return g});var g=[{text:"Kurssista",path:"/about"},{text:"Kurssin sisältö",path:"#course-contents"},{text:"FAQ",path:"/faq"},{text:"Kurssilla mukana",path:"/companies"},{text:"Haaste",path:"/challenge"}],m=function(){return document.body.classList.remove("is-open--navigation")},d=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={navigationOpen:!1},t}return r()(a,e),a.prototype.render=function(){var e=this,a=this.props.className;return i.a.createElement("div",{className:"navigation__wrapper "+a},i.a.createElement("button",{"aria-label":"Navigation menu","aria-expanded":this.state.navigationOpen,onClick:function(){e.setState({navigationOpen:!e.state.navigationOpen}),document.body.classList.toggle("is-open--navigation")},className:"navigation__toggle"},i.a.createElement("div",{className:"navigation__toggle-icon"})),i.a.createElement("nav",null,i.a.createElement("ul",{className:"navigation"},g.map(function(e){return i.a.createElement(N,Object.assign({key:e.path},e,{onClick:m}))}))))},a}(o.Component);d.propTypes={className:M.a.string},d.defaultProps={className:""};a.a=d},168:function(e,a,t){"use strict";t(28),t(165),t(176);var n=t(143),r=t.n(n),o=(t(169),t(142)),i=t(141),l=t(4),s=t.n(l),c=t(0),u=t.n(c),M=t(144),N=function(e){var a,t=e.className,n=e.wrapperClassName,l=e.link,s=e.content,c=e.stack,N=e.bold,g=e.thickBorder,m=e.upperCase,d=r()(e,["className","wrapperClassName","link","content","stack","bold","thickBorder","upperCase"]),p=u.a.createElement("div",{className:"arrow__container arrows--horizontal "+t},s.map(function(e,a){var t={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===M.black?"white":M.black};return u.a.createElement("div",Object.assign({key:"arrow"+a,className:"arrow__wrapper"},d),u.a.createElement("div",{className:"arrow__rectangle "+(N?"bold":"")+" "+(g?"arrow__rectangle--thick-border":""),style:t},e.link?u.a.createElement(i.Link,{to:e.link},m?e.text.toUpperCase():e.text):m?e.text.toUpperCase():e.text),u.a.createElement("div",{className:"arrow__point "+(g?"arrow__point--thick-border":""),style:t}))}));return c||l?!c&&l?a=u.a.createElement("div",{className:"spacing--after-small auto-bottom-margin"},u.a.createElement(i.Link,{to:l,style:{display:"inline-block"}},p)):c&&(a=u.a.createElement("div",{className:"col-10 spacing--after "+n},u.a.createElement("div",{className:"arrow__container arrow__container--with-link",style:{display:"flex",flexDirection:"column"}},s.map(function(e){var a={backgroundColor:e.backgroundColor?e.backgroundColor:"transparent",color:e.backgroundColor===M.black?"white":M.black};return u.a.createElement(i.Link,Object.assign({key:e.text,to:e.path,className:"arrow__wrapper--stacked "+t},d),u.a.createElement(o.a,{flex:!0,className:"arrow__rectangle",style:a},u.a.createElement("p",{className:"arrow--stacked-title"},u.a.createElement("span",null,e.text))),u.a.createElement("div",{className:"arrow__point",style:a}))})))):a=u.a.createElement("div",{className:"col-10 spacing--after"},p),a};N.propTypes={className:s.a.string,wrapperClassName:s.a.string,link:s.a.string,content:s.a.array.isRequired,stack:s.a.bool,upperCase:s.a.bool,bold:s.a.bool,thickBorder:s.a.bool},N.defaultProps={className:"",wrapperClassName:""},a.a=N},169:function(e,a,t){},172:function(e,a){e.exports="Helsingin yliopiston ja Houston Inc:n kaikille avoin ja ilmainen moderniin Javascript-pohjaiseen web-sovelluskehitykseen keskittyvä kurssi. Osallistujilta edellytetään vahvaa ohjelmointirutiinia, pitkäjänteistyyttä ja valmiuksia omatoimiseen ongelmanratkaisuun."},173:function(e,a,t){},174:function(e,a,t){"use strict";t.d(a,"a",function(){return c});t(28);var n=t(143),r=t.n(n),o=(t(175),t(4)),i=t.n(o),l=t(0),s=t.n(l),c=function(e){var a=e.className,t=e.headingLevel,n=void 0===t?"h2":t,o=e.headingFontSize,i=e.text,l=r()(e,["className","headingLevel","headingFontSize","text"]),c=n;return s.a.createElement(c,Object.assign({className:"sub-header "+a,style:o?{fontSize:o}:{}},l),i)};c.propTypes={className:i.a.string,headingLevel:i.a.string,text:i.a.string.isRequired,headingFontSize:i.a.string},c.defaultProps={className:""}},175:function(e,a,t){},184:function(e,a,t){var n;e.exports=(n=t(261))&&n.default||n},189:function(e,a,t){"use strict";var n=t(6),r=t.n(n),o=(t(190),t(0)),i=t.n(o),l=t(146),s=t(141),c=t(4),u=t.n(c),M=t(243);M.a.initialize("UA-135975842-1");var N=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={isOpened:!1},t}r()(a,e);var t=a.prototype;return t.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},t.handleClick=function(){var e=this.state.isOpened,a=this.props,t=a.title,n=a.track;this.setState({isOpened:!e},function(){n&&M.a.event({category:"FAQ",action:t+" "+(e?"closed":"expanded")})})},t.render=function(){var e=this,a=this.props,t=a.title,n=a.content,r=a.className,o=a.containerClassName,c=a.list,u=a.titleStyle,M=this.state.isOpened;return i.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},i.a.createElement("button",{className:"accordion accordion__title "+(M?"active":"")+" "+r,style:u,onClick:function(){return e.handleClick()}},t),i.a.createElement("div",{className:"panel",style:{padding:M?"2rem 18px":"",maxHeight:""+(M?"unset":0),transition:"max-height 0.2s ease-out"}},n&&i.a.createElement(l.a,{className:"col-8 push-right-1",text:n}),c&&i.a.createElement("ul",null,c.map(function(e){return i.a.createElement("li",{key:e.text},i.a.createElement(s.Link,{to:e.href},e.text))}))))},a}(o.Component);N.propTypes={title:u.a.string.isRequired,track:u.a.bool,content:u.a.oneOfType([u.a.string,u.a.array]),list:u.a.array,className:u.a.string,containerClassName:u.a.string,initiallyOpened:u.a.bool,titleStyle:u.a.object},N.defaultProps={className:"",track:!1,containerClassName:"",initiallyOpened:!1,titleStyle:{}},a.a=N},190:function(e,a,t){},258:function(e,a,t){e.exports=t.p+"static/seo_image-939e8e249cf62a835ed560f6da4200ad.jpg"},260:function(e,a,t){},261:function(e,a,t){"use strict";t.r(a);t(28);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(52),s=t(2),c=function(e){var a=e.location,t=s.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=c},262:function(e,a,t){},263:function(e,a,t){},264:function(e,a,t){},265:function(e,a,t){},266:function(e,a,t){},267:function(e,a,t){},270:function(e,a,t){"use strict";t(333),t(335),t(336),t(67),t(46),t(167),t(271);var n=t(142),r=t(141),o=t(4),i=t(0),l=t.n(i),s=t(159),c=t.n(s),u=t(186),M=t.n(u),N=Object.keys(c.a),g=function(e){return String.fromCharCode(e.charCodeAt(0)-1)},m=function(e){return String.fromCharCode(e.charCodeAt(0)+1)},d=function(e){return N.includes(e.toString())},p=function(e,a){return m(e)in c.a[a]},D=function(e,a){return!e&&d(a+1)||e&&p(e,a)},y=function(e){var a=e.part,t=e.letter;return l.a.createElement(n.a,{className:"container spacing spacing--after-large prev-next__container"},!t&&d(a-1)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",a-1),l.a.createElement("b",null,"Edellinen osa"))),D(t,a)&&l.a.createElement("div",{className:"col-1--mobile separator"})):t?"a"!==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:"/osa"+a+"/"+M()(c.a[a][g(t)]),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",""+a+g(t)),l.a.createElement("b",null,"Edellinen osa"))),D(t,a)&&l.a.createElement("div",{className:"col-1--mobile separator"})):d(a-1)?l.a.createElement(l.a.Fragment,null,l.a.createElement(r.Link,{to:"/osa"+(a-1),className:"col-4--mobile push-right-1 prev"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",a-1),l.a.createElement("b",null,"Edellinen osa"))),D(t,a)&&l.a.createElement("div",{className:"col-1--mobile separator"})):l.a.createElement(n.a,{className:"push-right-1"}):l.a.createElement(n.a,{className:"push-right-1"}),!t&&d(a+1)?l.a.createElement(r.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",a+1),l.a.createElement("b",null,"Seuraava osa"))):t?p(t,a)?l.a.createElement(r.Link,{to:"/osa"+a+"/"+M()(c.a[a][m(t)]),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",""+a+m(t)),l.a.createElement("b",null,"Seuraava osa"))):d(a+1)?l.a.createElement(r.Link,{to:"/osa"+(a+1),className:"col-4--mobile push-left-1 next"},l.a.createElement(n.a,{flex:!0,dirColumn:!0},l.a.createElement("p",null,"Osa ",a+1),l.a.createElement("b",null,"Seuraava osa"))):l.a.createElement(n.a,{className:"push-left-1"}):l.a.createElement(n.a,{className:"push-left-1"}))};y.defaultProps={part:void 0,letter:void 0},y.propTypes={part:o.PropTypes.number,letter:o.PropTypes.string},a.a=y},271:function(e,a,t){},299:function(e){e.exports={data:{site:{siteMetadata:{title:"Full Stack Open 2019",description:"",author:"Houston Inc. Consulting oy"}}}}},300:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={0:"light-violet",1:"green",2:"dark-orange",3:"light-orange",4:"yellow",5:"pink",6:"violet",7:"light-blue",8:"turquoise"}},301:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"},549:function(e,a,t){},550:function(e,a,t){},551:function(e,a,t){}}]);
//# sourceMappingURL=component---src-templates-content-template-js-7a3600df1bbeb7363461.js.map