(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{28:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(14),i=c.n(s),r=(c(36),c(37),c(13)),o=c(3),l=c(12),u=(c(38),c(30)),j=c.n(u),d=c(29),b=c.n(d).a.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"601c3940f106bc4a2e4c8113cf13cd55",language:"en-US"}}),m="https://image.tmdb.org/t/p/original",v=function(e){return b.get("/movie/".concat(e))},h=c(1),O=a.a.createContext(),p=function(e){var t=e.children,c=Object(n.useState)("popular"),a=Object(l.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)([]),o=Object(l.a)(r,2),u=o[0],j=o[1],d=Object(n.useState)([]),b=Object(l.a)(d,2),m=b[0],p=b[1];return Object(n.useEffect)((function(){v(s).then((function(e){j(e.data.results)}))}),[s]),Object(h.jsx)(O.Provider,{value:{movies:u,query:s,setquery:i,searchMovies:m,setSearchMovies:p},children:t})},x=function(){return Object(n.useContext)(O)};var f=function(){Object(o.g)().id;var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(o.f)(),i=x(),u=i.setSearchMovies,d=i.query,m=i.setquery,v=function(e){window.pageYOffset>70?document.querySelector(".navbar").classList.add("active"):document.querySelector(".navbar").classList.remove("active")};return Object(n.useEffect)((function(){return window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}),[]),Object(h.jsxs)("div",{className:"navbar",children:[Object(h.jsxs)(r.b,{to:"/",children:[Object(h.jsx)(j.a,{className:"logo"}),Object(h.jsx)("h2",{children:"KMOVIE"})]}),Object(h.jsxs)("div",{className:"navbar__menu",onClick:function(e){document.querySelector(".form").classList.toggle("show"),document.querySelector(".navbar__buttons").classList.toggle("show"),document.querySelector(".navbar__menu").classList.toggle("show")},children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]}),Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=c.trim();t.length>=2?b.get("/search/movie",{params:{query:t}}).then((function(e){console.log(e.data.results),u(e.data.results),s.push("/search")})).catch((function(e){return s.push("/")})):s.push("/")},className:"form",children:Object(h.jsx)("input",{className:"navbar__input",placeholder:"search a movie...",value:c,onChange:function(e){return a(e.target.value)}})}),Object(h.jsxs)("div",{className:"navbar__buttons ",children:[Object(h.jsx)("button",{className:"".concat("popular"==d?"active":null),onClick:function(){return m("popular")},children:"Popular"}),Object(h.jsx)("button",{className:"".concat("now_playing"==d?"active":null),onClick:function(){return m("now_playing")},children:"Now Playing"}),Object(h.jsx)("button",{className:"".concat("top_rated"==d?"active":null),onClick:function(){return m("top_rated")},children:"Top Rated"}),Object(h.jsx)("button",{className:"".concat("upcoming"==d?"active":null),onClick:function(){return m("upcoming")},children:"Upcoming"})]})]})};c(67);var g=function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsxs)("h1",{children:["Loading ",Object(h.jsx)("span",{children:"."}),Object(h.jsx)("span",{children:"."}),Object(h.jsx)("span",{children:"."})]})})};c(68);var _=function(e){var t=e.image,c=e.title,n=e.rating,a=e.id;return console.log(a),Object(h.jsx)(r.b,{to:"/search/".concat(a),children:Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:"".concat(m).concat(t)})}),Object(h.jsxs)("div",{className:"movie__info",children:[Object(h.jsx)("p",{className:"title",children:c}),Object(h.jsx)("div",{className:"subrating",children:Object(h.jsx)("p",{className:"rating",children:n})})]})]})})};c(28);var N=function(){var e=x(),t=e.movies,c=e.query,n=e.setquery;return 0==t.length?Object(h.jsx)(g,{}):Object(h.jsxs)("div",{className:"home",children:[Object(h.jsxs)("div",{className:"home__buttons",children:[Object(h.jsx)("button",{className:"".concat("popular"==c?"active":null),onClick:function(){return n("popular")},children:"Popular"}),Object(h.jsx)("button",{className:"".concat("now_playing"==c?"active":null),onClick:function(){return n("now_playing")},children:"Now Playing"}),Object(h.jsx)("button",{className:"".concat("top_rated"==c?"active":null),onClick:function(){return n("top_rated")},children:"Top Rated"}),Object(h.jsx)("button",{className:"".concat("upcoming"==c?"active":null),onClick:function(){return n("upcoming")},children:"Upcoming"})]}),Object(h.jsx)("div",{className:"home__center",children:t.map((function(e){return Object(h.jsx)(_,{image:e.poster_path,title:e.title,rating:e.vote_average,id:e.id},e.id)}))}),Object(h.jsx)("div",{className:"footer"})]})};var y=function(){var e=x().searchMovies;return console.log(e),Object(h.jsxs)("div",{className:"home",children:[Object(h.jsx)("div",{className:"home__center",children:e.map((function(e){return Object(h.jsx)(_,{image:e.poster_path,title:e.title,rating:e.vote_average,id:e.id},e.id)}))}),Object(h.jsx)("div",{className:"footer"})]})};c(69),c(70);var w=function(e){var t=e.pic,c=e.name;return Object(h.jsxs)("div",{className:"actor",children:[Object(h.jsx)("img",{src:"".concat(m).concat(t)}),Object(h.jsx)("h4",{children:c})]})};var S=function(){var e=Object(o.g)().id,t=Object(n.useState)(null),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(null),r=Object(l.a)(i,2),u=r[0],j=r[1];if(Object(n.useEffect)((function(){v(e).then((function(e){console.log(e.data),s(e.data)})),function(e){return b.get("/movie/".concat(e,"/credits"))}(e).then((function(e){j(e.data.cast)}))}),[]),Object(n.useEffect)((function(){null!==a&&(document.querySelector(".single").style.background="url(".concat(m).concat(a.poster_path,")"))}),[a]),null==a)return Object(h.jsx)(g,{});var d=a.title,O=a.overview,p=a.vote_average,x=a.status;return a.tagline,Object(h.jsxs)("div",{className:"single ".concat(null!==a?"active":null),children:[Object(h.jsxs)("div",{className:"single__center",children:[Object(h.jsxs)("div",{className:"single__top",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w1280").concat(a.poster_path)})}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{className:"rating",children:Object(h.jsx)("span",{children:p})}),Object(h.jsx)("p",{className:"movie__title",children:d}),Object(h.jsx)("p",{className:"movie__status",children:x}),Object(h.jsx)("p",{className:"movie__overview",children:O})]})]}),Object(h.jsx)("h2",{children:"CAST"}),Object(h.jsx)("div",{className:"single__mid",children:Object(h.jsx)("div",{className:"crew",children:u&&u.map((function(e){var t=e.id;return Object(h.jsx)(w,{pic:e.profile_path,name:e.name},t)}))})})]}),Object(h.jsx)("div",{className:"footer"})]})};var C=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsxs)(r.a,{basename:"/movie-app",children:[Object(h.jsx)(f,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(h.jsx)(o.a,{exact:!0,path:"/search",component:y}),Object(h.jsx)(o.a,{path:"/search/:id",component:S})]})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p,{children:Object(h.jsx)(C,{})})}),document.getElementById("root")),k()}},[[72,1,2]]]);
//# sourceMappingURL=main.91e94130.chunk.js.map