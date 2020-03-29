(this.webpackJsonpcorvis=this.webpackJsonpcorvis||[]).push([[0],{65:function(e,t,a){e.exports=a(95)},71:function(e,t,a){},72:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(53),c=a.n(r),s=a(40),o=a.n(s),i=a(54),m=a(55),d=a(56),u=a(59),h=a(60),E=(a(71),a(72),a(20)),p=a(98),f=Object(p.a)().translate([200,200]).scale(98),v=function(e){var t=0,a="purple";return"discharged"===e.event?(t=30,a="green"):"death"===e.event?(t=10,a="black"):(t=200,a="purple"),l.a.createElement("div",null,l.a.createElement(E.ComposableMap,{className:"gmap",width:400,height:400,projection:f,"data-tip":""},l.a.createElement(E.ZoomableGroup,{zoom:6,center:[82,22]},l.a.createElement(E.Geographies,{geography:e.geoUrl},(function(n){return n.geographies.map((function(n){var r=n.properties.name,c=0,s=0,o=0,i=0;if(e.cdata){var m=e.cdata.filter((function(e){return e.loc===r}));m.length>0&&(c=m[0].confirmedCasesIndian+m[0].confirmedCasesForeign,s=m[0].deaths,o=m[0].discharged,i="discharged"===e.event?o/t:"death"===e.event?s/t:c/t)}return l.a.createElement(E.Geography,{key:n.rsmKey,geography:n,fill:a,fillOpacity:i,stroke:"#969696",strokeOpacity:"1",strokeWidth:".07",onMouseEnter:function(){e.setTooltipContent(l.a.createElement("div",{className:"tooltip"},l.a.createElement("p",{className:"country"},r),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",{className:"confirmed"},l.a.createElement("td",null,"Confirmed"),l.a.createElement("td",null,c)),l.a.createElement("tr",{className:"discharged"},l.a.createElement("td",null,"Discharged"),l.a.createElement("td",null,o)),l.a.createElement("tr",{className:"death"},l.a.createElement("td",null,"Death"),l.a.createElement("td",null,s))))))},onMouseLeave:function(){e.setTooltipContent("")},style:{default:{fill:{colFill:a},outline:"none"},hover:{fill:{colFill:a},stroke:"black",strokeWidth:"0.2",outline:"none"},pressed:{outline:"none"}}})}))})))))},w=a(57),g=a.n(w).a.create({baseURL:"https://api.rootnet.in/covid19-in/stats/history"}),b=a(58),y=function(e){console.log(e)},N=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:[],count:0,day:"Click on buttons to start animation",row:null,tooktipData:"",event:"confirmed",isReady:!1},e.animateNow=function(){setTimeout((function(){y("Next");var t=e.state.data[e.state.count];e.setState({count:e.state.count+1,row:t,day:t.day}),e.state.count<e.state.data.length?e.animateNow():e.state.count=0}),500)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get();case 2:(t=e.sent).data.success?(y("HISTORY FATCHED SUCCESS"),a=t.data.data,y(a),this.setState({data:a,isReady:!0})):y(t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return y(this.state.row),l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"titleD"},"COVID-19 SPREAD IN INDIA"),l.a.createElement("div",{className:"subtitleD"},"How this pandemic spread in our beautiful conuntry"),l.a.createElement("div",{className:"controlP"},l.a.createElement("button",{className:"confirmedB ".concat("confirmed"===this.state.event?"selected":null),onClick:function(t){e.state.event="confirmed",e.state.count=0,e.animateNow()}},"Confirmed"),l.a.createElement("button",{className:"dischargedB ".concat("discharged"===this.state.event?"selected":null),onClick:function(t){e.state.event="discharged",e.state.count=0,e.animateNow()}},"Discharged"),l.a.createElement("button",{className:"deathB ".concat("death"===this.state.event?"selected":null),onClick:function(t){e.state.event="death",e.state.count=0,e.animateNow()}},"Death")),l.a.createElement(v,{className:"gmap",geoUrl:"https://raw.githubusercontent.com/shivampip/faCorana/master/simulation/data/map/India_Official.json",cdata:this.state.row?this.state.row.regional:null,event:this.state.event,setTooltipContent:function(t){return e.setState({tooktipData:t})}}),l.a.createElement(b.a,{place:"top",backgroundColor:"white",effect:"float",border:!0,borderColor:"black"},this.state.tooktipData),l.a.createElement("div",{className:"dayDiv"},this.state.day),l.a.createElement("table",{className:"dashboardT"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"confirmed"},"Confirmed"),l.a.createElement("th",{className:"discharged"},"Recovered"),l.a.createElement("th",{className:"death"},"Deaths")),l.a.createElement("tr",null,l.a.createElement("td",null,this.state.row?this.state.row.summary.confirmedCasesIndian+this.state.row.summary.confirmedCasesForeign:0),l.a.createElement("td",null,this.state.row?this.state.row.summary.discharged:0),l.a.createElement("td",null,this.state.row?this.state.row.summary.deaths:0)))),l.a.createElement("div",{className:"instB"},l.a.createElement("i",null,"Data is not real-time")),l.a.createElement("div",{className:"tableHead"},"Useful Resources"),l.a.createElement("table",{className:"dashboardT resourceT"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"National Helpline No."),l.a.createElement("td",null,l.a.createElement("h4",null,"+91-11-23978046"))),l.a.createElement("tr",null,l.a.createElement("td",null,"National Helpline No."),l.a.createElement("td",null,l.a.createElement("h4",null,"1075"))),l.a.createElement("tr",null,l.a.createElement("td",null,"COVID-19 Tracker India"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.covid19india.org/"},"Link"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Statewise Helpline No."),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf",target:"_blank"},"Download PDF"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Quarantine guidlines"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.mohfw.gov.in/pdf/SOPforqurantine.pdf"},"Download PDF"))),l.a.createElement("tr",null,l.a.createElement("td",null,"COVID-19 MyGov"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.mygov.in/covid-19/"},"Link"))),l.a.createElement("tr",null,l.a.createElement("td",null,"COVID-19 WHO"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019"},"Link"))),l.a.createElement("tr",null,l.a.createElement("td",null,"WHO Whatsapp Helpline"),l.a.createElement("td",null,l.a.createElement("a",{href:"http://wa.me/41798931892?text=hi",target:"_blank"},"Chat"))),l.a.createElement("tr",null,l.a.createElement("td",null,"PM-CARES Fund Donation"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://pib.gov.in/PressReleseDetailm.aspx?PRID=1608851"},"Donate"))),l.a.createElement("tr",null,l.a.createElement("td",null,"Myth Busters"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters"},"Link"))),l.a.createElement("tr",null,l.a.createElement("td",null,"How to use Mask"),l.a.createElement("td",null,l.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/when-and-how-to-use-masks",target:"_blank"},"Link"))))),l.a.createElement("div",{className:"banner"},"Stay Home, Stay Safe"),l.a.createElement("div",{className:"banner banner2"},"Prepare, But Don't Panic"),l.a.createElement("div",{className:"banner"},"Spread J\u2665\ufe0fy, Not COVID-19"),l.a.createElement("div",{className:"banner banner2"},"Thank You All The Doctors, Nurses & Emergency Workers"),l.a.createElement("div",{className:"creditD"},"Developed by"," ",l.a.createElement("a",{href:"https://twitter.com/shivampip",target:"_blank"},"Shivam Agrawal")),l.a.createElement("div",{className:this.state.isReady?null:"loadContainer"},l.a.createElement("div",{className:"loadT",style:{display:this.state.isReady?"none":"visible"}},"Loading...")))}}]),a}(l.a.Component);document.addEventListener("DOMContentLoaded",(function(){c.a.render(l.a.createElement(N,null),document.getElementById("root"))}))}},[[65,1,2]]]);
//# sourceMappingURL=main.2ee3fb47.chunk.js.map