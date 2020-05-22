(this["webpackJsonpkanban-project"]=this["webpackJsonpkanban-project"]||[]).push([[0],{51:function(e,t,a){e.exports=a(62)},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(14),i=a.n(s),r=a(36),o=a(37),d=a(48),c=a(47),m=a(83),u=a(76),h=a(77),g=a(39),E=a(78),f=a(79),p=a(84),k=a(81),v=a(82),b=a(80),y=(a(56),function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={todo:{1:{id:1,heading:"Task 1",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},doing:{2:{id:2,heading:"Task 2",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},done:{3:{id:3,heading:"Task 3",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},total:3,showModal:!1,heading:"",details:"",editModal:{},showEditModal:!1},n}return Object(o.a)(a,[{key:"addTask",value:function(){var e=this.state.todo,t=this.state.total;e[t+=1]={id:"".concat(t),heading:"".concat(this.state.heading),details:"".concat(this.state.details)},this.setState({todo:e,total:t,showModal:!1})}},{key:"editTask",value:function(e){var t;t=e in this.state.todo?this.state.todo[e]:e in this.state.doing?this.state.doing[e]:this.state.done[e],this.setState({showEditModal:!0,editModal:t,heading:t.heading,details:t.details})}},{key:"saveEditTask",value:function(){var e,t=this.state.editModal;t.heading=this.state.heading,t.details=this.state.details,t.id in this.state.todo?((e=this.state.todo)[t.id]=t,this.setState({todo:e})):t.id in this.state.doing?((e=this.state.doing)[t.id]=t,this.setState({doing:e})):((e=this.state.done)[t.id]=t,this.setState({done:e})),this.setState({showEditModal:!1})}},{key:"todo_to_doing",value:function(e){var t=this.state.todo,a=this.state.doing,n=t[e];delete t[e],a[e]=n,this.setState({todo:t,doing:a})}},{key:"doing_to_todo",value:function(e){var t=this.state.todo,a=this.state.doing,n=a[e];delete a[e],t[e]=n,this.setState({todo:t,doing:a})}},{key:"doing_to_done",value:function(e){var t=this.state.doing,a=this.state.done,n=t[e];delete t[e],a[e]=n,this.setState({doing:t,done:a})}},{key:"done_to_doing",value:function(e){var t=this.state.done,a=this.state.doing,n=t[e];delete t[e],a[e]=n,this.setState({done:t,doing:a})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{bg:"dark",variant:"dark"},l.a.createElement("i",{class:"fas fa-clipboard-check fa-2x task-icon",style:{marginLeft:"15px"}}),l.a.createElement(m.a.Brand,{className:"ml-auto mr-auto",align:"center"},l.a.createElement("h4",{className:"main-heading"},"Kanban Dashboard")),l.a.createElement("a",{href:"https://github.com/gowthamparuchuru/react-kanban-dashboard",target:"__blank"},l.a.createElement("i",{class:"fab fa-github fa-2x github-icon",style:{marginRight:"15px"}}))),l.a.createElement(u.a,{className:"board",fluid:!0},l.a.createElement(h.a,null,l.a.createElement(g.a,{align:"center"},l.a.createElement(E.a,{onClick:function(){return e.setState({showModal:!0})},variant:"info"},l.a.createElement("i",{class:"fas fa-plus-circle  mr-2"}),"Add Task"))),l.a.createElement(h.a,{className:"board"},l.a.createElement(g.a,null,l.a.createElement(b.a,{elevation:5,className:"paper",style:{borderRadius:"3%"}},l.a.createElement(f.a,{variant:"primary",style:{padding:"5px"}},l.a.createElement("h4",{align:"center",style:{marginBottom:"0px"}},"To Do")),0===Object.keys(this.state.todo).length?l.a.createElement(f.a,{variant:"danger",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.todo).map((function(t){return l.a.createElement(p.a,{className:"card",border:"primary",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"}," ",e.state.todo[t].heading,l.a.createElement(E.a,{size:"sm",className:"float-right",onClick:function(){e.todo_to_doing(t)}},l.a.createElement("i",{class:"fas fa-angle-right"}))),l.a.createElement(p.a.Body,{className:"card-body"},l.a.createElement(p.a.Text,null,e.state.todo[t].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",className:"float-right",style:{borderRadius:"70%"},onClick:function(){var a=e.state.todo;delete a[t],e.setState({todo:a})}},l.a.createElement("i",{class:"far fa-trash-alt"})),l.a.createElement(E.a,{className:"float-right mr-2",style:{borderRadius:"70%"},variant:"outline-info",size:"sm",onClick:function(){return e.editTask(t)}},l.a.createElement("i",{class:"fas fa-pen"}))))})))),l.a.createElement(g.a,null,l.a.createElement(b.a,{elevation:5,className:"paper",style:{borderRadius:"3%"}},l.a.createElement(f.a,{variant:"info",style:{padding:"5px"}},l.a.createElement("h4",{align:"center",style:{marginBottom:"0"}},"Doing")),0===Object.keys(this.state.doing).length?l.a.createElement(f.a,{variant:"danger",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.doing).map((function(t){return l.a.createElement(p.a,{className:"card",border:"info",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"},l.a.createElement(E.a,{size:"sm",className:"float-left",onClick:function(){e.doing_to_todo(t)}},l.a.createElement("i",{class:"fas fa-angle-left"}))," ",e.state.doing[t].heading,l.a.createElement(E.a,{size:"sm",className:"float-right",onClick:function(){return e.doing_to_done(t)}},l.a.createElement("i",{class:"fas fa-angle-right"}))),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Text,null,e.state.doing[t].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",className:"float-right",style:{borderRadius:"70%"},onClick:function(){var a=e.state.doing;delete a[t],e.setState({doing:a})}},l.a.createElement("i",{class:"far fa-trash-alt"})),l.a.createElement(E.a,{className:"float-right mr-2",style:{borderRadius:"70%"},variant:"outline-info",size:"sm",onClick:function(){return e.editTask(t)}},l.a.createElement("i",{class:"fas fa-pen"}))))})))),l.a.createElement(g.a,null,l.a.createElement(b.a,{elevation:5,className:"paper",style:{borderRadius:"3%"}},l.a.createElement(f.a,{variant:"success",style:{padding:"5px"}},l.a.createElement("h4",{align:"center",style:{marginBottom:"0"}},"Done")),0===Object.keys(this.state.done).length?l.a.createElement(f.a,{variant:"danger",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.done).map((function(t){return l.a.createElement(p.a,{className:"card",border:"success",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"},l.a.createElement(E.a,{size:"sm",className:"float-left",onClick:function(){return e.done_to_doing(t)}},l.a.createElement("i",{class:"fas fa-angle-left"}))," ",e.state.done[t].heading),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Text,null,e.state.done[t].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",style:{borderRadius:"70%"},className:"float-right",onClick:function(){var a=e.state.done;delete a[t],e.setState({done:a})}},l.a.createElement("i",{class:"far fa-trash-alt"})),l.a.createElement(E.a,{className:"float-right mr-2",style:{borderRadius:"70%"},variant:"outline-info",size:"sm",onClick:function(){return e.editTask(t)}},l.a.createElement("i",{class:"fas fa-pen"}))))})))))),l.a.createElement(k.a,{size:"md",centered:!0,show:this.state.showEditModal,onHide:function(){return e.setState({showEditModal:!1})}},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Edit Task")),l.a.createElement(k.a.Body,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"Heading"),l.a.createElement(v.a.Control,{type:"text",onChange:function(t){return e.setState({heading:t.target.value})},value:this.state.heading})),l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"Details :"),l.a.createElement(v.a.Control,{as:"textarea",rows:"3",onChange:function(t){return e.setState({details:t.target.value})},value:this.state.details})))),l.a.createElement(k.a.Footer,null,l.a.createElement(E.a,{variant:"secondary",onClick:function(){return e.setState({showEditModal:!1})}},"Cancel"),l.a.createElement(E.a,{variant:"primary",onClick:function(){return e.saveEditTask()},disabled:""===this.state.heading},"Save Edits"))),l.a.createElement(k.a,{size:"md",centered:!0,show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Enter Task")),l.a.createElement(k.a.Body,null,l.a.createElement(v.a,null,l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"Heading"),l.a.createElement(v.a.Control,{type:"text",onChange:function(t){return e.setState({heading:t.target.value})}})),l.a.createElement(v.a.Group,null,l.a.createElement(v.a.Label,null,"Details :"),l.a.createElement(v.a.Control,{as:"textarea",rows:"3",onChange:function(t){return e.setState({details:t.target.value})}})))),l.a.createElement(k.a.Footer,null,l.a.createElement(E.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1})}},"Discard"),l.a.createElement(E.a,{variant:"primary",onClick:function(){return e.addTask()},disabled:""===this.state.heading},"Add Task"))),l.a.createElement(m.a,{variant:"flat",fixed:"bottom",className:"footer",style:{backgroundColor:"#e8e4e1"}},l.a.createElement(m.a.Brand,{className:"ml-auto mr-auto footer"},l.a.createElement("a",{className:"footer-link",href:"https://gowthamparuchuru.github.io/my-portfolio/",target:"__blank"},"Gowtham")," ",l.a.createElement("span",{style:{fontFamily:"Arial, Helvetica, sans-serif"}},"\xa9")," ",(new Date).getFullYear())))}}]),a}(n.Component));var T=function(){return l.a.createElement("div",null,l.a.createElement(y,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.756c8628.chunk.js.map