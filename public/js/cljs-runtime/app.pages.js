goog.provide('app.pages');
app.pages.corners = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.corner_ne,app.pieces.corner_nw,app.pieces.corner_se,app.pieces.corner_sw], null);
app.pages.walls = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.wall_n,app.pieces.wall_e,app.pieces.wall_s,app.pieces.wall_w], null);
app.pages.hallways = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.hallway_ew,app.pieces.hallway_ns], null);
app.pages.entrances = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.entrance_n,app.pieces.entrance_e,app.pieces.entrance_s,app.pieces.entrance_w], null);
/**
 * The initial "pool" from which random pieces are selected.
 *   In this array, some pieces only appear once, some appear many times in order to weight their appearance in the generated map.
 */
app.pages.starting_pieces = cljs.core.flatten(cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(app.pages.corners,app.pages.walls,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.pages.hallways,app.pages.entrances,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((50),app.pieces.blank),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((20),app.pieces.wall_e),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((50),app.pieces.wall_n),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),app.pieces.corner_se)], 0)));
/**
 * All the pieces, with a count corresponding to each piece.
 *   Bigger count, higher probability of that piece appearing in the map
 */
app.pages.starting_weights = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wall-n","wall-n",445895202),new cljs.core.Keyword(null,"corner-nw","corner-nw",-1677293694),new cljs.core.Keyword(null,"entrance-s","entrance-s",-1716403223),new cljs.core.Keyword(null,"entrance-w","entrance-w",1471852458),new cljs.core.Keyword(null,"entrance-e","entrance-e",381832427),new cljs.core.Keyword(null,"wall-s","wall-s",-223556500),new cljs.core.Keyword(null,"hallway-ew","hallway-ew",-2059426770),new cljs.core.Keyword(null,"corner-sw","corner-sw",-1327518799),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"corner-ne","corner-ne",1497558356),new cljs.core.Keyword(null,"hallway-ns","hallway-ns",-587491816),new cljs.core.Keyword(null,"entrance-n","entrance-n",1378801240),new cljs.core.Keyword(null,"wall-w","wall-w",-838961830),new cljs.core.Keyword(null,"wall-e","wall-e",339203578),new cljs.core.Keyword(null,"corner-se","corner-se",-1124737189)],[(0),(1),(1),(1),(1),(4),(1),(18),(50),(34),(1),(1),(0),(0),(17)]);
if((typeof app !== 'undefined') && (typeof app.pages !== 'undefined') && (typeof app.pages.state !== 'undefined')){
} else {
app.pages.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-height","grid-height",-995153669),(8),new cljs.core.Keyword(null,"grid-width","grid-width",837583106),(20),new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),app.pages.starting_weights,new cljs.core.Keyword(null,"piece-pile","piece-pile",1291949718),app.pages.starting_pieces,new cljs.core.Keyword(null,"css-vars","css-vars",57967357),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cell-color","cell-color",83713438),"gray",new cljs.core.Keyword(null,"blank-color","blank-color",-1097208213),"transparent"], null)], null));
}
/**
 * Defines some special conditions for corners and edges (only corner pieces at corners, only walls or entrances for edges).
 *   Renders the appropriate piece at these locations, and otherwise, picks a random piece from the weighted piece pool.
 */
app.pages.next_piece = (function app$pages$next_piece(p__15737){
var map__15738 = p__15737;
var map__15738__$1 = (((((!((map__15738 == null))))?(((((map__15738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15738):map__15738);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15738__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15738__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var h = (new cljs.core.Keyword(null,"grid-height","grid-height",-995153669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)) - (1));
var w = (new cljs.core.Keyword(null,"grid-width","grid-width",837583106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)) - (1));
var corner_ne_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))));
var corner_se_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,h)));
var corner_sw_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,h)));
var corner_nw_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))));
var edge_n_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0));
var edge_e_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,w);
var edge_s_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,h);
var edge_w_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
var edge_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,h)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(y,w)));
if(corner_ne_QMARK_){
return app.pieces.corner_ne;
} else {
if(corner_se_QMARK_){
return app.pieces.corner_se;
} else {
if(corner_sw_QMARK_){
return app.pieces.corner_sw;
} else {
if(corner_nw_QMARK_){
return app.pieces.corner_nw;
} else {
if(edge_n_QMARK_){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.wall_n,app.pieces.entrance_n], null));
} else {
if(edge_e_QMARK_){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.wall_e,app.pieces.entrance_e], null));
} else {
if(edge_s_QMARK_){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.wall_s,app.pieces.entrance_s], null));
} else {
if(edge_w_QMARK_){
return cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pieces.wall_w,app.pieces.entrance_w], null));
} else {
return cljs.core.rand_nth(new cljs.core.Keyword(null,"piece-pile","piece-pile",1291949718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)));

}
}
}
}
}
}
}
}
});
/**
 * Runs next-piece for height * width number of map pieces, partitions that flat array of pieces into rows.
 *   Then sets each piece into the app state one-by-one, as fast as the user has configured it.
 */
