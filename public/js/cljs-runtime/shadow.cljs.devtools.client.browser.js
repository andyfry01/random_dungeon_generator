goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36681 = arguments.length;
var i__4737__auto___36682 = (0);
while(true){
if((i__4737__auto___36682 < len__4736__auto___36681)){
args__4742__auto__.push((arguments[i__4737__auto___36682]));

var G__36683 = (i__4737__auto___36682 + (1));
i__4737__auto___36682 = G__36683;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36500){
var G__36501 = cljs.core.first(seq36500);
var seq36500__$1 = cljs.core.next(seq36500);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36501,seq36500__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36510 = cljs.core.seq(sources);
var chunk__36512 = null;
var count__36513 = (0);
var i__36514 = (0);
while(true){
if((i__36514 < count__36513)){
var map__36527 = chunk__36512.cljs$core$IIndexed$_nth$arity$2(null,i__36514);
var map__36527__$1 = (((((!((map__36527 == null))))?(((((map__36527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36527):map__36527);
var src = map__36527__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36527__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36527__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36527__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36527__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36530){var e_36684 = e36530;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36684);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36684.message)].join('')));
}

var G__36685 = seq__36510;
var G__36686 = chunk__36512;
var G__36687 = count__36513;
var G__36688 = (i__36514 + (1));
seq__36510 = G__36685;
chunk__36512 = G__36686;
count__36513 = G__36687;
i__36514 = G__36688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36510);
if(temp__5735__auto__){
var seq__36510__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36510__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36510__$1);
var G__36689 = cljs.core.chunk_rest(seq__36510__$1);
var G__36690 = c__4556__auto__;
var G__36691 = cljs.core.count(c__4556__auto__);
var G__36692 = (0);
seq__36510 = G__36689;
chunk__36512 = G__36690;
count__36513 = G__36691;
i__36514 = G__36692;
continue;
} else {
var map__36532 = cljs.core.first(seq__36510__$1);
var map__36532__$1 = (((((!((map__36532 == null))))?(((((map__36532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36532):map__36532);
var src = map__36532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36532__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36534){var e_36693 = e36534;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36693);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36693.message)].join('')));
}

var G__36694 = cljs.core.next(seq__36510__$1);
var G__36695 = null;
var G__36696 = (0);
var G__36697 = (0);
seq__36510 = G__36694;
chunk__36512 = G__36695;
count__36513 = G__36696;
i__36514 = G__36697;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36535 = cljs.core.seq(js_requires);
var chunk__36536 = null;
var count__36537 = (0);
var i__36538 = (0);
while(true){
if((i__36538 < count__36537)){
var js_ns = chunk__36536.cljs$core$IIndexed$_nth$arity$2(null,i__36538);
var require_str_36698 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36698);


var G__36699 = seq__36535;
var G__36700 = chunk__36536;
var G__36701 = count__36537;
var G__36702 = (i__36538 + (1));
seq__36535 = G__36699;
chunk__36536 = G__36700;
count__36537 = G__36701;
i__36538 = G__36702;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36535);
if(temp__5735__auto__){
var seq__36535__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36535__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36535__$1);
var G__36703 = cljs.core.chunk_rest(seq__36535__$1);
var G__36704 = c__4556__auto__;
var G__36705 = cljs.core.count(c__4556__auto__);
var G__36706 = (0);
seq__36535 = G__36703;
chunk__36536 = G__36704;
count__36537 = G__36705;
i__36538 = G__36706;
continue;
} else {
var js_ns = cljs.core.first(seq__36535__$1);
var require_str_36707 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36707);


var G__36708 = cljs.core.next(seq__36535__$1);
var G__36709 = null;
var G__36710 = (0);
var G__36711 = (0);
seq__36535 = G__36708;
chunk__36536 = G__36709;
count__36537 = G__36710;
i__36538 = G__36711;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36541){
var map__36542 = p__36541;
var map__36542__$1 = (((((!((map__36542 == null))))?(((((map__36542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36542):map__36542);
var msg = map__36542__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36542__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36542__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36544(s__36545){
return (new cljs.core.LazySeq(null,(function (){
var s__36545__$1 = s__36545;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36545__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36550 = cljs.core.first(xs__6292__auto__);
var map__36550__$1 = (((((!((map__36550 == null))))?(((((map__36550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36550):map__36550);
var src = map__36550__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36550__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36550__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__36545__$1,map__36550,map__36550__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36542,map__36542__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36544_$_iter__36546(s__36547){
return (new cljs.core.LazySeq(null,((function (s__36545__$1,map__36550,map__36550__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36542,map__36542__$1,msg,info,reload_info){
return (function (){
var s__36547__$1 = s__36547;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36547__$1);
if(temp__5735__auto____$1){
var s__36547__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36547__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36547__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36549 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36548 = (0);
while(true){
if((i__36548 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__36548);
cljs.core.chunk_append(b__36549,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36717 = (i__36548 + (1));
i__36548 = G__36717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36549),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36544_$_iter__36546(cljs.core.chunk_rest(s__36547__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36549),null);
}
} else {
var warning = cljs.core.first(s__36547__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36544_$_iter__36546(cljs.core.rest(s__36547__$2)));
}
} else {
return null;
}
break;
}
});})(s__36545__$1,map__36550,map__36550__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36542,map__36542__$1,msg,info,reload_info))
,null,null));
});})(s__36545__$1,map__36550,map__36550__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36542,map__36542__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36544(cljs.core.rest(s__36545__$1)));
} else {
var G__36721 = cljs.core.rest(s__36545__$1);
s__36545__$1 = G__36721;
continue;
}
} else {
var G__36722 = cljs.core.rest(s__36545__$1);
s__36545__$1 = G__36722;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36555_36723 = cljs.core.seq(warnings);
var chunk__36556_36724 = null;
var count__36557_36725 = (0);
var i__36558_36726 = (0);
while(true){
if((i__36558_36726 < count__36557_36725)){
var map__36563_36727 = chunk__36556_36724.cljs$core$IIndexed$_nth$arity$2(null,i__36558_36726);
var map__36563_36728__$1 = (((((!((map__36563_36727 == null))))?(((((map__36563_36727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36563_36727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36563_36727):map__36563_36727);
var w_36729 = map__36563_36728__$1;
var msg_36730__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563_36728__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563_36728__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563_36728__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36563_36728__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36733)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36731),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36732),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36730__$1)].join(''));


var G__36734 = seq__36555_36723;
var G__36735 = chunk__36556_36724;
var G__36736 = count__36557_36725;
var G__36737 = (i__36558_36726 + (1));
seq__36555_36723 = G__36734;
chunk__36556_36724 = G__36735;
count__36557_36725 = G__36736;
i__36558_36726 = G__36737;
continue;
} else {
var temp__5735__auto___36738 = cljs.core.seq(seq__36555_36723);
if(temp__5735__auto___36738){
var seq__36555_36741__$1 = temp__5735__auto___36738;
if(cljs.core.chunked_seq_QMARK_(seq__36555_36741__$1)){
var c__4556__auto___36742 = cljs.core.chunk_first(seq__36555_36741__$1);
var G__36743 = cljs.core.chunk_rest(seq__36555_36741__$1);
var G__36744 = c__4556__auto___36742;
var G__36745 = cljs.core.count(c__4556__auto___36742);
var G__36746 = (0);
seq__36555_36723 = G__36743;
chunk__36556_36724 = G__36744;
count__36557_36725 = G__36745;
i__36558_36726 = G__36746;
continue;
} else {
var map__36565_36748 = cljs.core.first(seq__36555_36741__$1);
var map__36565_36749__$1 = (((((!((map__36565_36748 == null))))?(((((map__36565_36748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36565_36748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36565_36748):map__36565_36748);
var w_36750 = map__36565_36749__$1;
var msg_36751__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565_36749__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565_36749__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565_36749__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36565_36749__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36754)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36752),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36753),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36751__$1)].join(''));


var G__36758 = cljs.core.next(seq__36555_36741__$1);
var G__36759 = null;
var G__36760 = (0);
var G__36761 = (0);
seq__36555_36723 = G__36758;
chunk__36556_36724 = G__36759;
count__36557_36725 = G__36760;
i__36558_36726 = G__36761;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36540_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36540_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36569){
var map__36570 = p__36569;
var map__36570__$1 = (((((!((map__36570 == null))))?(((((map__36570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36570):map__36570);
var msg = map__36570__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36570__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36572 = cljs.core.seq(updates);
var chunk__36574 = null;
var count__36575 = (0);
var i__36576 = (0);
while(true){
if((i__36576 < count__36575)){
var path = chunk__36574.cljs$core$IIndexed$_nth$arity$2(null,i__36576);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36611_36778 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36614_36779 = null;
var count__36615_36780 = (0);
var i__36616_36781 = (0);
while(true){
if((i__36616_36781 < count__36615_36780)){
var node_36782 = chunk__36614_36779.cljs$core$IIndexed$_nth$arity$2(null,i__36616_36781);
var path_match_36783 = shadow.cljs.devtools.client.browser.match_paths(node_36782.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36783)){
var new_link_36784 = (function (){var G__36622 = node_36782.cloneNode(true);
G__36622.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36783),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36622;
})();
(new_link_36784.onload = ((function (seq__36611_36778,chunk__36614_36779,count__36615_36780,i__36616_36781,seq__36572,chunk__36574,count__36575,i__36576,new_link_36784,path_match_36783,node_36782,path,map__36570,map__36570__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36782);
});})(seq__36611_36778,chunk__36614_36779,count__36615_36780,i__36616_36781,seq__36572,chunk__36574,count__36575,i__36576,new_link_36784,path_match_36783,node_36782,path,map__36570,map__36570__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36783], 0));

goog.dom.insertSiblingAfter(new_link_36784,node_36782);


var G__36785 = seq__36611_36778;
var G__36786 = chunk__36614_36779;
var G__36787 = count__36615_36780;
var G__36788 = (i__36616_36781 + (1));
seq__36611_36778 = G__36785;
chunk__36614_36779 = G__36786;
count__36615_36780 = G__36787;
i__36616_36781 = G__36788;
continue;
} else {
var G__36789 = seq__36611_36778;
var G__36790 = chunk__36614_36779;
var G__36791 = count__36615_36780;
var G__36792 = (i__36616_36781 + (1));
seq__36611_36778 = G__36789;
chunk__36614_36779 = G__36790;
count__36615_36780 = G__36791;
i__36616_36781 = G__36792;
continue;
}
} else {
var temp__5735__auto___36794 = cljs.core.seq(seq__36611_36778);
if(temp__5735__auto___36794){
var seq__36611_36795__$1 = temp__5735__auto___36794;
if(cljs.core.chunked_seq_QMARK_(seq__36611_36795__$1)){
var c__4556__auto___36796 = cljs.core.chunk_first(seq__36611_36795__$1);
var G__36797 = cljs.core.chunk_rest(seq__36611_36795__$1);
var G__36798 = c__4556__auto___36796;
var G__36799 = cljs.core.count(c__4556__auto___36796);
var G__36800 = (0);
seq__36611_36778 = G__36797;
chunk__36614_36779 = G__36798;
count__36615_36780 = G__36799;
i__36616_36781 = G__36800;
continue;
} else {
var node_36801 = cljs.core.first(seq__36611_36795__$1);
var path_match_36802 = shadow.cljs.devtools.client.browser.match_paths(node_36801.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36802)){
var new_link_36803 = (function (){var G__36623 = node_36801.cloneNode(true);
G__36623.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36802),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36623;
})();
(new_link_36803.onload = ((function (seq__36611_36778,chunk__36614_36779,count__36615_36780,i__36616_36781,seq__36572,chunk__36574,count__36575,i__36576,new_link_36803,path_match_36802,node_36801,seq__36611_36795__$1,temp__5735__auto___36794,path,map__36570,map__36570__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36801);
});})(seq__36611_36778,chunk__36614_36779,count__36615_36780,i__36616_36781,seq__36572,chunk__36574,count__36575,i__36576,new_link_36803,path_match_36802,node_36801,seq__36611_36795__$1,temp__5735__auto___36794,path,map__36570,map__36570__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36802], 0));

goog.dom.insertSiblingAfter(new_link_36803,node_36801);


var G__36807 = cljs.core.next(seq__36611_36795__$1);
var G__36808 = null;
var G__36809 = (0);
var G__36810 = (0);
seq__36611_36778 = G__36807;
chunk__36614_36779 = G__36808;
count__36615_36780 = G__36809;
i__36616_36781 = G__36810;
continue;
} else {
var G__36811 = cljs.core.next(seq__36611_36795__$1);
var G__36812 = null;
var G__36813 = (0);
var G__36814 = (0);
seq__36611_36778 = G__36811;
chunk__36614_36779 = G__36812;
count__36615_36780 = G__36813;
i__36616_36781 = G__36814;
continue;
}
}
} else {
}
}
break;
}


var G__36815 = seq__36572;
var G__36816 = chunk__36574;
var G__36817 = count__36575;
var G__36818 = (i__36576 + (1));
seq__36572 = G__36815;
chunk__36574 = G__36816;
count__36575 = G__36817;
i__36576 = G__36818;
continue;
} else {
var G__36819 = seq__36572;
var G__36820 = chunk__36574;
var G__36821 = count__36575;
var G__36822 = (i__36576 + (1));
seq__36572 = G__36819;
chunk__36574 = G__36820;
count__36575 = G__36821;
i__36576 = G__36822;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36572);
if(temp__5735__auto__){
var seq__36572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36572__$1);
var G__36824 = cljs.core.chunk_rest(seq__36572__$1);
var G__36825 = c__4556__auto__;
var G__36826 = cljs.core.count(c__4556__auto__);
var G__36827 = (0);
seq__36572 = G__36824;
chunk__36574 = G__36825;
count__36575 = G__36826;
i__36576 = G__36827;
continue;
} else {
var path = cljs.core.first(seq__36572__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36626_36830 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36629_36831 = null;
var count__36630_36832 = (0);
var i__36631_36833 = (0);
while(true){
if((i__36631_36833 < count__36630_36832)){
var node_36836 = chunk__36629_36831.cljs$core$IIndexed$_nth$arity$2(null,i__36631_36833);
var path_match_36837 = shadow.cljs.devtools.client.browser.match_paths(node_36836.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36837)){
var new_link_36838 = (function (){var G__36637 = node_36836.cloneNode(true);
G__36637.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36837),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36637;
})();
(new_link_36838.onload = ((function (seq__36626_36830,chunk__36629_36831,count__36630_36832,i__36631_36833,seq__36572,chunk__36574,count__36575,i__36576,new_link_36838,path_match_36837,node_36836,path,seq__36572__$1,temp__5735__auto__,map__36570,map__36570__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36836);
});})(seq__36626_36830,chunk__36629_36831,count__36630_36832,i__36631_36833,seq__36572,chunk__36574,count__36575,i__36576,new_link_36838,path_match_36837,node_36836,path,seq__36572__$1,temp__5735__auto__,map__36570,map__36570__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36837], 0));

goog.dom.insertSiblingAfter(new_link_36838,node_36836);


var G__36839 = seq__36626_36830;
var G__36840 = chunk__36629_36831;
var G__36841 = count__36630_36832;
var G__36842 = (i__36631_36833 + (1));
seq__36626_36830 = G__36839;
chunk__36629_36831 = G__36840;
count__36630_36832 = G__36841;
i__36631_36833 = G__36842;
continue;
} else {
var G__36843 = seq__36626_36830;
var G__36844 = chunk__36629_36831;
var G__36845 = count__36630_36832;
var G__36846 = (i__36631_36833 + (1));
seq__36626_36830 = G__36843;
chunk__36629_36831 = G__36844;
count__36630_36832 = G__36845;
i__36631_36833 = G__36846;
continue;
}
} else {
var temp__5735__auto___36847__$1 = cljs.core.seq(seq__36626_36830);
if(temp__5735__auto___36847__$1){
var seq__36626_36849__$1 = temp__5735__auto___36847__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36626_36849__$1)){
var c__4556__auto___36850 = cljs.core.chunk_first(seq__36626_36849__$1);
var G__36851 = cljs.core.chunk_rest(seq__36626_36849__$1);
var G__36852 = c__4556__auto___36850;
var G__36853 = cljs.core.count(c__4556__auto___36850);
var G__36854 = (0);
seq__36626_36830 = G__36851;
chunk__36629_36831 = G__36852;
count__36630_36832 = G__36853;
i__36631_36833 = G__36854;
continue;
} else {
var node_36855 = cljs.core.first(seq__36626_36849__$1);
var path_match_36856 = shadow.cljs.devtools.client.browser.match_paths(node_36855.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36856)){
var new_link_36857 = (function (){var G__36638 = node_36855.cloneNode(true);
G__36638.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36856),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36638;
})();
(new_link_36857.onload = ((function (seq__36626_36830,chunk__36629_36831,count__36630_36832,i__36631_36833,seq__36572,chunk__36574,count__36575,i__36576,new_link_36857,path_match_36856,node_36855,seq__36626_36849__$1,temp__5735__auto___36847__$1,path,seq__36572__$1,temp__5735__auto__,map__36570,map__36570__$1,msg,updates){
return (function (){
return goog.dom.removeNode(node_36855);
});})(seq__36626_36830,chunk__36629_36831,count__36630_36832,i__36631_36833,seq__36572,chunk__36574,count__36575,i__36576,new_link_36857,path_match_36856,node_36855,seq__36626_36849__$1,temp__5735__auto___36847__$1,path,seq__36572__$1,temp__5735__auto__,map__36570,map__36570__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36856], 0));

goog.dom.insertSiblingAfter(new_link_36857,node_36855);


var G__36862 = cljs.core.next(seq__36626_36849__$1);
var G__36863 = null;
var G__36864 = (0);
var G__36865 = (0);
seq__36626_36830 = G__36862;
chunk__36629_36831 = G__36863;
count__36630_36832 = G__36864;
i__36631_36833 = G__36865;
continue;
} else {
var G__36867 = cljs.core.next(seq__36626_36849__$1);
var G__36868 = null;
var G__36869 = (0);
var G__36870 = (0);
seq__36626_36830 = G__36867;
chunk__36629_36831 = G__36868;
count__36630_36832 = G__36869;
i__36631_36833 = G__36870;
continue;
}
}
} else {
}
}
break;
}


var G__36873 = cljs.core.next(seq__36572__$1);
var G__36874 = null;
var G__36875 = (0);
var G__36876 = (0);
seq__36572 = G__36873;
chunk__36574 = G__36874;
count__36575 = G__36875;
i__36576 = G__36876;
continue;
} else {
var G__36877 = cljs.core.next(seq__36572__$1);
var G__36878 = null;
var G__36879 = (0);
var G__36880 = (0);
seq__36572 = G__36877;
chunk__36574 = G__36878;
count__36575 = G__36879;
i__36576 = G__36880;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36642){
var map__36643 = p__36642;
var map__36643__$1 = (((((!((map__36643 == null))))?(((((map__36643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36643):map__36643);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36643__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36649){
var map__36650 = p__36649;
var map__36650__$1 = (((((!((map__36650 == null))))?(((((map__36650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36650):map__36650);
var _ = map__36650__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36650__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36652,done,error){
var map__36653 = p__36652;
var map__36653__$1 = (((((!((map__36653 == null))))?(((((map__36653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36653):map__36653);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36653__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36655,done,error){
var map__36656 = p__36655;
var map__36656__$1 = (((((!((map__36656 == null))))?(((((map__36656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36656):map__36656);
var msg = map__36656__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36656__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36658){
var map__36659 = p__36658;
var map__36659__$1 = (((((!((map__36659 == null))))?(((((map__36659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36659):map__36659);
var src = map__36659__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36659__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36661 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36661) : done.call(null,G__36661));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36663){
var map__36664 = p__36663;
var map__36664__$1 = (((((!((map__36664 == null))))?(((((map__36664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36664):map__36664);
var msg__$1 = map__36664__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36666){var ex = e36666;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36667){
var map__36668 = p__36667;
var map__36668__$1 = (((((!((map__36668 == null))))?(((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36668):map__36668);
var env = map__36668__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36668__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__36670){
var map__36671 = p__36670;
var map__36671__$1 = (((((!((map__36671 == null))))?(((((map__36671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36671):map__36671);
var msg = map__36671__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36671__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36674){
var map__36675 = p__36674;
var map__36675__$1 = (((((!((map__36675 == null))))?(((((map__36675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36675):map__36675);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36675__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36677){
var map__36678 = p__36677;
var map__36678__$1 = (((((!((map__36678 == null))))?(((((map__36678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36678):map__36678);
var svc = map__36678__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36678__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
