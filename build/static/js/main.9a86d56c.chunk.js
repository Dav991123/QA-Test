(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(80)},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){e.exports=a.p+"static/media/multimedia-option.e75855a1.svg"},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=a(3),l=Object(n.createContext)(),u=a(30),i=a(13),m=[{id:1,questionCode:"\nswitch(1) {\n    case 2 : console.log(2); break;\n    default: console.log(3);\n    case 4: console.log(4)\n}\n        ",question:"What is printed in the console ?",answer_a:"error",answer_b:"undefined",answer_c:"2, 3",answer_d:"3, 4",correct_answer:"d"},{id:2,questionCode:"\nPromise.reject()\n.then(() => {\n    console.log('then1')\n})\n.catch(() => {\n    console.log('catch')\n})\n.then(() => {\n    console.log('then2')\n})\n        ",question:" What is printed in the console ?",answer_a:"then1 then2",answer_b:"then1 catch",answer_c:"Error",answer_d:"catch then2",correct_answer:"d"},{id:3,questionCode:"\nPromise.resolve()\n.then(() => {\n    setTimeout(() => {\n        console.log('setTimeout 1')\n    }, 0)\n})\n.then(() => {\n    console.log('then')\n})\nsetTimeout(() => {\n    console.log('setTimeout 2')\n}, 0)\n        ",question:"What is printed in the console ?",answer_a:"then, setTimeout 2, setTimeout 1",answer_b:"then, setTimeout 1, setTimeout 2",answer_c:"setTimeout 2, setTimeout 1, then",answer_d:"then, setTimeout 2, null",correct_answer:"a"}],d=a(2),p="SET_CURRENT_ANSWER",E="SET_CURRENT_QUESTION",b="SET_ERROR",f="SET_SHOW_RESULTS",g="SET_IS_AUTH",h="SET_ANSWERS",O="SET_EXACT_QUESTION",v="SET_USER_AUTH",j="RESET_QUIZ",w=function(e,t){switch(t.type){case p:return Object(d.a)({},e,{currentAnswers:t.payload});case E:return Object(d.a)({},e,{currentQuestion:t.payload});case b:return Object(d.a)({},e,{error:t.payload});case f:return Object(d.a)({},e,{showResults:t.payload});case h:return Object(d.a)({},e,{answers:t.payload});case O:return Object(d.a)({},e,{exactQuestion:t.payload});case g:return Object(d.a)({},e,{isAuth:t.payload});case E:return Object(d.a)({},e,{questionResult:t.payload});case v:return Object(d.a)({},e,{user:t.payload});case j:return Object(d.a)({},e,{currentQuestion:0,exactQuestion:0,currentAnswers:"",answers:[],showResults:!1,questionResult:[],error:""});default:return e}},y=a(31),S=a(32),x=function(){function e(){Object(y.a)(this,e)}return Object(S.a)(e,null,[{key:"getItem",value:function(e){try{return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null}catch(t){throw new Error("storage_element_not_found")}}},{key:"setItem",value:function(e,t){localStorage.setItem(e,JSON.stringify(t))}},{key:"deleteItem",value:function(e){delete localStorage[e]}},{key:"allClear",value:function(){localStorage.clear()}}]),e}(),C=a(33),N=a.n(C).a.initializeApp({apiKey:"AIzaSyC8eeEA6kEs1XKEw_zxgDEIbuuCwVGDcmc",authDomain:"javascript-master-test.firebaseapp.com",databaseURL:"https://javascript-master-test.firebaseio.com",projectId:"javascript-master-test",storageBucket:"javascript-master-test.appspot.com",messagingSenderId:"513860213830",appId:"1:513860213830:web:f7c69576e48a4980097e47",measurementId:"G-D29TY4KPC5"}),_=(a(62),function(e){var t=e.type,a=e.name,n=e.label,c=e.onChange,s=e.value,o=e.onBlur,l=e.onFocus,u=e.helperText,i=e.error;return r.a.createElement("div",{className:"group"},r.a.createElement("input",{type:t,name:a,required:!0,value:s,onChange:c,onBlur:o,onFocus:l,style:i?{borderColor:"#f44336"}:{borderColor:"#757575"}}),r.a.createElement("p",{className:"error-text"},u),r.a.createElement("span",{className:"highlight"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{style:i?{color:"#f44336"}:{color:"#999"}},n))}),q=a(4),T=function(e,t){var a=Object.assign({},e);Object.keys(e).forEach(function(e){a[e]=null});var r=Object.assign({},t);Object.keys(t).forEach(function(e){t.hasOwnProperty(e)&&(r[e]=!1)});var c=Object(n.useState)(e),s=Object(o.a)(c,2),l=s[0],u=s[1],i=Object(n.useState)(a),m=Object(o.a)(i,2),p=m[0],E=m[1],b=Object(n.useState)(r),f=Object(o.a)(b,2),g=f[0],h=f[1],O=Object(n.useState)(!0),v=Object(o.a)(O,2),j=v[0],w=v[1];Object(n.useEffect)(function(){-1!==Object.values(g).indexOf(!1)?w(!0):w(!1)},[g,l]);return{errors:p,values:l,onFocus:function(e){var t=e.target.name;E(Object(d.a)({},p,Object(q.a)({},t,"")))},isEnable:j,setValues:u,handleChange:function(e){var a=e.target,n=a.name,r=a.value;if(u(Object(d.a)({},l,Object(q.a)({},n,r))),""===r){if(t.hasOwnProperty(n))return E(Object(d.a)({},p,Object(q.a)({},n,t[n].requiredMessage))),void h(Object(d.a)({},g,Object(q.a)({},n,!1)))}else h(Object(d.a)({},g,Object(q.a)({},n,!0))),E(Object(d.a)({},p,Object(q.a)({},n,"")));if(t[n]){if(t[n].hasOwnProperty("regExp"))return void(t[n].regExp.test(r)?E(Object(d.a)({},p,Object(q.a)({},n,""))):(E(Object(d.a)({},p,Object(q.a)({},n,t[n].warningMessage))),h(Object(d.a)({},g,Object(q.a)({},n,!1)))));h(Object(d.a)({},g,Object(q.a)({},n,!0)))}},handleOutsideClick:function(e){var a=e.target,n=a.name,r=a.value;""!==r?(h(Object(d.a)({},g,Object(q.a)({},n,!0))),t[n].hasOwnProperty("regExp")?t[n].regExp.test(r)||(E(Object(d.a)({},p,Object(q.a)({},n,t[n].warningMessage))),h(Object(d.a)({},g,Object(q.a)({},n,!1)))):h(Object(d.a)({},g,Object(q.a)({},n,!0)))):t.hasOwnProperty(n)&&(E(Object(d.a)({},p,Object(q.a)({},n,t[n].requiredMessage))),h(Object(d.a)({},g,Object(q.a)({},n,!1))))}}},k={regExp:/^.*(?=.{7,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/,text:"Password has to be 7 characters including a number, a lowercase letter and an uppercase letter."},A={regExp:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,text:"Invalid email address"};a(63);var I=function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"loading-container"},r.a.createElement("div",{class:"loading"})))},Q=(a(64),{email:{requiredMessage:"Email is required*",regExp:A.regExp,warningMessage:A.text},password:{requiredMessage:"Password is required*",regExp:k.regExp,warningMessage:k.text}}),R=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(i.d)(),u=Object(n.useContext)(l).dispatch,m=T({email:"",password:""},Q),d=m.values,p=m.errors,E=m.onFocus,b=m.isEnable,f=m.handleChange,h=m.handleOutsideClick,O=function(e){e.preventDefault(),c(!0);var t=d.email,a=d.password;N.auth().signInWithEmailAndPassword(t,a).then(function(){c(!1),u({type:g,payload:!0})}).catch(function(e){c(!1),u({type:g,payload:!1}),s.error(e.message)})};return r.a.createElement("div",{className:"input-content"},r.a.createElement("form",{onSubmit:O},r.a.createElement("div",null,r.a.createElement(_,{type:"text",name:"email",label:"Email",value:d.email,onChange:f,onBlur:h,onFocus:E,helperText:p.email,error:p.email})),r.a.createElement("div",null,r.a.createElement(_,{type:"password",name:"password",label:"Password",value:d.password,onChange:f,onBlur:h,onFocus:E,helperText:p.password,error:p.password})),a?r.a.createElement(I,null):r.a.createElement("div",{className:"button-content"},r.a.createElement("button",{disabled:b,onClick:O},"Login"))))},F={email:{requiredMessage:"Email is required*",regExp:A.regExp,warningMessage:A.text},password:{requiredMessage:"Password is required*",regExp:k.regExp,warningMessage:k.text},userName:{requiredMessage:"user name is required*"}},P=function(){var e=Object(i.d)(),t=Object(n.useState)(!1),a=Object(o.a)(t,2),c=a[0],s=a[1],l=T({email:"",password:"",userName:""},F),u=l.values,m=l.errors,d=l.onFocus,p=l.isEnable,E=l.handleChange,b=l.handleOutsideClick,f=function(t){s(!0),t.preventDefault();var a=u.userName,n=u.email,r=u.password;N.auth().createUserWithEmailAndPassword(n,r).then(function(e){s(!1),N.database().ref("users").push({userName:a,userId:N.auth().currentUser.uid,email:N.auth().currentUser.email})}).catch(function(t){e.error(t.message),s(!1)})};return r.a.createElement("div",{className:"input-content"},r.a.createElement("form",{onSubmit:f},r.a.createElement("div",null,r.a.createElement(_,{type:"text",name:"userName",label:"User Name",value:u.userName,onChange:E,onBlur:b,onFocus:d,helperText:m.userName,error:m.userName})),r.a.createElement("div",null,r.a.createElement(_,{type:"text",name:"email",label:"Email",value:u.email,onChange:E,onBlur:b,onFocus:d,helperText:m.email,error:m.email})),r.a.createElement("div",null,r.a.createElement(_,{type:"password",name:"password",label:"Password",value:u.password,onChange:E,onBlur:b,onFocus:d,helperText:m.password,error:m.password})),c?r.a.createElement(I,null):r.a.createElement("div",{className:"button-content"},r.a.createElement("button",{disabled:p,onClick:f},"Register"))))},M=a(14),U=(a(65),function(){var e=Object(n.useContext)(l).state.isAuth,t=Object(M.f)();Object(n.useEffect)(function(){e&&t.push("/")},[e]);var a=Object(n.useState)(0),c=Object(o.a)(a,2),s=c[0],u=c[1],i={color:"rgba(255, 255, 255, 0.7)",backgroundColor:"#212121",fontWeight:"bold"},m=[{id:1,name:"login",title:"Login in to your account",value:"login component",component:r.a.createElement(R,null)},{id:2,name:"register",title:"Create new account",value:"register component",component:r.a.createElement(P,null)}];return r.a.createElement("section",{className:"form-content"},r.a.createElement("div",{className:"login-register-content"},r.a.createElement("div",{className:"form-tab-button"},m.map(function(e,t){var a=e.id,n=e.name;return r.a.createElement("button",{key:a,onClick:function(){return u(t)},style:t===s?i:null},n)})),r.a.createElement("h2",null,m[s].title),r.a.createElement("div",{className:"component-container"},m[s].component)))}),L=a(36),z=a.n(L),W=a(26),B=a(39),D=function(e){var t,a=e.questionCode,c=e.isOnChange,s=e.fontSize,l=e.onSetQuestionState,u=Object(n.useState)(),i=Object(o.a)(u,2),m=i[0],d=i[1],p=Object(B.a)();Object(n.useEffect)(function(){d(p<1e3?17:p<700?15:s)},[s,p,m]);var E={fontFamily:'"Fira code", "Fira Mono", monospace',fontSize:m};return r.a.createElement("div",{className:"editor-content"},r.a.createElement(z.a,(t={value:a,onValueChange:function(e){return console.log(e)},highlight:function(e){return Object(W.highlight)(e,W.languages.js)}},Object(q.a)(t,"onValueChange",function(e){return c&&l(e)}),Object(q.a)(t,"padding",10),Object(q.a)(t,"style",E),t)))},J=a(37),V=a.n(J);a(70);function G(e){var t=e.percent,a=e.exactQuestion,c=e.allQuestionsCount,s=e.onSetIsSendMessage,o=Object(n.useContext)(l).state.user;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"send-result-help-text"},"Fill in the input fields to see the result of the test"),r.a.createElement("div",{className:"send-email-content"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target.user_name),V.a.sendForm("javascript_master_question","javascript_master_question",e.target,"user_MALPpwivVccnEy4UkODWk").then(function(e){s(!0)},function(e){console.log(e.text),s(!1)})}},r.a.createElement(_,{type:"email",value:o.email,name:"user_email"}),r.a.createElement(_,{type:"text",label:"First Name",name:"first_name"}),r.a.createElement(_,{type:"text",label:"Last Name",name:"last_name"}),r.a.createElement("div",{className:"question-results-content"},r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:"You Scored ".concat(t,"%"),name:"percent",readOnly:!0})),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:"".concat(a," of ").concat(c),readOnly:!0,name:"exact_question"}))),r.a.createElement("button",null,"send"))))}a(71);var H=function(e){var t=e.answers,a=Object(n.useState)(!1),c=Object(o.a)(a,2),s=c[0],u=c[1],i=Object(n.useContext)(l),d=i.dispatch,p=i.state,E=m.length,b=Object(n.useState)(null),f=Object(o.a)(b,2),g=f[0],h=f[1],O=p.exactQuestion,v=Math.round(O/E*100);return r.a.createElement("div",{className:"container result"},!s&&r.a.createElement(G,{percent:v,exactQuestion:O,allQuestionsCount:E,onSetIsSendMessage:u}),s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question-result-info"},r.a.createElement("h2",null,"Result"),r.a.createElement("p",null,"You Scored ",v,"%"),r.a.createElement("p",null," ",O," of ",r.a.createElement("span",null,E))),r.a.createElement("div",{className:"question-result"},t.map(function(e){var t=m.find(function(t){return t.id===e.questionId});return r.a.createElement("div",{key:t.id,className:"".concat(t.correct_answer===e.answer?"correct":"failed"," ")},r.a.createElement("button",{className:"btn-question-info question-icon-info",onClick:function(){return h(t.id)}},r.a.createElement("i",{className:"fa fa-info-circle"})),r.a.createElement("div",{className:"question-info"},r.a.createElement("span",null,t.id)),r.a.createElement(D,{isOnChange:!1,questionCode:t.questionCode,fontSize:16}),function(e,t,a){var n=a.correct_answer,c=a["answer_".concat(n)],s=a["answer_".concat(t)];return r.a.createElement("div",{className:"".concat(e===g?"question-info-content-visible":""," question-info-content")},r.a.createElement("button",{className:"".concat(h?"active-close-icon":"","\n                    btn-question-info question-icon-close\n                "),onClick:function(){return h(null)}},r.a.createElement("i",{className:"fa fa-remove"})),r.a.createElement("div",{className:"question-info-desktop"},r.a.createElement("div",null,r.a.createElement("h2",null,"Correct Answer"),r.a.createElement("p",null,c),r.a.createElement("h2",null,"Selected Answer"),r.a.createElement("p",null,s))))}(t.id,e.answer,t))})),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){d({type:j}),localStorage.clear()}},"Restart")))},K=(a(72),function(e){var t=e.total,a=e.current;return r.a.createElement("div",{className:"question-progress"},r.a.createElement("h2",null,"Question ",a+1," of ",t))}),Y=(a(73),a(74),a(75),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useRef)(null),u=Object(n.useContext)(l).state,i=u.currentQuestion,m=u.questions,d=m[i].questionCode,p=m[i].question;Object(n.useEffect)(function(){c(d)},[d]);var E,b;return E=s,b=function(){c(d)},Object(n.useEffect)(function(){var e=function(e){E.current&&!E.current.contains(e.target)&&b(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}},[E,b]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"question-code-editor",ref:s},r.a.createElement(D,{isOnChange:!0,questionCode:a,onSetQuestionState:c,fontSize:20})),r.a.createElement("p",null,p))}),X=function(e){var t=e.letter,a=e.answer,n=e.selected,c=e.dispatch,s=e.onSetSelectedAnswer,o=["answer"];return n&&o.push("selected"),r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{value:t,className:o.join(" "),onClick:function(e){s(null),c({type:p,payload:e.target.value}),c({type:b,payload:""})}},r.a.createElement("span",{className:"letter"},t,"."),a))},Z=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useContext)(l),u=s.state,i=s.dispatch,m=u.answers,d=u.questions,p=u.currentQuestion,E=u.currentAnswers,b=d[p],f=b.answer_a,g=b.answer_b,h=b.answer_c,O=b.answer_d;Object(n.useEffect)(function(){c(v())},[p]);var v=function(){if(m[p])return m[p].answer};return r.a.createElement("div",{className:"answer-content"},r.a.createElement(X,{letter:"a",answer:f,selected:"a"===E||"a"===a,dispatch:i,onSetSelectedAnswer:c}),r.a.createElement(X,{letter:"b",answer:g,selected:"b"===E||"b"===a,dispatch:i,onSetSelectedAnswer:c}),r.a.createElement(X,{letter:"c",answer:h,selected:"c"===E||"c"===a,dispatch:i,onSetSelectedAnswer:c}),r.a.createElement(X,{letter:"d",answer:O,selected:"d"===E||"d"===a,dispatch:i,onSetSelectedAnswer:c}))},$=(a(76),function(){var e=Object(n.useContext)(l),t=e.state,a=e.dispatch,c=t.currentQuestion,s=t.currentAnswers,o=t.exactQuestion,u=t.answers,i=m[x.getItem("currentQuestion")];return r.a.createElement("div",null,r.a.createElement("button",{className:"btn-go-back-quiz",onClick:function(){s===i.correct_answer&&a({type:O,payload:o+1}),a({type:E,payload:c-1})},disabled:!u.length||!c},r.a.createElement("i",{class:"fas fa-undo-alt"})))}),ee=a(38),te=function(){var e=Object(n.useContext)(l),t=e.state,a=e.dispatch,c=Object(i.d)(),s=t.answers,o=t.currentQuestion,u=t.currentAnswers,d=t.exactQuestion,b=m[x.getItem("currentQuestion")];return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){if(u){u===b.correct_answer&&a({type:O,payload:d+1});var e=s.findIndex(function(e){return e.questionId===b.id});-1!==e&&s.splice(e,1),a({type:h,payload:[].concat(Object(ee.a)(s),[{questionId:b.id,answer:u}])}),a({type:p,payload:""}),o+1<m.length?a({type:E,payload:o+1}):a({type:f,payload:!0})}else c.error("Place select an option")}},"Continue quiz"))},ae=(a(77),a(78),function(){var e=Object(n.useContext)(l),t=(e.state,e.dispatch);return r.a.createElement("div",{className:"logout-button-content"},r.a.createElement("div",{class:"navigation"},r.a.createElement("span",{class:"button",onClick:function(){t({type:g,payload:!1}),N.auth().signOut()}},r.a.createElement("div",{className:"logout-content"},r.a.createElement("i",{class:"fas fa-sign-out-alt"}),r.a.createElement("p",{class:"logout"},"LOGOUT")))))}),ne=function(){var e=Object(n.useContext)(l).state,t=e.showResults,a=e.answers,c=e.currentQuestion,s=e.isAuth,o=Object(M.f)();Object(n.useEffect)(function(){s||o.push("/login")},[s]);return r.a.createElement("div",null,t?r.a.createElement(H,{answers:a}):r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(K,{total:m.length,current:c}),r.a.createElement("div",{className:"container"},r.a.createElement(Y,null),r.a.createElement(Z,null),r.a.createElement("div",{className:"next-and-back-button"},r.a.createElement(te,null),r.a.createElement($,null)))))},re=a(20),ce=(a(79),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s={questions:m,currentQuestion:0,currentAnswers:"",answers:[],showResults:!1,error:"",questionResult:[],exactQuestion:0,user:null,isAuth:!1},d={position:i.b.TOP_RIGHT,timeout:3e3,offset:"10px",transition:i.c.FADE},p=Object(n.useReducer)(w,s),E=Object(o.a)(p,2),b=E[0],f=E[1],h=b.currentQuestion,O=b.answers;Object(n.useEffect)(function(){x.setItem("currentQuestion",h),localStorage.setItem("answers",JSON.stringify(O))});return Object(n.useEffect)(function(){c(!0),N.auth().onAuthStateChanged(function(e){e?(f({type:v,payload:e}),f({type:g,payload:!0}),c(!1)):(f({type:v,payload:null}),f({type:g,payload:!1}),c(!1))})},[]),a?r.a.createElement("div",{className:"loading-container"},r.a.createElement(I,null)):(console.log(b.answers),r.a.createElement(i.a,Object.assign({template:u.a},d),r.a.createElement(l.Provider,{value:{state:b,dispatch:f}},r.a.createElement(re.a,null,r.a.createElement(M.c,null,r.a.createElement(M.a,{exact:!0,path:"/",component:ne}),r.a.createElement(M.a,{exact:!0,path:"/login",component:U}))))))});s.a.render(r.a.createElement(ce,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9a86d56c.chunk.js.map