(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{32:function(t,e,n){t.exports=n(60)},42:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(29),l=n.n(r),c=n(18),i=n(7),d=n(8),s=n(10),u=n(9),p=n(13),m=n(1);var h={backgroundColor:"#333",color:"#FFF",textAlign:"center",padding:".75em"},b={color:"#FFF",textDecoration:"none"},f=function(){return a.a.createElement("header",{style:h},a.a.createElement("h1",null,"TodoList"),a.a.createElement(p.b,{style:b,to:"/"},"Home")," | ",a.a.createElement(p.b,{style:b,to:"/about"},"About"))},y=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).getStyle=function(){return{backgroundColor:"#F4F4F4",padding:"1em",borderBottom:"1px dotted #555",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n," ",a.a.createElement("button",{style:v,onClick:this.props.delTodo.bind(this,e)},"\xd7")))}}]),n}(o.Component),v={backgroundColor:"#FF0000",color:"#FFF",outline:"none",border:"none",padding:"0 .3em",borderRadius:"50%",cursor:"pointer",float:"right"},E=y,g=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return a.a.createElement(E,{key:e.id,todo:e,markComplete:t.props.markComplete,delTodo:t.props.delTodo})}))}}]),n}(o.Component),j=n(31),k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t.onChange=function(e){return t.setState(Object(j.a)({},e.target.name,e.target.value))},t}return Object(d.a)(n,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:".3em"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{type:"submit",value:"Submit",className:"btn",style:{flex:"1"}}))}}]),n}(o.Component);var O=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0. It is part of a React crash course."))},C=(n(42),n(14)),F=n.n(C),T=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){F.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(n){return t.setState({todos:Object(c.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){F.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(c.a)(t.state.todos),[e.data])})}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=this;F.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(f,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{addTodo:t.addTodo}),a.a.createElement(g,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),a.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(o.Component);l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(T,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.33c69b20.chunk.js.map