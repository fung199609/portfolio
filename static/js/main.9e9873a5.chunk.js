(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,i){e.exports=i(95)},60:function(e,t,i){},95:function(e,t,i){"use strict";i.r(t);var o=i(0),n=i.n(o),a=i(10),r=i.n(a);i(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(61);var s=i(39),l=i(15),c=i(16),p=i(20),m=i(17),d=i(19),u=i(29),g=i.n(u),h=i(98),f=i(99),b=i(100),y=i(105),v=i(102),w=i(106),j=i(101),k=i(97),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(k.a,{style:{borderRadius:20,marginLeft:10,marginRight:10,paddingLeft:20,paddingRight:20,fontSize:13},onClick:this.props.onClick,active:this.props.active,variant:"outline-dark"},this.props.text)}}]),t}(o.Component);E.defaultProps={onClick:function(){},active:!1,text:""};var I=E,C=function(e){function t(){var e,i;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(i=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a))))._renderButtons=function(){return i.props.btnTextArr.map(function(e,t){return n.a.createElement(I,{text:e,active:i.props.selectIndex===t,onClick:function(){i.props._updateTab(t)}})})},i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.props.containerStyle},this._renderButtons())}}]),t}(o.Component);C.defaultProps={containerStyle:{},_updateTab:function(e){},selectIndex:-1,btnTextArr:[]};var A=C,x=i(104),T=i(103),S=function(e){function t(){var e,i;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(i=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a))))._renderNavItems=function(){return i.props.navTextArr.map(function(e,t){return n.a.createElement(T.a.Link,{onSelect:function(){i.props.onClickNav(t)},href:"#features"},e)})},i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement(x.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},n.a.createElement(x.a.Brand,{href:"#home"},this.props.title),n.a.createElement(x.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),n.a.createElement(x.a.Collapse,{id:"responsive-navbar-nav"},n.a.createElement(T.a,{className:"mr-auto"},this._renderNavItems())))}}]),t}(o.Component);S.defaultProps={title:"",navTextArr:[],onClickNav:function(e){}};var O=S,F=[{img:"/portfolio/images/projects/mobile/mpfa/mobile_mpfa.png",type:"mobile",title:"MPFA Mobile App",images:["/portfolio/images/projects/mobile/mpfa/mobile_mpfa.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React-Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Coming Soon"]}],desc:"Coming Soon"},{img:"/portfolio/images/projects/mobile/bea/mobile_bea.png",type:"mobile",title:"BEA Mobile App",images:["/portfolio/images/projects/mobile/bea/1.jpg","/portfolio/images/projects/mobile/bea/2.jpg","/portfolio/images/projects/mobile/bea/3.jpg","/portfolio/images/projects/mobile/bea/4.jpg"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with ionic (HTML, JavaScript, Angular 3)"]},{title:"Keep on maintenance & enhance UX"}],desc:"The bank recently launched an entirely new level of mobile banking services in Asia with a fresh revamp of the BEA App. The app\u2019s new design is in step with the latest global trends and significantly enhances the user experience. Customers with BEA\u2019s premium SupremeGold account have a choice of colour scheme for the new interface: classic red or prestige black/gold.",youtubeId:"9R2w4t8hBns"},{img:"/portfolio/images/projects/mobile/boc/1.jpg",type:"mobile",title:"BOC Payment App",images:["/portfolio/images/projects/mobile/boc/1.jpg","/portfolio/images/projects/mobile/boc/2.png","/portfolio/images/projects/mobile/boc/3.png","/portfolio/images/projects/mobile/boc/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Simulate the real BoC app into large 4k TV","Provide a hand-on experience and education to visitors on how to use Boc Pay."]}],desc:"The Bank of China would like to showcase the visitors for its newly cross-border payment mobile application - BoC Pay. The apps enables mobile payment function in Greater Bay Area by scanning QR code with BoC Pay, without the need of opening a bank account on the mainland. Also, together with the P2P transfer function, users make free and instant interbank transfers anytime.",youtubeId:"c6ijxrVVpxM"},{img:"/portfolio/images/projects/mobile/hkhs/ipad_hkhs.png",type:"mobile",title:"HKHS iPad App",images:["/portfolio/images/projects/mobile/hkhs/1.png","/portfolio/images/projects/mobile/hkhs/2.png","/portfolio/images/projects/mobile/hkhs/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Show all information and videos of different housing schemes","Multimedia interfative table"]}],desc:"A multimedia interactive table presenting the work of HKHS over the past seven decades is the highlight of this zone. Visitors can play with it to search for the information and videos of different housing schemes, thereby have a deeper understanding of the mission of HKHS.",youtubeId:"ndMDe9fiCc0"},{img:"/portfolio/images/projects/mobile/voiceup/ipad_voiceup.png",type:"mobile",title:"iPad Voiceup App",images:["/portfolio/images/projects/mobile/voiceup/1.png","/portfolio/images/projects/mobile/voiceup/2.png","/portfolio/images/projects/mobile/voiceup/3.png","/portfolio/images/projects/mobile/voiceup/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Voice Interactive","Mix-up sound wave, selfie and cheer up sentences","Produce a funny gif image"]}],desc:"'Voice Up' is the theme for this year. Speaking up is the first step on the recovery journey. It is a call for a more understanding and an embracing society for mental health issues. Together, we hope to reduce discrimination against mental health sufferers and inspire acceptance to help sufferers on their recovery journey. So let's team up for a great cause, as your voice matters.",youtubeId:"k1QzeTGr1EE"},{img:"/portfolio/images/projects/mobile/twparking/mobile_twparking.png",type:"mobile",title:"TW Smart Parking Mobile App",images:["/portfolio/images/projects/mobile/twparking/1.png","/portfolio/images/projects/mobile/twparking/2.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)"]},{title:"Features",sub:["Real time vacancy","Enhance convenience","One-touch navigation"]}],desc:"TW Smart Parking (\u8343\u6613\u6cca) app offer drivers the easiest way to reach real time car park vacancy data, parking rate and one-touch navigation to the developments in Tsuen Wan. Enhances convenience for drivers in reducing unnecessary car journeys and relieves traffic congestion. Consider different user preferences and habits, the app designed with map view and list view to facilitate drivers in different situations. It\u2019s not limited to private car drivers to get the real time vacancy data nearby, parking rate and privileges etc. "},{img:"/portfolio/images/projects/mobile/lta/mobile_lta.png",type:"mobile",title:"Lee Tung Avenue Mobile App",images:["/portfolio/images/projects/mobile/lta/1.png","/portfolio/images/projects/mobile/lta/2.png","/portfolio/images/projects/mobile/lta/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)"]},{title:"Features",sub:["Event & Shop information","Membership","Lantern Interactive (iBeacon)","Create own lighting show (iOT control)"]}],desc:"Lee Tung Avenue spent a wonderful Mid-Autumn Festival with public under an impressive giant moon art installation named \u201cmuseum of the Moon\u201d. The fairy-tale romance was continued this year with a new exhibition, the \u201cMoon Rabbit Lumiere\u201d. 10 giant \u201cMoon Rabbit\u201d appeared along Lee Tung Avenue. A mobile application is developed to allow visitors to control the iconic lanterns for a truly immersive and interactive experience. A reward program \u201cChinese Riddle Hide and Seek\u201d is introduced to win surprising rewards."},{img:"/portfolio/images/projects/mobile/pandaplace/mobile_pandaplace.png",type:"mobile",title:"Panda Place Mobile App",images:["/portfolio/images/projects/mobile/pandaplace/1.jpg"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Event & Shop information","Membership"]}],desc:"The client would like to put the membership programme functions online, allowing the customers to check their points, redemption record, and reserve gifts online anytime and anywhere. The previous CRM system were not capable to support on the increasing of needs, therefore, we manage the customers\u2019 data migration and integrated the new revamped mobile apps to our CCCRM. It is a big improvement in their mobile apps."},{img:"/portfolio/images/projects/mobile/mabella/mobile_fanshare.png",type:"mobile",title:"Mabella Mobile App",images:["/portfolio/images/projects/mobile/mabella/1.jpg","/portfolio/images/projects/mobile/mabella/2.jpg","/portfolio/images/projects/mobile/mabella/3.png","/portfolio/images/projects/mobile/mabella/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Java & Objective-C (Native)"]},{title:"Features",sub:["Retails / MaBelle Jewellery's Information","Online Shop","Latest fashion news"]}],desc:"A \u201cfanShare\u201d mobile application was developed in a clear User Interface (UI) design, which is easy and with clear instruction to use. With secure privacy protection, customer\u2019s information in the transaction procedure is under restricted function. The app not only provide online shopping and flash sale, user can browser extra information of the product by QR code function."},{img:"/portfolio/images/projects/mobile/shkp/mobile_shkp.png",type:"mobile",title:"SHKP Mobile App",images:["/portfolio/images/projects/mobile/shkp/1.png","/portfolio/images/projects/mobile/shkp/2.png","/portfolio/images/projects/mobile/shkp/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Event News","Online Registration"]}],desc:"We have created a set of online platform to provide the latest information including race details, key days\u2019 event, online registration to race result and highlight. We have also implemented a post event strategy, and developed a user-friendly race result search engine and certificate generator for international runners. Users can receive the instant information and key message in a mobile application version.",youtubeId:"wVqsla99-J4"},{img:"/portfolio/images/projects/mobile/asapara/mobile_asapara.png",type:"mobile",title:"Asapara Mobile App",images:["/portfolio/images/projects/mobile/asapara/1.png","/portfolio/images/projects/mobile/asapara/2.png","/portfolio/images/projects/mobile/asapara/3.png","/portfolio/images/projects/mobile/asapara/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Swift (iOS)"]},{title:"Features",sub:["Monitor plant growth","Adjust the enviornment (light & temperature)"]}],desc:"The aspara IoT-connected app allows you to monitor the growing process from the palm of your hand. Among other things, it lets you know how much light your plants have received, the amount of nutrients they have and when to refill the water tank. The app also brings convenience, by allowing you to control aspara remotely.",youtubeId:"RCe0SEz03r8"},{img:"/portfolio/images/projects/web/foodbulous/web_foodbulous.png",type:"web",title:"Foodbulous Website",images:["/portfolio/images/projects/web/foodbulous/web_foodbulous.png","/portfolio/images/projects/web/foodbulous/1.png","/portfolio/images/projects/web/foodbulous/2.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with NodeJS + Express, Html, JQuery"]},{title:"Features",sub:["Latest food reviews","Ranking of hottest bloggers"]}],desc:"Foodbulous is a restaurant guide that simplifies the restaurant searching experience. Cur\u200bate your food decks and discover dining ideas.",youtubeId:"uSGUHFum4z8"},{img:"/portfolio/images/projects/others/multimedia/other_multimedia.png",type:"other",title:"CityU CS3483 - Multimodal Project",images:["/portfolio/images/projects/others/multimedia/1.png","/portfolio/images/projects/others/multimedia/2.png","/portfolio/images/projects/others/multimedia/3.png","/portfolio/images/projects/others/multimedia/4.png","/portfolio/images/projects/others/multimedia/5.png","/portfolio/images/projects/others/multimedia/6.png","/portfolio/images/projects/others/multimedia/7.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Processing","Using Leap Motion and OpenCV"]},{title:"Features",sub:["Easing the overuse of finger joints & pressure of the neck","Exercise with some gestures and postures","Check the gestures correctness though Leap Motion & OpenCV"]}],desc:"There are too many factors of causing Osteoarthritis or other musculoskeletal disorders, and not every factors could be solved by IT technical, therefore the project only focus on easing the overuse of finger joints and the pressure of the neck by doing some gesture and posture, and check the correctness through Leap Motion and OpenCV.",youtubeId:"nFAorEQFcGM"},{img:"/portfolio/images/projects/others/aigame/other_aigame.png",type:"other",title:"CityU CS4386 - AI Game",images:["/portfolio/images/projects/others/aigame/1.png","/portfolio/images/projects/others/aigame/2.png","/portfolio/images/projects/others/aigame/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Html5 & JavaScript"]},{title:"Tasks",sub:["Enemy AI with different difficulty","mixture of deterministic AI and non-deterministic AI","Pathfinding, Decision Making and Collision"]}],desc:"FunFing Fight is a real time tactic game, but it is a bit different from those games with the same category, such as Total War series, Command & Conquer 4: Tiberian Twilight and Shadow Tactics: Blades of the Shogun, those games required player to control and decide the next action for one or more units of characters. And that makes the biggest different from those games, since FunFing Fight is not require the player to control any action of the unit, player\u2019s duty is to decide which type of unit that need to be spawn and the position of the unit dispatch at the screen.",youtubeId:"uz89kjB7-e4"}],M=i(54),R=i(50),_=function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(p.a)(this,Object(m.a)(t).call(this,e)))._updateTab=function(e){i.state.isTypeComplete&&i.setState({index:e})},i._onClickNav=function(e){switch(console.log("nav",e),e){case 0:window.scrollTo({left:0,top:i.homeRef.current.offsetTop,behavior:"smooth"});break;case 1:window.scrollTo({left:0,top:i.projectRef.current.offsetTop,behavior:"smooth"});break;case 2:window.scrollTo({left:0,top:i.contactRef.current.offsetTop,behavior:"smooth"})}},i._renderStartAnimation=function(){return n.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#000000",opacity:i.state.loading?1:0,visibility:i.state.loading?"visible":"hidden",transition:"visibility 0s 1s, opacity 1s linear"}},n.a.createElement(g.a,{onFinishedTyping:function(){i.setState({isTypeComplete:!0,loading:!1})},speed:100,hideCursor:!1},n.a.createElement("div",{style:B.startAnimationTypeContainer},n.a.createElement("div",{style:{height:window.innerHeight/2-100}}),n.a.createElement("span",null,"I'm Andy Chan"),n.a.createElement(g.a.Delay,{ms:"200"}),n.a.createElement("span",null,"Mobile Apps Developer"),n.a.createElement(g.a.Delay,{ms:"200"}),n.a.createElement("span",null,"iOS & Android"))))},i._renderTypingAnimation=function(){return n.a.createElement("div",{style:B.typeBlackBg,ref:i.homeRef},n.a.createElement("div",{style:B.typeContainer},n.a.createElement("div",{style:{height:50}}),n.a.createElement("span",null,"I'm Andy Chan"),n.a.createElement(g.a.Delay,{ms:"200"}),n.a.createElement("span",null,"Mobile Apps Developer"),n.a.createElement(g.a.Delay,{ms:"200"}),n.a.createElement("span",null,"iOS & Android")))},i._renderImages=function(){var e=F;switch(i.state.index){case 1:e=e.filter(function(e){return"mobile"===e.type});break;case 2:e=e.filter(function(e){return"web"===e.type});break;case 3:e=e.filter(function(e){return"other"===e.type})}return e.map(function(e,t){return n.a.createElement(h.a,{xs:12,sm:6,md:4,xl:3,style:B.itemContainer},n.a.createElement("div",{className:"itemTag",onMouseOver:function(){i.state.isHover||(console.log("onMouseUp"),i.setState({hoverIndex:t,isHover:!0}))},onMouseOut:function(){i.setState({hoverIndex:-1,isHover:!1})},onClick:function(){i.setState({showModal:!0,selectedItem:e})},style:B.itemImageContainer},n.a.createElement(f.a,{fluid:!0,rounded:!0,style:Object(s.a)({},{width:"100%",height:"100%",objectFit:"cover"},{},i.state.isHover&&i.state.hoverIndex===t&&{transform:"scale(1.2)",transition:"all 0.5s ease 0s",borderRadius:5}),src:e.img}),n.a.createElement("div",{className:"hover_bg",style:Object(s.a)({},B.itemHoverBg,{},{visibility:i.state.isHover&&i.state.hoverIndex===t?"visible":"hidden"})},n.a.createElement("div",{className:"itemTitle",style:{color:"#ffffff",fontSize:20,fontWeight:"bolder",left:40,right:40,pointerEvents:"none",visibility:i.state.isHover&&i.state.hoverIndex===t?"visible":"hidden"}},n.a.createElement("span",null,e.title)))))})},i._renderContact=function(){return n.a.createElement("div",{ref:i.contactRef,style:{marginTop:100,display:"flex",flexDirection:"column",width:"100%",alignItems:"center",backgroundColor:"rgb(245,245,245)",paddingTop:40,paddingBottom:40,textAlign:"center"}},n.a.createElement("span",{style:{fontSize:25,marginBottom:20}},"Andy Chan"),n.a.createElement(b.a,null,n.a.createElement(h.a,{md:3,xs:2}),n.a.createElement(h.a,{md:6,xs:8},n.a.createElement("span",{style:{marginBottom:20,lineHeight:"30px",fontWeight:300,fontSize:"16px",color:"#555"}},"A Mobile Apps Developer with an experience iOS and Android background of 2 years. A wide range of knowledge in meeting different requirements, designing and maintenance application based on different situation.")),n.a.createElement(h.a,{md:3,xs:2})),n.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40}},n.a.createElement(f.a,{style:{marginRight:30,cursor:"pointer"},width:40,height:40,src:"/portfolio/images/layouts/email_icon.png",onClick:function(){window.location.href="mailto:fung199609@gmail.com"}}),n.a.createElement(f.a,{style:{cursor:"pointer"},width:45,height:45,src:"/portfolio/images/layouts/linkedin_icon.png",onClick:function(){window.open("https://www.linkedin.com/in/tsz-fung-chan-629293158/")}}),n.a.createElement(f.a,{style:{marginLeft:30,cursor:"pointer"},width:40,height:40,src:"/portfolio/images/layouts/telegram_icon.png",onClick:function(){alert("Coming Soon")}})))},i._renderModal=function(){var e=null,t=null;return i.state.selectedItem&&i.state.selectedItem.images&&i.state.selectedItem.responsibility&&(e=i.state.selectedItem.images.map(function(e){return n.a.createElement(y.a.Item,{style:{height:350,backgroundColor:"#000"}},n.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide",style:{objectFit:"contain",height:"100%",imageOrientation:"from-image"}}))}),t=i.state.selectedItem.responsibility.map(function(e){return n.a.createElement("ul",null,n.a.createElement("li",{style:{marginTop:10}},e.title,e.sub&&n.a.createElement("ul",null,e.sub.map(function(e){return n.a.createElement("li",{style:{marginTop:10}},e)}))))})),n.a.createElement(v.a,{show:i.state.showModal,centered:!0,size:"xl","aria-labelledby":"contained-modal-title-vcenter",animation:!0,onHide:function(){i.setState({selectIndex:-1,showModal:!1})}},n.a.createElement(w.a,{style:{width:"100%",padding:20}},n.a.createElement(v.a.Header,{closeButton:!0},n.a.createElement(v.a.Title,{id:"contained-modal-title-vcenter"},i.state.selectedItem?i.state.selectedItem.title:"")),n.a.createElement(v.a.Body,{style:{overflowY:"auto",maxHeight:.7*window.screen.height}},i.state.selectedItem&&i.state.selectedItem.youtubeId&&n.a.createElement(R.a,{videoId:i.state.selectedItem.youtubeId,opts:{width:"100%"}}),n.a.createElement(y.a,{interval:0,style:{marginTop:40,marginBottom:40}},e),n.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Description"),n.a.createElement("p",{style:{lineHeight:"30px",marginBottom:40}},i.state.selectedItem?i.state.selectedItem.desc:""),n.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Responsibility"),t)))},i.state={index:0,isTypeComplete:!1,hoverIndex:-1,isHover:!1,loading:!0,showModal:!1,selectedItem:null},i.homeRef=n.a.createRef(),i.projectRef=n.a.createRef(),i.contactRef=n.a.createRef(),i}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},n.a.createElement("script",{src:"https://unpkg.com/react/umd/react.production.min.js"}),!this.state.loading&&n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{title:"PORTFOLIO",navTextArr:["Home","Project","Contact"],onClickNav:this._onClickNav}),this._renderTypingAnimation(),n.a.createElement("div",{style:{marginTop:20}}),n.a.createElement(A,{containerStyle:B.categoryGroup,_updateTab:this._updateTab,selectIndex:this.state.index,btnTextArr:["All","Mobile","Web","Others"]}),n.a.createElement(j.a,{ref:this.projectRef,fluid:!0,style:{marginTop:30,width:"100%",minHeight:600}},n.a.createElement(M.a,{className:"row"},this._renderImages())),this._renderContact()),this._renderStartAnimation(),this._renderModal())}}]),t}(n.a.Component),B={startAnimationTypeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:25,height:window.innerHeight,display:"flex",flexDirection:"column",backgroundColor:"#000000",zIndex:999},typeBlackBg:{width:"100%",textAlign:"center",backgroundColor:"rgb(51,51,51)",height:200,marginTop:56},typeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:20,height:200,display:"flex",flexDirection:"column",zIndex:999},categoryGroup:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},itemContainer:{paddingLeft:10,paddingRight:10,marginBottom:10,borderRadius:5,overflow:"hidden",cursor:"pointer"},itemImageContainer:{width:"100%",height:"100%",overflow:"hidden",borderRadius:5,textAlign:"center"},itemHoverBg:{position:"absolute",left:10,right:10,top:0,bottom:0,borderRadius:5,backgroundColor:"rgba(0,0,0,0.7)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px 30px"}},L=_;r.a.render(n.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.9e9873a5.chunk.js.map