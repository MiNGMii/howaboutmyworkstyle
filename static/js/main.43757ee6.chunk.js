(this.webpackJsonphowaboutmyworkstyle=this.webpackJsonphowaboutmyworkstyle||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),r=n(28),o=n.n(r),s=n(16),i=n(20),u=n(5),j=n(15),b=n.n(j),p=n(21),O=n(4),h=function(){var t=Object(u.f)(),e=function(){var e=Object(p.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t.push("/quiz");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"\ub098\uc758 \uc5c5\ubb34 \uc2a4\ud0c0\uc77c \ud14c\uc2a4\ud2b8"}),Object(O.jsx)("p",{children:"Created by mingmii"}),Object(O.jsx)("button",{onClick:e,name:"start",children:"\uc2dc\uc791\ud558\uae30"})]})},d=n(22),l=n(30),y=n(17);n(42),n(48),n(47);y.a.initializeApp({apiKey:"AIzaSyCPhlE6WbT2VeN2X3L6zUo6SzVoV8rR3_E",authDomain:"howaboutmyworkstyle.firebaseapp.com",projectId:"howaboutmyworkstyle",storageBucket:"howaboutmyworkstyle.appspot.com",messagingSenderId:"397286902004",appId:"1:397286902004:web:71697b10e45c5c651276a1"});y.a,y.a.auth();var x=y.a.firestore(),f=(y.a.storage(),function(t){var e=t.typeObj,n=t.setTypeObj,a=Object(u.f)(),r=Object(c.useState)("1"),o=Object(s.a)(r,2),i=o[0],j=o[1],h=Object(c.useState)({text:""}),y=Object(s.a)(h,2),f=y[0],m=y[1],v=Object(c.useState)({text:""}),w=Object(s.a)(v,2),S=w[0],g=w[1];Object(c.useEffect)((function(){e||n({typeState:"IE",questionNo:1,IE:0,NS:0,FT:0,PJ:0}),j(e.questionNo.toString()),x.collection("questions").where("quizNo","==",i).orderBy("typeNo","asc").get().then((function(t){var e=t.docs.map((function(t){return Object(l.a)({id:t.id},t.data())}));m(e[0]),g(e[1])})).catch((function(t){console.log("Error getting documents: ",t)}))}),[]);var q=function(){var t=Object(p.a)(b.a.mark((function t(c){var r,o,s,i,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.questionNo>=20&&a.push("/result"),r="question1"==c.target.name?f:S,o=e.questionNo+1,s=e.type,i=e["".concat(s)]+r.point,u=6==o?"NS":11==o?"FT":16==o?"PJ":s,n(Object(d.a)({typeState:u,questionNo:o},s,i)),a.push("/quiz");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["Quiz",i]}),Object(O.jsx)("button",{onClick:q,name:"question1",children:f.text}),Object(O.jsx)("button",{onClick:q,name:"question2",children:S.text})]})}),m=function(t){var e=t.typeObj;return Object(O.jsxs)("div",{children:["Result",Object(O.jsxs)("p",{children:["IE: ",e.IE,", NS: ",e.NS,", FT: ",e.FT,", PJ: ",e.PJ,","]})]})};var v=function(t){var e=t.typeObj,n=t.setTypeObj;return Object(O.jsx)(i.a,{children:Object(O.jsx)(u.c,{children:Object(O.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(O.jsx)(u.a,{exact:!0,path:"/",children:Object(O.jsx)(h,{})}),Object(O.jsx)(u.a,{exact:!0,path:"/quiz",children:Object(O.jsx)(f,{typeObj:e,setTypeObj:n})}),Object(O.jsx)(u.a,{exact:!0,path:"/result",children:Object(O.jsx)(m,{typeObj:e})})]})})})};var w=function(){var t=Object(c.useState)({typeState:"IE",questionNo:1,IE:0,NS:0,FT:0,PJ:0}),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(O.jsx)(v,{typeObj:n,setTypeObj:a})};n(45);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.43757ee6.chunk.js.map