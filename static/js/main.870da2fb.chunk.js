(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{55:function(e,t,i){e.exports=i(96)},60:function(e,t,i){},96:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i.n(n),a=i(13),r=i.n(a);i(60),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(61);var s=i(7),l=i(8),c=i(11),p=i(12),m=i(23),d=i.n(m),g=i(101),u=i(102),h=i(99),f=i(100),b=i(98),y=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement(b.a,{style:{borderRadius:20,marginLeft:10,marginRight:10,paddingLeft:20,paddingRight:20,fontSize:13},onClick:this.props.onClick,active:this.props.active,variant:"outline-dark"},this.props.text)}}]),i}(n.Component);y.defaultProps={onClick:function(){},active:!1,text:""};var v=y,w=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a)))._renderButtons=function(){return e.props.btnTextArr.map(function(t,i){return o.a.createElement(v,{text:t,active:e.props.selectIndex===i,onClick:function(){e.props._updateTab(i)}})})},e}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement("div",{style:this.props.containerStyle},this._renderButtons())}}]),i}(n.Component);w.defaultProps={containerStyle:{},_updateTab:function(e){},selectIndex:-1,btnTextArr:[]};var E=w,j=i(106),k=i(105),x=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(){var e;Object(s.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a)))._renderNavItems=function(){return e.props.navTextArr.map(function(t,i){return o.a.createElement(k.a.Link,{onSelect:function(){e.props.onClickNav(i)},href:""!==e.props.navUrlArr[i]?e.props.navUrlArr[i]:"#"},t)})},e}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement(j.a,{fixed:"top",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},o.a.createElement(j.a.Brand,{href:"#home"},this.props.title),o.a.createElement(j.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),o.a.createElement(j.a.Collapse,{id:"responsive-navbar-nav"},o.a.createElement(k.a,{className:"mr-auto"},this._renderNavItems())))}}]),i}(n.Component);x.defaultProps={title:"",navTextArr:[],navUrlArr:[],onClickNav:function(e){}};var A=x,I=[{img:"/portfolio/images/projects/mobile/mpfa/mobile_mpfa.png",type:"mobile",title:"MPFA Mobile App",images:["/portfolio/images/projects/mobile/mpfa/mobile_mpfa.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React-Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Coming Soon"]}],desc:"Coming Soon"},{img:"/portfolio/images/projects/mobile/bea/mobile_bea.png",type:"mobile",title:"BEA Mobile App",images:["/portfolio/images/projects/mobile/bea/1.jpg","/portfolio/images/projects/mobile/bea/2.jpg","/portfolio/images/projects/mobile/bea/3.jpg","/portfolio/images/projects/mobile/bea/4.jpg"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with ionic (HTML, JavaScript, Angular 3)"]},{title:"Keep on maintenance & enhance UX"}],desc:"The bank recently launched an entirely new level of mobile banking services in Asia with a fresh revamp of the BEA App. The app\u2019s new design is in step with the latest global trends and significantly enhances the user experience. Customers with BEA\u2019s premium SupremeGold account have a choice of colour scheme for the new interface: classic red or prestige black/gold.",youtubeId:"9R2w4t8hBns"},{img:"/portfolio/images/projects/mobile/boc/1.jpg",type:"mobile",title:"BOC Payment App",images:["/portfolio/images/projects/mobile/boc/1.jpg","/portfolio/images/projects/mobile/boc/2.png","/portfolio/images/projects/mobile/boc/3.png","/portfolio/images/projects/mobile/boc/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Simulate the real BoC app into large 4k TV","Provide a hand-on experience and education to visitors on how to use Boc Pay."]}],desc:"The Bank of China would like to showcase the visitors for its newly cross-border payment mobile application - BoC Pay. The apps enables mobile payment function in Greater Bay Area by scanning QR code with BoC Pay, without the need of opening a bank account on the mainland. Also, together with the P2P transfer function, users make free and instant interbank transfers anytime.",youtubeId:"c6ijxrVVpxM"},{img:"/portfolio/images/projects/mobile/hkhs/ipad_hkhs.png",type:"mobile",title:"HKHS iPad App",images:["/portfolio/images/projects/mobile/hkhs/1.png","/portfolio/images/projects/mobile/hkhs/2.png","/portfolio/images/projects/mobile/hkhs/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Show all information and videos of different housing schemes","Multimedia interfative table"]}],desc:"A multimedia interactive table presenting the work of HKHS over the past seven decades is the highlight of this zone. Visitors can play with it to search for the information and videos of different housing schemes, thereby have a deeper understanding of the mission of HKHS.",youtubeId:"ndMDe9fiCc0"},{img:"/portfolio/images/projects/mobile/voiceup/ipad_voiceup.png",type:"mobile",title:"iPad Voiceup App",images:["/portfolio/images/projects/mobile/voiceup/1.png","/portfolio/images/projects/mobile/voiceup/2.png","/portfolio/images/projects/mobile/voiceup/3.png","/portfolio/images/projects/mobile/voiceup/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Objective-C (Native)"]},{title:"Features",sub:["Voice Interactive","Mix-up sound wave, selfie and cheer up sentences","Produce a funny gif image"]}],desc:"'Voice Up' is the theme for this year. Speaking up is the first step on the recovery journey. It is a call for a more understanding and an embracing society for mental health issues. Together, we hope to reduce discrimination against mental health sufferers and inspire acceptance to help sufferers on their recovery journey. So let's team up for a great cause, as your voice matters.",youtubeId:"k1QzeTGr1EE"},{img:"/portfolio/images/projects/mobile/twparking/mobile_twparking.png",type:"mobile",title:"TW Smart Parking Mobile App",images:["/portfolio/images/projects/mobile/twparking/1.png","/portfolio/images/projects/mobile/twparking/2.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)"]},{title:"Features",sub:["Real time vacancy","Enhance convenience","One-touch navigation"]}],desc:"TW Smart Parking (\u8343\u6613\u6cca) app offer drivers the easiest way to reach real time car park vacancy data, parking rate and one-touch navigation to the developments in Tsuen Wan. Enhances convenience for drivers in reducing unnecessary car journeys and relieves traffic congestion. Consider different user preferences and habits, the app designed with map view and list view to facilitate drivers in different situations. It\u2019s not limited to private car drivers to get the real time vacancy data nearby, parking rate and privileges etc. "},{img:"/portfolio/images/projects/mobile/lta/mobile_lta.png",type:"mobile",title:"Lee Tung Avenue Mobile App",images:["/portfolio/images/projects/mobile/lta/1.png","/portfolio/images/projects/mobile/lta/2.png","/portfolio/images/projects/mobile/lta/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)"]},{title:"Features",sub:["Event & Shop information","Membership","Lantern Interactive (iBeacon)","Create own lighting show (iOT control)"]}],desc:"Lee Tung Avenue spent a wonderful Mid-Autumn Festival with public under an impressive giant moon art installation named \u201cmuseum of the Moon\u201d. The fairy-tale romance was continued this year with a new exhibition, the \u201cMoon Rabbit Lumiere\u201d. 10 giant \u201cMoon Rabbit\u201d appeared along Lee Tung Avenue. A mobile application is developed to allow visitors to control the iconic lanterns for a truly immersive and interactive experience. A reward program \u201cChinese Riddle Hide and Seek\u201d is introduced to win surprising rewards."},{img:"/portfolio/images/projects/mobile/pandaplace/mobile_pandaplace.png",type:"mobile",title:"Panda Place Mobile App",images:["/portfolio/images/projects/mobile/pandaplace/1.jpg"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Event & Shop information","Membership"]}],desc:"The client would like to put the membership programme functions online, allowing the customers to check their points, redemption record, and reserve gifts online anytime and anywhere. The previous CRM system were not capable to support on the increasing of needs, therefore, we manage the customers\u2019 data migration and integrated the new revamped mobile apps to our CCCRM. It is a big improvement in their mobile apps."},{img:"/portfolio/images/projects/mobile/mabella/mobile_fanshare.png",type:"mobile",title:"Mabella Mobile App",images:["/portfolio/images/projects/mobile/mabella/1.jpg","/portfolio/images/projects/mobile/mabella/2.jpg","/portfolio/images/projects/mobile/mabella/3.png","/portfolio/images/projects/mobile/mabella/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Java & Objective-C (Native)"]},{title:"Features",sub:["Retails / MaBelle Jewellery's Information","Online Shop","Latest fashion news"]}],desc:"A \u201cfanShare\u201d mobile application was developed in a clear User Interface (UI) design, which is easy and with clear instruction to use. With secure privacy protection, customer\u2019s information in the transaction procedure is under restricted function. The app not only provide online shopping and flash sale, user can browser extra information of the product by QR code function."},{img:"/portfolio/images/projects/mobile/shkp/mobile_shkp.png",type:"mobile",title:"SHKP Mobile App",images:["/portfolio/images/projects/mobile/shkp/1.png","/portfolio/images/projects/mobile/shkp/2.png","/portfolio/images/projects/mobile/shkp/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with React Native (iOS & Android)","Layout Revamp"]},{title:"Features",sub:["Event News","Online Registration"]}],desc:"We have created a set of online platform to provide the latest information including race details, key days\u2019 event, online registration to race result and highlight. We have also implemented a post event strategy, and developed a user-friendly race result search engine and certificate generator for international runners. Users can receive the instant information and key message in a mobile application version.",youtubeId:"wVqsla99-J4"},{img:"/portfolio/images/projects/mobile/asapara/mobile_asapara.png",type:"mobile",title:"Asapara Mobile App",images:["/portfolio/images/projects/mobile/asapara/1.png","/portfolio/images/projects/mobile/asapara/2.png","/portfolio/images/projects/mobile/asapara/3.png","/portfolio/images/projects/mobile/asapara/4.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Swift (iOS)"]},{title:"Features",sub:["Monitor plant growth","Adjust the enviornment (light & temperature)"]}],desc:"The aspara IoT-connected app allows you to monitor the growing process from the palm of your hand. Among other things, it lets you know how much light your plants have received, the amount of nutrients they have and when to refill the water tank. The app also brings convenience, by allowing you to control aspara remotely.",youtubeId:"RCe0SEz03r8"},{img:"/portfolio/images/projects/web/foodbulous/web_foodbulous.png",type:"web",title:"Foodbulous Website",images:["/portfolio/images/projects/web/foodbulous/web_foodbulous.png","/portfolio/images/projects/web/foodbulous/1.png","/portfolio/images/projects/web/foodbulous/2.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with NodeJS + Express, Html, JQuery"]},{title:"Features",sub:["Latest food reviews","Ranking of hottest bloggers"]}],desc:"Foodbulous is a restaurant guide that simplifies the restaurant searching experience. Cur\u200bate your food decks and discover dining ideas.",youtubeId:"uSGUHFum4z8"},{img:"/portfolio/images/projects/others/multimedia/other_multimedia.png",type:"other",title:"CityU CS3483 - Multimodal Project",images:["/portfolio/images/projects/others/multimedia/1.png","/portfolio/images/projects/others/multimedia/2.png","/portfolio/images/projects/others/multimedia/3.png","/portfolio/images/projects/others/multimedia/4.png","/portfolio/images/projects/others/multimedia/5.png","/portfolio/images/projects/others/multimedia/6.png","/portfolio/images/projects/others/multimedia/7.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Processing","Using Leap Motion and OpenCV"]},{title:"Features",sub:["Easing the overuse of finger joints & pressure of the neck","Exercise with some gestures and postures","Check the gestures correctness though Leap Motion & OpenCV"]}],desc:"There are too many factors of causing Osteoarthritis or other musculoskeletal disorders, and not every factors could be solved by IT technical, therefore the project only focus on easing the overuse of finger joints and the pressure of the neck by doing some gesture and posture, and check the correctness through Leap Motion and OpenCV.",youtubeId:"nFAorEQFcGM"},{img:"/portfolio/images/projects/others/aigame/other_aigame.png",type:"other",title:"CityU CS4386 - AI Game",images:["/portfolio/images/projects/others/aigame/1.png","/portfolio/images/projects/others/aigame/2.png","/portfolio/images/projects/others/aigame/3.png"],responsibility:[{title:"Frond-end Layout Implementation",sub:["Develop with Html5 & JavaScript"]},{title:"Tasks",sub:["Enemy AI with different difficulty","mixture of deterministic AI and non-deterministic AI","Pathfinding, Decision Making and Collision"]}],desc:"FunFing Fight is a real time tactic game, but it is a bit different from those games with the same category, such as Total War series, Command & Conquer 4: Tiberian Twilight and Shadow Tactics: Blades of the Shogun, those games required player to control and decide the next action for one or more units of characters. And that makes the biggest different from those games, since FunFing Fight is not require the player to control any action of the unit, player\u2019s duty is to decide which type of unit that need to be spawn and the position of the unit dispatch at the screen.",youtubeId:"uz89kjB7-e4"}],C=i(36),S=i(40),T=i(104),O=i(103),F=i(107),M=i(37),R=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e))._updateTab=function(e){n.setState({index:e})},n._renderImages=function(){var e=I;switch(n.state.index){case 1:e=e.filter(function(e){return"mobile"===e.type});break;case 2:e=e.filter(function(e){return"web"===e.type});break;case 3:e=e.filter(function(e){return"other"===e.type})}return e.map(function(e,t){return o.a.createElement(h.a,{xs:12,sm:6,md:4,xl:3,style:_.itemContainer},o.a.createElement("div",{className:"itemTag",onMouseOver:function(){n.state.isHover||(console.log("onMouseUp"),n.setState({hoverIndex:t,isHover:!0}))},onMouseOut:function(){n.setState({hoverIndex:-1,isHover:!1})},onClick:function(){n.setState({showModal:!0,selectedItem:e})},style:_.itemImageContainer},o.a.createElement(f.a,{fluid:!0,rounded:!0,style:Object(S.a)({},{width:"100%",height:"100%",objectFit:"cover"},{},n.state.isHover&&n.state.hoverIndex===t&&{transform:"scale(1.2)",transition:"all 0.5s ease 0s",borderRadius:5}),src:e.img}),o.a.createElement("div",{className:"hover_bg",style:Object(S.a)({},_.itemHoverBg,{},{visibility:n.state.isHover&&n.state.hoverIndex===t?"visible":"hidden"})},o.a.createElement("div",{className:"itemTitle",style:{color:"#ffffff",fontSize:20,fontWeight:"bolder",left:40,right:40,pointerEvents:"none",visibility:n.state.isHover&&n.state.hoverIndex===t?"visible":"hidden"}},o.a.createElement("span",null,e.title)))))})},n._renderTypingAnimation=function(){return o.a.createElement("div",{style:_.typeBlackBg,ref:n.homeRef},o.a.createElement("div",{style:_.typeContainer},o.a.createElement("div",{style:{height:50}}),o.a.createElement("span",null,"I'm Andy Chan"),o.a.createElement(d.a.Delay,{ms:"200"}),o.a.createElement("span",null,"Mobile Apps Developer"),o.a.createElement(d.a.Delay,{ms:"200"}),o.a.createElement("span",null,"iOS & Android")))},n._renderModal=function(){var e=null,t=null;return n.state.selectedItem&&n.state.selectedItem.images&&n.state.selectedItem.responsibility&&(e=n.state.selectedItem.images.map(function(e){return o.a.createElement(T.a.Item,{style:{height:350,backgroundColor:"#000"}},o.a.createElement("img",{className:"d-block w-100",src:e,alt:"First slide",style:{objectFit:"contain",height:"100%",imageOrientation:"from-image"}}))}),t=n.state.selectedItem.responsibility.map(function(e){return o.a.createElement("ul",null,o.a.createElement("li",{style:{marginTop:10}},e.title,e.sub&&o.a.createElement("ul",null,e.sub.map(function(e){return o.a.createElement("li",{style:{marginTop:10}},e)}))))})),o.a.createElement(O.a,{show:n.state.showModal,centered:!0,size:"xl","aria-labelledby":"contained-modal-title-vcenter",animation:!0,onHide:function(){n.setState({selectIndex:-1,showModal:!1})}},o.a.createElement(F.a,{style:{width:"100%",padding:20}},o.a.createElement(O.a.Header,{closeButton:!0},o.a.createElement(O.a.Title,{id:"contained-modal-title-vcenter"},n.state.selectedItem?n.state.selectedItem.title:"")),o.a.createElement(O.a.Body,{style:{overflowY:"auto",maxHeight:.7*window.screen.height}},n.state.selectedItem&&n.state.selectedItem.youtubeId&&o.a.createElement(C.a,{videoId:n.state.selectedItem.youtubeId,opts:{width:"100%"}}),o.a.createElement(T.a,{interval:0,style:{marginTop:40,marginBottom:40}},e),o.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Description"),o.a.createElement("p",{style:{lineHeight:"30px",marginBottom:40}},n.state.selectedItem?n.state.selectedItem.desc:""),o.a.createElement("p",{style:{fontSize:18,fontWeight:700}},"Responsibility"),t)))},n.state={index:0,hoverIndex:-1,isHover:!1,showModal:!1,selectedItem:null},n}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,this._renderTypingAnimation(),o.a.createElement("div",{style:{marginTop:20}}),o.a.createElement(E,{containerStyle:_.categoryGroup,_updateTab:this._updateTab,selectIndex:this.state.index,btnTextArr:["All","Mobile","Web","Others"]}),o.a.createElement(g.a,{ref:this.projectRef,fluid:!0,style:{marginTop:30,width:"100%",minHeight:600}},o.a.createElement(M.a,{className:"row"},this._renderImages())),this._renderModal())}}]),i}(n.Component),_={startAnimationTypeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:25,height:window.innerHeight,display:"flex",flexDirection:"column",backgroundColor:"#000000",zIndex:999},typeBlackBg:{width:"100%",textAlign:"center",backgroundColor:"rgb(51,51,51)",height:200,marginTop:56},typeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:20,height:200,display:"flex",flexDirection:"column",zIndex:999},categoryGroup:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},itemContainer:{paddingLeft:10,paddingRight:10,marginBottom:10,borderRadius:5,overflow:"hidden",cursor:"pointer"},itemImageContainer:{width:"100%",height:"100%",overflow:"hidden",borderRadius:5,textAlign:"center"},itemHoverBg:{position:"absolute",left:10,right:10,top:0,bottom:0,borderRadius:5,backgroundColor:"rgba(0,0,0,0.7)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px 30px"}},B=R,D={works:[{img:"https://competition.adesignaward.com/brands/83d64288d41a3450cd4c570a997299c29b236d5d.jpg",role:"Mobile Apps Developer",company:"cccdi ltd.",time:"2018 Aug - Now",desc:["\u2022 Developed, maintained and supported mobile application using React-Native, Java, Objective-c, ionic and Flutter.","\u2022 Analyze different problems and situation to ensure the structure and quality of code for system can fulfil user"]},{img:"https://pbs.twimg.com/profile_images/694391447563403264/nOcFJwd5.png",role:"Mobile Apps Developer (Placement)",company:"InnoPage",time:"2017 Jul - 2018 Apr",desc:["\u2022 Developed, maintained and supported mobile application using Java and Swift.","\u2022 Analyze user requirement and ensure standards, procedures, and methodologies in the development life cycle are followed"]},{img:"https://secure.meetupstatic.com/photos/member/4/9/4/member_203521172.jpeg",role:"Mobile Apps Developer (Placement)",company:"HKBackpackers (NGO)",time:"2015 Jul - 2015 Aug",desc:["\u2022 Design an android application that help backpackers to create event, communicate during they are travelling","\u2022 Work in group"]},{img:"https://www.jijis.org.hk/images/logo/CITYU.png",role:"Degree in Computer Science",company:"City University Of Hong Kong",time:"2016 - 2018",desc:[]},{img:"https://static.wixstatic.com/media/ddf66d_9e48d855264d4016b3e9b9e6d1fac941~mv2.png",role:"High Diploma in Software Engineering",company:"Hong kong Institute of Vocational Education (Tsing Yi)",time:"2014 - 2016",desc:[]}],skills:[{img:"https://www.ilounge.com/wp-content/uploads/2019/10/Mobile-App-Frameworks-That-Will-Trend-in-2020.png",name:"Frontend",desc:["Android - Java/Kotlin","iOS - Objective-C/Swift","React Native/ionic/Flutter","DHTML (HTML/CSS/JavaScript)","ReactJS/jQuery/EJS/Jade"]},{img:"https://virtualizationreview.com/-/media/ECG/VirtualizationReview/Images/IntroImages2016/0716vrm_DansTake.jpg",name:"Backend",desc:["Node.js","Express/AdonisJs","PHP","JSP","MySQL"]},{img:"https://news.efinancialcareers.com/binaries/content/gallery/efinancial-careers/articles/2019/03/programmer.jpg",name:"Others",desc:["Unit Testing (JUnit)","Shell Script","Processing","Raspberry Pi"]}]},L=i(34),H=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e))._renderWorkItem=function(){return D.works.map(function(e,t){return o.a.createElement(u.a,{style:{marginTop:0===t?30:0,position:"relative"}},o.a.createElement(h.a,{md:2,xs:4},o.a.createElement(f.a,{width:100,src:e.img,thumbnail:!0})),o.a.createElement(h.a,{md:10,xs:6},o.a.createElement(u.a,null,o.a.createElement("span",{style:{fontWeight:600}},e.role)),o.a.createElement(u.a,null,o.a.createElement("span",null,e.company)),o.a.createElement(u.a,null,o.a.createElement("span",{style:{color:"rgba(0,0,0,0.6)"}},e.time)),!L.isMobile&&o.a.createElement(h.a,{className:"xs-hidden",xs:0,md:12,style:{marginTop:10,marginBottom:40,marginLeft:-10}},e.desc.map(function(e){return o.a.createElement(u.a,{style:{paddingRight:10,fontSize:15,fontWeight:300,marginBottom:10}},o.a.createElement("span",null,e))})),L.isMobile&&o.a.createElement("div",{style:{height:50}})),t<D.works.length-1&&o.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:60,width:1,backgroundColor:"rgba(0,0,0,0.3)",zIndex:-1}}))})},n._renderSkills=function(){return D.skills.map(function(e){return o.a.createElement(h.a,{md:4,xs:12,style:{marginBottom:40}},o.a.createElement(F.a,{style:{height:300,boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.1)"}},o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(F.a.Img,{height:110,src:e.img,style:{objectFit:"cover"}}),o.a.createElement("div",{style:{position:"absolute",width:"100%",top:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)"}},o.a.createElement("div",{style:{color:"#fff",position:"absolute",textAlign:"center",width:"100%",top:"40%",fontSize:22}},e.name))),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:15,alignItems:"center",lineHeight:"30px",paddingTop:20}},e.desc.map(function(e){return o.a.createElement("span",null,e)}))))})},n}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("div",{style:{height:100}}),o.a.createElement("div",{style:{fontSize:22,textAlign:"center"}},"Experiences"),o.a.createElement(g.a,{style:{paddingLeft:20,paddingRight:20,marginBottom:60}},this._renderWorkItem()),o.a.createElement("div",{style:{backgroundColor:"rgb(245, 245, 245)",paddingTop:40}},o.a.createElement("div",{style:{fontSize:22,textAlign:"center"}},"Skills Overview"),o.a.createElement(g.a,null,o.a.createElement(u.a,{style:{marginTop:20,marginBottom:L.isMobile?30:80}},o.a.createElement(h.a,{md:2,xs:1}),o.a.createElement(h.a,{md:8,xs:10,style:{textAlign:"justify"}},o.a.createElement("span",{style:{fontWeight:300}},"A Mobile Apps Developer with an experience iOS and Android background of 2 years. A wide range of knowledge in meeting different requirements, designing and maintenance application based on different situation.")),o.a.createElement(h.a,{md:2,xs:1})),o.a.createElement(u.a,{style:{paddingLeft:40,paddingRight:40}},this._renderSkills()))))}}]),i}(n.Component),P=function(e){Object(p.a)(i,e);var t=Object(c.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e))._onClickNav=function(e){2!==e&&n.setState({pageIndex:e})},n._renderStartAnimation=function(){return o.a.createElement("div",{style:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"#000000",opacity:n.state.loading?1:0,visibility:n.state.loading?"visible":"hidden",transition:"visibility 0s 1s, opacity 1s linear"}},o.a.createElement(d.a,{onFinishedTyping:function(){n.setState({isTypeComplete:!0,loading:!1})},speed:100,hideCursor:!1},o.a.createElement("div",{style:z.startAnimationTypeContainer},o.a.createElement("div",{style:{height:window.innerHeight/2-100}}),o.a.createElement("span",null,"I'm Andy Chan"),o.a.createElement(d.a.Delay,{ms:"200"}),o.a.createElement("span",null,"Mobile Apps Developer"),o.a.createElement(d.a.Delay,{ms:"200"}),o.a.createElement("span",null,"iOS & Android"))))},n._renderContact=function(){return o.a.createElement("div",{ref:n.contactRef,style:{marginTop:100,display:"flex",flexDirection:"column",width:"100%",alignItems:"center",backgroundColor:"rgb(245,245,245)",paddingTop:40,paddingBottom:40,textAlign:"center"}},o.a.createElement("span",{style:{fontSize:25,marginBottom:20}},"Andy Chan"),o.a.createElement(g.a,null,o.a.createElement(u.a,null,o.a.createElement(h.a,{md:2,xs:1}),o.a.createElement(h.a,{md:8,xs:10},o.a.createElement("span",{style:{marginBottom:20,lineHeight:"30px",fontWeight:300,fontSize:"16px",color:"#555"}},"A Mobile Apps Developer with an experience iOS and Android background of 2 years. A wide range of knowledge in meeting different requirements, designing and maintenance application based on different situation.")),o.a.createElement(h.a,{md:2,xs:1}))),o.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:40}},o.a.createElement(f.a,{style:{marginRight:30,cursor:"pointer"},width:40,height:40,src:"/portfolio/images/layouts/email_icon.png",onClick:function(){window.location.href="mailto:fung199609@gmail.com"}}),o.a.createElement(f.a,{style:{cursor:"pointer"},width:45,height:45,src:"/portfolio/images/layouts/linkedin_icon.png",onClick:function(){window.open("https://www.linkedin.com/in/tsz-fung-chan-629293158/")}}),o.a.createElement(f.a,{style:{marginLeft:30,cursor:"pointer"},width:40,height:40,src:"/portfolio/images/layouts/telegram_icon.png",onClick:function(){alert("Coming Soon")}})))},n.state={isTypeComplete:!1,loading:!0,pageIndex:0},n.homeRef=o.a.createRef(),n.projectRef=o.a.createRef(),n.contactRef=o.a.createRef(),n}return Object(l.a)(i,[{key:"render",value:function(){return o.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%"}},o.a.createElement("script",{src:"https://unpkg.com/react/umd/react.production.min.js"}),!this.state.loading&&o.a.createElement(o.a.Fragment,null,o.a.createElement(A,{title:"PORTFOLIO",navTextArr:["PROJECTS","PROFILE","RESUME"],navUrlArr:["","","https://docs.google.com/uc?export=download&id=1L5HE25J4gAuYuH8IynPFF4xc915uHQ-V"],onClickNav:this._onClickNav}),0===this.state.pageIndex&&o.a.createElement(B,null),1===this.state.pageIndex&&o.a.createElement(H,null),0===this.state.pageIndex&&this._renderContact()),this._renderStartAnimation())}}]),i}(o.a.Component),z={startAnimationTypeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:25,height:window.innerHeight,display:"flex",flexDirection:"column",backgroundColor:"#000000",zIndex:999},typeBlackBg:{width:"100%",textAlign:"center",backgroundColor:"rgb(51,51,51)",height:200,marginTop:56},typeContainer:{width:"100%",textAlign:"center",fontFamily:"monospace",color:"#ffffff",fontSize:20,height:200,display:"flex",flexDirection:"column",zIndex:999},categoryGroup:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},itemContainer:{paddingLeft:10,paddingRight:10,marginBottom:10,borderRadius:5,overflow:"hidden",cursor:"pointer"},itemImageContainer:{width:"100%",height:"100%",overflow:"hidden",borderRadius:5,textAlign:"center"},itemHoverBg:{position:"absolute",left:10,right:10,top:0,bottom:0,borderRadius:5,backgroundColor:"rgba(0,0,0,0.7)",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:"0px 30px"}},N=P;r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[55,1,2]]]);
//# sourceMappingURL=main.870da2fb.chunk.js.map