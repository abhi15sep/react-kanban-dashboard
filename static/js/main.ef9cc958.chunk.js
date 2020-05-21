(this["webpackJsonpkanban-project"]=this["webpackJsonpkanban-project"]||[]).push([[0],{51:function(e,a,t){e.exports=t(62)},56:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),o=t.n(r),s=t(36),i=t(37),c=t(48),d=t(47),m=t(83),u=t(76),g=t(77),h=t(39),E=t(78),f=t(79),p=t(84),k=t(81),b=t(82),v=t(80),y=(t(56),function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={todo:{1:{id:1,heading:"Task 1",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},doing:{2:{id:2,heading:"Task 2",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},done:{3:{id:3,heading:"Task 3",details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}},total:3,showModal:!1,heading:"",details:""},n}return Object(i.a)(t,[{key:"addTask",value:function(){var e=this.state.todo,a=this.state.total;e[a+=1]={id:"".concat(a),heading:"".concat(this.state.heading),details:"".concat(this.state.details)},this.setState({todo:e,total:a,showModal:!1})}},{key:"todo_to_doing",value:function(e){var a=this.state.todo,t=this.state.doing,n=a[e];delete a[e],t[e]=n,this.setState({todo:a,doing:t})}},{key:"doing_to_todo",value:function(e){var a=this.state.todo,t=this.state.doing,n=t[e];delete t[e],a[e]=n,this.setState({todo:a,doing:t})}},{key:"doing_to_done",value:function(e){var a=this.state.doing,t=this.state.done,n=a[e];delete a[e],t[e]=n,this.setState({doing:a,done:t})}},{key:"done_to_doing",value:function(e){var a=this.state.done,t=this.state.doing,n=a[e];delete a[e],t[e]=n,this.setState({done:a,doing:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,{bg:"dark",variant:"dark"},l.a.createElement("i",{class:"fas fa-clipboard-check fa-2x task-icon",style:{marginLeft:"15px"}}),l.a.createElement(m.a.Brand,{className:"ml-auto mr-auto",align:"center"},l.a.createElement("h4",{className:"main-heading"},"Kanban Dashboard")),l.a.createElement("a",{href:"https://github.com/gowthamparuchuru/react-kanban-dashboard"},l.a.createElement("i",{class:"fab fa-github fa-2x github-icon",style:{marginRight:"15px"}}))),l.a.createElement(u.a,{className:"board",fluid:!0},l.a.createElement(g.a,null,l.a.createElement(h.a,{align:"center"},l.a.createElement(E.a,{onClick:function(){return e.setState({showModal:!0})}},l.a.createElement("i",{class:"fas fa-plus"})," Add Task"))),l.a.createElement(g.a,{className:"board"},l.a.createElement(h.a,null,l.a.createElement(v.a,{elevation:3,className:"paper"},l.a.createElement("h4",{align:"center"},"To Do"),0===Object.keys(this.state.todo).length?l.a.createElement(f.a,{variant:"primary",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.todo).map((function(a){return l.a.createElement(p.a,{className:"card",border:"primary",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"}," ",e.state.todo[a].heading,l.a.createElement(E.a,{size:"sm",className:"float-right",onClick:function(){e.todo_to_doing(a)}},l.a.createElement("i",{class:"fas fa-angle-right"}))),l.a.createElement(p.a.Body,{className:"card-body"},l.a.createElement(p.a.Text,null,e.state.todo[a].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",className:"float-right",onClick:function(){var t=e.state.todo;delete t[a],e.setState({todo:t})}},l.a.createElement("i",{class:"far fa-trash-alt"}))))})))),l.a.createElement(h.a,null,l.a.createElement(v.a,{elevation:3,className:"paper"},l.a.createElement("h4",{align:"center"},"Doing"),0===Object.keys(this.state.doing).length?l.a.createElement(f.a,{variant:"primary",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.doing).map((function(a){return l.a.createElement(p.a,{className:"card",border:"info",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"},l.a.createElement(E.a,{size:"sm",className:"float-left",onClick:function(){e.doing_to_todo(a)}},l.a.createElement("i",{class:"fas fa-angle-left"}))," ",e.state.doing[a].heading,l.a.createElement(E.a,{size:"sm",className:"float-right",onClick:function(){return e.doing_to_done(a)}},l.a.createElement("i",{class:"fas fa-angle-right"}))),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Text,null,e.state.doing[a].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",className:"float-right",onClick:function(){var t=e.state.doing;delete t[a],e.setState({doing:t})}},l.a.createElement("i",{class:"far fa-trash-alt"}))))})))),l.a.createElement(h.a,null,l.a.createElement(v.a,{elevation:3,className:"paper"},l.a.createElement("h4",{align:"center"},"Done"),0===Object.keys(this.state.done).length?l.a.createElement(f.a,{variant:"primary",align:"center",style:{marginTop:"50px"}},"Add a Task"):Object.keys(this.state.done).map((function(a){return l.a.createElement(p.a,{className:"card",border:"success",bg:"light"},l.a.createElement(p.a.Header,{as:"h5",align:"center"},l.a.createElement(E.a,{size:"sm",className:"float-left",onClick:function(){return e.done_to_doing(a)}},l.a.createElement("i",{class:"fas fa-angle-left"}))," ",e.state.done[a].heading),l.a.createElement(p.a.Body,null,l.a.createElement(p.a.Text,null,e.state.done[a].details),l.a.createElement(E.a,{size:"sm",variant:"outline-danger",className:"float-right",onClick:function(){var t=e.state.done;delete t[a],e.setState({done:t})}},l.a.createElement("i",{class:"far fa-trash-alt"}))))})))))),l.a.createElement(k.a,{size:"md",centered:!0,show:this.state.showModal,onHide:function(){return e.setState({showModal:!1})}},l.a.createElement(k.a.Header,{closeButton:!0},l.a.createElement(k.a.Title,null,"Enter Task")),l.a.createElement(k.a.Body,null,l.a.createElement(b.a,null,l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,null,"Heading"),l.a.createElement(b.a.Control,{type:"text",onChange:function(a){return e.setState({heading:a.target.value})}})),l.a.createElement(b.a.Group,null,l.a.createElement(b.a.Label,null,"Details :"),l.a.createElement(b.a.Control,{as:"textarea",rows:"3",onChange:function(a){return e.setState({details:a.target.value})}})))),l.a.createElement(k.a.Footer,null,l.a.createElement(E.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1})}},"Discard"),l.a.createElement(E.a,{variant:"primary",onClick:function(){return e.addTask()},disabled:""===this.state.heading},"Add Task"))),l.a.createElement(m.a,{bg:"secondary",variant:"dark",fixed:"bottom",className:"footer"},l.a.createElement(m.a.Brand,{className:"ml-auto mr-auto footer"},"Made by Gowtham")))}}]),t}(n.Component));var N=function(){return l.a.createElement("div",null,l.a.createElement(y,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.ef9cc958.chunk.js.map