(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{106:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),i=a.n(c),s=(a(106),a(49)),o=a(27),l=a(22),j=a(3),d=a(20),b=a(192),p=a(184),h=a(185),u=a(181),g=a(183),O=a(62),x=a(182),m=a(89),f=a.n(m),v=a(91),y=a.n(v),k=a(90),w=a.n(k),S=a(186),N=a(187),C=a(188),I=a(92),B=a.n(I),L=a(93),E=a.n(L),T=a(12),z=a(179),A=a(42),F=a(176),G=240,M=Object(F.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,background:"linear-gradient(90deg, rgba(48,47,77,1) 2%, rgba(185,183,225,1) 87%)",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:G,background:"linear-gradient(90deg, rgba(48,47,77,1) 2%, rgba(185,183,225,1) 87%)",width:"calc(100% - ".concat(G,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:G,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:G,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(o.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)},paginator:{justifyContent:"flex-end",display:"flex",marginTop:"30px",flexWrap:"wrap"},button:{display:"flex"},rootList:{display:"flex",flexWrap:"wrap",justifyContent:"row"},imageList:{width:1330,height:480},icon:{color:"rgba(255, 255, 255, 0.54)"},field:{display:"flex",margin:"5px 0 5px 0"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},avatar:{display:"flex",justifyContent:"flex-end",position:"absolute",left:"90%"},title:{textAlign:"center",fontFamily:"'Raleway', sans-serif"},imagesBlock:{marginTop:"10px"},link:{textDecoration:"none",color:"black"},rootSearch:{padding:"2px 4px",display:"flex",alignItems:"center"},input:{marginLeft:e.spacing(1),flex:1,display:"flex",margin:"5px 0 5px 0"},iconButton:{padding:10}}})),_=a(4);var R=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=(t[0],t[1]),r=M();return Object(_.jsx)("div",{className:r.rootList,children:function(){for(var e=[],t=Object.keys(localStorage),a=t.length;a--;)e.push(JSON.parse(localStorage.getItem(t[a])));return e}().map((function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(_.jsx)("ul",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:t,width:"230px",height:"240px",style:{border:"5px solid lightblue"}}),Object(_.jsx)("div",{children:Object(_.jsx)(z.a,{variant:"contained",size:"small",color:"secondary",style:{float:"right"},onClick:function(){localStorage.removeItem(e.id),a(e.id)},children:"Remove it"})})]})},e.id)}))})},J=a(138),P=a(190),W=a(41),D=a(189);var K=function(){var e=M(),t=Object(W.c)((function(e){return e.reducer})),a=Object(n.useState)(""),r=Object(l.a)(a,2),c=(r[0],r[1]),i=Object(n.useState)(""),s=Object(l.a)(i,2),o=(s[0],s[1]),j=function(e){c(e.currentTarget.value)};return Object(_.jsx)("div",{className:e.rootList,children:t.photos.photo.map((function(t){var a="https://farm"+t.farm+".staticflickr.com/"+t.server+"/"+t.id+"_"+t.secret+".jpg";return Object(_.jsx)("ul",{children:Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{src:a,alt:"#",width:"230px",height:"240px"}),Object(_.jsx)("div",{children:Object(_.jsx)(D.a,{variant:"outlined",label:"some tag?",onChange:j,className:e.field})}),Object(_.jsx)("div",{children:localStorage.getItem(t.id)?Object(_.jsx)(z.a,{variant:"outlined",size:"medium",color:"secondary",style:{float:"right"},onClick:function(){localStorage.removeItem(t.id),o(t.secret)},children:"Remove it"}):Object(_.jsx)(z.a,{variant:"outlined",size:"medium",color:"primary",style:{float:"right"},onClick:function(){return e=t.farm,a=t.server,n=t.id,r=t.secret,c=t.title,localStorage.setItem(n,JSON.stringify({farm:e,server:a,id:n,secret:r,title:c})),void o(n);var e,a,n,r,c},children:"Bookmark it"})})]})},t.id)}))})},U=a(87),X=a.n(U).a.create({baseURL:"https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=true&api_key=88511e631d64958716f46a5c31c01824&per_page=20"}),q=function(e,t){return X.get("&page=".concat(t,"&text=").concat(e)).then((function(e){return e.data}))},H={photos:{page:1,pages:234,perpage:20,total:12,photo:[]},stat:"ok"},Q=a(193),V=a(88),Y=a.n(V);var Z=function(){var e=M(),t=Object(W.b)(),a=Object(W.c)((function(e){return e.reducer})),c=Object(n.useState)(""),i=Object(l.a)(c,2),s=i[0],o=i[1],j=r.a.useState(1),d=Object(l.a)(j,2),b=d[0],p=d[1],h=Object(n.useState)(0),u=Object(l.a)(h,2),g=u[0],O=u[1],m=Object(n.useState)(""),f=Object(l.a)(m,2),v=f[0],y=f[1];return Object(n.useEffect)((function(){var e,n;""!==s&&(t((e=s,n=b,function(t){q(e,n).then((function(e){t({type:"IMAGES/GET_IMAGES",images:e})})).catch((function(e){console.log("Error:",Object(A.a)({},e))}))})),O(a.photos.pages))}),[s,b,a.photos.pages,t]),Object(_.jsxs)("div",{children:[Object(_.jsxs)(J.a,{className:e.rootSearch,children:[Object(_.jsx)(Q.a,{onKeyPress:function(e){try{13===e.charCode&&(o(v),e.stopPropagation(),e.preventDefault())}catch(t){console.log(t)}},onBlur:function(){o(v)},onChange:function(e){y(e.currentTarget.value)},className:e.input,placeholder:"Search images"}),Object(_.jsx)(x.a,{onClick:function(){o(v)},type:"submit",className:e.iconButton,"aria-label":"search",children:Object(_.jsx)(Y.a,{})})]}),!s||a.photos.photo.length<1?Object(_.jsx)("h2",{className:e.title,children:"No images here. Whould you try to search for anything else?"}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{children:Object(_.jsx)(P.a,{className:e.paginator,count:Math.ceil(g/15),page:b,shape:"rounded",onChange:function(e,t){p(t)},color:"primary"})}),Object(_.jsx)("div",{className:e.imagesBlock,children:Object(_.jsx)(K,{})})]})]})},$="/",ee="/bookmarks";var te=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(T.c,{children:[Object(_.jsx)(T.a,{exact:!0,path:$,component:Z}),Object(_.jsx)(T.a,{path:ee,component:R})]})})},ae=a(194);function ne(){var e,t,a=M(),n=Object(d.a)(),c=r.a.useState(!1),i=Object(l.a)(c,2),m=i[0],v=i[1];return Object(_.jsxs)("div",{className:a.root,children:[Object(_.jsx)(g.a,{}),Object(_.jsx)(p.a,{position:"fixed",className:Object(j.a)(a.appBar,Object(o.a)({},a.appBarShift,m)),children:Object(_.jsxs)(h.a,{children:[Object(_.jsx)(x.a,{color:"inherit","aria-label":"open drawer",onClick:function(){v(!0)},edge:"start",className:Object(j.a)(a.menuButton,Object(o.a)({},a.hide,m)),children:Object(_.jsx)(f.a,{})}),Object(_.jsx)(O.a,{variant:"h6",noWrap:!0,children:"Image Finder"}),Object(_.jsx)("span",{className:a.avatar,children:Object(_.jsx)(ae.a,{src:"/broken-image.jpg"})})]})}),Object(_.jsxs)(b.a,{variant:"permanent",className:Object(j.a)(a.drawer,(e={},Object(o.a)(e,a.drawerOpen,m),Object(o.a)(e,a.drawerClose,!m),e)),classes:{paper:Object(j.a)((t={},Object(o.a)(t,a.drawerOpen,m),Object(o.a)(t,a.drawerClose,!m),t))},children:[Object(_.jsx)("div",{className:a.toolbar,children:Object(_.jsx)(x.a,{onClick:function(){v(!1)},children:"rtl"===n.direction?Object(_.jsx)(w.a,{}):Object(_.jsx)(y.a,{})})}),Object(_.jsxs)(u.a,{children:[Object(_.jsx)(s.b,{to:$,className:a.link,children:Object(_.jsxs)(S.a,{button:!0,children:[Object(_.jsx)(N.a,{children:Object(_.jsx)(B.a,{})}),Object(_.jsx)(C.a,{primary:"All Images"})]})}),Object(_.jsx)(s.b,{to:ee,className:a.link,children:Object(_.jsxs)(S.a,{button:!0,children:[Object(_.jsx)(N.a,{children:Object(_.jsx)(E.a,{})}),Object(_.jsx)(C.a,{primary:"Bookmarks"})]},"aLL")})]})]}),Object(_.jsxs)("main",{className:a.content,children:[Object(_.jsx)("div",{className:a.toolbar}),Object(_.jsx)(te,{})]})]})}var re=function(){return Object(_.jsx)(s.a,{children:Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(ne,{})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,196)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},ie=a(61),se=a(94),oe=Object(ie.b)({reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IMAGES/GET_IMAGES":return Object(A.a)(Object(A.a)({},e),t.images);default:return Object(A.a)({},e)}}}),le=Object(ie.c)(oe,Object(ie.a)(se.a));i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(W.a,{store:le,children:Object(_.jsx)(re,{})})}),document.getElementById("root")),ce()}},[[137,1,2]]]);
//# sourceMappingURL=main.ec5602e2.chunk.js.map