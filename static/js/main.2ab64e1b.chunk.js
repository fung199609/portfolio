(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,n){e.exports=n(99)},60:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),i=n.n(o);n(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(61);var l=n(50),c=n(22),s=n(10),u=n(11),m=n(13),d=n(12),p=n(24),f=n.n(p),h=n(104),g=n(105),y=n(102),v=n(103),b=n(109),E=n(107),x=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o)))._renderNavItems=function(){return e.props.navTextArr.map(function(t,n){return a.a.createElement(E.a.Link,{onSelect:function(){e.props.onClickNav(n)},href:""!==e.props.navUrlArr[n]?e.props.navUrlArr[n]:"#"},t)})},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(b.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},a.a.createElement(b.a.Brand,{href:"#home"},this.props.title),a.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),a.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},a.a.createElement(E.a,{className:"mr-auto"},this._renderNavItems())))}}]),n}(r.Component);x.defaultProps={title:"",navTextArr:[],navUrlArr:[],onClickNav:function(e){}};var w=x,k=n(108),I=n(106),j=n(110),C={startAnimationTypeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:25,height:window.innerHeight,display:"flex",flexDirection:"column",backgroundColor:"#000000",zIndex:999},typeBlackBg:{width:"100%",textAlign:"center",backgroundColor:"rgb(51,51,51)",height:200,marginTop:56},typeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:20,height:200,display:"flex",flexDirection:"column",zIndex:999},categoryGroup:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},itemContainer:{paddingLeft:10,paddingRight:10,marginBottom:10,borderRadius:5,overflow:"hidden",cursor:"pointer"},itemImageContainer:{width:"100%",height:"100%",overflow:"hidden",borderRadius:5,textAlign:"center"},itemHoverBg:{position:"absolute",left:10,right:10,top:0,bottom:0,borderRadius:5,backgroundColor:"rgba(0,0,0,0.7)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px 30px"}},O=n(54),S=n(101),T={categoryButton:{borderRadius:20,marginLeft:10,marginRight:10,paddingLeft:20,paddingRight:20,fontSize:13}},_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(S.a,{style:T.categoryButton,onClick:this.props.onClick,active:this.props.active,variant:"outline-dark"},this.props.text)}}]),n}(r.Component);_.defaultProps={onClick:function(){},active:!1,text:""};var L=_,A=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o)))._renderButtons=function(){return e.props.btnTextArr.map(function(t,n){return a.a.createElement(L,{text:t,active:e.props.selectIndex===n,onClick:function(){e.props._updateTab(n)}})})},e}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:this.props.containerStyle},this._renderButtons())}}]),n}(r.Component);A.defaultProps={containerStyle:{},_updateTab:function(e){},selectIndex:-1,btnTextArr:[]};var B=A,R=n(51),N=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e))._updateTab=function(e){r.setState({index:e})},r._renderImages=function(){var e=r.props.projects.filter(function(e){return 1!=e.hidden});switch(r.state.index){case 1:e=e.filter(function(e){return"mobile"===e.type});break;case 2:e=e.filter(function(e){return"web"===e.type});break;case 3:e=e.filter(function(e){return"other"===e.type})}return e.map(function(e,t){return a.a.createElement(y.a,{xs:12,sm:6,md:4,xl:3,style:C.itemContainer},a.a.createElement("div",{className:"itemTag",onMouseOver:function(){r.state.isHover||(console.log("onMouseUp"),r.setState({hoverIndex:t,isHover:!0}))},onMouseOut:function(){r.setState({hoverIndex:-1,isHover:!1})},onClick:function(){r.setState({showModal:!0,selectedItem:e})},style:C.itemImageContainer},a.a.createElement(v.a,{fluid:!0,rounded:!0,style:Object(c.a)(Object(c.a)({},{width:"100%",height:"100%",objectFit:"cover"}),r.state.isHover&&r.state.hoverIndex===t&&{transform:"scale(1.2)",transition:"all 0.5s ease 0s",borderRadius:5}),src:e.img}),a.a.createElement("div",{className:"hover_bg",style:Object(c.a)(Object(c.a)({},C.itemHoverBg),{visibility:r.state.isHover&&r.state.hoverIndex===t?"visible":"hidden"})},a.a.createElement("div",{className:"itemTitle",style:{color:"#ffffff",fontSize:20,fontWeight:"bolder",left:40,right:40,pointerEvents:"none",visibility:r.state.isHover&&r.state.hoverIndex===t?"visible":"hidden"}},a.a.createElement("span",null,e.title)))))})},r._renderTypingAnimation=function(){return a.a.createElement("div",{style:C.typeBlackBg,ref:r.homeRef},a.a.createElement("div",{style:C.typeContainer},a.a.createElement("div",{style:{height:50}}),a.a.createElement("span",null,"I'm Andy Chan"),a.a.createElement(f.a.Delay,{ms:"200"}),a.a.createElement("span",null,"Mobile Apps Developer"),a.a.createElement(f.a.Delay,{ms:"200"}),a.a.createElement("span",null,"iOS & Android")))},r._renderModal=function(){var e=null,t=null;return r.state.selectedItem&&r.state.selectedItem.images&&r.state.selectedItem.responsibility&&(e=r.state.selectedItem.images.map(function(e){return a.a.createElement(k.a.Item,{style:{height:350,backgroundColor:"#000"}},a.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide",style:{objectFit:"contain",height:"100%",imageOrientation:"from-image"}}))}),t=r.state.selectedItem.responsibility.map(function(e){return a.a.createElement("ul",null,a.a.createElement("li",{style:{marginTop:10}},e.title,e.sub&&a.a.createElement("ul",null,e.sub.map(function(e){return a.a.createElement("li",{style:{marginTop:10}},e)}))))})),a.a.createElement(I.a,{show:r.state.showModal,centered:!0,size:"xl","aria-labelledby":"contained-modal-title-vcenter",animation:!0,onHide:function(){r.setState({selectIndex:-1,showModal:!1})}},a.a.createElement(j.a,{style:{width:"100%",padding:20}},a.a.createElement(I.a.Header,{closeButton:!0},a.a.createElement(I.a.Title,{id:"contained-modal-title-vcenter"},r.state.selectedItem?r.state.selectedItem.title:"")),a.a.createElement(I.a.Body,{style:{overflowY:"auto",maxHeight:.7*window.screen.height}},r.state.selectedItem&&r.state.selectedItem.youtubeId&&a.a.createElement(R.a,{videoId:r.state.selectedItem.youtubeId,opts:{width:"100%"}}),a.a.createElement(k.a,{interval:null,style:{marginTop:40,marginBottom:40}},e),a.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Description"),a.a.createElement("p",{style:{lineHeight:"30px",marginBottom:40}},r.state.selectedItem?r.state.selectedItem.desc:""),a.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Responsibility"),t)))},r.state={index:0,hoverIndex:-1,isHover:!1,showModal:!1,selectedItem:null},r}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,this._renderTypingAnimation(),a.a.createElement("div",{style:{marginTop:20}}),a.a.createElement(B,{containerStyle:C.categoryGroup,_updateTab:this._updateTab,selectIndex:this.state.index,btnTextArr:["All","Mobile","Web","Others"]}),a.a.createElement(h.a,{ref:this.projectRef,fluid:!0,style:{marginTop:30,width:"100%",minHeight:600}},a.a.createElement(O.a,{className:"row"},this._renderImages())),this._renderModal())}}]),n}(r.Component);N.defaultProps={projects:[]};var D=N,z=n(40),H={topSpace:{height:100},experienceText:{fontSize:22,textAlign:"center"},workItemsContainer:{paddingLeft:20,paddingRight:20,marginBottom:60},workItemRowStyle:{position:"relative"},jobText:{fontWeight:600},jobPeriod:{color:"rgba(0,0,0,0.6)"},jobDesc:{paddingRight:10,fontSize:15,fontWeight:300,marginBottom:10},mobileJobExtraSpace:{height:50},notLastWorkItemStyle:{position:"absolute",top:0,bottom:0,left:60,width:1,backgroundColor:"rgba(0,0,0,0.3)",zIndex:-1},skillSetCardStyle:{height:300,boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.1)"},skillTopStyle:{position:"absolute",width:"100%",top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)"},skillTopTitle:{color:"#fff",position:"absolute",textAlign:"center",width:"100%",top:"40%",fontSize:22},skillBottomStyle:{display:"flex",flexDirection:"column",fontSize:15,alignItems:"center",lineHeight:"30px",paddingTop:20},skillOverviewText:{fontSize:22,textAlign:"center"}},F=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e))._renderWorkItem=function(){var e=r.props.resumes;return e.works.map(function(t,n){return a.a.createElement(g.a,{style:{marginTop:0===n?30:0,position:"relative"}},a.a.createElement(y.a,{md:2,xs:4},a.a.createElement(v.a,{width:100,src:t.img,thumbnail:!0})),a.a.createElement(y.a,{md:10,xs:6},a.a.createElement(g.a,null,a.a.createElement("span",{style:H.jobText},t.role)),a.a.createElement(g.a,null,a.a.createElement("span",null,t.company)),a.a.createElement(g.a,null,a.a.createElement("span",{style:H.jobPeriod},t.time)),!z.isMobile&&a.a.createElement(y.a,{className:"xs-hidden",xs:0,md:12,style:{marginTop:10,marginBottom:40,marginLeft:-10}},t.desc.map(function(e){return a.a.createElement(g.a,{style:H.jobDesc},a.a.createElement("span",null,e))})),z.isMobile&&a.a.createElement("div",{style:H.mobileJobExtraSpace})),n<e.works.length-1&&a.a.createElement("div",{style:H.notLastWorkItemStyle}))})},r._renderSkills=function(){return r.props.resumes.skills.map(function(e){return a.a.createElement(y.a,{md:4,xs:12,style:{marginBottom:40}},a.a.createElement(j.a,{style:H.skillSetCardStyle},a.a.createElement("div",{style:{position:"relative"}},a.a.createElement(j.a.Img,{height:110,src:e.img,style:{objectFit:"cover"}}),a.a.createElement("div",{style:H.skillTopStyle},a.a.createElement("div",{style:H.skillTopTitle},e.name))),a.a.createElement("div",{style:H.skillBottomStyle},e.desc.map(function(e){return a.a.createElement("span",null,e)}))))})},r}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement("div",{style:H.topSpace}),a.a.createElement("div",{style:H.experienceText},"Experiences"),a.a.createElement(h.a,{style:H.workItemsContainer},this._renderWorkItem()),a.a.createElement("div",{style:{backgroundColor:"rgb(245, 245, 245)",paddingTop:40}},a.a.createElement("div",{style:H.skillOverviewText},"Skills Overview"),a.a.createElement(h.a,null,a.a.createElement(g.a,{style:{marginTop:20,marginBottom:z.isMobile?30:80}},a.a.createElement(y.a,{md:2,xs:1}),a.a.createElement(y.a,{md:8,xs:10,style:{textAlign:"center"}},a.a.createElement("span",{style:{fontWeight:300}},this.props.resumes.desc)),a.a.createElement(y.a,{md:2,xs:1})),a.a.createElement(g.a,{style:{paddingLeft:40,paddingRight:40}},this._renderSkills()))))}}]),n}(r.Component);F.defaultProps={resumes:{works:[],skills:[]}};var P=F,M={startAnimationTypeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:25,height:window.innerHeight,display:"flex",flexDirection:"column",backgroundColor:"#000000",zIndex:999},animationBgContainer:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#000000",transition:"visibility 0s 1s, opacity 1s linear"},bottomContactContainer:{marginTop:100,display:"flex",flexDirection:"column",width:"100%",alignItems:"center",backgroundColor:"rgb(245,245,245)",paddingTop:40,paddingBottom:40,textAlign:"center"},contactName:{fontSize:25,marginBottom:20},contactDesc:{marginBottom:20,lineHeight:"30px",fontWeight:300,fontSize:"16px",color:"#555"},contactThreeIconRow:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40},leftcontactIcon:{marginRight:30,cursor:"pointer"},middleContactIcon:{cursor:"pointer"},rightcontactIcon:{marginLeft:30,cursor:"pointer"}};function W(){W=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new k(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return j()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=E(i,n);if(l){if(l===u)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,i),o}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var u={};function m(){}function d(){}function p(){}var f={};l(f,a,function(){return this});var h=Object.getPrototypeOf,g=h&&h(h(I([])));g&&g!==t&&n.call(g,a)&&(f=g);var y=p.prototype=m.prototype=Object.create(f);function v(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function b(e,t){var r;this._invoke=function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,l){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then(function(e){r("next",e,i,l)},function(e){r("throw",e,i,l)}):t.resolve(m).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,l)})}l(c.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}}function E(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function I(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=p,l(y,"constructor",p),l(p,"constructor",d),d.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},v(b.prototype),l(b.prototype,o,function(){return this}),e.AsyncIterator=b,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new b(c(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},v(y),l(y,i,"Generator"),l(y,a,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=I,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;w(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:I(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var G=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e))._onClickNav=function(e){2!==e&&r.setState({pageIndex:e})},r._renderStartAnimation=function(){return a.a.createElement("div",{style:Object(c.a)(Object(c.a)({},{opacity:r.state.loading?1:0,visibility:r.state.loading?"visible":"hidden"}),M.animationBgContainer)},a.a.createElement(f.a,{onFinishedTyping:function(){r.setState({isTypeComplete:!0,loading:!1})},speed:100,hideCursor:!1},a.a.createElement("div",{style:M.startAnimationTypeContainer},a.a.createElement("div",{style:{height:window.innerHeight/2-100}}),a.a.createElement("span",null,"I'm Andy Chan"),a.a.createElement(f.a.Delay,{ms:"200"}),a.a.createElement("span",null,"Mobile Apps Developer"),a.a.createElement(f.a.Delay,{ms:"200"}),a.a.createElement("span",null,"iOS & Android"))))},r._renderContact=function(){var e=r.state.contact;return console.log("contactData",e),a.a.createElement("div",{ref:r.contactRef,style:M.bottomContactContainer},a.a.createElement("span",{style:M.contactName},e.name),a.a.createElement(h.a,null,a.a.createElement(g.a,null,a.a.createElement(y.a,{md:2,xs:1}),a.a.createElement(y.a,{md:8,xs:10},a.a.createElement("span",{style:M.contactDesc},e.desc)),a.a.createElement(y.a,{md:2,xs:1}))),a.a.createElement("div",{style:M.contactThreeIconRow},a.a.createElement(v.a,{style:M.leftcontactIcon,width:40,height:40,src:"/portfolio/images/layouts/email_icon.png",onClick:function(){window.location.href=e.contact.email}}),a.a.createElement(v.a,{style:M.middleContactIcon,width:45,height:45,src:"/portfolio/images/layouts/linkedin_icon.png",onClick:function(){window.open(e.contact.linkedin)}}),a.a.createElement(v.a,{style:M.rightcontactIcon,width:40,height:40,src:"/portfolio/images/layouts/telegram_icon.png",onClick:function(){window.location.href=e.contact.tg}})))},r._fetchData=Object(l.a)(W().mark(function e(){var t,n;return W().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/portfolio/portfolio.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r.setState({resumes:n.resumes,projects:n.projects,contact:n.contact}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])})),r.state={isTypeComplete:!1,loading:!0,pageIndex:0,resumes:null,projects:null,contact:null},r.homeRef=a.a.createRef(),r.projectRef=a.a.createRef(),r.contactRef=a.a.createRef(),r._fetchData(),r}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},a.a.createElement("script",{src:"https://unpkg.com/react/umd/react.production.min.js"}),!this.state.loading&&a.a.createElement(a.a.Fragment,null,a.a.createElement(w,{title:"PORTFOLIO",navTextArr:["PROJECTS","PROFILE"],navUrlArr:["",""],onClickNav:this._onClickNav}),0===this.state.pageIndex&&a.a.createElement(D,{projects:this.state.projects}),1===this.state.pageIndex&&a.a.createElement(P,{resumes:this.state.resumes}),0===this.state.pageIndex&&this._renderContact()),this._renderStartAnimation())}}]),n}(a.a.Component);i.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.2ab64e1b.chunk.js.map