app.pages.make_map = (function app$pages$make_map(){
var h = new cljs.core.Keyword(null,"grid-height","grid-height",-995153669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state));
var w = new cljs.core.Keyword(null,"grid-width","grid-width",837583106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state));
var cell_range = cljs.core.range.cljs$core$IFn$_invoke$arity$1((h * w));
var flat_grid = (function (){var iter__4529__auto__ = (function app$pages$make_map_$_iter__15740(s__15741){
return (new cljs.core.LazySeq(null,(function (){
var s__15741__$1 = s__15741;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15741__$1);
if(temp__5735__auto__){
var s__15741__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15741__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15741__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15743 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15742 = (0);
while(true){
if((i__15742 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__15742);
var x = cljs.core.mod(i,w);
var y = cljs.core.quot(i,w);
cljs.core.chunk_append(b__15743,app.pages.next_piece(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)));

var G__15769 = (i__15742 + (1));
i__15742 = G__15769;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15743),app$pages$make_map_$_iter__15740(cljs.core.chunk_rest(s__15741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15743),null);
}
} else {
var i = cljs.core.first(s__15741__$2);
var x = cljs.core.mod(i,w);
var y = cljs.core.quot(i,w);
return cljs.core.cons(app.pages.next_piece(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null)),app$pages$make_map_$_iter__15740(cljs.core.rest(s__15741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cell_range);
})();
var partitioned_grid = cljs.core.partition.cljs$core$IFn$_invoke$arity$2(w,flat_grid);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.PersistentVector.EMPTY);

var remaining_rows = partitioned_grid;
var timeout = (0);
while(true){
var temp__5735__auto__ = cljs.core.first(remaining_rows);
if(cljs.core.truth_(temp__5735__auto__)){
var row = temp__5735__auto__;
setTimeout(((function (remaining_rows,timeout,row,temp__5735__auto__,h,w,cell_range,flat_grid,partitioned_grid){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc,new cljs.core.Keyword(null,"pieces","pieces",-1436634023),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pieces","pieces",-1436634023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)),row));
});})(remaining_rows,timeout,row,temp__5735__auto__,h,w,cell_range,flat_grid,partitioned_grid))
,timeout);

var G__15770 = cljs.core.rest(remaining_rows);
var G__15771 = (timeout + (100));
remaining_rows = G__15770;
timeout = G__15771;
continue;
} else {
return null;
}
break;
}
});
/**
 * Creates dungeon map element, iterates through map pieces, and renders.
 */
app.pages.dungeon_map = (function app$pages$dungeon_map(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"map",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, ["--width",new cljs.core.Keyword(null,"grid-width","grid-width",837583106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)),"--height",new cljs.core.Keyword(null,"grid-height","grid-height",-995153669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)),"--cell-color",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-vars","css-vars",57967357),new cljs.core.Keyword(null,"cell-color","cell-color",83713438)], null)),"--blank-color",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-vars","css-vars",57967357),new cljs.core.Keyword(null,"blank-color","blank-color",-1097208213)], null))], null)], null),(function (){var iter__4529__auto__ = (function app$pages$dungeon_map_$_iter__15744(s__15745){
return (new cljs.core.LazySeq(null,(function (){
var s__15745__$1 = s__15745;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15745__$1);
if(temp__5735__auto__){
var s__15745__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15745__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15745__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15747 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15746 = (0);
while(true){
if((i__15746 < size__4528__auto__)){
var rows = cljs.core._nth(c__4527__auto__,i__15746);
cljs.core.chunk_append(b__15747,(function (){var iter__4529__auto__ = ((function (i__15746,rows,c__4527__auto__,size__4528__auto__,b__15747,s__15745__$2,temp__5735__auto__){
return (function app$pages$dungeon_map_$_iter__15744_$_iter__15748(s__15749){
return (new cljs.core.LazySeq(null,((function (i__15746,rows,c__4527__auto__,size__4528__auto__,b__15747,s__15745__$2,temp__5735__auto__){
return (function (){
var s__15749__$1 = s__15749;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__15749__$1);
if(temp__5735__auto____$1){
var s__15749__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15749__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__15749__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__15751 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__15750 = (0);
while(true){
if((i__15750 < size__4528__auto____$1)){
var piece = cljs.core._nth(c__4527__auto____$1,i__15750);
cljs.core.chunk_append(b__15751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece], null));

var G__15772 = (i__15750 + (1));
i__15750 = G__15772;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15751),app$pages$dungeon_map_$_iter__15744_$_iter__15748(cljs.core.chunk_rest(s__15749__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15751),null);
}
} else {
var piece = cljs.core.first(s__15749__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece], null),app$pages$dungeon_map_$_iter__15744_$_iter__15748(cljs.core.rest(s__15749__$2)));
}
} else {
return null;
}
break;
}
});})(i__15746,rows,c__4527__auto__,size__4528__auto__,b__15747,s__15745__$2,temp__5735__auto__))
,null,null));
});})(i__15746,rows,c__4527__auto__,size__4528__auto__,b__15747,s__15745__$2,temp__5735__auto__))
;
return iter__4529__auto__(rows);
})());

var G__15773 = (i__15746 + (1));
i__15746 = G__15773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15747),app$pages$dungeon_map_$_iter__15744(cljs.core.chunk_rest(s__15745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15747),null);
}
} else {
var rows = cljs.core.first(s__15745__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (rows,s__15745__$2,temp__5735__auto__){
return (function app$pages$dungeon_map_$_iter__15744_$_iter__15752(s__15753){
return (new cljs.core.LazySeq(null,(function (){
var s__15753__$1 = s__15753;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__15753__$1);
if(temp__5735__auto____$1){
var s__15753__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15753__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15753__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15755 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15754 = (0);
while(true){
if((i__15754 < size__4528__auto__)){
var piece = cljs.core._nth(c__4527__auto__,i__15754);
cljs.core.chunk_append(b__15755,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece], null));

var G__15774 = (i__15754 + (1));
i__15754 = G__15774;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15755),app$pages$dungeon_map_$_iter__15744_$_iter__15752(cljs.core.chunk_rest(s__15753__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15755),null);
}
} else {
var piece = cljs.core.first(s__15753__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece], null),app$pages$dungeon_map_$_iter__15744_$_iter__15752(cljs.core.rest(s__15753__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(rows,s__15745__$2,temp__5735__auto__))
;
return iter__4529__auto__(rows);
})(),app$pages$dungeon_map_$_iter__15744(cljs.core.rest(s__15745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"pieces","pieces",-1436634023).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)));
})()], null);
});
app.pages.update_css_var = (function app$pages$update_css_var(var$,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.pages.state,(function (){
return cljs.core.assoc_in(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"css-vars","css-vars",57967357),var$], null),value);
}));
});
app.pages.colors = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grey","maroon","rebeccapurple","springgreen","tomato","dodgerblue","burlywood"], null);
app.pages.slider_tmp_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"grid-width","grid-width",837583106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"grid-height","grid-height",-995153669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state))], null));
app.pages.update_weights = (function app$pages$update_weights(){
var mapping = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wall-n","wall-n",445895202),new cljs.core.Keyword(null,"corner-nw","corner-nw",-1677293694),new cljs.core.Keyword(null,"hallway","hallway",1955585188),new cljs.core.Keyword(null,"corner","corner",1296717125),new cljs.core.Keyword(null,"entrance-s","entrance-s",-1716403223),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"entrance-w","entrance-w",1471852458),new cljs.core.Keyword(null,"entrance-e","entrance-e",381832427),new cljs.core.Keyword(null,"wall-s","wall-s",-223556500),new cljs.core.Keyword(null,"hallway-ew","hallway-ew",-2059426770),new cljs.core.Keyword(null,"corner-sw","corner-sw",-1327518799),new cljs.core.Keyword(null,"blank","blank",-1249652109),new cljs.core.Keyword(null,"corner-ne","corner-ne",1497558356),new cljs.core.Keyword(null,"hallway-ns","hallway-ns",-587491816),new cljs.core.Keyword(null,"entrance-n","entrance-n",1378801240),new cljs.core.Keyword(null,"wall-w","wall-w",-838961830),new cljs.core.Keyword(null,"wall-e","wall-e",339203578),new cljs.core.Keyword(null,"corner-se","corner-se",-1124737189)],[app.pieces.wall_n,app.pieces.corner_nw,app.pieces.hallway,app.pieces.corner,app.pieces.entrance_s,app.pieces.wall,app.pieces.entrance_w,app.pieces.entrance_e,app.pieces.wall_s,app.pieces.hallway_ew,app.pieces.corner_sw,app.pieces.blank,app.pieces.corner_ne,app.pieces.hallway_ns,app.pieces.entrance_n,app.pieces.wall_w,app.pieces.wall_e,app.pieces.corner_se]);
var $ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state)));
var $__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pair){
var piece_symbol = cljs.core.first(pair);
var count = cljs.core.second(pair);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(count,cljs.core.get.cljs$core$IFn$_invoke$arity$2(mapping,piece_symbol));
}),$);
var $__$2 = cljs.core.flatten($__$1);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc,new cljs.core.Keyword(null,"piece-pile","piece-pile",1291949718),$__$2);
});
app.pages.weight_slider = (function app$pages$weight_slider(p__15756){
var map__15757 = p__15756;
var map__15757__$1 = (((((!((map__15757 == null))))?(((((map__15757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15757):map__15757);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15757__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15757__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var state_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15757__$1,new cljs.core.Keyword(null,"state-path","state-path",-538225524));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15757__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15757__$1,new cljs.core.Keyword(null,"max","max",61366548));
var tmp = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(init_state);
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dimension-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(tmp),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (e){
return cljs.core.reset_BANG_(tmp,(e.target.value | (0)));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc_in,state_path,cljs.core.deref(tmp));

app.pages.update_weights();

return app.pages.make_map();
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),label], null),cljs.core.deref(tmp)], null)], null);
});
});
app.pages.weights_ui = (function app$pages$weights_ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-row"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-group",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-n","entrance-n",1378801240)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Entrance North",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-n","entrance-n",1378801240)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-e","entrance-e",381832427)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Entrance East",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-e","entrance-e",381832427)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-s","entrance-s",-1716403223)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Entrance South",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-s","entrance-s",-1716403223)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-w","entrance-w",1471852458)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Entrance West",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"entrance-w","entrance-w",1471852458)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-group",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-n","wall-n",445895202)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Wall North",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-n","wall-n",445895202)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-e","wall-e",339203578)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Wall East",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-e","wall-e",339203578)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-s","wall-s",-223556500)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Wall South",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-s","wall-s",-223556500)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-w","wall-w",-838961830)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Wall West",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"wall-w","wall-w",-838961830)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-row"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-group",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-ne","corner-ne",1497558356)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Corner North-East",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-ne","corner-ne",1497558356)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-se","corner-se",-1124737189)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Corner South-East",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-se","corner-se",-1124737189)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-sw","corner-sw",-1327518799)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Corner South-West",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-sw","corner-sw",-1327518799)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-nw","corner-nw",-1677293694)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Corner North-West",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"corner-nw","corner-nw",-1677293694)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"weight-group",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (){
return null;
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"hallway-ns","hallway-ns",-587491816)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Hallway North-South",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"hallway-ns","hallway-ns",-587491816)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"hallway-ew","hallway-ew",-2059426770)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Hallway East-West",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"hallway-ew","hallway-ew",-2059426770)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weight_slider,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.pages.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null)),new cljs.core.Keyword(null,"label","label",1718410804),"Blanks",new cljs.core.Keyword(null,"state-path","state-path",-538225524),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"piece-weights","piece-weights",714356011),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(50)], null)], null)], null)], null)], null);
});
app.pages.info = (function app$pages$info(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Random Dungeon Map Generator"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["font-size","1.25rem"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Q: "], null),"What is this thing?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary","summary",380847952),"Find out!"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"A: "], null),"This is a random dungeon map generator, and it has some nice things you can play with!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The generator uses ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://css-tricks.com/snippets/css/complete-guide-grid/",new cljs.core.Keyword(null,"_target","_target",-820699148),"blank"], null),"CSS Grid"], null)," to create \"pieces\" like walls, corners, and entrances to fill in the center of the map."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The pieces are 3x3 templates consisting of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cell fill color",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return app.pages.update_css_var(new cljs.core.Keyword(null,"cell-color","cell-color",83713438),e.target.value);
})], null),(function (){var iter__4529__auto__ = (function app$pages$info_$_iter__15761(s__15762){
return (new cljs.core.LazySeq(null,(function (){
var s__15762__$1 = s__15762;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15762__$1);
if(temp__5735__auto__){
var s__15762__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15762__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15762__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15764 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15763 = (0);
while(true){
if((i__15763 < size__4528__auto__)){
var color = cljs.core._nth(c__4527__auto__,i__15763);
cljs.core.chunk_append(b__15764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),color], null));

var G__15775 = (i__15763 + (1));
i__15763 = G__15775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15764),app$pages$info_$_iter__15761(cljs.core.chunk_rest(s__15762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15764),null);
}
} else {
var color = cljs.core.first(s__15762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),color], null),app$pages$info_$_iter__15761(cljs.core.rest(s__15762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(app.pages.colors);
})()], null)," fill and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"cell background color",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return app.pages.update_css_var(new cljs.core.Keyword(null,"blank-color","blank-color",-1097208213),e.target.value);
})], null),(function (){var iter__4529__auto__ = (function app$pages$info_$_iter__15765(s__15766){
return (new cljs.core.LazySeq(null,(function (){
var s__15766__$1 = s__15766;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__15766__$1);
if(temp__5735__auto__){
var s__15766__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15766__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__15766__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__15768 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__15767 = (0);
while(true){
if((i__15767 < size__4528__auto__)){
var color = cljs.core._nth(c__4527__auto__,i__15767);
cljs.core.chunk_append(b__15768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),color], null));

var G__15776 = (i__15767 + (1));
i__15767 = G__15776;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15768),app$pages$info_$_iter__15765(cljs.core.chunk_rest(s__15766__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15768),null);
}
} else {
var color = cljs.core.first(s__15766__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),color], null),app$pages$info_$_iter__15765(cljs.core.rest(s__15766__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["transparent"], null),app.pages.colors));
})()], null)," background color div elements"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(If you want to see what the pieces are, you can go ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/pieces"], null),"here"], null),")."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The map is laid out in a ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"size-selector",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return null;
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dimension-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Width"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),"width",new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(50),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.slider_tmp_state)),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__15759_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.slider_tmp_state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),(p1__15759_SHARP_.target.value | (0)));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc,new cljs.core.Keyword(null,"grid-width","grid-width",837583106),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.slider_tmp_state)));

