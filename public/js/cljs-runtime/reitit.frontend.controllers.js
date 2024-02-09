goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__15651,match){
var map__15652 = p__15651;
var map__15652__$1 = (((((!((map__15652 == null))))?(((((map__15652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15652):map__15652);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15652__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15652__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15652__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__15654(s__15655){
return (new cljs.core.LazySeq(null,(function (){
var s__15655__$1 = s__15655;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15655__$1);
if(temp__5735__auto__){
var s__15655__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15655__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15655__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15657 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15656 = (0);
while(true){
if((i__15656 < size__4528__auto__)){
var vec__15660 = cljs.core._nth(c__4527__auto__,i__15656);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15660,(1),null);
cljs.core.chunk_append(b__15657,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__15694 = (i__15656 + (1));
i__15656 = G__15694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15657),reitit$frontend$controllers$get_identity_$_iter__15654(cljs.core.chunk_rest(s__15655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15657),null);
}
} else {
var vec__15663 = cljs.core.first(s__15655__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15663,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15663,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__15654(cljs.core.rest(s__15655__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__15682 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__15682) : f.call(null,G__15682));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__15686_15695 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__15687_15696 = null;
var count__15688_15697 = (0);
var i__15689_15698 = (0);
while(true){
if((i__15689_15698 < count__15688_15697)){
var controller_15699 = chunk__15687_15696.cljs$core$IIndexed$_nth$arity$2(null,i__15689_15698);
reitit.frontend.controllers.apply_controller(controller_15699,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__15700 = seq__15686_15695;
var G__15701 = chunk__15687_15696;
var G__15702 = count__15688_15697;
var G__15703 = (i__15689_15698 + (1));
seq__15686_15695 = G__15700;
chunk__15687_15696 = G__15701;
count__15688_15697 = G__15702;
i__15689_15698 = G__15703;
continue;
} else {
var temp__5735__auto___15704 = cljs.core.seq(seq__15686_15695);
if(temp__5735__auto___15704){
var seq__15686_15705__$1 = temp__5735__auto___15704;
if(cljs.core.chunked_seq_QMARK_(seq__15686_15705__$1)){
var c__4556__auto___15706 = cljs.core.chunk_first(seq__15686_15705__$1);
var G__15707 = cljs.core.chunk_rest(seq__15686_15705__$1);
var G__15708 = c__4556__auto___15706;
var G__15709 = cljs.core.count(c__4556__auto___15706);
var G__15710 = (0);
seq__15686_15695 = G__15707;
chunk__15687_15696 = G__15708;
count__15688_15697 = G__15709;
i__15689_15698 = G__15710;
continue;
} else {
var controller_15711 = cljs.core.first(seq__15686_15705__$1);
reitit.frontend.controllers.apply_controller(controller_15711,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__15712 = cljs.core.next(seq__15686_15705__$1);
var G__15713 = null;
var G__15714 = (0);
var G__15715 = (0);
seq__15686_15695 = G__15712;
chunk__15687_15696 = G__15713;
count__15688_15697 = G__15714;
i__15689_15698 = G__15715;
continue;
}
} else {
}
}
break;
}

var seq__15690_15716 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__15691_15717 = null;
var count__15692_15718 = (0);
var i__15693_15719 = (0);
while(true){
if((i__15693_15719 < count__15692_15718)){
var controller_15720 = chunk__15691_15717.cljs$core$IIndexed$_nth$arity$2(null,i__15693_15719);
reitit.frontend.controllers.apply_controller(controller_15720,new cljs.core.Keyword(null,"start","start",-355208981));


var G__15721 = seq__15690_15716;
var G__15722 = chunk__15691_15717;
var G__15723 = count__15692_15718;
var G__15724 = (i__15693_15719 + (1));
seq__15690_15716 = G__15721;
chunk__15691_15717 = G__15722;
count__15692_15718 = G__15723;
i__15693_15719 = G__15724;
continue;
} else {
var temp__5735__auto___15725 = cljs.core.seq(seq__15690_15716);
if(temp__5735__auto___15725){
var seq__15690_15726__$1 = temp__5735__auto___15725;
if(cljs.core.chunked_seq_QMARK_(seq__15690_15726__$1)){
var c__4556__auto___15727 = cljs.core.chunk_first(seq__15690_15726__$1);
var G__15728 = cljs.core.chunk_rest(seq__15690_15726__$1);
var G__15729 = c__4556__auto___15727;
var G__15730 = cljs.core.count(c__4556__auto___15727);
var G__15731 = (0);
seq__15690_15716 = G__15728;
chunk__15691_15717 = G__15729;
count__15692_15718 = G__15730;
i__15693_15719 = G__15731;
continue;
} else {
var controller_15732 = cljs.core.first(seq__15690_15726__$1);
reitit.frontend.controllers.apply_controller(controller_15732,new cljs.core.Keyword(null,"start","start",-355208981));


var G__15733 = cljs.core.next(seq__15690_15726__$1);
var G__15734 = null;
var G__15735 = (0);
var G__15736 = (0);
seq__15690_15716 = G__15733;
chunk__15691_15717 = G__15734;
count__15692_15718 = G__15735;
i__15693_15719 = G__15736;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
