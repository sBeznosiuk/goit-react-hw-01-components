(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},16:function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},25:function(e,t,a){"use strict";a.r(t);var n,c,s,i=a(1),r=a.n(i),l=a(11),d=a.n(l),o=a.p+"static/media/preview.c18b8089.png",b=a(2),j=a(3),m=j.a.div(n||(n=Object(b.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nborder: 1px solid black;\nborder-radius: 5px;\nfont-size: 20px;\ncolor: red;\n"]))),p=j.a.img(c||(c=Object(b.a)(["\nborder-radius: 50%;\nmargin-top: 70px;\n"]))),u=j.a.span(s||(s=Object(b.a)(["\nmargin-right: 20px;\n"]))),f=a(0),x=function(e){var t=e.followers,a=e.views,n=e.likes;return Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[Object(f.jsx)(u,{className:"label",children:"Followers"}),Object(f.jsx)("span",{className:"quantity",children:t})]},t),Object(f.jsxs)("li",{children:[Object(f.jsx)(u,{className:"label",children:"Views"}),Object(f.jsx)("span",{className:"quantity",children:a})]},a),Object(f.jsxs)("li",{children:[Object(f.jsx)(u,{className:"label",children:"Likes"}),Object(f.jsx)("span",{className:"quantity",children:n})]},n)]})},h=function(e){var t=e.name,a=e.tag,n=e.location,c=e.avatar,s=e.stats;return Object(f.jsx)("div",{className:"profile",children:Object(f.jsxs)(m,{className:"description",children:[Object(f.jsx)(p,{src:c,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"avatar",width:"120"}),Object(f.jsx)("p",{className:"name",children:t}),Object(f.jsx)("p",{className:"tag",children:"@".concat(a)}),Object(f.jsx)("p",{className:"location",children:n}),Object(f.jsx)(x,{followers:s.followers,views:s.views,likes:s.likes})]})})};h.defaultProps={avatar:o};var y,O,g,v=h,w=a(4),N=a(8),k=j.a.section(y||(y=Object(b.a)(["\n    display: flex;\n    color: black;\n    flex-direction: column;\n    align-items: center;\n"]))),U=j.a.ul(O||(O=Object(b.a)(["\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    border-right: 2px solid black;\n    border-left: 2px solid black;\n"]))),J=j.a.li(g||(g=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 80;\n    height: 80;\n    margin-bottom: 0;\n"]))),S=function(e){var t=e.title,a=e.stats;return Object(f.jsxs)(k,{className:"statistics",children:[t&&Object(f.jsx)("h2",{className:"title",children:t}),Object(f.jsx)(U,{className:"stat-list",children:a.map((function(e){var t=e.id,a=e.label,n=e.percentage;return Object(f.jsxs)(J,{className:"item",style:{backgroundColor:"#"+Math.floor(16777215*Math.random()).toString(16)},children:[Object(f.jsx)("span",{className:"label",children:a}),Object(f.jsx)("span",{className:"percentage",children:n+"%"})]},t)}))})]})};S.defaultProps={title:""};var L,A=S,C=a(15),M=a(9),P=a.n(M),G=function(e){var t=e.friends;return Object(f.jsx)("ul",{className:P.a.list,children:t.map((function(e){return Object(f.jsxs)("li",{className:P.a.item,style:{backgroundColor:e.isOnline?"green":"red"},children:[Object(f.jsx)("span",{className:"status",children:e.isOnline}),Object(f.jsx)("img",{className:"avatar",src:e.avatar,alt:e.name,width:"48"}),Object(f.jsx)("p",{className:"name",children:e.name})]},e.id)}))})},_=a(16),D=j.a.table(L||(L=Object(b.a)(["\nbackground-color: #eeeeee;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\n\n& thead, & tbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\n& th, & td {\n    padding: 20px 100px 20px 100px;\n}\n"]))),F=function(e){var t=e.items;return Object(f.jsxs)(D,{className:"transaction-history",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Type"}),Object(f.jsx)("th",{children:"Amount"}),Object(f.jsx)("th",{children:"Currency"})]})}),Object(f.jsx)("tbody",{children:t.map((function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.type}),Object(f.jsx)("td",{children:e.amount}),Object(f.jsx)("td",{children:e.currency})]},e.id)}))})]})},q=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(v,{name:w.name,tag:w.tag,location:w.location,avatar:w.avatar,stats:w.stats}),Object(f.jsx)(A,{title:"Upload stats",stats:N}),Object(f.jsx)(A,{stats:N}),Object(f.jsx)(G,{friends:C}),Object(f.jsx)(F,{items:_})]})};a(24);d.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg","stats":{"followers":5603,"views":4827,"likes":1308}}')},8:function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},9:function(e,t,a){e.exports={list:"FriendList_list__uSzv8",item:"FriendList_item__37vAA"}}},[[25,1,2]]]);
//# sourceMappingURL=main.496a29e5.chunk.js.map