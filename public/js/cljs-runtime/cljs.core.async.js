goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30584 = arguments.length;
switch (G__30584) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30589 = (function (f,blockable,meta30590){
this.f = f;
this.blockable = blockable;
this.meta30590 = meta30590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30591,meta30590__$1){
var self__ = this;
var _30591__$1 = this;
return (new cljs.core.async.t_cljs$core$async30589(self__.f,self__.blockable,meta30590__$1));
}));

(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30591){
var self__ = this;
var _30591__$1 = this;
return self__.meta30590;
}));

(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30590","meta30590",2046694572,null)], null);
}));

(cljs.core.async.t_cljs$core$async30589.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30589");

(cljs.core.async.t_cljs$core$async30589.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30589");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30589.
 */
cljs.core.async.__GT_t_cljs$core$async30589 = (function cljs$core$async$__GT_t_cljs$core$async30589(f__$1,blockable__$1,meta30590){
return (new cljs.core.async.t_cljs$core$async30589(f__$1,blockable__$1,meta30590));
});

}

return (new cljs.core.async.t_cljs$core$async30589(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30621 = arguments.length;
switch (G__30621) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30637 = arguments.length;
switch (G__30637) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30652 = arguments.length;
switch (G__30652) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33250 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33250) : fn1.call(null,val_33250));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33250) : fn1.call(null,val_33250));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30674 = arguments.length;
switch (G__30674) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___33256 = n;
var x_33257 = (0);
while(true){
if((x_33257 < n__4613__auto___33256)){
(a[x_33257] = x_33257);

var G__33258 = (x_33257 + (1));
x_33257 = G__33258;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30695 = (function (flag,meta30696){
this.flag = flag;
this.meta30696 = meta30696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30697,meta30696__$1){
var self__ = this;
var _30697__$1 = this;
return (new cljs.core.async.t_cljs$core$async30695(self__.flag,meta30696__$1));
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30697){
var self__ = this;
var _30697__$1 = this;
return self__.meta30696;
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30696","meta30696",-718425746,null)], null);
}));

(cljs.core.async.t_cljs$core$async30695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30695");

(cljs.core.async.t_cljs$core$async30695.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30695.
 */
cljs.core.async.__GT_t_cljs$core$async30695 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30695(flag__$1,meta30696){
return (new cljs.core.async.t_cljs$core$async30695(flag__$1,meta30696));
});

}

return (new cljs.core.async.t_cljs$core$async30695(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30717 = (function (flag,cb,meta30718){
this.flag = flag;
this.cb = cb;
this.meta30718 = meta30718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30719,meta30718__$1){
var self__ = this;
var _30719__$1 = this;
return (new cljs.core.async.t_cljs$core$async30717(self__.flag,self__.cb,meta30718__$1));
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30719){
var self__ = this;
var _30719__$1 = this;
return self__.meta30718;
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30718","meta30718",-699866866,null)], null);
}));

(cljs.core.async.t_cljs$core$async30717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30717");

(cljs.core.async.t_cljs$core$async30717.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async30717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30717.
 */
cljs.core.async.__GT_t_cljs$core$async30717 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30717(flag__$1,cb__$1,meta30718){
return (new cljs.core.async.t_cljs$core$async30717(flag__$1,cb__$1,meta30718));
});

}

return (new cljs.core.async.t_cljs$core$async30717(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30737_SHARP_){
var G__30747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30747) : fret.call(null,G__30747));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30738_SHARP_){
var G__30751 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30751) : fret.call(null,G__30751));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33264 = (i + (1));
i = G__33264;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33265 = arguments.length;
var i__4737__auto___33266 = (0);
while(true){
if((i__4737__auto___33266 < len__4736__auto___33265)){
args__4742__auto__.push((arguments[i__4737__auto___33266]));

var G__33267 = (i__4737__auto___33266 + (1));
i__4737__auto___33266 = G__33267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30766){
var map__30768 = p__30766;
var map__30768__$1 = (((((!((map__30768 == null))))?(((((map__30768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30768):map__30768);
var opts = map__30768__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30759){
var G__30760 = cljs.core.first(seq30759);
var seq30759__$1 = cljs.core.next(seq30759);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30760,seq30759__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30793 = arguments.length;
switch (G__30793) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30488__auto___33270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_30836){
var state_val_30837 = (state_30836[(1)]);
if((state_val_30837 === (7))){
var inst_30827 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
var statearr_30841_33271 = state_30836__$1;
(statearr_30841_33271[(2)] = inst_30827);

(statearr_30841_33271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (1))){
var state_30836__$1 = state_30836;
var statearr_30842_33272 = state_30836__$1;
(statearr_30842_33272[(2)] = null);

(statearr_30842_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (4))){
var inst_30809 = (state_30836[(7)]);
var inst_30809__$1 = (state_30836[(2)]);
var inst_30810 = (inst_30809__$1 == null);
var state_30836__$1 = (function (){var statearr_30843 = state_30836;
(statearr_30843[(7)] = inst_30809__$1);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30810)){
var statearr_30844_33274 = state_30836__$1;
(statearr_30844_33274[(1)] = (5));

} else {
var statearr_30845_33276 = state_30836__$1;
(statearr_30845_33276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (13))){
var state_30836__$1 = state_30836;
var statearr_30846_33278 = state_30836__$1;
(statearr_30846_33278[(2)] = null);

(statearr_30846_33278[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (6))){
var inst_30809 = (state_30836[(7)]);
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30836__$1,(11),to,inst_30809);
} else {
if((state_val_30837 === (3))){
var inst_30830 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30836__$1,inst_30830);
} else {
if((state_val_30837 === (12))){
var state_30836__$1 = state_30836;
var statearr_30859_33279 = state_30836__$1;
(statearr_30859_33279[(2)] = null);

(statearr_30859_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (2))){
var state_30836__$1 = state_30836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30836__$1,(4),from);
} else {
if((state_val_30837 === (11))){
var inst_30820 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
if(cljs.core.truth_(inst_30820)){
var statearr_30860_33282 = state_30836__$1;
(statearr_30860_33282[(1)] = (12));

} else {
var statearr_30861_33284 = state_30836__$1;
(statearr_30861_33284[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (9))){
var state_30836__$1 = state_30836;
var statearr_30863_33287 = state_30836__$1;
(statearr_30863_33287[(2)] = null);

(statearr_30863_33287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (5))){
var state_30836__$1 = state_30836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30866_33288 = state_30836__$1;
(statearr_30866_33288[(1)] = (8));

} else {
var statearr_30868_33289 = state_30836__$1;
(statearr_30868_33289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (14))){
var inst_30825 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
var statearr_30873_33293 = state_30836__$1;
(statearr_30873_33293[(2)] = inst_30825);

(statearr_30873_33293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (10))){
var inst_30817 = (state_30836[(2)]);
var state_30836__$1 = state_30836;
var statearr_30874_33295 = state_30836__$1;
(statearr_30874_33295[(2)] = inst_30817);

(statearr_30874_33295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30837 === (8))){
var inst_30814 = cljs.core.async.close_BANG_(to);
var state_30836__$1 = state_30836;
var statearr_30879_33297 = state_30836__$1;
(statearr_30879_33297[(2)] = inst_30814);

(statearr_30879_33297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_30884 = [null,null,null,null,null,null,null,null];
(statearr_30884[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_30884[(1)] = (1));

return statearr_30884;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_30836){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_30836);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e30885){var ex__30409__auto__ = e30885;
var statearr_30889_33299 = state_30836;
(statearr_30889_33299[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_30836[(4)]))){
var statearr_30890_33300 = state_30836;
(statearr_30890_33300[(1)] = cljs.core.first((state_30836[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33301 = state_30836;
state_30836 = G__33301;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_30836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_30836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_30891 = f__30489__auto__();
(statearr_30891[(6)] = c__30488__auto___33270);

return statearr_30891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30897){
var vec__30898 = p__30897;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30898,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30898,(1),null);
var job = vec__30898;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30488__auto___33304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_30906){
var state_val_30907 = (state_30906[(1)]);
if((state_val_30907 === (1))){
var state_30906__$1 = state_30906;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30906__$1,(2),res,v);
} else {
if((state_val_30907 === (2))){
var inst_30903 = (state_30906[(2)]);
var inst_30904 = cljs.core.async.close_BANG_(res);
var state_30906__$1 = (function (){var statearr_30910 = state_30906;
(statearr_30910[(7)] = inst_30903);

return statearr_30910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30906__$1,inst_30904);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_30912 = [null,null,null,null,null,null,null,null];
(statearr_30912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__);

(statearr_30912[(1)] = (1));

return statearr_30912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1 = (function (state_30906){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_30906);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e30914){var ex__30409__auto__ = e30914;
var statearr_30916_33307 = state_30906;
(statearr_30916_33307[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_30906[(4)]))){
var statearr_30918_33308 = state_30906;
(statearr_30918_33308[(1)] = cljs.core.first((state_30906[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33309 = state_30906;
state_30906 = G__33309;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = function(state_30906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1.call(this,state_30906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_30928 = f__30489__auto__();
(statearr_30928[(6)] = c__30488__auto___33304);

return statearr_30928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30933){
var vec__30934 = p__30933;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30934,(1),null);
var job = vec__30934;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___33310 = n;
var __33311 = (0);
while(true){
if((__33311 < n__4613__auto___33310)){
var G__30937_33312 = type;
var G__30937_33313__$1 = (((G__30937_33312 instanceof cljs.core.Keyword))?G__30937_33312.fqn:null);
switch (G__30937_33313__$1) {
case "compute":
var c__30488__auto___33315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33311,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = ((function (__33311,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function (state_30952){
var state_val_30953 = (state_30952[(1)]);
if((state_val_30953 === (1))){
var state_30952__$1 = state_30952;
var statearr_30957_33316 = state_30952__$1;
(statearr_30957_33316[(2)] = null);

(statearr_30957_33316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (2))){
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30952__$1,(4),jobs);
} else {
if((state_val_30953 === (3))){
var inst_30950 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30952__$1,inst_30950);
} else {
if((state_val_30953 === (4))){
var inst_30941 = (state_30952[(2)]);
var inst_30942 = process(inst_30941);
var state_30952__$1 = state_30952;
if(cljs.core.truth_(inst_30942)){
var statearr_30963_33319 = state_30952__$1;
(statearr_30963_33319[(1)] = (5));

} else {
var statearr_30964_33320 = state_30952__$1;
(statearr_30964_33320[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (5))){
var state_30952__$1 = state_30952;
var statearr_30965_33321 = state_30952__$1;
(statearr_30965_33321[(2)] = null);

(statearr_30965_33321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (6))){
var state_30952__$1 = state_30952;
var statearr_30966_33322 = state_30952__$1;
(statearr_30966_33322[(2)] = null);

(statearr_30966_33322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30953 === (7))){
var inst_30947 = (state_30952[(2)]);
var state_30952__$1 = state_30952;
var statearr_30968_33323 = state_30952__$1;
(statearr_30968_33323[(2)] = inst_30947);

(statearr_30968_33323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33311,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
;
return ((function (__33311,switch__30405__auto__,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_30972 = [null,null,null,null,null,null,null];
(statearr_30972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__);

(statearr_30972[(1)] = (1));

return statearr_30972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1 = (function (state_30952){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_30952);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e30975){var ex__30409__auto__ = e30975;
var statearr_30976_33326 = state_30952;
(statearr_30976_33326[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_30952[(4)]))){
var statearr_30977_33328 = state_30952;
(statearr_30977_33328[(1)] = cljs.core.first((state_30952[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33329 = state_30952;
state_30952 = G__33329;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = function(state_30952){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1.call(this,state_30952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__;
})()
;})(__33311,switch__30405__auto__,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
})();
var state__30490__auto__ = (function (){var statearr_30979 = f__30489__auto__();
(statearr_30979[(6)] = c__30488__auto___33315);

return statearr_30979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
});})(__33311,c__30488__auto___33315,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
);


break;
case "async":
var c__30488__auto___33330 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33311,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = ((function (__33311,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function (state_30995){
var state_val_30996 = (state_30995[(1)]);
if((state_val_30996 === (1))){
var state_30995__$1 = state_30995;
var statearr_30999_33333 = state_30995__$1;
(statearr_30999_33333[(2)] = null);

(statearr_30999_33333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (2))){
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30995__$1,(4),jobs);
} else {
if((state_val_30996 === (3))){
var inst_30993 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30995__$1,inst_30993);
} else {
if((state_val_30996 === (4))){
var inst_30985 = (state_30995[(2)]);
var inst_30986 = async(inst_30985);
var state_30995__$1 = state_30995;
if(cljs.core.truth_(inst_30986)){
var statearr_31005_33334 = state_30995__$1;
(statearr_31005_33334[(1)] = (5));

} else {
var statearr_31006_33335 = state_30995__$1;
(statearr_31006_33335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (5))){
var state_30995__$1 = state_30995;
var statearr_31007_33336 = state_30995__$1;
(statearr_31007_33336[(2)] = null);

(statearr_31007_33336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (6))){
var state_30995__$1 = state_30995;
var statearr_31017_33337 = state_30995__$1;
(statearr_31017_33337[(2)] = null);

(statearr_31017_33337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30996 === (7))){
var inst_30991 = (state_30995[(2)]);
var state_30995__$1 = state_30995;
var statearr_31018_33339 = state_30995__$1;
(statearr_31018_33339[(2)] = inst_30991);

(statearr_31018_33339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33311,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
;
return ((function (__33311,switch__30405__auto__,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_31023 = [null,null,null,null,null,null,null];
(statearr_31023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__);

(statearr_31023[(1)] = (1));

return statearr_31023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1 = (function (state_30995){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_30995);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31024){var ex__30409__auto__ = e31024;
var statearr_31025_33341 = state_30995;
(statearr_31025_33341[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_30995[(4)]))){
var statearr_31026_33342 = state_30995;
(statearr_31026_33342[(1)] = cljs.core.first((state_30995[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33343 = state_30995;
state_30995 = G__33343;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = function(state_30995){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1.call(this,state_30995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__;
})()
;})(__33311,switch__30405__auto__,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
})();
var state__30490__auto__ = (function (){var statearr_31028 = f__30489__auto__();
(statearr_31028[(6)] = c__30488__auto___33330);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
});})(__33311,c__30488__auto___33330,G__30937_33312,G__30937_33313__$1,n__4613__auto___33310,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30937_33313__$1)].join('')));

}

var G__33344 = (__33311 + (1));
__33311 = G__33344;
continue;
} else {
}
break;
}

var c__30488__auto___33345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31057){
var state_val_31058 = (state_31057[(1)]);
if((state_val_31058 === (7))){
var inst_31053 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
var statearr_31066_33347 = state_31057__$1;
(statearr_31066_33347[(2)] = inst_31053);

(statearr_31066_33347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (1))){
var state_31057__$1 = state_31057;
var statearr_31071_33348 = state_31057__$1;
(statearr_31071_33348[(2)] = null);

(statearr_31071_33348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (4))){
var inst_31036 = (state_31057[(7)]);
var inst_31036__$1 = (state_31057[(2)]);
var inst_31037 = (inst_31036__$1 == null);
var state_31057__$1 = (function (){var statearr_31074 = state_31057;
(statearr_31074[(7)] = inst_31036__$1);

return statearr_31074;
})();
if(cljs.core.truth_(inst_31037)){
var statearr_31076_33349 = state_31057__$1;
(statearr_31076_33349[(1)] = (5));

} else {
var statearr_31078_33350 = state_31057__$1;
(statearr_31078_33350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (6))){
var inst_31036 = (state_31057[(7)]);
var inst_31041 = (state_31057[(8)]);
var inst_31041__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31045 = [inst_31036,inst_31041__$1];
var inst_31046 = (new cljs.core.PersistentVector(null,2,(5),inst_31042,inst_31045,null));
var state_31057__$1 = (function (){var statearr_31081 = state_31057;
(statearr_31081[(8)] = inst_31041__$1);

return statearr_31081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31057__$1,(8),jobs,inst_31046);
} else {
if((state_val_31058 === (3))){
var inst_31055 = (state_31057[(2)]);
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31057__$1,inst_31055);
} else {
if((state_val_31058 === (2))){
var state_31057__$1 = state_31057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31057__$1,(4),from);
} else {
if((state_val_31058 === (9))){
var inst_31050 = (state_31057[(2)]);
var state_31057__$1 = (function (){var statearr_31084 = state_31057;
(statearr_31084[(9)] = inst_31050);

return statearr_31084;
})();
var statearr_31089_33351 = state_31057__$1;
(statearr_31089_33351[(2)] = null);

(statearr_31089_33351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (5))){
var inst_31039 = cljs.core.async.close_BANG_(jobs);
var state_31057__$1 = state_31057;
var statearr_31091_33356 = state_31057__$1;
(statearr_31091_33356[(2)] = inst_31039);

(statearr_31091_33356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31058 === (8))){
var inst_31041 = (state_31057[(8)]);
var inst_31048 = (state_31057[(2)]);
var state_31057__$1 = (function (){var statearr_31094 = state_31057;
(statearr_31094[(10)] = inst_31048);

return statearr_31094;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31057__$1,(9),results,inst_31041);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_31097 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__);

(statearr_31097[(1)] = (1));

return statearr_31097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1 = (function (state_31057){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31057);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31098){var ex__30409__auto__ = e31098;
var statearr_31099_33357 = state_31057;
(statearr_31099_33357[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31057[(4)]))){
var statearr_31100_33358 = state_31057;
(statearr_31100_33358[(1)] = cljs.core.first((state_31057[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33359 = state_31057;
state_31057 = G__33359;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = function(state_31057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1.call(this,state_31057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31101 = f__30489__auto__();
(statearr_31101[(6)] = c__30488__auto___33345);

return statearr_31101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


var c__30488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31146){
var state_val_31147 = (state_31146[(1)]);
if((state_val_31147 === (7))){
var inst_31142 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
var statearr_31157_33364 = state_31146__$1;
(statearr_31157_33364[(2)] = inst_31142);

(statearr_31157_33364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (20))){
var state_31146__$1 = state_31146;
var statearr_31163_33365 = state_31146__$1;
(statearr_31163_33365[(2)] = null);

(statearr_31163_33365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (1))){
var state_31146__$1 = state_31146;
var statearr_31170_33370 = state_31146__$1;
(statearr_31170_33370[(2)] = null);

(statearr_31170_33370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (4))){
var inst_31106 = (state_31146[(7)]);
var inst_31106__$1 = (state_31146[(2)]);
var inst_31107 = (inst_31106__$1 == null);
var state_31146__$1 = (function (){var statearr_31173 = state_31146;
(statearr_31173[(7)] = inst_31106__$1);

return statearr_31173;
})();
if(cljs.core.truth_(inst_31107)){
var statearr_31174_33375 = state_31146__$1;
(statearr_31174_33375[(1)] = (5));

} else {
var statearr_31177_33376 = state_31146__$1;
(statearr_31177_33376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (15))){
var inst_31123 = (state_31146[(8)]);
var state_31146__$1 = state_31146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31146__$1,(18),to,inst_31123);
} else {
if((state_val_31147 === (21))){
var inst_31137 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
var statearr_31179_33379 = state_31146__$1;
(statearr_31179_33379[(2)] = inst_31137);

(statearr_31179_33379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (13))){
var inst_31139 = (state_31146[(2)]);
var state_31146__$1 = (function (){var statearr_31184 = state_31146;
(statearr_31184[(9)] = inst_31139);

return statearr_31184;
})();
var statearr_31185_33380 = state_31146__$1;
(statearr_31185_33380[(2)] = null);

(statearr_31185_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (6))){
var inst_31106 = (state_31146[(7)]);
var state_31146__$1 = state_31146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31146__$1,(11),inst_31106);
} else {
if((state_val_31147 === (17))){
var inst_31132 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
if(cljs.core.truth_(inst_31132)){
var statearr_31186_33381 = state_31146__$1;
(statearr_31186_33381[(1)] = (19));

} else {
var statearr_31187_33382 = state_31146__$1;
(statearr_31187_33382[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (3))){
var inst_31144 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31146__$1,inst_31144);
} else {
if((state_val_31147 === (12))){
var inst_31120 = (state_31146[(10)]);
var state_31146__$1 = state_31146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31146__$1,(14),inst_31120);
} else {
if((state_val_31147 === (2))){
var state_31146__$1 = state_31146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31146__$1,(4),results);
} else {
if((state_val_31147 === (19))){
var state_31146__$1 = state_31146;
var statearr_31195_33383 = state_31146__$1;
(statearr_31195_33383[(2)] = null);

(statearr_31195_33383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (11))){
var inst_31120 = (state_31146[(2)]);
var state_31146__$1 = (function (){var statearr_31196 = state_31146;
(statearr_31196[(10)] = inst_31120);

return statearr_31196;
})();
var statearr_31197_33386 = state_31146__$1;
(statearr_31197_33386[(2)] = null);

(statearr_31197_33386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (9))){
var state_31146__$1 = state_31146;
var statearr_31198_33388 = state_31146__$1;
(statearr_31198_33388[(2)] = null);

(statearr_31198_33388[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (5))){
var state_31146__$1 = state_31146;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31199_33389 = state_31146__$1;
(statearr_31199_33389[(1)] = (8));

} else {
var statearr_31201_33390 = state_31146__$1;
(statearr_31201_33390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (14))){
var inst_31123 = (state_31146[(8)]);
var inst_31123__$1 = (state_31146[(2)]);
var inst_31125 = (inst_31123__$1 == null);
var inst_31126 = cljs.core.not(inst_31125);
var state_31146__$1 = (function (){var statearr_31204 = state_31146;
(statearr_31204[(8)] = inst_31123__$1);

return statearr_31204;
})();
if(inst_31126){
var statearr_31206_33395 = state_31146__$1;
(statearr_31206_33395[(1)] = (15));

} else {
var statearr_31207_33396 = state_31146__$1;
(statearr_31207_33396[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (16))){
var state_31146__$1 = state_31146;
var statearr_31208_33400 = state_31146__$1;
(statearr_31208_33400[(2)] = false);

(statearr_31208_33400[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (10))){
var inst_31115 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
var statearr_31209_33401 = state_31146__$1;
(statearr_31209_33401[(2)] = inst_31115);

(statearr_31209_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (18))){
var inst_31129 = (state_31146[(2)]);
var state_31146__$1 = state_31146;
var statearr_31210_33405 = state_31146__$1;
(statearr_31210_33405[(2)] = inst_31129);

(statearr_31210_33405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31147 === (8))){
var inst_31112 = cljs.core.async.close_BANG_(to);
var state_31146__$1 = state_31146;
var statearr_31213_33406 = state_31146__$1;
(statearr_31213_33406[(2)] = inst_31112);

(statearr_31213_33406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_31215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__);

(statearr_31215[(1)] = (1));

return statearr_31215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1 = (function (state_31146){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31146);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31216){var ex__30409__auto__ = e31216;
var statearr_31217_33410 = state_31146;
(statearr_31217_33410[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31146[(4)]))){
var statearr_31222_33414 = state_31146;
(statearr_31222_33414[(1)] = cljs.core.first((state_31146[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33415 = state_31146;
state_31146 = G__33415;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__ = function(state_31146){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1.call(this,state_31146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31227 = f__30489__auto__();
(statearr_31227[(6)] = c__30488__auto__);

return statearr_31227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

return c__30488__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31231 = arguments.length;
switch (G__31231) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31245 = arguments.length;
switch (G__31245) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31252 = arguments.length;
switch (G__31252) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30488__auto___33444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31284){
var state_val_31285 = (state_31284[(1)]);
if((state_val_31285 === (7))){
var inst_31280 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31286_33447 = state_31284__$1;
(statearr_31286_33447[(2)] = inst_31280);

(statearr_31286_33447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (1))){
var state_31284__$1 = state_31284;
var statearr_31288_33448 = state_31284__$1;
(statearr_31288_33448[(2)] = null);

(statearr_31288_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (4))){
var inst_31261 = (state_31284[(7)]);
var inst_31261__$1 = (state_31284[(2)]);
var inst_31262 = (inst_31261__$1 == null);
var state_31284__$1 = (function (){var statearr_31289 = state_31284;
(statearr_31289[(7)] = inst_31261__$1);

return statearr_31289;
})();
if(cljs.core.truth_(inst_31262)){
var statearr_31290_33450 = state_31284__$1;
(statearr_31290_33450[(1)] = (5));

} else {
var statearr_31293_33451 = state_31284__$1;
(statearr_31293_33451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (13))){
var state_31284__$1 = state_31284;
var statearr_31294_33453 = state_31284__$1;
(statearr_31294_33453[(2)] = null);

(statearr_31294_33453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (6))){
var inst_31261 = (state_31284[(7)]);
var inst_31267 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31261) : p.call(null,inst_31261));
var state_31284__$1 = state_31284;
if(cljs.core.truth_(inst_31267)){
var statearr_31296_33456 = state_31284__$1;
(statearr_31296_33456[(1)] = (9));

} else {
var statearr_31297_33457 = state_31284__$1;
(statearr_31297_33457[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (3))){
var inst_31282 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31284__$1,inst_31282);
} else {
if((state_val_31285 === (12))){
var state_31284__$1 = state_31284;
var statearr_31300_33460 = state_31284__$1;
(statearr_31300_33460[(2)] = null);

(statearr_31300_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (2))){
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31284__$1,(4),ch);
} else {
if((state_val_31285 === (11))){
var inst_31261 = (state_31284[(7)]);
var inst_31271 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31284__$1,(8),inst_31271,inst_31261);
} else {
if((state_val_31285 === (9))){
var state_31284__$1 = state_31284;
var statearr_31302_33463 = state_31284__$1;
(statearr_31302_33463[(2)] = tc);

(statearr_31302_33463[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (5))){
var inst_31264 = cljs.core.async.close_BANG_(tc);
var inst_31265 = cljs.core.async.close_BANG_(fc);
var state_31284__$1 = (function (){var statearr_31303 = state_31284;
(statearr_31303[(8)] = inst_31264);

return statearr_31303;
})();
var statearr_31304_33465 = state_31284__$1;
(statearr_31304_33465[(2)] = inst_31265);

(statearr_31304_33465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (14))){
var inst_31278 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
var statearr_31305_33466 = state_31284__$1;
(statearr_31305_33466[(2)] = inst_31278);

(statearr_31305_33466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (10))){
var state_31284__$1 = state_31284;
var statearr_31307_33467 = state_31284__$1;
(statearr_31307_33467[(2)] = fc);

(statearr_31307_33467[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31285 === (8))){
var inst_31273 = (state_31284[(2)]);
var state_31284__$1 = state_31284;
if(cljs.core.truth_(inst_31273)){
var statearr_31308_33473 = state_31284__$1;
(statearr_31308_33473[(1)] = (12));

} else {
var statearr_31309_33474 = state_31284__$1;
(statearr_31309_33474[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_31311 = [null,null,null,null,null,null,null,null,null];
(statearr_31311[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_31311[(1)] = (1));

return statearr_31311;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_31284){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31284);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31312){var ex__30409__auto__ = e31312;
var statearr_31313_33476 = state_31284;
(statearr_31313_33476[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31284[(4)]))){
var statearr_31314_33477 = state_31284;
(statearr_31314_33477[(1)] = cljs.core.first((state_31284[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33481 = state_31284;
state_31284 = G__33481;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_31284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_31284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31319 = f__30489__auto__();
(statearr_31319[(6)] = c__30488__auto___33444);

return statearr_31319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31346){
var state_val_31347 = (state_31346[(1)]);
if((state_val_31347 === (7))){
var inst_31342 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31348_33491 = state_31346__$1;
(statearr_31348_33491[(2)] = inst_31342);

(statearr_31348_33491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (1))){
var inst_31323 = init;
var inst_31324 = inst_31323;
var state_31346__$1 = (function (){var statearr_31353 = state_31346;
(statearr_31353[(7)] = inst_31324);

return statearr_31353;
})();
var statearr_31354_33493 = state_31346__$1;
(statearr_31354_33493[(2)] = null);

(statearr_31354_33493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (4))){
var inst_31329 = (state_31346[(8)]);
var inst_31329__$1 = (state_31346[(2)]);
var inst_31330 = (inst_31329__$1 == null);
var state_31346__$1 = (function (){var statearr_31355 = state_31346;
(statearr_31355[(8)] = inst_31329__$1);

return statearr_31355;
})();
if(cljs.core.truth_(inst_31330)){
var statearr_31356_33502 = state_31346__$1;
(statearr_31356_33502[(1)] = (5));

} else {
var statearr_31357_33503 = state_31346__$1;
(statearr_31357_33503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (6))){
var inst_31324 = (state_31346[(7)]);
var inst_31329 = (state_31346[(8)]);
var inst_31333 = (state_31346[(9)]);
var inst_31333__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31324,inst_31329) : f.call(null,inst_31324,inst_31329));
var inst_31334 = cljs.core.reduced_QMARK_(inst_31333__$1);
var state_31346__$1 = (function (){var statearr_31358 = state_31346;
(statearr_31358[(9)] = inst_31333__$1);

return statearr_31358;
})();
if(inst_31334){
var statearr_31362_33510 = state_31346__$1;
(statearr_31362_33510[(1)] = (8));

} else {
var statearr_31363_33511 = state_31346__$1;
(statearr_31363_33511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (3))){
var inst_31344 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31346__$1,inst_31344);
} else {
if((state_val_31347 === (2))){
var state_31346__$1 = state_31346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31346__$1,(4),ch);
} else {
if((state_val_31347 === (9))){
var inst_31333 = (state_31346[(9)]);
var inst_31324 = inst_31333;
var state_31346__$1 = (function (){var statearr_31367 = state_31346;
(statearr_31367[(7)] = inst_31324);

return statearr_31367;
})();
var statearr_31368_33518 = state_31346__$1;
(statearr_31368_33518[(2)] = null);

(statearr_31368_33518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (5))){
var inst_31324 = (state_31346[(7)]);
var state_31346__$1 = state_31346;
var statearr_31369_33520 = state_31346__$1;
(statearr_31369_33520[(2)] = inst_31324);

(statearr_31369_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (10))){
var inst_31340 = (state_31346[(2)]);
var state_31346__$1 = state_31346;
var statearr_31374_33523 = state_31346__$1;
(statearr_31374_33523[(2)] = inst_31340);

(statearr_31374_33523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31347 === (8))){
var inst_31333 = (state_31346[(9)]);
var inst_31336 = cljs.core.deref(inst_31333);
var state_31346__$1 = state_31346;
var statearr_31376_33529 = state_31346__$1;
(statearr_31376_33529[(2)] = inst_31336);

(statearr_31376_33529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30406__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30406__auto____0 = (function (){
var statearr_31380 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31380[(0)] = cljs$core$async$reduce_$_state_machine__30406__auto__);

(statearr_31380[(1)] = (1));

return statearr_31380;
});
var cljs$core$async$reduce_$_state_machine__30406__auto____1 = (function (state_31346){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31346);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31384){var ex__30409__auto__ = e31384;
var statearr_31385_33535 = state_31346;
(statearr_31385_33535[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31346[(4)]))){
var statearr_31386_33536 = state_31346;
(statearr_31386_33536[(1)] = cljs.core.first((state_31346[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33539 = state_31346;
state_31346 = G__33539;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30406__auto__ = function(state_31346){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30406__auto____1.call(this,state_31346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30406__auto____0;
cljs$core$async$reduce_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30406__auto____1;
return cljs$core$async$reduce_$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31390 = f__30489__auto__();
(statearr_31390[(6)] = c__30488__auto__);

return statearr_31390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

return c__30488__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31402){
var state_val_31403 = (state_31402[(1)]);
if((state_val_31403 === (1))){
var inst_31397 = cljs.core.async.reduce(f__$1,init,ch);
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31402__$1,(2),inst_31397);
} else {
if((state_val_31403 === (2))){
var inst_31399 = (state_31402[(2)]);
var inst_31400 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31399) : f__$1.call(null,inst_31399));
var state_31402__$1 = state_31402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31402__$1,inst_31400);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30406__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30406__auto____0 = (function (){
var statearr_31404 = [null,null,null,null,null,null,null];
(statearr_31404[(0)] = cljs$core$async$transduce_$_state_machine__30406__auto__);

(statearr_31404[(1)] = (1));

return statearr_31404;
});
var cljs$core$async$transduce_$_state_machine__30406__auto____1 = (function (state_31402){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31402);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31406){var ex__30409__auto__ = e31406;
var statearr_31407_33563 = state_31402;
(statearr_31407_33563[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31402[(4)]))){
var statearr_31410_33566 = state_31402;
(statearr_31410_33566[(1)] = cljs.core.first((state_31402[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33567 = state_31402;
state_31402 = G__33567;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30406__auto__ = function(state_31402){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30406__auto____1.call(this,state_31402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30406__auto____0;
cljs$core$async$transduce_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30406__auto____1;
return cljs$core$async$transduce_$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31412 = f__30489__auto__();
(statearr_31412[(6)] = c__30488__auto__);

return statearr_31412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

return c__30488__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31415 = arguments.length;
switch (G__31415) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31444){
var state_val_31445 = (state_31444[(1)]);
if((state_val_31445 === (7))){
var inst_31426 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31447_33572 = state_31444__$1;
(statearr_31447_33572[(2)] = inst_31426);

(statearr_31447_33572[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (1))){
var inst_31419 = cljs.core.seq(coll);
var inst_31420 = inst_31419;
var state_31444__$1 = (function (){var statearr_31448 = state_31444;
(statearr_31448[(7)] = inst_31420);

return statearr_31448;
})();
var statearr_31449_33584 = state_31444__$1;
(statearr_31449_33584[(2)] = null);

(statearr_31449_33584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (4))){
var inst_31420 = (state_31444[(7)]);
var inst_31424 = cljs.core.first(inst_31420);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31444__$1,(7),ch,inst_31424);
} else {
if((state_val_31445 === (13))){
var inst_31438 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31450_33586 = state_31444__$1;
(statearr_31450_33586[(2)] = inst_31438);

(statearr_31450_33586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (6))){
var inst_31429 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
if(cljs.core.truth_(inst_31429)){
var statearr_31451_33588 = state_31444__$1;
(statearr_31451_33588[(1)] = (8));

} else {
var statearr_31452_33590 = state_31444__$1;
(statearr_31452_33590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (3))){
var inst_31442 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31444__$1,inst_31442);
} else {
if((state_val_31445 === (12))){
var state_31444__$1 = state_31444;
var statearr_31453_33592 = state_31444__$1;
(statearr_31453_33592[(2)] = null);

(statearr_31453_33592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (2))){
var inst_31420 = (state_31444[(7)]);
var state_31444__$1 = state_31444;
if(cljs.core.truth_(inst_31420)){
var statearr_31454_33593 = state_31444__$1;
(statearr_31454_33593[(1)] = (4));

} else {
var statearr_31455_33594 = state_31444__$1;
(statearr_31455_33594[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (11))){
var inst_31435 = cljs.core.async.close_BANG_(ch);
var state_31444__$1 = state_31444;
var statearr_31456_33595 = state_31444__$1;
(statearr_31456_33595[(2)] = inst_31435);

(statearr_31456_33595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (9))){
var state_31444__$1 = state_31444;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31458_33596 = state_31444__$1;
(statearr_31458_33596[(1)] = (11));

} else {
var statearr_31459_33597 = state_31444__$1;
(statearr_31459_33597[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (5))){
var inst_31420 = (state_31444[(7)]);
var state_31444__$1 = state_31444;
var statearr_31460_33598 = state_31444__$1;
(statearr_31460_33598[(2)] = inst_31420);

(statearr_31460_33598[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (10))){
var inst_31440 = (state_31444[(2)]);
var state_31444__$1 = state_31444;
var statearr_31461_33605 = state_31444__$1;
(statearr_31461_33605[(2)] = inst_31440);

(statearr_31461_33605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31445 === (8))){
var inst_31420 = (state_31444[(7)]);
var inst_31431 = cljs.core.next(inst_31420);
var inst_31420__$1 = inst_31431;
var state_31444__$1 = (function (){var statearr_31462 = state_31444;
(statearr_31462[(7)] = inst_31420__$1);

return statearr_31462;
})();
var statearr_31463_33606 = state_31444__$1;
(statearr_31463_33606[(2)] = null);

(statearr_31463_33606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_31464 = [null,null,null,null,null,null,null,null];
(statearr_31464[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_31464[(1)] = (1));

return statearr_31464;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_31444){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31444);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31465){var ex__30409__auto__ = e31465;
var statearr_31466_33607 = state_31444;
(statearr_31466_33607[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31444[(4)]))){
var statearr_31467_33608 = state_31444;
(statearr_31467_33608[(1)] = cljs.core.first((state_31444[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33615 = state_31444;
state_31444 = G__33615;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_31444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_31444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31468 = f__30489__auto__();
(statearr_31468[(6)] = c__30488__auto__);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

return c__30488__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31470 = arguments.length;
switch (G__31470) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33634 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33634(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33647 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33647(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33653 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33653(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33655 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33655(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31508 = (function (ch,cs,meta31509){
this.ch = ch;
this.cs = cs;
this.meta31509 = meta31509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31510,meta31509__$1){
var self__ = this;
var _31510__$1 = this;
return (new cljs.core.async.t_cljs$core$async31508(self__.ch,self__.cs,meta31509__$1));
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31510){
var self__ = this;
var _31510__$1 = this;
return self__.meta31509;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31508.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31509","meta31509",571921484,null)], null);
}));

(cljs.core.async.t_cljs$core$async31508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31508");

(cljs.core.async.t_cljs$core$async31508.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31508.
 */
cljs.core.async.__GT_t_cljs$core$async31508 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31508(ch__$1,cs__$1,meta31509){
return (new cljs.core.async.t_cljs$core$async31508(ch__$1,cs__$1,meta31509));
});

}

return (new cljs.core.async.t_cljs$core$async31508(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30488__auto___33685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_31679){
var state_val_31680 = (state_31679[(1)]);
if((state_val_31680 === (7))){
var inst_31675 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31685_33686 = state_31679__$1;
(statearr_31685_33686[(2)] = inst_31675);

(statearr_31685_33686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (20))){
var inst_31577 = (state_31679[(7)]);
var inst_31589 = cljs.core.first(inst_31577);
var inst_31590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31589,(0),null);
var inst_31591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31589,(1),null);
var state_31679__$1 = (function (){var statearr_31693 = state_31679;
(statearr_31693[(8)] = inst_31590);

return statearr_31693;
})();
if(cljs.core.truth_(inst_31591)){
var statearr_31696_33687 = state_31679__$1;
(statearr_31696_33687[(1)] = (22));

} else {
var statearr_31697_33688 = state_31679__$1;
(statearr_31697_33688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (27))){
var inst_31621 = (state_31679[(9)]);
var inst_31540 = (state_31679[(10)]);
var inst_31619 = (state_31679[(11)]);
var inst_31626 = (state_31679[(12)]);
var inst_31626__$1 = cljs.core._nth(inst_31619,inst_31621);
var inst_31627 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31626__$1,inst_31540,done);
var state_31679__$1 = (function (){var statearr_31702 = state_31679;
(statearr_31702[(12)] = inst_31626__$1);

return statearr_31702;
})();
if(cljs.core.truth_(inst_31627)){
var statearr_31703_33693 = state_31679__$1;
(statearr_31703_33693[(1)] = (30));

} else {
var statearr_31704_33695 = state_31679__$1;
(statearr_31704_33695[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (1))){
var state_31679__$1 = state_31679;
var statearr_31705_33697 = state_31679__$1;
(statearr_31705_33697[(2)] = null);

(statearr_31705_33697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (24))){
var inst_31577 = (state_31679[(7)]);
var inst_31596 = (state_31679[(2)]);
var inst_31597 = cljs.core.next(inst_31577);
var inst_31551 = inst_31597;
var inst_31552 = null;
var inst_31553 = (0);
var inst_31554 = (0);
var state_31679__$1 = (function (){var statearr_31706 = state_31679;
(statearr_31706[(13)] = inst_31551);

(statearr_31706[(14)] = inst_31552);

(statearr_31706[(15)] = inst_31553);

(statearr_31706[(16)] = inst_31554);

(statearr_31706[(17)] = inst_31596);

return statearr_31706;
})();
var statearr_31707_33703 = state_31679__$1;
(statearr_31707_33703[(2)] = null);

(statearr_31707_33703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (39))){
var state_31679__$1 = state_31679;
var statearr_31714_33706 = state_31679__$1;
(statearr_31714_33706[(2)] = null);

(statearr_31714_33706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (4))){
var inst_31540 = (state_31679[(10)]);
var inst_31540__$1 = (state_31679[(2)]);
var inst_31542 = (inst_31540__$1 == null);
var state_31679__$1 = (function (){var statearr_31720 = state_31679;
(statearr_31720[(10)] = inst_31540__$1);

return statearr_31720;
})();
if(cljs.core.truth_(inst_31542)){
var statearr_31721_33708 = state_31679__$1;
(statearr_31721_33708[(1)] = (5));

} else {
var statearr_31722_33710 = state_31679__$1;
(statearr_31722_33710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (15))){
var inst_31551 = (state_31679[(13)]);
var inst_31552 = (state_31679[(14)]);
var inst_31553 = (state_31679[(15)]);
var inst_31554 = (state_31679[(16)]);
var inst_31571 = (state_31679[(2)]);
var inst_31573 = (inst_31554 + (1));
var tmp31708 = inst_31551;
var tmp31709 = inst_31552;
var tmp31710 = inst_31553;
var inst_31551__$1 = tmp31708;
var inst_31552__$1 = tmp31709;
var inst_31553__$1 = tmp31710;
var inst_31554__$1 = inst_31573;
var state_31679__$1 = (function (){var statearr_31728 = state_31679;
(statearr_31728[(13)] = inst_31551__$1);

(statearr_31728[(14)] = inst_31552__$1);

(statearr_31728[(15)] = inst_31553__$1);

(statearr_31728[(16)] = inst_31554__$1);

(statearr_31728[(18)] = inst_31571);

return statearr_31728;
})();
var statearr_31729_33720 = state_31679__$1;
(statearr_31729_33720[(2)] = null);

(statearr_31729_33720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (21))){
var inst_31600 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31734_33723 = state_31679__$1;
(statearr_31734_33723[(2)] = inst_31600);

(statearr_31734_33723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (31))){
var inst_31626 = (state_31679[(12)]);
var inst_31631 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31626);
var state_31679__$1 = state_31679;
var statearr_31738_33727 = state_31679__$1;
(statearr_31738_33727[(2)] = inst_31631);

(statearr_31738_33727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (32))){
var inst_31621 = (state_31679[(9)]);
var inst_31619 = (state_31679[(11)]);
var inst_31618 = (state_31679[(19)]);
var inst_31620 = (state_31679[(20)]);
var inst_31633 = (state_31679[(2)]);
var inst_31635 = (inst_31621 + (1));
var tmp31730 = inst_31619;
var tmp31731 = inst_31618;
var tmp31732 = inst_31620;
var inst_31618__$1 = tmp31731;
var inst_31619__$1 = tmp31730;
var inst_31620__$1 = tmp31732;
var inst_31621__$1 = inst_31635;
var state_31679__$1 = (function (){var statearr_31744 = state_31679;
(statearr_31744[(9)] = inst_31621__$1);

(statearr_31744[(11)] = inst_31619__$1);

(statearr_31744[(19)] = inst_31618__$1);

(statearr_31744[(21)] = inst_31633);

(statearr_31744[(20)] = inst_31620__$1);

return statearr_31744;
})();
var statearr_31746_33741 = state_31679__$1;
(statearr_31746_33741[(2)] = null);

(statearr_31746_33741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (40))){
var inst_31648 = (state_31679[(22)]);
var inst_31652 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31648);
var state_31679__$1 = state_31679;
var statearr_31749_33744 = state_31679__$1;
(statearr_31749_33744[(2)] = inst_31652);

(statearr_31749_33744[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (33))){
var inst_31639 = (state_31679[(23)]);
var inst_31641 = cljs.core.chunked_seq_QMARK_(inst_31639);
var state_31679__$1 = state_31679;
if(inst_31641){
var statearr_31755_33746 = state_31679__$1;
(statearr_31755_33746[(1)] = (36));

} else {
var statearr_31756_33748 = state_31679__$1;
(statearr_31756_33748[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (13))){
var inst_31565 = (state_31679[(24)]);
var inst_31568 = cljs.core.async.close_BANG_(inst_31565);
var state_31679__$1 = state_31679;
var statearr_31757_33751 = state_31679__$1;
(statearr_31757_33751[(2)] = inst_31568);

(statearr_31757_33751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (22))){
var inst_31590 = (state_31679[(8)]);
var inst_31593 = cljs.core.async.close_BANG_(inst_31590);
var state_31679__$1 = state_31679;
var statearr_31761_33753 = state_31679__$1;
(statearr_31761_33753[(2)] = inst_31593);

(statearr_31761_33753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (36))){
var inst_31639 = (state_31679[(23)]);
var inst_31643 = cljs.core.chunk_first(inst_31639);
var inst_31644 = cljs.core.chunk_rest(inst_31639);
var inst_31645 = cljs.core.count(inst_31643);
var inst_31618 = inst_31644;
var inst_31619 = inst_31643;
var inst_31620 = inst_31645;
var inst_31621 = (0);
var state_31679__$1 = (function (){var statearr_31762 = state_31679;
(statearr_31762[(9)] = inst_31621);

(statearr_31762[(11)] = inst_31619);

(statearr_31762[(19)] = inst_31618);

(statearr_31762[(20)] = inst_31620);

return statearr_31762;
})();
var statearr_31763_33759 = state_31679__$1;
(statearr_31763_33759[(2)] = null);

(statearr_31763_33759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (41))){
var inst_31639 = (state_31679[(23)]);
var inst_31654 = (state_31679[(2)]);
var inst_31655 = cljs.core.next(inst_31639);
var inst_31618 = inst_31655;
var inst_31619 = null;
var inst_31620 = (0);
var inst_31621 = (0);
var state_31679__$1 = (function (){var statearr_31765 = state_31679;
(statearr_31765[(9)] = inst_31621);

(statearr_31765[(11)] = inst_31619);

(statearr_31765[(25)] = inst_31654);

(statearr_31765[(19)] = inst_31618);

(statearr_31765[(20)] = inst_31620);

return statearr_31765;
})();
var statearr_31766_33763 = state_31679__$1;
(statearr_31766_33763[(2)] = null);

(statearr_31766_33763[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (43))){
var state_31679__$1 = state_31679;
var statearr_31768_33765 = state_31679__$1;
(statearr_31768_33765[(2)] = null);

(statearr_31768_33765[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (29))){
var inst_31663 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31771_33768 = state_31679__$1;
(statearr_31771_33768[(2)] = inst_31663);

(statearr_31771_33768[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (44))){
var inst_31672 = (state_31679[(2)]);
var state_31679__$1 = (function (){var statearr_31773 = state_31679;
(statearr_31773[(26)] = inst_31672);

return statearr_31773;
})();
var statearr_31778_33770 = state_31679__$1;
(statearr_31778_33770[(2)] = null);

(statearr_31778_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (6))){
var inst_31610 = (state_31679[(27)]);
var inst_31609 = cljs.core.deref(cs);
var inst_31610__$1 = cljs.core.keys(inst_31609);
var inst_31611 = cljs.core.count(inst_31610__$1);
var inst_31612 = cljs.core.reset_BANG_(dctr,inst_31611);
var inst_31617 = cljs.core.seq(inst_31610__$1);
var inst_31618 = inst_31617;
var inst_31619 = null;
var inst_31620 = (0);
var inst_31621 = (0);
var state_31679__$1 = (function (){var statearr_31785 = state_31679;
(statearr_31785[(9)] = inst_31621);

(statearr_31785[(27)] = inst_31610__$1);

(statearr_31785[(11)] = inst_31619);

(statearr_31785[(19)] = inst_31618);

(statearr_31785[(28)] = inst_31612);

(statearr_31785[(20)] = inst_31620);

return statearr_31785;
})();
var statearr_31788_33777 = state_31679__$1;
(statearr_31788_33777[(2)] = null);

(statearr_31788_33777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (28))){
var inst_31618 = (state_31679[(19)]);
var inst_31639 = (state_31679[(23)]);
var inst_31639__$1 = cljs.core.seq(inst_31618);
var state_31679__$1 = (function (){var statearr_31789 = state_31679;
(statearr_31789[(23)] = inst_31639__$1);

return statearr_31789;
})();
if(inst_31639__$1){
var statearr_31790_33788 = state_31679__$1;
(statearr_31790_33788[(1)] = (33));

} else {
var statearr_31791_33789 = state_31679__$1;
(statearr_31791_33789[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (25))){
var inst_31621 = (state_31679[(9)]);
var inst_31620 = (state_31679[(20)]);
var inst_31623 = (inst_31621 < inst_31620);
var inst_31624 = inst_31623;
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31624)){
var statearr_31793_33795 = state_31679__$1;
(statearr_31793_33795[(1)] = (27));

} else {
var statearr_31794_33796 = state_31679__$1;
(statearr_31794_33796[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (34))){
var state_31679__$1 = state_31679;
var statearr_31797_33799 = state_31679__$1;
(statearr_31797_33799[(2)] = null);

(statearr_31797_33799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (17))){
var state_31679__$1 = state_31679;
var statearr_31798_33804 = state_31679__$1;
(statearr_31798_33804[(2)] = null);

(statearr_31798_33804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (3))){
var inst_31677 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31679__$1,inst_31677);
} else {
if((state_val_31680 === (12))){
var inst_31605 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31799_33809 = state_31679__$1;
(statearr_31799_33809[(2)] = inst_31605);

(statearr_31799_33809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (2))){
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31679__$1,(4),ch);
} else {
if((state_val_31680 === (23))){
var state_31679__$1 = state_31679;
var statearr_31800_33815 = state_31679__$1;
(statearr_31800_33815[(2)] = null);

(statearr_31800_33815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (35))){
var inst_31661 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31801_33817 = state_31679__$1;
(statearr_31801_33817[(2)] = inst_31661);

(statearr_31801_33817[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (19))){
var inst_31577 = (state_31679[(7)]);
var inst_31581 = cljs.core.chunk_first(inst_31577);
var inst_31582 = cljs.core.chunk_rest(inst_31577);
var inst_31583 = cljs.core.count(inst_31581);
var inst_31551 = inst_31582;
var inst_31552 = inst_31581;
var inst_31553 = inst_31583;
var inst_31554 = (0);
var state_31679__$1 = (function (){var statearr_31805 = state_31679;
(statearr_31805[(13)] = inst_31551);

(statearr_31805[(14)] = inst_31552);

(statearr_31805[(15)] = inst_31553);

(statearr_31805[(16)] = inst_31554);

return statearr_31805;
})();
var statearr_31809_33822 = state_31679__$1;
(statearr_31809_33822[(2)] = null);

(statearr_31809_33822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (11))){
var inst_31551 = (state_31679[(13)]);
var inst_31577 = (state_31679[(7)]);
var inst_31577__$1 = cljs.core.seq(inst_31551);
var state_31679__$1 = (function (){var statearr_31812 = state_31679;
(statearr_31812[(7)] = inst_31577__$1);

return statearr_31812;
})();
if(inst_31577__$1){
var statearr_31815_33824 = state_31679__$1;
(statearr_31815_33824[(1)] = (16));

} else {
var statearr_31816_33826 = state_31679__$1;
(statearr_31816_33826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (9))){
var inst_31607 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31817_33828 = state_31679__$1;
(statearr_31817_33828[(2)] = inst_31607);

(statearr_31817_33828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (5))){
var inst_31549 = cljs.core.deref(cs);
var inst_31550 = cljs.core.seq(inst_31549);
var inst_31551 = inst_31550;
var inst_31552 = null;
var inst_31553 = (0);
var inst_31554 = (0);
var state_31679__$1 = (function (){var statearr_31818 = state_31679;
(statearr_31818[(13)] = inst_31551);

(statearr_31818[(14)] = inst_31552);

(statearr_31818[(15)] = inst_31553);

(statearr_31818[(16)] = inst_31554);

return statearr_31818;
})();
var statearr_31819_33833 = state_31679__$1;
(statearr_31819_33833[(2)] = null);

(statearr_31819_33833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (14))){
var state_31679__$1 = state_31679;
var statearr_31820_33837 = state_31679__$1;
(statearr_31820_33837[(2)] = null);

(statearr_31820_33837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (45))){
var inst_31669 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31821_33842 = state_31679__$1;
(statearr_31821_33842[(2)] = inst_31669);

(statearr_31821_33842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (26))){
var inst_31610 = (state_31679[(27)]);
var inst_31665 = (state_31679[(2)]);
var inst_31666 = cljs.core.seq(inst_31610);
var state_31679__$1 = (function (){var statearr_31822 = state_31679;
(statearr_31822[(29)] = inst_31665);

return statearr_31822;
})();
if(inst_31666){
var statearr_31823_33852 = state_31679__$1;
(statearr_31823_33852[(1)] = (42));

} else {
var statearr_31824_33853 = state_31679__$1;
(statearr_31824_33853[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (16))){
var inst_31577 = (state_31679[(7)]);
var inst_31579 = cljs.core.chunked_seq_QMARK_(inst_31577);
var state_31679__$1 = state_31679;
if(inst_31579){
var statearr_31825_33854 = state_31679__$1;
(statearr_31825_33854[(1)] = (19));

} else {
var statearr_31830_33855 = state_31679__$1;
(statearr_31830_33855[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (38))){
var inst_31658 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31831_33863 = state_31679__$1;
(statearr_31831_33863[(2)] = inst_31658);

(statearr_31831_33863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (30))){
var state_31679__$1 = state_31679;
var statearr_31832_33864 = state_31679__$1;
(statearr_31832_33864[(2)] = null);

(statearr_31832_33864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (10))){
var inst_31552 = (state_31679[(14)]);
var inst_31554 = (state_31679[(16)]);
var inst_31564 = cljs.core._nth(inst_31552,inst_31554);
var inst_31565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31564,(0),null);
var inst_31566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31564,(1),null);
var state_31679__$1 = (function (){var statearr_31833 = state_31679;
(statearr_31833[(24)] = inst_31565);

return statearr_31833;
})();
if(cljs.core.truth_(inst_31566)){
var statearr_31834_33873 = state_31679__$1;
(statearr_31834_33873[(1)] = (13));

} else {
var statearr_31835_33876 = state_31679__$1;
(statearr_31835_33876[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (18))){
var inst_31603 = (state_31679[(2)]);
var state_31679__$1 = state_31679;
var statearr_31836_33881 = state_31679__$1;
(statearr_31836_33881[(2)] = inst_31603);

(statearr_31836_33881[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (42))){
var state_31679__$1 = state_31679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31679__$1,(45),dchan);
} else {
if((state_val_31680 === (37))){
var inst_31540 = (state_31679[(10)]);
var inst_31648 = (state_31679[(22)]);
var inst_31639 = (state_31679[(23)]);
var inst_31648__$1 = cljs.core.first(inst_31639);
var inst_31649 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31648__$1,inst_31540,done);
var state_31679__$1 = (function (){var statearr_31847 = state_31679;
(statearr_31847[(22)] = inst_31648__$1);

return statearr_31847;
})();
if(cljs.core.truth_(inst_31649)){
var statearr_31851_33888 = state_31679__$1;
(statearr_31851_33888[(1)] = (39));

} else {
var statearr_31852_33894 = state_31679__$1;
(statearr_31852_33894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31680 === (8))){
var inst_31553 = (state_31679[(15)]);
var inst_31554 = (state_31679[(16)]);
var inst_31556 = (inst_31554 < inst_31553);
var inst_31557 = inst_31556;
var state_31679__$1 = state_31679;
if(cljs.core.truth_(inst_31557)){
var statearr_31853_33899 = state_31679__$1;
(statearr_31853_33899[(1)] = (10));

} else {
var statearr_31854_33900 = state_31679__$1;
(statearr_31854_33900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30406__auto__ = null;
var cljs$core$async$mult_$_state_machine__30406__auto____0 = (function (){
var statearr_31857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31857[(0)] = cljs$core$async$mult_$_state_machine__30406__auto__);

(statearr_31857[(1)] = (1));

return statearr_31857;
});
var cljs$core$async$mult_$_state_machine__30406__auto____1 = (function (state_31679){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_31679);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e31858){var ex__30409__auto__ = e31858;
var statearr_31859_33905 = state_31679;
(statearr_31859_33905[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_31679[(4)]))){
var statearr_31860_33906 = state_31679;
(statearr_31860_33906[(1)] = cljs.core.first((state_31679[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33909 = state_31679;
state_31679 = G__33909;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30406__auto__ = function(state_31679){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30406__auto____1.call(this,state_31679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30406__auto____0;
cljs$core$async$mult_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30406__auto____1;
return cljs$core$async$mult_$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_31861 = f__30489__auto__();
(statearr_31861[(6)] = c__30488__auto___33685);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31867 = arguments.length;
switch (G__31867) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_33924 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_33924(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_33926 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_33926(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_33928 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_33928(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_33931 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_33931(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_33936 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_33936(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___33941 = arguments.length;
var i__4737__auto___33942 = (0);
while(true){
if((i__4737__auto___33942 < len__4736__auto___33941)){
args__4742__auto__.push((arguments[i__4737__auto___33942]));

var G__33943 = (i__4737__auto___33942 + (1));
i__4737__auto___33942 = G__33943;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31914){
var map__31917 = p__31914;
var map__31917__$1 = (((((!((map__31917 == null))))?(((((map__31917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31917):map__31917);
var opts = map__31917__$1;
var statearr_31919_33947 = state;
(statearr_31919_33947[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31920_33948 = state;
(statearr_31920_33948[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31923_33954 = state;
(statearr_31923_33954[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31910){
var G__31911 = cljs.core.first(seq31910);
var seq31910__$1 = cljs.core.next(seq31910);
var G__31912 = cljs.core.first(seq31910__$1);
var seq31910__$2 = cljs.core.next(seq31910__$1);
var G__31913 = cljs.core.first(seq31910__$2);
var seq31910__$3 = cljs.core.next(seq31910__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31911,G__31912,G__31913,seq31910__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31934 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31935){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31935 = meta31935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31936,meta31935__$1){
var self__ = this;
var _31936__$1 = this;
return (new cljs.core.async.t_cljs$core$async31934(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31935__$1));
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31936){
var self__ = this;
var _31936__$1 = this;
return self__.meta31935;
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31934.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31935","meta31935",851000809,null)], null);
}));

(cljs.core.async.t_cljs$core$async31934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31934");

(cljs.core.async.t_cljs$core$async31934.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31934.
 */
cljs.core.async.__GT_t_cljs$core$async31934 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31934(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31935){
return (new cljs.core.async.t_cljs$core$async31934(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31935));
});

}

return (new cljs.core.async.t_cljs$core$async31934(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30488__auto___33984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32092){
var state_val_32093 = (state_32092[(1)]);
if((state_val_32093 === (7))){
var inst_31967 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32094_33985 = state_32092__$1;
(statearr_32094_33985[(2)] = inst_31967);

(statearr_32094_33985[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (20))){
var inst_31985 = (state_32092[(7)]);
var state_32092__$1 = state_32092;
var statearr_32095_33986 = state_32092__$1;
(statearr_32095_33986[(2)] = inst_31985);

(statearr_32095_33986[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (27))){
var state_32092__$1 = state_32092;
var statearr_32096_33987 = state_32092__$1;
(statearr_32096_33987[(2)] = null);

(statearr_32096_33987[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (1))){
var inst_31946 = (state_32092[(8)]);
var inst_31946__$1 = calc_state();
var inst_31953 = (inst_31946__$1 == null);
var inst_31954 = cljs.core.not(inst_31953);
var state_32092__$1 = (function (){var statearr_32097 = state_32092;
(statearr_32097[(8)] = inst_31946__$1);

return statearr_32097;
})();
if(inst_31954){
var statearr_32098_33988 = state_32092__$1;
(statearr_32098_33988[(1)] = (2));

} else {
var statearr_32099_33989 = state_32092__$1;
(statearr_32099_33989[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (24))){
var inst_32035 = (state_32092[(9)]);
var inst_32025 = (state_32092[(10)]);
var inst_32062 = (state_32092[(11)]);
var inst_32062__$1 = (inst_32025.cljs$core$IFn$_invoke$arity$1 ? inst_32025.cljs$core$IFn$_invoke$arity$1(inst_32035) : inst_32025.call(null,inst_32035));
var state_32092__$1 = (function (){var statearr_32100 = state_32092;
(statearr_32100[(11)] = inst_32062__$1);

return statearr_32100;
})();
if(cljs.core.truth_(inst_32062__$1)){
var statearr_32102_33994 = state_32092__$1;
(statearr_32102_33994[(1)] = (29));

} else {
var statearr_32103_33995 = state_32092__$1;
(statearr_32103_33995[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (4))){
var inst_31974 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_31974)){
var statearr_32104_33997 = state_32092__$1;
(statearr_32104_33997[(1)] = (8));

} else {
var statearr_32105_33998 = state_32092__$1;
(statearr_32105_33998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (15))){
var inst_32015 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32015)){
var statearr_32106_33999 = state_32092__$1;
(statearr_32106_33999[(1)] = (19));

} else {
var statearr_32107_34000 = state_32092__$1;
(statearr_32107_34000[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (21))){
var inst_32020 = (state_32092[(12)]);
var inst_32020__$1 = (state_32092[(2)]);
var inst_32025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32020__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32020__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32020__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32092__$1 = (function (){var statearr_32108 = state_32092;
(statearr_32108[(12)] = inst_32020__$1);

(statearr_32108[(10)] = inst_32025);

(statearr_32108[(13)] = inst_32026);

return statearr_32108;
})();
return cljs.core.async.ioc_alts_BANG_(state_32092__$1,(22),inst_32027);
} else {
if((state_val_32093 === (31))){
var inst_32073 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32073)){
var statearr_32109_34001 = state_32092__$1;
(statearr_32109_34001[(1)] = (32));

} else {
var statearr_32110_34002 = state_32092__$1;
(statearr_32110_34002[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (32))){
var inst_32033 = (state_32092[(14)]);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32092__$1,(35),out,inst_32033);
} else {
if((state_val_32093 === (33))){
var inst_32020 = (state_32092[(12)]);
var inst_31985 = inst_32020;
var state_32092__$1 = (function (){var statearr_32112 = state_32092;
(statearr_32112[(7)] = inst_31985);

return statearr_32112;
})();
var statearr_32113_34003 = state_32092__$1;
(statearr_32113_34003[(2)] = null);

(statearr_32113_34003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (13))){
var inst_31985 = (state_32092[(7)]);
var inst_32004 = inst_31985.cljs$lang$protocol_mask$partition0$;
var inst_32005 = (inst_32004 & (64));
var inst_32006 = inst_31985.cljs$core$ISeq$;
var inst_32007 = (cljs.core.PROTOCOL_SENTINEL === inst_32006);
var inst_32008 = ((inst_32005) || (inst_32007));
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32008)){
var statearr_32114_34005 = state_32092__$1;
(statearr_32114_34005[(1)] = (16));

} else {
var statearr_32115_34006 = state_32092__$1;
(statearr_32115_34006[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (22))){
var inst_32035 = (state_32092[(9)]);
var inst_32033 = (state_32092[(14)]);
var inst_32032 = (state_32092[(2)]);
var inst_32033__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32032,(0),null);
var inst_32035__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32032,(1),null);
var inst_32042 = (inst_32033__$1 == null);
var inst_32043 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32035__$1,change);
var inst_32044 = ((inst_32042) || (inst_32043));
var state_32092__$1 = (function (){var statearr_32117 = state_32092;
(statearr_32117[(9)] = inst_32035__$1);

(statearr_32117[(14)] = inst_32033__$1);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32044)){
var statearr_32118_34008 = state_32092__$1;
(statearr_32118_34008[(1)] = (23));

} else {
var statearr_32119_34009 = state_32092__$1;
(statearr_32119_34009[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (36))){
var inst_32020 = (state_32092[(12)]);
var inst_31985 = inst_32020;
var state_32092__$1 = (function (){var statearr_32125 = state_32092;
(statearr_32125[(7)] = inst_31985);

return statearr_32125;
})();
var statearr_32126_34010 = state_32092__$1;
(statearr_32126_34010[(2)] = null);

(statearr_32126_34010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (29))){
var inst_32062 = (state_32092[(11)]);
var state_32092__$1 = state_32092;
var statearr_32127_34011 = state_32092__$1;
(statearr_32127_34011[(2)] = inst_32062);

(statearr_32127_34011[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (6))){
var state_32092__$1 = state_32092;
var statearr_32129_34012 = state_32092__$1;
(statearr_32129_34012[(2)] = false);

(statearr_32129_34012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (28))){
var inst_32054 = (state_32092[(2)]);
var inst_32055 = calc_state();
var inst_31985 = inst_32055;
var state_32092__$1 = (function (){var statearr_32130 = state_32092;
(statearr_32130[(15)] = inst_32054);

(statearr_32130[(7)] = inst_31985);

return statearr_32130;
})();
var statearr_32131_34014 = state_32092__$1;
(statearr_32131_34014[(2)] = null);

(statearr_32131_34014[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (25))){
var inst_32087 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32132_34015 = state_32092__$1;
(statearr_32132_34015[(2)] = inst_32087);

(statearr_32132_34015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (34))){
var inst_32085 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32133_34016 = state_32092__$1;
(statearr_32133_34016[(2)] = inst_32085);

(statearr_32133_34016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (17))){
var state_32092__$1 = state_32092;
var statearr_32134_34021 = state_32092__$1;
(statearr_32134_34021[(2)] = false);

(statearr_32134_34021[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (3))){
var state_32092__$1 = state_32092;
var statearr_32135_34023 = state_32092__$1;
(statearr_32135_34023[(2)] = false);

(statearr_32135_34023[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (12))){
var inst_32089 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32092__$1,inst_32089);
} else {
if((state_val_32093 === (2))){
var inst_31946 = (state_32092[(8)]);
var inst_31958 = inst_31946.cljs$lang$protocol_mask$partition0$;
var inst_31959 = (inst_31958 & (64));
var inst_31960 = inst_31946.cljs$core$ISeq$;
var inst_31962 = (cljs.core.PROTOCOL_SENTINEL === inst_31960);
var inst_31963 = ((inst_31959) || (inst_31962));
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_31963)){
var statearr_32136_34024 = state_32092__$1;
(statearr_32136_34024[(1)] = (5));

} else {
var statearr_32137_34025 = state_32092__$1;
(statearr_32137_34025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (23))){
var inst_32033 = (state_32092[(14)]);
var inst_32049 = (inst_32033 == null);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32049)){
var statearr_32138_34026 = state_32092__$1;
(statearr_32138_34026[(1)] = (26));

} else {
var statearr_32139_34028 = state_32092__$1;
(statearr_32139_34028[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (35))){
var inst_32076 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
if(cljs.core.truth_(inst_32076)){
var statearr_32140_34029 = state_32092__$1;
(statearr_32140_34029[(1)] = (36));

} else {
var statearr_32143_34030 = state_32092__$1;
(statearr_32143_34030[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (19))){
var inst_31985 = (state_32092[(7)]);
var inst_32017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31985);
var state_32092__$1 = state_32092;
var statearr_32144_34035 = state_32092__$1;
(statearr_32144_34035[(2)] = inst_32017);

(statearr_32144_34035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (11))){
var inst_31985 = (state_32092[(7)]);
var inst_31994 = (inst_31985 == null);
var inst_31996 = cljs.core.not(inst_31994);
var state_32092__$1 = state_32092;
if(inst_31996){
var statearr_32145_34036 = state_32092__$1;
(statearr_32145_34036[(1)] = (13));

} else {
var statearr_32146_34037 = state_32092__$1;
(statearr_32146_34037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (9))){
var inst_31946 = (state_32092[(8)]);
var state_32092__$1 = state_32092;
var statearr_32147_34038 = state_32092__$1;
(statearr_32147_34038[(2)] = inst_31946);

(statearr_32147_34038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (5))){
var state_32092__$1 = state_32092;
var statearr_32148_34039 = state_32092__$1;
(statearr_32148_34039[(2)] = true);

(statearr_32148_34039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (14))){
var state_32092__$1 = state_32092;
var statearr_32149_34040 = state_32092__$1;
(statearr_32149_34040[(2)] = false);

(statearr_32149_34040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (26))){
var inst_32035 = (state_32092[(9)]);
var inst_32051 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32035);
var state_32092__$1 = state_32092;
var statearr_32150_34041 = state_32092__$1;
(statearr_32150_34041[(2)] = inst_32051);

(statearr_32150_34041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (16))){
var state_32092__$1 = state_32092;
var statearr_32151_34042 = state_32092__$1;
(statearr_32151_34042[(2)] = true);

(statearr_32151_34042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (38))){
var inst_32081 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32152_34043 = state_32092__$1;
(statearr_32152_34043[(2)] = inst_32081);

(statearr_32152_34043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (30))){
var inst_32035 = (state_32092[(9)]);
var inst_32025 = (state_32092[(10)]);
var inst_32026 = (state_32092[(13)]);
var inst_32068 = cljs.core.empty_QMARK_(inst_32025);
var inst_32069 = (inst_32026.cljs$core$IFn$_invoke$arity$1 ? inst_32026.cljs$core$IFn$_invoke$arity$1(inst_32035) : inst_32026.call(null,inst_32035));
var inst_32070 = cljs.core.not(inst_32069);
var inst_32071 = ((inst_32068) && (inst_32070));
var state_32092__$1 = state_32092;
var statearr_32153_34046 = state_32092__$1;
(statearr_32153_34046[(2)] = inst_32071);

(statearr_32153_34046[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (10))){
var inst_31946 = (state_32092[(8)]);
var inst_31980 = (state_32092[(2)]);
var inst_31981 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31984 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31985 = inst_31946;
var state_32092__$1 = (function (){var statearr_32154 = state_32092;
(statearr_32154[(16)] = inst_31982);

(statearr_32154[(17)] = inst_31984);

(statearr_32154[(7)] = inst_31985);

(statearr_32154[(18)] = inst_31981);

return statearr_32154;
})();
var statearr_32155_34047 = state_32092__$1;
(statearr_32155_34047[(2)] = null);

(statearr_32155_34047[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (18))){
var inst_32012 = (state_32092[(2)]);
var state_32092__$1 = state_32092;
var statearr_32156_34048 = state_32092__$1;
(statearr_32156_34048[(2)] = inst_32012);

(statearr_32156_34048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (37))){
var state_32092__$1 = state_32092;
var statearr_32157_34049 = state_32092__$1;
(statearr_32157_34049[(2)] = null);

(statearr_32157_34049[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32093 === (8))){
var inst_31946 = (state_32092[(8)]);
var inst_31977 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31946);
var state_32092__$1 = state_32092;
var statearr_32158_34053 = state_32092__$1;
(statearr_32158_34053[(2)] = inst_31977);

(statearr_32158_34053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30406__auto__ = null;
var cljs$core$async$mix_$_state_machine__30406__auto____0 = (function (){
var statearr_32163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32163[(0)] = cljs$core$async$mix_$_state_machine__30406__auto__);

(statearr_32163[(1)] = (1));

return statearr_32163;
});
var cljs$core$async$mix_$_state_machine__30406__auto____1 = (function (state_32092){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32092);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32164){var ex__30409__auto__ = e32164;
var statearr_32165_34054 = state_32092;
(statearr_32165_34054[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32092[(4)]))){
var statearr_32166_34055 = state_32092;
(statearr_32166_34055[(1)] = cljs.core.first((state_32092[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34056 = state_32092;
state_32092 = G__34056;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30406__auto__ = function(state_32092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30406__auto____1.call(this,state_32092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30406__auto____0;
cljs$core$async$mix_$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30406__auto____1;
return cljs$core$async$mix_$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32170 = f__30489__auto__();
(statearr_32170[(6)] = c__30488__auto___33984);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34057 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34057(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34061 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34061(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34062 = (function() {
var G__34063 = null;
var G__34063__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34063__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34063 = function(p,v){
switch(arguments.length){
case 1:
return G__34063__1.call(this,p);
case 2:
return G__34063__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34063.cljs$core$IFn$_invoke$arity$1 = G__34063__1;
G__34063.cljs$core$IFn$_invoke$arity$2 = G__34063__2;
return G__34063;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32177 = arguments.length;
switch (G__32177) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34062(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34062(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32188 = arguments.length;
switch (G__32188) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32185_SHARP_){
if(cljs.core.truth_((p1__32185_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32185_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32185_SHARP_.call(null,topic)))){
return p1__32185_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32185_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32203 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32204){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32204 = meta32204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32205,meta32204__$1){
var self__ = this;
var _32205__$1 = this;
return (new cljs.core.async.t_cljs$core$async32203(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32204__$1));
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32205){
var self__ = this;
var _32205__$1 = this;
return self__.meta32204;
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32203.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32204","meta32204",1935928839,null)], null);
}));

(cljs.core.async.t_cljs$core$async32203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32203");

(cljs.core.async.t_cljs$core$async32203.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32203.
 */
cljs.core.async.__GT_t_cljs$core$async32203 = (function cljs$core$async$__GT_t_cljs$core$async32203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32204){
return (new cljs.core.async.t_cljs$core$async32203(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32204));
});

}

return (new cljs.core.async.t_cljs$core$async32203(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30488__auto___34079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32323){
var state_val_32324 = (state_32323[(1)]);
if((state_val_32324 === (7))){
var inst_32319 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32326_34080 = state_32323__$1;
(statearr_32326_34080[(2)] = inst_32319);

(statearr_32326_34080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (20))){
var state_32323__$1 = state_32323;
var statearr_32328_34082 = state_32323__$1;
(statearr_32328_34082[(2)] = null);

(statearr_32328_34082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (1))){
var state_32323__$1 = state_32323;
var statearr_32329_34083 = state_32323__$1;
(statearr_32329_34083[(2)] = null);

(statearr_32329_34083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (24))){
var inst_32290 = (state_32323[(7)]);
var inst_32311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32290);
var state_32323__$1 = state_32323;
var statearr_32330_34085 = state_32323__$1;
(statearr_32330_34085[(2)] = inst_32311);

(statearr_32330_34085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (4))){
var inst_32238 = (state_32323[(8)]);
var inst_32238__$1 = (state_32323[(2)]);
var inst_32239 = (inst_32238__$1 == null);
var state_32323__$1 = (function (){var statearr_32331 = state_32323;
(statearr_32331[(8)] = inst_32238__$1);

return statearr_32331;
})();
if(cljs.core.truth_(inst_32239)){
var statearr_32333_34086 = state_32323__$1;
(statearr_32333_34086[(1)] = (5));

} else {
var statearr_32334_34087 = state_32323__$1;
(statearr_32334_34087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (15))){
var inst_32284 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32335_34088 = state_32323__$1;
(statearr_32335_34088[(2)] = inst_32284);

(statearr_32335_34088[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (21))){
var inst_32316 = (state_32323[(2)]);
var state_32323__$1 = (function (){var statearr_32336 = state_32323;
(statearr_32336[(9)] = inst_32316);

return statearr_32336;
})();
var statearr_32337_34089 = state_32323__$1;
(statearr_32337_34089[(2)] = null);

(statearr_32337_34089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (13))){
var inst_32266 = (state_32323[(10)]);
var inst_32268 = cljs.core.chunked_seq_QMARK_(inst_32266);
var state_32323__$1 = state_32323;
if(inst_32268){
var statearr_32340_34090 = state_32323__$1;
(statearr_32340_34090[(1)] = (16));

} else {
var statearr_32341_34091 = state_32323__$1;
(statearr_32341_34091[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (22))){
var inst_32296 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
if(cljs.core.truth_(inst_32296)){
var statearr_32348_34092 = state_32323__$1;
(statearr_32348_34092[(1)] = (23));

} else {
var statearr_32350_34093 = state_32323__$1;
(statearr_32350_34093[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (6))){
var inst_32292 = (state_32323[(11)]);
var inst_32238 = (state_32323[(8)]);
var inst_32290 = (state_32323[(7)]);
var inst_32290__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32238) : topic_fn.call(null,inst_32238));
var inst_32291 = cljs.core.deref(mults);
var inst_32292__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32291,inst_32290__$1);
var state_32323__$1 = (function (){var statearr_32352 = state_32323;
(statearr_32352[(11)] = inst_32292__$1);

(statearr_32352[(7)] = inst_32290__$1);

return statearr_32352;
})();
if(cljs.core.truth_(inst_32292__$1)){
var statearr_32355_34094 = state_32323__$1;
(statearr_32355_34094[(1)] = (19));

} else {
var statearr_32356_34096 = state_32323__$1;
(statearr_32356_34096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (25))){
var inst_32313 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32358_34097 = state_32323__$1;
(statearr_32358_34097[(2)] = inst_32313);

(statearr_32358_34097[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (17))){
var inst_32266 = (state_32323[(10)]);
var inst_32275 = cljs.core.first(inst_32266);
var inst_32276 = cljs.core.async.muxch_STAR_(inst_32275);
var inst_32277 = cljs.core.async.close_BANG_(inst_32276);
var inst_32278 = cljs.core.next(inst_32266);
var inst_32248 = inst_32278;
var inst_32249 = null;
var inst_32250 = (0);
var inst_32251 = (0);
var state_32323__$1 = (function (){var statearr_32361 = state_32323;
(statearr_32361[(12)] = inst_32277);

(statearr_32361[(13)] = inst_32248);

(statearr_32361[(14)] = inst_32249);

(statearr_32361[(15)] = inst_32251);

(statearr_32361[(16)] = inst_32250);

return statearr_32361;
})();
var statearr_32362_34098 = state_32323__$1;
(statearr_32362_34098[(2)] = null);

(statearr_32362_34098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (3))){
var inst_32321 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32323__$1,inst_32321);
} else {
if((state_val_32324 === (12))){
var inst_32286 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32363_34099 = state_32323__$1;
(statearr_32363_34099[(2)] = inst_32286);

(statearr_32363_34099[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (2))){
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32323__$1,(4),ch);
} else {
if((state_val_32324 === (23))){
var state_32323__$1 = state_32323;
var statearr_32365_34101 = state_32323__$1;
(statearr_32365_34101[(2)] = null);

(statearr_32365_34101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (19))){
var inst_32292 = (state_32323[(11)]);
var inst_32238 = (state_32323[(8)]);
var inst_32294 = cljs.core.async.muxch_STAR_(inst_32292);
var state_32323__$1 = state_32323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32323__$1,(22),inst_32294,inst_32238);
} else {
if((state_val_32324 === (11))){
var inst_32248 = (state_32323[(13)]);
var inst_32266 = (state_32323[(10)]);
var inst_32266__$1 = cljs.core.seq(inst_32248);
var state_32323__$1 = (function (){var statearr_32369 = state_32323;
(statearr_32369[(10)] = inst_32266__$1);

return statearr_32369;
})();
if(inst_32266__$1){
var statearr_32371_34106 = state_32323__$1;
(statearr_32371_34106[(1)] = (13));

} else {
var statearr_32373_34107 = state_32323__$1;
(statearr_32373_34107[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (9))){
var inst_32288 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32374_34111 = state_32323__$1;
(statearr_32374_34111[(2)] = inst_32288);

(statearr_32374_34111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (5))){
var inst_32245 = cljs.core.deref(mults);
var inst_32246 = cljs.core.vals(inst_32245);
var inst_32247 = cljs.core.seq(inst_32246);
var inst_32248 = inst_32247;
var inst_32249 = null;
var inst_32250 = (0);
var inst_32251 = (0);
var state_32323__$1 = (function (){var statearr_32377 = state_32323;
(statearr_32377[(13)] = inst_32248);

(statearr_32377[(14)] = inst_32249);

(statearr_32377[(15)] = inst_32251);

(statearr_32377[(16)] = inst_32250);

return statearr_32377;
})();
var statearr_32379_34120 = state_32323__$1;
(statearr_32379_34120[(2)] = null);

(statearr_32379_34120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (14))){
var state_32323__$1 = state_32323;
var statearr_32385_34122 = state_32323__$1;
(statearr_32385_34122[(2)] = null);

(statearr_32385_34122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (16))){
var inst_32266 = (state_32323[(10)]);
var inst_32270 = cljs.core.chunk_first(inst_32266);
var inst_32271 = cljs.core.chunk_rest(inst_32266);
var inst_32272 = cljs.core.count(inst_32270);
var inst_32248 = inst_32271;
var inst_32249 = inst_32270;
var inst_32250 = inst_32272;
var inst_32251 = (0);
var state_32323__$1 = (function (){var statearr_32386 = state_32323;
(statearr_32386[(13)] = inst_32248);

(statearr_32386[(14)] = inst_32249);

(statearr_32386[(15)] = inst_32251);

(statearr_32386[(16)] = inst_32250);

return statearr_32386;
})();
var statearr_32387_34130 = state_32323__$1;
(statearr_32387_34130[(2)] = null);

(statearr_32387_34130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (10))){
var inst_32248 = (state_32323[(13)]);
var inst_32249 = (state_32323[(14)]);
var inst_32251 = (state_32323[(15)]);
var inst_32250 = (state_32323[(16)]);
var inst_32258 = cljs.core._nth(inst_32249,inst_32251);
var inst_32261 = cljs.core.async.muxch_STAR_(inst_32258);
var inst_32262 = cljs.core.async.close_BANG_(inst_32261);
var inst_32263 = (inst_32251 + (1));
var tmp32382 = inst_32248;
var tmp32383 = inst_32249;
var tmp32384 = inst_32250;
var inst_32248__$1 = tmp32382;
var inst_32249__$1 = tmp32383;
var inst_32250__$1 = tmp32384;
var inst_32251__$1 = inst_32263;
var state_32323__$1 = (function (){var statearr_32388 = state_32323;
(statearr_32388[(17)] = inst_32262);

(statearr_32388[(13)] = inst_32248__$1);

(statearr_32388[(14)] = inst_32249__$1);

(statearr_32388[(15)] = inst_32251__$1);

(statearr_32388[(16)] = inst_32250__$1);

return statearr_32388;
})();
var statearr_32389_34135 = state_32323__$1;
(statearr_32389_34135[(2)] = null);

(statearr_32389_34135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (18))){
var inst_32281 = (state_32323[(2)]);
var state_32323__$1 = state_32323;
var statearr_32390_34139 = state_32323__$1;
(statearr_32390_34139[(2)] = inst_32281);

(statearr_32390_34139[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32324 === (8))){
var inst_32251 = (state_32323[(15)]);
var inst_32250 = (state_32323[(16)]);
var inst_32255 = (inst_32251 < inst_32250);
var inst_32256 = inst_32255;
var state_32323__$1 = state_32323;
if(cljs.core.truth_(inst_32256)){
var statearr_32391_34142 = state_32323__$1;
(statearr_32391_34142[(1)] = (10));

} else {
var statearr_32392_34143 = state_32323__$1;
(statearr_32392_34143[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_32395 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32395[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_32395[(1)] = (1));

return statearr_32395;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32323){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32323);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32396){var ex__30409__auto__ = e32396;
var statearr_32400_34148 = state_32323;
(statearr_32400_34148[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32323[(4)]))){
var statearr_32416_34149 = state_32323;
(statearr_32416_34149[(1)] = cljs.core.first((state_32323[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34150 = state_32323;
state_32323 = G__34150;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32417 = f__30489__auto__();
(statearr_32417[(6)] = c__30488__auto___34079);

return statearr_32417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32419 = arguments.length;
switch (G__32419) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32426 = arguments.length;
switch (G__32426) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32435 = arguments.length;
switch (G__32435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30488__auto___34178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32497){
var state_val_32498 = (state_32497[(1)]);
if((state_val_32498 === (7))){
var state_32497__$1 = state_32497;
var statearr_32505_34181 = state_32497__$1;
(statearr_32505_34181[(2)] = null);

(statearr_32505_34181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (1))){
var state_32497__$1 = state_32497;
var statearr_32506_34182 = state_32497__$1;
(statearr_32506_34182[(2)] = null);

(statearr_32506_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (4))){
var inst_32440 = (state_32497[(7)]);
var inst_32439 = (state_32497[(8)]);
var inst_32442 = (inst_32440 < inst_32439);
var state_32497__$1 = state_32497;
if(cljs.core.truth_(inst_32442)){
var statearr_32507_34189 = state_32497__$1;
(statearr_32507_34189[(1)] = (6));

} else {
var statearr_32508_34191 = state_32497__$1;
(statearr_32508_34191[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (15))){
var inst_32476 = (state_32497[(9)]);
var inst_32483 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32476);
var state_32497__$1 = state_32497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32497__$1,(17),out,inst_32483);
} else {
if((state_val_32498 === (13))){
var inst_32476 = (state_32497[(9)]);
var inst_32476__$1 = (state_32497[(2)]);
var inst_32477 = cljs.core.some(cljs.core.nil_QMARK_,inst_32476__$1);
var state_32497__$1 = (function (){var statearr_32509 = state_32497;
(statearr_32509[(9)] = inst_32476__$1);

return statearr_32509;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32510_34195 = state_32497__$1;
(statearr_32510_34195[(1)] = (14));

} else {
var statearr_32511_34196 = state_32497__$1;
(statearr_32511_34196[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (6))){
var state_32497__$1 = state_32497;
var statearr_32513_34198 = state_32497__$1;
(statearr_32513_34198[(2)] = null);

(statearr_32513_34198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (17))){
var inst_32485 = (state_32497[(2)]);
var state_32497__$1 = (function (){var statearr_32516 = state_32497;
(statearr_32516[(10)] = inst_32485);

return statearr_32516;
})();
var statearr_32517_34199 = state_32497__$1;
(statearr_32517_34199[(2)] = null);

(statearr_32517_34199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (3))){
var inst_32490 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32497__$1,inst_32490);
} else {
if((state_val_32498 === (12))){
var _ = (function (){var statearr_32518 = state_32497;
(statearr_32518[(4)] = cljs.core.rest((state_32497[(4)])));

return statearr_32518;
})();
var state_32497__$1 = state_32497;
var ex32515 = (state_32497__$1[(2)]);
var statearr_32519_34200 = state_32497__$1;
(statearr_32519_34200[(5)] = ex32515);


if((ex32515 instanceof Object)){
var statearr_32520_34201 = state_32497__$1;
(statearr_32520_34201[(1)] = (11));

(statearr_32520_34201[(5)] = null);

} else {
throw ex32515;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (2))){
var inst_32438 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32439 = cnt;
var inst_32440 = (0);
var state_32497__$1 = (function (){var statearr_32521 = state_32497;
(statearr_32521[(7)] = inst_32440);

(statearr_32521[(8)] = inst_32439);

(statearr_32521[(11)] = inst_32438);

return statearr_32521;
})();
var statearr_32522_34208 = state_32497__$1;
(statearr_32522_34208[(2)] = null);

(statearr_32522_34208[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (11))){
var inst_32446 = (state_32497[(2)]);
var inst_32447 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32497__$1 = (function (){var statearr_32525 = state_32497;
(statearr_32525[(12)] = inst_32446);

return statearr_32525;
})();
var statearr_32526_34209 = state_32497__$1;
(statearr_32526_34209[(2)] = inst_32447);

(statearr_32526_34209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (9))){
var inst_32440 = (state_32497[(7)]);
var _ = (function (){var statearr_32527 = state_32497;
(statearr_32527[(4)] = cljs.core.cons((12),(state_32497[(4)])));

return statearr_32527;
})();
var inst_32453 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32440) : chs__$1.call(null,inst_32440));
var inst_32454 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32440) : done.call(null,inst_32440));
var inst_32455 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32453,inst_32454);
var ___$1 = (function (){var statearr_32528 = state_32497;
(statearr_32528[(4)] = cljs.core.rest((state_32497[(4)])));

return statearr_32528;
})();
var state_32497__$1 = state_32497;
var statearr_32529_34210 = state_32497__$1;
(statearr_32529_34210[(2)] = inst_32455);

(statearr_32529_34210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (5))){
var inst_32470 = (state_32497[(2)]);
var state_32497__$1 = (function (){var statearr_32530 = state_32497;
(statearr_32530[(13)] = inst_32470);

return statearr_32530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32497__$1,(13),dchan);
} else {
if((state_val_32498 === (14))){
var inst_32480 = cljs.core.async.close_BANG_(out);
var state_32497__$1 = state_32497;
var statearr_32533_34211 = state_32497__$1;
(statearr_32533_34211[(2)] = inst_32480);

(statearr_32533_34211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (16))){
var inst_32488 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32536_34212 = state_32497__$1;
(statearr_32536_34212[(2)] = inst_32488);

(statearr_32536_34212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (10))){
var inst_32440 = (state_32497[(7)]);
var inst_32458 = (state_32497[(2)]);
var inst_32464 = (inst_32440 + (1));
var inst_32440__$1 = inst_32464;
var state_32497__$1 = (function (){var statearr_32537 = state_32497;
(statearr_32537[(14)] = inst_32458);

(statearr_32537[(7)] = inst_32440__$1);

return statearr_32537;
})();
var statearr_32538_34216 = state_32497__$1;
(statearr_32538_34216[(2)] = null);

(statearr_32538_34216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32498 === (8))){
var inst_32468 = (state_32497[(2)]);
var state_32497__$1 = state_32497;
var statearr_32539_34219 = state_32497__$1;
(statearr_32539_34219[(2)] = inst_32468);

(statearr_32539_34219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_32548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32548[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_32548[(1)] = (1));

return statearr_32548;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32497){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32497);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32549){var ex__30409__auto__ = e32549;
var statearr_32554_34231 = state_32497;
(statearr_32554_34231[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32497[(4)]))){
var statearr_32555_34232 = state_32497;
(statearr_32555_34232[(1)] = cljs.core.first((state_32497[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34235 = state_32497;
state_32497 = G__34235;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32556 = f__30489__auto__();
(statearr_32556[(6)] = c__30488__auto___34178);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32561 = arguments.length;
switch (G__32561) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34242 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32597){
var state_val_32598 = (state_32597[(1)]);
if((state_val_32598 === (7))){
var inst_32573 = (state_32597[(7)]);
var inst_32574 = (state_32597[(8)]);
var inst_32573__$1 = (state_32597[(2)]);
var inst_32574__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32573__$1,(0),null);
var inst_32575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32573__$1,(1),null);
var inst_32576 = (inst_32574__$1 == null);
var state_32597__$1 = (function (){var statearr_32601 = state_32597;
(statearr_32601[(7)] = inst_32573__$1);

(statearr_32601[(8)] = inst_32574__$1);

(statearr_32601[(9)] = inst_32575);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32576)){
var statearr_32604_34251 = state_32597__$1;
(statearr_32604_34251[(1)] = (8));

} else {
var statearr_32605_34252 = state_32597__$1;
(statearr_32605_34252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (1))){
var inst_32562 = cljs.core.vec(chs);
var inst_32563 = inst_32562;
var state_32597__$1 = (function (){var statearr_32606 = state_32597;
(statearr_32606[(10)] = inst_32563);

return statearr_32606;
})();
var statearr_32607_34253 = state_32597__$1;
(statearr_32607_34253[(2)] = null);

(statearr_32607_34253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (4))){
var inst_32563 = (state_32597[(10)]);
var state_32597__$1 = state_32597;
return cljs.core.async.ioc_alts_BANG_(state_32597__$1,(7),inst_32563);
} else {
if((state_val_32598 === (6))){
var inst_32593 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32608_34254 = state_32597__$1;
(statearr_32608_34254[(2)] = inst_32593);

(statearr_32608_34254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (3))){
var inst_32595 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32597__$1,inst_32595);
} else {
if((state_val_32598 === (2))){
var inst_32563 = (state_32597[(10)]);
var inst_32565 = cljs.core.count(inst_32563);
var inst_32566 = (inst_32565 > (0));
var state_32597__$1 = state_32597;
if(cljs.core.truth_(inst_32566)){
var statearr_32615_34258 = state_32597__$1;
(statearr_32615_34258[(1)] = (4));

} else {
var statearr_32617_34259 = state_32597__$1;
(statearr_32617_34259[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (11))){
var inst_32563 = (state_32597[(10)]);
var inst_32586 = (state_32597[(2)]);
var tmp32609 = inst_32563;
var inst_32563__$1 = tmp32609;
var state_32597__$1 = (function (){var statearr_32618 = state_32597;
(statearr_32618[(10)] = inst_32563__$1);

(statearr_32618[(11)] = inst_32586);

return statearr_32618;
})();
var statearr_32619_34260 = state_32597__$1;
(statearr_32619_34260[(2)] = null);

(statearr_32619_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (9))){
var inst_32574 = (state_32597[(8)]);
var state_32597__$1 = state_32597;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32597__$1,(11),out,inst_32574);
} else {
if((state_val_32598 === (5))){
var inst_32591 = cljs.core.async.close_BANG_(out);
var state_32597__$1 = state_32597;
var statearr_32624_34263 = state_32597__$1;
(statearr_32624_34263[(2)] = inst_32591);

(statearr_32624_34263[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (10))){
var inst_32589 = (state_32597[(2)]);
var state_32597__$1 = state_32597;
var statearr_32627_34264 = state_32597__$1;
(statearr_32627_34264[(2)] = inst_32589);

(statearr_32627_34264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32598 === (8))){
var inst_32563 = (state_32597[(10)]);
var inst_32573 = (state_32597[(7)]);
var inst_32574 = (state_32597[(8)]);
var inst_32575 = (state_32597[(9)]);
var inst_32581 = (function (){var cs = inst_32563;
var vec__32568 = inst_32573;
var v = inst_32574;
var c = inst_32575;
return (function (p1__32557_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32557_SHARP_);
});
})();
var inst_32582 = cljs.core.filterv(inst_32581,inst_32563);
var inst_32563__$1 = inst_32582;
var state_32597__$1 = (function (){var statearr_32628 = state_32597;
(statearr_32628[(10)] = inst_32563__$1);

return statearr_32628;
})();
var statearr_32629_34265 = state_32597__$1;
(statearr_32629_34265[(2)] = null);

(statearr_32629_34265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32597){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32597);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32636){var ex__30409__auto__ = e32636;
var statearr_32637_34267 = state_32597;
(statearr_32637_34267[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32597[(4)]))){
var statearr_32639_34268 = state_32597;
(statearr_32639_34268[(1)] = cljs.core.first((state_32597[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34269 = state_32597;
state_32597 = G__34269;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32597){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32645 = f__30489__auto__();
(statearr_32645[(6)] = c__30488__auto___34242);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32656 = arguments.length;
switch (G__32656) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34273 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32683){
var state_val_32684 = (state_32683[(1)]);
if((state_val_32684 === (7))){
var inst_32665 = (state_32683[(7)]);
var inst_32665__$1 = (state_32683[(2)]);
var inst_32666 = (inst_32665__$1 == null);
var inst_32667 = cljs.core.not(inst_32666);
var state_32683__$1 = (function (){var statearr_32685 = state_32683;
(statearr_32685[(7)] = inst_32665__$1);

return statearr_32685;
})();
if(inst_32667){
var statearr_32686_34274 = state_32683__$1;
(statearr_32686_34274[(1)] = (8));

} else {
var statearr_32687_34275 = state_32683__$1;
(statearr_32687_34275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (1))){
var inst_32660 = (0);
var state_32683__$1 = (function (){var statearr_32688 = state_32683;
(statearr_32688[(8)] = inst_32660);

return statearr_32688;
})();
var statearr_32689_34276 = state_32683__$1;
(statearr_32689_34276[(2)] = null);

(statearr_32689_34276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (4))){
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32683__$1,(7),ch);
} else {
if((state_val_32684 === (6))){
var inst_32678 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32692_34285 = state_32683__$1;
(statearr_32692_34285[(2)] = inst_32678);

(statearr_32692_34285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (3))){
var inst_32680 = (state_32683[(2)]);
var inst_32681 = cljs.core.async.close_BANG_(out);
var state_32683__$1 = (function (){var statearr_32693 = state_32683;
(statearr_32693[(9)] = inst_32680);

return statearr_32693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32683__$1,inst_32681);
} else {
if((state_val_32684 === (2))){
var inst_32660 = (state_32683[(8)]);
var inst_32662 = (inst_32660 < n);
var state_32683__$1 = state_32683;
if(cljs.core.truth_(inst_32662)){
var statearr_32694_34296 = state_32683__$1;
(statearr_32694_34296[(1)] = (4));

} else {
var statearr_32695_34297 = state_32683__$1;
(statearr_32695_34297[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (11))){
var inst_32660 = (state_32683[(8)]);
var inst_32670 = (state_32683[(2)]);
var inst_32671 = (inst_32660 + (1));
var inst_32660__$1 = inst_32671;
var state_32683__$1 = (function (){var statearr_32696 = state_32683;
(statearr_32696[(10)] = inst_32670);

(statearr_32696[(8)] = inst_32660__$1);

return statearr_32696;
})();
var statearr_32697_34299 = state_32683__$1;
(statearr_32697_34299[(2)] = null);

(statearr_32697_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (9))){
var state_32683__$1 = state_32683;
var statearr_32698_34301 = state_32683__$1;
(statearr_32698_34301[(2)] = null);

(statearr_32698_34301[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (5))){
var state_32683__$1 = state_32683;
var statearr_32701_34303 = state_32683__$1;
(statearr_32701_34303[(2)] = null);

(statearr_32701_34303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (10))){
var inst_32675 = (state_32683[(2)]);
var state_32683__$1 = state_32683;
var statearr_32702_34306 = state_32683__$1;
(statearr_32702_34306[(2)] = inst_32675);

(statearr_32702_34306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32684 === (8))){
var inst_32665 = (state_32683[(7)]);
var state_32683__$1 = state_32683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32683__$1,(11),out,inst_32665);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_32703 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32703[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_32703[(1)] = (1));

return statearr_32703;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32683){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32683);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32704){var ex__30409__auto__ = e32704;
var statearr_32706_34312 = state_32683;
(statearr_32706_34312[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32683[(4)]))){
var statearr_32707_34315 = state_32683;
(statearr_32707_34315[(1)] = cljs.core.first((state_32683[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34317 = state_32683;
state_32683 = G__34317;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32708 = f__30489__auto__();
(statearr_32708[(6)] = c__30488__auto___34273);

return statearr_32708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32710 = (function (f,ch,meta32711){
this.f = f;
this.ch = ch;
this.meta32711 = meta32711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32712,meta32711__$1){
var self__ = this;
var _32712__$1 = this;
return (new cljs.core.async.t_cljs$core$async32710(self__.f,self__.ch,meta32711__$1));
}));

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32712){
var self__ = this;
var _32712__$1 = this;
return self__.meta32711;
}));

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32717 = (function (f,ch,meta32711,_,fn1,meta32718){
this.f = f;
this.ch = ch;
this.meta32711 = meta32711;
this._ = _;
this.fn1 = fn1;
this.meta32718 = meta32718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32719,meta32718__$1){
var self__ = this;
var _32719__$1 = this;
return (new cljs.core.async.t_cljs$core$async32717(self__.f,self__.ch,self__.meta32711,self__._,self__.fn1,meta32718__$1));
}));

(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32719){
var self__ = this;
var _32719__$1 = this;
return self__.meta32718;
}));

(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32717.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__32709_SHARP_){
var G__32720 = (((p1__32709_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32709_SHARP_) : self__.f.call(null,p1__32709_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32720) : f1.call(null,G__32720));
});
}));

(cljs.core.async.t_cljs$core$async32717.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32711","meta32711",1799673455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32710","cljs.core.async/t_cljs$core$async32710",367310642,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32718","meta32718",-53642644,null)], null);
}));

(cljs.core.async.t_cljs$core$async32717.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32717.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32717");

(cljs.core.async.t_cljs$core$async32717.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32717");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32717.
 */
cljs.core.async.__GT_t_cljs$core$async32717 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32717(f__$1,ch__$1,meta32711__$1,___$2,fn1__$1,meta32718){
return (new cljs.core.async.t_cljs$core$async32717(f__$1,ch__$1,meta32711__$1,___$2,fn1__$1,meta32718));
});

}

return (new cljs.core.async.t_cljs$core$async32717(self__.f,self__.ch,self__.meta32711,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32721 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32721) : self__.f.call(null,G__32721));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32710.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async32710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32711","meta32711",1799673455,null)], null);
}));

(cljs.core.async.t_cljs$core$async32710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32710");

(cljs.core.async.t_cljs$core$async32710.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32710.
 */
cljs.core.async.__GT_t_cljs$core$async32710 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32710(f__$1,ch__$1,meta32711){
return (new cljs.core.async.t_cljs$core$async32710(f__$1,ch__$1,meta32711));
});

}

return (new cljs.core.async.t_cljs$core$async32710(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32722 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32722 = (function (f,ch,meta32723){
this.f = f;
this.ch = ch;
this.meta32723 = meta32723;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32724,meta32723__$1){
var self__ = this;
var _32724__$1 = this;
return (new cljs.core.async.t_cljs$core$async32722(self__.f,self__.ch,meta32723__$1));
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32724){
var self__ = this;
var _32724__$1 = this;
return self__.meta32723;
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32722.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async32722.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32723","meta32723",735031565,null)], null);
}));

(cljs.core.async.t_cljs$core$async32722.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32722.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32722");

(cljs.core.async.t_cljs$core$async32722.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32722");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32722.
 */
cljs.core.async.__GT_t_cljs$core$async32722 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32722(f__$1,ch__$1,meta32723){
return (new cljs.core.async.t_cljs$core$async32722(f__$1,ch__$1,meta32723));
});

}

return (new cljs.core.async.t_cljs$core$async32722(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32731 = (function (p,ch,meta32732){
this.p = p;
this.ch = ch;
this.meta32732 = meta32732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32733,meta32732__$1){
var self__ = this;
var _32733__$1 = this;
return (new cljs.core.async.t_cljs$core$async32731(self__.p,self__.ch,meta32732__$1));
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32733){
var self__ = this;
var _32733__$1 = this;
return self__.meta32732;
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32731.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async32731.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32732","meta32732",-946698619,null)], null);
}));

(cljs.core.async.t_cljs$core$async32731.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32731");

(cljs.core.async.t_cljs$core$async32731.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32731");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32731.
 */
cljs.core.async.__GT_t_cljs$core$async32731 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32731(p__$1,ch__$1,meta32732){
return (new cljs.core.async.t_cljs$core$async32731(p__$1,ch__$1,meta32732));
});

}

return (new cljs.core.async.t_cljs$core$async32731(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32747 = arguments.length;
switch (G__32747) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32768){
var state_val_32769 = (state_32768[(1)]);
if((state_val_32769 === (7))){
var inst_32764 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
var statearr_32770_34354 = state_32768__$1;
(statearr_32770_34354[(2)] = inst_32764);

(statearr_32770_34354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (1))){
var state_32768__$1 = state_32768;
var statearr_32771_34355 = state_32768__$1;
(statearr_32771_34355[(2)] = null);

(statearr_32771_34355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (4))){
var inst_32750 = (state_32768[(7)]);
var inst_32750__$1 = (state_32768[(2)]);
var inst_32751 = (inst_32750__$1 == null);
var state_32768__$1 = (function (){var statearr_32776 = state_32768;
(statearr_32776[(7)] = inst_32750__$1);

return statearr_32776;
})();
if(cljs.core.truth_(inst_32751)){
var statearr_32777_34356 = state_32768__$1;
(statearr_32777_34356[(1)] = (5));

} else {
var statearr_32778_34357 = state_32768__$1;
(statearr_32778_34357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (6))){
var inst_32750 = (state_32768[(7)]);
var inst_32755 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32750) : p.call(null,inst_32750));
var state_32768__$1 = state_32768;
if(cljs.core.truth_(inst_32755)){
var statearr_32779_34358 = state_32768__$1;
(statearr_32779_34358[(1)] = (8));

} else {
var statearr_32780_34359 = state_32768__$1;
(statearr_32780_34359[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (3))){
var inst_32766 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32768__$1,inst_32766);
} else {
if((state_val_32769 === (2))){
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32768__$1,(4),ch);
} else {
if((state_val_32769 === (11))){
var inst_32758 = (state_32768[(2)]);
var state_32768__$1 = state_32768;
var statearr_32785_34365 = state_32768__$1;
(statearr_32785_34365[(2)] = inst_32758);

(statearr_32785_34365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (9))){
var state_32768__$1 = state_32768;
var statearr_32786_34370 = state_32768__$1;
(statearr_32786_34370[(2)] = null);

(statearr_32786_34370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (5))){
var inst_32753 = cljs.core.async.close_BANG_(out);
var state_32768__$1 = state_32768;
var statearr_32793_34372 = state_32768__$1;
(statearr_32793_34372[(2)] = inst_32753);

(statearr_32793_34372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (10))){
var inst_32761 = (state_32768[(2)]);
var state_32768__$1 = (function (){var statearr_32794 = state_32768;
(statearr_32794[(8)] = inst_32761);

return statearr_32794;
})();
var statearr_32795_34377 = state_32768__$1;
(statearr_32795_34377[(2)] = null);

(statearr_32795_34377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32769 === (8))){
var inst_32750 = (state_32768[(7)]);
var state_32768__$1 = state_32768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32768__$1,(11),out,inst_32750);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_32796 = [null,null,null,null,null,null,null,null,null];
(statearr_32796[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_32796[(1)] = (1));

return statearr_32796;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32768){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32768);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32797){var ex__30409__auto__ = e32797;
var statearr_32798_34379 = state_32768;
(statearr_32798_34379[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32768[(4)]))){
var statearr_32799_34380 = state_32768;
(statearr_32799_34380[(1)] = cljs.core.first((state_32768[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34381 = state_32768;
state_32768 = G__34381;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32805 = f__30489__auto__();
(statearr_32805[(6)] = c__30488__auto___34350);

return statearr_32805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32807 = arguments.length;
switch (G__32807) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30488__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32884){
var state_val_32885 = (state_32884[(1)]);
if((state_val_32885 === (7))){
var inst_32880 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32886_34395 = state_32884__$1;
(statearr_32886_34395[(2)] = inst_32880);

(statearr_32886_34395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (20))){
var inst_32850 = (state_32884[(7)]);
var inst_32861 = (state_32884[(2)]);
var inst_32862 = cljs.core.next(inst_32850);
var inst_32832 = inst_32862;
var inst_32833 = null;
var inst_32834 = (0);
var inst_32835 = (0);
var state_32884__$1 = (function (){var statearr_32887 = state_32884;
(statearr_32887[(8)] = inst_32835);

(statearr_32887[(9)] = inst_32832);

(statearr_32887[(10)] = inst_32833);

(statearr_32887[(11)] = inst_32861);

(statearr_32887[(12)] = inst_32834);

return statearr_32887;
})();
var statearr_32888_34404 = state_32884__$1;
(statearr_32888_34404[(2)] = null);

(statearr_32888_34404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (1))){
var state_32884__$1 = state_32884;
var statearr_32889_34405 = state_32884__$1;
(statearr_32889_34405[(2)] = null);

(statearr_32889_34405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (4))){
var inst_32817 = (state_32884[(13)]);
var inst_32817__$1 = (state_32884[(2)]);
var inst_32818 = (inst_32817__$1 == null);
var state_32884__$1 = (function (){var statearr_32892 = state_32884;
(statearr_32892[(13)] = inst_32817__$1);

return statearr_32892;
})();
if(cljs.core.truth_(inst_32818)){
var statearr_32893_34413 = state_32884__$1;
(statearr_32893_34413[(1)] = (5));

} else {
var statearr_32894_34414 = state_32884__$1;
(statearr_32894_34414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (15))){
var state_32884__$1 = state_32884;
var statearr_32899_34415 = state_32884__$1;
(statearr_32899_34415[(2)] = null);

(statearr_32899_34415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (21))){
var state_32884__$1 = state_32884;
var statearr_32900_34416 = state_32884__$1;
(statearr_32900_34416[(2)] = null);

(statearr_32900_34416[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (13))){
var inst_32835 = (state_32884[(8)]);
var inst_32832 = (state_32884[(9)]);
var inst_32833 = (state_32884[(10)]);
var inst_32834 = (state_32884[(12)]);
var inst_32842 = (state_32884[(2)]);
var inst_32844 = (inst_32835 + (1));
var tmp32896 = inst_32832;
var tmp32897 = inst_32833;
var tmp32898 = inst_32834;
var inst_32832__$1 = tmp32896;
var inst_32833__$1 = tmp32897;
var inst_32834__$1 = tmp32898;
var inst_32835__$1 = inst_32844;
var state_32884__$1 = (function (){var statearr_32901 = state_32884;
(statearr_32901[(8)] = inst_32835__$1);

(statearr_32901[(9)] = inst_32832__$1);

(statearr_32901[(10)] = inst_32833__$1);

(statearr_32901[(14)] = inst_32842);

(statearr_32901[(12)] = inst_32834__$1);

return statearr_32901;
})();
var statearr_32902_34418 = state_32884__$1;
(statearr_32902_34418[(2)] = null);

(statearr_32902_34418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (22))){
var state_32884__$1 = state_32884;
var statearr_32903_34419 = state_32884__$1;
(statearr_32903_34419[(2)] = null);

(statearr_32903_34419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (6))){
var inst_32817 = (state_32884[(13)]);
var inst_32827 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32817) : f.call(null,inst_32817));
var inst_32828 = cljs.core.seq(inst_32827);
var inst_32832 = inst_32828;
var inst_32833 = null;
var inst_32834 = (0);
var inst_32835 = (0);
var state_32884__$1 = (function (){var statearr_32904 = state_32884;
(statearr_32904[(8)] = inst_32835);

(statearr_32904[(9)] = inst_32832);

(statearr_32904[(10)] = inst_32833);

(statearr_32904[(12)] = inst_32834);

return statearr_32904;
})();
var statearr_32905_34420 = state_32884__$1;
(statearr_32905_34420[(2)] = null);

(statearr_32905_34420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (17))){
var inst_32850 = (state_32884[(7)]);
var inst_32854 = cljs.core.chunk_first(inst_32850);
var inst_32855 = cljs.core.chunk_rest(inst_32850);
var inst_32856 = cljs.core.count(inst_32854);
var inst_32832 = inst_32855;
var inst_32833 = inst_32854;
var inst_32834 = inst_32856;
var inst_32835 = (0);
var state_32884__$1 = (function (){var statearr_32906 = state_32884;
(statearr_32906[(8)] = inst_32835);

(statearr_32906[(9)] = inst_32832);

(statearr_32906[(10)] = inst_32833);

(statearr_32906[(12)] = inst_32834);

return statearr_32906;
})();
var statearr_32907_34423 = state_32884__$1;
(statearr_32907_34423[(2)] = null);

(statearr_32907_34423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (3))){
var inst_32882 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32884__$1,inst_32882);
} else {
if((state_val_32885 === (12))){
var inst_32870 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32908_34424 = state_32884__$1;
(statearr_32908_34424[(2)] = inst_32870);

(statearr_32908_34424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (2))){
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32884__$1,(4),in$);
} else {
if((state_val_32885 === (23))){
var inst_32878 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32909_34425 = state_32884__$1;
(statearr_32909_34425[(2)] = inst_32878);

(statearr_32909_34425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (19))){
var inst_32865 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32910_34426 = state_32884__$1;
(statearr_32910_34426[(2)] = inst_32865);

(statearr_32910_34426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (11))){
var inst_32850 = (state_32884[(7)]);
var inst_32832 = (state_32884[(9)]);
var inst_32850__$1 = cljs.core.seq(inst_32832);
var state_32884__$1 = (function (){var statearr_32912 = state_32884;
(statearr_32912[(7)] = inst_32850__$1);

return statearr_32912;
})();
if(inst_32850__$1){
var statearr_32913_34428 = state_32884__$1;
(statearr_32913_34428[(1)] = (14));

} else {
var statearr_32914_34429 = state_32884__$1;
(statearr_32914_34429[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (9))){
var inst_32872 = (state_32884[(2)]);
var inst_32873 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32884__$1 = (function (){var statearr_32915 = state_32884;
(statearr_32915[(15)] = inst_32872);

return statearr_32915;
})();
if(cljs.core.truth_(inst_32873)){
var statearr_32916_34430 = state_32884__$1;
(statearr_32916_34430[(1)] = (21));

} else {
var statearr_32917_34431 = state_32884__$1;
(statearr_32917_34431[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (5))){
var inst_32820 = cljs.core.async.close_BANG_(out);
var state_32884__$1 = state_32884;
var statearr_32918_34432 = state_32884__$1;
(statearr_32918_34432[(2)] = inst_32820);

(statearr_32918_34432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (14))){
var inst_32850 = (state_32884[(7)]);
var inst_32852 = cljs.core.chunked_seq_QMARK_(inst_32850);
var state_32884__$1 = state_32884;
if(inst_32852){
var statearr_32919_34433 = state_32884__$1;
(statearr_32919_34433[(1)] = (17));

} else {
var statearr_32920_34434 = state_32884__$1;
(statearr_32920_34434[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (16))){
var inst_32868 = (state_32884[(2)]);
var state_32884__$1 = state_32884;
var statearr_32921_34435 = state_32884__$1;
(statearr_32921_34435[(2)] = inst_32868);

(statearr_32921_34435[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32885 === (10))){
var inst_32835 = (state_32884[(8)]);
var inst_32833 = (state_32884[(10)]);
var inst_32840 = cljs.core._nth(inst_32833,inst_32835);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32884__$1,(13),out,inst_32840);
} else {
if((state_val_32885 === (18))){
var inst_32850 = (state_32884[(7)]);
var inst_32859 = cljs.core.first(inst_32850);
var state_32884__$1 = state_32884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32884__$1,(20),out,inst_32859);
} else {
if((state_val_32885 === (8))){
var inst_32835 = (state_32884[(8)]);
var inst_32834 = (state_32884[(12)]);
var inst_32837 = (inst_32835 < inst_32834);
var inst_32838 = inst_32837;
var state_32884__$1 = state_32884;
if(cljs.core.truth_(inst_32838)){
var statearr_32922_34436 = state_32884__$1;
(statearr_32922_34436[(1)] = (10));

} else {
var statearr_32923_34437 = state_32884__$1;
(statearr_32923_34437[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____0 = (function (){
var statearr_32925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32925[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__);

(statearr_32925[(1)] = (1));

return statearr_32925;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____1 = (function (state_32884){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32884);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e32926){var ex__30409__auto__ = e32926;
var statearr_32927_34523 = state_32884;
(statearr_32927_34523[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32884[(4)]))){
var statearr_32928_34524 = state_32884;
(statearr_32928_34524[(1)] = cljs.core.first((state_32884[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34525 = state_32884;
state_32884 = G__34525;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__ = function(state_32884){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____1.call(this,state_32884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30406__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_32929 = f__30489__auto__();
(statearr_32929[(6)] = c__30488__auto__);

return statearr_32929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));

return c__30488__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32931 = arguments.length;
switch (G__32931) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32940 = arguments.length;
switch (G__32940) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32950 = arguments.length;
switch (G__32950) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_32994){
var state_val_32995 = (state_32994[(1)]);
if((state_val_32995 === (7))){
var inst_32989 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_32996_34546 = state_32994__$1;
(statearr_32996_34546[(2)] = inst_32989);

(statearr_32996_34546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (1))){
var inst_32971 = null;
var state_32994__$1 = (function (){var statearr_33003 = state_32994;
(statearr_33003[(7)] = inst_32971);

return statearr_33003;
})();
var statearr_33004_34548 = state_32994__$1;
(statearr_33004_34548[(2)] = null);

(statearr_33004_34548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (4))){
var inst_32974 = (state_32994[(8)]);
var inst_32974__$1 = (state_32994[(2)]);
var inst_32975 = (inst_32974__$1 == null);
var inst_32976 = cljs.core.not(inst_32975);
var state_32994__$1 = (function (){var statearr_33005 = state_32994;
(statearr_33005[(8)] = inst_32974__$1);

return statearr_33005;
})();
if(inst_32976){
var statearr_33006_34550 = state_32994__$1;
(statearr_33006_34550[(1)] = (5));

} else {
var statearr_33007_34551 = state_32994__$1;
(statearr_33007_34551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (6))){
var state_32994__$1 = state_32994;
var statearr_33008_34552 = state_32994__$1;
(statearr_33008_34552[(2)] = null);

(statearr_33008_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (3))){
var inst_32991 = (state_32994[(2)]);
var inst_32992 = cljs.core.async.close_BANG_(out);
var state_32994__$1 = (function (){var statearr_33011 = state_32994;
(statearr_33011[(9)] = inst_32991);

return statearr_33011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32994__$1,inst_32992);
} else {
if((state_val_32995 === (2))){
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32994__$1,(4),ch);
} else {
if((state_val_32995 === (11))){
var inst_32974 = (state_32994[(8)]);
var inst_32983 = (state_32994[(2)]);
var inst_32971 = inst_32974;
var state_32994__$1 = (function (){var statearr_33013 = state_32994;
(statearr_33013[(7)] = inst_32971);

(statearr_33013[(10)] = inst_32983);

return statearr_33013;
})();
var statearr_33014_34555 = state_32994__$1;
(statearr_33014_34555[(2)] = null);

(statearr_33014_34555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (9))){
var inst_32974 = (state_32994[(8)]);
var state_32994__$1 = state_32994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32994__$1,(11),out,inst_32974);
} else {
if((state_val_32995 === (5))){
var inst_32971 = (state_32994[(7)]);
var inst_32974 = (state_32994[(8)]);
var inst_32978 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32974,inst_32971);
var state_32994__$1 = state_32994;
if(inst_32978){
var statearr_33018_34557 = state_32994__$1;
(statearr_33018_34557[(1)] = (8));

} else {
var statearr_33019_34558 = state_32994__$1;
(statearr_33019_34558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (10))){
var inst_32986 = (state_32994[(2)]);
var state_32994__$1 = state_32994;
var statearr_33020_34560 = state_32994__$1;
(statearr_33020_34560[(2)] = inst_32986);

(statearr_33020_34560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32995 === (8))){
var inst_32971 = (state_32994[(7)]);
var tmp33016 = inst_32971;
var inst_32971__$1 = tmp33016;
var state_32994__$1 = (function (){var statearr_33021 = state_32994;
(statearr_33021[(7)] = inst_32971__$1);

return statearr_33021;
})();
var statearr_33022_34561 = state_32994__$1;
(statearr_33022_34561[(2)] = null);

(statearr_33022_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_33023 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33023[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_33023[(1)] = (1));

return statearr_33023;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_32994){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_32994);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e33024){var ex__30409__auto__ = e33024;
var statearr_33025_34570 = state_32994;
(statearr_33025_34570[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_32994[(4)]))){
var statearr_33026_34573 = state_32994;
(statearr_33026_34573[(1)] = cljs.core.first((state_32994[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34579 = state_32994;
state_32994 = G__34579;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_32994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_32994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_33027 = f__30489__auto__();
(statearr_33027[(6)] = c__30488__auto___34545);

return statearr_33027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33029 = arguments.length;
switch (G__33029) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_33070){
var state_val_33071 = (state_33070[(1)]);
if((state_val_33071 === (7))){
var inst_33066 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33072_34627 = state_33070__$1;
(statearr_33072_34627[(2)] = inst_33066);

(statearr_33072_34627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (1))){
var inst_33031 = (new Array(n));
var inst_33032 = inst_33031;
var inst_33033 = (0);
var state_33070__$1 = (function (){var statearr_33073 = state_33070;
(statearr_33073[(7)] = inst_33032);

(statearr_33073[(8)] = inst_33033);

return statearr_33073;
})();
var statearr_33074_34628 = state_33070__$1;
(statearr_33074_34628[(2)] = null);

(statearr_33074_34628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (4))){
var inst_33037 = (state_33070[(9)]);
var inst_33037__$1 = (state_33070[(2)]);
var inst_33039 = (inst_33037__$1 == null);
var inst_33040 = cljs.core.not(inst_33039);
var state_33070__$1 = (function (){var statearr_33078 = state_33070;
(statearr_33078[(9)] = inst_33037__$1);

return statearr_33078;
})();
if(inst_33040){
var statearr_33079_34629 = state_33070__$1;
(statearr_33079_34629[(1)] = (5));

} else {
var statearr_33080_34630 = state_33070__$1;
(statearr_33080_34630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (15))){
var inst_33060 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33081_34631 = state_33070__$1;
(statearr_33081_34631[(2)] = inst_33060);

(statearr_33081_34631[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (13))){
var state_33070__$1 = state_33070;
var statearr_33082_34632 = state_33070__$1;
(statearr_33082_34632[(2)] = null);

(statearr_33082_34632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (6))){
var inst_33033 = (state_33070[(8)]);
var inst_33056 = (inst_33033 > (0));
var state_33070__$1 = state_33070;
if(cljs.core.truth_(inst_33056)){
var statearr_33087_34638 = state_33070__$1;
(statearr_33087_34638[(1)] = (12));

} else {
var statearr_33090_34639 = state_33070__$1;
(statearr_33090_34639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (3))){
var inst_33068 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33070__$1,inst_33068);
} else {
if((state_val_33071 === (12))){
var inst_33032 = (state_33070[(7)]);
var inst_33058 = cljs.core.vec(inst_33032);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33070__$1,(15),out,inst_33058);
} else {
if((state_val_33071 === (2))){
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33070__$1,(4),ch);
} else {
if((state_val_33071 === (11))){
var inst_33050 = (state_33070[(2)]);
var inst_33051 = (new Array(n));
var inst_33032 = inst_33051;
var inst_33033 = (0);
var state_33070__$1 = (function (){var statearr_33099 = state_33070;
(statearr_33099[(7)] = inst_33032);

(statearr_33099[(10)] = inst_33050);

(statearr_33099[(8)] = inst_33033);

return statearr_33099;
})();
var statearr_33100_34641 = state_33070__$1;
(statearr_33100_34641[(2)] = null);

(statearr_33100_34641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (9))){
var inst_33032 = (state_33070[(7)]);
var inst_33048 = cljs.core.vec(inst_33032);
var state_33070__$1 = state_33070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33070__$1,(11),out,inst_33048);
} else {
if((state_val_33071 === (5))){
var inst_33032 = (state_33070[(7)]);
var inst_33033 = (state_33070[(8)]);
var inst_33043 = (state_33070[(11)]);
var inst_33037 = (state_33070[(9)]);
var inst_33042 = (inst_33032[inst_33033] = inst_33037);
var inst_33043__$1 = (inst_33033 + (1));
var inst_33044 = (inst_33043__$1 < n);
var state_33070__$1 = (function (){var statearr_33104 = state_33070;
(statearr_33104[(12)] = inst_33042);

(statearr_33104[(11)] = inst_33043__$1);

return statearr_33104;
})();
if(cljs.core.truth_(inst_33044)){
var statearr_33105_34651 = state_33070__$1;
(statearr_33105_34651[(1)] = (8));

} else {
var statearr_33106_34652 = state_33070__$1;
(statearr_33106_34652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (14))){
var inst_33063 = (state_33070[(2)]);
var inst_33064 = cljs.core.async.close_BANG_(out);
var state_33070__$1 = (function (){var statearr_33108 = state_33070;
(statearr_33108[(13)] = inst_33063);

return statearr_33108;
})();
var statearr_33109_34657 = state_33070__$1;
(statearr_33109_34657[(2)] = inst_33064);

(statearr_33109_34657[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (10))){
var inst_33054 = (state_33070[(2)]);
var state_33070__$1 = state_33070;
var statearr_33110_34660 = state_33070__$1;
(statearr_33110_34660[(2)] = inst_33054);

(statearr_33110_34660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33071 === (8))){
var inst_33032 = (state_33070[(7)]);
var inst_33043 = (state_33070[(11)]);
var tmp33107 = inst_33032;
var inst_33032__$1 = tmp33107;
var inst_33033 = inst_33043;
var state_33070__$1 = (function (){var statearr_33113 = state_33070;
(statearr_33113[(7)] = inst_33032__$1);

(statearr_33113[(8)] = inst_33033);

return statearr_33113;
})();
var statearr_33114_34661 = state_33070__$1;
(statearr_33114_34661[(2)] = null);

(statearr_33114_34661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_33115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33115[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_33115[(1)] = (1));

return statearr_33115;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_33070){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_33070);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e33116){var ex__30409__auto__ = e33116;
var statearr_33117_34666 = state_33070;
(statearr_33117_34666[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_33070[(4)]))){
var statearr_33121_34667 = state_33070;
(statearr_33121_34667[(1)] = cljs.core.first((state_33070[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34668 = state_33070;
state_33070 = G__34668;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_33070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_33070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_33122 = f__30489__auto__();
(statearr_33122[(6)] = c__30488__auto___34625);

return statearr_33122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33124 = arguments.length;
switch (G__33124) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30488__auto___34682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30489__auto__ = (function (){var switch__30405__auto__ = (function (state_33173){
var state_val_33174 = (state_33173[(1)]);
if((state_val_33174 === (7))){
var inst_33169 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33181_34684 = state_33173__$1;
(statearr_33181_34684[(2)] = inst_33169);

(statearr_33181_34684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (1))){
var inst_33128 = [];
var inst_33129 = inst_33128;
var inst_33130 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33173__$1 = (function (){var statearr_33184 = state_33173;
(statearr_33184[(7)] = inst_33130);

(statearr_33184[(8)] = inst_33129);

return statearr_33184;
})();
var statearr_33185_34686 = state_33173__$1;
(statearr_33185_34686[(2)] = null);

(statearr_33185_34686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (4))){
var inst_33133 = (state_33173[(9)]);
var inst_33133__$1 = (state_33173[(2)]);
var inst_33134 = (inst_33133__$1 == null);
var inst_33135 = cljs.core.not(inst_33134);
var state_33173__$1 = (function (){var statearr_33187 = state_33173;
(statearr_33187[(9)] = inst_33133__$1);

return statearr_33187;
})();
if(inst_33135){
var statearr_33189_34687 = state_33173__$1;
(statearr_33189_34687[(1)] = (5));

} else {
var statearr_33190_34688 = state_33173__$1;
(statearr_33190_34688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (15))){
var inst_33163 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33191_34691 = state_33173__$1;
(statearr_33191_34691[(2)] = inst_33163);

(statearr_33191_34691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (13))){
var state_33173__$1 = state_33173;
var statearr_33192_34693 = state_33173__$1;
(statearr_33192_34693[(2)] = null);

(statearr_33192_34693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (6))){
var inst_33129 = (state_33173[(8)]);
var inst_33158 = inst_33129.length;
var inst_33159 = (inst_33158 > (0));
var state_33173__$1 = state_33173;
if(cljs.core.truth_(inst_33159)){
var statearr_33193_34694 = state_33173__$1;
(statearr_33193_34694[(1)] = (12));

} else {
var statearr_33196_34695 = state_33173__$1;
(statearr_33196_34695[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (3))){
var inst_33171 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33173__$1,inst_33171);
} else {
if((state_val_33174 === (12))){
var inst_33129 = (state_33173[(8)]);
var inst_33161 = cljs.core.vec(inst_33129);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(15),out,inst_33161);
} else {
if((state_val_33174 === (2))){
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33173__$1,(4),ch);
} else {
if((state_val_33174 === (11))){
var inst_33137 = (state_33173[(10)]);
var inst_33133 = (state_33173[(9)]);
var inst_33151 = (state_33173[(2)]);
var inst_33152 = [];
var inst_33153 = inst_33152.push(inst_33133);
var inst_33129 = inst_33152;
var inst_33130 = inst_33137;
var state_33173__$1 = (function (){var statearr_33197 = state_33173;
(statearr_33197[(11)] = inst_33153);

(statearr_33197[(12)] = inst_33151);

(statearr_33197[(7)] = inst_33130);

(statearr_33197[(8)] = inst_33129);

return statearr_33197;
})();
var statearr_33198_34706 = state_33173__$1;
(statearr_33198_34706[(2)] = null);

(statearr_33198_34706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (9))){
var inst_33129 = (state_33173[(8)]);
var inst_33149 = cljs.core.vec(inst_33129);
var state_33173__$1 = state_33173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33173__$1,(11),out,inst_33149);
} else {
if((state_val_33174 === (5))){
var inst_33137 = (state_33173[(10)]);
var inst_33133 = (state_33173[(9)]);
var inst_33130 = (state_33173[(7)]);
var inst_33137__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33133) : f.call(null,inst_33133));
var inst_33142 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33137__$1,inst_33130);
var inst_33143 = cljs.core.keyword_identical_QMARK_(inst_33130,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33144 = ((inst_33142) || (inst_33143));
var state_33173__$1 = (function (){var statearr_33199 = state_33173;
(statearr_33199[(10)] = inst_33137__$1);

return statearr_33199;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33200_34721 = state_33173__$1;
(statearr_33200_34721[(1)] = (8));

} else {
var statearr_33201_34722 = state_33173__$1;
(statearr_33201_34722[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (14))){
var inst_33166 = (state_33173[(2)]);
var inst_33167 = cljs.core.async.close_BANG_(out);
var state_33173__$1 = (function (){var statearr_33203 = state_33173;
(statearr_33203[(13)] = inst_33166);

return statearr_33203;
})();
var statearr_33204_34734 = state_33173__$1;
(statearr_33204_34734[(2)] = inst_33167);

(statearr_33204_34734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (10))){
var inst_33156 = (state_33173[(2)]);
var state_33173__$1 = state_33173;
var statearr_33205_34740 = state_33173__$1;
(statearr_33205_34740[(2)] = inst_33156);

(statearr_33205_34740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33174 === (8))){
var inst_33137 = (state_33173[(10)]);
var inst_33133 = (state_33173[(9)]);
var inst_33129 = (state_33173[(8)]);
var inst_33146 = inst_33129.push(inst_33133);
var tmp33202 = inst_33129;
var inst_33129__$1 = tmp33202;
var inst_33130 = inst_33137;
var state_33173__$1 = (function (){var statearr_33206 = state_33173;
(statearr_33206[(14)] = inst_33146);

(statearr_33206[(7)] = inst_33130);

(statearr_33206[(8)] = inst_33129__$1);

return statearr_33206;
})();
var statearr_33208_34753 = state_33173__$1;
(statearr_33208_34753[(2)] = null);

(statearr_33208_34753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30406__auto__ = null;
var cljs$core$async$state_machine__30406__auto____0 = (function (){
var statearr_33209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33209[(0)] = cljs$core$async$state_machine__30406__auto__);

(statearr_33209[(1)] = (1));

return statearr_33209;
});
var cljs$core$async$state_machine__30406__auto____1 = (function (state_33173){
while(true){
var ret_value__30407__auto__ = (function (){try{while(true){
var result__30408__auto__ = switch__30405__auto__(state_33173);
if(cljs.core.keyword_identical_QMARK_(result__30408__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30408__auto__;
}
break;
}
}catch (e33210){var ex__30409__auto__ = e33210;
var statearr_33211_34755 = state_33173;
(statearr_33211_34755[(2)] = ex__30409__auto__);


if(cljs.core.seq((state_33173[(4)]))){
var statearr_33212_34756 = state_33173;
(statearr_33212_34756[(1)] = cljs.core.first((state_33173[(4)])));

} else {
throw ex__30409__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34757 = state_33173;
state_33173 = G__34757;
continue;
} else {
return ret_value__30407__auto__;
}
break;
}
});
cljs$core$async$state_machine__30406__auto__ = function(state_33173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30406__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30406__auto____1.call(this,state_33173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30406__auto____0;
cljs$core$async$state_machine__30406__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30406__auto____1;
return cljs$core$async$state_machine__30406__auto__;
})()
})();
var state__30490__auto__ = (function (){var statearr_33213 = f__30489__auto__();
(statearr_33213[(6)] = c__30488__auto___34682);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30490__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