return app.pages.make_map();
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"width"], null),new cljs.core.Keyword(null,"grid-width","grid-width",837583106).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)," by "], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dimension-ui"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"legend","legend",-1027192245),"Height"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),"height",new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(5),new cljs.core.Keyword(null,"max","max",61366548),(25),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.slider_tmp_state)),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__15760_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.slider_tmp_state,cljs.core.assoc,new cljs.core.Keyword(null,"height","height",1025178622),(p1__15760_SHARP_.target.value | (0)));
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.pages.state,cljs.core.assoc,new cljs.core.Keyword(null,"grid-height","grid-height",-995153669),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.slider_tmp_state)));

return app.pages.make_map();
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),"height"], null),new cljs.core.Keyword(null,"grid-height","grid-height",-995153669).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.pages.state))], null)], null)], null)," grid."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"While generating the map, map pieces are randomly selected from a pile of pieces."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"If there are more pieces of a particular type in the pile, those pieces will show up more frequently in the map."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"These are the weights:"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.weights_ui], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Etc."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This UI was inspired by the demo from ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"http://worrydream.com/MagicInk/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"this blog post."], null)], null)], null)], null)], null)], null);
});
app.pages.make_map();
app.pages.root = (function app$pages$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.info], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),app.pages.make_map], null),"Regenerate map"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.pages.dungeon_map], null)], null)], null);
});

//# sourceMappingURL=app.pages.js.map
