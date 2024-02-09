goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42879){
var map__42880 = p__42879;
var map__42880__$1 = (((((!((map__42880 == null))))?(((((map__42880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42880):map__42880);
var m = map__42880__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42880__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42882_42983 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42883_42984 = null;
var count__42884_42985 = (0);
var i__42885_42986 = (0);
while(true){
if((i__42885_42986 < count__42884_42985)){
var f_42987 = chunk__42883_42984.cljs$core$IIndexed$_nth$arity$2(null,i__42885_42986);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42987], 0));


var G__42988 = seq__42882_42983;
var G__42989 = chunk__42883_42984;
var G__42990 = count__42884_42985;
var G__42991 = (i__42885_42986 + (1));
seq__42882_42983 = G__42988;
chunk__42883_42984 = G__42989;
count__42884_42985 = G__42990;
i__42885_42986 = G__42991;
continue;
} else {
var temp__5735__auto___42992 = cljs.core.seq(seq__42882_42983);
if(temp__5735__auto___42992){
var seq__42882_42993__$1 = temp__5735__auto___42992;
if(cljs.core.chunked_seq_QMARK_(seq__42882_42993__$1)){
var c__4556__auto___42994 = cljs.core.chunk_first(seq__42882_42993__$1);
var G__42995 = cljs.core.chunk_rest(seq__42882_42993__$1);
var G__42996 = c__4556__auto___42994;
var G__42997 = cljs.core.count(c__4556__auto___42994);
var G__42998 = (0);
seq__42882_42983 = G__42995;
chunk__42883_42984 = G__42996;
count__42884_42985 = G__42997;
i__42885_42986 = G__42998;
continue;
} else {
var f_42999 = cljs.core.first(seq__42882_42993__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42999], 0));


var G__43000 = cljs.core.next(seq__42882_42993__$1);
var G__43001 = null;
var G__43002 = (0);
var G__43003 = (0);
seq__42882_42983 = G__43000;
chunk__42883_42984 = G__43001;
count__42884_42985 = G__43002;
i__42885_42986 = G__43003;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43004 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_43004], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_43004)))?cljs.core.second(arglists_43004):arglists_43004)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42886_43005 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42887_43006 = null;
var count__42888_43007 = (0);
var i__42889_43008 = (0);
while(true){
if((i__42889_43008 < count__42888_43007)){
var vec__42900_43009 = chunk__42887_43006.cljs$core$IIndexed$_nth$arity$2(null,i__42889_43008);
var name_43010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42900_43009,(0),null);
var map__42903_43011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42900_43009,(1),null);
var map__42903_43012__$1 = (((((!((map__42903_43011 == null))))?(((((map__42903_43011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42903_43011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42903_43011):map__42903_43011);
var doc_43013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42903_43012__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42903_43012__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43010], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43014], 0));

if(cljs.core.truth_(doc_43013)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43013], 0));
} else {
}


var G__43015 = seq__42886_43005;
var G__43016 = chunk__42887_43006;
var G__43017 = count__42888_43007;
var G__43018 = (i__42889_43008 + (1));
seq__42886_43005 = G__43015;
chunk__42887_43006 = G__43016;
count__42888_43007 = G__43017;
i__42889_43008 = G__43018;
continue;
} else {
var temp__5735__auto___43019 = cljs.core.seq(seq__42886_43005);
if(temp__5735__auto___43019){
var seq__42886_43020__$1 = temp__5735__auto___43019;
if(cljs.core.chunked_seq_QMARK_(seq__42886_43020__$1)){
var c__4556__auto___43021 = cljs.core.chunk_first(seq__42886_43020__$1);
var G__43022 = cljs.core.chunk_rest(seq__42886_43020__$1);
var G__43023 = c__4556__auto___43021;
var G__43024 = cljs.core.count(c__4556__auto___43021);
var G__43025 = (0);
seq__42886_43005 = G__43022;
chunk__42887_43006 = G__43023;
count__42888_43007 = G__43024;
i__42889_43008 = G__43025;
continue;
} else {
var vec__42905_43026 = cljs.core.first(seq__42886_43020__$1);
var name_43027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42905_43026,(0),null);
var map__42908_43028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42905_43026,(1),null);
var map__42908_43029__$1 = (((((!((map__42908_43028 == null))))?(((((map__42908_43028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42908_43028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42908_43028):map__42908_43028);
var doc_43030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42908_43029__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42908_43029__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_43027], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_43031], 0));

if(cljs.core.truth_(doc_43030)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_43030], 0));
} else {
}


var G__43032 = cljs.core.next(seq__42886_43020__$1);
var G__43033 = null;
var G__43034 = (0);
var G__43035 = (0);
seq__42886_43005 = G__43032;
chunk__42887_43006 = G__43033;
count__42888_43007 = G__43034;
i__42889_43008 = G__43035;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__42910 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42911 = null;
var count__42912 = (0);
var i__42913 = (0);
while(true){
if((i__42913 < count__42912)){
var role = chunk__42911.cljs$core$IIndexed$_nth$arity$2(null,i__42913);
var temp__5735__auto___43036__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43036__$1)){
var spec_43037 = temp__5735__auto___43036__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43037)], 0));
} else {
}


