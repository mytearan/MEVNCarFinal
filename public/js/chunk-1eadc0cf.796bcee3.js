(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1eadc0cf"],{"44a3":function(e,r,t){"use strict";t("e8e9")},"73cf":function(e,r,t){"use strict";t.r(r);t("b0c0");var a=t("7a23"),n={class:"register"},s=Object(a["f"])("h2",null," Register ",-1),o={class:"row"},c={class:"card mx-auto"},i=Object(a["f"])("div",{class:"card-header text-white bg-primary"},[Object(a["f"])("h4",null,"Register")],-1),l={class:"card-body"},u={class:"form-group"},f=Object(a["f"])("label",{for:"username"},"Username",-1),m={class:"form-group"},d=Object(a["f"])("label",{for:"name"},"Name",-1),b={class:"form-group"},p=Object(a["f"])("label",{for:"email"},"Email",-1),j={class:"form-group"},O=Object(a["f"])("label",{for:"password"},"Password",-1),w={class:"form-group"},h=Object(a["f"])("label",{for:"confirm_password"},"Confirm Password",-1),g=Object(a["f"])("button",{class:"btn btn-primary",style:{margin:"5px"}},"Register",-1),y=Object(a["e"])("      "),v=Object(a["e"])("Already have an account");function U(e,r,t,U,_,k){var B=Object(a["u"])("router-link");return Object(a["o"])(),Object(a["c"])("div",n,[s,Object(a["f"])("div",o,[Object(a["f"])("div",c,[i,Object(a["f"])("div",l,[Object(a["f"])("form",{onSubmit:r[6]||(r[6]=Object(a["C"])((function(){return k.registerUser&&k.registerUser.apply(k,arguments)}),["prevent"]))},[Object(a["f"])("div",u,[f,Object(a["B"])(Object(a["f"])("input",{id:"username",type:"username",placeholder:"Username",name:"username","onUpdate:modelValue":r[1]||(r[1]=function(e){return _.username=e}),class:"form-control"},null,512),[[a["y"],_.username]])]),Object(a["f"])("div",m,[d,Object(a["B"])(Object(a["f"])("input",{id:"name",type:"name",placeholder:"Name",name:"name","onUpdate:modelValue":r[2]||(r[2]=function(e){return _.name=e}),class:"form-control"},null,512),[[a["y"],_.name]])]),Object(a["f"])("div",b,[p,Object(a["B"])(Object(a["f"])("input",{id:"email",type:"email",placeholder:"Email",name:"email","onUpdate:modelValue":r[3]||(r[3]=function(e){return _.email=e}),class:"form-control"},null,512),[[a["y"],_.email]])]),Object(a["f"])("div",j,[O,Object(a["B"])(Object(a["f"])("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",id:"password","onUpdate:modelValue":r[4]||(r[4]=function(e){return _.password=e})},null,512),[[a["y"],_.password]])]),Object(a["f"])("div",w,[h,Object(a["B"])(Object(a["f"])("input",{type:"password",class:"form-control",placeholder:"Confirm Password",name:"confirm_password",id:"confirm_password","onUpdate:modelValue":r[5]||(r[5]=function(e){return _.confirm_password=e})},null,512),[[a["y"],_.confirm_password]])]),g,y,Object(a["f"])(B,{to:"/login",class:"card-link"},{default:Object(a["A"])((function(){return[v]})),_:1})],32)])])])])}var _=t("5530"),k=t("5502"),B={data:function(){return{username:"",password:"",confirm_password:"",name:"",email:""}},methods:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["register"])),{},{registerUser:function(){var e=this,r={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,name:this.name};this.register(r).then((function(r){r.data.success&&e.$router.push("login")}))}})};t("44a3");B.render=U;r["default"]=B},b0c0:function(e,r,t){var a=t("83ab"),n=t("9bf2").f,s=Function.prototype,o=s.toString,c=/^\s*function ([^ (]*)/,i="name";a&&!(i in s)&&n(s,i,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(e){return""}}})},e8e9:function(e,r,t){}}]);
//# sourceMappingURL=chunk-1eadc0cf.796bcee3.js.map