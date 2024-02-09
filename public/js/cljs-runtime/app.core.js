goog.provide('app.core');
app.core.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","root","app.core/root",-1637851257),new cljs.core.Keyword(null,"view","view",1247994814),app.main.root], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/pieces",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","pieces","app.core/pieces",1732120885),new cljs.core.Keyword(null,"view","view",1247994814),app.etc.pieces_page], null)], null)], null);
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.match !== 'undefined')){
} else {
app.core.match = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.core.current_page = (function app$core$current_page(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["matchh? ",cljs.core.deref(app.core.match)], 0));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),(cljs.core.truth_(cljs.core.deref(app.core.match))?(function (){var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.match)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view,cljs.core.deref(app.core.match)], null);
})():null)], null);
});
app.core.render = (function app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.current_page], null),goog.dom.getElement("root"));
});
app.core.init = (function app$core$init(){
reitit.frontend.easy.start_BANG_(reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(app.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null)),(function (new_match){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.match,(function (old_match){
if(cljs.core.truth_(new_match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match));
} else {
return null;
}
}));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

return app.core.render();
});
goog.exportSymbol('app.core.init', app.core.init);
/**
 * The `:dev/after-load` metadata causes this function to be called after
 *   shadow-cljs hot-reloads code. This function is called implicitly by its
 *   annotation.
 */
app.core.re_render = (function app$core$re_render(){
return app.core.init();
});

//# sourceMappingURL=app.core.js.map
