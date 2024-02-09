goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__36190,p__36191){
var map__36192 = p__36190;
var map__36192__$1 = (((((!((map__36192 == null))))?(((((map__36192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36192):map__36192);
var svc = map__36192__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36192__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36193 = p__36191;
var map__36193__$1 = (((((!((map__36193 == null))))?(((((map__36193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36193):map__36193);
var msg = map__36193__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36193__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36193__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__36202,p__36203){
var map__36204 = p__36202;
var map__36204__$1 = (((((!((map__36204 == null))))?(((((map__36204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36204):map__36204);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36204__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__36205 = p__36203;
var map__36205__$1 = (((((!((map__36205 == null))))?(((((map__36205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36205):map__36205);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__36214,p__36215){
var map__36216 = p__36214;
var map__36216__$1 = (((((!((map__36216 == null))))?(((((map__36216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36216):map__36216);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36216__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__36217 = p__36215;
var map__36217__$1 = (((((!((map__36217 == null))))?(((((map__36217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36217):map__36217);
var msg = map__36217__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36217__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__36224,tid){
var map__36225 = p__36224;
var map__36225__$1 = (((((!((map__36225 == null))))?(((((map__36225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36225):map__36225);
var svc = map__36225__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36225__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__36238 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__36239 = null;
var count__36240 = (0);
var i__36241 = (0);
while(true){
if((i__36241 < count__36240)){
var vec__36251 = chunk__36239.cljs$core$IIndexed$_nth$arity$2(null,i__36241);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36251,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36265 = seq__36238;
var G__36266 = chunk__36239;
var G__36267 = count__36240;
var G__36268 = (i__36241 + (1));
seq__36238 = G__36265;
chunk__36239 = G__36266;
count__36240 = G__36267;
i__36241 = G__36268;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36238);
if(temp__5735__auto__){
var seq__36238__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36238__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36238__$1);
var G__36269 = cljs.core.chunk_rest(seq__36238__$1);
var G__36270 = c__4556__auto__;
var G__36271 = cljs.core.count(c__4556__auto__);
var G__36272 = (0);
seq__36238 = G__36269;
chunk__36239 = G__36270;
count__36240 = G__36271;
i__36241 = G__36272;
continue;
} else {
var vec__36255 = cljs.core.first(seq__36238__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36255,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36255,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__36273 = cljs.core.next(seq__36238__$1);
var G__36274 = null;
var G__36275 = (0);
var G__36276 = (0);
seq__36238 = G__36273;
chunk__36239 = G__36274;
count__36240 = G__36275;
i__36241 = G__36276;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__36229_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__36229_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__36230_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__36230_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__36231_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__36231_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__36232_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__36232_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__36261){
var map__36262 = p__36261;
var map__36262__$1 = (((((!((map__36262 == null))))?(((((map__36262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36262):map__36262);
var svc = map__36262__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36262__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
