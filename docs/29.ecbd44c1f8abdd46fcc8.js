(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{KhP4:function(l){l.exports=JSON.parse('[{"id":1,"img":"assets/img/locations/1.jpg","title":"Slices London","brancetype":"Main Branch","location":["Cecilia Chapman","711-2880 Nulla St.","Mankato Mississippi 96522"],"contactno":"(257) 563-7401","emailid":"info@slices.com","mapdata":[40.711652,-73.963877]},{"id":2,"img":"assets/img/locations/2.jpg","title":"Slices Washington","brancetype":"Secondary Branch","location":["Iris Watson","P.O. Box 283 8562 Fusce Rd.","Frederick Nebraska 20620"],"contactno":"(372) 587-2335","emailid":"info@slices-dc.com","mapdata":[40.711652,-73.963877]},{"id":3,"img":"assets/img/locations/3.jpg","title":"Slices Italy","brancetype":"Secondary Branch","location":["Celeste Slater","606-3727 Ullamcorper. Street","Roseville NH 11523"],"contactno":"(786) 713-8616","emailid":"info@slices-italy.com","mapdata":[40.711652,-73.963877]}]')},jbfa:function(l,n,t){"use strict";t.r(n),t.d(n,"LocationsModuleNgFactory",(function(){return D}));var o=t("8Y7J");class u{}var e=t("pMnS"),a=t("9AJC"),i=t("+bQD"),c=t("j/Fd"),d=t("SVse"),s=t("lDAE"),p=t("KhP4"),r=t("4R65");class m{constructor(){this.locations=p,this.mapdata={lat:40.711652,lon:-73.963877},this.popupText="Slices - Pizzaria Shop",this.markerIcon={icon:r.icon({iconSize:[32,32],iconAnchor:[15,32],popupAnchor:[2,-40],iconUrl:"assets/img/misc/marker.png"})},this.options={layers:[r.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png",{maxZoom:16,attribution:"&copy; Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ"})],zoom:16,maxZoom:16,scrollWheelZoom:!1,center:r.latLng(this.mapdata.lat,this.mapdata.lon)}}initMarkers(){const l=`<p style="color: #ED4E53; background-color: white">${this.popupText}</p>`;this.locations.map(n=>{r.marker([n.mapdata[0],n.mapdata[1]],this.markerIcon).addTo(this.map).bindPopup(l)})}onMapReady(l){this.map=l,this.initMarkers()}ngOnInit(){}}var f=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function g(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function h(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,29,"div",[["class","location-item"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,28,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](2,0,null,null,21,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),o["\u0275eld"](3,0,null,null,20,"div",[["class","location-item-inner"]],null,null,null,null,null)),(l()(),o["\u0275eld"](4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),o["\u0275eld"](5,0,null,null,4,"div",[["class","location-desc"]],null,null,null,null,null)),(l()(),o["\u0275eld"](6,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),o["\u0275ted"](7,null,["",""])),(l()(),o["\u0275eld"](8,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o["\u0275ted"](9,null,["",""])),(l()(),o["\u0275eld"](10,0,null,null,13,"div",[["class","location-info"]],null,null,null,null,null)),(l()(),o["\u0275eld"](11,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),o["\u0275eld"](12,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,g)),o["\u0275did"](14,278528,null,0,d.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["\u0275eld"](15,0,null,null,8,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),o["\u0275eld"](16,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Give us a call: "])),(l()(),o["\u0275eld"](18,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275ted"](19,null,["",""])),(l()(),o["\u0275eld"](20,0,null,null,3,"span",[],null,null,null,null,null)),(l()(),o["\u0275ted"](-1,null,[" Email Us: "])),(l()(),o["\u0275eld"](22,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275ted"](23,null,["",""])),(l()(),o["\u0275eld"](24,0,null,null,5,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),o["\u0275eld"](25,0,null,null,4,"div",[["class","ct-contact-map-wrapper"]],null,null,null,null,null)),(l()(),o["\u0275eld"](26,0,null,null,1,"div",[["class","ct-contact-map"],["leaflet",""]],null,[[null,"leafletMapReady"],["window","resize"]],(function(l,n,t){var u=!0,e=l.component;return"window:resize"===n&&(u=!1!==o["\u0275nov"](l,27).onResize()&&u),"leafletMapReady"===n&&(u=!1!==e.onMapReady(t)&&u),u}),null,null)),o["\u0275did"](27,737280,null,0,s.a,[o.ElementRef,o.NgZone],{options:[0,"options"]},{mapReady:"leafletMapReady"}),(l()(),o["\u0275eld"](28,0,null,null,1,"a",[["class","btn-custom shadow-none"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),o["\u0275ted"](-1,null,["View in Google Maps"]))],(function(l,n){var t=n.component;l(n,14,0,n.context.$implicit.location),l(n,27,0,t.options)}),(function(l,n){l(n,4,0,n.context.$implicit.img,o["\u0275inlineInterpolate"](1,"",n.context.$implicit.title,"")),l(n,7,0,n.context.$implicit.title),l(n,9,0,n.context.$implicit.brancetype),l(n,18,0,o["\u0275inlineInterpolate"](1,"tel:",n.context.$implicit.contactno,"")),l(n,19,0,n.context.$implicit.contactno),l(n,22,0,o["\u0275inlineInterpolate"](1,"mailto:",n.context.$implicit.emailid,"")),l(n,23,0,n.context.$implicit.emailid),l(n,28,0,o["\u0275inlineInterpolate"](1,"https://maps.google.com/?q=",n.context.$implicit.mapdata,""))}))}function v(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,3,"div",[["class","section"]],null,null,null,null,null)),(l()(),o["\u0275eld"](1,0,null,null,2,"div",[["class","container locations-wrapper"]],null,null,null,null,null)),(l()(),o["\u0275and"](16777216,null,null,1,null,h)),o["\u0275did"](3,278528,null,0,d.NgForOf,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.locations)}),null)}var b=t("R8T8"),y=t("FezY"),w=t("1eH3");class R{constructor(){this.classname="ct-footer footer-dark",this.ftlogo="assets/img/logo-light.png"}ngOnInit(){}}var k=o["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function M(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-header",[],null,null,null,i.b,i.a)),o["\u0275did"](1,114688,null,0,c.a,[],null,null),(l()(),o["\u0275eld"](2,0,null,null,1,"app-content",[],null,null,null,v,f)),o["\u0275did"](3,114688,null,0,m,[],null,null),(l()(),o["\u0275eld"](4,0,null,null,1,"app-footer",[],null,[["window","scroll"]],(function(l,n,t){var u=!0;return"window:scroll"===n&&(u=!1!==o["\u0275nov"](l,5).checkScroll()&&u),u}),b.b,b.a)),o["\u0275did"](5,114688,null,0,y.a,[w.a],{layout:[0,"layout"],logo:[1,"logo"]},null)],(function(l,n){var t=n.component;l(n,1,0),l(n,3,0),l(n,5,0,t.classname,t.ftlogo)}),null)}function S(l){return o["\u0275vid"](0,[(l()(),o["\u0275eld"](0,0,null,null,1,"app-locations",[],null,null,null,M,k)),o["\u0275did"](1,114688,null,0,R,[],null,null)],(function(l,n){l(n,1,0)}),null)}var x=o["\u0275ccf"]("app-locations",R,S,{},{},[]),I=t("s7LF"),F=t("G0yt"),C=t("iryk"),N=t("lABs"),O=t("iInd"),z=t("IheW"),L=t("fyIi"),E=t("aLe/"),T=t("hGdz"),$=t("XwUp"),A=t("foBm");class j{}var D=o["\u0275cmf"](u,[],(function(l){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[e.a,a.a,a.b,a.l,a.m,a.i,a.j,a.k,x]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[o.LOCALE_ID]),o["\u0275mpd"](4608,I.e,I.e,[]),o["\u0275mpd"](4608,F.x,F.x,[o.ComponentFactoryResolver,o.Injector,F.sb,F.y]),o["\u0275mpd"](5120,C.a,N.b,[O.l]),o["\u0275mpd"](4608,z.h,z.n,[d.DOCUMENT,o.PLATFORM_ID,z.l]),o["\u0275mpd"](4608,z.o,z.o,[z.h,z.m]),o["\u0275mpd"](5120,z.a,(function(l){return[l]}),[z.o]),o["\u0275mpd"](4608,z.k,z.k,[]),o["\u0275mpd"](6144,z.i,null,[z.k]),o["\u0275mpd"](4608,z.g,z.g,[z.i]),o["\u0275mpd"](6144,z.b,null,[z.g]),o["\u0275mpd"](4608,z.f,z.j,[z.b,o.Injector]),o["\u0275mpd"](4608,z.c,z.c,[z.f]),o["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),o["\u0275mpd"](1073742336,O.n,O.n,[[2,O.s],[2,O.l]]),o["\u0275mpd"](1073742336,L.b,L.b,[]),o["\u0275mpd"](1073742336,F.c,F.c,[]),o["\u0275mpd"](1073742336,F.f,F.f,[]),o["\u0275mpd"](1073742336,F.g,F.g,[]),o["\u0275mpd"](1073742336,F.k,F.k,[]),o["\u0275mpd"](1073742336,F.n,F.n,[]),o["\u0275mpd"](1073742336,I.d,I.d,[]),o["\u0275mpd"](1073742336,I.a,I.a,[]),o["\u0275mpd"](1073742336,F.t,F.t,[]),o["\u0275mpd"](1073742336,F.v,F.v,[]),o["\u0275mpd"](1073742336,F.z,F.z,[]),o["\u0275mpd"](1073742336,F.G,F.G,[]),o["\u0275mpd"](1073742336,F.M,F.M,[]),o["\u0275mpd"](1073742336,F.S,F.S,[]),o["\u0275mpd"](1073742336,F.V,F.V,[]),o["\u0275mpd"](1073742336,F.Y,F.Y,[]),o["\u0275mpd"](1073742336,F.db,F.db,[]),o["\u0275mpd"](1073742336,F.gb,F.gb,[]),o["\u0275mpd"](1073742336,F.hb,F.hb,[]),o["\u0275mpd"](1073742336,F.ib,F.ib,[]),o["\u0275mpd"](1073742336,F.A,F.A,[]),o["\u0275mpd"](1073742336,N.a,N.a,[]),o["\u0275mpd"](1073742336,z.e,z.e,[]),o["\u0275mpd"](1073742336,z.d,z.d,[]),o["\u0275mpd"](1073742336,E.d,E.d,[]),o["\u0275mpd"](1073742336,T.a,T.a,[]),o["\u0275mpd"](1073742336,$.a,$.a,[]),o["\u0275mpd"](1073742336,A.a,A.a,[]),o["\u0275mpd"](1073742336,j,j,[]),o["\u0275mpd"](1073742336,u,u,[]),o["\u0275mpd"](256,z.l,"XSRF-TOKEN",[]),o["\u0275mpd"](256,z.m,"X-XSRF-TOKEN",[]),o["\u0275mpd"](256,E.a,T.b,[]),o["\u0275mpd"](1024,O.j,(function(){return[[{path:"",component:R}]]}),[])])}))}}]);