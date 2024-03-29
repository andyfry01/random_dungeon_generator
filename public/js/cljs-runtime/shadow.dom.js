goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34328 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34328(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34330 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34330(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33262 = coll;
var G__33263 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33262,G__33263) : shadow.dom.lazy_native_coll_seq.call(null,G__33262,G__33263));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33303 = arguments.length;
switch (G__33303) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33306 = arguments.length;
switch (G__33306) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33318 = arguments.length;
switch (G__33318) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33325 = arguments.length;
switch (G__33325) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33332 = arguments.length;
switch (G__33332) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33340 = arguments.length;
switch (G__33340) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33346){if((e33346 instanceof Object)){
var e = e33346;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33346;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33352 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33353 = null;
var count__33354 = (0);
var i__33355 = (0);
while(true){
if((i__33355 < count__33354)){
var el = chunk__33353.cljs$core$IIndexed$_nth$arity$2(null,i__33355);
var handler_34360__$1 = ((function (seq__33352,chunk__33353,count__33354,i__33355,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33352,chunk__33353,count__33354,i__33355,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34360__$1);


var G__34361 = seq__33352;
var G__34362 = chunk__33353;
var G__34363 = count__33354;
var G__34364 = (i__33355 + (1));
seq__33352 = G__34361;
chunk__33353 = G__34362;
count__33354 = G__34363;
i__33355 = G__34364;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33352);
if(temp__5735__auto__){
var seq__33352__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33352__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33352__$1);
var G__34366 = cljs.core.chunk_rest(seq__33352__$1);
var G__34367 = c__4556__auto__;
var G__34368 = cljs.core.count(c__4556__auto__);
var G__34369 = (0);
seq__33352 = G__34366;
chunk__33353 = G__34367;
count__33354 = G__34368;
i__33355 = G__34369;
continue;
} else {
var el = cljs.core.first(seq__33352__$1);
var handler_34371__$1 = ((function (seq__33352,chunk__33353,count__33354,i__33355,el,seq__33352__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33352,chunk__33353,count__33354,i__33355,el,seq__33352__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34371__$1);


var G__34373 = cljs.core.next(seq__33352__$1);
var G__34374 = null;
var G__34375 = (0);
var G__34376 = (0);
seq__33352 = G__34373;
chunk__33353 = G__34374;
count__33354 = G__34375;
i__33355 = G__34376;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33378 = arguments.length;
switch (G__33378) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33391 = cljs.core.seq(events);
var chunk__33392 = null;
var count__33393 = (0);
var i__33394 = (0);
while(true){
if((i__33394 < count__33393)){
var vec__33407 = chunk__33392.cljs$core$IIndexed$_nth$arity$2(null,i__33394);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33407,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34382 = seq__33391;
var G__34383 = chunk__33392;
var G__34384 = count__33393;
var G__34385 = (i__33394 + (1));
seq__33391 = G__34382;
chunk__33392 = G__34383;
count__33393 = G__34384;
i__33394 = G__34385;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33391);
if(temp__5735__auto__){
var seq__33391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33391__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33391__$1);
var G__34387 = cljs.core.chunk_rest(seq__33391__$1);
var G__34388 = c__4556__auto__;
var G__34389 = cljs.core.count(c__4556__auto__);
var G__34390 = (0);
seq__33391 = G__34387;
chunk__33392 = G__34388;
count__33393 = G__34389;
i__33394 = G__34390;
continue;
} else {
var vec__33411 = cljs.core.first(seq__33391__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33411,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34391 = cljs.core.next(seq__33391__$1);
var G__34392 = null;
var G__34393 = (0);
var G__34394 = (0);
seq__33391 = G__34391;
chunk__33392 = G__34392;
count__33393 = G__34393;
i__33394 = G__34394;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33416 = cljs.core.seq(styles);
var chunk__33417 = null;
var count__33418 = (0);
var i__33419 = (0);
while(true){
if((i__33419 < count__33418)){
var vec__33431 = chunk__33417.cljs$core$IIndexed$_nth$arity$2(null,i__33419);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33431,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34396 = seq__33416;
var G__34397 = chunk__33417;
var G__34398 = count__33418;
var G__34399 = (i__33419 + (1));
seq__33416 = G__34396;
chunk__33417 = G__34397;
count__33418 = G__34398;
i__33419 = G__34399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33416);
if(temp__5735__auto__){
var seq__33416__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33416__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33416__$1);
var G__34400 = cljs.core.chunk_rest(seq__33416__$1);
var G__34401 = c__4556__auto__;
var G__34402 = cljs.core.count(c__4556__auto__);
var G__34403 = (0);
seq__33416 = G__34400;
chunk__33417 = G__34401;
count__33418 = G__34402;
i__33419 = G__34403;
continue;
} else {
var vec__33435 = cljs.core.first(seq__33416__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33435,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34406 = cljs.core.next(seq__33416__$1);
var G__34407 = null;
var G__34408 = (0);
var G__34409 = (0);
seq__33416 = G__34406;
chunk__33417 = G__34407;
count__33418 = G__34408;
i__33419 = G__34409;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33449_34410 = key;
var G__33449_34411__$1 = (((G__33449_34410 instanceof cljs.core.Keyword))?G__33449_34410.fqn:null);
switch (G__33449_34411__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34417 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_34417,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_34417,"aria-");
}
})())){
el.setAttribute(ks_34417,value);
} else {
(el[ks_34417] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33482){
var map__33483 = p__33482;
var map__33483__$1 = (((((!((map__33483 == null))))?(((((map__33483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33483):map__33483);
var props = map__33483__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33483__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33487 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33490 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33490,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33490;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33501 = arguments.length;
switch (G__33501) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33524){
var vec__33526 = p__33524;
var seq__33527 = cljs.core.seq(vec__33526);
var first__33528 = cljs.core.first(seq__33527);
var seq__33527__$1 = cljs.core.next(seq__33527);
var nn = first__33528;
var first__33528__$1 = cljs.core.first(seq__33527__$1);
var seq__33527__$2 = cljs.core.next(seq__33527__$1);
var np = first__33528__$1;
var nc = seq__33527__$2;
var node = vec__33526;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33533 = nn;
var G__33534 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33533,G__33534) : create_fn.call(null,G__33533,G__33534));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33537 = nn;
var G__33538 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33537,G__33538) : create_fn.call(null,G__33537,G__33538));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33540 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33540,(1),null);
var seq__33547_34439 = cljs.core.seq(node_children);
var chunk__33548_34440 = null;
var count__33549_34441 = (0);
var i__33550_34442 = (0);
while(true){
if((i__33550_34442 < count__33549_34441)){
var child_struct_34443 = chunk__33548_34440.cljs$core$IIndexed$_nth$arity$2(null,i__33550_34442);
var children_34445 = shadow.dom.dom_node(child_struct_34443);
if(cljs.core.seq_QMARK_(children_34445)){
var seq__33599_34446 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34445));
var chunk__33601_34447 = null;
var count__33602_34448 = (0);
var i__33603_34449 = (0);
while(true){
if((i__33603_34449 < count__33602_34448)){
var child_34450 = chunk__33601_34447.cljs$core$IIndexed$_nth$arity$2(null,i__33603_34449);
if(cljs.core.truth_(child_34450)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34450);


var G__34451 = seq__33599_34446;
var G__34452 = chunk__33601_34447;
var G__34453 = count__33602_34448;
var G__34454 = (i__33603_34449 + (1));
seq__33599_34446 = G__34451;
chunk__33601_34447 = G__34452;
count__33602_34448 = G__34453;
i__33603_34449 = G__34454;
continue;
} else {
var G__34455 = seq__33599_34446;
var G__34456 = chunk__33601_34447;
var G__34457 = count__33602_34448;
var G__34458 = (i__33603_34449 + (1));
seq__33599_34446 = G__34455;
chunk__33601_34447 = G__34456;
count__33602_34448 = G__34457;
i__33603_34449 = G__34458;
continue;
}
} else {
var temp__5735__auto___34459 = cljs.core.seq(seq__33599_34446);
if(temp__5735__auto___34459){
var seq__33599_34460__$1 = temp__5735__auto___34459;
if(cljs.core.chunked_seq_QMARK_(seq__33599_34460__$1)){
var c__4556__auto___34461 = cljs.core.chunk_first(seq__33599_34460__$1);
var G__34462 = cljs.core.chunk_rest(seq__33599_34460__$1);
var G__34463 = c__4556__auto___34461;
var G__34464 = cljs.core.count(c__4556__auto___34461);
var G__34465 = (0);
seq__33599_34446 = G__34462;
chunk__33601_34447 = G__34463;
count__33602_34448 = G__34464;
i__33603_34449 = G__34465;
continue;
} else {
var child_34466 = cljs.core.first(seq__33599_34460__$1);
if(cljs.core.truth_(child_34466)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34466);


var G__34467 = cljs.core.next(seq__33599_34460__$1);
var G__34468 = null;
var G__34469 = (0);
var G__34470 = (0);
seq__33599_34446 = G__34467;
chunk__33601_34447 = G__34468;
count__33602_34448 = G__34469;
i__33603_34449 = G__34470;
continue;
} else {
var G__34472 = cljs.core.next(seq__33599_34460__$1);
var G__34473 = null;
var G__34474 = (0);
var G__34475 = (0);
seq__33599_34446 = G__34472;
chunk__33601_34447 = G__34473;
count__33602_34448 = G__34474;
i__33603_34449 = G__34475;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34445);
}


var G__34476 = seq__33547_34439;
var G__34477 = chunk__33548_34440;
var G__34478 = count__33549_34441;
var G__34479 = (i__33550_34442 + (1));
seq__33547_34439 = G__34476;
chunk__33548_34440 = G__34477;
count__33549_34441 = G__34478;
i__33550_34442 = G__34479;
continue;
} else {
var temp__5735__auto___34480 = cljs.core.seq(seq__33547_34439);
if(temp__5735__auto___34480){
var seq__33547_34482__$1 = temp__5735__auto___34480;
if(cljs.core.chunked_seq_QMARK_(seq__33547_34482__$1)){
var c__4556__auto___34483 = cljs.core.chunk_first(seq__33547_34482__$1);
var G__34484 = cljs.core.chunk_rest(seq__33547_34482__$1);
var G__34485 = c__4556__auto___34483;
var G__34486 = cljs.core.count(c__4556__auto___34483);
var G__34487 = (0);
seq__33547_34439 = G__34484;
chunk__33548_34440 = G__34485;
count__33549_34441 = G__34486;
i__33550_34442 = G__34487;
continue;
} else {
var child_struct_34488 = cljs.core.first(seq__33547_34482__$1);
var children_34489 = shadow.dom.dom_node(child_struct_34488);
if(cljs.core.seq_QMARK_(children_34489)){
var seq__33622_34490 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34489));
var chunk__33624_34491 = null;
var count__33625_34492 = (0);
var i__33626_34493 = (0);
while(true){
if((i__33626_34493 < count__33625_34492)){
var child_34494 = chunk__33624_34491.cljs$core$IIndexed$_nth$arity$2(null,i__33626_34493);
if(cljs.core.truth_(child_34494)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34494);


var G__34495 = seq__33622_34490;
var G__34496 = chunk__33624_34491;
var G__34497 = count__33625_34492;
var G__34498 = (i__33626_34493 + (1));
seq__33622_34490 = G__34495;
chunk__33624_34491 = G__34496;
count__33625_34492 = G__34497;
i__33626_34493 = G__34498;
continue;
} else {
var G__34499 = seq__33622_34490;
var G__34500 = chunk__33624_34491;
var G__34501 = count__33625_34492;
var G__34502 = (i__33626_34493 + (1));
seq__33622_34490 = G__34499;
chunk__33624_34491 = G__34500;
count__33625_34492 = G__34501;
i__33626_34493 = G__34502;
continue;
}
} else {
var temp__5735__auto___34503__$1 = cljs.core.seq(seq__33622_34490);
if(temp__5735__auto___34503__$1){
var seq__33622_34504__$1 = temp__5735__auto___34503__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33622_34504__$1)){
var c__4556__auto___34505 = cljs.core.chunk_first(seq__33622_34504__$1);
var G__34506 = cljs.core.chunk_rest(seq__33622_34504__$1);
var G__34507 = c__4556__auto___34505;
var G__34508 = cljs.core.count(c__4556__auto___34505);
var G__34509 = (0);
seq__33622_34490 = G__34506;
chunk__33624_34491 = G__34507;
count__33625_34492 = G__34508;
i__33626_34493 = G__34509;
continue;
} else {
var child_34510 = cljs.core.first(seq__33622_34504__$1);
if(cljs.core.truth_(child_34510)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34510);


var G__34511 = cljs.core.next(seq__33622_34504__$1);
var G__34512 = null;
var G__34513 = (0);
var G__34514 = (0);
seq__33622_34490 = G__34511;
chunk__33624_34491 = G__34512;
count__33625_34492 = G__34513;
i__33626_34493 = G__34514;
continue;
} else {
var G__34515 = cljs.core.next(seq__33622_34504__$1);
var G__34516 = null;
var G__34517 = (0);
var G__34518 = (0);
seq__33622_34490 = G__34515;
chunk__33624_34491 = G__34516;
count__33625_34492 = G__34517;
i__33626_34493 = G__34518;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34489);
}


var G__34519 = cljs.core.next(seq__33547_34482__$1);
var G__34520 = null;
var G__34521 = (0);
var G__34522 = (0);
seq__33547_34439 = G__34519;
chunk__33548_34440 = G__34520;
count__33549_34441 = G__34521;
i__33550_34442 = G__34522;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33677 = cljs.core.seq(node);
var chunk__33678 = null;
var count__33679 = (0);
var i__33680 = (0);
while(true){
if((i__33680 < count__33679)){
var n = chunk__33678.cljs$core$IIndexed$_nth$arity$2(null,i__33680);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34528 = seq__33677;
var G__34529 = chunk__33678;
var G__34530 = count__33679;
var G__34531 = (i__33680 + (1));
seq__33677 = G__34528;
chunk__33678 = G__34529;
count__33679 = G__34530;
i__33680 = G__34531;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33677);
if(temp__5735__auto__){
var seq__33677__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33677__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33677__$1);
var G__34532 = cljs.core.chunk_rest(seq__33677__$1);
var G__34533 = c__4556__auto__;
var G__34534 = cljs.core.count(c__4556__auto__);
var G__34535 = (0);
seq__33677 = G__34532;
chunk__33678 = G__34533;
count__33679 = G__34534;
i__33680 = G__34535;
continue;
} else {
var n = cljs.core.first(seq__33677__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34538 = cljs.core.next(seq__33677__$1);
var G__34539 = null;
var G__34540 = (0);
var G__34541 = (0);
seq__33677 = G__34538;
chunk__33678 = G__34539;
count__33679 = G__34540;
i__33680 = G__34541;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33701 = arguments.length;
switch (G__33701) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33717 = arguments.length;
switch (G__33717) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34562 = arguments.length;
var i__4737__auto___34563 = (0);
while(true){
if((i__4737__auto___34563 < len__4736__auto___34562)){
args__4742__auto__.push((arguments[i__4737__auto___34563]));

var G__34564 = (i__4737__auto___34563 + (1));
i__4737__auto___34563 = G__34564;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33810_34565 = cljs.core.seq(nodes);
var chunk__33811_34566 = null;
var count__33812_34567 = (0);
var i__33813_34568 = (0);
while(true){
if((i__33813_34568 < count__33812_34567)){
var node_34572 = chunk__33811_34566.cljs$core$IIndexed$_nth$arity$2(null,i__33813_34568);
fragment.appendChild(shadow.dom._to_dom(node_34572));


var G__34574 = seq__33810_34565;
var G__34575 = chunk__33811_34566;
var G__34576 = count__33812_34567;
var G__34577 = (i__33813_34568 + (1));
seq__33810_34565 = G__34574;
chunk__33811_34566 = G__34575;
count__33812_34567 = G__34576;
i__33813_34568 = G__34577;
continue;
} else {
var temp__5735__auto___34578 = cljs.core.seq(seq__33810_34565);
if(temp__5735__auto___34578){
var seq__33810_34580__$1 = temp__5735__auto___34578;
if(cljs.core.chunked_seq_QMARK_(seq__33810_34580__$1)){
var c__4556__auto___34581 = cljs.core.chunk_first(seq__33810_34580__$1);
var G__34582 = cljs.core.chunk_rest(seq__33810_34580__$1);
var G__34583 = c__4556__auto___34581;
var G__34584 = cljs.core.count(c__4556__auto___34581);
var G__34585 = (0);
seq__33810_34565 = G__34582;
chunk__33811_34566 = G__34583;
count__33812_34567 = G__34584;
i__33813_34568 = G__34585;
continue;
} else {
var node_34587 = cljs.core.first(seq__33810_34580__$1);
fragment.appendChild(shadow.dom._to_dom(node_34587));


var G__34588 = cljs.core.next(seq__33810_34580__$1);
var G__34589 = null;
var G__34590 = (0);
var G__34591 = (0);
seq__33810_34565 = G__34588;
chunk__33811_34566 = G__34589;
count__33812_34567 = G__34590;
i__33813_34568 = G__34591;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq33794){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33794));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33843_34595 = cljs.core.seq(scripts);
var chunk__33844_34596 = null;
var count__33845_34597 = (0);
var i__33846_34598 = (0);
while(true){
if((i__33846_34598 < count__33845_34597)){
var vec__33866_34600 = chunk__33844_34596.cljs$core$IIndexed$_nth$arity$2(null,i__33846_34598);
var script_tag_34601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33866_34600,(0),null);
var script_body_34602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33866_34600,(1),null);
eval(script_body_34602);


var G__34603 = seq__33843_34595;
var G__34604 = chunk__33844_34596;
var G__34605 = count__33845_34597;
var G__34606 = (i__33846_34598 + (1));
seq__33843_34595 = G__34603;
chunk__33844_34596 = G__34604;
count__33845_34597 = G__34605;
i__33846_34598 = G__34606;
continue;
} else {
var temp__5735__auto___34607 = cljs.core.seq(seq__33843_34595);
if(temp__5735__auto___34607){
var seq__33843_34608__$1 = temp__5735__auto___34607;
if(cljs.core.chunked_seq_QMARK_(seq__33843_34608__$1)){
var c__4556__auto___34609 = cljs.core.chunk_first(seq__33843_34608__$1);
var G__34610 = cljs.core.chunk_rest(seq__33843_34608__$1);
var G__34611 = c__4556__auto___34609;
var G__34612 = cljs.core.count(c__4556__auto___34609);
var G__34613 = (0);
seq__33843_34595 = G__34610;
chunk__33844_34596 = G__34611;
count__33845_34597 = G__34612;
i__33846_34598 = G__34613;
continue;
} else {
var vec__33882_34615 = cljs.core.first(seq__33843_34608__$1);
var script_tag_34616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882_34615,(0),null);
var script_body_34617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33882_34615,(1),null);
eval(script_body_34617);


var G__34619 = cljs.core.next(seq__33843_34608__$1);
var G__34620 = null;
var G__34621 = (0);
var G__34622 = (0);
seq__33843_34595 = G__34619;
chunk__33844_34596 = G__34620;
count__33845_34597 = G__34621;
i__33846_34598 = G__34622;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__33887){
var vec__33891 = p__33887;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33891,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33920 = arguments.length;
switch (G__33920) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33932 = cljs.core.seq(style_keys);
var chunk__33933 = null;
var count__33934 = (0);
var i__33935 = (0);
while(true){
if((i__33935 < count__33934)){
var it = chunk__33933.cljs$core$IIndexed$_nth$arity$2(null,i__33935);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34633 = seq__33932;
var G__34634 = chunk__33933;
var G__34635 = count__33934;
var G__34636 = (i__33935 + (1));
seq__33932 = G__34633;
chunk__33933 = G__34634;
count__33934 = G__34635;
i__33935 = G__34636;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33932);
if(temp__5735__auto__){
var seq__33932__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33932__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33932__$1);
var G__34643 = cljs.core.chunk_rest(seq__33932__$1);
var G__34644 = c__4556__auto__;
var G__34645 = cljs.core.count(c__4556__auto__);
var G__34646 = (0);
seq__33932 = G__34643;
chunk__33933 = G__34644;
count__33934 = G__34645;
i__33935 = G__34646;
continue;
} else {
var it = cljs.core.first(seq__33932__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34647 = cljs.core.next(seq__33932__$1);
var G__34648 = null;
var G__34649 = (0);
var G__34650 = (0);
seq__33932 = G__34647;
chunk__33933 = G__34648;
count__33934 = G__34649;
i__33935 = G__34650;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k33950,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__33960 = k33950;
var G__33960__$1 = (((G__33960 instanceof cljs.core.Keyword))?G__33960.fqn:null);
switch (G__33960__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33950,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__33965){
var vec__33967 = p__33965;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33967,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33967,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33949){
var self__ = this;
var G__33949__$1 = this;
return (new cljs.core.RecordIter((0),G__33949__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33951,other33952){
var self__ = this;
var this33951__$1 = this;
return (((!((other33952 == null)))) && ((this33951__$1.constructor === other33952.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.x,other33952.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.y,other33952.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33951__$1.__extmap,other33952.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__33949){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__33990 = cljs.core.keyword_identical_QMARK_;
var expr__33991 = k__4388__auto__;
if(cljs.core.truth_((pred__33990.cljs$core$IFn$_invoke$arity$2 ? pred__33990.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__33991) : pred__33990.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__33991)))){
return (new shadow.dom.Coordinate(G__33949,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__33990.cljs$core$IFn$_invoke$arity$2 ? pred__33990.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__33991) : pred__33990.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__33991)))){
return (new shadow.dom.Coordinate(self__.x,G__33949,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__33949),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__33949){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33949,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33958){
var extmap__4419__auto__ = (function (){var G__34007 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33958,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33958)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34007);
} else {
return G__34007;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33958),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33958),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k34018,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__34027 = k34018;
var G__34027__$1 = (((G__34027 instanceof cljs.core.Keyword))?G__34027.fqn:null);
switch (G__34027__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34018,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__34031){
var vec__34032 = p__34031;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34032,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34032,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34017){
var self__ = this;
var G__34017__$1 = this;
return (new cljs.core.RecordIter((0),G__34017__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34019,other34020){
var self__ = this;
var this34019__$1 = this;
return (((!((other34020 == null)))) && ((this34019__$1.constructor === other34020.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34019__$1.w,other34020.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34019__$1.h,other34020.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34019__$1.__extmap,other34020.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__34017){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__34050 = cljs.core.keyword_identical_QMARK_;
var expr__34051 = k__4388__auto__;
if(cljs.core.truth_((pred__34050.cljs$core$IFn$_invoke$arity$2 ? pred__34050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34051) : pred__34050.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34051)))){
return (new shadow.dom.Size(G__34017,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34050.cljs$core$IFn$_invoke$arity$2 ? pred__34050.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34051) : pred__34050.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34051)))){
return (new shadow.dom.Size(self__.w,G__34017,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__34017),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__34017){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34017,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34022){
var extmap__4419__auto__ = (function (){var G__34058 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34022,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34058);
} else {
return G__34058;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34022),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34022),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__34762 = (i + (1));
var G__34763 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34762;
ret = G__34763;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34072){
var vec__34073 = p__34072;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34073,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34078 = arguments.length;
switch (G__34078) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34785 = ps;
var G__34786 = (i + (1));
el__$1 = G__34785;
i = G__34786;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34108 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34108,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34112_34790 = cljs.core.seq(props);
var chunk__34113_34791 = null;
var count__34114_34792 = (0);
var i__34115_34793 = (0);
while(true){
if((i__34115_34793 < count__34114_34792)){
var vec__34131_34794 = chunk__34113_34791.cljs$core$IIndexed$_nth$arity$2(null,i__34115_34793);
var k_34795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131_34794,(0),null);
var v_34796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34131_34794,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34795);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34795),v_34796);


var G__34800 = seq__34112_34790;
var G__34801 = chunk__34113_34791;
var G__34802 = count__34114_34792;
var G__34803 = (i__34115_34793 + (1));
seq__34112_34790 = G__34800;
chunk__34113_34791 = G__34801;
count__34114_34792 = G__34802;
i__34115_34793 = G__34803;
continue;
} else {
var temp__5735__auto___34804 = cljs.core.seq(seq__34112_34790);
if(temp__5735__auto___34804){
var seq__34112_34805__$1 = temp__5735__auto___34804;
if(cljs.core.chunked_seq_QMARK_(seq__34112_34805__$1)){
var c__4556__auto___34806 = cljs.core.chunk_first(seq__34112_34805__$1);
var G__34807 = cljs.core.chunk_rest(seq__34112_34805__$1);
var G__34808 = c__4556__auto___34806;
var G__34809 = cljs.core.count(c__4556__auto___34806);
var G__34810 = (0);
seq__34112_34790 = G__34807;
chunk__34113_34791 = G__34808;
count__34114_34792 = G__34809;
i__34115_34793 = G__34810;
continue;
} else {
var vec__34136_34811 = cljs.core.first(seq__34112_34805__$1);
var k_34812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34811,(0),null);
var v_34813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34811,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34812);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34812),v_34813);


var G__34818 = cljs.core.next(seq__34112_34805__$1);
var G__34819 = null;
var G__34820 = (0);
var G__34821 = (0);
seq__34112_34790 = G__34818;
chunk__34113_34791 = G__34819;
count__34114_34792 = G__34820;
i__34115_34793 = G__34821;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34151 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34151,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34151,(1),null);
var seq__34154_34822 = cljs.core.seq(node_children);
var chunk__34156_34823 = null;
var count__34157_34824 = (0);
var i__34158_34825 = (0);
while(true){
if((i__34158_34825 < count__34157_34824)){
var child_struct_34828 = chunk__34156_34823.cljs$core$IIndexed$_nth$arity$2(null,i__34158_34825);
if((!((child_struct_34828 == null)))){
if(typeof child_struct_34828 === 'string'){
var text_34829 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34829),child_struct_34828].join(''));
} else {
var children_34830 = shadow.dom.svg_node(child_struct_34828);
if(cljs.core.seq_QMARK_(children_34830)){
var seq__34202_34831 = cljs.core.seq(children_34830);
var chunk__34204_34832 = null;
var count__34205_34833 = (0);
var i__34206_34834 = (0);
while(true){
if((i__34206_34834 < count__34205_34833)){
var child_34835 = chunk__34204_34832.cljs$core$IIndexed$_nth$arity$2(null,i__34206_34834);
if(cljs.core.truth_(child_34835)){
node.appendChild(child_34835);


var G__34836 = seq__34202_34831;
var G__34837 = chunk__34204_34832;
var G__34838 = count__34205_34833;
var G__34839 = (i__34206_34834 + (1));
seq__34202_34831 = G__34836;
chunk__34204_34832 = G__34837;
count__34205_34833 = G__34838;
i__34206_34834 = G__34839;
continue;
} else {
var G__34841 = seq__34202_34831;
var G__34842 = chunk__34204_34832;
var G__34843 = count__34205_34833;
var G__34844 = (i__34206_34834 + (1));
seq__34202_34831 = G__34841;
chunk__34204_34832 = G__34842;
count__34205_34833 = G__34843;
i__34206_34834 = G__34844;
continue;
}
} else {
var temp__5735__auto___34845 = cljs.core.seq(seq__34202_34831);
if(temp__5735__auto___34845){
var seq__34202_34846__$1 = temp__5735__auto___34845;
if(cljs.core.chunked_seq_QMARK_(seq__34202_34846__$1)){
var c__4556__auto___34847 = cljs.core.chunk_first(seq__34202_34846__$1);
var G__34848 = cljs.core.chunk_rest(seq__34202_34846__$1);
var G__34849 = c__4556__auto___34847;
var G__34850 = cljs.core.count(c__4556__auto___34847);
var G__34851 = (0);
seq__34202_34831 = G__34848;
chunk__34204_34832 = G__34849;
count__34205_34833 = G__34850;
i__34206_34834 = G__34851;
continue;
} else {
var child_34855 = cljs.core.first(seq__34202_34846__$1);
if(cljs.core.truth_(child_34855)){
node.appendChild(child_34855);


var G__34856 = cljs.core.next(seq__34202_34846__$1);
var G__34857 = null;
var G__34858 = (0);
var G__34859 = (0);
seq__34202_34831 = G__34856;
chunk__34204_34832 = G__34857;
count__34205_34833 = G__34858;
i__34206_34834 = G__34859;
continue;
} else {
var G__34861 = cljs.core.next(seq__34202_34846__$1);
var G__34862 = null;
var G__34863 = (0);
var G__34864 = (0);
seq__34202_34831 = G__34861;
chunk__34204_34832 = G__34862;
count__34205_34833 = G__34863;
i__34206_34834 = G__34864;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34830);
}
}


var G__34865 = seq__34154_34822;
var G__34866 = chunk__34156_34823;
var G__34867 = count__34157_34824;
var G__34868 = (i__34158_34825 + (1));
seq__34154_34822 = G__34865;
chunk__34156_34823 = G__34866;
count__34157_34824 = G__34867;
i__34158_34825 = G__34868;
continue;
} else {
var G__34869 = seq__34154_34822;
var G__34870 = chunk__34156_34823;
var G__34871 = count__34157_34824;
var G__34872 = (i__34158_34825 + (1));
seq__34154_34822 = G__34869;
chunk__34156_34823 = G__34870;
count__34157_34824 = G__34871;
i__34158_34825 = G__34872;
continue;
}
} else {
var temp__5735__auto___34873 = cljs.core.seq(seq__34154_34822);
if(temp__5735__auto___34873){
var seq__34154_34874__$1 = temp__5735__auto___34873;
if(cljs.core.chunked_seq_QMARK_(seq__34154_34874__$1)){
var c__4556__auto___34876 = cljs.core.chunk_first(seq__34154_34874__$1);
var G__34877 = cljs.core.chunk_rest(seq__34154_34874__$1);
var G__34878 = c__4556__auto___34876;
var G__34879 = cljs.core.count(c__4556__auto___34876);
var G__34880 = (0);
seq__34154_34822 = G__34877;
chunk__34156_34823 = G__34878;
count__34157_34824 = G__34879;
i__34158_34825 = G__34880;
continue;
} else {
var child_struct_34881 = cljs.core.first(seq__34154_34874__$1);
if((!((child_struct_34881 == null)))){
if(typeof child_struct_34881 === 'string'){
var text_34882 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34882),child_struct_34881].join(''));
} else {
var children_34883 = shadow.dom.svg_node(child_struct_34881);
if(cljs.core.seq_QMARK_(children_34883)){
var seq__34225_34884 = cljs.core.seq(children_34883);
var chunk__34227_34885 = null;
var count__34228_34886 = (0);
var i__34229_34887 = (0);
while(true){
if((i__34229_34887 < count__34228_34886)){
var child_34889 = chunk__34227_34885.cljs$core$IIndexed$_nth$arity$2(null,i__34229_34887);
if(cljs.core.truth_(child_34889)){
node.appendChild(child_34889);


var G__34890 = seq__34225_34884;
var G__34891 = chunk__34227_34885;
var G__34892 = count__34228_34886;
var G__34893 = (i__34229_34887 + (1));
seq__34225_34884 = G__34890;
chunk__34227_34885 = G__34891;
count__34228_34886 = G__34892;
i__34229_34887 = G__34893;
continue;
} else {
var G__34895 = seq__34225_34884;
var G__34896 = chunk__34227_34885;
var G__34897 = count__34228_34886;
var G__34898 = (i__34229_34887 + (1));
seq__34225_34884 = G__34895;
chunk__34227_34885 = G__34896;
count__34228_34886 = G__34897;
i__34229_34887 = G__34898;
continue;
}
} else {
var temp__5735__auto___34902__$1 = cljs.core.seq(seq__34225_34884);
if(temp__5735__auto___34902__$1){
var seq__34225_34903__$1 = temp__5735__auto___34902__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34225_34903__$1)){
var c__4556__auto___34904 = cljs.core.chunk_first(seq__34225_34903__$1);
var G__34906 = cljs.core.chunk_rest(seq__34225_34903__$1);
var G__34907 = c__4556__auto___34904;
var G__34908 = cljs.core.count(c__4556__auto___34904);
var G__34909 = (0);
seq__34225_34884 = G__34906;
chunk__34227_34885 = G__34907;
count__34228_34886 = G__34908;
i__34229_34887 = G__34909;
continue;
} else {
var child_34910 = cljs.core.first(seq__34225_34903__$1);
if(cljs.core.truth_(child_34910)){
node.appendChild(child_34910);


var G__34911 = cljs.core.next(seq__34225_34903__$1);
var G__34912 = null;
var G__34913 = (0);
var G__34914 = (0);
seq__34225_34884 = G__34911;
chunk__34227_34885 = G__34912;
count__34228_34886 = G__34913;
i__34229_34887 = G__34914;
continue;
} else {
var G__34915 = cljs.core.next(seq__34225_34903__$1);
var G__34916 = null;
var G__34917 = (0);
var G__34918 = (0);
seq__34225_34884 = G__34915;
chunk__34227_34885 = G__34916;
count__34228_34886 = G__34917;
i__34229_34887 = G__34918;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34883);
}
}


var G__34919 = cljs.core.next(seq__34154_34874__$1);
var G__34920 = null;
var G__34921 = (0);
var G__34922 = (0);
seq__34154_34822 = G__34919;
chunk__34156_34823 = G__34920;
count__34157_34824 = G__34921;
i__34158_34825 = G__34922;
continue;
} else {
var G__34923 = cljs.core.next(seq__34154_34874__$1);
var G__34924 = null;
var G__34925 = (0);
var G__34926 = (0);
seq__34154_34822 = G__34923;
chunk__34156_34823 = G__34924;
count__34157_34824 = G__34925;
i__34158_34825 = G__34926;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___34929 = arguments.length;
var i__4737__auto___34930 = (0);
while(true){
if((i__4737__auto___34930 < len__4736__auto___34929)){
args__4742__auto__.push((arguments[i__4737__auto___34930]));

var G__34931 = (i__4737__auto___34930 + (1));
i__4737__auto___34930 = G__34931;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34261){
var G__34262 = cljs.core.first(seq34261);
var seq34261__$1 = cljs.core.next(seq34261);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34262,seq34261__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34271 = arguments.length;
switch (G__34271) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__30488__auto___34936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (1))){
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34294__$1,(2),once_or_cleanup);
} else {
if((state_val_34295 === (2))){
var inst_34291 = (state_34294[(2)]);
var inst_34292 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34294__$1 = (function (){var statearr_34298 = state_34294;
(statearr_34298[(7)] = inst_34291);

return statearr_34298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34294__$1,inst_34292);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30406__auto__ = null;
var shadow$dom$state_machine__30406__auto____0 = (function (){
var statearr_34302 = [null,null,null,null,null,null,null,null];
(statearr_34302[(0)] = shadow$dom$state_machine__30406__auto__);

(statearr_34302[(1)] = (1));

return statearr_34302;
});
var shadow$dom$state_machine__30406__auto____1 = (function (state_34294){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_34294);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e34304){var ex__30409__auto__ = e34304;
var statearr_34305_34937 = state_34294;
(statearr_34305_34937[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_34294[(4)]))){
var statearr_34308_34938 = state_34294;
(statearr_34308_34938[(1)] = cljs.core.first((state_34294[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34939 = state_34294;
state_34294 = G__34939;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
shadow$dom$state_machine__30406__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30406__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30406__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30406__auto____0;
shadow$dom$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30406__auto____1;
return shadow$dom$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_34311 = f__30489__auto__();
(statearr_34311[(6)] = c__30488__auto___34936);

return statearr_34311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
