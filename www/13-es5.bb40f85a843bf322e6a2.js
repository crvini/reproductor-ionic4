(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{L6id:function(t,l,n){"use strict";n.r(l);var e=n("CcnG"),i=function(){return function(){}}(),s=n("pMnS"),a=n("oBZk"),u=n("ZZ/e"),r=n("Ip0R"),o=n("mrSG"),c=n("XSsR"),h=function(){function t(){}return t.prototype.getArtists=function(){return c.a},t.prototype.getNewReleases=function(){return fetch("https://platzi-music-api.now.sh/browse/new-releases").then((function(t){return t.json()}))},t.prototype.getArtistTopTracks=function(t){return fetch("https://platzi-music-api.now.sh/artists/"+t+"/top-tracks?country=CO").then((function(t){return t.json()}))},t.prototype.getAlbumTracks=function(t){return fetch("https://platzi-music-api.now.sh/albums/"+t+"/tracks?country=CO").then((function(t){return t.json()}))},t.ngInjectableDef=e.Nb({factory:function(){return new t},token:t,providedIn:"root"}),t}(),p=n("GkKi"),f=function(){function t(t,l){this.musicService=t,this.modalController=l,this.slideOps={initialSlide:2,slidesPerView:4,centeredSlides:!0,speed:400},this.songs=[],this.albums=[],this.artists=[],this.song={preview_url:"",playing:!1,name:""}}return t.prototype.ionViewDidEnter=function(){var t=this;this.musicService.getNewReleases().then((function(l){t.artists=t.musicService.getArtists(),console.log(t.artists),t.songs=l.albums.items.filter((function(t){return"single"==t.album_type})),t.albums=l.albums.items.filter((function(t){return"album"==t.album_type}))}))},t.prototype.showSongs=function(t){return o.b(this,void 0,void 0,(function(){var l,n,e=this;return o.e(this,(function(i){switch(i.label){case 0:return[4,this.musicService.getArtistTopTracks(t.id)];case 1:return l=i.sent(),[4,this.modalController.create({component:p.a,componentProps:{songs:l.tracks,artist:t.name}})];case 2:return(n=i.sent()).onDidDismiss().then((function(t){e.song=t.data})),[4,n.present()];case 3:return[2,i.sent()]}}))}))},t.prototype.play=function(){var t=this;this.currentSong=new Audio(this.song.preview_url),this.currentSong.play(),this.currentSong.addEventListener("timeupdate",(function(){t.newTime=t.currentSong.currentTime*(t.currentSong.duration/10)/100})),this.song.playing=!0},t.prototype.pause=function(){this.currentSong.pause(),this.song.playing=!1},t.prototype.parseTime=function(t){if(t){var l=parseInt(t.toString().split(".")[0],10),n=Math.floor(l/60).toString();1==n.length&&(n="0"+n);var e=(l%60).toString();return 1==e.length&&(e="0"+e),n+":"+e}},t}(),d=e.rb({encapsulation:0,styles:[["ion-avatar[_ngcontent-%COMP%]{height:120px;width:90%}ion-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:90px;height:90px}ion-avatar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.square-avatar[_ngcontent-%COMP%]{--border-radius:0}"]],data:{}});function b(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,6,"ion-slide",[],null,null,null,a.Q,a.s)),e.sb(1,49152,null,0,u.ob,[e.h,e.k,e.z],null,null),(t()(),e.tb(2,0,null,0,4,"ion-avatar",[],null,[[null,"click"]],(function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.showSongs(t.context.$implicit)&&e),e}),a.z,a.b)),e.sb(3,49152,null,0,u.e,[e.h,e.k,e.z],null,null),(t()(),e.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),e.tb(5,0,null,0,1,"span",[],null,null,null,null,null)),(t()(),e.Jb(6,null,["",""]))],null,(function(t,l){t(l,4,0,l.context.$implicit.images[0].url),t(l,6,0,l.context.$implicit.name)}))}function m(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,3,"ion-slides",[],null,null,null,a.R,a.t)),e.sb(1,49152,null,0,u.pb,[e.h,e.k,e.z],{options:[0,"options"]},null),(t()(),e.ib(16777216,null,0,1,null,b)),e.sb(3,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(t,l){var n=l.component;t(l,1,0,n.slideOps),t(l,3,0,n.artists)}),null)}function g(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,6,"ion-slide",[],null,null,null,a.Q,a.s)),e.sb(1,49152,null,0,u.ob,[e.h,e.k,e.z],null,null),(t()(),e.tb(2,0,null,0,4,"ion-avatar",[["class","square-avatar"]],null,null,null,a.z,a.b)),e.sb(3,49152,null,0,u.e,[e.h,e.k,e.z],null,null),(t()(),e.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),e.tb(5,0,null,0,1,"span",[],null,null,null,null,null)),(t()(),e.Jb(6,null,["",""]))],null,(function(t,l){t(l,4,0,l.context.$implicit.images[0].url),t(l,6,0,l.context.$implicit.name)}))}function y(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,3,"ion-slides",[],null,null,null,a.R,a.t)),e.sb(1,49152,null,0,u.pb,[e.h,e.k,e.z],{options:[0,"options"]},null),(t()(),e.ib(16777216,null,0,1,null,g)),e.sb(3,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(t,l){var n=l.component;t(l,1,0,n.slideOps),t(l,3,0,n.albums)}),null)}function w(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,6,"ion-slide",[],null,null,null,a.Q,a.s)),e.sb(1,49152,null,0,u.ob,[e.h,e.k,e.z],null,null),(t()(),e.tb(2,0,null,0,4,"ion-avatar",[["class","square-avatar"]],null,null,null,a.z,a.b)),e.sb(3,49152,null,0,u.e,[e.h,e.k,e.z],null,null),(t()(),e.tb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(t()(),e.tb(5,0,null,0,1,"span",[],null,null,null,null,null)),(t()(),e.Jb(6,null,["",""]))],null,(function(t,l){t(l,4,0,l.context.$implicit.images[0].url),t(l,6,0,l.context.$implicit.name)}))}function v(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,3,"ion-slides",[],null,null,null,a.R,a.t)),e.sb(1,49152,null,0,u.pb,[e.h,e.k,e.z],{options:[0,"options"]},null),(t()(),e.ib(16777216,null,0,1,null,w)),e.sb(3,278528,null,0,r.h,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(t,l){var n=l.component;t(l,1,0,n.slideOps),t(l,3,0,n.songs)}),null)}function k(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,7,"ion-row",[],null,null,null,a.P,a.r)),e.sb(1,49152,null,0,u.hb,[e.h,e.k,e.z],null,null),(t()(),e.tb(2,0,null,0,2,"ion-col",[["class","ion-text-start"]],null,null,null,a.C,a.e)),e.sb(3,49152,null,0,u.r,[e.h,e.k,e.z],null,null),(t()(),e.Jb(4,0,["",""])),(t()(),e.tb(5,0,null,0,2,"ion-col",[["class","ion-text-end"]],null,null,null,a.C,a.e)),e.sb(6,49152,null,0,u.r,[e.h,e.k,e.z],null,null),(t()(),e.Jb(7,0,["",""]))],null,(function(t,l){var n=l.component;t(l,4,0,n.parseTime(n.currentSong.currentTime)||"00:00"),t(l,7,0,n.parseTime(n.currentSong.duration)||"00:00")}))}function x(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,1,"ion-icon",[["name","play"]],null,[[null,"click"]],(function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.play()&&e),e}),a.H,a.j)),e.sb(1,49152,null,0,u.A,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(t,l){t(l,1,0,"play")}),null)}function z(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,1,"ion-icon",[["name","pause"]],null,[[null,"click"]],(function(t,l,n){var e=!0;return"click"===l&&(e=!1!==t.component.pause()&&e),e}),a.H,a.j)),e.sb(1,49152,null,0,u.A,[e.h,e.k,e.z],{name:[0,"name"]},null)],(function(t,l){t(l,1,0,"pause")}),null)}function C(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,7,"ion-header",[],null,null,null,a.G,a.i)),e.sb(1,49152,null,0,u.z,[e.h,e.k,e.z],null,null),(t()(),e.tb(2,0,null,0,5,"ion-toolbar",[],null,null,null,a.V,a.x)),e.sb(3,49152,null,0,u.Ab,[e.h,e.k,e.z],null,null),(t()(),e.tb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,null,null,a.B,a.d)),e.sb(5,49152,null,0,u.j,[e.h,e.k,e.z],null,null),(t()(),e.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.M,a.p)),e.sb(7,49152,null,0,u.P,[e.h,e.k,e.z],null,null),(t()(),e.tb(8,0,null,null,14,"ion-content",[["padding",""]],null,null,null,a.D,a.f)),e.sb(9,49152,null,0,u.s,[e.h,e.k,e.z],null,null),e.sb(10,16384,null,0,u.c,[e.k],null,null),(t()(),e.tb(11,0,null,0,1,"h1",[],null,null,null,null,null)),(t()(),e.Jb(-1,null,["Artistas"])),(t()(),e.ib(16777216,null,0,1,null,m)),e.sb(14,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.tb(15,0,null,0,1,"h1",[],null,null,null,null,null)),(t()(),e.Jb(-1,null,["Albums"])),(t()(),e.ib(16777216,null,0,1,null,y)),e.sb(18,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.tb(19,0,null,0,1,"h1",[],null,null,null,null,null)),(t()(),e.Jb(-1,null,["Canciones"])),(t()(),e.ib(16777216,null,0,1,null,v)),e.sb(22,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.tb(23,0,null,null,26,"ion-footer",[],null,null,null,a.E,a.g)),e.sb(24,49152,null,0,u.x,[e.h,e.k,e.z],null,null),(t()(),e.tb(25,0,null,0,3,"ion-grid",[],null,null,null,a.F,a.h)),e.sb(26,49152,null,0,u.y,[e.h,e.k,e.z],null,null),(t()(),e.ib(16777216,null,0,1,null,k)),e.sb(28,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.tb(29,0,null,0,1,"ion-progress-bar",[],null,null,null,a.O,a.q)),e.sb(30,49152,null,0,u.X,[e.h,e.k,e.z],{value:[0,"value"]},null),(t()(),e.tb(31,0,null,0,18,"ion-grid",[],null,null,null,a.F,a.h)),e.sb(32,49152,null,0,u.y,[e.h,e.k,e.z],null,null),(t()(),e.tb(33,0,null,0,16,"ion-row",[],null,null,null,a.P,a.r)),e.sb(34,49152,null,0,u.hb,[e.h,e.k,e.z],null,null),(t()(),e.tb(35,0,null,0,3,"ion-col",[["size","1"]],null,null,null,a.C,a.e)),e.sb(36,49152,null,0,u.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(t()(),e.tb(37,0,null,0,1,"ion-icon",[["name","heart"]],null,null,null,a.H,a.j)),e.sb(38,49152,null,0,u.A,[e.h,e.k,e.z],{name:[0,"name"]},null),(t()(),e.tb(39,0,null,0,4,"ion-col",[["size","10"]],null,null,null,a.C,a.e)),e.sb(40,49152,null,0,u.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(t()(),e.tb(41,0,null,0,2,"ion-text",[],null,null,null,a.T,a.v)),e.sb(42,49152,null,0,u.vb,[e.h,e.k,e.z],null,null),(t()(),e.Jb(43,0,["",""])),(t()(),e.tb(44,0,null,0,5,"ion-col",[["size","1"]],null,null,null,a.C,a.e)),e.sb(45,49152,null,0,u.r,[e.h,e.k,e.z],{size:[0,"size"]},null),(t()(),e.ib(16777216,null,0,1,null,x)),e.sb(47,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(t()(),e.ib(16777216,null,0,1,null,z)),e.sb(49,16384,null,0,r.i,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(t,l){var n=l.component;t(l,14,0,n.artists.length),t(l,18,0,n.albums.length),t(l,22,0,n.songs.length),t(l,28,0,n.currentSong),t(l,30,0,n.newTime),t(l,36,0,"1"),t(l,38,0,"heart"),t(l,40,0,"10"),t(l,45,0,"1"),t(l,47,0,!n.song.playing),t(l,49,0,n.song.playing)}),(function(t,l){t(l,43,0,l.component.song.name||"A\xfan no has seleccionado cancion")}))}function D(t){return e.Kb(0,[(t()(),e.tb(0,0,null,null,1,"app-home",[],null,null,null,C,d)),e.sb(1,49152,null,0,f,[h,u.Fb],null,null)],null,null)}var O=e.pb("app-home",f,D,{},{},[]),P=n("gIcY"),S=n("ZYCi");n.d(l,"HomePageModuleNgFactory",(function(){return I}));var I=e.qb(i,[],(function(t){return e.Cb([e.Db(512,e.j,e.bb,[[8,[s.a,O]],[3,e.j],e.x]),e.Db(4608,r.k,r.j,[e.u,[2,r.q]]),e.Db(4608,P.n,P.n,[]),e.Db(4608,u.a,u.a,[e.z,e.g]),e.Db(4608,u.Fb,u.Fb,[u.a,e.j,e.q]),e.Db(4608,u.Jb,u.Jb,[u.a,e.j,e.q]),e.Db(1073742336,r.b,r.b,[]),e.Db(1073742336,P.m,P.m,[]),e.Db(1073742336,P.f,P.f,[]),e.Db(1073742336,u.Cb,u.Cb,[]),e.Db(1073742336,S.n,S.n,[[2,S.s],[2,S.m]]),e.Db(1073742336,i,i,[]),e.Db(1024,S.k,(function(){return[[{path:"",component:f}]]}),[])])}))},XSsR:function(t){t.exports={a:[{external_urls:{spotify:"https://open.spotify.com/artist/25z14Qw0e8uN0dIaWVe2Mk"},followers:{href:null,total:3541},genres:["smooth jazz"],href:"https://api.spotify.com/v1/artists/25z14Qw0e8uN0dIaWVe2Mk",id:"25z14Qw0e8uN0dIaWVe2Mk",images:[{height:640,url:"https://i.scdn.co/image/398aeedb219a61b06e8628a2f72cc993871d55df",width:640},{height:320,url:"https://i.scdn.co/image/90f57c3a89cab8bf796ccd278bc20b318e050c85",width:320},{height:160,url:"https://i.scdn.co/image/d32016dc5837941de2acd1cd7ce7c1eaf95d50eb",width:160}],name:"Nestor Torres",popularity:38,type:"artist",uri:"spotify:artist:25z14Qw0e8uN0dIaWVe2Mk"},{external_urls:{spotify:"https://open.spotify.com/artist/05fG473iIaoy82BF1aGhL8"},followers:{href:null,total:4819254},genres:["alternative metal","nu metal","post-grunge","rap metal"],href:"https://api.spotify.com/v1/artists/05fG473iIaoy82BF1aGhL8",id:"05fG473iIaoy82BF1aGhL8",images:[{height:640,url:"https://i.scdn.co/image/a7958184e76eaec48937485e75d9f7e6d26d097f",width:640},{height:320,url:"https://i.scdn.co/image/0da8dc59c5ae97e7364425120ce0453d82947158",width:320},{height:160,url:"https://i.scdn.co/image/bc218ce0a94f780ecd7741c522ba783ee0de3d2c",width:160}],name:"Slipknot",popularity:86,type:"artist",uri:"spotify:artist:05fG473iIaoy82BF1aGhL8"},{external_urls:{spotify:"https://open.spotify.com/artist/5ZNxiPcbKgaNcBrERMpqeu"},followers:{href:null,total:1984381},genres:["celtic metal","medieval rock","rock en espanol","spanish metal"],href:"https://api.spotify.com/v1/artists/5ZNxiPcbKgaNcBrERMpqeu",id:"5ZNxiPcbKgaNcBrERMpqeu",images:[{height:640,url:"https://i.scdn.co/image/8b3e6679265afb7afc73e7fff38811faf45d2f5a",width:640},{height:320,url:"https://i.scdn.co/image/5b75ee6d0fb06165b9fb308e7f0c4c6b7a862fd8",width:320},{height:160,url:"https://i.scdn.co/image/235bb39dd64c9c9f9362721971d4fc7418671b36",width:160}],name:"M\xe4go de Oz",popularity:71,type:"artist",uri:"spotify:artist:5ZNxiPcbKgaNcBrERMpqeu"},{external_urls:{spotify:"https://open.spotify.com/artist/1Qp56T7n950O3EGMsSl81D"},followers:{href:null,total:719868},genres:["metal"],href:"https://api.spotify.com/v1/artists/1Qp56T7n950O3EGMsSl81D",id:"1Qp56T7n950O3EGMsSl81D",images:[{height:640,url:"https://i.scdn.co/image/4d4e18d9cf20d3039201fb4f185e0e498275cb06",width:640},{height:320,url:"https://i.scdn.co/image/d40e20479070b844405bb4788fc6bc618616ac28",width:320},{height:160,url:"https://i.scdn.co/image/e406b600fc1bae338d27aea2b78623b63e4509a0",width:160}],name:"Ghost",popularity:71,type:"artist",uri:"spotify:artist:1Qp56T7n950O3EGMsSl81D"},{external_urls:{spotify:"https://open.spotify.com/artist/0Up8AZmXDecXiMirZhRLmw"},followers:{href:null,total:127702},genres:["cantautor","ecuadorian pop","latin","latin pop"],href:"https://api.spotify.com/v1/artists/0Up8AZmXDecXiMirZhRLmw",id:"0Up8AZmXDecXiMirZhRLmw",images:[{height:640,url:"https://i.scdn.co/image/39b41aa0f90818329da6b7109d1c8f0e559da86a",width:640},{height:320,url:"https://i.scdn.co/image/40663ca7a231fee20ad44d5a3d2a763385e4a6bd",width:320},{height:160,url:"https://i.scdn.co/image/85de1481843feffe04c0b86eb15022a343c18e71",width:160}],name:"Alberto Plaza",popularity:51,type:"artist",uri:"spotify:artist:0Up8AZmXDecXiMirZhRLmw"},{external_urls:{spotify:"https://open.spotify.com/artist/0yNSzH5nZmHzeE2xn6Xshb"},followers:{href:null,total:1869373},genres:["latin","latin afrobeat","latin alternative","latin hip hop","puerto rican rock","rap conciencia","reggaeton","rock en espanol","tropical"],href:"https://api.spotify.com/v1/artists/0yNSzH5nZmHzeE2xn6Xshb",id:"0yNSzH5nZmHzeE2xn6Xshb",images:[{height:719,url:"https://i.scdn.co/image/edabfb79fbf3d71ad9d0961a7b199a1470fe5372",width:1e3},{height:460,url:"https://i.scdn.co/image/a3c9dd492b973e5d5ebfd957b30325972c16d2d4",width:640},{height:144,url:"https://i.scdn.co/image/896866e81c4a3d873ce3a28b2396f75212d192a0",width:200},{height:46,url:"https://i.scdn.co/image/28b48ccc46a8cb61fbf3e67867fc7794acc6dc85",width:64}],name:"Calle 13",popularity:75,type:"artist",uri:"spotify:artist:0yNSzH5nZmHzeE2xn6Xshb"},{external_urls:{spotify:"https://open.spotify.com/artist/6wWVKhxIU2cEi0K81v7HvP"},followers:{href:null,total:3273221},genres:["alternative metal","german metal","industrial","industrial metal","industrial rock","neue deutsche harte","nu metal"],href:"https://api.spotify.com/v1/artists/6wWVKhxIU2cEi0K81v7HvP",id:"6wWVKhxIU2cEi0K81v7HvP",images:[{height:640,url:"https://i.scdn.co/image/cdf344b2f5124d1f2f1217c45f12096730c70560",width:640},{height:320,url:"https://i.scdn.co/image/d7bba2e8eb624d93d8cc7cb57d9ba5fb35f0f901",width:320},{height:160,url:"https://i.scdn.co/image/019518862c16964fa30906a55ad2cd46f3f35c1a",width:160}],name:"Rammstein",popularity:85,type:"artist",uri:"spotify:artist:6wWVKhxIU2cEi0K81v7HvP"},{external_urls:{spotify:"https://open.spotify.com/artist/5lwmRuXgjX8xIwlnauTZIP"},followers:{href:null,total:8678778},genres:["bachata","latin","tropical"],href:"https://api.spotify.com/v1/artists/5lwmRuXgjX8xIwlnauTZIP",id:"5lwmRuXgjX8xIwlnauTZIP",images:[{height:640,url:"https://i.scdn.co/image/573323ce254851c2c0b616758c9e9413948cd16b",width:640},{height:320,url:"https://i.scdn.co/image/c4cca3e1c615a35b5d4dc14619d0ccdefacb7f23",width:320},{height:160,url:"https://i.scdn.co/image/22265d9251edcc040b5aaad9432322ac0e03b336",width:160}],name:"Romeo Santos",popularity:86,type:"artist",uri:"spotify:artist:5lwmRuXgjX8xIwlnauTZIP"},{external_urls:{spotify:"https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d"},followers:{href:null,total:18921676},genres:["glam rock","rock"],href:"https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d",id:"1dfeR4HaWDbWqFHLkxsg1d",images:[{height:806,url:"https://i.scdn.co/image/b040846ceba13c3e9c125d68389491094e7f2982",width:999},{height:516,url:"https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42",width:640},{height:161,url:"https://i.scdn.co/image/c06971e9ff81696699b829484e3be165f4e64368",width:200},{height:52,url:"https://i.scdn.co/image/6dd0ffd270903d1884edf9058c49f58b03db893d",width:64}],name:"Queen",popularity:92,type:"artist",uri:"spotify:artist:1dfeR4HaWDbWqFHLkxsg1d"},{external_urls:{spotify:"https://open.spotify.com/artist/1r4hJ1h58CWwUQe3MxPuau"},followers:{href:null,total:16581097},genres:["reggaeton"],href:"https://api.spotify.com/v1/artists/1r4hJ1h58CWwUQe3MxPuau",id:"1r4hJ1h58CWwUQe3MxPuau",images:[{height:640,url:"https://i.scdn.co/image/d12586e8e67dffd2ea281d6eeefbe4b06b06b69a",width:640},{height:320,url:"https://i.scdn.co/image/1ed85e35e0ab10006ae92356874089edd74368eb",width:320},{height:160,url:"https://i.scdn.co/image/6955535e0726c8a967036ef3b2d83ee48231299b",width:160}],name:"Maluma",popularity:93,type:"artist",uri:"spotify:artist:1r4hJ1h58CWwUQe3MxPuau"},{external_urls:{spotify:"https://open.spotify.com/artist/4yscD4NQlCKXEpUvBV3nj8"},followers:{href:null,total:6374},genres:["baroque","baroque ensemble","classical performance","early music ensemble","historically informed performance","orchestra"],href:"https://api.spotify.com/v1/artists/4yscD4NQlCKXEpUvBV3nj8",id:"4yscD4NQlCKXEpUvBV3nj8",images:[{height:640,url:"https://i.scdn.co/image/25226219a3d35d0bb515624b3d7f8f683b0105b1",width:640},{height:320,url:"https://i.scdn.co/image/8a925fd8caf5694e8d7a954ea9981faac20789f8",width:320},{height:160,url:"https://i.scdn.co/image/9b0ca797c322041deccdfefae5b6a9c371430552",width:160}],name:"Tafelmusik Baroque Orchestra",popularity:46,type:"artist",uri:"spotify:artist:4yscD4NQlCKXEpUvBV3nj8"},{external_urls:{spotify:"https://open.spotify.com/artist/0SfsnGyD8FpIN4U4WCkBZ5"},followers:{href:null,total:3009273},genres:["edm","progressive house","progressive trance","trance"],href:"https://api.spotify.com/v1/artists/0SfsnGyD8FpIN4U4WCkBZ5",id:"0SfsnGyD8FpIN4U4WCkBZ5",images:[{height:640,url:"https://i.scdn.co/image/ca02718b0e5c389073e8dba56417acd36f541523",width:640},{height:320,url:"https://i.scdn.co/image/12b0a026351445e1731694da6d26047cbc02f6d8",width:320},{height:160,url:"https://i.scdn.co/image/2204a5c80ce46cb150d587ab6340fc686fa9bcf6",width:160}],name:"Armin van Buuren",popularity:82,type:"artist",uri:"spotify:artist:0SfsnGyD8FpIN4U4WCkBZ5"},{external_urls:{spotify:"https://open.spotify.com/artist/0h1zs4CTlU9D2QtgPxptUD"},followers:{href:null,total:3797209},genres:["cantautor","latin","latin arena pop","latin pop","rock en espanol","tropical"],href:"https://api.spotify.com/v1/artists/0h1zs4CTlU9D2QtgPxptUD",id:"0h1zs4CTlU9D2QtgPxptUD",images:[{height:640,url:"https://i.scdn.co/image/fa047bfcb6298b8dfb65eb626ba2a765ed8d42eb",width:640},{height:320,url:"https://i.scdn.co/image/3f57a92a47892421d87642e25a4725536bcbb820",width:320},{height:160,url:"https://i.scdn.co/image/57184945139673af4acde46054054f5ae33d24e4",width:160}],name:"Ricardo Arjona",popularity:79,type:"artist",uri:"spotify:artist:0h1zs4CTlU9D2QtgPxptUD"},{external_urls:{spotify:"https://open.spotify.com/artist/1i8SpTcr7yvPOmcqrbnVXY"},followers:{href:null,total:18489601},genres:["reggaeton","trap latino"],href:"https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY",id:"1i8SpTcr7yvPOmcqrbnVXY",images:[{height:640,url:"https://i.scdn.co/image/490e6f87a88682ba890bfaedee0dd0f512fe5c1e",width:640},{height:320,url:"https://i.scdn.co/image/fc712eaffbed83f15962e0ed98a2e6145492a8e5",width:320},{height:160,url:"https://i.scdn.co/image/a9198e2ed3039f11d25c8068f8504f28acc8696d",width:160}],name:"Ozuna",popularity:97,type:"artist",uri:"spotify:artist:1i8SpTcr7yvPOmcqrbnVXY"},{external_urls:{spotify:"https://open.spotify.com/artist/3PfJE6ebCbCHeuqO4BfNeA"},followers:{href:null,total:226442},genres:["classical","classical performance","orchestra"],href:"https://api.spotify.com/v1/artists/3PfJE6ebCbCHeuqO4BfNeA",id:"3PfJE6ebCbCHeuqO4BfNeA",images:[{height:640,url:"https://i.scdn.co/image/bf87148d622227640d5c20ab5d7c13693d53f604",width:640},{height:320,url:"https://i.scdn.co/image/cfdbeba41bdd5b8d9139579b6f404f0710d5f34b",width:320},{height:160,url:"https://i.scdn.co/image/b293c1db68d870551a36c58b6ef05e8989a2796d",width:160}],name:"London Philharmonic Orchestra",popularity:68,type:"artist",uri:"spotify:artist:3PfJE6ebCbCHeuqO4BfNeA"},{external_urls:{spotify:"https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2"},followers:{href:null,total:13171543},genres:["british invasion","merseybeat","psychedelic rock","rock"],href:"https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2",id:"3WrFJ7ztbogyGnTHbHJFl2",images:[{height:640,url:"https://i.scdn.co/image/6b2a709752ef9c7aaf0d270344157f6cd2e0f1a7",width:640},{height:320,url:"https://i.scdn.co/image/1047bf172446f2a815a99ab0a0395099d621be51",width:320},{height:160,url:"https://i.scdn.co/image/0561b59a91a5e904ad2d192747715688d5f05012",width:160}],name:"The Beatles",popularity:90,type:"artist",uri:"spotify:artist:3WrFJ7ztbogyGnTHbHJFl2"},{external_urls:{spotify:"https://open.spotify.com/artist/003f4bk13c6Q3gAUXv7dGJ"},followers:{href:null,total:60772},genres:["classical","classical performance","orchestra"],href:"https://api.spotify.com/v1/artists/003f4bk13c6Q3gAUXv7dGJ",id:"003f4bk13c6Q3gAUXv7dGJ",images:[{height:640,url:"https://i.scdn.co/image/c6c59ecb176f564d2eb588e7cf2d61d156529dd3",width:640},{height:320,url:"https://i.scdn.co/image/fbdd08df9bcf42483f09f4d710d11e4a154c75d1",width:320},{height:160,url:"https://i.scdn.co/image/94c991d9e8b4681cf1aec471d1c09efc1811e3f8",width:160}],name:"Wiener Philharmoniker",popularity:69,type:"artist",uri:"spotify:artist:003f4bk13c6Q3gAUXv7dGJ"},{external_urls:{spotify:"https://open.spotify.com/artist/4rYCMf7ApPRVG3yjCbxJ8m"},followers:{href:null,total:1821},genres:["classical flute"],href:"https://api.spotify.com/v1/artists/4rYCMf7ApPRVG3yjCbxJ8m",id:"4rYCMf7ApPRVG3yjCbxJ8m",images:[{height:1e3,url:"https://i.scdn.co/image/b6f85afff7987a9c8392b66aaedaa6c8aaf3c50e",width:1e3},{height:640,url:"https://i.scdn.co/image/366136efb1e6bc7d42e2c1cfa249f8ea1614f9db",width:640},{height:200,url:"https://i.scdn.co/image/5e855778946061f2f30ff91b94af0d0bf092392b",width:200},{height:64,url:"https://i.scdn.co/image/0dcedafbac1f8c44440938d35c903c775e855b49",width:64}],name:"Sharon Bezaly",popularity:28,type:"artist",uri:"spotify:artist:4rYCMf7ApPRVG3yjCbxJ8m"},{external_urls:{spotify:"https://open.spotify.com/artist/02OR1V0L1ODy7dDlBLTOvx"},followers:{href:null,total:97035},genres:["colombian rock","latin metal","latin rock","metal colombiano","rock en espanol"],href:"https://api.spotify.com/v1/artists/02OR1V0L1ODy7dDlBLTOvx",id:"02OR1V0L1ODy7dDlBLTOvx",images:[{height:640,url:"https://i.scdn.co/image/4839facdfd8964d70af3dfd5962b37d7771ed463",width:640},{height:320,url:"https://i.scdn.co/image/0240a84d5fa4e4000207b6292eb78ba45a4a771b",width:320},{height:160,url:"https://i.scdn.co/image/bd770ad5ce2a01db96b2125c78928ea9ca783864",width:160}],name:"Kraken",popularity:45,type:"artist",uri:"spotify:artist:02OR1V0L1ODy7dDlBLTOvx"},{external_urls:{spotify:"https://open.spotify.com/artist/4NqS7DbPFYwZmniGHCPMpm"},followers:{href:null,total:87838},genres:["environmental","meditation","sleep"],href:"https://api.spotify.com/v1/artists/4NqS7DbPFYwZmniGHCPMpm",id:"4NqS7DbPFYwZmniGHCPMpm",images:[{height:640,url:"https://i.scdn.co/image/ac826fed2f4cbb05c6db394c27ac19747ed198b8",width:640},{height:320,url:"https://i.scdn.co/image/a491705209a0d81e9b3a91bd2139efe43acc70e6",width:320},{height:160,url:"https://i.scdn.co/image/7fc1ef642210289cab176dd01bc45df818108692",width:160}],name:"Nature Sounds",popularity:73,type:"artist",uri:"spotify:artist:4NqS7DbPFYwZmniGHCPMpm"}]}}}]);