var G__43038 = seq__42910;
var G__43039 = chunk__42911;
var G__43040 = count__42912;
var G__43041 = (i__42913 + (1));
seq__42910 = G__43038;
chunk__42911 = G__43039;
count__42912 = G__43040;
i__42913 = G__43041;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42910);
if(temp__5735__auto____$1){
var seq__42910__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42910__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42910__$1);
var G__43042 = cljs.core.chunk_rest(seq__42910__$1);
var G__43043 = c__4556__auto__;
var G__43044 = cljs.core.count(c__4556__auto__);
var G__43045 = (0);
seq__42910 = G__43042;
chunk__42911 = G__43043;
count__42912 = G__43044;
i__42913 = G__43045;
continue;
} else {
var role = cljs.core.first(seq__42910__$1);
var temp__5735__auto___43046__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___43046__$2)){
var spec_43047 = temp__5735__auto___43046__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_43047)], 0));
} else {
}


var G__43048 = cljs.core.next(seq__42910__$1);
var G__43049 = null;
var G__43050 = (0);
var G__43051 = (0);
seq__42910 = G__43048;
chunk__42911 = G__43049;
count__42912 = G__43050;
i__42913 = G__43051;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__43052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__43053 = cljs.core.ex_cause(t);
via = G__43052;
t = G__43053;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42916 = datafied_throwable;
var map__42916__$1 = (((((!((map__42916 == null))))?(((((map__42916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42916):map__42916);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42916__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42916__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42916__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42917 = cljs.core.last(via);
var map__42917__$1 = (((((!((map__42917 == null))))?(((((map__42917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42917):map__42917);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42917__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42918 = data;
var map__42918__$1 = (((((!((map__42918 == null))))?(((((map__42918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42918):map__42918);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42918__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42919 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42919__$1 = (((((!((map__42919 == null))))?(((((map__42919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42919.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42919):map__42919);
var top_data = map__42919__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42919__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42924 = phase;
var G__42924__$1 = (((G__42924 instanceof cljs.core.Keyword))?G__42924.fqn:null);
switch (G__42924__$1) {
case "read-source":
var map__42925 = data;
var map__42925__$1 = (((((!((map__42925 == null))))?(((((map__42925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42925):map__42925);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42925__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42925__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42927 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42927__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42927,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42927);
var G__42927__$2 = (cljs.core.truth_((function (){var fexpr__42928 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42928.cljs$core$IFn$_invoke$arity$1 ? fexpr__42928.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42928.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42927__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42927__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42927__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42927__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42929 = top_data;
var G__42929__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42929,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42929);
var G__42929__$2 = (cljs.core.truth_((function (){var fexpr__42930 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42930.cljs$core$IFn$_invoke$arity$1 ? fexpr__42930.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42930.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42929__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42929__$1);
var G__42929__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42929__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42929__$2);
var G__42929__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42929__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42929__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42929__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42929__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42931 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42931,(3),null);
var G__42934 = top_data;
var G__42934__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42934,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42934);
var G__42934__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42934__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42934__$1);
var G__42934__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42934__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42934__$2);
var G__42934__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42934__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42934__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42934__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42934__$4;
}

break;
case "execution":
var vec__42935 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42935,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42915_SHARP_){
var or__4126__auto__ = (p1__42915_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__42939 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42939.cljs$core$IFn$_invoke$arity$1 ? fexpr__42939.cljs$core$IFn$_invoke$arity$1(p1__42915_SHARP_) : fexpr__42939.call(null,p1__42915_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__42940 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42940__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42940,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42940);
var G__42940__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42940__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42940__$1);
var G__42940__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42940__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42940__$2);
var G__42940__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42940__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42940__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42940__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42940__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42924__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42943){
var map__42944 = p__42943;
var map__42944__$1 = (((((!((map__42944 == null))))?(((((map__42944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42944):map__42944);
var triage_data = map__42944__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42944__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42946 = phase;
var G__42946__$1 = (((G__42946 instanceof cljs.core.Keyword))?G__42946.fqn:null);
switch (G__42946__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42947 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42948 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42949 = loc;
var G__42950 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42951_43056 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42952_43057 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42953_43058 = true;
var _STAR_print_fn_STAR__temp_val__42954_43059 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42953_43058);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42954_43059);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42941_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42941_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42952_43057);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42951_43056);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42947,G__42948,G__42949,G__42950) : format.call(null,G__42947,G__42948,G__42949,G__42950));

break;
case "macroexpansion":
var G__42955 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42956 = cause_type;
var G__42957 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42958 = loc;
var G__42959 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42955,G__42956,G__42957,G__42958,G__42959) : format.call(null,G__42955,G__42956,G__42957,G__42958,G__42959));

break;
case "compile-syntax-check":
var G__42960 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42961 = cause_type;
var G__42962 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42963 = loc;
var G__42964 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42960,G__42961,G__42962,G__42963,G__42964) : format.call(null,G__42960,G__42961,G__42962,G__42963,G__42964));

break;
case "compilation":
var G__42965 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42966 = cause_type;
var G__42967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42968 = loc;
var G__42969 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42965,G__42966,G__42967,G__42968,G__42969) : format.call(null,G__42965,G__42966,G__42967,G__42968,G__42969));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42970 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42971 = symbol;
var G__42972 = loc;
var G__42973 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42974_43060 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42975_43061 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42976_43062 = true;
var _STAR_print_fn_STAR__temp_val__42977_43063 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42976_43062);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42977_43063);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42942_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42942_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42975_43061);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42974_43060);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42970,G__42971,G__42972,G__42973) : format.call(null,G__42970,G__42971,G__42972,G__42973));
} else {
var G__42978 = "Execution error%s at %s(%s).\n%s\n";
var G__42979 = cause_type;
var G__42980 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42981 = loc;
var G__42982 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42978,G__42979,G__42980,G__42981,G__42982) : format.call(null,G__42978,G__42979,G__42980,G__42981,G__42982));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42946__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
