var Ji = {};
/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const X = Ji.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ht = Ji.NODE_ENV !== "production" ? Object.freeze([]) : [], ce = () => {
}, qi = () => !1, Nn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Kn = (e) => e.startsWith("onUpdate:"), ie = Object.assign, Qr = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Il = Object.prototype.hasOwnProperty, U = (e, t) => Il.call(e, t), A = Array.isArray, Dt = (e) => ar(e) === "[object Map]", Xi = (e) => ar(e) === "[object Set]", k = (e) => typeof e == "function", re = (e) => typeof e == "string", _t = (e) => typeof e == "symbol", K = (e) => e !== null && typeof e == "object", eo = (e) => (K(e) || k(e)) && k(e.then) && k(e.catch), Qi = Object.prototype.toString, ar = (e) => Qi.call(e), to = (e) => ar(e).slice(8, -1), es = (e) => ar(e) === "[object Object]", no = (e) => re(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, on = /* @__PURE__ */ nt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pl = /* @__PURE__ */ nt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ur = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kl = /-\w/g, ge = ur(
  (e) => e.replace(kl, (t) => t.slice(1).toUpperCase())
), Rl = /\B([A-Z])/g, mt = ur(
  (e) => e.replace(Rl, "-$1").toLowerCase()
), $t = ur((e) => e.charAt(0).toUpperCase() + e.slice(1)), Et = ur(
  (e) => e ? `on${$t(e)}` : ""
), pt = (e, t) => !Object.is(e, t), Xt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Yn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ll = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fo;
const Dn = () => Fo || (Fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ro(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = re(r) ? Bl(r) : ro(r);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (re(e) || K(e))
    return e;
}
const Hl = /;(?![^(]*\))/g, jl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function Bl(e) {
  const t = {};
  return e.replace(Wl, "").split(Hl).forEach((n) => {
    if (n) {
      const r = n.split(jl);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function fr(e) {
  let t = "";
  if (re(e))
    t = e;
  else if (A(e))
    for (let n = 0; n < e.length; n++) {
      const r = fr(e[n]);
      r && (t += r + " ");
    }
  else if (K(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ul = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Yl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Gl = /* @__PURE__ */ nt(Ul), zl = /* @__PURE__ */ nt(Kl), Zl = /* @__PURE__ */ nt(Yl), Jl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ql = /* @__PURE__ */ nt(Jl);
function ts(e) {
  return !!e || e === "";
}
const ns = (e) => !!(e && e.__v_isRef === !0), lt = (e) => re(e) ? e : e == null ? "" : A(e) || K(e) && (e.toString === Qi || !k(e.toString)) ? ns(e) ? lt(e.value) : JSON.stringify(e, rs, 2) : String(e), rs = (e, t) => ns(t) ? rs(e, t.value) : Dt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], i) => (n[wr(r, i) + " =>"] = o, n),
    {}
  )
} : Xi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => wr(n))
} : _t(t) ? wr(t) : K(t) && !A(t) && !es(t) ? String(t) : t, wr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    _t(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var Z = {};
function we(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let de;
class os {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    } else Z.NODE_ENV !== "production" && we("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = de, de = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (de = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Rr(e) {
  return new os(e);
}
function is() {
  return de;
}
function oo(e, t = !1) {
  de ? de.cleanups.push(e) : Z.NODE_ENV !== "production" && !t && we(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let G;
const xr = /* @__PURE__ */ new WeakSet();
class ss {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && de.active && de.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, xr.has(this) && (xr.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || cs(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Io(this), as(this);
    const t = G, n = $e;
    G = this, $e = !0;
    try {
      return this.fn();
    } finally {
      Z.NODE_ENV !== "production" && G !== this && we(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), us(this), G = t, $e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        lo(t);
      this.deps = this.depsTail = void 0, Io(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? xr.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Lr(this) && this.run();
  }
  get dirty() {
    return Lr(this);
  }
}
let ls = 0, sn, ln;
function cs(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ln, ln = e;
    return;
  }
  e.next = sn, sn = e;
}
function io() {
  ls++;
}
function so() {
  if (--ls > 0)
    return;
  if (ln) {
    let t = ln;
    for (ln = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; sn; ) {
    let t = sn;
    for (sn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function as(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function us(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), lo(r), Xl(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Lr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fs(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fs(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === dn) || (e.globalVersion = dn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Lr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = G, r = $e;
  G = e, $e = !0;
  try {
    as(e);
    const o = e.fn(e._value);
    (t.version === 0 || pt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    G = n, $e = r, us(e), e.flags &= -3;
  }
}
function lo(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), Z.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      lo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $e = !0;
const ds = [];
function Ae() {
  ds.push($e), $e = !1;
}
function Fe() {
  const e = ds.pop();
  $e = e === void 0 ? !0 : e;
}
function Io(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = G;
    G = void 0;
    try {
      t();
    } finally {
      G = n;
    }
  }
}
let dn = 0;
class Ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class co {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Z.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!G || !$e || G === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== G)
      n = this.activeLink = new Ql(G, this), G.deps ? (n.prevDep = G.depsTail, G.depsTail.nextDep = n, G.depsTail = n) : G.deps = G.depsTail = n, ps(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = G.depsTail, n.nextDep = void 0, G.depsTail.nextDep = n, G.depsTail = n, G.deps === n && (G.deps = r);
    }
    return Z.NODE_ENV !== "production" && G.onTrack && G.onTrack(
      ie(
        {
          effect: G
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, dn++, this.notify(t);
  }
  notify(t) {
    io();
    try {
      if (Z.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ie(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      so();
    }
  }
}
function ps(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        ps(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Z.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Gn = /* @__PURE__ */ new WeakMap(), Ot = Symbol(
  Z.NODE_ENV !== "production" ? "Object iterate" : ""
), Hr = Symbol(
  Z.NODE_ENV !== "production" ? "Map keys iterate" : ""
), pn = Symbol(
  Z.NODE_ENV !== "production" ? "Array iterate" : ""
);
function le(e, t, n) {
  if ($e && G) {
    let r = Gn.get(e);
    r || Gn.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new co()), o.map = r, o.key = n), Z.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function je(e, t, n, r, o, i) {
  const s = Gn.get(e);
  if (!s) {
    dn++;
    return;
  }
  const l = (c) => {
    c && (Z.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: o,
      oldTarget: i
    }) : c.trigger());
  };
  if (io(), t === "clear")
    s.forEach(l);
  else {
    const c = A(e), p = c && no(n);
    if (c && n === "length") {
      const f = Number(r);
      s.forEach((u, m) => {
        (m === "length" || m === pn || !_t(m) && m >= f) && l(u);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), p && l(s.get(pn)), t) {
        case "add":
          c ? p && l(s.get("length")) : (l(s.get(Ot)), Dt(e) && l(s.get(Hr)));
          break;
        case "delete":
          c || (l(s.get(Ot)), Dt(e) && l(s.get(Hr)));
          break;
        case "set":
          Dt(e) && l(s.get(Ot));
          break;
      }
  }
  so();
}
function ec(e, t) {
  const n = Gn.get(e);
  return n && n.get(t);
}
function Ft(e) {
  const t = L(e);
  return t === e ? t : (le(t, "iterate", pn), _e(e) ? t : t.map(fe));
}
function dr(e) {
  return le(e = L(e), "iterate", pn), e;
}
const tc = {
  __proto__: null,
  [Symbol.iterator]() {
    return Sr(this, Symbol.iterator, fe);
  },
  concat(...e) {
    return Ft(this).concat(
      ...e.map((t) => A(t) ? Ft(t) : t)
    );
  },
  entries() {
    return Sr(this, "entries", (e) => (e[1] = fe(e[1]), e));
  },
  every(e, t) {
    return Ze(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ze(this, "filter", e, t, (n) => n.map(fe), arguments);
  },
  find(e, t) {
    return Ze(this, "find", e, t, fe, arguments);
  },
  findIndex(e, t) {
    return Ze(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ze(this, "findLast", e, t, fe, arguments);
  },
  findLastIndex(e, t) {
    return Ze(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ze(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Vr(this, "includes", e);
  },
  indexOf(...e) {
    return Vr(this, "indexOf", e);
  },
  join(e) {
    return Ft(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Vr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ze(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Qt(this, "pop");
  },
  push(...e) {
    return Qt(this, "push", e);
  },
  reduce(e, ...t) {
    return Po(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Po(this, "reduceRight", e, t);
  },
  shift() {
    return Qt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ze(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Qt(this, "splice", e);
  },
  toReversed() {
    return Ft(this).toReversed();
  },
  toSorted(e) {
    return Ft(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ft(this).toSpliced(...e);
  },
  unshift(...e) {
    return Qt(this, "unshift", e);
  },
  values() {
    return Sr(this, "values", fe);
  }
};
function Sr(e, t, n) {
  const r = dr(e), o = r[t]();
  return r !== e && !_e(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const nc = Array.prototype;
function Ze(e, t, n, r, o, i) {
  const s = dr(e), l = s !== e && !_e(e), c = s[t];
  if (c !== nc[t]) {
    const u = c.apply(e, i);
    return l ? fe(u) : u;
  }
  let p = n;
  s !== e && (l ? p = function(u, m) {
    return n.call(this, fe(u), m, e);
  } : n.length > 2 && (p = function(u, m) {
    return n.call(this, u, m, e);
  }));
  const f = c.call(s, p, r);
  return l && o ? o(f) : f;
}
function Po(e, t, n, r) {
  const o = dr(e);
  let i = n;
  return o !== e && (_e(e) ? n.length > 3 && (i = function(s, l, c) {
    return n.call(this, s, l, c, e);
  }) : i = function(s, l, c) {
    return n.call(this, s, fe(l), c, e);
  }), o[t](i, ...r);
}
function Vr(e, t, n) {
  const r = L(e);
  le(r, "iterate", pn);
  const o = r[t](...n);
  return (o === -1 || o === !1) && hn(n[0]) ? (n[0] = L(n[0]), r[t](...n)) : o;
}
function Qt(e, t, n = []) {
  Ae(), io();
  const r = L(e)[t].apply(e, n);
  return so(), Fe(), r;
}
const rc = /* @__PURE__ */ nt("__proto__,__v_isRef,__isVue"), hs = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_t)
);
function oc(e) {
  _t(e) || (e = String(e));
  const t = L(this);
  return le(t, "has", e), t.hasOwnProperty(e);
}
class ms {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (o ? i ? Es : bs : i ? vs : ys).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = A(t);
    if (!o) {
      let c;
      if (s && (c = tc[n]))
        return c;
      if (n === "hasOwnProperty")
        return oc;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      oe(t) ? t : r
    );
    if ((_t(n) ? hs.has(n) : rc(n)) || (o || le(t, "get", n), i))
      return l;
    if (oe(l)) {
      const c = s && no(n) ? l : l.value;
      return o && K(c) ? Wr(c) : c;
    }
    return K(l) ? o ? Wr(l) : Kt(l) : l;
  }
}
class gs extends ms {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let i = t[n];
    if (!this._isShallow) {
      const c = Ye(i);
      if (!_e(r) && !Ye(r) && (i = L(i), r = L(r)), !A(t) && oe(i) && !oe(r))
        return c ? (Z.NODE_ENV !== "production" && we(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (i.value = r, !0);
    }
    const s = A(t) && no(n) ? Number(n) < t.length : U(t, n), l = Reflect.set(
      t,
      n,
      r,
      oe(t) ? t : o
    );
    return t === L(o) && (s ? pt(r, i) && je(t, "set", n, r, i) : je(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = U(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && r && je(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!_t(n) || !hs.has(n)) && le(t, "has", n), r;
  }
  ownKeys(t) {
    return le(
      t,
      "iterate",
      A(t) ? "length" : Ot
    ), Reflect.ownKeys(t);
  }
}
class _s extends ms {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Z.NODE_ENV !== "production" && we(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Z.NODE_ENV !== "production" && we(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ic = /* @__PURE__ */ new gs(), sc = /* @__PURE__ */ new _s(), lc = /* @__PURE__ */ new gs(!0), cc = /* @__PURE__ */ new _s(!0), jr = (e) => e, Mn = (e) => Reflect.getPrototypeOf(e);
function ac(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, i = L(o), s = Dt(i), l = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, p = o[e](...r), f = n ? jr : t ? zn : fe;
    return !t && le(
      i,
      "iterate",
      c ? Hr : Ot
    ), {
      // iterator protocol
      next() {
        const { value: u, done: m } = p.next();
        return m ? { value: u, done: m } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function An(e) {
  return function(...t) {
    if (Z.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      we(
        `${$t(e)} operation ${n}failed: target is readonly.`,
        L(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function uc(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, s = L(i), l = L(o);
      e || (pt(o, l) && le(s, "get", o), le(s, "get", l));
      const { has: c } = Mn(s), p = t ? jr : e ? zn : fe;
      if (c.call(s, o))
        return p(i.get(o));
      if (c.call(s, l))
        return p(i.get(l));
      i !== s && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && le(L(o), "iterate", Ot), o.size;
    },
    has(o) {
      const i = this.__v_raw, s = L(i), l = L(o);
      return e || (pt(o, l) && le(s, "has", o), le(s, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const s = this, l = s.__v_raw, c = L(l), p = t ? jr : e ? zn : fe;
      return !e && le(c, "iterate", Ot), l.forEach((f, u) => o.call(i, p(f), p(u), s));
    }
  };
  return ie(
    n,
    e ? {
      add: An("add"),
      set: An("set"),
      delete: An("delete"),
      clear: An("clear")
    } : {
      add(o) {
        !t && !_e(o) && !Ye(o) && (o = L(o));
        const i = L(this);
        return Mn(i).has.call(i, o) || (i.add(o), je(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !_e(i) && !Ye(i) && (i = L(i));
        const s = L(this), { has: l, get: c } = Mn(s);
        let p = l.call(s, o);
        p ? Z.NODE_ENV !== "production" && ko(s, l, o) : (o = L(o), p = l.call(s, o));
        const f = c.call(s, o);
        return s.set(o, i), p ? pt(i, f) && je(s, "set", o, i, f) : je(s, "add", o, i), this;
      },
      delete(o) {
        const i = L(this), { has: s, get: l } = Mn(i);
        let c = s.call(i, o);
        c ? Z.NODE_ENV !== "production" && ko(i, s, o) : (o = L(o), c = s.call(i, o));
        const p = l ? l.call(i, o) : void 0, f = i.delete(o);
        return c && je(i, "delete", o, void 0, p), f;
      },
      clear() {
        const o = L(this), i = o.size !== 0, s = Z.NODE_ENV !== "production" ? Dt(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && je(
          o,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = ac(o, e, t);
  }), n;
}
function pr(e, t) {
  const n = uc(e, t);
  return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    U(n, o) && o in r ? n : r,
    o,
    i
  );
}
const fc = {
  get: /* @__PURE__ */ pr(!1, !1)
}, dc = {
  get: /* @__PURE__ */ pr(!1, !0)
}, pc = {
  get: /* @__PURE__ */ pr(!0, !1)
}, hc = {
  get: /* @__PURE__ */ pr(!0, !0)
};
function ko(e, t, n) {
  const r = L(n);
  if (r !== n && t.call(e, r)) {
    const o = to(e);
    we(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ys = /* @__PURE__ */ new WeakMap(), vs = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap();
function mc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function gc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mc(to(e));
}
function Kt(e) {
  return Ye(e) ? e : hr(
    e,
    !1,
    ic,
    fc,
    ys
  );
}
function _c(e) {
  return hr(
    e,
    !1,
    lc,
    dc,
    vs
  );
}
function Wr(e) {
  return hr(
    e,
    !0,
    sc,
    pc,
    bs
  );
}
function Be(e) {
  return hr(
    e,
    !0,
    cc,
    hc,
    Es
  );
}
function hr(e, t, n, r, o) {
  if (!K(e))
    return Z.NODE_ENV !== "production" && we(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = gc(e);
  if (i === 0)
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, l), l;
}
function wt(e) {
  return Ye(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function _e(e) {
  return !!(e && e.__v_isShallow);
}
function hn(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function yc(e) {
  return !U(e, "__v_skip") && Object.isExtensible(e) && Yn(e, "__v_skip", !0), e;
}
const fe = (e) => K(e) ? Kt(e) : e, zn = (e) => K(e) ? Wr(e) : e;
function oe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Yt(e) {
  return Ns(e, !1);
}
function ht(e) {
  return Ns(e, !0);
}
function Ns(e, t) {
  return oe(e) ? e : new vc(e, t);
}
class vc {
  constructor(t, n) {
    this.dep = new co(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : L(t), this._value = n ? t : fe(t), this.__v_isShallow = n;
  }
  get value() {
    return Z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || _e(t) || Ye(t);
    t = r ? t : L(t), pt(t, n) && (this._rawValue = t, this._value = r ? t : fe(t), Z.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function bc(e) {
  return oe(e) ? e.value : e;
}
const Ec = {
  get: (e, t, n) => t === "__v_raw" ? e : bc(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return oe(o) && !oe(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Ds(e) {
  return wt(e) ? e : new Proxy(e, Ec);
}
function Nc(e) {
  Z.NODE_ENV !== "production" && !hn(e) && we("toRefs() expects a reactive object but received a plain one.");
  const t = A(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = Os(e, n);
  return t;
}
class Dc {
  constructor(t, n, r) {
    this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return ec(L(this._object), this._key);
  }
}
class Oc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function ut(e, t, n) {
  return oe(e) ? e : k(e) ? new Oc(e) : K(e) && arguments.length > 1 ? Os(e, t, n) : Yt(e);
}
function Os(e, t, n) {
  const r = e[t];
  return oe(r) ? r : new Dc(e, t, n);
}
class wc {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new co(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    G !== this)
      return cs(this, !0), !0;
  }
  get value() {
    const t = Z.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return fs(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Z.NODE_ENV !== "production" && we("Write operation failed: computed value is readonly");
  }
}
function xc(e, t, n = !1) {
  let r, o;
  return k(e) ? r = e : (r = e.get, o = e.set), new wc(r, o, n);
}
const Fn = {}, Zn = /* @__PURE__ */ new WeakMap();
let Nt;
function Sc(e, t = !1, n = Nt) {
  if (n) {
    let r = Zn.get(n);
    r || Zn.set(n, r = []), r.push(e);
  } else Z.NODE_ENV !== "production" && !t && we(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Vc(e, t, n = X) {
  const { immediate: r, deep: o, once: i, scheduler: s, augmentJob: l, call: c } = n, p = ($) => {
    (n.onWarn || we)(
      "Invalid watch source: ",
      $,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = ($) => o ? $ : _e($) || o === !1 || o === 0 ? ft($, 1) : ft($);
  let u, m, _, T, C = !1, J = !1;
  if (oe(e) ? (m = () => e.value, C = _e(e)) : wt(e) ? (m = () => f(e), C = !0) : A(e) ? (J = !0, C = e.some(($) => wt($) || _e($)), m = () => e.map(($) => {
    if (oe($))
      return $.value;
    if (wt($))
      return f($);
    if (k($))
      return c ? c($, 2) : $();
    Z.NODE_ENV !== "production" && p($);
  })) : k(e) ? t ? m = c ? () => c(e, 2) : e : m = () => {
    if (_) {
      Ae();
      try {
        _();
      } finally {
        Fe();
      }
    }
    const $ = Nt;
    Nt = u;
    try {
      return c ? c(e, 3, [T]) : e(T);
    } finally {
      Nt = $;
    }
  } : (m = ce, Z.NODE_ENV !== "production" && p(e)), t && o) {
    const $ = m, H = o === !0 ? 1 / 0 : o;
    m = () => ft($(), H);
  }
  const F = is(), w = () => {
    u.stop(), F && F.active && Qr(F.effects, u);
  };
  if (i && t) {
    const $ = t;
    t = (...H) => {
      $(...H), w();
    };
  }
  let V = J ? new Array(e.length).fill(Fn) : Fn;
  const Y = ($) => {
    if (!(!(u.flags & 1) || !u.dirty && !$))
      if (t) {
        const H = u.run();
        if (o || C || (J ? H.some((ne, ae) => pt(ne, V[ae])) : pt(H, V))) {
          _ && _();
          const ne = Nt;
          Nt = u;
          try {
            const ae = [
              H,
              // pass undefined as the old value when it's changed for the first time
              V === Fn ? void 0 : J && V[0] === Fn ? [] : V,
              T
            ];
            V = H, c ? c(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Nt = ne;
          }
        }
      } else
        u.run();
  };
  return l && l(Y), u = new ss(m), u.scheduler = s ? () => s(Y, !1) : Y, T = ($) => Sc($, !1, u), _ = u.onStop = () => {
    const $ = Zn.get(u);
    if ($) {
      if (c)
        c($, 4);
      else
        for (const H of $) H();
      Zn.delete(u);
    }
  }, Z.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? r ? Y(!0) : V = u.run() : s ? s(Y.bind(null, !0), !0) : u.run(), w.pause = u.pause.bind(u), w.resume = u.resume.bind(u), w.stop = w, w;
}
function ft(e, t = 1 / 0, n) {
  if (t <= 0 || !K(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, oe(e))
    ft(e.value, t, n);
  else if (A(e))
    for (let r = 0; r < e.length; r++)
      ft(e[r], t, n);
  else if (Xi(e) || Dt(e))
    e.forEach((r) => {
      ft(r, t, n);
    });
  else if (es(e)) {
    for (const r in e)
      ft(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && ft(e[r], t, n);
  }
  return e;
}
var h = {};
const xt = [];
function Rn(e) {
  xt.push(e);
}
function Ln() {
  xt.pop();
}
let Tr = !1;
function O(e, ...t) {
  if (Tr) return;
  Tr = !0, Ae();
  const n = xt.length ? xt[xt.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Tc();
  if (r)
    Gt(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${yr(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Cc(o)), console.warn(...i);
  }
  Fe(), Tr = !1;
}
function Tc() {
  let e = xt[xt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Cc(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...$c(n));
  }), t;
}
function $c({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${yr(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [o, ...Mc(e.props), i] : [o + i];
}
function Mc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...ws(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ws(e, t, n) {
  return re(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : oe(t) ? (t = ws(e, L(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : k(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), n ? t : [`${e}=`, t]);
}
const ao = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Gt(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    On(o, t, n);
  }
}
function Ge(e, t, n, r) {
  if (k(e)) {
    const o = Gt(e, t, n, r);
    return o && eo(o) && o.catch((i) => {
      On(i, t, n);
    }), o;
  }
  if (A(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ge(e[i], t, n, r));
    return o;
  } else h.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function On(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || X;
  if (t) {
    let l = t.parent;
    const c = t.proxy, p = h.NODE_ENV !== "production" ? ao[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, c, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ae(), Gt(i, null, 10, [
        e,
        c,
        p
      ]), Fe();
      return;
    }
  }
  Ac(e, n, o, r, s);
}
function Ac(e, t, n, r = !0, o = !1) {
  if (h.NODE_ENV !== "production") {
    const i = ao[t];
    if (n && Rn(n), O(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Ln(), r)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const me = [];
let He = -1;
const jt = [];
let ct = null, Lt = 0;
const xs = /* @__PURE__ */ Promise.resolve();
let Jn = null;
const Fc = 100;
function Ss(e) {
  const t = Jn || xs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ic(e) {
  let t = He + 1, n = me.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = me[r], i = mn(o);
    i < e || i === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function mr(e) {
  if (!(e.flags & 1)) {
    const t = mn(e), n = me[me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= mn(n) ? me.push(e) : me.splice(Ic(t), 0, e), e.flags |= 1, Vs();
  }
}
function Vs() {
  Jn || (Jn = xs.then($s));
}
function Ts(e) {
  A(e) ? jt.push(...e) : ct && e.id === -1 ? ct.splice(Lt + 1, 0, e) : e.flags & 1 || (jt.push(e), e.flags |= 1), Vs();
}
function Ro(e, t, n = He + 1) {
  for (h.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < me.length; n++) {
    const r = me[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid || h.NODE_ENV !== "production" && uo(t, r))
        continue;
      me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Cs(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort(
      (n, r) => mn(n) - mn(r)
    );
    if (jt.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt = 0; Lt < ct.length; Lt++) {
      const n = ct[Lt];
      h.NODE_ENV !== "production" && uo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ct = null, Lt = 0;
  }
}
const mn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function $s(e) {
  h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => uo(e, n) : ce;
  try {
    for (He = 0; He < me.length; He++) {
      const n = me[He];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Gt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; He < me.length; He++) {
      const n = me[He];
      n && (n.flags &= -2);
    }
    He = -1, me.length = 0, Cs(e), Jn = null, (me.length || jt.length) && $s(e);
  }
}
function uo(e, t) {
  const n = e.get(t) || 0;
  if (n > Fc) {
    const r = t.i, o = r && Oo(r.type);
    return On(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ue = !1;
const Hn = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Dn().__VUE_HMR_RUNTIME__ = {
  createRecord: Cr(Ms),
  rerender: Cr(Rc),
  reload: Cr(Lc)
});
const Mt = /* @__PURE__ */ new Map();
function Pc(e) {
  const t = e.type.__hmrId;
  let n = Mt.get(t);
  n || (Ms(t, e.type), n = Mt.get(t)), n.instances.add(e);
}
function kc(e) {
  Mt.get(e.type.__hmrId).instances.delete(e);
}
function Ms(e, t) {
  return Mt.has(e) ? !1 : (Mt.set(e, {
    initialDef: qn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function qn(e) {
  return dl(e) ? e.__vccOpts : e;
}
function Rc(e, t) {
  const n = Mt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, qn(r.type).render = t), r.renderCache = [], Ue = !0, r.job.flags & 8 || r.update(), Ue = !1;
  }));
}
function Lc(e, t) {
  const n = Mt.get(e);
  if (!n) return;
  t = qn(t), Lo(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const i = r[o], s = qn(i.type);
    let l = Hn.get(s);
    l || (s !== n.initialDef && Lo(s, t), Hn.set(s, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? mr(() => {
      i.job.flags & 8 || (Ue = !0, i.parent.update(), Ue = !1, l.delete(i));
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  Ts(() => {
    Hn.clear();
  });
}
function Lo(e, t) {
  ie(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Cr(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let We, nn = [], Br = !1;
function wn(e, ...t) {
  We ? We.emit(e, ...t) : Br || nn.push({ event: e, args: t });
}
function As(e, t) {
  var n, r;
  We = e, We ? (We.enabled = !0, nn.forEach(({ event: o, args: i }) => We.emit(o, ...i)), nn = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    As(i, t);
  }), setTimeout(() => {
    We || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Br = !0, nn = []);
  }, 3e3)) : (Br = !0, nn = []);
}
function Hc(e, t) {
  wn("app:init", e, t, {
    Fragment: Te,
    Text: xn,
    Comment: Oe,
    Static: Wn
  });
}
function jc(e) {
  wn("app:unmount", e);
}
const Wc = /* @__PURE__ */ fo(
  "component:added"
  /* COMPONENT_ADDED */
), Fs = /* @__PURE__ */ fo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Bc = /* @__PURE__ */ fo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Uc = (e) => {
  We && typeof We.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !We.cleanupBuffer(e) && Bc(e);
};
// @__NO_SIDE_EFFECTS__
function fo(e) {
  return (t) => {
    wn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Kc = /* @__PURE__ */ Is(
  "perf:start"
  /* PERFORMANCE_START */
), Yc = /* @__PURE__ */ Is(
  "perf:end"
  /* PERFORMANCE_END */
);
function Is(e) {
  return (t, n, r) => {
    wn(e, t.appContext.app, t.uid, t, n, r);
  };
}
function Gc(e, t, n) {
  wn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ee = null, Ps = null;
function Xn(e) {
  const t = Ee;
  return Ee = e, Ps = e && e.type.__scopeId || null, t;
}
function z(e, t = Ee, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && rr(-1);
    const i = Xn(t);
    let s;
    try {
      s = e(...o);
    } finally {
      Xn(i), r._d && rr(1);
    }
    return h.NODE_ENV !== "production" && Fs(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ks(e) {
  Pl(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function yt(e, t, n, r) {
  const o = e.dirs, i = t && t.dirs;
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    i && (l.oldValue = i[s].value);
    let c = l.dir[r];
    c && (Ae(), Ge(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Fe());
  }
}
const zc = Symbol("_vte"), Zc = (e) => e.__isTeleport, Jc = Symbol("_leaveCb");
function po(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, po(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function qc(e, t) {
  return k(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function Rs(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Ho = /* @__PURE__ */ new WeakSet(), Qn = /* @__PURE__ */ new WeakMap();
function cn(e, t, n, r, o = !1) {
  if (A(e)) {
    e.forEach(
      (C, J) => cn(
        C,
        t && (A(t) ? t[J] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (an(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && cn(e, t, n, r.component.subTree);
    return;
  }
  const i = r.shapeFlag & 4 ? Do(r.component) : r.el, s = o ? null : i, { i: l, r: c } = e;
  if (h.NODE_ENV !== "production" && !l) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, f = l.refs === X ? l.refs = {} : l.refs, u = l.setupState, m = L(u), _ = u === X ? qi : (C) => h.NODE_ENV !== "production" && (U(m, C) && !oe(m[C]) && O(
    `Template ref "${C}" used on a non-ref value. It will not work in the production build.`
  ), Ho.has(m[C])) ? !1 : U(m, C), T = (C) => h.NODE_ENV === "production" || !Ho.has(C);
  if (p != null && p !== c) {
    if (jo(t), re(p))
      f[p] = null, _(p) && (u[p] = null);
    else if (oe(p)) {
      T(p) && (p.value = null);
      const C = t;
      C.k && (f[C.k] = null);
    }
  }
  if (k(c))
    Gt(c, l, 12, [s, f]);
  else {
    const C = re(c), J = oe(c);
    if (C || J) {
      const F = () => {
        if (e.f) {
          const w = C ? _(c) ? u[c] : f[c] : T(c) || !e.k ? c.value : f[e.k];
          if (o)
            A(w) && Qr(w, i);
          else if (A(w))
            w.includes(i) || w.push(i);
          else if (C)
            f[c] = [i], _(c) && (u[c] = f[c]);
          else {
            const V = [i];
            T(c) && (c.value = V), e.k && (f[e.k] = V);
          }
        } else C ? (f[c] = s, _(c) && (u[c] = s)) : J ? (T(c) && (c.value = s), e.k && (f[e.k] = s)) : h.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
      };
      if (s) {
        const w = () => {
          F(), Qn.delete(e);
        };
        w.id = -1, Qn.set(e, w), Ne(w, n);
      } else
        jo(e), F();
    } else h.NODE_ENV !== "production" && O("Invalid template ref type:", c, `(${typeof c})`);
  }
}
function jo(e) {
  const t = Qn.get(e);
  t && (t.flags |= 8, Qn.delete(e));
}
Dn().requestIdleCallback;
Dn().cancelIdleCallback;
const an = (e) => !!e.type.__asyncLoader, ho = (e) => e.type.__isKeepAlive;
function Xc(e, t) {
  Ls(e, "a", t);
}
function Qc(e, t) {
  Ls(e, "da", t);
}
function Ls(e, t, n = ue) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (gr(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ho(o.parent.vnode) && ea(r, t, n, o), o = o.parent;
  }
}
function ea(e, t, n, r) {
  const o = gr(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Hs(() => {
    Qr(r[t], o);
  }, n);
}
function gr(e, t, n = ue, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Ae();
      const l = Sn(n), c = Ge(t, n, e, s);
      return l(), Fe(), c;
    });
    return r ? o.unshift(i) : o.push(i), i;
  } else if (h.NODE_ENV !== "production") {
    const o = Et(ao[e].replace(/ hook$/, ""));
    O(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const rt = (e) => (t, n = ue) => {
  (!_n || e === "sp") && gr(e, (...r) => t(...r), n);
}, ta = rt("bm"), na = rt("m"), ra = rt(
  "bu"
), oa = rt("u"), ia = rt(
  "bum"
), Hs = rt("um"), sa = rt(
  "sp"
), la = rt("rtg"), ca = rt("rtc");
function aa(e, t = ue) {
  gr("ec", e, t);
}
const ua = "components";
function ee(e, t) {
  return da(ua, e, !0, t) || e;
}
const fa = Symbol.for("v-ndc");
function da(e, t, n = !0, r = !1) {
  const o = Ee || ue;
  if (o) {
    const i = o.type;
    {
      const l = Oo(
        i,
        !1
      );
      if (l && (l === t || l === ge(t) || l === $t(ge(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Wo(o[e] || i[e], t) || // global registration
      Wo(o.appContext[e], t)
    );
    return !s && r ? i : (h.NODE_ENV !== "production" && n && !s && O(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else h.NODE_ENV !== "production" && O(
    `resolve${$t(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function Wo(e, t) {
  return e && (e[t] || e[ge(t)] || e[$t(ge(t))]);
}
function pa(e, t, n, r) {
  let o;
  const i = n, s = A(e);
  if (s || re(e)) {
    const l = s && wt(e);
    let c = !1, p = !1;
    l && (c = !_e(e), p = Ye(e), e = dr(e)), o = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      o[f] = t(
        c ? p ? zn(fe(e[f])) : fe(e[f]) : e[f],
        f,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    h.NODE_ENV !== "production" && !Number.isInteger(e) && O(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i);
  } else if (K(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let c = 0, p = l.length; c < p; c++) {
        const f = l[c];
        o[c] = t(e[f], f, c, i);
      }
    }
  else
    o = [];
  return o;
}
const Ur = (e) => e ? ul(e) ? Do(e) : Ur(e.parent) : null, St = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? Be(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? Be(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? Be(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? Be(e.refs) : e.refs,
    $parent: (e) => Ur(e.parent),
    $root: (e) => Ur(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Bs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      mr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ss.bind(e.proxy)),
    $watch: (e) => Ka.bind(e)
  })
), mo = (e) => e === "_" || e === "$", $r = (e, t) => e !== X && !e.__isScriptSetup && U(e, t), js = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: i, accessCache: s, type: l, appContext: c } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const _ = s[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if ($r(r, t))
          return s[t] = 1, r[t];
        if (o !== X && U(o, t))
          return s[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && U(p, t)
        )
          return s[t] = 3, i[t];
        if (n !== X && U(n, t))
          return s[t] = 4, n[t];
        Kr && (s[t] = 0);
      }
    }
    const f = St[t];
    let u, m;
    if (f)
      return t === "$attrs" ? (le(e.attrs, "get", ""), h.NODE_ENV !== "production" && nr()) : h.NODE_ENV !== "production" && t === "$slots" && le(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== X && U(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = c.config.globalProperties, U(m, t)
    )
      return m[t];
    h.NODE_ENV !== "production" && Ee && (!re(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== X && mo(t[0]) && U(o, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ee && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: i } = e;
    return $r(o, t) ? (o[t] = n, !0) : h.NODE_ENV !== "production" && o.__isScriptSetup && U(o, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== X && U(r, t) ? (r[t] = n, !0) : U(e.props, t) ? (h.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i, type: s }
  }, l) {
    let c, p;
    return !!(n[l] || e !== X && l[0] !== "$" && U(e, l) || $r(t, l) || (c = i[0]) && U(c, l) || U(r, l) || U(St, l) || U(o.config.globalProperties, l) || (p = s.__cssModules) && p[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : U(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (js.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ha(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(St).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => St[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ce
    });
  }), t;
}
function ma(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: ce
    });
  });
}
function ga(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(L(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (mo(r[0])) {
        O(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: ce
      });
    }
  });
}
function Bo(e) {
  return A(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function _a() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Kr = !0;
function ya(e) {
  const t = Bs(e), n = e.proxy, r = e.ctx;
  Kr = !1, t.beforeCreate && Uo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: s,
    watch: l,
    provide: c,
    inject: p,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: m,
    beforeUpdate: _,
    updated: T,
    activated: C,
    deactivated: J,
    beforeDestroy: F,
    beforeUnmount: w,
    destroyed: V,
    unmounted: Y,
    render: $,
    renderTracked: H,
    renderTriggered: ne,
    errorCaptured: ae,
    serverPrefetch: Q,
    // public API
    expose: ze,
    inheritAttrs: ot,
    // assets
    components: Se,
    directives: Cn,
    filters: To
  } = t, it = h.NODE_ENV !== "production" ? _a() : null;
  if (h.NODE_ENV !== "production") {
    const [W] = e.propsOptions;
    if (W)
      for (const j in W)
        it("Props", j);
  }
  if (p && va(p, r, it), s)
    for (const W in s) {
      const j = s[W];
      k(j) ? (h.NODE_ENV !== "production" ? Object.defineProperty(r, W, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[W] = j.bind(n), h.NODE_ENV !== "production" && it("Methods", W)) : h.NODE_ENV !== "production" && O(
        `Method "${W}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    h.NODE_ENV !== "production" && !k(o) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const W = o.call(n, n);
    if (h.NODE_ENV !== "production" && eo(W) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !K(W))
      h.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = Kt(W), h.NODE_ENV !== "production")
      for (const j in W)
        it("Data", j), mo(j[0]) || Object.defineProperty(r, j, {
          configurable: !0,
          enumerable: !0,
          get: () => W[j],
          set: ce
        });
  }
  if (Kr = !0, i)
    for (const W in i) {
      const j = i[W], Ie = k(j) ? j.bind(n, n) : k(j.get) ? j.get.bind(n, n) : ce;
      h.NODE_ENV !== "production" && Ie === ce && O(`Computed property "${W}" has no getter.`);
      const Nr = !k(j) && k(j.set) ? j.set.bind(n) : h.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${W}" is readonly.`
        );
      } : ce, zt = Ke({
        get: Ie,
        set: Nr
      });
      Object.defineProperty(r, W, {
        enumerable: !0,
        configurable: !0,
        get: () => zt.value,
        set: (At) => zt.value = At
      }), h.NODE_ENV !== "production" && it("Computed", W);
    }
  if (l)
    for (const W in l)
      Ws(l[W], r, n, W);
  if (c) {
    const W = k(c) ? c.call(n) : c;
    Reflect.ownKeys(W).forEach((j) => {
      Ks(j, W[j]);
    });
  }
  f && Uo(f, e, "c");
  function ye(W, j) {
    A(j) ? j.forEach((Ie) => W(Ie.bind(n))) : j && W(j.bind(n));
  }
  if (ye(ta, u), ye(na, m), ye(ra, _), ye(oa, T), ye(Xc, C), ye(Qc, J), ye(aa, ae), ye(ca, H), ye(la, ne), ye(ia, w), ye(Hs, Y), ye(sa, Q), A(ze))
    if (ze.length) {
      const W = e.exposed || (e.exposed = {});
      ze.forEach((j) => {
        Object.defineProperty(W, j, {
          get: () => n[j],
          set: (Ie) => n[j] = Ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  $ && e.render === ce && (e.render = $), ot != null && (e.inheritAttrs = ot), Se && (e.components = Se), Cn && (e.directives = Cn), Q && Rs(e);
}
function va(e, t, n = ce) {
  A(e) && (e = Yr(e));
  for (const r in e) {
    const o = e[r];
    let i;
    K(o) ? "default" in o ? i = un(
      o.from || r,
      o.default,
      !0
    ) : i = un(o.from || r) : i = un(o), oe(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, h.NODE_ENV !== "production" && n("Inject", r);
  }
}
function Uo(e, t, n) {
  Ge(
    A(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ws(e, t, n, r) {
  let o = r.includes(".") ? tl(n, r) : () => n[r];
  if (re(e)) {
    const i = t[e];
    k(i) ? Qe(o, i) : h.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, i);
  } else if (k(e))
    Qe(o, e.bind(n));
  else if (K(e))
    if (A(e))
      e.forEach((i) => Ws(i, t, n, r));
    else {
      const i = k(e.handler) ? e.handler.bind(n) : t[e.handler];
      k(i) ? Qe(o, i, e) : h.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else h.NODE_ENV !== "production" && O(`Invalid watch option: "${r}"`, e);
}
function Bs(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !o.length && !n && !r ? c = t : (c = {}, o.length && o.forEach(
    (p) => er(c, p, s, !0)
  ), er(c, t, s)), K(t) && i.set(t, c), c;
}
function er(e, t, n, r = !1) {
  const { mixins: o, extends: i } = t;
  i && er(e, i, n, !0), o && o.forEach(
    (s) => er(e, s, n, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      h.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ba[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const ba = {
  data: Ko,
  props: Yo,
  emits: Yo,
  // objects
  methods: rn,
  computed: rn,
  // lifecycle
  beforeCreate: he,
  created: he,
  beforeMount: he,
  mounted: he,
  beforeUpdate: he,
  updated: he,
  beforeDestroy: he,
  beforeUnmount: he,
  destroyed: he,
  unmounted: he,
  activated: he,
  deactivated: he,
  errorCaptured: he,
  serverPrefetch: he,
  // assets
  components: rn,
  directives: rn,
  // watch
  watch: Na,
  // provide / inject
  provide: Ko,
  inject: Ea
};
function Ko(e, t) {
  return t ? e ? function() {
    return ie(
      k(e) ? e.call(this, this) : e,
      k(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ea(e, t) {
  return rn(Yr(e), Yr(t));
}
function Yr(e) {
  if (A(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function he(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function rn(e, t) {
  return e ? ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Yo(e, t) {
  return e ? A(e) && A(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ie(
    /* @__PURE__ */ Object.create(null),
    Bo(e),
    Bo(t ?? {})
  ) : t;
}
function Na(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ie(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = he(e[r], t[r]);
  return n;
}
function Us() {
  return {
    app: null,
    config: {
      isNativeTag: qi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Da = 0;
function Oa(e, t) {
  return function(r, o = null) {
    k(r) || (r = ie({}, r)), o != null && !K(o) && (h.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), o = null);
    const i = Us(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const p = i.app = {
      _uid: Da++,
      _component: r,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: ri,
      get config() {
        return i.config;
      },
      set config(f) {
        h.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...u) {
        return s.has(f) ? h.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : f && k(f.install) ? (s.add(f), f.install(p, ...u)) : k(f) ? (s.add(f), f(p, ...u)) : h.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(f) {
        return i.mixins.includes(f) ? h.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), p;
      },
      component(f, u) {
        return h.NODE_ENV !== "production" && qr(f, i.config), u ? (h.NODE_ENV !== "production" && i.components[f] && O(`Component "${f}" has already been registered in target app.`), i.components[f] = u, p) : i.components[f];
      },
      directive(f, u) {
        return h.NODE_ENV !== "production" && ks(f), u ? (h.NODE_ENV !== "production" && i.directives[f] && O(`Directive "${f}" has already been registered in target app.`), i.directives[f] = u, p) : i.directives[f];
      },
      mount(f, u, m) {
        if (c)
          h.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          h.NODE_ENV !== "production" && f.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const _ = p._ceVNode || P(r, o);
          return _.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), h.NODE_ENV !== "production" && (i.reload = () => {
            const T = gt(_);
            T.el = null, e(T, f, m);
          }), e(_, f, m), c = !0, p._container = f, f.__vue_app__ = p, h.NODE_ENV !== "production" && (p._instance = _.component, Hc(p, ri)), Do(_.component);
        }
      },
      onUnmount(f) {
        h.NODE_ENV !== "production" && typeof f != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        c ? (Ge(
          l,
          p._instance,
          16
        ), e(null, p._container), h.NODE_ENV !== "production" && (p._instance = null, jc(p)), delete p._container.__vue_app__) : h.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(f, u) {
        return h.NODE_ENV !== "production" && f in i.provides && (U(i.provides, f) ? O(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : O(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[f] = u, p;
      },
      runWithContext(f) {
        const u = Wt;
        Wt = p;
        try {
          return f();
        } finally {
          Wt = u;
        }
      }
    };
    return p;
  };
}
let Wt = null;
function Ks(e, t) {
  if (!ue)
    h.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = ue.provides;
    const r = ue.parent && ue.parent.provides;
    r === n && (n = ue.provides = Object.create(r)), n[e] = t;
  }
}
function un(e, t, n = !1) {
  const r = No();
  if (r || Wt) {
    let o = Wt ? Wt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && k(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const Ys = {}, Gs = () => Object.create(Ys), zs = (e) => Object.getPrototypeOf(e) === Ys;
function wa(e, t, n, r = !1) {
  const o = {}, i = Gs();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zs(e, t, o, i);
  for (const s in e.propsOptions[0])
    s in o || (o[s] = void 0);
  h.NODE_ENV !== "production" && qs(t || {}, o, e), n ? e.props = r ? o : _c(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function xa(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Sa(e, t, n, r) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = L(o), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(h.NODE_ENV !== "production" && xa(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let m = f[u];
        if (_r(e.emitsOptions, m))
          continue;
        const _ = t[m];
        if (c)
          if (U(i, m))
            _ !== i[m] && (i[m] = _, p = !0);
          else {
            const T = ge(m);
            o[T] = Gr(
              c,
              l,
              T,
              _,
              e,
              !1
            );
          }
        else
          _ !== i[m] && (i[m] = _, p = !0);
      }
    }
  } else {
    Zs(e, t, o, i) && (p = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !U(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = mt(u)) === u || !U(t, f))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[u] = Gr(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete o[u]);
    if (i !== l)
      for (const u in i)
        (!t || !U(t, u)) && (delete i[u], p = !0);
  }
  p && je(e.attrs, "set", ""), h.NODE_ENV !== "production" && qs(t || {}, o, e);
}
function Zs(e, t, n, r) {
  const [o, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let c in t) {
      if (on(c))
        continue;
      const p = t[c];
      let f;
      o && U(o, f = ge(c)) ? !i || !i.includes(f) ? n[f] = p : (l || (l = {}))[f] = p : _r(e.emitsOptions, c) || (!(c in r) || p !== r[c]) && (r[c] = p, s = !0);
    }
  if (i) {
    const c = L(n), p = l || X;
    for (let f = 0; f < i.length; f++) {
      const u = i[f];
      n[u] = Gr(
        o,
        c,
        u,
        p[u],
        e,
        !U(p, u)
      );
    }
  }
  return s;
}
function Gr(e, t, n, r, o, i) {
  const s = e[n];
  if (s != null) {
    const l = U(s, "default");
    if (l && r === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && k(c)) {
        const { propsDefaults: p } = o;
        if (n in p)
          r = p[n];
        else {
          const f = Sn(o);
          r = p[n] = c.call(
            null,
            t
          ), f();
        }
      } else
        r = c;
      o.ce && o.ce._setProp(n, r);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === mt(n)) && (r = !0));
  }
  return r;
}
const Va = /* @__PURE__ */ new WeakMap();
function Js(e, t, n = !1) {
  const r = n ? Va : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const i = e.props, s = {}, l = [];
  let c = !1;
  if (!k(e)) {
    const f = (u) => {
      c = !0;
      const [m, _] = Js(u, t, !0);
      ie(s, m), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !c)
    return K(e) && r.set(e, Ht), Ht;
  if (A(i))
    for (let f = 0; f < i.length; f++) {
      h.NODE_ENV !== "production" && !re(i[f]) && O("props must be strings when using array syntax.", i[f]);
      const u = ge(i[f]);
      Go(u) && (s[u] = X);
    }
  else if (i) {
    h.NODE_ENV !== "production" && !K(i) && O("invalid props options", i);
    for (const f in i) {
      const u = ge(f);
      if (Go(u)) {
        const m = i[f], _ = s[u] = A(m) || k(m) ? { type: m } : ie({}, m), T = _.type;
        let C = !1, J = !0;
        if (A(T))
          for (let F = 0; F < T.length; ++F) {
            const w = T[F], V = k(w) && w.name;
            if (V === "Boolean") {
              C = !0;
              break;
            } else V === "String" && (J = !1);
          }
        else
          C = k(T) && T.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = C, _[
          1
          /* shouldCastTrue */
        ] = J, (C || U(_, "default")) && l.push(u);
      }
    }
  }
  const p = [s, l];
  return K(e) && r.set(e, p), p;
}
function Go(e) {
  return e[0] !== "$" && !on(e) ? !0 : (h.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ta(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qs(e, t, n) {
  const r = L(t), o = n.propsOptions[0], i = Object.keys(e).map((s) => ge(s));
  for (const s in o) {
    let l = o[s];
    l != null && Ca(
      s,
      r[s],
      l,
      h.NODE_ENV !== "production" ? Be(r) : r,
      !i.includes(s)
    );
  }
}
function Ca(e, t, n, r, o) {
  const { type: i, required: s, validator: l, skipCheck: c } = n;
  if (s && o) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !c) {
      let p = !1;
      const f = A(i) ? i : [i], u = [];
      for (let m = 0; m < f.length && !p; m++) {
        const { valid: _, expectedType: T } = Ma(t, f[m]);
        u.push(T || ""), p = _;
      }
      if (!p) {
        O(Aa(e, t, u));
        return;
      }
    }
    l && !l(t, r) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const $a = /* @__PURE__ */ nt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ma(e, t) {
  let n;
  const r = Ta(t);
  if (r === "null")
    n = e === null;
  else if ($a(r)) {
    const o = typeof e;
    n = o === r.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else r === "Object" ? n = K(e) : r === "Array" ? n = A(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: r
  };
}
function Aa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map($t).join(" | ")}`;
  const o = n[0], i = to(t), s = zo(t, o), l = zo(t, i);
  return n.length === 1 && Zo(o) && !Fa(o, i) && (r += ` with value ${s}`), r += `, got ${i} `, Zo(i) && (r += `with value ${l}.`), r;
}
function zo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Zo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Fa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const go = (e) => e === "_" || e === "_ctx" || e === "$stable", _o = (e) => A(e) ? e.map(Ce) : [Ce(e)], Ia = (e, t, n) => {
  if (t._n)
    return t;
  const r = z((...o) => (h.NODE_ENV !== "production" && ue && !(n === null && Ee) && !(n && n.root !== ue.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), _o(t(...o))), n);
  return r._c = !1, r;
}, Xs = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (go(o)) continue;
    const i = e[o];
    if (k(i))
      t[o] = Ia(o, i, r);
    else if (i != null) {
      h.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const s = _o(i);
      t[o] = () => s;
    }
  }
}, Qs = (e, t) => {
  h.NODE_ENV !== "production" && !ho(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = _o(t);
  e.slots.default = () => n;
}, zr = (e, t, n) => {
  for (const r in t)
    (n || !go(r)) && (e[r] = t[r]);
}, Pa = (e, t, n) => {
  const r = e.slots = Gs();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (zr(r, t, n), n && Yn(r, "_", o, !0)) : Xs(t, r);
  } else t && Qs(e, t);
}, ka = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let i = !0, s = X;
  if (r.shapeFlag & 32) {
    const l = t._;
    l ? h.NODE_ENV !== "production" && Ue ? (zr(o, t, n), je(e, "set", "$slots")) : n && l === 1 ? i = !1 : zr(o, t, n) : (i = !t.$stable, Xs(t, o)), s = t;
  } else t && (Qs(e, t), s = { default: 1 });
  if (i)
    for (const l in o)
      !go(l) && s[l] == null && delete o[l];
};
let en, qe;
function It(e, t) {
  e.appContext.config.performance && tr() && qe.mark(`vue-${t}-${e.uid}`), h.NODE_ENV !== "production" && Kc(e, t, tr() ? qe.now() : Date.now());
}
function Pt(e, t) {
  if (e.appContext.config.performance && tr()) {
    const n = `vue-${t}-${e.uid}`, r = n + ":end", o = `<${yr(e, e.type)}> ${t}`;
    qe.mark(r), qe.measure(o, n, r), qe.clearMeasures(o), qe.clearMarks(n), qe.clearMarks(r);
  }
  h.NODE_ENV !== "production" && Yc(e, t, tr() ? qe.now() : Date.now());
}
function tr() {
  return en !== void 0 || (typeof window < "u" && window.performance ? (en = !0, qe = window.performance) : en = !1), en;
}
function Ra() {
  const e = [];
  if (h.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = Qa;
function La(e) {
  return Ha(e);
}
function Ha(e, t) {
  Ra();
  const n = Dn();
  n.__VUE__ = !0, h.NODE_ENV !== "production" && As(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: r,
    remove: o,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: c,
    setText: p,
    setElementText: f,
    parentNode: u,
    nextSibling: m,
    setScopeId: _ = ce,
    insertStaticContent: T
  } = e, C = (a, d, g, b = null, y = null, v = null, x = void 0, D = null, N = h.NODE_ENV !== "production" && Ue ? !1 : !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !tn(a, d) && (b = $n(a), st(a, y, v, !0), a = null), d.patchFlag === -2 && (N = !1, d.dynamicChildren = null);
    const { type: E, ref: I, shapeFlag: S } = d;
    switch (E) {
      case xn:
        J(a, d, g, b);
        break;
      case Oe:
        F(a, d, g, b);
        break;
      case Wn:
        a == null ? w(d, g, b, x) : h.NODE_ENV !== "production" && V(a, d, g, x);
        break;
      case Te:
        Cn(
          a,
          d,
          g,
          b,
          y,
          v,
          x,
          D,
          N
        );
        break;
      default:
        S & 1 ? H(
          a,
          d,
          g,
          b,
          y,
          v,
          x,
          D,
          N
        ) : S & 6 ? To(
          a,
          d,
          g,
          b,
          y,
          v,
          x,
          D,
          N
        ) : S & 64 || S & 128 ? E.process(
          a,
          d,
          g,
          b,
          y,
          v,
          x,
          D,
          N,
          Jt
        ) : h.NODE_ENV !== "production" && O("Invalid VNode type:", E, `(${typeof E})`);
    }
    I != null && y ? cn(I, a && a.ref, v, d || a, !d) : I == null && a && a.ref != null && cn(a.ref, null, v, a, !0);
  }, J = (a, d, g, b) => {
    if (a == null)
      r(
        d.el = l(d.children),
        g,
        b
      );
    else {
      const y = d.el = a.el;
      d.children !== a.children && p(y, d.children);
    }
  }, F = (a, d, g, b) => {
    a == null ? r(
      d.el = c(d.children || ""),
      g,
      b
    ) : d.el = a.el;
  }, w = (a, d, g, b) => {
    [a.el, a.anchor] = T(
      a.children,
      d,
      g,
      b,
      a.el,
      a.anchor
    );
  }, V = (a, d, g, b) => {
    if (d.children !== a.children) {
      const y = m(a.anchor);
      $(a), [d.el, d.anchor] = T(
        d.children,
        g,
        y,
        b
      );
    } else
      d.el = a.el, d.anchor = a.anchor;
  }, Y = ({ el: a, anchor: d }, g, b) => {
    let y;
    for (; a && a !== d; )
      y = m(a), r(a, g, b), a = y;
    r(d, g, b);
  }, $ = ({ el: a, anchor: d }) => {
    let g;
    for (; a && a !== d; )
      g = m(a), o(a), a = g;
    o(d);
  }, H = (a, d, g, b, y, v, x, D, N) => {
    d.type === "svg" ? x = "svg" : d.type === "math" && (x = "mathml"), a == null ? ne(
      d,
      g,
      b,
      y,
      v,
      x,
      D,
      N
    ) : ze(
      a,
      d,
      y,
      v,
      x,
      D,
      N
    );
  }, ne = (a, d, g, b, y, v, x, D) => {
    let N, E;
    const { props: I, shapeFlag: S, transition: M, dirs: R } = a;
    if (N = a.el = s(
      a.type,
      v,
      I && I.is,
      I
    ), S & 8 ? f(N, a.children) : S & 16 && Q(
      a.children,
      N,
      null,
      b,
      y,
      Mr(a, v),
      x,
      D
    ), R && yt(a, null, b, "created"), ae(N, a, a.scopeId, x, b), I) {
      for (const te in I)
        te !== "value" && !on(te) && i(N, te, null, I[te], v, b);
      "value" in I && i(N, "value", null, I.value, v), (E = I.onVnodeBeforeMount) && Le(E, b, a);
    }
    h.NODE_ENV !== "production" && (Yn(N, "__vnode", a, !0), Yn(N, "__vueParentComponent", b, !0)), R && yt(a, null, b, "beforeMount");
    const B = ja(y, M);
    B && M.beforeEnter(N), r(N, d, g), ((E = I && I.onVnodeMounted) || B || R) && Ne(() => {
      E && Le(E, b, a), B && M.enter(N), R && yt(a, null, b, "mounted");
    }, y);
  }, ae = (a, d, g, b, y) => {
    if (g && _(a, g), b)
      for (let v = 0; v < b.length; v++)
        _(a, b[v]);
    if (y) {
      let v = y.subTree;
      if (h.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = bo(v.children) || v), d === v || ol(v.type) && (v.ssContent === d || v.ssFallback === d)) {
        const x = y.vnode;
        ae(
          a,
          x,
          x.scopeId,
          x.slotScopeIds,
          y.parent
        );
      }
    }
  }, Q = (a, d, g, b, y, v, x, D, N = 0) => {
    for (let E = N; E < a.length; E++) {
      const I = a[E] = D ? at(a[E]) : Ce(a[E]);
      C(
        null,
        I,
        d,
        g,
        b,
        y,
        v,
        x,
        D
      );
    }
  }, ze = (a, d, g, b, y, v, x) => {
    const D = d.el = a.el;
    h.NODE_ENV !== "production" && (D.__vnode = d);
    let { patchFlag: N, dynamicChildren: E, dirs: I } = d;
    N |= a.patchFlag & 16;
    const S = a.props || X, M = d.props || X;
    let R;
    if (g && vt(g, !1), (R = M.onVnodeBeforeUpdate) && Le(R, g, d, a), I && yt(d, a, g, "beforeUpdate"), g && vt(g, !0), h.NODE_ENV !== "production" && Ue && (N = 0, x = !1, E = null), (S.innerHTML && M.innerHTML == null || S.textContent && M.textContent == null) && f(D, ""), E ? (ot(
      a.dynamicChildren,
      E,
      D,
      g,
      b,
      Mr(d, y),
      v
    ), h.NODE_ENV !== "production" && jn(a, d)) : x || Ie(
      a,
      d,
      D,
      null,
      g,
      b,
      Mr(d, y),
      v,
      !1
    ), N > 0) {
      if (N & 16)
        Se(D, S, M, g, y);
      else if (N & 2 && S.class !== M.class && i(D, "class", null, M.class, y), N & 4 && i(D, "style", S.style, M.style, y), N & 8) {
        const B = d.dynamicProps;
        for (let te = 0; te < B.length; te++) {
          const q = B[te], ve = S[q], be = M[q];
          (be !== ve || q === "value") && i(D, q, ve, be, y, g);
        }
      }
      N & 1 && a.children !== d.children && f(D, d.children);
    } else !x && E == null && Se(D, S, M, g, y);
    ((R = M.onVnodeUpdated) || I) && Ne(() => {
      R && Le(R, g, d, a), I && yt(d, a, g, "updated");
    }, b);
  }, ot = (a, d, g, b, y, v, x) => {
    for (let D = 0; D < d.length; D++) {
      const N = a[D], E = d[D], I = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !tn(N, E) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? u(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      C(
        N,
        E,
        I,
        null,
        b,
        y,
        v,
        x,
        !0
      );
    }
  }, Se = (a, d, g, b, y) => {
    if (d !== g) {
      if (d !== X)
        for (const v in d)
          !on(v) && !(v in g) && i(
            a,
            v,
            d[v],
            null,
            y,
            b
          );
      for (const v in g) {
        if (on(v)) continue;
        const x = g[v], D = d[v];
        x !== D && v !== "value" && i(a, v, D, x, y, b);
      }
      "value" in g && i(a, "value", d.value, g.value, y);
    }
  }, Cn = (a, d, g, b, y, v, x, D, N) => {
    const E = d.el = a ? a.el : l(""), I = d.anchor = a ? a.anchor : l("");
    let { patchFlag: S, dynamicChildren: M, slotScopeIds: R } = d;
    h.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ue || S & 2048) && (S = 0, N = !1, M = null), R && (D = D ? D.concat(R) : R), a == null ? (r(E, g, b), r(I, g, b), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      I,
      y,
      v,
      x,
      D,
      N
    )) : S > 0 && S & 64 && M && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (ot(
      a.dynamicChildren,
      M,
      g,
      y,
      v,
      x,
      D
    ), h.NODE_ENV !== "production" ? jn(a, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || y && d === y.subTree) && jn(
        a,
        d,
        !0
        /* shallow */
      )
    )) : Ie(
      a,
      d,
      g,
      I,
      y,
      v,
      x,
      D,
      N
    );
  }, To = (a, d, g, b, y, v, x, D, N) => {
    d.slotScopeIds = D, a == null ? d.shapeFlag & 512 ? y.ctx.activate(
      d,
      g,
      b,
      x,
      N
    ) : it(
      d,
      g,
      b,
      y,
      v,
      x,
      N
    ) : ye(a, d, N);
  }, it = (a, d, g, b, y, v, x) => {
    const D = a.component = lu(
      a,
      b,
      y
    );
    if (h.NODE_ENV !== "production" && D.type.__hmrId && Pc(D), h.NODE_ENV !== "production" && (Rn(a), It(D, "mount")), ho(a) && (D.ctx.renderer = Jt), h.NODE_ENV !== "production" && It(D, "init"), au(D, !1, x), h.NODE_ENV !== "production" && Pt(D, "init"), h.NODE_ENV !== "production" && Ue && (a.el = null), D.asyncDep) {
      if (y && y.registerDep(D, W, x), !a.el) {
        const N = D.subTree = P(Oe);
        F(null, N, d, g), a.placeholder = N.el;
      }
    } else
      W(
        D,
        a,
        d,
        g,
        y,
        v,
        x
      );
    h.NODE_ENV !== "production" && (Ln(), Pt(D, "mount"));
  }, ye = (a, d, g) => {
    const b = d.component = a.component;
    if (qa(a, d, g))
      if (b.asyncDep && !b.asyncResolved) {
        h.NODE_ENV !== "production" && Rn(d), j(b, d, g), h.NODE_ENV !== "production" && Ln();
        return;
      } else
        b.next = d, b.update();
    else
      d.el = a.el, b.vnode = d;
  }, W = (a, d, g, b, y, v, x) => {
    const D = () => {
      if (a.isMounted) {
        let { next: S, bu: M, u: R, parent: B, vnode: te } = a;
        {
          const ke = el(a);
          if (ke) {
            S && (S.el = te.el, j(a, S, x)), ke.asyncDep.then(() => {
              a.isUnmounted || D();
            });
            return;
          }
        }
        let q = S, ve;
        h.NODE_ENV !== "production" && Rn(S || a.vnode), vt(a, !1), S ? (S.el = te.el, j(a, S, x)) : S = te, M && Xt(M), (ve = S.props && S.props.onVnodeBeforeUpdate) && Le(ve, B, S, te), vt(a, !0), h.NODE_ENV !== "production" && It(a, "render");
        const be = qo(a);
        h.NODE_ENV !== "production" && Pt(a, "render");
        const Pe = a.subTree;
        a.subTree = be, h.NODE_ENV !== "production" && It(a, "patch"), C(
          Pe,
          be,
          // parent may have changed if it's in a teleport
          u(Pe.el),
          // anchor may have changed if it's in a fragment
          $n(Pe),
          a,
          y,
          v
        ), h.NODE_ENV !== "production" && Pt(a, "patch"), S.el = be.el, q === null && Xa(a, be.el), R && Ne(R, y), (ve = S.props && S.props.onVnodeUpdated) && Ne(
          () => Le(ve, B, S, te),
          y
        ), h.NODE_ENV !== "production" && Fs(a), h.NODE_ENV !== "production" && Ln();
      } else {
        let S;
        const { el: M, props: R } = d, { bm: B, m: te, parent: q, root: ve, type: be } = a, Pe = an(d);
        vt(a, !1), B && Xt(B), !Pe && (S = R && R.onVnodeBeforeMount) && Le(S, q, d), vt(a, !0);
        {
          ve.ce && // @ts-expect-error _def is private
          ve.ce._def.shadowRoot !== !1 && ve.ce._injectChildStyle(be), h.NODE_ENV !== "production" && It(a, "render");
          const ke = a.subTree = qo(a);
          h.NODE_ENV !== "production" && Pt(a, "render"), h.NODE_ENV !== "production" && It(a, "patch"), C(
            null,
            ke,
            g,
            b,
            a,
            y,
            v
          ), h.NODE_ENV !== "production" && Pt(a, "patch"), d.el = ke.el;
        }
        if (te && Ne(te, y), !Pe && (S = R && R.onVnodeMounted)) {
          const ke = d;
          Ne(
            () => Le(S, q, ke),
            y
          );
        }
        (d.shapeFlag & 256 || q && an(q.vnode) && q.vnode.shapeFlag & 256) && a.a && Ne(a.a, y), a.isMounted = !0, h.NODE_ENV !== "production" && Wc(a), d = g = b = null;
      }
    };
    a.scope.on();
    const N = a.effect = new ss(D);
    a.scope.off();
    const E = a.update = N.run.bind(N), I = a.job = N.runIfDirty.bind(N);
    I.i = a, I.id = a.uid, N.scheduler = () => mr(I), vt(a, !0), h.NODE_ENV !== "production" && (N.onTrack = a.rtc ? (S) => Xt(a.rtc, S) : void 0, N.onTrigger = a.rtg ? (S) => Xt(a.rtg, S) : void 0), E();
  }, j = (a, d, g) => {
    d.component = a;
    const b = a.vnode.props;
    a.vnode = d, a.next = null, Sa(a, d.props, b, g), ka(a, d.children, g), Ae(), Ro(a), Fe();
  }, Ie = (a, d, g, b, y, v, x, D, N = !1) => {
    const E = a && a.children, I = a ? a.shapeFlag : 0, S = d.children, { patchFlag: M, shapeFlag: R } = d;
    if (M > 0) {
      if (M & 128) {
        zt(
          E,
          S,
          g,
          b,
          y,
          v,
          x,
          D,
          N
        );
        return;
      } else if (M & 256) {
        Nr(
          E,
          S,
          g,
          b,
          y,
          v,
          x,
          D,
          N
        );
        return;
      }
    }
    R & 8 ? (I & 16 && Zt(E, y, v), S !== E && f(g, S)) : I & 16 ? R & 16 ? zt(
      E,
      S,
      g,
      b,
      y,
      v,
      x,
      D,
      N
    ) : Zt(E, y, v, !0) : (I & 8 && f(g, ""), R & 16 && Q(
      S,
      g,
      b,
      y,
      v,
      x,
      D,
      N
    ));
  }, Nr = (a, d, g, b, y, v, x, D, N) => {
    a = a || Ht, d = d || Ht;
    const E = a.length, I = d.length, S = Math.min(E, I);
    let M;
    for (M = 0; M < S; M++) {
      const R = d[M] = N ? at(d[M]) : Ce(d[M]);
      C(
        a[M],
        R,
        g,
        null,
        y,
        v,
        x,
        D,
        N
      );
    }
    E > I ? Zt(
      a,
      y,
      v,
      !0,
      !1,
      S
    ) : Q(
      d,
      g,
      b,
      y,
      v,
      x,
      D,
      N,
      S
    );
  }, zt = (a, d, g, b, y, v, x, D, N) => {
    let E = 0;
    const I = d.length;
    let S = a.length - 1, M = I - 1;
    for (; E <= S && E <= M; ) {
      const R = a[E], B = d[E] = N ? at(d[E]) : Ce(d[E]);
      if (tn(R, B))
        C(
          R,
          B,
          g,
          null,
          y,
          v,
          x,
          D,
          N
        );
      else
        break;
      E++;
    }
    for (; E <= S && E <= M; ) {
      const R = a[S], B = d[M] = N ? at(d[M]) : Ce(d[M]);
      if (tn(R, B))
        C(
          R,
          B,
          g,
          null,
          y,
          v,
          x,
          D,
          N
        );
      else
        break;
      S--, M--;
    }
    if (E > S) {
      if (E <= M) {
        const R = M + 1, B = R < I ? d[R].el : b;
        for (; E <= M; )
          C(
            null,
            d[E] = N ? at(d[E]) : Ce(d[E]),
            g,
            B,
            y,
            v,
            x,
            D,
            N
          ), E++;
      }
    } else if (E > M)
      for (; E <= S; )
        st(a[E], y, v, !0), E++;
    else {
      const R = E, B = E, te = /* @__PURE__ */ new Map();
      for (E = B; E <= M; E++) {
        const pe = d[E] = N ? at(d[E]) : Ce(d[E]);
        pe.key != null && (h.NODE_ENV !== "production" && te.has(pe.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(pe.key),
          "Make sure keys are unique."
        ), te.set(pe.key, E));
      }
      let q, ve = 0;
      const be = M - B + 1;
      let Pe = !1, ke = 0;
      const qt = new Array(be);
      for (E = 0; E < be; E++) qt[E] = 0;
      for (E = R; E <= S; E++) {
        const pe = a[E];
        if (ve >= be) {
          st(pe, y, v, !0);
          continue;
        }
        let Re;
        if (pe.key != null)
          Re = te.get(pe.key);
        else
          for (q = B; q <= M; q++)
            if (qt[q - B] === 0 && tn(pe, d[q])) {
              Re = q;
              break;
            }
        Re === void 0 ? st(pe, y, v, !0) : (qt[Re - B] = E + 1, Re >= ke ? ke = Re : Pe = !0, C(
          pe,
          d[Re],
          g,
          null,
          y,
          v,
          x,
          D,
          N
        ), ve++);
      }
      const $o = Pe ? Wa(qt) : Ht;
      for (q = $o.length - 1, E = be - 1; E >= 0; E--) {
        const pe = B + E, Re = d[pe], Mo = d[pe + 1], Ao = pe + 1 < I ? (
          // #13559, fallback to el placeholder for unresolved async component
          Mo.el || Mo.placeholder
        ) : b;
        qt[E] === 0 ? C(
          null,
          Re,
          g,
          Ao,
          y,
          v,
          x,
          D,
          N
        ) : Pe && (q < 0 || E !== $o[q] ? At(Re, g, Ao, 2) : q--);
      }
    }
  }, At = (a, d, g, b, y = null) => {
    const { el: v, type: x, transition: D, children: N, shapeFlag: E } = a;
    if (E & 6) {
      At(a.component.subTree, d, g, b);
      return;
    }
    if (E & 128) {
      a.suspense.move(d, g, b);
      return;
    }
    if (E & 64) {
      x.move(a, d, g, Jt);
      return;
    }
    if (x === Te) {
      r(v, d, g);
      for (let S = 0; S < N.length; S++)
        At(N[S], d, g, b);
      r(a.anchor, d, g);
      return;
    }
    if (x === Wn) {
      Y(a, d, g);
      return;
    }
    if (b !== 2 && E & 1 && D)
      if (b === 0)
        D.beforeEnter(v), r(v, d, g), Ne(() => D.enter(v), y);
      else {
        const { leave: S, delayLeave: M, afterLeave: R } = D, B = () => {
          a.ctx.isUnmounted ? o(v) : r(v, d, g);
        }, te = () => {
          v._isLeaving && v[Jc](
            !0
            /* cancelled */
          ), S(v, () => {
            B(), R && R();
          });
        };
        M ? M(v, B, te) : te();
      }
    else
      r(v, d, g);
  }, st = (a, d, g, b = !1, y = !1) => {
    const {
      type: v,
      props: x,
      ref: D,
      children: N,
      dynamicChildren: E,
      shapeFlag: I,
      patchFlag: S,
      dirs: M,
      cacheIndex: R
    } = a;
    if (S === -2 && (y = !1), D != null && (Ae(), cn(D, null, g, a, !0), Fe()), R != null && (d.renderCache[R] = void 0), I & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const B = I & 1 && M, te = !an(a);
    let q;
    if (te && (q = x && x.onVnodeBeforeUnmount) && Le(q, d, a), I & 6)
      Fl(a.component, g, b);
    else {
      if (I & 128) {
        a.suspense.unmount(g, b);
        return;
      }
      B && yt(a, null, d, "beforeUnmount"), I & 64 ? a.type.remove(
        a,
        d,
        g,
        Jt,
        b
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== Te || S > 0 && S & 64) ? Zt(
        E,
        d,
        g,
        !1,
        !0
      ) : (v === Te && S & 384 || !y && I & 16) && Zt(N, d, g), b && Dr(a);
    }
    (te && (q = x && x.onVnodeUnmounted) || B) && Ne(() => {
      q && Le(q, d, a), B && yt(a, null, d, "unmounted");
    }, g);
  }, Dr = (a) => {
    const { type: d, el: g, anchor: b, transition: y } = a;
    if (d === Te) {
      h.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && y && !y.persisted ? a.children.forEach((x) => {
        x.type === Oe ? o(x.el) : Dr(x);
      }) : Al(g, b);
      return;
    }
    if (d === Wn) {
      $(a);
      return;
    }
    const v = () => {
      o(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (a.shapeFlag & 1 && y && !y.persisted) {
      const { leave: x, delayLeave: D } = y, N = () => x(g, v);
      D ? D(a.el, v, N) : N();
    } else
      v();
  }, Al = (a, d) => {
    let g;
    for (; a !== d; )
      g = m(a), o(a), a = g;
    o(d);
  }, Fl = (a, d, g) => {
    h.NODE_ENV !== "production" && a.type.__hmrId && kc(a);
    const { bum: b, scope: y, job: v, subTree: x, um: D, m: N, a: E } = a;
    Jo(N), Jo(E), b && Xt(b), y.stop(), v && (v.flags |= 8, st(x, a, d, g)), D && Ne(D, d), Ne(() => {
      a.isUnmounted = !0;
    }, d), h.NODE_ENV !== "production" && Uc(a);
  }, Zt = (a, d, g, b = !1, y = !1, v = 0) => {
    for (let x = v; x < a.length; x++)
      st(a[x], d, g, b, y);
  }, $n = (a) => {
    if (a.shapeFlag & 6)
      return $n(a.component.subTree);
    if (a.shapeFlag & 128)
      return a.suspense.next();
    const d = m(a.anchor || a.el), g = d && d[zc];
    return g ? m(g) : d;
  };
  let Or = !1;
  const Co = (a, d, g) => {
    a == null ? d._vnode && st(d._vnode, null, null, !0) : C(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      g
    ), d._vnode = a, Or || (Or = !0, Ro(), Cs(), Or = !1);
  }, Jt = {
    p: C,
    um: st,
    m: At,
    r: Dr,
    mt: it,
    mc: Q,
    pc: Ie,
    pbc: ot,
    n: $n,
    o: e
  };
  return {
    render: Co,
    hydrate: void 0,
    createApp: Oa(Co)
  };
}
function Mr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function vt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ja(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function jn(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (A(r) && A(o))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = at(o[i]), l.el = s.el), !n && l.patchFlag !== -2 && jn(s, l)), l.type === xn && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = s.el), l.type === Oe && !l.el && (l.el = s.el), h.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Wa(e) {
  const t = e.slice(), n = [0];
  let r, o, i, s, l;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const p = e[r];
    if (p !== 0) {
      if (o = n[n.length - 1], e[o] < p) {
        t[r] = o, n.push(r);
        continue;
      }
      for (i = 0, s = n.length - 1; i < s; )
        l = i + s >> 1, e[n[l]] < p ? i = l + 1 : s = l;
      p < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
    }
  }
  for (i = n.length, s = n[i - 1]; i-- > 0; )
    n[i] = s, s = t[s];
  return n;
}
function el(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : el(t);
}
function Jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Ba = Symbol.for("v-scx"), Ua = () => {
  {
    const e = un(Ba);
    return e || h.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function yo(e, t) {
  return vo(e, null, t);
}
function Qe(e, t, n) {
  return h.NODE_ENV !== "production" && !k(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), vo(e, t, n);
}
function vo(e, t, n = X) {
  const { immediate: r, deep: o, flush: i, once: s } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ie({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = O);
  const c = t && r || !t && i !== "post";
  let p;
  if (_n) {
    if (i === "sync") {
      const _ = Ua();
      p = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!c) {
      const _ = () => {
      };
      return _.stop = ce, _.resume = ce, _.pause = ce, _;
    }
  }
  const f = ue;
  l.call = (_, T, C) => Ge(_, f, T, C);
  let u = !1;
  i === "post" ? l.scheduler = (_) => {
    Ne(_, f && f.suspense);
  } : i !== "sync" && (u = !0, l.scheduler = (_, T) => {
    T ? _() : mr(_);
  }), l.augmentJob = (_) => {
    t && (_.flags |= 4), u && (_.flags |= 2, f && (_.id = f.uid, _.i = f));
  };
  const m = Vc(e, t, l);
  return _n && (p ? p.push(m) : c && m()), m;
}
function Ka(e, t, n) {
  const r = this.proxy, o = re(e) ? e.includes(".") ? tl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  k(t) ? i = t : (i = t.handler, n = t);
  const s = Sn(this), l = vo(o, i.bind(r), n);
  return s(), l;
}
function tl(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Ya = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ge(t)}Modifiers`] || e[`${mt(t)}Modifiers`];
function Ga(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || X;
  if (h.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [u]
    } = e;
    if (f)
      if (!(t in f))
        (!u || !(Et(ge(t)) in u)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Et(ge(t))}" prop.`
        );
      else {
        const m = f[t];
        k(m) && (m(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), s = i && Ya(r, t.slice(7));
  if (s && (s.trim && (o = n.map((f) => re(f) ? f.trim() : f)), s.number && (o = n.map(Ll))), h.NODE_ENV !== "production" && Gc(e, t, o), h.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && r[Et(f)] && O(
      `Event "${f}" is emitted in component ${yr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${mt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = r[l = Et(t)] || // also try camelCase event handler (#2249)
  r[l = Et(ge(t))];
  !c && i && (c = r[l = Et(mt(t))]), c && Ge(
    c,
    e,
    6,
    o
  );
  const p = r[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ge(
      p,
      e,
      6,
      o
    );
  }
}
const za = /* @__PURE__ */ new WeakMap();
function nl(e, t, n = !1) {
  const r = n ? za : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let s = {}, l = !1;
  if (!k(e)) {
    const c = (p) => {
      const f = nl(p, t, !0);
      f && (l = !0, ie(s, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (K(e) && r.set(e, null), null) : (A(i) ? i.forEach((c) => s[c] = null) : ie(s, i), K(e) && r.set(e, s), s);
}
function _r(e, t) {
  return !e || !Nn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, mt(t)) || U(e, t));
}
let Zr = !1;
function nr() {
  Zr = !0;
}
function qo(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [i],
    slots: s,
    attrs: l,
    emit: c,
    render: p,
    renderCache: f,
    props: u,
    data: m,
    setupState: _,
    ctx: T,
    inheritAttrs: C
  } = e, J = Xn(e);
  let F, w;
  h.NODE_ENV !== "production" && (Zr = !1);
  try {
    if (n.shapeFlag & 4) {
      const $ = o || r, H = h.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy($, {
        get(ne, ae, Q) {
          return O(
            `Property '${String(
              ae
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ne, ae, Q);
        }
      }) : $;
      F = Ce(
        p.call(
          H,
          $,
          f,
          h.NODE_ENV !== "production" ? Be(u) : u,
          _,
          m,
          T
        )
      ), w = l;
    } else {
      const $ = t;
      h.NODE_ENV !== "production" && l === u && nr(), F = Ce(
        $.length > 1 ? $(
          h.NODE_ENV !== "production" ? Be(u) : u,
          h.NODE_ENV !== "production" ? {
            get attrs() {
              return nr(), Be(l);
            },
            slots: s,
            emit: c
          } : { attrs: l, slots: s, emit: c }
        ) : $(
          h.NODE_ENV !== "production" ? Be(u) : u,
          null
        )
      ), w = t.props ? l : Za(l);
    }
  } catch ($) {
    fn.length = 0, On($, e, 1), F = P(Oe);
  }
  let V = F, Y;
  if (h.NODE_ENV !== "production" && F.patchFlag > 0 && F.patchFlag & 2048 && ([V, Y] = rl(F)), w && C !== !1) {
    const $ = Object.keys(w), { shapeFlag: H } = V;
    if ($.length) {
      if (H & 7)
        i && $.some(Kn) && (w = Ja(
          w,
          i
        )), V = gt(V, w, !1, !0);
      else if (h.NODE_ENV !== "production" && !Zr && V.type !== Oe) {
        const ne = Object.keys(l), ae = [], Q = [];
        for (let ze = 0, ot = ne.length; ze < ot; ze++) {
          const Se = ne[ze];
          Nn(Se) ? Kn(Se) || ae.push(Se[2].toLowerCase() + Se.slice(3)) : Q.push(Se);
        }
        Q.length && O(
          `Extraneous non-props attributes (${Q.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ae.length && O(
          `Extraneous non-emits event listeners (${ae.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (h.NODE_ENV !== "production" && !Xo(V) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), V = gt(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && (h.NODE_ENV !== "production" && !Xo(V) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), po(V, n.transition)), h.NODE_ENV !== "production" && Y ? Y(V) : F = V, Xn(J), F;
}
const rl = (e) => {
  const t = e.children, n = e.dynamicChildren, r = bo(t, !1);
  if (r) {
    if (h.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return rl(r);
  } else return [e, void 0];
  const o = t.indexOf(r), i = n ? n.indexOf(r) : -1, s = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ce(r), s];
};
function bo(e, t = !0) {
  let n;
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (Ut(o)) {
      if (o.type !== Oe || o.children === "v-if") {
        if (n)
          return;
        if (n = o, h.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return bo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Za = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Nn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ja = (e, t) => {
  const n = {};
  for (const r in e)
    (!Kn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === Oe;
function qa(e, t, n) {
  const { props: r, children: o, component: i } = e, { props: s, children: l, patchFlag: c } = t, p = i.emitsOptions;
  if (h.NODE_ENV !== "production" && (o || l) && Ue || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? Qo(r, s, p) : !!s;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const m = f[u];
        if (s[m] !== r[m] && !_r(p, m))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : r === s ? !1 : r ? s ? Qo(r, s, p) : !0 : !!s;
  return !1;
}
function Qo(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    if (t[i] !== e[i] && !_r(n, i))
      return !0;
  }
  return !1;
}
function Xa({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ol = (e) => e.__isSuspense;
function Qa(e, t) {
  t && t.pendingBranch ? A(e) ? t.effects.push(...e) : t.effects.push(e) : Ts(e);
}
const Te = Symbol.for("v-fgt"), xn = Symbol.for("v-txt"), Oe = Symbol.for("v-cmt"), Wn = Symbol.for("v-stc"), fn = [];
let De = null;
function dt(e = !1) {
  fn.push(De = e ? null : []);
}
function eu() {
  fn.pop(), De = fn[fn.length - 1] || null;
}
let gn = 1;
function rr(e, t = !1) {
  gn += e, e < 0 && De && t && (De.hasOnce = !0);
}
function il(e) {
  return e.dynamicChildren = gn > 0 ? De || Ht : null, eu(), gn > 0 && De && De.push(e), e;
}
function tu(e, t, n, r, o, i) {
  return il(
    se(
      e,
      t,
      n,
      r,
      o,
      i,
      !0
    )
  );
}
function Vt(e, t, n, r, o) {
  return il(
    P(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Ut(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function tn(e, t) {
  if (h.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Hn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const nu = (...e) => ll(
  ...e
), sl = ({ key: e }) => e ?? null, Bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? re(e) || oe(e) || k(e) ? { i: Ee, r: e, k: t, f: !!n } : e : null);
function se(e, t = null, n = null, r = 0, o = null, i = e === Te ? 0 : 1, s = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && sl(t),
    ref: t && Bn(t),
    scopeId: Ps,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ee
  };
  return l ? (Eo(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= re(n) ? 8 : 16), h.NODE_ENV !== "production" && c.key !== c.key && O("VNode created with invalid key (NaN). VNode type:", c.type), gn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  De && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && De.push(c), c;
}
const P = h.NODE_ENV !== "production" ? nu : ll;
function ll(e, t = null, n = null, r = 0, o = null, i = !1) {
  if ((!e || e === fa) && (h.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), Ut(e)) {
    const l = gt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Eo(l, n), gn > 0 && !i && De && (l.shapeFlag & 6 ? De[De.indexOf(e)] = l : De.push(l)), l.patchFlag = -2, l;
  }
  if (dl(e) && (e = e.__vccOpts), t) {
    t = ru(t);
    let { class: l, style: c } = t;
    l && !re(l) && (t.class = fr(l)), K(c) && (hn(c) && !A(c) && (c = ie({}, c)), t.style = ro(c));
  }
  const s = re(e) ? 1 : ol(e) ? 128 : Zc(e) ? 64 : K(e) ? 4 : k(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && s & 4 && hn(e) && (e = L(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), se(
    e,
    t,
    n,
    r,
    o,
    s,
    i,
    !0
  );
}
function ru(e) {
  return e ? hn(e) || zs(e) ? ie({}, e) : e : null;
}
function gt(e, t, n = !1, r = !1) {
  const { props: o, ref: i, patchFlag: s, children: l, transition: c } = e, p = t ? al(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && sl(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? A(i) ? i.concat(Bn(t)) : [i, Bn(t)] : Bn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && s === -1 && A(l) ? l.map(cl) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && gt(e.ssContent),
    ssFallback: e.ssFallback && gt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && po(
    f,
    c.clone(f)
  ), f;
}
function cl(e) {
  const t = gt(e);
  return A(e.children) && (t.children = e.children.map(cl)), t;
}
function Ve(e = " ", t = 0) {
  return P(xn, null, e, t);
}
function ou(e = "", t = !1) {
  return t ? (dt(), Vt(Oe, null, e)) : P(Oe, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? P(Oe) : A(e) ? P(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ut(e) ? at(e) : P(xn, null, String(e));
}
function at(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : gt(e);
}
function Eo(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (A(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Eo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zs(t) ? t._ctx = Ee : o === 3 && Ee && (Ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else k(t) ? (t = { default: t, _ctx: Ee }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ve(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function al(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = fr([t.class, r.class]));
      else if (o === "style")
        t.style = ro([t.style, r.style]);
      else if (Nn(o)) {
        const i = t[o], s = r[o];
        s && i !== s && !(A(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Le(e, t, n, r = null) {
  Ge(e, t, 7, [
    n,
    r
  ]);
}
const iu = Us();
let su = 0;
function lu(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || iu, i = {
    uid: su++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new os(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Js(r, o),
    emitsOptions: nl(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: X,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: X,
    data: X,
    props: X,
    attrs: X,
    slots: X,
    refs: X,
    setupState: X,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return h.NODE_ENV !== "production" ? i.ctx = ha(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Ga.bind(null, i), e.ce && e.ce(i), i;
}
let ue = null;
const No = () => ue || Ee;
let or, Jr;
{
  const e = Dn(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (i) => {
      o.length > 1 ? o.forEach((s) => s(i)) : o[0](i);
    };
  };
  or = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), Jr = t(
    "__VUE_SSR_SETTERS__",
    (n) => _n = n
  );
}
const Sn = (e) => {
  const t = ue;
  return or(e), e.scope.on(), () => {
    e.scope.off(), or(t);
  };
}, ei = () => {
  ue && ue.scope.off(), or(null);
}, cu = /* @__PURE__ */ nt("slot,component");
function qr(e, { isNativeTag: t }) {
  (cu(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ul(e) {
  return e.vnode.shapeFlag & 4;
}
let _n = !1;
function au(e, t = !1, n = !1) {
  t && Jr(t);
  const { props: r, children: o } = e.vnode, i = ul(e);
  wa(e, r, i, t), Pa(e, o, n || t);
  const s = i ? uu(e, t) : void 0;
  return t && Jr(!1), s;
}
function uu(e, t) {
  var n;
  const r = e.type;
  if (h.NODE_ENV !== "production") {
    if (r.name && qr(r.name, e.appContext.config), r.components) {
      const i = Object.keys(r.components);
      for (let s = 0; s < i.length; s++)
        qr(i[s], e.appContext.config);
    }
    if (r.directives) {
      const i = Object.keys(r.directives);
      for (let s = 0; s < i.length; s++)
        ks(i[s]);
    }
    r.compilerOptions && fu() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, js), h.NODE_ENV !== "production" && ma(e);
  const { setup: o } = r;
  if (o) {
    Ae();
    const i = e.setupContext = o.length > 1 ? pu(e) : null, s = Sn(e), l = Gt(
      o,
      e,
      0,
      [
        h.NODE_ENV !== "production" ? Be(e.props) : e.props,
        i
      ]
    ), c = eo(l);
    if (Fe(), s(), (c || e.sp) && !an(e) && Rs(e), c) {
      if (l.then(ei, ei), t)
        return l.then((p) => {
          ti(e, p, t);
        }).catch((p) => {
          On(p, e, 0);
        });
      if (e.asyncDep = l, h.NODE_ENV !== "production" && !e.suspense) {
        const p = (n = r.name) != null ? n : "Anonymous";
        O(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ti(e, l, t);
  } else
    fl(e, t);
}
function ti(e, t, n) {
  k(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : K(t) ? (h.NODE_ENV !== "production" && Ut(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), h.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ds(t), h.NODE_ENV !== "production" && ga(e)) : h.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), fl(e, n);
}
const fu = () => !0;
function fl(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ce);
  {
    const o = Sn(e);
    Ae();
    try {
      ya(e);
    } finally {
      Fe(), o();
    }
  }
  h.NODE_ENV !== "production" && !r.render && e.render === ce && !t && (r.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", r));
}
const ni = h.NODE_ENV !== "production" ? {
  get(e, t) {
    return nr(), le(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return le(e, "get", ""), e[t];
  }
};
function du(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return le(e, "get", "$slots"), t[n];
    }
  });
}
function pu(e) {
  const t = (n) => {
    if (h.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let r = typeof n;
      r === "object" && (A(n) ? r = "array" : oe(n) && (r = "ref")), r !== "object" && O(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = n || {};
  };
  if (h.NODE_ENV !== "production") {
    let n, r;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ni));
      },
      get slots() {
        return r || (r = du(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ni),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Do(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ds(yc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in St)
        return St[n](e);
    },
    has(t, n) {
      return n in t || n in St;
    }
  })) : e.proxy;
}
const hu = /(?:^|[-_])\w/g, mu = (e) => e.replace(hu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Oo(e, t = !0) {
  return k(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function yr(e, t, n = !1) {
  let r = Oo(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? mu(r) : n ? "App" : "Anonymous";
}
function dl(e) {
  return k(e) && "__vccOpts" in e;
}
const Ke = (e, t) => {
  const n = xc(e, t, _n);
  if (h.NODE_ENV !== "production") {
    const r = No();
    r && r.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function gu(e, t, n) {
  try {
    rr(-1);
    const r = arguments.length;
    return r === 2 ? K(t) && !A(t) ? Ut(t) ? P(e, null, [t]) : P(e, t) : P(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Ut(n) && (n = [n]), P(e, t, n));
  } finally {
    rr(1);
  }
}
function _u() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!K(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (oe(u)) {
        Ae();
        const m = u.value;
        return Fe(), [
          "div",
          {},
          ["span", e, f(u)],
          "<",
          l(m),
          ">"
        ];
      } else {
        if (wt(u))
          return [
            "div",
            {},
            ["span", e, _e(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Ye(u) ? " (readonly)" : ""}`
          ];
        if (Ye(u))
          return [
            "div",
            {},
            ["span", e, _e(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...i(u.$)
        ];
    }
  };
  function i(u) {
    const m = [];
    u.type.props && u.props && m.push(s("props", L(u.props))), u.setupState !== X && m.push(s("setup", u.setupState)), u.data !== X && m.push(s("data", L(u.data)));
    const _ = c(u, "computed");
    _ && m.push(s("computed", _));
    const T = c(u, "inject");
    return T && m.push(s("injected", T)), m.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), m;
  }
  function s(u, m) {
    return m = ie({}, m), Object.keys(m).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(m).map((_) => [
          "div",
          {},
          ["span", r, _ + ": "],
          l(m[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, m = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : K(u) ? ["object", { object: m ? L(u) : u }] : ["span", n, String(u)];
  }
  function c(u, m) {
    const _ = u.type;
    if (k(_))
      return;
    const T = {};
    for (const C in u.ctx)
      p(_, C, m) && (T[C] = u.ctx[C]);
    return T;
  }
  function p(u, m, _) {
    const T = u[_];
    if (A(T) && T.includes(m) || K(T) && m in T || u.extends && p(u.extends, m, _) || u.mixins && u.mixins.some((C) => p(C, m, _)))
      return !0;
  }
  function f(u) {
    return _e(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const ri = "3.5.22", xe = h.NODE_ENV !== "production" ? O : ce;
var et = {};
let Xr;
const oi = typeof window < "u" && window.trustedTypes;
if (oi)
  try {
    Xr = /* @__PURE__ */ oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    et.NODE_ENV !== "production" && xe(`Error creating trusted types policy: ${e}`);
  }
const pl = Xr ? (e) => Xr.createHTML(e) : (e) => e, yu = "http://www.w3.org/2000/svg", vu = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, ii = Je && /* @__PURE__ */ Je.createElement("template"), bu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Je.createElementNS(yu, e) : t === "mathml" ? Je.createElementNS(vu, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, i) {
    const s = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      ii.innerHTML = pl(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ii.content;
      if (r === "svg" || r === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Eu = Symbol("_vtc");
function Nu(e, t, n) {
  const r = e[Eu];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const si = Symbol("_vod"), Du = Symbol("_vsh"), Ou = Symbol(et.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), wu = /(?:^|;)\s*display\s*:/;
function xu(e, t, n) {
  const r = e.style, o = re(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (re(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Un(r, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Un(r, s, "");
    for (const s in n)
      s === "display" && (i = !0), Un(r, s, n[s]);
  } else if (o) {
    if (t !== n) {
      const s = r[Ou];
      s && (n += ";" + s), r.cssText = n, i = wu.test(n);
    }
  } else t && e.removeAttribute("style");
  si in e && (e[si] = i ? r.display : "", e[Du] && (r.display = "none"));
}
const Su = /[^\\];\s*$/, li = /\s*!important$/;
function Un(e, t, n) {
  if (A(n))
    n.forEach((r) => Un(e, t, r));
  else if (n == null && (n = ""), et.NODE_ENV !== "production" && Su.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Vu(e, t);
    li.test(n) ? e.setProperty(
      mt(r),
      n.replace(li, ""),
      "important"
    ) : e[r] = n;
  }
}
const ci = ["Webkit", "Moz", "ms"], Ar = {};
function Vu(e, t) {
  const n = Ar[t];
  if (n)
    return n;
  let r = ge(t);
  if (r !== "filter" && r in e)
    return Ar[t] = r;
  r = $t(r);
  for (let o = 0; o < ci.length; o++) {
    const i = ci[o] + r;
    if (i in e)
      return Ar[t] = i;
  }
  return t;
}
const ai = "http://www.w3.org/1999/xlink";
function ui(e, t, n, r, o, i = ql(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ai, t.slice(6, t.length)) : e.setAttributeNS(ai, t, n) : n == null || i && !ts(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : _t(n) ? String(n) : n
  );
}
function fi(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? pl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = ts(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    et.NODE_ENV !== "production" && !s && xe(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(o || t);
}
function Tu(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Cu(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const di = Symbol("_vei");
function $u(e, t, n, r, o = null) {
  const i = e[di] || (e[di] = {}), s = i[t];
  if (r && s)
    s.value = et.NODE_ENV !== "production" ? hi(r, t) : r;
  else {
    const [l, c] = Mu(t);
    if (r) {
      const p = i[t] = Iu(
        et.NODE_ENV !== "production" ? hi(r, t) : r,
        o
      );
      Tu(e, l, p, c);
    } else s && (Cu(e, l, s, c), i[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function Mu(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let r;
    for (; r = e.match(pi); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : mt(e.slice(2)), t];
}
let Fr = 0;
const Au = /* @__PURE__ */ Promise.resolve(), Fu = () => Fr || (Au.then(() => Fr = 0), Fr = Date.now());
function Iu(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Ge(
      Pu(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Fu(), n;
}
function hi(e, t) {
  return k(e) || A(e) ? e : (xe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ce);
}
function Pu(e, t) {
  if (A(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const mi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ku = (e, t, n, r, o, i) => {
  const s = o === "svg";
  t === "class" ? Nu(e, r, s) : t === "style" ? xu(e, n, r) : Nn(t) ? Kn(t) || $u(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ru(e, t, r, s)) ? (fi(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ui(e, t, r, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !re(r)) ? fi(e, ge(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ui(e, t, r, s));
};
function Ru(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mi(t) && k(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return mi(t) && re(n) ? !1 : t in e;
}
const Lu = /* @__PURE__ */ ie({ patchProp: ku }, bu);
let gi;
function Hu() {
  return gi || (gi = La(Lu));
}
const vr = (...e) => {
  const t = Hu().createApp(...e);
  et.NODE_ENV !== "production" && (Wu(t), Bu(t));
  const { mount: n } = t;
  return t.mount = (r) => {
    const o = Uu(r);
    if (!o) return;
    const i = t._component;
    !k(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const s = n(o, !1, ju(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), s;
  }, t;
};
function ju(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Gl(t) || zl(t) || Zl(t),
    writable: !1
  });
}
function Bu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xe(r), n;
      },
      set() {
        xe(r);
      }
    });
  }
}
function Uu(e) {
  if (re(e)) {
    const t = document.querySelector(e);
    return et.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return et.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Ku = {};
function Yu() {
  _u();
}
Ku.NODE_ENV !== "production" && Yu();
function Gu(e, t) {
  let n;
  function r() {
    n = Rr(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), r();
    }) : t());
  }
  Qe(e, (o) => {
    o && !n ? r() : o || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), oo(() => {
    n == null || n.stop();
  });
}
const Me = typeof window < "u", zu = Me && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0), Zu = Me && "matchMedia" in window && typeof window.matchMedia == "function";
function Ju(e, t, n) {
  const r = t.length - 1;
  if (r < 0) return e === void 0 ? n : e;
  for (let o = 0; o < r; o++) {
    if (e == null)
      return n;
    e = e[t[o]];
  }
  return e == null || e[t[r]] === void 0 ? n : e[t[r]];
}
function _i(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ju(e, t.split("."), n));
}
function hl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, r) => t + r);
}
function yi(e) {
  let t;
  return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null);
}
function Ir(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function qu(e, t) {
  const n = {};
  for (const r of t)
    Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
  return n;
}
function Xu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function vi(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function bi(e, t) {
  return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e;
}
function Qu(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let r = 0;
  for (; r < e.length; )
    n.push(e.substr(r, t)), r += t;
  return n;
}
function tt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const r = {};
  for (const o in e)
    r[o] = e[o];
  for (const o in t) {
    const i = e[o], s = t[o];
    if (yi(i) && yi(s)) {
      r[o] = tt(i, s, n);
      continue;
    }
    if (n && Array.isArray(i) && Array.isArray(s)) {
      r[o] = n(i, s);
      continue;
    }
    r[o] = s;
  }
  return r;
}
function Bt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Bt.cache.has(e)) return Bt.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Bt.cache.set(e, t), t;
}
Bt.cache = /* @__PURE__ */ new Map();
const kt = 2.4, Ei = 0.2126729, Ni = 0.7151522, Di = 0.072175, ef = 0.55, tf = 0.58, nf = 0.57, rf = 0.62, In = 0.03, Oi = 1.45, of = 5e-4, sf = 1.25, lf = 1.25, wi = 0.078, xi = 12.82051282051282, Pn = 0.06, Si = 1e-3;
function Vi(e, t) {
  const n = (e.r / 255) ** kt, r = (e.g / 255) ** kt, o = (e.b / 255) ** kt, i = (t.r / 255) ** kt, s = (t.g / 255) ** kt, l = (t.b / 255) ** kt;
  let c = n * Ei + r * Ni + o * Di, p = i * Ei + s * Ni + l * Di;
  if (c <= In && (c += (In - c) ** Oi), p <= In && (p += (In - p) ** Oi), Math.abs(p - c) < of) return 0;
  let f;
  if (p > c) {
    const u = (p ** ef - c ** tf) * sf;
    f = u < Si ? 0 : u < wi ? u - u * xi * Pn : u - Pn;
  } else {
    const u = (p ** rf - c ** nf) * lf;
    f = u > -Si ? 0 : u > -wi ? u - u * xi * Pn : u + Pn;
  }
  return f * 100;
}
function Tt(e) {
  xe(`Vuetify: ${e}`);
}
function Ti(e) {
  xe(`Vuetify error: ${e}`);
}
function cf(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, xe(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const ir = 0.20689655172413793, af = (e) => e > ir ** 3 ? Math.cbrt(e) : e / (3 * ir ** 2) + 4 / 29, uf = (e) => e > ir ? e ** 3 : 3 * ir ** 2 * (e - 4 / 29);
function ml(e) {
  const t = af, n = t(e[1]);
  return [116 * n - 16, 500 * (t(e[0] / 0.95047) - n), 200 * (n - t(e[2] / 1.08883))];
}
function gl(e) {
  const t = uf, n = (e[0] + 16) / 116;
  return [t(n + e[1] / 500) * 0.95047, t(n), t(n - e[2] / 200) * 1.08883];
}
const ff = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]], df = (e) => e <= 31308e-7 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - 0.055, pf = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], hf = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function _l(e) {
  const t = Array(3), n = df, r = ff;
  for (let o = 0; o < 3; ++o)
    t[o] = Math.round(Xu(n(r[o][0] * e[0] + r[o][1] * e[1] + r[o][2] * e[2])) * 255);
  return {
    r: t[0],
    g: t[1],
    b: t[2]
  };
}
function wo(e) {
  let {
    r: t,
    g: n,
    b: r
  } = e;
  const o = [0, 0, 0], i = hf, s = pf;
  t = i(t / 255), n = i(n / 255), r = i(r / 255);
  for (let l = 0; l < 3; ++l)
    o[l] = s[l][0] * t + s[l][1] * n + s[l][2] * r;
  return o;
}
const Ci = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, mf = {
  rgb: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  rgba: (e, t, n, r) => ({
    r: e,
    g: t,
    b: n,
    a: r
  }),
  hsl: (e, t, n, r) => $i({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsla: (e, t, n, r) => $i({
    h: e,
    s: t,
    l: n,
    a: r
  }),
  hsv: (e, t, n, r) => yn({
    h: e,
    s: t,
    v: n,
    a: r
  }),
  hsva: (e, t, n, r) => yn({
    h: e,
    s: t,
    v: n,
    a: r
  })
};
function Xe(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Tt(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ci.test(e)) {
    const {
      groups: t
    } = e.match(Ci), {
      fn: n,
      values: r
    } = t, o = r.split(/,\s*|\s*\/\s*|\s+/).map((i, s) => i.endsWith("%") || // unitless slv are %
    s > 0 && s < 3 && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return mf[n](...o);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((r) => r + r).join("") : [6, 8].includes(t.length) || Tt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && Tt(`'${e}' is not a valid hex(a) color`), _f(t);
  } else if (typeof e == "object") {
    if (Ir(e, ["r", "g", "b"]))
      return e;
    if (Ir(e, ["h", "s", "l"]))
      return yn(yl(e));
    if (Ir(e, ["h", "s", "v"]))
      return yn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function yn(e) {
  const {
    h: t,
    s: n,
    v: r,
    a: o
  } = e, i = (l) => {
    const c = (l + t / 60) % 6;
    return r - r * n * Math.max(Math.min(c, 4 - c, 1), 0);
  }, s = [i(5), i(3), i(1)].map((l) => Math.round(l * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: o
  };
}
function $i(e) {
  return yn(yl(e));
}
function yl(e) {
  const {
    h: t,
    s: n,
    l: r,
    a: o
  } = e, i = r + n * Math.min(r, 1 - r), s = i === 0 ? 0 : 2 - 2 * r / i;
  return {
    h: t,
    s,
    v: i,
    a: o
  };
}
function kn(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function gf(e) {
  let {
    r: t,
    g: n,
    b: r,
    a: o
  } = e;
  return `#${[kn(t), kn(n), kn(r), o !== void 0 ? kn(Math.round(o * 255)) : ""].join("")}`;
}
function _f(e) {
  e = yf(e);
  let [t, n, r, o] = Qu(e, 2).map((i) => parseInt(i, 16));
  return o = o === void 0 ? o : o / 255, {
    r: t,
    g: n,
    b: r,
    a: o
  };
}
function yf(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = vi(vi(e, 6), 8, "F")), e;
}
function vf(e, t) {
  const n = ml(wo(e));
  return n[0] = n[0] + t * 10, _l(gl(n));
}
function bf(e, t) {
  const n = ml(wo(e));
  return n[0] = n[0] - t * 10, _l(gl(n));
}
function Ef(e) {
  const t = Xe(e);
  return wo(t)[1];
}
function Nf(e) {
  const t = Math.abs(Vi(Xe(0), Xe(e)));
  return Math.abs(Vi(Xe(16777215), Xe(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function vl(e, t) {
  return (n) => Object.keys(e).reduce((r, o) => {
    const s = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : {
      type: e[o]
    };
    return n && o in n ? r[o] = {
      ...s,
      default: n[o]
    } : r[o] = s, t && !r[o].source && (r[o].source = t), r;
  }, {});
}
function xo(e, t) {
  const n = No();
  if (!n)
    throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
  return n;
}
function Df(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : xo("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
const vn = Symbol.for("vuetify:defaults");
function Of(e) {
  return Yt(e);
}
function bl() {
  const e = un(vn);
  if (!e) throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function wf(e, t) {
  return e.props && (typeof e.props[t] < "u" || typeof e.props[Bt(t)] < "u");
}
function xf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : bl();
  const r = xo("useDefaults");
  if (t = t ?? r.type.name ?? r.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = Ke(() => {
    var c;
    return (c = n.value) == null ? void 0 : c[e._as ?? t];
  }), i = new Proxy(e, {
    get(c, p) {
      var _, T, C, J;
      const f = Reflect.get(c, p);
      if (p === "class" || p === "style")
        return [(_ = o.value) == null ? void 0 : _[p], f].filter((F) => F != null);
      if (wf(r.vnode, p)) return f;
      const u = (T = o.value) == null ? void 0 : T[p];
      if (u !== void 0) return u;
      const m = (J = (C = n.value) == null ? void 0 : C.global) == null ? void 0 : J[p];
      return m !== void 0 ? m : f;
    }
  }), s = ht();
  yo(() => {
    if (o.value) {
      const c = Object.entries(o.value).filter((p) => {
        let [f] = p;
        return f.startsWith(f[0].toUpperCase());
      });
      s.value = c.length ? Object.fromEntries(c) : void 0;
    } else
      s.value = void 0;
  });
  function l() {
    const c = Df(vn, r);
    Ks(vn, Ke(() => s.value ? tt((c == null ? void 0 : c.value) ?? {}, s.value) : c == null ? void 0 : c.value));
  }
  return {
    props: i,
    provideSubDefaults: l
  };
}
function Vn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Tt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = vl(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(r) {
      return qu(r, t);
    }, e.props._as = String, e.setup = function(r, o) {
      const i = bl();
      if (!i.value) return e._setup(r, o);
      const {
        props: s,
        provideSubDefaults: l
      } = xf(r, r._as ?? e.name, i), c = e._setup(s, o);
      return l(), c;
    };
  }
  return e;
}
function Sf() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? Vn : qc)(t);
}
const Vf = {
  linear: (e) => e,
  easeInQuad: (e) => e ** 2,
  easeOutQuad: (e) => e * (2 - e),
  easeInOutQuad: (e) => e < 0.5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
  easeInCubic: (e) => e ** 3,
  easeOutCubic: (e) => --e ** 3 + 1,
  easeInOutCubic: (e) => e < 0.5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
  easeInQuart: (e) => e ** 4,
  easeOutQuart: (e) => 1 - --e ** 4,
  easeInOutQuart: (e) => e < 0.5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
  easeInQuint: (e) => e ** 5,
  easeOutQuint: (e) => 1 + --e ** 5,
  easeInOutQuint: (e) => e < 0.5 ? 16 * e ** 5 : 1 + 16 * --e ** 5,
  instant: (e) => 1
};
function Tf(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (u) => u, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (u) => u;
  const i = xo("useProxiedModel"), s = Yt(e[t] !== void 0 ? e[t] : n), l = Bt(t), p = Ke(l !== t ? () => {
    var u, m, _, T;
    return e[t], !!(((u = i.vnode.props) != null && u.hasOwnProperty(t) || (m = i.vnode.props) != null && m.hasOwnProperty(l)) && ((_ = i.vnode.props) != null && _.hasOwnProperty(`onUpdate:${t}`) || (T = i.vnode.props) != null && T.hasOwnProperty(`onUpdate:${l}`)));
  } : () => {
    var u, m;
    return e[t], !!((u = i.vnode.props) != null && u.hasOwnProperty(t) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`)));
  });
  Gu(() => !p.value, () => {
    Qe(() => e[t], (u) => {
      s.value = u;
    });
  });
  const f = Ke({
    get() {
      const u = e[t];
      return r(p.value ? u : s.value);
    },
    set(u) {
      const m = o(u), _ = L(p.value ? e[t] : s.value);
      _ === m || r(_) === u || (s.value = m, i == null || i.emit(`update:${t}`, m));
    }
  });
  return Object.defineProperty(f, "externalValue", {
    get: () => p.value ? e[t] : s.value
  }), f;
}
const Cf = {
  badge: "Badge",
  open: "Open",
  close: "Close",
  dismiss: "Dismiss",
  confirmEdit: {
    ok: "OK",
    cancel: "Cancel"
  },
  dataIterator: {
    noResultsText: "No matching records found",
    loadingText: "Loading items..."
  },
  dataTable: {
    itemsPerPageText: "Rows per page:",
    ariaLabel: {
      sortDescending: "Sorted descending.",
      sortAscending: "Sorted ascending.",
      sortNone: "Not sorted.",
      activateNone: "Activate to remove sorting.",
      activateDescending: "Activate to sort descending.",
      activateAscending: "Activate to sort ascending."
    },
    sortBy: "Sort by"
  },
  dataFooter: {
    itemsPerPageText: "Items per page:",
    itemsPerPageAll: "All",
    nextPage: "Next page",
    prevPage: "Previous page",
    firstPage: "First page",
    lastPage: "Last page",
    pageText: "{0}-{1} of {2}"
  },
  dateRangeInput: {
    divider: "to"
  },
  datePicker: {
    itemsSelected: "{0} selected",
    range: {
      title: "Select dates",
      header: "Enter dates"
    },
    title: "Select date",
    header: "Enter date",
    input: {
      placeholder: "Enter date"
    },
    ariaLabel: {
      previousMonth: "Previous month",
      nextMonth: "Next month",
      selectYear: "Select year",
      selectDate: "{0}",
      // Full date format
      currentDate: "Today, {0}"
    }
  },
  noDataText: "No data available",
  carousel: {
    prev: "Previous visual",
    next: "Next visual",
    ariaLabel: {
      delimiter: "Carousel slide {0} of {1}"
    }
  },
  calendar: {
    moreEvents: "{0} more",
    today: "Today"
  },
  input: {
    clear: "Clear {0}",
    prependAction: "{0} prepended action",
    appendAction: "{0} appended action",
    otp: "Please enter OTP character {0}"
  },
  fileInput: {
    counter: "{0} files",
    counterSize: "{0} files ({1} in total)"
  },
  fileUpload: {
    title: "Drag and drop files here",
    divider: "or",
    browse: "Browse Files"
  },
  timePicker: {
    am: "AM",
    pm: "PM",
    title: "Select Time"
  },
  pagination: {
    ariaLabel: {
      root: "Pagination Navigation",
      next: "Next page",
      previous: "Previous page",
      page: "Go to page {0}",
      currentPage: "Page {0}, Current page",
      first: "First page",
      last: "Last page"
    }
  },
  stepper: {
    next: "Next",
    prev: "Previous"
  },
  rating: {
    ariaLabel: {
      item: "Rating {0} of {1}"
    }
  },
  loading: "Loading...",
  infiniteScroll: {
    loadMore: "Load more",
    empty: "No more"
  },
  rules: {
    required: "This field is required",
    email: "Please enter a valid email",
    number: "This field can only contain numbers",
    integer: "This field can only contain integer values",
    capital: "This field can only contain uppercase letters",
    maxLength: "You must enter a maximum of {0} characters",
    minLength: "You must enter a minimum of {0} characters",
    strictLength: "The length of the entered field is invalid",
    exclude: "The {0} character is not allowed",
    notEmpty: "Please choose at least one value",
    pattern: "Invalid format"
  },
  hotkey: {
    then: "then",
    ctrl: "Ctrl",
    command: "Command",
    space: "Space",
    shift: "Shift",
    alt: "Alt",
    enter: "Enter",
    escape: "Escape",
    upArrow: "Up Arrow",
    downArrow: "Down Arrow",
    leftArrow: "Left Arrow",
    rightArrow: "Right Arrow",
    backspace: "Backspace",
    option: "Option",
    plus: "plus",
    shortcut: "Keyboard shortcut: {0}"
  },
  video: {
    play: "Play",
    pause: "Pause",
    seek: "Seek",
    volume: "Volume",
    showVolume: "Show volume control",
    mute: "Mute",
    unmute: "Unmute",
    enterFullscreen: "Full screen",
    exitFullscreen: "Exit full screen"
  },
  colorPicker: {
    ariaLabel: {
      eyedropper: "Select color with eyedropper",
      hueSlider: "Hue",
      alphaSlider: "Alpha",
      redInput: "Red value",
      greenInput: "Green value",
      blueInput: "Blue value",
      alphaInput: "Alpha value",
      hueInput: "Hue value",
      saturationInput: "Saturation value",
      lightnessInput: "Lightness value",
      hexInput: "HEX value",
      hexaInput: "HEX with alpha value",
      changeFormat: "Change color format"
    }
  }
}, Mi = "$vuetify.", Ai = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[Number(r)])), El = (e, t, n) => function(r) {
  for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++)
    i[s - 1] = arguments[s];
  if (!r.startsWith(Mi))
    return Ai(r, i);
  const l = r.replace(Mi, ""), c = e.value && n.value[e.value], p = t.value && n.value[t.value];
  let f = _i(c, l, null);
  return f || (Tt(`Translation key "${r}" not found in "${e.value}", trying fallback locale`), f = _i(p, l, null)), f || (Ti(`Translation key "${r}" not found in fallback`), f = r), typeof f != "string" && (Ti(`Translation key "${r}" has a non-string value`), f = r), Ai(f, i);
};
function So(e, t) {
  return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n);
}
function Nl(e, t) {
  return So(e, t)(0.1).includes(",") ? "," : ".";
}
function Pr(e, t, n) {
  const r = Tf(e, t, e[t] ?? n.value);
  return r.value = e[t] ?? n.value, Qe(n, (o) => {
    e[t] == null && (r.value = n.value);
  }), r;
}
function Dl(e) {
  return (t) => {
    const n = Pr(t, "locale", e.current), r = Pr(t, "fallback", e.fallback), o = Pr(t, "messages", e.messages);
    return {
      name: "vuetify",
      current: n,
      fallback: r,
      messages: o,
      decimalSeparator: ut(() => Nl(n, r)),
      t: El(n, r, o),
      n: So(n, r),
      provide: Dl({
        current: n,
        fallback: r,
        messages: o
      })
    };
  };
}
function $f(e) {
  const t = ht((e == null ? void 0 : e.locale) ?? "en"), n = ht((e == null ? void 0 : e.fallback) ?? "en"), r = Yt({
    en: Cf,
    ...e == null ? void 0 : e.messages
  });
  return {
    name: "vuetify",
    current: t,
    fallback: n,
    messages: r,
    decimalSeparator: ut(() => (e == null ? void 0 : e.decimalSeparator) ?? Nl(t, n)),
    t: El(t, n, r),
    n: So(t, n),
    provide: Dl({
      current: t,
      fallback: n,
      messages: r
    })
  };
}
const Fi = Symbol.for("vuetify:locale");
function Mf(e) {
  return e.name != null;
}
function Af(e) {
  const t = e != null && e.adapter && Mf(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : $f(e), n = If(t, e);
  return {
    ...t,
    ...n
  };
}
function Ff() {
  return {
    af: !1,
    ar: !0,
    bg: !1,
    ca: !1,
    ckb: !1,
    cs: !1,
    de: !1,
    el: !1,
    en: !1,
    es: !1,
    et: !1,
    fa: !0,
    fi: !1,
    fr: !1,
    hr: !1,
    hu: !1,
    he: !0,
    id: !1,
    it: !1,
    ja: !1,
    km: !1,
    ko: !1,
    lv: !1,
    lt: !1,
    nl: !1,
    no: !1,
    pl: !1,
    pt: !1,
    ro: !1,
    ru: !1,
    sk: !1,
    sl: !1,
    srCyrl: !1,
    srLatn: !1,
    sv: !1,
    th: !1,
    tr: !1,
    az: !1,
    uk: !1,
    vi: !1,
    zhHans: !1,
    zhHant: !1
  };
}
function If(e, t) {
  const n = Yt((t == null ? void 0 : t.rtl) ?? Ff()), r = Ke(() => n.value[e.current.value] ?? !1);
  return {
    isRtl: r,
    rtl: n,
    rtlClasses: ut(() => `v-locale--is-${r.value ? "rtl" : "ltr"}`)
  };
}
function Tn(e) {
  const t = e.slice(-2).toUpperCase();
  switch (!0) {
    case e === "GB-alt-variant":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    case e === "001":
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AG AS BD BR BS BT BW BZ CA CO DM DO ET GT GU HK HN ID IL IN JM JP KE
    KH KR LA MH MM MO MT MX MZ NI NP PA PE PH PK PR PY SA SG SV TH TT TW UM US
    VE VI WS YE ZA ZW`.includes(t):
      return {
        firstDay: 0,
        firstWeekSize: 1
      };
    case `AI AL AM AR AU AZ BA BM BN BY CL CM CN CR CY EC GE HR KG KZ LB LK LV
    MD ME MK MN MY NZ RO RS SI TJ TM TR UA UY UZ VN XK`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 1
      };
    case `AD AN AT AX BE BG CH CZ DE DK EE ES FI FJ FO FR GB GF GP GR HU IE IS
    IT LI LT LU MC MQ NL NO PL RE RU SE SK SM VA`.includes(t):
      return {
        firstDay: 1,
        firstWeekSize: 4
      };
    case "AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY".includes(t):
      return {
        firstDay: 6,
        firstWeekSize: 1
      };
    case t === "MV":
      return {
        firstDay: 5,
        firstWeekSize: 1
      };
    case t === "PT":
      return {
        firstDay: 0,
        firstWeekSize: 4
      };
    default:
      return null;
  }
}
function Pf(e, t, n) {
  var f;
  const r = [];
  let o = [];
  const i = Ol(e), s = wl(e), l = n ?? ((f = Tn(t)) == null ? void 0 : f.firstDay) ?? 0, c = (i.getDay() - l + 7) % 7, p = (s.getDay() - l + 7) % 7;
  for (let u = 0; u < c; u++) {
    const m = new Date(i);
    m.setDate(m.getDate() - (c - u)), o.push(m);
  }
  for (let u = 1; u <= s.getDate(); u++) {
    const m = new Date(e.getFullYear(), e.getMonth(), u);
    o.push(m), o.length === 7 && (r.push(o), o = []);
  }
  for (let u = 1; u < 7 - p; u++) {
    const m = new Date(s);
    m.setDate(m.getDate() + u), o.push(m);
  }
  return o.length > 0 && r.push(o), r;
}
function sr(e, t, n) {
  var i;
  let r = (n ?? ((i = Tn(t)) == null ? void 0 : i.firstDay) ?? 0) % 7;
  [0, 1, 2, 3, 4, 5, 6].includes(r) || (Tt("Invalid firstDayOfWeek, expected discrete number in range [0-6]"), r = 0);
  const o = new Date(e);
  for (; o.getDay() !== r; )
    o.setDate(o.getDate() - 1);
  return o;
}
function kf(e, t) {
  var o;
  const n = new Date(e), r = ((((o = Tn(t)) == null ? void 0 : o.firstDay) ?? 0) + 6) % 7;
  for (; n.getDay() !== r; )
    n.setDate(n.getDate() + 1);
  return n;
}
function Ol(e) {
  return new Date(e.getFullYear(), e.getMonth(), 1);
}
function wl(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0);
}
function Rf(e) {
  const t = e.split("-").map(Number);
  return new Date(t[0], t[1] - 1, t[2]);
}
const Lf = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;
function xl(e) {
  if (e == null) return /* @__PURE__ */ new Date();
  if (e instanceof Date) return e;
  if (typeof e == "string") {
    let t;
    if (Lf.test(e))
      return Rf(e);
    if (t = Date.parse(e), !isNaN(t)) return new Date(t);
  }
  return null;
}
const Ii = new Date(2e3, 0, 2);
function Hf(e, t, n) {
  var o;
  const r = t ?? ((o = Tn(e)) == null ? void 0 : o.firstDay) ?? 0;
  return hl(7).map((i) => {
    const s = new Date(Ii);
    return s.setDate(Ii.getDate() + r + i), new Intl.DateTimeFormat(e, {
      weekday: n ?? "narrow"
    }).format(s);
  });
}
function jf(e, t, n, r) {
  const o = xl(e) ?? /* @__PURE__ */ new Date(), i = r == null ? void 0 : r[t];
  if (typeof i == "function")
    return i(o, t, n);
  let s = {};
  switch (t) {
    case "fullDate":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric"
      };
      break;
    case "fullDateWithWeekday":
      s = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      };
      break;
    case "normalDate":
      const l = o.getDate(), c = new Intl.DateTimeFormat(n, {
        month: "long"
      }).format(o);
      return `${l} ${c}`;
    case "normalDateWithWeekday":
      s = {
        weekday: "short",
        day: "numeric",
        month: "short"
      };
      break;
    case "shortDate":
      s = {
        month: "short",
        day: "numeric"
      };
      break;
    case "year":
      s = {
        year: "numeric"
      };
      break;
    case "month":
      s = {
        month: "long"
      };
      break;
    case "monthShort":
      s = {
        month: "short"
      };
      break;
    case "monthAndYear":
      s = {
        month: "long",
        year: "numeric"
      };
      break;
    case "monthAndDate":
      s = {
        month: "long",
        day: "numeric"
      };
      break;
    case "weekday":
      s = {
        weekday: "long"
      };
      break;
    case "weekdayShort":
      s = {
        weekday: "short"
      };
      break;
    case "dayOfMonth":
      return new Intl.NumberFormat(n).format(o.getDate());
    case "hours12h":
      s = {
        hour: "numeric",
        hour12: !0
      };
      break;
    case "hours24h":
      s = {
        hour: "numeric",
        hour12: !1
      };
      break;
    case "minutes":
      s = {
        minute: "numeric"
      };
      break;
    case "seconds":
      s = {
        second: "numeric"
      };
      break;
    case "fullTime":
      s = {
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullTime12h":
      s = {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullTime24h":
      s = {
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "fullDateTime":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      };
      break;
    case "fullDateTime12h":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      };
      break;
    case "fullDateTime24h":
      s = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      };
      break;
    case "keyboardDate":
      s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      break;
    case "keyboardDateTime":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric"
      }, new Intl.DateTimeFormat(n, s).format(o).replace(/, /g, " ");
    case "keyboardDateTime12h":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }, new Intl.DateTimeFormat(n, s).format(o).replace(/, /g, " ");
    case "keyboardDateTime24h":
      return s = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        hour12: !1
      }, new Intl.DateTimeFormat(n, s).format(o).replace(/, /g, " ");
    default:
      s = i ?? {
        timeZone: "UTC",
        timeZoneName: "short"
      };
  }
  return new Intl.DateTimeFormat(n, s).format(o);
}
function Wf(e, t) {
  const n = e.toJsDate(t), r = n.getFullYear(), o = bi(String(n.getMonth() + 1), 2, "0"), i = bi(String(n.getDate()), 2, "0");
  return `${r}-${o}-${i}`;
}
function Bf(e) {
  const [t, n, r] = e.split("-").map(Number);
  return new Date(t, n - 1, r);
}
function Uf(e, t) {
  const n = new Date(e);
  return n.setMinutes(n.getMinutes() + t), n;
}
function Kf(e, t) {
  const n = new Date(e);
  return n.setHours(n.getHours() + t), n;
}
function Ct(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t), n;
}
function Yf(e, t) {
  const n = new Date(e);
  return n.setDate(n.getDate() + t * 7), n;
}
function Gf(e, t) {
  const n = new Date(e);
  return n.setDate(1), n.setMonth(n.getMonth() + t), n;
}
function bn(e) {
  return e.getFullYear();
}
function zf(e) {
  return e.getMonth();
}
function Zf(e, t, n, r) {
  const o = Tn(t), i = n ?? (o == null ? void 0 : o.firstDay) ?? 0, s = (o == null ? void 0 : o.firstWeekSize) ?? 1;
  return r !== void 0 ? Jf(e, t, i, r) : qf(e, t, i, s);
}
function Jf(e, t, n, r) {
  const o = (7 + r - n) % 7, i = sr(e, t, n), s = Ct(i, 6);
  function l(m) {
    return (7 + new Date(m, 0, 1).getDay() - n) % 7;
  }
  let c = bn(e);
  c < bn(s) && l(c + 1) <= o && c++;
  const p = new Date(c, 0, 1), f = l(c), u = f <= o ? Ct(p, -f) : Ct(p, 7 - f);
  return 1 + cr(Vo(e), En(u), "weeks");
}
function qf(e, t, n, r) {
  const o = Ct(sr(e, t, n), 6);
  function i(f) {
    const u = new Date(f, 0, 1);
    return 7 - cr(u, sr(u, t, n), "days");
  }
  let s = bn(e);
  s < bn(o) && i(s + 1) >= r && s++;
  const l = new Date(s, 0, 1), c = i(s), p = c >= r ? Ct(l, c - 7) : Ct(l, c);
  return 1 + cr(Vo(e), En(p), "weeks");
}
function Xf(e) {
  return e.getDate();
}
function Qf(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 1);
}
function ed(e) {
  return new Date(e.getFullYear(), e.getMonth() - 1, 1);
}
function td(e) {
  return e.getHours();
}
function nd(e) {
  return e.getMinutes();
}
function rd(e) {
  return new Date(e.getFullYear(), 0, 1);
}
function od(e) {
  return new Date(e.getFullYear(), 11, 31);
}
function id(e, t) {
  return lr(e, t[0]) && cd(e, t[1]);
}
function sd(e) {
  const t = new Date(e);
  return t instanceof Date && !isNaN(t.getTime());
}
function lr(e, t) {
  return e.getTime() > t.getTime();
}
function ld(e, t) {
  return lr(En(e), En(t));
}
function cd(e, t) {
  return e.getTime() < t.getTime();
}
function Pi(e, t) {
  return e.getTime() === t.getTime();
}
function ad(e, t) {
  return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function ud(e, t) {
  return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
}
function fd(e, t) {
  return e.getFullYear() === t.getFullYear();
}
function cr(e, t, n) {
  const r = new Date(e), o = new Date(t);
  switch (n) {
    case "years":
      return r.getFullYear() - o.getFullYear();
    case "quarters":
      return Math.floor((r.getMonth() - o.getMonth() + (r.getFullYear() - o.getFullYear()) * 12) / 4);
    case "months":
      return r.getMonth() - o.getMonth() + (r.getFullYear() - o.getFullYear()) * 12;
    case "weeks":
      return Math.floor((r.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24 * 7));
    case "days":
      return Math.floor((r.getTime() - o.getTime()) / (1e3 * 60 * 60 * 24));
    case "hours":
      return Math.floor((r.getTime() - o.getTime()) / (1e3 * 60 * 60));
    case "minutes":
      return Math.floor((r.getTime() - o.getTime()) / (1e3 * 60));
    case "seconds":
      return Math.floor((r.getTime() - o.getTime()) / 1e3);
    default:
      return r.getTime() - o.getTime();
  }
}
function dd(e, t) {
  const n = new Date(e);
  return n.setHours(t), n;
}
function pd(e, t) {
  const n = new Date(e);
  return n.setMinutes(t), n;
}
function hd(e, t) {
  const n = new Date(e);
  return n.setMonth(t), n;
}
function md(e, t) {
  const n = new Date(e);
  return n.setDate(t), n;
}
function gd(e, t) {
  const n = new Date(e);
  return n.setFullYear(t), n;
}
function En(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
}
function Vo(e) {
  return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999);
}
class _d {
  constructor(t) {
    this.locale = t.locale, this.formats = t.formats;
  }
  date(t) {
    return xl(t);
  }
  toJsDate(t) {
    return t;
  }
  toISO(t) {
    return Wf(this, t);
  }
  parseISO(t) {
    return Bf(t);
  }
  addMinutes(t, n) {
    return Uf(t, n);
  }
  addHours(t, n) {
    return Kf(t, n);
  }
  addDays(t, n) {
    return Ct(t, n);
  }
  addWeeks(t, n) {
    return Yf(t, n);
  }
  addMonths(t, n) {
    return Gf(t, n);
  }
  getWeekArray(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return Pf(t, this.locale, r);
  }
  startOfWeek(t, n) {
    const r = n !== void 0 ? Number(n) : void 0;
    return sr(t, this.locale, r);
  }
  endOfWeek(t) {
    return kf(t, this.locale);
  }
  startOfMonth(t) {
    return Ol(t);
  }
  endOfMonth(t) {
    return wl(t);
  }
  format(t, n) {
    return jf(t, n, this.locale, this.formats);
  }
  isEqual(t, n) {
    return Pi(t, n);
  }
  isValid(t) {
    return sd(t);
  }
  isWithinRange(t, n) {
    return id(t, n);
  }
  isAfter(t, n) {
    return lr(t, n);
  }
  isAfterDay(t, n) {
    return ld(t, n);
  }
  isBefore(t, n) {
    return !lr(t, n) && !Pi(t, n);
  }
  isSameDay(t, n) {
    return ad(t, n);
  }
  isSameMonth(t, n) {
    return ud(t, n);
  }
  isSameYear(t, n) {
    return fd(t, n);
  }
  setMinutes(t, n) {
    return pd(t, n);
  }
  setHours(t, n) {
    return dd(t, n);
  }
  setMonth(t, n) {
    return hd(t, n);
  }
  setDate(t, n) {
    return md(t, n);
  }
  setYear(t, n) {
    return gd(t, n);
  }
  getDiff(t, n, r) {
    return cr(t, n, r);
  }
  getWeekdays(t, n) {
    const r = t !== void 0 ? Number(t) : void 0;
    return Hf(this.locale, r, n);
  }
  getYear(t) {
    return bn(t);
  }
  getMonth(t) {
    return zf(t);
  }
  getWeek(t, n, r) {
    const o = n !== void 0 ? Number(n) : void 0, i = r !== void 0 ? Number(r) : void 0;
    return Zf(t, this.locale, o, i);
  }
  getDate(t) {
    return Xf(t);
  }
  getNextMonth(t) {
    return Qf(t);
  }
  getPreviousMonth(t) {
    return ed(t);
  }
  getHours(t) {
    return td(t);
  }
  getMinutes(t) {
    return nd(t);
  }
  startOfDay(t) {
    return En(t);
  }
  endOfDay(t) {
    return Vo(t);
  }
  startOfYear(t) {
    return rd(t);
  }
  endOfYear(t) {
    return od(t);
  }
}
const yd = Symbol.for("vuetify:date-options"), ki = Symbol.for("vuetify:date-adapter");
function vd(e, t) {
  const n = tt({
    adapter: _d,
    locale: {
      af: "af-ZA",
      // ar: '', # not the same value for all variants
      bg: "bg-BG",
      ca: "ca-ES",
      ckb: "",
      cs: "cs-CZ",
      de: "de-DE",
      el: "el-GR",
      en: "en-US",
      // es: '', # not the same value for all variants
      et: "et-EE",
      fa: "fa-IR",
      fi: "fi-FI",
      // fr: '', #not the same value for all variants
      hr: "hr-HR",
      hu: "hu-HU",
      he: "he-IL",
      id: "id-ID",
      it: "it-IT",
      ja: "ja-JP",
      ko: "ko-KR",
      lv: "lv-LV",
      lt: "lt-LT",
      nl: "nl-NL",
      no: "no-NO",
      pl: "pl-PL",
      pt: "pt-PT",
      ro: "ro-RO",
      ru: "ru-RU",
      sk: "sk-SK",
      sl: "sl-SI",
      srCyrl: "sr-SP",
      srLatn: "sr-SP",
      sv: "sv-SE",
      th: "th-TH",
      tr: "tr-TR",
      az: "az-AZ",
      uk: "uk-UA",
      vi: "vi-VN",
      zhHans: "zh-CN",
      zhHant: "zh-TW"
    }
  }, e);
  return {
    options: n,
    instance: bd(n, t)
  };
}
function bd(e, t) {
  const n = Kt(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return Qe(t.current, (r) => {
    n.locale = e.locale[r] ?? r ?? n.locale;
  }), n;
}
const Ri = Symbol.for("vuetify:display"), Li = {
  mobileBreakpoint: "lg",
  thresholds: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    xxl: 2560
  }
}, Ed = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Li;
  return tt(Li, e);
};
function Hi(e) {
  return Me && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0;
}
function ji(e) {
  return Me && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0;
}
function Wi(e) {
  const t = Me && !e ? window.navigator.userAgent : "ssr";
  function n(T) {
    return !!t.match(T);
  }
  const r = n(/android/i), o = n(/iphone|ipad|ipod/i), i = n(/cordova/i), s = n(/electron/i), l = n(/chrome/i), c = n(/edge/i), p = n(/firefox/i), f = n(/opera/i), u = n(/win/i), m = n(/mac/i), _ = n(/linux/i);
  return {
    android: r,
    ios: o,
    cordova: i,
    electron: s,
    chrome: l,
    edge: c,
    firefox: p,
    opera: f,
    win: u,
    mac: m,
    linux: _,
    touch: zu,
    ssr: t === "ssr"
  };
}
function Nd(e, t) {
  const {
    thresholds: n,
    mobileBreakpoint: r
  } = Ed(e), o = ht(ji(t)), i = ht(Wi(t)), s = Kt({}), l = ht(Hi(t));
  function c() {
    o.value = ji(), l.value = Hi();
  }
  function p() {
    c(), i.value = Wi();
  }
  return yo(() => {
    const f = l.value < n.sm, u = l.value < n.md && !f, m = l.value < n.lg && !(u || f), _ = l.value < n.xl && !(m || u || f), T = l.value < n.xxl && !(_ || m || u || f), C = l.value >= n.xxl, J = f ? "xs" : u ? "sm" : m ? "md" : _ ? "lg" : T ? "xl" : "xxl", F = typeof r == "number" ? r : n[r], w = l.value < F;
    s.xs = f, s.sm = u, s.md = m, s.lg = _, s.xl = T, s.xxl = C, s.smAndUp = !f, s.mdAndUp = !(f || u), s.lgAndUp = !(f || u || m), s.xlAndUp = !(f || u || m || _), s.smAndDown = !(m || _ || T || C), s.mdAndDown = !(_ || T || C), s.lgAndDown = !(T || C), s.xlAndDown = !C, s.name = J, s.height = o.value, s.width = l.value, s.mobile = w, s.mobileBreakpoint = r, s.platform = i.value, s.thresholds = n;
  }), Me && (window.addEventListener("resize", c, {
    passive: !0
  }), oo(() => {
    window.removeEventListener("resize", c);
  }, !0)), {
    ...Nc(s),
    update: p,
    ssr: !!t
  };
}
const Dd = Symbol.for("vuetify:goto");
function Od() {
  return {
    container: void 0,
    duration: 300,
    layout: !1,
    offset: 0,
    easing: "easeInOutCubic",
    patterns: Vf
  };
}
function wd(e, t) {
  return {
    rtl: t.isRtl,
    options: tt(Od(), e)
  };
}
const xd = {
  collapse: "mdi-chevron-up",
  complete: "mdi-check",
  cancel: "mdi-close-circle",
  close: "mdi-close",
  delete: "mdi-close-circle",
  // delete (e.g. v-chip close)
  clear: "mdi-close-circle",
  success: "mdi-check-circle",
  info: "mdi-information",
  warning: "mdi-alert-circle",
  error: "mdi-close-circle",
  prev: "mdi-chevron-left",
  next: "mdi-chevron-right",
  checkboxOn: "mdi-checkbox-marked",
  checkboxOff: "mdi-checkbox-blank-outline",
  checkboxIndeterminate: "mdi-minus-box",
  delimiter: "mdi-circle",
  // for carousel
  sortAsc: "mdi-arrow-up",
  sortDesc: "mdi-arrow-down",
  expand: "mdi-chevron-down",
  menu: "mdi-menu",
  subgroup: "mdi-menu-down",
  dropdown: "mdi-menu-down",
  radioOn: "mdi-radiobox-marked",
  radioOff: "mdi-radiobox-blank",
  edit: "mdi-pencil",
  ratingEmpty: "mdi-star-outline",
  ratingFull: "mdi-star",
  ratingHalf: "mdi-star-half-full",
  loading: "mdi-cached",
  first: "mdi-page-first",
  last: "mdi-page-last",
  unfold: "mdi-unfold-more-horizontal",
  file: "mdi-paperclip",
  plus: "mdi-plus",
  minus: "mdi-minus",
  calendar: "mdi-calendar",
  treeviewCollapse: "mdi-menu-down",
  treeviewExpand: "mdi-menu-right",
  tableGroupCollapse: "mdi-chevron-down",
  tableGroupExpand: "mdi-chevron-right",
  eyeDropper: "mdi-eyedropper",
  upload: "mdi-cloud-upload",
  color: "mdi-palette",
  command: "mdi-apple-keyboard-command",
  ctrl: "mdi-apple-keyboard-control",
  space: "mdi-keyboard-space",
  shift: "mdi-apple-keyboard-shift",
  alt: "mdi-apple-keyboard-option",
  enter: "mdi-keyboard-return",
  arrowup: "mdi-arrow-up",
  arrowdown: "mdi-arrow-down",
  arrowleft: "mdi-arrow-left",
  arrowright: "mdi-arrow-right",
  backspace: "mdi-backspace",
  play: "mdi-play",
  pause: "mdi-pause",
  fullscreen: "mdi-fullscreen",
  fullscreenExit: "mdi-fullscreen-exit",
  volumeHigh: "mdi-volume-high",
  volumeMedium: "mdi-volume-medium",
  volumeLow: "mdi-volume-low",
  volumeOff: "mdi-volume-variant-off"
}, Sd = {
  // Not using mergeProps here, functional components merge props by default (?)
  component: (e) => gu(Sl, {
    ...e,
    class: "mdi"
  })
}, Vd = [String, Function, Object, Array], Bi = Symbol.for("vuetify:icons"), br = vl({
  icon: {
    type: Vd
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: [String, Object, Function],
    required: !0
  }
}, "icon");
Sf()({
  name: "VComponentIcon",
  props: br(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const r = e.icon;
      return P(e.tag, null, {
        default: () => {
          var o;
          return [e.icon ? P(r, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
        }
      });
    };
  }
});
const Td = Vn({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: br(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => P(e.tag, al(n, {
      style: null
    }), {
      default: () => [se("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((r) => Array.isArray(r) ? se("path", {
        d: r[0],
        "fill-opacity": r[1]
      }, null) : se("path", {
        d: r
      }, null)) : se("path", {
        d: e.icon
      }, null)])]
    });
  }
});
Vn({
  name: "VLigatureIcon",
  props: br(),
  setup(e) {
    return () => P(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
const Sl = Vn({
  name: "VClassIcon",
  props: br(),
  setup(e) {
    return () => P(e.tag, {
      class: fr(e.icon)
    }, null);
  }
});
function Cd() {
  return {
    svg: {
      component: Td
    },
    class: {
      component: Sl
    }
  };
}
function $d(e) {
  const t = Cd(), n = (e == null ? void 0 : e.defaultSet) ?? "mdi";
  return n === "mdi" && !t.mdi && (t.mdi = Sd), tt({
    defaultSet: n,
    sets: t,
    aliases: {
      ...xd,
      /* eslint-disable max-len */
      vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", 0.6]],
      "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
      "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", 0.6]]
      /* eslint-enable max-len */
    }
  }, e);
}
const Ui = Symbol.for("vuetify:theme");
function Ki() {
  return {
    defaultTheme: "light",
    prefix: "v-",
    variations: {
      colors: [],
      lighten: 0,
      darken: 0
    },
    themes: {
      light: {
        dark: !1,
        colors: {
          background: "#FFFFFF",
          surface: "#FFFFFF",
          "surface-bright": "#FFFFFF",
          "surface-light": "#EEEEEE",
          "surface-variant": "#424242",
          "on-surface-variant": "#EEEEEE",
          primary: "#1867C0",
          "primary-darken-1": "#1F5592",
          secondary: "#48A9A6",
          "secondary-darken-1": "#018786",
          error: "#B00020",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#000000",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 0.87,
          "medium-emphasis-opacity": 0.6,
          "disabled-opacity": 0.38,
          "idle-opacity": 0.04,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.12,
          "dragged-opacity": 0.08,
          "theme-kbd": "#EEEEEE",
          "theme-on-kbd": "#000000",
          "theme-code": "#F5F5F5",
          "theme-on-code": "#000000"
        }
      },
      dark: {
        dark: !0,
        colors: {
          background: "#121212",
          surface: "#212121",
          "surface-bright": "#ccbfd6",
          "surface-light": "#424242",
          "surface-variant": "#c8c8c8",
          "on-surface-variant": "#000000",
          primary: "#2196F3",
          "primary-darken-1": "#277CC1",
          secondary: "#54B6B2",
          "secondary-darken-1": "#48A9A6",
          error: "#CF6679",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00"
        },
        variables: {
          "border-color": "#FFFFFF",
          "border-opacity": 0.12,
          "high-emphasis-opacity": 1,
          "medium-emphasis-opacity": 0.7,
          "disabled-opacity": 0.5,
          "idle-opacity": 0.1,
          "hover-opacity": 0.04,
          "focus-opacity": 0.12,
          "selected-opacity": 0.08,
          "activated-opacity": 0.12,
          "pressed-opacity": 0.16,
          "dragged-opacity": 0.08,
          "theme-kbd": "#424242",
          "theme-on-kbd": "#FFFFFF",
          "theme-code": "#343434",
          "theme-on-code": "#CCCCCC"
        }
      }
    },
    stylesheetId: "vuetify-theme-stylesheet",
    scoped: !1,
    unimportant: !1,
    utilities: !0
  };
}
function Md() {
  var r, o;
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ki();
  const t = Ki();
  if (!e) return {
    ...t,
    isDisabled: !0
  };
  const n = {};
  for (const [i, s] of Object.entries(e.themes ?? {})) {
    const l = s.dark || i === "dark" ? (r = t.themes) == null ? void 0 : r.dark : (o = t.themes) == null ? void 0 : o.light;
    n[i] = tt(l, s);
  }
  return tt(t, {
    ...e,
    themes: n
  });
}
function bt(e, t, n, r) {
  e.push(`${Pd(t, r)} {
`, ...n.map((o) => `  ${o};
`), `}
`);
}
function Yi(e, t) {
  const n = e.dark ? 2 : 1, r = e.dark ? 1 : 2, o = [];
  for (const [i, s] of Object.entries(e.colors)) {
    const l = Xe(s);
    o.push(`--${t}theme-${i}: ${l.r},${l.g},${l.b}`), i.startsWith("on-") || o.push(`--${t}theme-${i}-overlay-multiplier: ${Ef(s) > 0.18 ? n : r}`);
  }
  for (const [i, s] of Object.entries(e.variables)) {
    const l = typeof s == "string" && s.startsWith("#") ? Xe(s) : void 0, c = l ? `${l.r}, ${l.g}, ${l.b}` : void 0;
    o.push(`--${t}${i}: ${c ?? s}`);
  }
  return o;
}
function Ad(e, t, n) {
  const r = {};
  if (n)
    for (const o of ["lighten", "darken"]) {
      const i = o === "lighten" ? vf : bf;
      for (const s of hl(n[o], 1))
        r[`${e}-${o}-${s}`] = gf(i(Xe(t), s));
    }
  return r;
}
function Fd(e, t) {
  if (!t) return {};
  let n = {};
  for (const r of t.colors) {
    const o = e[r];
    o && (n = {
      ...n,
      ...Ad(r, o, t)
    });
  }
  return n;
}
function Id(e) {
  const t = {};
  for (const n of Object.keys(e)) {
    if (n.startsWith("on-") || e[`on-${n}`]) continue;
    const r = `on-${n}`, o = Xe(e[n]);
    t[r] = Nf(o);
  }
  return t;
}
function Pd(e, t) {
  if (!t) return e;
  const n = `:where(${t})`;
  return e === ":root" ? n : `${n} ${e}`;
}
function kd(e, t, n) {
  const r = Rd(e, t);
  r && (r.innerHTML = n);
}
function Rd(e, t) {
  if (!Me) return null;
  let n = document.getElementById(e);
  return n || (n = document.createElement("style"), n.id = e, n.type = "text/css", t && n.setAttribute("nonce", t), document.head.appendChild(n)), n;
}
function Ld(e) {
  const t = Md(e), n = ht(t.defaultTheme), r = Yt(t.themes), o = ht("light"), i = Ke({
    get() {
      return n.value === "system" ? o.value : n.value;
    },
    set(w) {
      n.value = w;
    }
  }), s = Ke(() => {
    const w = {};
    for (const [V, Y] of Object.entries(r.value)) {
      const $ = {
        ...Y.colors,
        ...Fd(Y.colors, t.variations)
      };
      w[V] = {
        ...Y,
        colors: {
          ...$,
          ...Id($)
        }
      };
    }
    return w;
  }), l = ut(() => s.value[i.value]), c = ut(() => n.value === "system"), p = Ke(() => {
    var $;
    const w = [], V = t.unimportant ? "" : " !important", Y = t.scoped ? t.prefix : "";
    ($ = l.value) != null && $.dark && bt(w, ":root", ["color-scheme: dark"], t.scope), bt(w, ":root", Yi(l.value, t.prefix), t.scope);
    for (const [H, ne] of Object.entries(s.value))
      bt(w, `.${t.prefix}theme--${H}`, [`color-scheme: ${ne.dark ? "dark" : "normal"}`, ...Yi(ne, t.prefix)], t.scope);
    if (t.utilities) {
      const H = [], ne = [], ae = new Set(Object.values(s.value).flatMap((Q) => Object.keys(Q.colors)));
      for (const Q of ae)
        Q.startsWith("on-") ? bt(ne, `.${Q}`, [`color: rgb(var(--${t.prefix}theme-${Q}))${V}`], t.scope) : (bt(H, `.${Y}bg-${Q}`, [`--${t.prefix}theme-overlay-multiplier: var(--${t.prefix}theme-${Q}-overlay-multiplier)`, `background-color: rgb(var(--${t.prefix}theme-${Q}))${V}`, `color: rgb(var(--${t.prefix}theme-on-${Q}))${V}`], t.scope), bt(ne, `.${Y}text-${Q}`, [`color: rgb(var(--${t.prefix}theme-${Q}))${V}`], t.scope), bt(ne, `.${Y}border-${Q}`, [`--${t.prefix}border-color: var(--${t.prefix}theme-${Q})`], t.scope));
      w.push(...H, ...ne);
    }
    return w.map((H, ne) => ne === 0 ? H : `    ${H}`).join("");
  }), f = ut(() => t.isDisabled ? void 0 : `${t.prefix}theme--${i.value}`), u = ut(() => Object.keys(s.value));
  if (Zu) {
    let V = function() {
      o.value = w.matches ? "dark" : "light";
    };
    var F = V;
    const w = window.matchMedia("(prefers-color-scheme: dark)");
    V(), w.addEventListener("change", V, {
      passive: !0
    }), is() && oo(() => {
      w.removeEventListener("change", V);
    });
  }
  function m(w) {
    if (t.isDisabled) return;
    const V = w._context.provides.usehead;
    if (V) {
      let H = function() {
        return {
          style: [{
            textContent: p.value,
            id: t.stylesheetId,
            nonce: t.cspNonce || !1
          }]
        };
      };
      var Y = H;
      if (V.push) {
        const ne = V.push(H);
        Me && Qe(p, () => {
          ne.patch(H);
        });
      } else
        Me ? (V.addHeadObjs(ut(H)), yo(() => V.updateDOM())) : V.addHeadObjs(H());
    } else {
      let H = function() {
        kd(t.stylesheetId, t.cspNonce, p.value);
      };
      var $ = H;
      Me ? Qe(p, H, {
        immediate: !0
      }) : H();
    }
  }
  function _(w) {
    if (w !== "system" && !u.value.includes(w)) {
      Tt(`Theme "${w}" not found on the Vuetify theme instance`);
      return;
    }
    i.value = w;
  }
  function T() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.value;
    const V = w.indexOf(i.value), Y = V === -1 ? 0 : (V + 1) % w.length;
    _(w[Y]);
  }
  function C() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["light", "dark"];
    T(w);
  }
  const J = new Proxy(i, {
    get(w, V) {
      return Reflect.get(w, V);
    },
    set(w, V, Y) {
      return V === "value" && cf(`theme.global.name.value = ${Y}`, `theme.change('${Y}')`), Reflect.set(w, V, Y);
    }
  });
  return {
    install: m,
    change: _,
    cycle: T,
    toggle: C,
    isDisabled: t.isDisabled,
    isSystem: c,
    name: i,
    themes: r,
    current: l,
    computedThemes: s,
    prefix: t.prefix,
    themeClasses: f,
    styles: p,
    global: {
      name: J,
      current: l
    }
  };
}
function Vl() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    blueprint: t,
    ...n
  } = e, r = tt(t, n), {
    aliases: o = {},
    components: i = {},
    directives: s = {}
  } = r, l = Rr();
  return l.run(() => {
    const c = Of(r.defaults), p = Nd(r.display, r.ssr), f = Ld(r.theme), u = $d(r.icons), m = Af(r.locale), _ = vd(r.date, m), T = wd(r.goTo, m);
    function C(F) {
      for (const V in s)
        F.directive(V, s[V]);
      for (const V in i)
        F.component(V, i[V]);
      for (const V in o)
        F.component(V, Vn({
          ...o[V],
          name: V,
          aliasName: o[V].name
        }));
      const w = Rr();
      if (w.run(() => {
        f.install(F);
      }), F.onUnmount(() => w.stop()), F.provide(vn, c), F.provide(Ri, p), F.provide(Ui, f), F.provide(Bi, u), F.provide(Fi, m), F.provide(yd, _.options), F.provide(ki, _.instance), F.provide(Dd, T), Me && r.ssr)
        if (F.$nuxt)
          F.$nuxt.hook("app:suspense:resolve", () => {
            p.update();
          });
        else {
          const {
            mount: V
          } = F;
          F.mount = function() {
            const Y = V(...arguments);
            return Ss(() => p.update()), F.mount = V, Y;
          };
        }
      F.mixin({
        computed: {
          $vuetify() {
            return Kt({
              defaults: Rt.call(this, vn),
              display: Rt.call(this, Ri),
              theme: Rt.call(this, Ui),
              icons: Rt.call(this, Bi),
              locale: Rt.call(this, Fi),
              date: Rt.call(this, ki)
            });
          }
        }
      });
    }
    function J() {
      l.stop();
    }
    return {
      install: C,
      unmount: J,
      defaults: c,
      display: p,
      theme: f,
      icons: u,
      locale: m,
      date: _,
      goTo: T
    };
  });
}
const Hd = "3.10.3";
Vl.version = Hd;
function Rt(e) {
  var r, o;
  const t = this.$, n = ((r = t.parent) == null ? void 0 : r.provides) ?? ((o = t.vnode.appContext) == null ? void 0 : o.provides);
  if (n && e in n)
    return n[e];
}
const Tl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, jd = {};
function Wd(e, t) {
  const n = ee("v-toolbar-title"), r = ee("v-spacer"), o = ee("v-btn"), i = ee("v-app-bar"), s = ee("v-app");
  return dt(), Vt(s, null, {
    default: z(() => [
      P(i, {
        color: "primary",
        density: "comfortable"
      }, {
        default: z(() => [
          P(n, { class: "text-white" }, {
            default: z(() => [...t[0] || (t[0] = [
              se("a", {
                href: "/",
                style: { "text-decoration": "none" },
                class: "text-white"
              }, "GameSite", -1)
            ])]),
            _: 1
          }),
          P(r),
          P(o, {
            variant: "text",
            href: "/"
          }, {
            default: z(() => [...t[1] || (t[1] = [
              Ve("Главная", -1)
            ])]),
            _: 1
          }),
          P(o, {
            variant: "text",
            href: "/games/"
          }, {
            default: z(() => [...t[2] || (t[2] = [
              Ve("Все игры", -1)
            ])]),
            _: 1
          }),
          P(o, {
            variant: "text",
            href: "/upload/"
          }, {
            default: z(() => [...t[3] || (t[3] = [
              Ve("Загрузить игру", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const Cl = /* @__PURE__ */ Tl(jd, [["render", Wd]]), Bd = {};
function Ud(e, t) {
  const n = ee("v-col"), r = ee("v-row"), o = ee("v-container"), i = ee("v-footer"), s = ee("v-app");
  return dt(), Vt(s, null, {
    default: z(() => [
      P(i, {
        app: "",
        color: "primary",
        class: "pa-6"
      }, {
        default: z(() => [
          P(o, null, {
            default: z(() => [
              P(r, null, {
                default: z(() => [
                  P(n, {
                    cols: "12",
                    md: "6",
                    class: "text-white"
                  }, {
                    default: z(() => [...t[0] || (t[0] = [
                      se("strong", null, "GameSite", -1),
                      se("div", null, "Платформа для загрузки и обмена играми", -1)
                    ])]),
                    _: 1
                  }),
                  P(n, {
                    cols: "12",
                    md: "6",
                    class: "text-white text-md-right"
                  }, {
                    default: z(() => [...t[1] || (t[1] = [
                      se("div", null, "© 2024 GameSite. Все права защищены.", -1)
                    ])]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const $l = /* @__PURE__ */ Tl(Bd, [["render", Ud]]), Kd = { class: "d-flex align-center mb-6" }, Yd = { class: "text-body-2 mb-2" }, Gd = { class: "d-flex justify-space-between align-center mb-2" }, zd = { class: "text-success text-h6" }, Zd = { class: "d-flex justify-space-between text-medium-emphasis text-caption" }, Ml = {
  __name: "GameList",
  props: {
    games: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (t, n) => {
      const r = ee("v-icon"), o = ee("v-progress-circular"), i = ee("v-row"), s = ee("v-img"), l = ee("v-card-title"), c = ee("v-card-subtitle"), p = ee("v-card-item"), f = ee("v-chip"), u = ee("v-card-text"), m = ee("v-btn"), _ = ee("v-card-actions"), T = ee("v-card"), C = ee("v-col"), J = ee("v-alert"), F = ee("v-container");
      return dt(), Vt(F, { class: "py-8" }, {
        default: z(() => [
          se("div", Kd, [
            P(r, {
              icon: "mdi-format-list-bulleted",
              class: "me-2"
            }),
            n[0] || (n[0] = se("h1", { class: "mb-0" }, "Все игры", -1))
          ]),
          P(i, null, {
            default: z(() => [
              (dt(!0), tu(Te, null, pa(e.games, (w) => (dt(), Vt(C, {
                key: w.id,
                cols: "12",
                md: "6",
                lg: "4",
                class: "mb-4"
              }, {
                default: z(() => [
                  P(T, {
                    class: "h-100",
                    elevation: "3"
                  }, {
                    default: z(() => [
                      P(s, {
                        src: w.image_url,
                        height: "220",
                        cover: ""
                      }, {
                        placeholder: z(() => [
                          P(i, {
                            class: "fill-height ma-0",
                            align: "center",
                            justify: "center"
                          }, {
                            default: z(() => [
                              P(o, {
                                indeterminate: "",
                                color: "primary"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["src"]),
                      P(p, null, {
                        default: z(() => [
                          P(l, { class: "text-h6" }, {
                            default: z(() => [
                              Ve(lt(w.title), 1)
                            ]),
                            _: 2
                          }, 1024),
                          P(c, { class: "d-flex align-center" }, {
                            default: z(() => [
                              P(r, {
                                icon: "mdi-account",
                                size: "18",
                                class: "me-1"
                              }),
                              Ve(" " + lt(w.developer), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      P(u, null, {
                        default: z(() => [
                          se("div", Yd, lt(w.description), 1),
                          se("div", Gd, [
                            P(f, {
                              color: "primary",
                              size: "small",
                              variant: "elevated"
                            }, {
                              default: z(() => [
                                Ve(lt(w.genre), 1)
                              ]),
                              _: 2
                            }, 1024),
                            se("div", zd, lt(w.price) + " $", 1)
                          ]),
                          se("div", Zd, [
                            se("span", null, [
                              P(r, {
                                icon: "mdi-calendar",
                                size: "16",
                                class: "me-1"
                              }),
                              Ve(lt(w.release_date), 1)
                            ]),
                            se("span", null, [
                              P(r, {
                                icon: "mdi-account",
                                size: "16",
                                class: "me-1"
                              }),
                              Ve(lt(w.uploaded_by), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1024),
                      P(_, null, {
                        default: z(() => [
                          P(m, {
                            href: w.detail_url,
                            color: "primary",
                            block: "",
                            "prepend-icon": "mdi-eye"
                          }, {
                            default: z(() => [...n[1] || (n[1] = [
                              Ve("Подробнее", -1)
                            ])]),
                            _: 1
                          }, 8, ["href"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 1
          }),
          !e.games || e.games.length === 0 ? (dt(), Vt(J, {
            key: 0,
            type: "info",
            variant: "tonal",
            class: "text-center"
          }, {
            default: z(() => [...n[2] || (n[2] = [
              Ve(" Пока нет загруженных игр. ", -1)
            ])]),
            _: 1
          })) : ou("", !0)
        ]),
        _: 1
      });
    };
  }
}, Jd = {
  __name: "App",
  setup(e) {
    return (t, n) => {
      const r = ee("v-container"), o = ee("v-main"), i = ee("v-app");
      return dt(), Vt(i, null, {
        default: z(() => [
          P(Cl),
          P(o, null, {
            default: z(() => [
              P(r, null, {
                default: z(() => [
                  n[0] || (n[0] = se("h1", { class: "text-h3 mb-6" }, "Добро пожаловать на GameSite!", -1)),
                  P(Ml)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          P($l)
        ]),
        _: 1
      });
    };
  }
}, Er = Vl(), Gi = document.getElementById("app");
Gi && vr(Jd).use(Er).mount(Gi);
const zi = document.getElementById("app-header");
zi && vr(Cl).use(Er).mount(zi);
const Zi = document.getElementById("app-footer");
Zi && vr($l).use(Er).mount(Zi);
const kr = document.getElementById("game-list-root");
if (kr) {
  let e = [];
  try {
    const n = kr.getAttribute("data-games") || "[]";
    e = JSON.parse(n);
  } catch (n) {
    console.error("Failed to parse games JSON from data attribute", n);
  }
  const t = vr(Ml, { games: e });
  t.use(Er), t.mount(kr);
}
