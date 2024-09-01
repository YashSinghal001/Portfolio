(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ks = { exports: {} },
  tl = {},
  Gs = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gn = Symbol.for("react.element"),
  ac = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  dc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  pc = Symbol.for("react.context"),
  hc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  vc = Symbol.for("react.memo"),
  gc = Symbol.for("react.lazy"),
  Do = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Do && e[Do]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zs = Object.assign,
  Js = {};
function ln(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Js),
    (this.updater = n || Xs);
}
ln.prototype.isReactComponent = {};
ln.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ln.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function qs() {}
qs.prototype = ln.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Js),
    (this.updater = n || Xs);
}
var $i = (Ui.prototype = new qs());
$i.constructor = Ui;
Zs($i, ln.prototype);
$i.isPureReactComponent = !0;
var Fo = Array.isArray,
  bs = Object.prototype.hasOwnProperty,
  Hi = { current: null },
  ea = { key: !0, ref: !0, __self: !0, __source: !0 };
function ta(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      bs.call(t, r) && !ea.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Gn,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Hi.current,
  };
}
function xc(e, t) {
  return {
    $$typeof: Gn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gn;
}
function wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ao = /\/+/g;
function wl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wc("" + e.key)
    : t.toString(36);
}
function yr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Gn:
          case ac:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + wl(s, 0) : r),
      Fo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ao, "$&/") + "/"),
          yr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Wi(l) &&
            (l = xc(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ao, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Fo(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var u = r + wl(i, a);
      s += yr(i, t, n, u, l);
    }
  else if (((u = yc(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + wl(i, a++)), (s += yr(i, t, n, u, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function tr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    yr(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function kc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null },
  xr = { transition: null },
  jc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Hi,
  };
function na() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: tr,
  forEach: function (e, t, n) {
    tr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      tr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      tr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = ln;
L.Fragment = uc;
L.Profiler = dc;
L.PureComponent = Ui;
L.StrictMode = cc;
L.Suspense = mc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jc;
L.act = na;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Zs({}, e.props),
    l = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = Hi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      bs.call(t, u) &&
        !ea.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var d = 0; d < u; d++) a[d] = arguments[d + 2];
    r.children = a;
  }
  return { $$typeof: Gn, type: e.type, key: l, ref: i, props: r, _owner: s };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: pc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fc, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = ta;
L.createFactory = function (e) {
  var t = ta.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: hc, render: e };
};
L.isValidElement = Wi;
L.lazy = function (e) {
  return { $$typeof: gc, _payload: { _status: -1, _result: e }, _init: kc };
};
L.memo = function (e, t) {
  return { $$typeof: vc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
L.unstable_act = na;
L.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function (e) {
  return se.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function () {
  return se.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return se.current.useRef(e);
};
L.useState = function (e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return se.current.useTransition();
};
L.version = "18.3.1";
Gs.exports = L;
var je = Gs.exports;
const wr = sc(je);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = je,
  Cc = Symbol.for("react.element"),
  Nc = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  _c = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ra(e, t, n) {
  var r,
    l = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Ec.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Cc,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: _c.current,
  };
}
tl.Fragment = Nc;
tl.jsx = ra;
tl.jsxs = ra;
Ks.exports = tl;
var o = Ks.exports,
  Yl = {},
  la = { exports: {} },
  ye = {},
  ia = { exports: {} },
  oa = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var T = C.length;
    C.push(P);
    e: for (; 0 < T; ) {
      var V = (T - 1) >>> 1,
        X = C[V];
      if (0 < l(X, P)) (C[V] = P), (C[T] = X), (T = V);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0],
      T = C.pop();
    if (T !== P) {
      C[0] = T;
      e: for (var V = 0, X = C.length, bn = X >>> 1; V < bn; ) {
        var vt = 2 * (V + 1) - 1,
          xl = C[vt],
          gt = vt + 1,
          er = C[gt];
        if (0 > l(xl, T))
          gt < X && 0 > l(er, xl)
            ? ((C[V] = er), (C[gt] = T), (V = gt))
            : ((C[V] = xl), (C[vt] = T), (V = vt));
        else if (gt < X && 0 > l(er, T)) (C[V] = er), (C[gt] = T), (V = gt);
        else break e;
      }
    }
    return P;
  }
  function l(C, P) {
    var T = C.sortIndex - P.sortIndex;
    return T !== 0 ? T : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var u = [],
    d = [],
    v = 1,
    m = null,
    h = 3,
    x = !1,
    w = !1,
    k = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(C) {
    for (var P = n(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= C)
        r(d), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(d);
    }
  }
  function g(C) {
    if (((k = !1), p(C), !w))
      if (n(u) !== null) (w = !0), gl(S);
      else {
        var P = n(d);
        P !== null && yl(g, P.startTime - C);
      }
  }
  function S(C, P) {
    (w = !1), k && ((k = !1), f(_), (_ = -1)), (x = !0);
    var T = h;
    try {
      for (
        p(P), m = n(u);
        m !== null && (!(m.expirationTime > P) || (C && !_e()));

      ) {
        var V = m.callback;
        if (typeof V == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var X = V(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == "function" ? (m.callback = X) : m === n(u) && r(u),
            p(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var bn = !0;
      else {
        var vt = n(d);
        vt !== null && yl(g, vt.startTime - P), (bn = !1);
      }
      return bn;
    } finally {
      (m = null), (h = T), (x = !1);
    }
  }
  var N = !1,
    E = null,
    _ = -1,
    W = 5,
    z = -1;
  function _e() {
    return !(e.unstable_now() - z < W);
  }
  function an() {
    if (E !== null) {
      var C = e.unstable_now();
      z = C;
      var P = !0;
      try {
        P = E(!0, C);
      } finally {
        P ? un() : ((N = !1), (E = null));
      }
    } else N = !1;
  }
  var un;
  if (typeof c == "function")
    un = function () {
      c(an);
    };
  else if (typeof MessageChannel < "u") {
    var Oo = new MessageChannel(),
      oc = Oo.port2;
    (Oo.port1.onmessage = an),
      (un = function () {
        oc.postMessage(null);
      });
  } else
    un = function () {
      F(an, 0);
    };
  function gl(C) {
    (E = C), N || ((N = !0), un());
  }
  function yl(C, P) {
    _ = F(function () {
      C(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), gl(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (W = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var T = h;
      h = P;
      try {
        return C();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var T = h;
      h = C;
      try {
        return P();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, T) {
      var V = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? V + T : V))
          : (T = V),
        C)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = T + X),
        (C = {
          id: v++,
          callback: P,
          priorityLevel: C,
          startTime: T,
          expirationTime: X,
          sortIndex: -1,
        }),
        T > V
          ? ((C.sortIndex = T),
            t(d, C),
            n(u) === null &&
              C === n(d) &&
              (k ? (f(_), (_ = -1)) : (k = !0), yl(g, T - V)))
          : ((C.sortIndex = X), t(u, C), w || x || ((w = !0), gl(S))),
        C
      );
    }),
    (e.unstable_shouldYield = _e),
    (e.unstable_wrapCallback = function (C) {
      var P = h;
      return function () {
        var T = h;
        h = P;
        try {
          return C.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    });
})(oa);
ia.exports = oa;
var Tc = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lc = je,
  ge = Tc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var sa = new Set(),
  zn = {};
function Lt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (zn[e] = t, e = 0; e < t.length; e++) sa.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  zc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bo = {},
  Uo = {};
function Mc(e) {
  return Kl.call(Uo, e)
    ? !0
    : Kl.call(Bo, e)
    ? !1
    : zc.test(e)
    ? (Uo[e] = !0)
    : ((Bo[e] = !0), !1);
}
function Ic(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Rc(e, t, n, r) {
  if (t === null || typeof t > "u" || Ic(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vi = /[\-:]([a-z])/g;
function Qi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Qi);
    ee[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Vi, Qi);
    ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Vi, Qi);
  ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Yi(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Rc(t, n, l, r) && (n = null),
    r || l === null
      ? Mc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xe = Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  It = Symbol.for("react.portal"),
  Rt = Symbol.for("react.fragment"),
  Ki = Symbol.for("react.strict_mode"),
  Gl = Symbol.for("react.profiler"),
  aa = Symbol.for("react.provider"),
  ua = Symbol.for("react.context"),
  Gi = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  Xi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ca = Symbol.for("react.offscreen"),
  $o = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($o && e[$o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var $ = Object.assign,
  kl;
function yn(e) {
  if (kl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      kl = (t && t[1]) || "";
    }
  return (
    `
` +
    kl +
    e
  );
}
var jl = !1;
function Sl(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          i = r.stack.split(`
`),
          s = l.length - 1,
          a = i.length - 1;
        1 <= s && 0 <= a && l[s] !== i[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (l[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || l[s] !== i[a])) {
                var u =
                  `
` + l[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? yn(e) : "";
}
function Oc(e) {
  switch (e.tag) {
    case 5:
      return yn(e.type);
    case 16:
      return yn("Lazy");
    case 13:
      return yn("Suspense");
    case 19:
      return yn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Sl(e.type, !1)), e;
    case 11:
      return (e = Sl(e.type.render, !1)), e;
    case 1:
      return (e = Sl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rt:
      return "Fragment";
    case It:
      return "Portal";
    case Gl:
      return "Profiler";
    case Ki:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ua:
        return (e.displayName || "Context") + ".Consumer";
      case aa:
        return (e._context.displayName || "Context") + ".Provider";
      case Gi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xi:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function Dc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === Ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function da(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Fc(e) {
  var t = da(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Fc(e));
}
function fa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = da(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function zr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return $({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ho(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = dt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function pa(e, t) {
  (t = t.checked), t != null && Yi(e, "checked", t, !1);
}
function bl(e, t) {
  pa(e, t);
  var n = dt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ei(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ei(e, t.type, dt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Wo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ei(e, t, n) {
  (t !== "number" || zr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + dt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ti(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return $({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: dt(n) };
}
function ha(e, t) {
  var n = dt(t.value),
    r = dt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Qo(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ma(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ni(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ma(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  va = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Mn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ac = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function (e) {
  Ac.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jn[t] = jn[e]);
  });
});
function ga(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (jn.hasOwnProperty(e) && jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ya(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = ga(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Bc = $(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ri(e, t) {
  if (t) {
    if (Bc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function li(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ii = null;
function Zi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oi = null,
  Yt = null,
  Kt = null;
function Yo(e) {
  if ((e = Jn(e))) {
    if (typeof oi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ol(t)), oi(e.stateNode, e.type, t));
  }
}
function xa(e) {
  Yt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Yt = e);
}
function wa() {
  if (Yt) {
    var e = Yt,
      t = Kt;
    if (((Kt = Yt = null), Yo(e), t)) for (e = 0; e < t.length; e++) Yo(t[e]);
  }
}
function ka(e, t) {
  return e(t);
}
function ja() {}
var Cl = !1;
function Sa(e, t, n) {
  if (Cl) return e(t, n);
  Cl = !0;
  try {
    return ka(e, t, n);
  } finally {
    (Cl = !1), (Yt !== null || Kt !== null) && (ja(), wa());
  }
}
function In(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = ol(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var si = !1;
if (Qe)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        si = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    si = !1;
  }
function Uc(e, t, n, r, l, i, s, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (v) {
    this.onError(v);
  }
}
var Sn = !1,
  Mr = null,
  Ir = !1,
  ai = null,
  $c = {
    onError: function (e) {
      (Sn = !0), (Mr = e);
    },
  };
function Hc(e, t, n, r, l, i, s, a, u) {
  (Sn = !1), (Mr = null), Uc.apply($c, arguments);
}
function Wc(e, t, n, r, l, i, s, a, u) {
  if ((Hc.apply(this, arguments), Sn)) {
    if (Sn) {
      var d = Mr;
      (Sn = !1), (Mr = null);
    } else throw Error(y(198));
    Ir || ((Ir = !0), (ai = d));
  }
}
function zt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ca(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ko(e) {
  if (zt(e) !== e) throw Error(y(188));
}
function Vc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Ko(l), e;
        if (i === r) return Ko(l), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var s = !1, a = l.child; a; ) {
        if (a === n) {
          (s = !0), (n = l), (r = i);
          break;
        }
        if (a === r) {
          (s = !0), (r = l), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = i.child; a; ) {
          if (a === n) {
            (s = !0), (n = i), (r = l);
            break;
          }
          if (a === r) {
            (s = !0), (r = i), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Na(e) {
  return (e = Vc(e)), e !== null ? Ea(e) : null;
}
function Ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var _a = ge.unstable_scheduleCallback,
  Go = ge.unstable_cancelCallback,
  Qc = ge.unstable_shouldYield,
  Yc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Kc = ge.unstable_getCurrentPriorityLevel,
  Ji = ge.unstable_ImmediatePriority,
  Pa = ge.unstable_UserBlockingPriority,
  Rr = ge.unstable_NormalPriority,
  Gc = ge.unstable_LowPriority,
  Ta = ge.unstable_IdlePriority,
  nl = null,
  Ae = null;
function Xc(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function")
    try {
      Ae.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : qc,
  Zc = Math.log,
  Jc = Math.LN2;
function qc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zc(e) / Jc) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function wn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Or(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~l;
    a !== 0 ? (r = wn(a)) : ((i &= s), i !== 0 && (r = wn(i)));
  } else (s = n & ~l), s !== 0 ? (r = wn(s)) : i !== 0 && (r = wn(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Me(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function bc(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ed(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - Me(i),
      a = 1 << s,
      u = l[s];
    u === -1
      ? (!(a & n) || a & r) && (l[s] = bc(a, t))
      : u <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function ui(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function La() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Nl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Me(t)),
    (e[t] = n);
}
function td(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var I = 0;
function za(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ma,
  bi,
  Ia,
  Ra,
  Oa,
  ci = !1,
  sr = [],
  rt = null,
  lt = null,
  it = null,
  Rn = new Map(),
  On = new Map(),
  be = [],
  nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xo(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      Rn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      On.delete(t.pointerId);
  }
}
function fn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = Jn(t)), t !== null && bi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function rd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = fn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = fn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (it = fn(it, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Rn.set(i, fn(Rn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), On.set(i, fn(On.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Da(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = zt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ca(n)), t !== null)) {
          (e.blockedOn = t),
            Oa(e.priority, function () {
              Ia(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function kr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ii = r), n.target.dispatchEvent(r), (ii = null);
    } else return (t = Jn(n)), t !== null && bi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Zo(e, t, n) {
  kr(e) && n.delete(t);
}
function ld() {
  (ci = !1),
    rt !== null && kr(rt) && (rt = null),
    lt !== null && kr(lt) && (lt = null),
    it !== null && kr(it) && (it = null),
    Rn.forEach(Zo),
    On.forEach(Zo);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ld)));
}
function Dn(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < sr.length) {
    pn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && pn(rt, e),
      lt !== null && pn(lt, e),
      it !== null && pn(it, e),
      Rn.forEach(t),
      On.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Da(n), n.blockedOn === null && be.shift();
}
var Gt = Xe.ReactCurrentBatchConfig,
  Dr = !0;
function id(e, t, n, r) {
  var l = I,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (I = 1), eo(e, t, n, r);
  } finally {
    (I = l), (Gt.transition = i);
  }
}
function od(e, t, n, r) {
  var l = I,
    i = Gt.transition;
  Gt.transition = null;
  try {
    (I = 4), eo(e, t, n, r);
  } finally {
    (I = l), (Gt.transition = i);
  }
}
function eo(e, t, n, r) {
  if (Dr) {
    var l = di(e, t, n, r);
    if (l === null) Ol(e, t, r, Fr, n), Xo(e, r);
    else if (rd(l, e, t, n, r)) r.stopPropagation();
    else if ((Xo(e, r), t & 4 && -1 < nd.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jn(l);
        if (
          (i !== null && Ma(i),
          (i = di(e, t, n, r)),
          i === null && Ol(e, t, r, Fr, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var Fr = null;
function di(e, t, n, r) {
  if (((Fr = null), (e = Zi(r)), (e = wt(e)), e !== null))
    if (((t = zt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ca(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Fr = e), null;
}
function Fa(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Kc()) {
        case Ji:
          return 1;
        case Pa:
          return 4;
        case Rr:
        case Gc:
          return 16;
        case Ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  to = null,
  jr = null;
function Aa() {
  if (jr) return jr;
  var e,
    t = to,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === l[i - r]; r++);
  return (jr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function Jo() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, s) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ar
        : Jo),
      (this.isPropagationStopped = Jo),
      this
    );
  }
  return (
    $(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = xe(on),
  Zn = $({}, on, { view: 0, detail: 0 }),
  sd = xe(Zn),
  El,
  _l,
  hn,
  rl = $({}, Zn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ro,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((El = e.screenX - hn.screenX), (_l = e.screenY - hn.screenY))
              : (_l = El = 0),
            (hn = e)),
          El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : _l;
    },
  }),
  qo = xe(rl),
  ad = $({}, rl, { dataTransfer: 0 }),
  ud = xe(ad),
  cd = $({}, Zn, { relatedTarget: 0 }),
  Pl = xe(cd),
  dd = $({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fd = xe(dd),
  pd = $({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hd = xe(pd),
  md = $({}, on, { data: 0 }),
  bo = xe(md),
  vd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  gd = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  yd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = yd[e]) ? !!t[e] : !1;
}
function ro() {
  return xd;
}
var wd = $({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = vd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? gd[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ro,
    charCode: function (e) {
      return e.type === "keypress" ? Sr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  kd = xe(wd),
  jd = $({}, rl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  es = xe(jd),
  Sd = $({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  Cd = xe(Sd),
  Nd = $({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ed = xe(Nd),
  _d = $({}, rl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Pd = xe(_d),
  Td = [9, 13, 27, 32],
  lo = Qe && "CompositionEvent" in window,
  Cn = null;
Qe && "documentMode" in document && (Cn = document.documentMode);
var Ld = Qe && "TextEvent" in window && !Cn,
  Ba = Qe && (!lo || (Cn && 8 < Cn && 11 >= Cn)),
  ts = " ",
  ns = !1;
function Ua(e, t) {
  switch (e) {
    case "keyup":
      return Td.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $a(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ot = !1;
function zd(e, t) {
  switch (e) {
    case "compositionend":
      return $a(t);
    case "keypress":
      return t.which !== 32 ? null : ((ns = !0), ts);
    case "textInput":
      return (e = t.data), e === ts && ns ? null : e;
    default:
      return null;
  }
}
function Md(e, t) {
  if (Ot)
    return e === "compositionend" || (!lo && Ua(e, t))
      ? ((e = Aa()), (jr = to = tt = null), (Ot = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ba && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Id = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rs(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Id[e.type] : t === "textarea";
}
function Ha(e, t, n, r) {
  xa(r),
    (t = Ar(t, "onChange")),
    0 < t.length &&
      ((n = new no("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Nn = null,
  Fn = null;
function Rd(e) {
  ba(e, 0);
}
function ll(e) {
  var t = At(e);
  if (fa(t)) return e;
}
function Od(e, t) {
  if (e === "change") return t;
}
var Wa = !1;
if (Qe) {
  var Tl;
  if (Qe) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"),
        (Ll = typeof ls.oninput == "function");
    }
    Tl = Ll;
  } else Tl = !1;
  Wa = Tl && (!document.documentMode || 9 < document.documentMode);
}
function is() {
  Nn && (Nn.detachEvent("onpropertychange", Va), (Fn = Nn = null));
}
function Va(e) {
  if (e.propertyName === "value" && ll(Fn)) {
    var t = [];
    Ha(t, Fn, e, Zi(e)), Sa(Rd, t);
  }
}
function Dd(e, t, n) {
  e === "focusin"
    ? (is(), (Nn = t), (Fn = n), Nn.attachEvent("onpropertychange", Va))
    : e === "focusout" && is();
}
function Fd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Fn);
}
function Ad(e, t) {
  if (e === "click") return ll(t);
}
function Bd(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Ud(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Re = typeof Object.is == "function" ? Object.is : Ud;
function An(e, t) {
  if (Re(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !Re(e[l], t[l])) return !1;
  }
  return !0;
}
function os(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ss(e, t) {
  var n = os(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = os(n);
  }
}
function Qa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ya() {
  for (var e = window, t = zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = zr(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $d(e) {
  var t = Ya(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && io(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ss(n, i));
        var s = ss(n, r);
        l &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Hd = Qe && "documentMode" in document && 11 >= document.documentMode,
  Dt = null,
  fi = null,
  En = null,
  pi = !1;
function as(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pi ||
    Dt == null ||
    Dt !== zr(r) ||
    ((r = Dt),
    "selectionStart" in r && io(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (En && An(En, r)) ||
      ((En = r),
      (r = Ar(fi, "onSelect")),
      0 < r.length &&
        ((t = new no("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Dt))));
}
function ur(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ft = {
    animationend: ur("Animation", "AnimationEnd"),
    animationiteration: ur("Animation", "AnimationIteration"),
    animationstart: ur("Animation", "AnimationStart"),
    transitionend: ur("Transition", "TransitionEnd"),
  },
  zl = {},
  Ka = {};
Qe &&
  ((Ka = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ft.animationend.animation,
    delete Ft.animationiteration.animation,
    delete Ft.animationstart.animation),
  "TransitionEvent" in window || delete Ft.transitionend.transition);
function il(e) {
  if (zl[e]) return zl[e];
  if (!Ft[e]) return e;
  var t = Ft[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ka) return (zl[e] = t[n]);
  return e;
}
var Ga = il("animationend"),
  Xa = il("animationiteration"),
  Za = il("animationstart"),
  Ja = il("transitionend"),
  qa = new Map(),
  us =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  qa.set(e, t), Lt(t, [e]);
}
for (var Ml = 0; Ml < us.length; Ml++) {
  var Il = us[Ml],
    Wd = Il.toLowerCase(),
    Vd = Il[0].toUpperCase() + Il.slice(1);
  pt(Wd, "on" + Vd);
}
pt(Ga, "onAnimationEnd");
pt(Xa, "onAnimationIteration");
pt(Za, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Ja, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function cs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Wc(r, t, void 0, e), (e.currentTarget = null);
}
function ba(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            u = a.instance,
            d = a.currentTarget;
          if (((a = a.listener), u !== i && l.isPropagationStopped())) break e;
          cs(l, a, d), (i = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (u = a.instance),
            (d = a.currentTarget),
            (a = a.listener),
            u !== i && l.isPropagationStopped())
          )
            break e;
          cs(l, a, d), (i = u);
        }
    }
  }
  if (Ir) throw ((e = ai), (Ir = !1), (ai = null), e);
}
function O(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (eu(t, e, 2, !1), n.add(r));
}
function Rl(e, t, n) {
  var r = 0;
  t && (r |= 4), eu(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Bn(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      sa.forEach(function (n) {
        n !== "selectionchange" && (Qd.has(n) || Rl(n, !1, e), Rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), Rl("selectionchange", !1, t));
  }
}
function eu(e, t, n, r) {
  switch (Fa(t)) {
    case 1:
      var l = id;
      break;
    case 4:
      l = od;
      break;
    default:
      l = eo;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !si ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ol(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = wt(a)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = i = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Sa(function () {
    var d = i,
      v = Zi(n),
      m = [];
    e: {
      var h = qa.get(e);
      if (h !== void 0) {
        var x = no,
          w = e;
        switch (e) {
          case "keypress":
            if (Sr(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = kd;
            break;
          case "focusin":
            (w = "focus"), (x = Pl);
            break;
          case "focusout":
            (w = "blur"), (x = Pl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Pl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = qo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ud;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = Cd;
            break;
          case Ga:
          case Xa:
          case Za:
            x = fd;
            break;
          case Ja:
            x = Ed;
            break;
          case "scroll":
            x = sd;
            break;
          case "wheel":
            x = Pd;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = hd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = es;
        }
        var k = (t & 4) !== 0,
          F = !k && e === "scroll",
          f = k ? (h !== null ? h + "Capture" : null) : h;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              f !== null && ((g = In(c, f)), g != null && k.push(Un(c, g, p)))),
            F)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((h = new x(h, w, null, n, v)), m.push({ event: h, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ii &&
            (w = n.relatedTarget || n.fromElement) &&
            (wt(w) || w[Ye]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            v.window === v
              ? v
              : (h = v.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = d),
              (w = w ? wt(w) : null),
              w !== null &&
                ((F = zt(w)), w !== F || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((k = qo),
            (g = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = es),
              (g = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (F = x == null ? h : At(x)),
            (p = w == null ? h : At(w)),
            (h = new k(g, c + "leave", x, n, v)),
            (h.target = F),
            (h.relatedTarget = p),
            (g = null),
            wt(v) === d &&
              ((k = new k(f, c + "enter", w, n, v)),
              (k.target = p),
              (k.relatedTarget = F),
              (g = k)),
            (F = g),
            x && w)
          )
            t: {
              for (k = x, f = w, c = 0, p = k; p; p = Mt(p)) c++;
              for (p = 0, g = f; g; g = Mt(g)) p++;
              for (; 0 < c - p; ) (k = Mt(k)), c--;
              for (; 0 < p - c; ) (f = Mt(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = Mt(k)), (f = Mt(f));
              }
              k = null;
            }
          else k = null;
          x !== null && ds(m, h, x, k, !1),
            w !== null && F !== null && ds(m, F, w, k, !0);
        }
      }
      e: {
        if (
          ((h = d ? At(d) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var S = Od;
        else if (rs(h))
          if (Wa) S = Bd;
          else {
            S = Fd;
            var N = Dd;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Ad);
        if (S && (S = S(e, d))) {
          Ha(m, S, n, v);
          break e;
        }
        N && N(e, h, d),
          e === "focusout" &&
            (N = h._wrapperState) &&
            N.controlled &&
            h.type === "number" &&
            ei(h, "number", h.value);
      }
      switch (((N = d ? At(d) : window), e)) {
        case "focusin":
          (rs(N) || N.contentEditable === "true") &&
            ((Dt = N), (fi = d), (En = null));
          break;
        case "focusout":
          En = fi = Dt = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), as(m, n, v);
          break;
        case "selectionchange":
          if (Hd) break;
        case "keydown":
        case "keyup":
          as(m, n, v);
      }
      var E;
      if (lo)
        e: {
          switch (e) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break e;
            case "compositionend":
              _ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break e;
          }
          _ = void 0;
        }
      else
        Ot
          ? Ua(e, n) && (_ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (Ba &&
          n.locale !== "ko" &&
          (Ot || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && Ot && (E = Aa())
            : ((tt = v),
              (to = "value" in tt ? tt.value : tt.textContent),
              (Ot = !0))),
        (N = Ar(d, _)),
        0 < N.length &&
          ((_ = new bo(_, e, null, n, v)),
          m.push({ event: _, listeners: N }),
          E ? (_.data = E) : ((E = $a(n)), E !== null && (_.data = E)))),
        (E = Ld ? zd(e, n) : Md(e, n)) &&
          ((d = Ar(d, "onBeforeInput")),
          0 < d.length &&
            ((v = new bo("onBeforeInput", "beforeinput", null, n, v)),
            m.push({ event: v, listeners: d }),
            (v.data = E)));
    }
    ba(m, t);
  });
}
function Un(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ar(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = In(e, n)),
      i != null && r.unshift(Un(e, i, l)),
      (i = In(e, t)),
      i != null && r.push(Un(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Mt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ds(e, t, n, r, l) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      d = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      d !== null &&
      ((a = d),
      l
        ? ((u = In(n, i)), u != null && s.unshift(Un(n, u, a)))
        : l || ((u = In(n, i)), u != null && s.push(Un(n, u, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Yd = /\r\n?/g,
  Kd = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Yd,
      `
`
    )
    .replace(Kd, "");
}
function dr(e, t, n) {
  if (((t = fs(t)), fs(e) !== t && n)) throw Error(y(425));
}
function Br() {}
var hi = null,
  mi = null;
function vi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0,
  Gd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ps = typeof Promise == "function" ? Promise : void 0,
  Xd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ps < "u"
      ? function (e) {
          return ps.resolve(null).then(e).catch(Zd);
        }
      : gi;
function Zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Dn(t);
}
function ot(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hs(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Fe = "__reactFiber$" + sn,
  $n = "__reactProps$" + sn,
  Ye = "__reactContainer$" + sn,
  yi = "__reactEvents$" + sn,
  Jd = "__reactListeners$" + sn,
  qd = "__reactHandles$" + sn;
function wt(e) {
  var t = e[Fe];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ye] || n[Fe])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hs(e); e !== null; ) {
          if ((n = e[Fe])) return n;
          e = hs(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jn(e) {
  return (
    (e = e[Fe] || e[Ye]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function At(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[$n] || null;
}
var xi = [],
  Bt = -1;
function ht(e) {
  return { current: e };
}
function D(e) {
  0 > Bt || ((e.current = xi[Bt]), (xi[Bt] = null), Bt--);
}
function R(e, t) {
  Bt++, (xi[Bt] = e.current), (e.current = t);
}
var ft = {},
  le = ht(ft),
  de = ht(!1),
  Nt = ft;
function qt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function fe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ur() {
  D(de), D(le);
}
function ms(e, t, n) {
  if (le.current !== ft) throw Error(y(168));
  R(le, t), R(de, n);
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Dc(e) || "Unknown", l));
  return $({}, n, r);
}
function $r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (Nt = le.current),
    R(le, e),
    R(de, de.current),
    !0
  );
}
function vs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = tu(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      D(de),
      D(le),
      R(le, e))
    : D(de),
    R(de, n);
}
var $e = null,
  sl = !1,
  Fl = !1;
function nu(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
function bd(e) {
  (sl = !0), nu(e);
}
function mt() {
  if (!Fl && $e !== null) {
    Fl = !0;
    var e = 0,
      t = I;
    try {
      var n = $e;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($e = null), (sl = !1);
    } catch (l) {
      throw ($e !== null && ($e = $e.slice(e + 1)), _a(Ji, mt), l);
    } finally {
      (I = t), (Fl = !1);
    }
  }
  return null;
}
var Ut = [],
  $t = 0,
  Hr = null,
  Wr = 0,
  we = [],
  ke = 0,
  Et = null,
  He = 1,
  We = "";
function yt(e, t) {
  (Ut[$t++] = Wr), (Ut[$t++] = Hr), (Hr = e), (Wr = t);
}
function ru(e, t, n) {
  (we[ke++] = He), (we[ke++] = We), (we[ke++] = Et), (Et = e);
  var r = He;
  e = We;
  var l = 32 - Me(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (He = (1 << (32 - Me(t) + l)) | (n << l) | r),
      (We = i + e);
  } else (He = (1 << i) | (n << l) | r), (We = e);
}
function oo(e) {
  e.return !== null && (yt(e, 1), ru(e, 1, 0));
}
function so(e) {
  for (; e === Hr; )
    (Hr = Ut[--$t]), (Ut[$t] = null), (Wr = Ut[--$t]), (Ut[$t] = null);
  for (; e === Et; )
    (Et = we[--ke]),
      (we[ke] = null),
      (We = we[--ke]),
      (we[ke] = null),
      (He = we[--ke]),
      (we[ke] = null);
}
var ve = null,
  me = null,
  A = !1,
  ze = null;
function lu(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (me = ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Et !== null ? { id: He, overflow: We } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ki(e) {
  if (A) {
    var t = me;
    if (t) {
      var n = t;
      if (!gs(e, t)) {
        if (wi(e)) throw Error(y(418));
        t = ot(n.nextSibling);
        var r = ve;
        t && gs(e, t)
          ? lu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (A = !1), (ve = e));
      }
    } else {
      if (wi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (A = !1), (ve = e);
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function fr(e) {
  if (e !== ve) return !1;
  if (!A) return ys(e), (A = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vi(e.type, e.memoizedProps))),
    t && (t = me))
  ) {
    if (wi(e)) throw (iu(), Error(y(418)));
    for (; t; ) lu(e, t), (t = ot(t.nextSibling));
  }
  if ((ys(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              me = ot(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else me = ve ? ot(e.stateNode.nextSibling) : null;
  return !0;
}
function iu() {
  for (var e = me; e; ) e = ot(e.nextSibling);
}
function bt() {
  (me = ve = null), (A = !1);
}
function ao(e) {
  ze === null ? (ze = [e]) : ze.push(e);
}
var ef = Xe.ReactCurrentBatchConfig;
function mn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var a = l.refs;
            s === null ? delete a[i] : (a[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xs(e) {
  var t = e._init;
  return t(e._payload);
}
function ou(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function l(f, c) {
    return (f = ct(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function s(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function a(f, c, p, g) {
    return c === null || c.tag !== 6
      ? ((c = Vl(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function u(f, c, p, g) {
    var S = p.type;
    return S === Rt
      ? v(f, c, p.props.children, g, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Je &&
            xs(S) === c.type))
      ? ((g = l(c, p.props)), (g.ref = mn(f, c, p)), (g.return = f), g)
      : ((g = Lr(p.type, p.key, p.props, null, f.mode, g)),
        (g.ref = mn(f, c, p)),
        (g.return = f),
        g);
  }
  function d(f, c, p, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ql(p, f.mode, g)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function v(f, c, p, g, S) {
    return c === null || c.tag !== 7
      ? ((c = Ct(p, f.mode, g, S)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Vl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case nr:
          return (
            (p = Lr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = mn(f, null, c)),
            (p.return = f),
            p
          );
        case It:
          return (c = Ql(c, f.mode, p)), (c.return = f), c;
        case Je:
          var g = c._init;
          return m(f, g(c._payload), p);
      }
      if (xn(c) || cn(c))
        return (c = Ct(c, f.mode, p, null)), (c.return = f), c;
      pr(f, c);
    }
    return null;
  }
  function h(f, c, p, g) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : a(f, c, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === S ? u(f, c, p, g) : null;
        case It:
          return p.key === S ? d(f, c, p, g) : null;
        case Je:
          return (S = p._init), h(f, c, S(p._payload), g);
      }
      if (xn(p) || cn(p)) return S !== null ? null : v(f, c, p, g, null);
      pr(f, p);
    }
    return null;
  }
  function x(f, c, p, g, S) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (f = f.get(p) || null), a(c, f, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case nr:
          return (f = f.get(g.key === null ? p : g.key) || null), u(c, f, g, S);
        case It:
          return (f = f.get(g.key === null ? p : g.key) || null), d(c, f, g, S);
        case Je:
          var N = g._init;
          return x(f, c, p, N(g._payload), S);
      }
      if (xn(g) || cn(g)) return (f = f.get(p) || null), v(c, f, g, S, null);
      pr(c, g);
    }
    return null;
  }
  function w(f, c, p, g) {
    for (
      var S = null, N = null, E = c, _ = (c = 0), W = null;
      E !== null && _ < p.length;
      _++
    ) {
      E.index > _ ? ((W = E), (E = null)) : (W = E.sibling);
      var z = h(f, E, p[_], g);
      if (z === null) {
        E === null && (E = W);
        break;
      }
      e && E && z.alternate === null && t(f, E),
        (c = i(z, c, _)),
        N === null ? (S = z) : (N.sibling = z),
        (N = z),
        (E = W);
    }
    if (_ === p.length) return n(f, E), A && yt(f, _), S;
    if (E === null) {
      for (; _ < p.length; _++)
        (E = m(f, p[_], g)),
          E !== null &&
            ((c = i(E, c, _)), N === null ? (S = E) : (N.sibling = E), (N = E));
      return A && yt(f, _), S;
    }
    for (E = r(f, E); _ < p.length; _++)
      (W = x(E, f, _, p[_], g)),
        W !== null &&
          (e && W.alternate !== null && E.delete(W.key === null ? _ : W.key),
          (c = i(W, c, _)),
          N === null ? (S = W) : (N.sibling = W),
          (N = W));
    return (
      e &&
        E.forEach(function (_e) {
          return t(f, _e);
        }),
      A && yt(f, _),
      S
    );
  }
  function k(f, c, p, g) {
    var S = cn(p);
    if (typeof S != "function") throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var N = (S = null), E = c, _ = (c = 0), W = null, z = p.next();
      E !== null && !z.done;
      _++, z = p.next()
    ) {
      E.index > _ ? ((W = E), (E = null)) : (W = E.sibling);
      var _e = h(f, E, z.value, g);
      if (_e === null) {
        E === null && (E = W);
        break;
      }
      e && E && _e.alternate === null && t(f, E),
        (c = i(_e, c, _)),
        N === null ? (S = _e) : (N.sibling = _e),
        (N = _e),
        (E = W);
    }
    if (z.done) return n(f, E), A && yt(f, _), S;
    if (E === null) {
      for (; !z.done; _++, z = p.next())
        (z = m(f, z.value, g)),
          z !== null &&
            ((c = i(z, c, _)), N === null ? (S = z) : (N.sibling = z), (N = z));
      return A && yt(f, _), S;
    }
    for (E = r(f, E); !z.done; _++, z = p.next())
      (z = x(E, f, _, z.value, g)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? _ : z.key),
          (c = i(z, c, _)),
          N === null ? (S = z) : (N.sibling = z),
          (N = z));
    return (
      e &&
        E.forEach(function (an) {
          return t(f, an);
        }),
      A && yt(f, _),
      S
    );
  }
  function F(f, c, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Rt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var S = p.key, N = c; N !== null; ) {
              if (N.key === S) {
                if (((S = p.type), S === Rt)) {
                  if (N.tag === 7) {
                    n(f, N.sibling),
                      (c = l(N, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  N.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Je &&
                    xs(S) === N.type)
                ) {
                  n(f, N.sibling),
                    (c = l(N, p.props)),
                    (c.ref = mn(f, N, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, N);
                break;
              } else t(f, N);
              N = N.sibling;
            }
            p.type === Rt
              ? ((c = Ct(p.props.children, f.mode, g, p.key)),
                (c.return = f),
                (f = c))
              : ((g = Lr(p.type, p.key, p.props, null, f.mode, g)),
                (g.ref = mn(f, c, p)),
                (g.return = f),
                (f = g));
          }
          return s(f);
        case It:
          e: {
            for (N = p.key; c !== null; ) {
              if (c.key === N)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = l(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Ql(p, f.mode, g)), (c.return = f), (f = c);
          }
          return s(f);
        case Je:
          return (N = p._init), F(f, c, N(p._payload), g);
      }
      if (xn(p)) return w(f, c, p, g);
      if (cn(p)) return k(f, c, p, g);
      pr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Vl(p, f.mode, g)), (c.return = f), (f = c)),
        s(f))
      : n(f, c);
  }
  return F;
}
var en = ou(!0),
  su = ou(!1),
  Vr = ht(null),
  Qr = null,
  Ht = null,
  uo = null;
function co() {
  uo = Ht = Qr = null;
}
function fo(e) {
  var t = Vr.current;
  D(Vr), (e._currentValue = t);
}
function ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xt(e, t) {
  (Qr = e),
    (uo = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ne(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Qr === null) throw Error(y(308));
      (Ht = e), (Qr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var kt = null;
function po(e) {
  kt === null ? (kt = [e]) : kt.push(e);
}
function au(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), po(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ke(e, r)
  );
}
function Ke(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function uu(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function st(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), M & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ke(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), po(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ke(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
function ws(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Yr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var i = l.firstBaseUpdate,
    s = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      d = u.next;
    (u.next = null), s === null ? (i = d) : (s.next = d), (s = u);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (a = v.lastBaseUpdate),
      a !== s &&
        (a === null ? (v.firstBaseUpdate = d) : (a.next = d),
        (v.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = l.baseState;
    (s = 0), (v = d = u = null), (a = i);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        v !== null &&
          (v = v.next =
            {
              eventTime: x,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            k = a;
          switch (((h = t), (x = n), k.tag)) {
            case 1:
              if (((w = k.payload), typeof w == "function")) {
                m = w.call(x, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = k.payload),
                (h = typeof w == "function" ? w.call(x, m, h) : w),
                h == null)
              )
                break e;
              m = $({}, m, h);
              break e;
            case 2:
              qe = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = l.effects),
          h === null ? (l.effects = [a]) : h.push(a));
      } else
        (x = {
          eventTime: x,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          v === null ? ((d = v = x), (u = m)) : (v = v.next = x),
          (s |= h);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (l.lastBaseUpdate = h),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = v),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (s |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (Pt |= s), (e.lanes = s), (e.memoizedState = m);
  }
}
function ks(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var qn = {},
  Be = ht(qn),
  Hn = ht(qn),
  Wn = ht(qn);
function jt(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function mo(e, t) {
  switch ((R(Wn, t), R(Hn, e), R(Be, qn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ni(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ni(t, e));
  }
  D(Be), R(Be, t);
}
function tn() {
  D(Be), D(Hn), D(Wn);
}
function cu(e) {
  jt(Wn.current);
  var t = jt(Be.current),
    n = ni(t, e.type);
  t !== n && (R(Hn, e), R(Be, n));
}
function vo(e) {
  Hn.current === e && (D(Be), D(Hn));
}
var B = ht(0);
function Kr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Al = [];
function go() {
  for (var e = 0; e < Al.length; e++)
    Al[e]._workInProgressVersionPrimary = null;
  Al.length = 0;
}
var Nr = Xe.ReactCurrentDispatcher,
  Bl = Xe.ReactCurrentBatchConfig,
  _t = 0,
  U = null,
  K = null,
  Z = null,
  Gr = !1,
  _n = !1,
  Vn = 0,
  tf = 0;
function te() {
  throw Error(y(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Re(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, r, l, i) {
  if (
    ((_t = i),
    (U = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Nr.current = e === null || e.memoizedState === null ? of : sf),
    (e = n(r, l)),
    _n)
  ) {
    i = 0;
    do {
      if (((_n = !1), (Vn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = K = null),
        (t.updateQueue = null),
        (Nr.current = af),
        (e = n(r, l));
    } while (_n);
  }
  if (
    ((Nr.current = Xr),
    (t = K !== null && K.next !== null),
    (_t = 0),
    (Z = K = U = null),
    (Gr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function wo() {
  var e = Vn !== 0;
  return (Vn = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ee() {
  if (K === null) {
    var e = U.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = Z === null ? U.memoizedState : Z.next;
  if (t !== null) (Z = t), (K = e);
  else {
    if (e === null) throw Error(y(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      Z === null ? (U.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Qn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ul(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var s = l.next;
      (l.next = i.next), (i.next = s);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var a = (s = null),
      u = null,
      d = i;
    do {
      var v = d.lane;
      if ((_t & v) === v)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var m = {
          lane: v,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (s = r)) : (u = u.next = m),
          (U.lanes |= v),
          (Pt |= v);
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? (s = r) : (u.next = a),
      Re(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (U.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function $l(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var s = (l = l.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== l);
    Re(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function du() {}
function fu(e, t) {
  var n = U,
    r = Ee(),
    l = t(),
    i = !Re(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ko(mu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, hu.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    _t & 30 || pu(n, t, l);
  }
  return l;
}
function pu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), vu(t) && gu(e);
}
function mu(e, t, n) {
  return n(function () {
    vu(t) && gu(e);
  });
}
function vu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Re(e, n);
  } catch {
    return !0;
  }
}
function gu(e) {
  var t = Ke(e, 1);
  t !== null && Ie(t, e, 1, -1);
}
function js(e) {
  var t = De();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lf.bind(null, U, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = U.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (U.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function yu() {
  return Ee().memoizedState;
}
function Er(e, t, n, r) {
  var l = De();
  (U.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = Ee();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (K !== null) {
    var s = K.memoizedState;
    if (((i = s.destroy), r !== null && yo(r, s.deps))) {
      l.memoizedState = Yn(t, n, i, r);
      return;
    }
  }
  (U.flags |= e), (l.memoizedState = Yn(1 | t, n, i, r));
}
function Ss(e, t) {
  return Er(8390656, 8, e, t);
}
function ko(e, t) {
  return al(2048, 8, e, t);
}
function xu(e, t) {
  return al(4, 2, e, t);
}
function wu(e, t) {
  return al(4, 4, e, t);
}
function ku(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ju(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), al(4, 4, ku.bind(null, t, e), n)
  );
}
function jo() {}
function Su(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cu(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Nu(e, t, n) {
  return _t & 21
    ? (Re(n, t) || ((n = La()), (U.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function nf(e, t) {
  var n = I;
  (I = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Bl.transition;
  Bl.transition = {};
  try {
    e(!1), t();
  } finally {
    (I = n), (Bl.transition = r);
  }
}
function Eu() {
  return Ee().memoizedState;
}
function rf(e, t, n) {
  var r = ut(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _u(e))
  )
    Pu(t, n);
  else if (((n = au(e, t, n, r)), n !== null)) {
    var l = oe();
    Ie(n, e, r, l), Tu(n, t, r);
  }
}
function lf(e, t, n) {
  var r = ut(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_u(e)) Pu(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = i(s, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Re(a, s))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), po(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = au(e, t, l, r)),
      n !== null && ((l = oe()), Ie(n, e, r, l), Tu(n, t, r));
  }
}
function _u(e) {
  var t = e.alternate;
  return e === U || (t !== null && t === U);
}
function Pu(e, t) {
  _n = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Tu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
var Xr = {
    readContext: Ne,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  of = {
    readContext: Ne,
    useCallback: function (e, t) {
      return (De().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ne,
    useEffect: Ss,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Er(4194308, 4, ku.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Er(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Er(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = De();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = De();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rf.bind(null, U, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = De();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: js,
    useDebugValue: jo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = js(!1),
        t = e[0];
      return (e = nf.bind(null, e[1])), (De().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = U,
        l = De();
      if (A) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        _t & 30 || pu(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ss(mu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yn(9, hu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = De(),
        t = J.identifierPrefix;
      if (A) {
        var n = We,
          r = He;
        (n = (r & ~(1 << (32 - Me(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Vn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sf = {
    readContext: Ne,
    useCallback: Su,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ju,
    useInsertionEffect: xu,
    useLayoutEffect: wu,
    useMemo: Cu,
    useReducer: Ul,
    useRef: yu,
    useState: function () {
      return Ul(Qn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = Ee();
      return Nu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Qn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: du,
    useSyncExternalStore: fu,
    useId: Eu,
    unstable_isNewReconciler: !1,
  },
  af = {
    readContext: Ne,
    useCallback: Su,
    useContext: Ne,
    useEffect: ko,
    useImperativeHandle: ju,
    useInsertionEffect: xu,
    useLayoutEffect: wu,
    useMemo: Cu,
    useReducer: $l,
    useRef: yu,
    useState: function () {
      return $l(Qn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = Ee();
      return K === null ? (t.memoizedState = e) : Nu(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Qn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: du,
    useSyncExternalStore: fu,
    useId: Eu,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    (t = $({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : $({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ut(e),
      i = Ve(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Ie(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ut(e),
      i = Ve(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Ie(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ut(e),
      l = Ve(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Ie(t, e, r, n), Cr(t, e, r));
  },
};
function Cs(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !An(n, r) || !An(l, i)
      : !0
  );
}
function Lu(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ne(i))
      : ((l = fe(t) ? Nt : le.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? qt(e, l) : ft)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ul),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ns(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function Ci(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ne(i))
    : ((i = fe(t) ? Nt : le.current), (l.context = qt(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Si(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Yr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Oc(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Hl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ni(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uf = typeof WeakMap == "function" ? WeakMap : Map;
function zu(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Oi = r)), Ni(e, t);
    }),
    n
  );
}
function Mu(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ni(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ni(e, t),
          typeof r != "function" &&
            (at === null ? (at = new Set([this])) : at.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Es(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new uf();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Sf.bind(null, e, t, n)), t.then(e, e));
}
function _s(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ps(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cf = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? su(t, null, n, r) : en(t, e.child, n, r);
}
function Ts(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Xt(t, l),
    (r = xo(e, t, n, r, i, l)),
    (n = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (A && n && oo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Ls(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Lo(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Iu(e, t, i, r, l))
      : ((e = Lr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : An), n(s, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Iu(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (An(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Ei(e, t, n, r, l);
}
function Ru(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        R(Vt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          R(Vt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        R(Vt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      R(Vt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function Ou(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ei(e, t, n, r, l) {
  var i = fe(n) ? Nt : le.current;
  return (
    (i = qt(t, i)),
    Xt(t, l),
    (n = xo(e, t, n, r, i, l)),
    (r = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (A && r && oo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function zs(e, t, n, r, l) {
  if (fe(n)) {
    var i = !0;
    $r(t);
  } else i = !1;
  if ((Xt(t, l), t.stateNode === null))
    _r(e, t), Lu(t, n, r), Ci(t, n, r, l), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var u = s.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ne(d))
      : ((d = fe(n) ? Nt : le.current), (d = qt(t, d)));
    var v = n.getDerivedStateFromProps,
      m =
        typeof v == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || u !== d) && Ns(t, s, r, d)),
      (qe = !1);
    var h = t.memoizedState;
    (s.state = h),
      Yr(t, r, s, l),
      (u = t.memoizedState),
      a !== r || h !== u || de.current || qe
        ? (typeof v == "function" && (Si(t, n, v, r), (u = t.memoizedState)),
          (a = qe || Cs(t, n, a, r, h, u, d))
            ? (m ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = d),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      uu(e, t),
      (a = t.memoizedProps),
      (d = t.type === t.elementType ? a : Te(t.type, a)),
      (s.props = d),
      (m = t.pendingProps),
      (h = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ne(u))
        : ((u = fe(n) ? Nt : le.current), (u = qt(t, u)));
    var x = n.getDerivedStateFromProps;
    (v =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== m || h !== u) && Ns(t, s, r, u)),
      (qe = !1),
      (h = t.memoizedState),
      (s.state = h),
      Yr(t, r, s, l);
    var w = t.memoizedState;
    a !== m || h !== w || de.current || qe
      ? (typeof x == "function" && (Si(t, n, x, r), (w = t.memoizedState)),
        (d = qe || Cs(t, n, d, r, h, w, u) || !1)
          ? (v ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, w, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, w, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (s.props = r),
        (s.state = w),
        (s.context = u),
        (r = d))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return _i(e, t, n, r, i, l);
}
function _i(e, t, n, r, l, i) {
  Ou(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && vs(t, n, !1), Ge(e, t, i);
  (r = t.stateNode), (cf.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = en(t, e.child, null, i)), (t.child = en(t, null, a, i)))
      : ie(e, t, a, i),
    (t.memoizedState = r.state),
    l && vs(t, n, !0),
    t.child
  );
}
function Du(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ms(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ms(e, t.context, !1),
    mo(e, t.containerInfo);
}
function Ms(e, t, n, r, l) {
  return bt(), ao(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ti(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Fu(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    R(B, l & 1),
    e === null)
  )
    return (
      ki(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = fl(s, r, 0, null)),
              (e = Ct(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ti(n)),
              (t.memoizedState = Pi),
              e)
            : So(t, s))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return df(e, t, s, r, a, l, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ct(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (i = ct(a, i)) : ((i = Ct(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Ti(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Pi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ct(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function So(e, t) {
  return (
    (t = fl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && ao(r),
    en(t, e.child, null, n),
    (e = So(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function df(e, t, n, r, l, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Hl(Error(y(422)))), hr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = Ct(i, l, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, s),
        (t.child.memoizedState = Ti(s)),
        (t.memoizedState = Pi),
        i);
  if (!(t.mode & 1)) return hr(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(y(419))), (r = Hl(i, r, void 0)), hr(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), ce || a)) {
    if (((r = J), r !== null)) {
      switch (s & -s) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | s) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), Ie(r, e, l, -1));
    }
    return To(), (r = Hl(Error(y(421)))), hr(e, t, s, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Cf.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (me = ot(l.nextSibling)),
      (ve = t),
      (A = !0),
      (ze = null),
      e !== null &&
        ((we[ke++] = He),
        (we[ke++] = We),
        (we[ke++] = Et),
        (He = e.id),
        (We = e.overflow),
        (Et = t)),
      (t = So(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Is(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ji(e.return, t, n);
}
function Wl(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function Au(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Is(e, n, t);
        else if (e.tag === 19) Is(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((R(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Kr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Wl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Wl(t, !0, n, null, i);
        break;
      case "together":
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _r(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Pt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ff(e, t, n) {
  switch (t.tag) {
    case 3:
      Du(t), bt();
      break;
    case 5:
      cu(t);
      break;
    case 1:
      fe(t.type) && $r(t);
      break;
    case 4:
      mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      R(Vr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (R(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Fu(e, t, n)
          : (R(B, B.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      R(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Au(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        R(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ru(e, t, n);
  }
  return Ge(e, t, n);
}
var Bu, Li, Uu, $u;
Bu = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Li = function () {};
Uu = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), jt(Be.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (l = $({}, l, { value: void 0 })),
          (r = $({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Br);
    }
    ri(n, r);
    var s;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var a = l[d];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (zn.hasOwnProperty(d)
              ? i || (i = [])
              : (i = i || []).push(d, null));
    for (d in r) {
      var u = r[d];
      if (
        ((a = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && u !== a && (u != null || a != null))
      )
        if (d === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                a[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (i || (i = []), i.push(d, n)), (n = u);
        else
          d === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (i = i || []).push(d, u))
            : d === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(d, "" + u)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (zn.hasOwnProperty(d)
                ? (u != null && d === "onScroll" && O("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
$u = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!A)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function pf(e, t, n) {
  var r = t.pendingProps;
  switch ((so(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return fe(t.type) && Ur(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        D(de),
        D(le),
        go(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ze !== null && (Ai(ze), (ze = null)))),
        Li(e, t),
        ne(t),
        null
      );
    case 5:
      vo(t);
      var l = jt(Wn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Uu(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = jt(Be.current)), fr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Fe] = t), (r[$n] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) O(kn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Ho(r, i), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                O("invalid", r);
              break;
            case "textarea":
              Vo(r, i), O("invalid", r);
          }
          ri(n, i), (l = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : zn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Wo(r, i, !0);
              break;
            case "textarea":
              rr(r), Qo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Br);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ma(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Fe] = t),
            (e[$n] = r),
            Bu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = li(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) O(kn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                Ho(e, r), (l = ql(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = $({}, r, { value: void 0 })),
                  O("invalid", e);
                break;
              case "textarea":
                Vo(e, r), (l = ti(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            ri(n, l), (a = l);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var u = a[i];
                i === "style"
                  ? ya(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && va(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Mn(e, u)
                    : typeof u == "number" && Mn(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (zn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && O("scroll", e)
                      : u != null && Yi(e, i, u, s));
              }
            switch (n) {
              case "input":
                rr(e), Wo(e, r, !1);
                break;
              case "textarea":
                rr(e), Qo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Qt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Br);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) $u(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = jt(Wn.current)), jt(Be.current), fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Fe] = t),
            (i = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Fe] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (D(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (A && me !== null && t.mode & 1 && !(t.flags & 128))
          iu(), bt(), (t.flags |= 98560), (i = !1);
        else if (((i = fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Fe] = t;
          } else
            bt(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else ze !== null && (Ai(ze), (ze = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? G === 0 && (G = 3) : To())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(), Li(e, t), e === null && Bn(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fo(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Ur(), ne(t), null;
    case 19:
      if ((D(B), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) vn(i, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Kr(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    vn(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return R(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > rn &&
            ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !A)
            )
              return ne(t), null;
          } else
            2 * Q() - i.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Q()),
          (t.sibling = null),
          (n = B.current),
          R(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Po(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function hf(e, t) {
  switch ((so(t), t.tag)) {
    case 1:
      return (
        fe(t.type) && Ur(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        D(de),
        D(le),
        go(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((D(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        bt();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return D(B), null;
    case 4:
      return tn(), null;
    case 10:
      return fo(t.type._context), null;
    case 22:
    case 23:
      return Po(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mr = !1,
  re = !1,
  mf = typeof WeakSet == "function" ? WeakSet : Set,
  j = null;
function Wt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function zi(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Rs = !1;
function vf(e, t) {
  if (((hi = Dr), (e = Ya()), io(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            u = -1,
            d = 0,
            v = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var x;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = s + l),
                m !== i || (r !== 0 && m.nodeType !== 3) || (u = s + r),
                m.nodeType === 3 && (s += m.nodeValue.length),
                (x = m.firstChild) !== null;

            )
              (h = m), (m = x);
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++d === l && (a = s),
                h === i && ++v === r && (u = s),
                (x = m.nextSibling) !== null)
              )
                break;
              (m = h), (h = m.parentNode);
            }
            m = x;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (mi = { focusedElem: e, selectionRange: n }, Dr = !1, j = t; j !== null; )
    if (((t = j), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (j = e);
    else
      for (; j !== null; ) {
        t = j;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var k = w.memoizedProps,
                    F = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Te(t.type, k),
                      F
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          H(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = Rs), (Rs = !1), w;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && zi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Mi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Hu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Hu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Fe], delete t[$n], delete t[yi], delete t[Jd], delete t[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Wu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Os(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Wu(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ii(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Br));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), (e = e.sibling);
}
function Ri(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), (e = e.sibling);
}
var q = null,
  Le = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Vu(e, t, n), (n = n.sibling);
}
function Vu(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function")
    try {
      Ae.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Wt(n, t);
    case 6:
      var r = q,
        l = Le;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Le = l),
        q !== null &&
          (Le
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Le
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, n)
              : e.nodeType === 1 && Dl(e, n),
            Dn(e))
          : Dl(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Le),
        (q = n.stateNode.containerInfo),
        (Le = !0),
        Ze(e, t, n),
        (q = r),
        (Le = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && zi(n, t, s),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Wt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          H(n, t, a);
        }
      Ze(e, t, n);
      break;
    case 21:
      Ze(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((re = (r = re) || n.memoizedState !== null), Ze(e, t, n), (re = r))
        : Ze(e, t, n);
      break;
    default:
      Ze(e, t, n);
  }
}
function Ds(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mf()),
      t.forEach(function (r) {
        var l = Nf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (q = a.stateNode), (Le = !1);
              break e;
            case 3:
              (q = a.stateNode.containerInfo), (Le = !0);
              break e;
            case 4:
              (q = a.stateNode.containerInfo), (Le = !0);
              break e;
          }
          a = a.return;
        }
        if (q === null) throw Error(y(160));
        Vu(i, s, l), (q = null), (Le = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (d) {
        H(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qu(t, e), (t = t.sibling);
}
function Qu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Oe(e), r & 4)) {
        try {
          Pn(3, e, e.return), cl(3, e);
        } catch (k) {
          H(e, e.return, k);
        }
        try {
          Pn(5, e, e.return);
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), Oe(e), r & 512 && n !== null && Wt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        Oe(e),
        r & 512 && n !== null && Wt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Mn(l, "");
        } catch (k) {
          H(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && pa(l, i),
              li(a, s);
            var d = li(a, i);
            for (s = 0; s < u.length; s += 2) {
              var v = u[s],
                m = u[s + 1];
              v === "style"
                ? ya(l, m)
                : v === "dangerouslySetInnerHTML"
                ? va(l, m)
                : v === "children"
                ? Mn(l, m)
                : Yi(l, v, m, d);
            }
            switch (a) {
              case "input":
                bl(l, i);
                break;
              case "textarea":
                ha(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Qt(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Qt(l, !!i.multiple, i.defaultValue, !0)
                      : Qt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[$n] = i;
          } catch (k) {
            H(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          H(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Dn(t.containerInfo);
        } catch (k) {
          H(e, e.return, k);
        }
      break;
    case 4:
      Pe(t, e), Oe(e);
      break;
    case 13:
      Pe(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = Q())),
        r & 4 && Ds(e);
      break;
    case 22:
      if (
        ((v = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || v), Pe(t, e), (re = d)) : Pe(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !v && e.mode & 1)
        )
          for (j = e, v = e.child; v !== null; ) {
            for (m = j = v; j !== null; ) {
              switch (((h = j), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, h, h.return);
                  break;
                case 1:
                  Wt(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      H(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Wt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    As(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (j = x)) : As(m);
            }
            v = v.sibling;
          }
        e: for (v = null, m = e; ; ) {
          if (m.tag === 5) {
            if (v === null) {
              v = m;
              try {
                (l = m.stateNode),
                  d
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = ga("display", s)));
              } catch (k) {
                H(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (v === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (k) {
                H(e, e.return, k);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            v === m && (v = null), (m = m.return);
          }
          v === m && (v = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), Oe(e), r & 4 && Ds(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Wu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Mn(l, ""), (r.flags &= -33));
          var i = Os(e);
          Ri(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Os(e);
          Ii(e, a, s);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      H(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function gf(e, t, n) {
  (j = e), Yu(e);
}
function Yu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; j !== null; ) {
    var l = j,
      i = l.child;
    if (l.tag === 22 && r) {
      var s = l.memoizedState !== null || mr;
      if (!s) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || re;
        a = mr;
        var d = re;
        if (((mr = s), (re = u) && !d))
          for (j = l; j !== null; )
            (s = j),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Bs(l)
                : u !== null
                ? ((u.return = s), (j = u))
                : Bs(l);
        for (; i !== null; ) (j = i), Yu(i), (i = i.sibling);
        (j = l), (mr = a), (re = d);
      }
      Fs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : Fs(e);
  }
}
function Fs(e) {
  for (; j !== null; ) {
    var t = j;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              re || cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !re)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && ks(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ks(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var v = d.memoizedState;
                  if (v !== null) {
                    var m = v.dehydrated;
                    m !== null && Dn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (t.flags & 512 && Mi(t));
      } catch (h) {
        H(t, t.return, h);
      }
    }
    if (t === e) {
      j = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function As(e) {
  for (; j !== null; ) {
    var t = j;
    if (t === e) {
      j = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (j = n);
      break;
    }
    j = t.return;
  }
}
function Bs(e) {
  for (; j !== null; ) {
    var t = j;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            cl(4, t);
          } catch (u) {
            H(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              H(t, l, u);
            }
          }
          var i = t.return;
          try {
            Mi(t);
          } catch (u) {
            H(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Mi(t);
          } catch (u) {
            H(t, s, u);
          }
      }
    } catch (u) {
      H(t, t.return, u);
    }
    if (t === e) {
      j = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (j = a);
      break;
    }
    j = t.return;
  }
}
var yf = Math.ceil,
  Zr = Xe.ReactCurrentDispatcher,
  Co = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  M = 0,
  J = null,
  Y = null,
  b = 0,
  he = 0,
  Vt = ht(0),
  G = 0,
  Kn = null,
  Pt = 0,
  dl = 0,
  No = 0,
  Tn = null,
  ue = null,
  Eo = 0,
  rn = 1 / 0,
  Ue = null,
  Jr = !1,
  Oi = null,
  at = null,
  vr = !1,
  nt = null,
  qr = 0,
  Ln = 0,
  Di = null,
  Pr = -1,
  Tr = 0;
function oe() {
  return M & 6 ? Q() : Pr !== -1 ? Pr : (Pr = Q());
}
function ut(e) {
  return e.mode & 1
    ? M & 2 && b !== 0
      ? b & -b
      : ef.transition !== null
      ? (Tr === 0 && (Tr = La()), Tr)
      : ((e = I),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fa(e.type))),
        e)
    : 1;
}
function Ie(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Di = null), Error(y(185)));
  Xn(e, n, r),
    (!(M & 2) || e !== J) &&
      (e === J && (!(M & 2) && (dl |= n), G === 4 && et(e, b)),
      pe(e, r),
      n === 1 && M === 0 && !(t.mode & 1) && ((rn = Q() + 500), sl && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  ed(e, t);
  var r = Or(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Go(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Go(n), t === 1))
      e.tag === 0 ? bd(Us.bind(null, e)) : nu(Us.bind(null, e)),
        Xd(function () {
          !(M & 6) && mt();
        }),
        (n = null);
    else {
      switch (za(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = Pa;
          break;
        case 16:
          n = Rr;
          break;
        case 536870912:
          n = Ta;
          break;
        default:
          n = Rr;
      }
      n = ec(n, Ku.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ku(e, t) {
  if (((Pr = -1), (Tr = 0), M & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Or(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Xu();
    (J !== e || b !== t) && ((Ue = null), (rn = Q() + 500), St(e, t));
    do
      try {
        kf();
        break;
      } catch (a) {
        Gu(e, a);
      }
    while (!0);
    co(),
      (Zr.current = i),
      (M = l),
      Y !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ui(e)), l !== 0 && ((r = l), (t = Fi(e, l)))), t === 1)
    )
      throw ((n = Kn), St(e, 0), et(e, r), pe(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xf(l) &&
          ((t = br(e, r)),
          t === 2 && ((i = ui(e)), i !== 0 && ((r = i), (t = Fi(e, i)))),
          t === 1))
      )
        throw ((n = Kn), St(e, 0), et(e, r), pe(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xt(e, ue, Ue);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Eo + 500 - Q()), 10 < t))
          ) {
            if (Or(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = gi(xt.bind(null, e, ue, Ue), t);
            break;
          }
          xt(e, ue, Ue);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Me(r);
            (i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * yf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gi(xt.bind(null, e, ue, Ue), r);
            break;
          }
          xt(e, ue, Ue);
          break;
        case 5:
          xt(e, ue, Ue);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === n ? Ku.bind(null, e) : null;
}
function Fi(e, t) {
  var n = Tn;
  return (
    e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ue), (ue = n), t !== null && Ai(t)),
    e
  );
}
function Ai(e) {
  ue === null ? (ue = e) : ue.push.apply(ue, e);
}
function xf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Re(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~No,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Me(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Us(e) {
  if (M & 6) throw Error(y(327));
  Zt();
  var t = Or(e, 0);
  if (!(t & 1)) return pe(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && ((t = r), (n = Fi(e, r)));
  }
  if (n === 1) throw ((n = Kn), St(e, 0), et(e, t), pe(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, ue, Ue),
    pe(e, Q()),
    null
  );
}
function _o(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    (M = n), M === 0 && ((rn = Q() + 500), sl && mt());
  }
}
function Tt(e) {
  nt !== null && nt.tag === 0 && !(M & 6) && Zt();
  var t = M;
  M |= 1;
  var n = Ce.transition,
    r = I;
  try {
    if (((Ce.transition = null), (I = 1), e)) return e();
  } finally {
    (I = r), (Ce.transition = n), (M = t), !(M & 6) && mt();
  }
}
function Po() {
  (he = Vt.current), D(Vt);
}
function St(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Gd(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ur();
          break;
        case 3:
          tn(), D(de), D(le), go();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          D(B);
          break;
        case 19:
          D(B);
          break;
        case 10:
          fo(r.type._context);
          break;
        case 22:
        case 23:
          Po();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Y = e = ct(e.current, null)),
    (b = he = t),
    (G = 0),
    (Kn = null),
    (No = dl = Pt = 0),
    (ue = Tn = null),
    kt !== null)
  ) {
    for (t = 0; t < kt.length; t++)
      if (((n = kt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = l), (r.next = s);
        }
        n.pending = r;
      }
    kt = null;
  }
  return e;
}
function Gu(e, t) {
  do {
    var n = Y;
    try {
      if ((co(), (Nr.current = Xr), Gr)) {
        for (var r = U.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((_t = 0),
        (Z = K = U = null),
        (_n = !1),
        (Vn = 0),
        (Co.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Kn = t), (Y = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          u = t;
        if (
          ((t = b),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            v = a,
            m = v.tag;
          if (!(v.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = v.alternate;
            h
              ? ((v.updateQueue = h.updateQueue),
                (v.memoizedState = h.memoizedState),
                (v.lanes = h.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var x = _s(s);
          if (x !== null) {
            (x.flags &= -257),
              Ps(x, s, a, i, t),
              x.mode & 1 && Es(i, d, t),
              (t = x),
              (u = d);
            var w = t.updateQueue;
            if (w === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Es(i, d, t), To();
              break e;
            }
            u = Error(y(426));
          }
        } else if (A && a.mode & 1) {
          var F = _s(s);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              Ps(F, s, a, i, t),
              ao(nn(u, a));
            break e;
          }
        }
        (i = u = nn(u, a)),
          G !== 4 && (G = 2),
          Tn === null ? (Tn = [i]) : Tn.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = zu(i, u, t);
              ws(i, f);
              break e;
            case 1:
              a = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (at === null || !at.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Mu(i, a, t);
                ws(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ju(n);
    } catch (S) {
      (t = S), Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xu() {
  var e = Zr.current;
  return (Zr.current = Xr), e === null ? Xr : e;
}
function To() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Pt & 268435455) && !(dl & 268435455)) || et(J, b);
}
function br(e, t) {
  var n = M;
  M |= 2;
  var r = Xu();
  (J !== e || b !== t) && ((Ue = null), St(e, t));
  do
    try {
      wf();
      break;
    } catch (l) {
      Gu(e, l);
    }
  while (!0);
  if ((co(), (M = n), (Zr.current = r), Y !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function wf() {
  for (; Y !== null; ) Zu(Y);
}
function kf() {
  for (; Y !== null && !Qc(); ) Zu(Y);
}
function Zu(e) {
  var t = bu(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ju(e) : (Y = t),
    (Co.current = null);
}
function Ju(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hf(n, t)), n !== null)) {
        (n.flags &= 32767), (Y = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Y = null);
        return;
      }
    } else if (((n = pf(n, t, he)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function xt(e, t, n) {
  var r = I,
    l = Ce.transition;
  try {
    (Ce.transition = null), (I = 1), jf(e, t, n, r);
  } finally {
    (Ce.transition = l), (I = r);
  }
  return null;
}
function jf(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (M & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (td(e, i),
    e === J && ((Y = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vr ||
      ((vr = !0),
      ec(Rr, function () {
        return Zt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var s = I;
    I = 1;
    var a = M;
    (M |= 4),
      (Co.current = null),
      vf(e, n),
      Qu(n, e),
      $d(mi),
      (Dr = !!hi),
      (mi = hi = null),
      (e.current = n),
      gf(n),
      Yc(),
      (M = a),
      (I = s),
      (Ce.transition = i);
  } else e.current = n;
  if (
    (vr && ((vr = !1), (nt = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    Xc(n.stateNode),
    pe(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Oi), (Oi = null), e);
  return (
    qr & 1 && e.tag !== 0 && Zt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Di ? Ln++ : ((Ln = 0), (Di = e))) : (Ln = 0),
    mt(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = za(qr),
      t = Ce.transition,
      n = I;
    try {
      if (((Ce.transition = null), (I = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (qr = 0), M & 6)) throw Error(y(331));
        var l = M;
        for (M |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (j = d; j !== null; ) {
                  var v = j;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, v, i);
                  }
                  var m = v.child;
                  if (m !== null) (m.return = v), (j = m);
                  else
                    for (; j !== null; ) {
                      v = j;
                      var h = v.sibling,
                        x = v.return;
                      if ((Hu(v), v === d)) {
                        j = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = x), (j = h);
                        break;
                      }
                      j = x;
                    }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var k = w.child;
                if (k !== null) {
                  w.child = null;
                  do {
                    var F = k.sibling;
                    (k.sibling = null), (k = F);
                  } while (k !== null);
                }
              }
              j = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (j = s);
          else
            e: for (; j !== null; ) {
              if (((i = j), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pn(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (j = f);
                break e;
              }
              j = i.return;
            }
        }
        var c = e.current;
        for (j = c; j !== null; ) {
          s = j;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (j = p);
          else
            e: for (s = c; j !== null; ) {
              if (((a = j), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      cl(9, a);
                  }
                } catch (S) {
                  H(a, a.return, S);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var g = a.sibling;
              if (g !== null) {
                (g.return = a.return), (j = g);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((M = l), mt(), Ae && typeof Ae.onPostCommitFiberRoot == "function")
        )
          try {
            Ae.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (I = n), (Ce.transition = t);
    }
  }
  return !1;
}
function $s(e, t, n) {
  (t = nn(n, t)),
    (t = zu(e, t, 1)),
    (e = st(e, t, 1)),
    (t = oe()),
    e !== null && (Xn(e, 1, t), pe(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) $s(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $s(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = nn(n, e)),
            (e = Mu(t, e, 1)),
            (t = st(t, e, 1)),
            (e = oe()),
            t !== null && (Xn(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Sf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Eo)
        ? St(e, 0)
        : (No |= n)),
    pe(e, t);
}
function qu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ke(e, t)), e !== null && (Xn(e, t, n), pe(e, n));
}
function Cf(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qu(e, n);
}
function Nf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), qu(e, n);
}
var bu;
bu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), ff(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), A && t.flags & 1048576 && ru(t, Wr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _r(e, t), (e = t.pendingProps);
      var l = qt(t, le.current);
      Xt(t, n), (l = xo(null, t, r, e, l, n));
      var i = wo();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            fe(r) ? ((i = !0), $r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ci(t, r, e, n),
            (t = _i(null, t, r, !0, i, n)))
          : ((t.tag = 0), A && i && oo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_r(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = _f(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = Ei(null, t, r, e, n);
            break e;
          case 1:
            t = zs(null, t, r, e, n);
            break e;
          case 11:
            t = Ts(null, t, r, e, n);
            break e;
          case 14:
            t = Ls(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ei(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        zs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Du(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          uu(e, t),
          Yr(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = nn(Error(y(423)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = Ms(e, t, r, n, l));
            break e;
          } else
            for (
              me = ot(t.stateNode.containerInfo.firstChild),
                ve = t,
                A = !0,
                ze = null,
                n = su(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bt(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        cu(t),
        e === null && ki(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = l.children),
        vi(r, l) ? (s = null) : i !== null && vi(r, i) && (t.flags |= 32),
        Ou(e, t),
        ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Fu(e, t, n);
    case 4:
      return (
        mo(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = en(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Ts(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (s = l.value),
          R(Vr, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (Re(i.value, s)) {
            if (i.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Ve(-1, n & -n)), (u.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var v = d.pending;
                        v === null
                          ? (u.next = u)
                          : ((u.next = v.next), (v.next = u)),
                          (d.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      ji(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(y(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ji(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Xt(t, n),
        (l = Ne(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Te(r, t.pendingProps)),
        (l = Te(r.type, l)),
        Ls(e, t, r, l, n)
      );
    case 15:
      return Iu(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        _r(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), $r(t)) : (e = !1),
        Xt(t, n),
        Lu(t, r, l),
        Ci(t, r, l, n),
        _i(null, t, r, !0, e, n)
      );
    case 19:
      return Au(e, t, n);
    case 22:
      return Ru(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ec(e, t) {
  return _a(e, t);
}
function Ef(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Se(e, t, n, r) {
  return new Ef(e, t, n, r);
}
function Lo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _f(e) {
  if (typeof e == "function") return Lo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gi)) return 11;
    if (e === Xi) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Se(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Lr(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Lo(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Rt:
        return Ct(n.children, l, i, t);
      case Ki:
        (s = 8), (l |= 8);
        break;
      case Gl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Gl), (e.lanes = i), e
        );
      case Xl:
        return (e = Se(13, n, t, l)), (e.elementType = Xl), (e.lanes = i), e;
      case Zl:
        return (e = Se(19, n, t, l)), (e.elementType = Zl), (e.lanes = i), e;
      case ca:
        return fl(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case aa:
              s = 10;
              break e;
            case ua:
              s = 9;
              break e;
            case Gi:
              s = 11;
              break e;
            case Xi:
              s = 14;
              break e;
            case Je:
              (s = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Se(s, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Ct(e, t, n, r) {
  return (e = Se(7, e, r, t)), (e.lanes = n), e;
}
function fl(e, t, n, r) {
  return (
    (e = Se(22, e, r, t)),
    (e.elementType = ca),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = Se(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Pf(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Nl(0)),
    (this.expirationTimes = Nl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Nl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function zo(e, t, n, r, l, i, s, a, u) {
  return (
    (e = new Pf(e, t, n, a, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Se(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(i),
    e
  );
}
function Tf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: It,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function tc(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (zt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (fe(n)) return tu(e, n, t);
  }
  return t;
}
function nc(e, t, n, r, l, i, s, a, u) {
  return (
    (e = zo(n, r, !0, e, l, i, s, a, u)),
    (e.context = tc(null)),
    (n = e.current),
    (r = oe()),
    (l = ut(n)),
    (i = Ve(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    Xn(e, l, r),
    pe(e, r),
    e
  );
}
function pl(e, t, n, r) {
  var l = t.current,
    i = oe(),
    s = ut(l);
  return (
    (n = tc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, s)),
    e !== null && (Ie(e, l, s, i), Cr(e, l, s)),
    s
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Mo(e, t) {
  Hs(e, t), (e = e.alternate) && Hs(e, t);
}
function Lf() {
  return null;
}
var rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Io(e) {
  this._internalRoot = e;
}
hl.prototype.render = Io.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
hl.prototype.unmount = Io.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tt(function () {
      pl(null, e, null, null);
    }),
      (t[Ye] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ra();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Da(e);
  }
};
function Ro(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ws() {}
function zf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = el(s);
        i.call(d);
      };
    }
    var s = nc(t, r, e, 0, null, !1, !1, "", Ws);
    return (
      (e._reactRootContainer = s),
      (e[Ye] = s.current),
      Bn(e.nodeType === 8 ? e.parentNode : e),
      Tt(),
      s
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var d = el(u);
      a.call(d);
    };
  }
  var u = zo(e, 0, !1, null, null, !1, !1, "", Ws);
  return (
    (e._reactRootContainer = u),
    (e[Ye] = u.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    Tt(function () {
      pl(t, u, n, r);
    }),
    u
  );
}
function vl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = el(s);
        a.call(u);
      };
    }
    pl(t, s, e, l);
  } else s = zf(n, t, e, l, r);
  return el(s);
}
Ma = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (qi(t, n | 1), pe(t, Q()), !(M & 6) && ((rn = Q() + 500), mt()));
      }
      break;
    case 13:
      Tt(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Ie(r, e, 1, l);
        }
      }),
        Mo(e, 1);
  }
};
bi = function (e) {
  if (e.tag === 13) {
    var t = Ke(e, 134217728);
    if (t !== null) {
      var n = oe();
      Ie(t, e, 134217728, n);
    }
    Mo(e, 134217728);
  }
};
Ia = function (e) {
  if (e.tag === 13) {
    var t = ut(e),
      n = Ke(e, t);
    if (n !== null) {
      var r = oe();
      Ie(n, e, t, r);
    }
    Mo(e, t);
  }
};
Ra = function () {
  return I;
};
Oa = function (e, t) {
  var n = I;
  try {
    return (I = e), t();
  } finally {
    I = n;
  }
};
oi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((bl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = ol(r);
            if (!l) throw Error(y(90));
            fa(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qt(e, !!n.multiple, t, !1);
  }
};
ka = _o;
ja = Tt;
var Mf = { usingClientEntryPoint: !1, Events: [Jn, At, ol, xa, wa, _o] },
  gn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  If = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Na(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Lf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (nl = gr.inject(If)), (Ae = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mf;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ro(t)) throw Error(y(200));
  return Tf(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Ro(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = zo(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ye] = t.current),
    Bn(e.nodeType === 8 ? e.parentNode : e),
    new Io(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Na(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Tt(e);
};
ye.hydrate = function (e, t, n) {
  if (!ml(t)) throw Error(y(200));
  return vl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Ro(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    s = rc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = nc(t, null, e, 1, n ?? null, l, !1, i, s)),
    (e[Ye] = t.current),
    Bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new hl(t);
};
ye.render = function (e, t, n) {
  if (!ml(t)) throw Error(y(200));
  return vl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Tt(function () {
        vl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ye] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = _o;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ml(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return vl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function lc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lc);
    } catch (e) {
      console.error(e);
    }
}
lc(), (la.exports = ye);
var Rf = la.exports,
  Vs = Rf;
(Yl.createRoot = Vs.createRoot), (Yl.hydrateRoot = Vs.hydrateRoot);
const Of = (e) => {
    let t = document.querySelector(".nav-background");
    return (
      (window.onscroll = function () {
        document.documentElement.scrollTop > 20
          ? t.classList.add("on-scroll")
          : t.classList.remove("on-scroll");
      }),
      o.jsx("div", {
        children: o.jsx("nav", {
          className: `navbar  nav-background navbar-expand-lg w-100 fixed-top bg-${e.mode} navbar-${e.mode}`,
          children: o.jsxs("div", {
            className: "container-fluid",
            children: [
              o.jsxs("a", {
                className: "navbar-brand fw-bold mx-5  ",
                style: { fontfamily: "Roboto Mono, monospace" },
                href: "#",
                children: [
                  o.jsx("i", { className: "fa-solid fa-less-than" }),
                  "Yash",
                  o.jsxs("span", {
                    style: {
                      color: e.mode === "dark" ? "#00ff99" : "#00b271",
                      fontfamily: "Roboto Mono, monospace",
                    },
                    children: [
                      "Singhal/",
                      o.jsx("i", { className: "fa-solid fa-greater-than" }),
                    ],
                  }),
                ],
              }),
              o.jsx("button", {
                className: "navbar-toggler",
                type: "button",
                "data-bs-toggle": "collapse",
                "data-bs-target": "#navbarSupportedContent",
                "aria-controls": "navbarSupportedContent",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
                children: o.jsx("span", { className: "navbar-toggler-icon" }),
              }),
              o.jsxs("div", {
                className: "collapse navbar-collapse",
                id: "navbarSupportedContent",
                children: [
                  o.jsxs("ul", {
                    className: "navbar-nav mx-auto  me-5 mb-2 mb-lg-0",
                    children: [
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link active",
                          "aria-current": "page",
                          href: "#home",
                          children: "Home",
                        }),
                      }),
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link",
                          href: "#about",
                          children: "About",
                        }),
                      }),
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link",
                          href: "#skills",
                          children: "Skills",
                        }),
                      }),
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link",
                          href: "#education",
                          children: "Education",
                        }),
                      }),
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link",
                          href: "#projects",
                          children: "Projects",
                        }),
                      }),
                      o.jsx("li", {
                        className: "nav-item",
                        children: o.jsx("a", {
                          className: "nav-link",
                          href: "#contact",
                          children: "Contact",
                        }),
                      }),
                    ],
                  }),
                  o.jsxs("div", {
                    className: `form-check form-switch text-${
                      e.mode === "light" ? "dark" : "light"
                    }`,
                    children: [
                      o.jsx("input", {
                        className: "form-check-input",
                        onClick: e.toggleMode,
                        type: "checkbox",
                        role: "switch",
                        id: "flexSwitchCheckDefault",
                      }),
                      o.jsx("label", {
                        className: "form-check-label",
                        htmlFor: "flexSwitchCheckDefault",
                        style: {
                          backgroundColor:
                            e.mode === "dark"
                              ? "Enable Dark Mode"
                              : "Enable light Mode",
                          color: e.mode === "dark" ? "white" : "black",
                        },
                        children: "Enable Dark Mode",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  Df = "Resume-BpHCc5pE.pdf";
function Bi() {
  return (
    (Bi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Bi.apply(this, arguments)
  );
}
var Ff = {
    strings: [
      "These are the default values...",
      "You know what you should do?",
      "Use your own!",
      "Have a great day!",
    ],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    smartBackspace: !0,
    shuffle: !1,
    backDelay: 700,
    fadeOut: !1,
    fadeOutClass: "typed-fade-out",
    fadeOutDelay: 500,
    loop: !1,
    loopCount: 1 / 0,
    showCursor: !0,
    cursorChar: "|",
    autoInsertCss: !0,
    attr: null,
    bindInputFocusEvents: !1,
    contentType: "html",
    onBegin: function (e) {},
    onComplete: function (e) {},
    preStringTyped: function (e, t) {},
    onStringTyped: function (e, t) {},
    onLastStringBackspaced: function (e) {},
    onTypingPaused: function (e, t) {},
    onTypingResumed: function (e, t) {},
    onReset: function (e) {},
    onStop: function (e, t) {},
    onStart: function (e, t) {},
    onDestroy: function (e) {},
  },
  Af = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.load = function (n, r, l) {
        if (
          ((n.el = typeof l == "string" ? document.querySelector(l) : l),
          (n.options = Bi({}, Ff, r)),
          (n.isInput = n.el.tagName.toLowerCase() === "input"),
          (n.attr = n.options.attr),
          (n.bindInputFocusEvents = n.options.bindInputFocusEvents),
          (n.showCursor = !n.isInput && n.options.showCursor),
          (n.cursorChar = n.options.cursorChar),
          (n.cursorBlinking = !0),
          (n.elContent = n.attr ? n.el.getAttribute(n.attr) : n.el.textContent),
          (n.contentType = n.options.contentType),
          (n.typeSpeed = n.options.typeSpeed),
          (n.startDelay = n.options.startDelay),
          (n.backSpeed = n.options.backSpeed),
          (n.smartBackspace = n.options.smartBackspace),
          (n.backDelay = n.options.backDelay),
          (n.fadeOut = n.options.fadeOut),
          (n.fadeOutClass = n.options.fadeOutClass),
          (n.fadeOutDelay = n.options.fadeOutDelay),
          (n.isPaused = !1),
          (n.strings = n.options.strings.map(function (d) {
            return d.trim();
          })),
          (n.stringsElement =
            typeof n.options.stringsElement == "string"
              ? document.querySelector(n.options.stringsElement)
              : n.options.stringsElement),
          n.stringsElement)
        ) {
          (n.strings = []),
            (n.stringsElement.style.cssText =
              "clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;");
          var i = Array.prototype.slice.apply(n.stringsElement.children),
            s = i.length;
          if (s)
            for (var a = 0; a < s; a += 1)
              n.strings.push(i[a].innerHTML.trim());
        }
        for (var u in ((n.strPos = 0),
        (n.currentElContent = this.getCurrentElContent(n)),
        n.currentElContent &&
          n.currentElContent.length > 0 &&
          ((n.strPos = n.currentElContent.length - 1),
          n.strings.unshift(n.currentElContent)),
        (n.sequence = []),
        n.strings))
          n.sequence[u] = u;
        (n.arrayPos = 0),
          (n.stopNum = 0),
          (n.loop = n.options.loop),
          (n.loopCount = n.options.loopCount),
          (n.curLoop = 0),
          (n.shuffle = n.options.shuffle),
          (n.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0,
          }),
          (n.typingComplete = !1),
          (n.autoInsertCss = n.options.autoInsertCss),
          n.autoInsertCss &&
            (this.appendCursorAnimationCss(n),
            this.appendFadeOutAnimationCss(n));
      }),
      (t.getCurrentElContent = function (n) {
        return n.attr
          ? n.el.getAttribute(n.attr)
          : n.isInput
          ? n.el.value
          : n.contentType === "html"
          ? n.el.innerHTML
          : n.el.textContent;
      }),
      (t.appendCursorAnimationCss = function (n) {
        var r = "data-typed-js-cursor-css";
        if (n.showCursor && !document.querySelector("[" + r + "]")) {
          var l = document.createElement("style");
          l.setAttribute(r, "true"),
            (l.innerHTML = `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
            document.body.appendChild(l);
        }
      }),
      (t.appendFadeOutAnimationCss = function (n) {
        var r = "data-typed-fadeout-js-css";
        if (n.fadeOut && !document.querySelector("[" + r + "]")) {
          var l = document.createElement("style");
          l.setAttribute(r, "true"),
            (l.innerHTML = `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
            document.body.appendChild(l);
        }
      }),
      e
    );
  })())(),
  Qs = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.typeHtmlChars = function (n, r, l) {
        if (l.contentType !== "html") return r;
        var i = n.substring(r).charAt(0);
        if (i === "<" || i === "&") {
          var s;
          for (
            s = i === "<" ? ">" : ";";
            n.substring(r + 1).charAt(0) !== s && !(1 + ++r > n.length);

          );
          r++;
        }
        return r;
      }),
      (t.backSpaceHtmlChars = function (n, r, l) {
        if (l.contentType !== "html") return r;
        var i = n.substring(r).charAt(0);
        if (i === ">" || i === ";") {
          var s;
          for (
            s = i === ">" ? "<" : "&";
            n.substring(r - 1).charAt(0) !== s && !(--r < 0);

          );
          r--;
        }
        return r;
      }),
      e
    );
  })())(),
  Bf = (function () {
    function e(n, r) {
      Af.load(this, r, n), this.begin();
    }
    var t = e.prototype;
    return (
      (t.toggle = function () {
        this.pause.status ? this.start() : this.stop();
      }),
      (t.stop = function () {
        this.typingComplete ||
          this.pause.status ||
          (this.toggleBlinking(!0),
          (this.pause.status = !0),
          this.options.onStop(this.arrayPos, this));
      }),
      (t.start = function () {
        this.typingComplete ||
          (this.pause.status &&
            ((this.pause.status = !1),
            this.pause.typewrite
              ? this.typewrite(this.pause.curString, this.pause.curStrPos)
              : this.backspace(this.pause.curString, this.pause.curStrPos),
            this.options.onStart(this.arrayPos, this)));
      }),
      (t.destroy = function () {
        this.reset(!1), this.options.onDestroy(this);
      }),
      (t.reset = function (n) {
        n === void 0 && (n = !0),
          clearInterval(this.timeout),
          this.replaceText(""),
          this.cursor &&
            this.cursor.parentNode &&
            (this.cursor.parentNode.removeChild(this.cursor),
            (this.cursor = null)),
          (this.strPos = 0),
          (this.arrayPos = 0),
          (this.curLoop = 0),
          n && (this.insertCursor(), this.options.onReset(this), this.begin());
      }),
      (t.begin = function () {
        var n = this;
        this.options.onBegin(this),
          (this.typingComplete = !1),
          this.shuffleStringsIfNeeded(this),
          this.insertCursor(),
          this.bindInputFocusEvents && this.bindFocusEvents(),
          (this.timeout = setTimeout(function () {
            n.strPos === 0
              ? n.typewrite(n.strings[n.sequence[n.arrayPos]], n.strPos)
              : n.backspace(n.strings[n.sequence[n.arrayPos]], n.strPos);
          }, this.startDelay));
      }),
      (t.typewrite = function (n, r) {
        var l = this;
        this.fadeOut &&
          this.el.classList.contains(this.fadeOutClass) &&
          (this.el.classList.remove(this.fadeOutClass),
          this.cursor && this.cursor.classList.remove(this.fadeOutClass));
        var i = this.humanizer(this.typeSpeed),
          s = 1;
        this.pause.status !== !0
          ? (this.timeout = setTimeout(function () {
              r = Qs.typeHtmlChars(n, r, l);
              var a = 0,
                u = n.substring(r);
              if (u.charAt(0) === "^" && /^\^\d+/.test(u)) {
                var d = 1;
                (d += (u = /\d+/.exec(u)[0]).length),
                  (a = parseInt(u)),
                  (l.temporaryPause = !0),
                  l.options.onTypingPaused(l.arrayPos, l),
                  (n = n.substring(0, r) + n.substring(r + d)),
                  l.toggleBlinking(!0);
              }
              if (u.charAt(0) === "`") {
                for (
                  ;
                  n.substring(r + s).charAt(0) !== "`" &&
                  (s++, !(r + s > n.length));

                );
                var v = n.substring(0, r),
                  m = n.substring(v.length + 1, r + s),
                  h = n.substring(r + s + 1);
                (n = v + m + h), s--;
              }
              l.timeout = setTimeout(function () {
                l.toggleBlinking(!1),
                  r >= n.length ? l.doneTyping(n, r) : l.keepTyping(n, r, s),
                  l.temporaryPause &&
                    ((l.temporaryPause = !1),
                    l.options.onTypingResumed(l.arrayPos, l));
              }, a);
            }, i))
          : this.setPauseStatus(n, r, !0);
      }),
      (t.keepTyping = function (n, r, l) {
        r === 0 &&
          (this.toggleBlinking(!1),
          this.options.preStringTyped(this.arrayPos, this));
        var i = n.substring(0, (r += l));
        this.replaceText(i), this.typewrite(n, r);
      }),
      (t.doneTyping = function (n, r) {
        var l = this;
        this.options.onStringTyped(this.arrayPos, this),
          this.toggleBlinking(!0),
          (this.arrayPos === this.strings.length - 1 &&
            (this.complete(),
            this.loop === !1 || this.curLoop === this.loopCount)) ||
            (this.timeout = setTimeout(function () {
              l.backspace(n, r);
            }, this.backDelay));
      }),
      (t.backspace = function (n, r) {
        var l = this;
        if (this.pause.status !== !0) {
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var i = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            r = Qs.backSpaceHtmlChars(n, r, l);
            var s = n.substring(0, r);
            if ((l.replaceText(s), l.smartBackspace)) {
              var a = l.strings[l.arrayPos + 1];
              l.stopNum = a && s === a.substring(0, r) ? r : 0;
            }
            r > l.stopNum
              ? (r--, l.backspace(n, r))
              : r <= l.stopNum &&
                (l.arrayPos++,
                l.arrayPos === l.strings.length
                  ? ((l.arrayPos = 0),
                    l.options.onLastStringBackspaced(),
                    l.shuffleStringsIfNeeded(),
                    l.begin())
                  : l.typewrite(l.strings[l.sequence[l.arrayPos]], r));
          }, i);
        } else this.setPauseStatus(n, r, !1);
      }),
      (t.complete = function () {
        this.options.onComplete(this),
          this.loop ? this.curLoop++ : (this.typingComplete = !0);
      }),
      (t.setPauseStatus = function (n, r, l) {
        (this.pause.typewrite = l),
          (this.pause.curString = n),
          (this.pause.curStrPos = r);
      }),
      (t.toggleBlinking = function (n) {
        this.cursor &&
          (this.pause.status ||
            (this.cursorBlinking !== n &&
              ((this.cursorBlinking = n),
              n
                ? this.cursor.classList.add("typed-cursor--blink")
                : this.cursor.classList.remove("typed-cursor--blink"))));
      }),
      (t.humanizer = function (n) {
        return Math.round((Math.random() * n) / 2) + n;
      }),
      (t.shuffleStringsIfNeeded = function () {
        this.shuffle &&
          (this.sequence = this.sequence.sort(function () {
            return Math.random() - 0.5;
          }));
      }),
      (t.initFadeOut = function () {
        var n = this;
        return (
          (this.el.className += " " + this.fadeOutClass),
          this.cursor && (this.cursor.className += " " + this.fadeOutClass),
          setTimeout(function () {
            n.arrayPos++,
              n.replaceText(""),
              n.strings.length > n.arrayPos
                ? n.typewrite(n.strings[n.sequence[n.arrayPos]], 0)
                : (n.typewrite(n.strings[0], 0), (n.arrayPos = 0));
          }, this.fadeOutDelay)
        );
      }),
      (t.replaceText = function (n) {
        this.attr
          ? this.el.setAttribute(this.attr, n)
          : this.isInput
          ? (this.el.value = n)
          : this.contentType === "html"
          ? (this.el.innerHTML = n)
          : (this.el.textContent = n);
      }),
      (t.bindFocusEvents = function () {
        var n = this;
        this.isInput &&
          (this.el.addEventListener("focus", function (r) {
            n.stop();
          }),
          this.el.addEventListener("blur", function (r) {
            (n.el.value && n.el.value.length !== 0) || n.start();
          }));
      }),
      (t.insertCursor = function () {
        this.showCursor &&
          (this.cursor ||
            ((this.cursor = document.createElement("span")),
            (this.cursor.className = "typed-cursor"),
            this.cursor.setAttribute("aria-hidden", !0),
            (this.cursor.innerHTML = this.cursorChar),
            this.el.parentNode &&
              this.el.parentNode.insertBefore(
                this.cursor,
                this.el.nextSibling
              )));
      }),
      e
    );
  })();
const ic = je.memo(
    ({
      style: e,
      className: t,
      typedRef: n,
      parseRef: r,
      stopped: l,
      children: i,
      startWhenVisible: s,
      ...a
    }) => {
      const u = je.useRef(null),
        d = je.useMemo(() => {
          var m;
          return [
            ...Object.values(a).filter(
              (h) =>
                typeof h == "boolean" ||
                typeof h == "number" ||
                typeof h == "string"
            ),
            (m = a.strings) == null ? void 0 : m.join(","),
          ];
        }, [a]);
      je.useEffect(() => {
        const m = (r && r(u)) || u.current,
          h = new Bf(m, { ...a });
        if (((l || s) && (h == null || h.stop()), s)) {
          const x = new IntersectionObserver(([w]) => {
            w.isIntersecting && (h == null || h.start(), x.disconnect());
          });
          x.observe(m);
        }
        return (
          n && h && n(h),
          () => {
            h.destroy();
          }
        );
      }, d);
      const v = i
        ? wr.cloneElement(i, { ref: u })
        : wr.createElement("span", { style: e, ref: u });
      return wr.createElement(
        "span",
        { style: e, className: t, "data-testid": "react-typed" },
        v
      );
    }
  ),
  Uf = () =>
    o.jsx("div", {
      children: o.jsx("div", {
        class: "card3",
        children: o.jsx("div", {
          class: "wrap",
          children: o.jsxs("div", {
            class: "terminal",
            children: [
              o.jsxs("hgroup", {
                class: "head",
                children: [
                  o.jsxs("p", {
                    class: "title",
                    children: [
                      o.jsx("svg", {
                        width: "16px",
                        height: "16px",
                        "aria-hidden": "true",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        "stroke-linejoin": "round",
                        "stroke-linecap": "round",
                        "stroke-width": "2",
                        stroke: "currentColor",
                        fill: "none",
                        children: o.jsx("path", {
                          d: "M7 15L10 12L7 9M13 15H17M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z",
                        }),
                      }),
                      "Terminal",
                    ],
                  }),
                  o.jsx("button", {
                    class: "copy_toggle",
                    tabindex: "-1",
                    type: "button",
                    children: o.jsxs("svg", {
                      width: "16px",
                      height: "16px",
                      "aria-hidden": "true",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      "stroke-linejoin": "round",
                      "stroke-linecap": "round",
                      "stroke-width": "2",
                      stroke: "currentColor",
                      fill: "none",
                      children: [
                        o.jsx("path", {
                          d: "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2",
                        }),
                        o.jsx("path", {
                          d: "M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              o.jsx("div", {
                class: "body",
                children: o.jsxs("pre", {
                  class: "pre",
                  children: [
                    "          ",
                    o.jsx("code", { children: "- " }),
                    o.jsx("code", { children: "npx " }),
                    o.jsx("span", {
                      className: "autonpx",
                      children: o.jsx(ic, {
                        strings: ["create-react-app Welcome To My Portfolio"],
                        typeSpeed: 140,
                        loop: !0,
                        backSpeed: 20,
                        cursorChar: "|",
                        showCursor: !0,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    }),
  $f = (e) =>
    o.jsx("div", {
      children: o.jsx("div", {
        className: "container   cntr",
        style: {
          backgroundColor: e.mode === "dark" ? "#000000" : "white",
          color: e.mode === "dark" ? "white" : "black",
          marginTop: "200px",
        },
        children: o.jsxs("div", {
          className: "row row-cols-1 row-cols-lg-2 g-4",
          children: [
            o.jsxs("div", {
              className: "col part1",
              children: [
                o.jsxs("h3", {
                  children: [
                    "Hi, Myself ",
                    o.jsx("img", {
                      src: "https://yashsinghal001.github.io/Portfolio-Website/output-onlinegiftools.gif",
                      className: "pb-3",
                      width: "50px",
                      alt: "",
                    }),
                  ],
                }),
                o.jsx("h1", { children: "Yash Singhal" }),
                o.jsxs("h2", {
                  children: [
                    " And I'm a ",
                    o.jsxs("span", {
                      style: {
                        color: e.mode === "dark" ? "#00ff99" : "#00b271",
                      },
                      className: "part1color",
                      children: [
                        " ",
                        o.jsx(ic, {
                          strings: ["Developer", "Student", "Designer"],
                          typeSpeed: 150,
                          loop: !0,
                          backSpeed: 20,
                          cursorChar: "|",
                          showCursor: !0,
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsx("p", {
                  className: "fs-6",
                  children:
                    "I am a motivated and enthusiastic fresher web developer, ready to leverage my skills in HTML, CSS, Bootstrap, JavaScript,   React, Redux and Core Java to create dynamic and visually appealing websites.",
                }),
                o.jsx(Uf, {}),
                o.jsx("main", {
                  children: o.jsxs("ul", {
                    className: "example-1",
                    children: [
                      o.jsxs("li", {
                        className: "icon-content",
                        children: [
                          o.jsx("a", {
                            className: "link",
                            "data-social": "spotify",
                            "aria-label": "Spotify",
                            href: "https://github.com/YashSinghal001",
                            target: "blank",
                            children: o.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              className: "bi bi-github",
                              viewBox: "0 0 16 16",
                              xmlSpace: "preserve",
                              children: o.jsx("path", {
                                d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8",
                                fill: "currentColor",
                              }),
                            }),
                          }),
                          o.jsx("div", {
                            className: "tooltip",
                            children: "GitHub",
                          }),
                        ],
                      }),
                      o.jsxs("li", {
                        className: "icon-content",
                        children: [
                          o.jsx("a", {
                            className: "link",
                            "data-social": "pinterest",
                            "aria-label": "Pinterest",
                            href: "https://www.instagram.com/yashsinghal21",
                            target: "blank",
                            children: o.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              fill: "currentColor",
                              className: "bi bi-instagram",
                              viewBox: "0 0 16 16",
                              xmlSpace: "preserve",
                              children: o.jsx("path", {
                                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334",
                                fill: "currentColor",
                              }),
                            }),
                          }),
                          o.jsx("div", {
                            className: "tooltip",
                            children: "Instagram",
                          }),
                        ],
                      }),
                      o.jsxs("li", {
                        className: "icon-content",
                        children: [
                          o.jsx("a", {
                            className: "link",
                            "data-social": "telegram",
                            "aria-label": "Telegram",
                            href: "https://web.telegram.org/a/#-1001275366077",
                            target: "blank",
                            children: o.jsx("svg", {
                              viewBox: "0 0 100 100",
                              version: "1.1",
                              children: o.jsx("path", {
                                fill: "currentColor",
                                d: "M95,9.9c-1.3-1.1-3.4-1.2-7-0.1c0,0,0,0,0,0c-2.5,0.8-24.7,9.2-44.3,17.3c-17.6,7.3-31.9,13.7-33.6,14.5  c-1.9,0.6-6,2.4-6.2,5.2c-0.1,1.8,1.4,3.4,4.3,4.7c3.1,1.6,16.8,6.2,19.7,7.1c1,3.4,6.9,23.3,7.2,24.5c0.4,1.8,1.6,2.8,2.2,3.2  c0.1,0.1,0.3,0.3,0.5,0.4c0.3,0.2,0.7,0.3,1.2,0.3c0.7,0,1.5-0.3,2.2-0.8c3.7-3,10.1-9.7,11.9-11.6c7.9,6.2,16.5,13.1,17.3,13.9  c0,0,0.1,0.1,0.1,0.1c1.9,1.6,3.9,2.5,5.7,2.5c0.6,0,1.2-0.1,1.8-0.3c2.1-0.7,3.6-2.7,4.1-5.4c0-0.1,0.1-0.5,0.3-1.2  c3.4-14.8,6.1-27.8,8.3-38.7c2.1-10.7,3.8-21.2,4.8-26.8c0.2-1.4,0.4-2.5,0.5-3.2C96.3,13.5,96.5,11.2,95,9.9z M30,58.3l47.7-31.6  c0.1-0.1,0.3-0.2,0.4-0.3c0,0,0,0,0,0c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2-0.1c-0.1,0.1-0.2,0.4-0.4,0.6L66,38.1  c-8.4,7.7-19.4,17.8-26.7,24.4c0,0,0,0,0,0.1c0,0-0.1,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1-0.1,0.2c0,0,0,0.1,0,0.1  c0,0,0,0,0,0.1c-0.5,5.6-1.4,15.2-1.8,19.5c0,0,0,0,0-0.1C36.8,81.4,31.2,62.3,30,58.3z",
                              }),
                            }),
                          }),
                          o.jsx("div", {
                            className: "tooltip",
                            children: "Telegram",
                          }),
                        ],
                      }),
                      o.jsx("a", {
                        href: Df,
                        target: "blank",
                        children: o.jsx("button", {
                          class: "button",
                          children: " Resume",
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            o.jsxs("div", {
              className: "col part1img  ",
              "data-tilt": !0,
              children: [
                o.jsxs("div", {
                  class: "spinner2",
                  children: [
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                  ],
                }),
                o.jsx("img", {
                  src: "https://yashsinghal001.github.io/Portfolio-Website/168746717.jpeg",
                  className: "rounded-5",
                  alt: "",
                  style: { position: "relative", zIndex: "100" },
                  "data-tilt": !0,
                }),
                o.jsxs("div", {
                  class: "spinner3",
                  children: [
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                    o.jsx("div", {}),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  Hf = (e) =>
    o.jsx("div", {
      children: o.jsxs("div", {
        className: "container mt-5 pt-5",
        style: {
          backgroundColor: e.mode === "dark" ? "#000000" : "white",
          color: e.mode === "dark" ? "white" : "black",
        },
        children: [
          o.jsx("div", {
            className: "row text-center",
            children: o.jsx("h2", {
              className: "fw-bold fs-2 mb-5",
              children: "Skills",
            }),
          }),
          o.jsxs("div", {
            className: "row row-cols-1 row-cols-lg-2",
            children: [
              o.jsxs("div", {
                className: "col",
                children: [
                  o.jsxs("h4", {
                    children: [
                      "HTML ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "95%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "CSS ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-css-131-722685.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "95%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "Bootsrap ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-bootstrap-7-1175254.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "98%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "JavaScript ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-3521515-2945018.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "93%" },
                    }),
                  }),
                ],
              }),
              o.jsxs("div", {
                className: "col",
                children: [
                  o.jsxs("h4", {
                    children: [
                      "GitHub ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-github-10516009-8630395.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "80%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "React JS ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "90%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "Java ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-java-59-1174952.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "75%" },
                    }),
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "Adobe Photoshop ",
                      o.jsx("img", {
                        src: "https://cdn.iconscout.com/icon/free/png-512/free-adobe-photoshop-3521261-2944765.png?f=webp&w=256",
                        width: "30px",
                        alt: "",
                      }),
                    ],
                  }),
                  o.jsx("div", {
                    className: "progress",
                    role: "progressbar",
                    "aria-label": "Animated striped example",
                    "aria-valuenow": "75",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                    children: o.jsx("div", {
                      className:
                        "progress-bar progress-bar-striped progress-bar-animated",
                      style: { width: "70%" },
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Wf = "online-8uhyc_Ep.png",
  Vf = (e) =>
    o.jsx("div", {
      children: o.jsx("div", {
        className: "container mt-5 pt-5",
        style: {
          backgroundColor: e.mode === "dark" ? "#000000" : "white",
          color: e.mode === "dark" ? "white" : "black",
        },
        children: o.jsxs("div", {
          className: "row row-cols-1 row-cols-lg-2 g-4",
          children: [
            o.jsxs("div", {
              className: "col",
              children: [
                o.jsx("h2", {
                  className: "fs-2 fw-bold",
                  children: "Projects",
                }),
                o.jsx("p", {
                  children:
                    "You can find all of  my projects on my GitHub Profile.You can view my activites,contributions and code on these projects. Some of these projects are completed and some are in progress.You can also leave a comments on the profile and start a discussion.I am always loooking for new projects and Ideas.You can also reach out to me on any of the socila media channels mentioned below.",
                }),
                o.jsx("a", {
                  href: "https://github.com/YashSinghal001",
                  target: "blank",
                  children: o.jsxs("div", {
                    className: "btn  experincebtn",
                    style: {
                      backgroundColor:
                        e.mode === "dark" ? "#27bd81 " : "#00BB76 ",
                      color: "white",
                    },
                    children: [
                      o.jsx("i", {
                        className: "fa-solid fa-star",
                        style: { color: "yellow" },
                      }),
                      " Star Me on GitHub",
                    ],
                  }),
                }),
              ],
            }),
            o.jsx("div", {
              className: "col experince",
              children: o.jsx("img", { src: Wf, alt: "" }),
            }),
          ],
        }),
      }),
    }),
  Qf = "Project1-DK1tIadi.png",
  Yf = "Project2-CCpSNmG7.png",
  Kf = "Project3-04gukf0n.png",
  Gf = "Project4-DK1npiQB.png",
  Xf = "Project5-PgLLbYFI.png",
  Zf = "Project6-WtHjktfX.png",
  Jf = "Age-IDmTMCqz.png",
  qf = "Cal-Bgqb5GMx.png",
  bf = "Tour-BF9nW1G6.png",
  ep = (e) =>
    o.jsx("div", {
      children: o.jsxs("div", {
        className: "container-fluid mt-5 pt-5",
        children: [
          o.jsxs("div", {
            className: "row  row-cols-1 row-cols-md-2 row-cols-lg-3 ",
            children: [
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Qf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Learning Platform" }),
                        o.jsx("p", {
                          children:
                            "Explore our comprehensive learning platform website offering a diverse range of courses and resources, tailored to enhance your skills and knowledge.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/LearningPlatformWebsite",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/LearningPlatformWebsite/",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: bf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Tour & Travels" }),
                        o.jsx("p", {
                          children:
                            " Tour & Travels project was to create an engaging and user-friendly platform that simplifies travel planning and booking. By integrating various features, I sought to enhance the overall travel experience, making it easier..",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsx("a", {
                              href: "https://toursandtravelsbyyashsinghal.netlify.app",
                              target: "blank",
                              children: o.jsxs("button", {
                                class: "btn2",
                                children: [
                                  o.jsx("i", { class: "animation" }),
                                  "Code",
                                  o.jsx("i", { class: "animation" }),
                                ],
                              }),
                            }),
                            o.jsxs("a", {
                              href: "https://toursandtravelsbyyashsinghal.netlify.app",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Yf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Uttrakhand Tour" }),
                        o.jsx("p", {
                          children:
                            "Embark on a virtual journey through Uttarakhand's breathtaking landscapes and rich cultural heritage on our tour website. Explore pristine mountains, serene lakes, and vibrant local traditions that define this Himalayan gem.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsx("a", {
                              href: "https://github.com/YashSinghal001/UttrakhandTourWebsite",
                              target: "blank",
                              children: o.jsxs("button", {
                                class: "btn2",
                                children: [
                                  o.jsx("i", { class: "animation" }),
                                  "Code",
                                  o.jsx("i", { class: "animation" }),
                                ],
                              }),
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/UttrakhandTourWebsite/",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "row  row-cols-1 row-cols-md-2 row-cols-lg-3 ",
            children: [
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Kf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Restaurant Website" }),
                        o.jsx("p", {
                          children:
                            "A restaurant website showcases the menu, ambiance, and unique offerings of a dining establishment. It provides essential information such as location, hours, and reservations to enhance the customer experience.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/FoodWebsite",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/FoodWebsite/",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Gf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Food Recipe Website" }),
                        o.jsx("p", {
                          children:
                            "Embark on a culinary adventure with our food website, where recipes from around the world await to inspire your kitchen creativity. Explore flavors, techniques, and tips that elevate every dish from ordinary to extraordinary.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://recipesbyyashsinghal.netlify.app",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://recipesbyyashsinghal.netlify.app",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Xf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Currency Calculator" }),
                        o.jsx("p", {
                          children:
                            "A currency calculator helps you quickly convert one country's currency to another, ensuring you get accurate exchange rates. It's a vital tool for travelers, businesses, and anyone dealing with international transactions.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/Currency-Converter",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/Currency-Converter/",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsxs("div", {
            className: "row  row-cols-1 row-cols-md-2 row-cols-lg-3 ",
            children: [
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: qf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Calculator" }),
                        o.jsx("p", {
                          children:
                            "I built this calculator project to deepen my understanding of JavaScript and improve my ability to create intuitive, responsive web applications. By making this tool, I aimed to provide users with a simple yet effective way to perform calculations.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/-Calculator-Using-React",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/-Calculator-Using-React/",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Zf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Meme Generator" }),
                        o.jsx("p", {
                          children:
                            "A meme generator allows users to create humorous and relatable images by adding captions to popular pictures. It's a fun tool for expressing creativity and sharing laughs on social media.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/Meme-Genrator",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/Meme-Genrator/",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              o.jsx("div", {
                className: "col ",
                children: o.jsxs("div", {
                  className: "card1",
                  style: {
                    backgroundColor: e.mode === "dark" ? "#000814" : "#f8f9fa",
                    color: e.mode === "dark" ? "white" : "black",
                  },
                  children: [
                    o.jsx("div", {
                      className: "pro",
                      children: o.jsx("img", { src: Jf, alt: "" }),
                    }),
                    o.jsxs("div", {
                      className: "protxt",
                      children: [
                        o.jsx("h3", { children: "Age Calculator" }),
                        o.jsx("p", {
                          children:
                            "I built this age calculator because it  offering a straightforward tool to calculate ages accurately, I aim to simplify a common task, making it easier for others to determine ages for various personal or professional purposes.",
                        }),
                        o.jsxs("div", {
                          className: "projectsbtns",
                          children: [
                            o.jsxs("a", {
                              href: "https://github.com/YashSinghal001/React-Age-Calculator",
                              target: "blank",
                              children: [
                                "   ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "Code",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                            o.jsxs("a", {
                              href: "https://yashsinghal001.github.io/React-Age-Calculator/",
                              target: "blank",
                              children: [
                                "    ",
                                o.jsxs("button", {
                                  class: "btn2",
                                  children: [
                                    o.jsx("i", { class: "animation" }),
                                    "live view",
                                    o.jsx("i", { class: "animation" }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          o.jsx("div", {
            className: "container text-center",
            children: o.jsxs("a", {
              class: "btn9 btn  experincebtnd",
              href: "https://github.com/YashSinghal001",
              target: "blank",
              style: {
                backgroundColor: e.mode === "dark" ? "#27bd81 " : "#00BB76 ",
                color: "white",
              },
              children: [
                o.jsx("span", { children: "View All" }),
                o.jsx("i", { className: "fa-solid fa-arrow-right" }),
              ],
            }),
          }),
        ],
      }),
    }),
  tp = () => {
    const [e, t] = je.useState("");
    return (
      je.useEffect(() => {
        setInterval(() => {
          const n = new Date().toGMTString();
          console.log(n), t(n);
        }, 1e3);
      }, []),
      o.jsx("div", {
        children: o.jsxs("h5", {
          children: [o.jsx("i", { class: "fa-solid fa-clock" }), " ", e],
        }),
      })
    );
  },
  np = (e) => {
    const [t, n] = je.useState({ name: "", email: "", message: "", copy: !1 }),
      [r, l] = je.useState({}),
      i = (u) => {
        const { name: d, value: v, type: m, checked: h } = u.target;
        n({ ...t, [d]: m === "checkbox" ? h : v });
      },
      s = () => {
        const u = {};
        return (
          t.name || (u.name = "Name is required"),
          t.email || (u.email = "Email is required"),
          t.message || (u.message = "Message is required"),
          l(u),
          Object.keys(u).length === 0
        );
      },
      a = (u) => {
        u.preventDefault(), s() && console.log("Form submitted:", t);
      };
    return o.jsx("div", {
      children: o.jsxs("div", {
        className: "container mt-5 pt-5",
        style: {
          backgroundColor: e.mode === "dark" ? "#000000" : "white",
          color: e.mode === "dark" ? "white" : "black",
        },
        children: [
          o.jsx("div", {
            className: "row text-center mb-5",
            children: o.jsx("h2", {
              className: "fs-2 fw-bold",
              children: "Reach Me Out",
            }),
          }),
          o.jsxs("div", {
            className: "row row-cols-1 row-cols-lg-2 g-4",
            children: [
              o.jsxs("div", {
                className: "col",
                children: [
                  o.jsx("h2", { children: "Have Any Questions?" }),
                  o.jsx("p", {
                    children:
                      "Do you have any questions or need more information? I'm here to assist you! Whether it's about a specific project, my skills, or how we can collaborate, don't hesitate to reach out. Your inquiries are important to me, and I'll do my best to respond promptly. Use the form below to send me a message, and let's start a conversation. Looking forward to hearing from you soon!",
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h5", {
                    children: [
                      o.jsx("i", {
                        className: "fa-solid fs-4 fa-mobile-screen-button",
                      }),
                      " +91-6397341005",
                    ],
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h5", {
                    children: [
                      o.jsx("i", { className: "fa-solid fs-4 fa-envelope" }),
                      " yash92singhal@gmail.com",
                    ],
                  }),
                  o.jsx("br", {}),
                  o.jsxs("h5", {
                    children: [
                      o.jsx("i", {
                        className: "fa-solid fs-4 fa-location-dot",
                      }),
                      " Uttrakhand,Dehradun",
                    ],
                  }),
                  o.jsx("br", {}),
                  o.jsx("h5", { children: o.jsx(tp, {}) }),
                ],
              }),
              o.jsx("div", {
                className: "col contactme",
                children: o.jsxs("form", {
                  style: {
                    border: "2px solid ",
                    borderRadius: "5px",
                    borderColor: e.mode === "dark" ? "white" : "#000000",
                    backdropFilter: "blur(10px)",
                    background:
                      "url(https://png.pngtree.com/png-vector/20230912/ourmid/pngtree-green-flower-clipart-png-image_10021632.png),rgb(108 108 108 / 14%)",
                    backgroundPosition: "center",
                    backgroundSize: "auto",
                  },
                  onSubmit: a,
                  children: [
                    o.jsxs("div", {
                      "data-mdb-input-init": !0,
                      className: "form-outline mb-4",
                      children: [
                        o.jsx("label", {
                          className: "form-label",
                          htmlFor: "form4Example1",
                          children: "Name",
                        }),
                        o.jsx("input", {
                          type: "text",
                          id: "form4Example1",
                          name: "name",
                          className: "form-control",
                          value: t.name,
                          onChange: i,
                        }),
                        r.name &&
                          o.jsx("div", {
                            className: "text-danger",
                            children: r.name,
                          }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-mdb-input-init": !0,
                      className: "form-outline mb-4",
                      children: [
                        o.jsx("label", {
                          className: "form-label",
                          htmlFor: "form4Example2",
                          children: "Email address",
                        }),
                        o.jsx("input", {
                          type: "email",
                          id: "form4Example2",
                          name: "email",
                          className: "form-control",
                          value: t.email,
                          onChange: i,
                        }),
                        r.email &&
                          o.jsx("div", {
                            className: "text-danger",
                            children: r.email,
                          }),
                      ],
                    }),
                    o.jsxs("div", {
                      "data-mdb-input-init": !0,
                      className: "form-outline mb-4",
                      children: [
                        o.jsx("label", {
                          className: "form-label",
                          htmlFor: "form4Example3",
                          children: "Message",
                        }),
                        o.jsx("textarea", {
                          className: "form-control",
                          id: "form4Example3",
                          name: "message",
                          rows: "4",
                          value: t.message,
                          onChange: i,
                        }),
                        r.message &&
                          o.jsx("div", {
                            className: "text-danger",
                            children: r.message,
                          }),
                      ],
                    }),
                    o.jsxs("div", {
                      className:
                        "form-check d-flex justify-content-center mb-4",
                      children: [
                        o.jsx("input", {
                          className: "form-check-input me-2",
                          type: "checkbox",
                          name: "copy",
                          checked: t.copy,
                          onChange: i,
                          id: "form4Example4",
                        }),
                        o.jsx("label", {
                          className: "form-check-label",
                          htmlFor: "form4Example4",
                          children: "Send me a copy of this message",
                        }),
                      ],
                    }),
                    o.jsxs("button", {
                      children: [
                        o.jsx("div", {
                          className: "svg-wrapper-1",
                          children: o.jsx("div", {
                            className: "svg-wrapper",
                            children: o.jsxs("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              width: "24",
                              height: "24",
                              children: [
                                o.jsx("path", {
                                  fill: "none",
                                  d: "M0 0h24v24H0z",
                                }),
                                o.jsx("path", {
                                  fill: "currentColor",
                                  d: "M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z",
                                }),
                              ],
                            }),
                          }),
                        }),
                        o.jsx("span", { children: "Send" }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  rp = (e) =>
    o.jsx("div", {
      children: o.jsxs("footer", {
        className: `bg-${e.mode} text-${e.mode} text-center text-lg-start mt-5 pt-5`,
        children: [
          o.jsx("div", {
            className: "container p-4",
            children: o.jsxs("div", {
              className: "row",
              children: [
                o.jsxs("div", {
                  className: "col-lg-6 col-md-12 mb-4 mb-md-0",
                  children: [
                    o.jsxs("h5", {
                      className: "text-uppercase fs-2 fw-bolder",
                      style: {
                        color: e.mode === "dark" ? "#ffffff" : "#000000",
                        fontfamily: "Roboto Mono, monospace",
                      },
                      href: "#",
                      children: [
                        o.jsx("i", { className: "fa-solid fa-less-than" }),
                        "Yash",
                        o.jsxs("span", {
                          style: {
                            color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            fontfamily: "Roboto Mono, monospace",
                          },
                          children: [
                            "Singhal/",
                            o.jsx("i", {
                              className: "fa-solid fa-greater-than",
                            }),
                          ],
                        }),
                      ],
                    }),
                    o.jsx("p", {
                      style: {
                        color: e.mode === "dark" ? "#00ff99" : "#00b271",
                        fontWeight: "500",
                      },
                      children:
                        "Need any help with your projects? Contact me at the palces mentioned below. I will try to get back to you as fast as I can.",
                    }),
                    o.jsxs("div", {
                      className: "social-buttons",
                      children: [
                        o.jsx("a", {
                          href: "https://github.com/YashSinghal001",
                          target: "blank",
                          className: "social-button github",
                          children: o.jsx("svg", {
                            className: "cf-icon-svg",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "-2.5 0 19 19",
                            children: o.jsx("path", {
                              d: "M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z",
                            }),
                          }),
                        }),
                        o.jsx("a", {
                          href: "https://www.linkedin.com/in/yash-singhal-34b44b326/",
                          target: "balnk",
                          className: "social-button linkedin",
                          children: o.jsx("svg", {
                            viewBox: "0 -2 44 44",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            children: o.jsx("g", {
                              id: "Icons",
                              stroke: "none",
                              strokeWidth: "1",
                              children: o.jsx("g", {
                                transform:
                                  "translate(-702.000000, -265.000000)",
                                children: o.jsx("path", {
                                  d: "M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z",
                                  id: "LinkedIn",
                                }),
                              }),
                            }),
                          }),
                        }),
                        o.jsx("a", {
                          href: "https://www.instagram.com/yashsinghal21",
                          target: "blank",
                          className: "social-button instagram",
                          children: o.jsx("svg", {
                            width: "800px",
                            height: "800px",
                            viewBox: "0 0 20 20",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            children: o.jsx("g", {
                              id: "Page-1",
                              stroke: "none",
                              strokeWidth: "1",
                              children: o.jsx("g", {
                                id: "Dribbble-Light-Preview",
                                transform:
                                  "translate(-340.000000, -7439.000000)",
                                children: o.jsx("g", {
                                  id: "icons",
                                  transform: "translate(56.000000, 160.000000)",
                                  children: o.jsx("path", {
                                    d: "M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792",
                                    id: "instagram-[#167]",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "col-lg-3 col-md-6 mb-4 mb-md-0",
                  children: [
                    o.jsx("h5", {
                      className: "text-uppercase fw-bold",
                      style: { color: e.mode === "dark" ? "white" : "black" },
                      children: "CaTEGORIES",
                    }),
                    o.jsxs("ul", {
                      className: "list-unstyled mb-0",
                      children: [
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/LearningPlatformWebsite/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Learning Platform",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/EShop-Website/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "E-Shop Website",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/Arc-Website/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Arc Website",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/Credit-Card-Creator/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Credit Card Genrator",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/FoodWebsite/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Resturant Website",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "https://yashsinghal001.github.io/DigitalClock/",
                            target: "blank",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Digital Clock",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "col-lg-3 col-md-6 mb-4 mb-md-0",
                  children: [
                    o.jsx("h5", {
                      className: "text-uppercase mb-0  fw-bold",
                      style: { color: e.mode === "dark" ? "white" : "black" },
                      children: "Explore",
                    }),
                    o.jsxs("ul", {
                      className: "list-unstyled",
                      children: [
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#home",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Home",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#about",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "About",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#skills",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Skills",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#education",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Education",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#projects",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Projects",
                          }),
                        }),
                        o.jsx("li", {
                          children: o.jsx("a", {
                            href: "#contact",
                            style: {
                              color: e.mode === "dark" ? "#00ff99" : "#00b271",
                            },
                            className: "endlist",
                            children: "Contact Me",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          o.jsxs("div", {
            className: "text-center p-3",
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: e.mode === "dark" ? "white" : "black",
            },
            children: [
              "© 2024 Copyright:",
              o.jsx("a", {
                style: { color: e.mode === "dark" ? "#00ff99" : "#00b271" },
                className: "fw-bolder fs-6",
                href: "https://github.com/YashSinghal001",
                target: "blank",
                children: "Yash Singhal",
              }),
            ],
          }),
        ],
      }),
    }),
  lp = "Me3-4eAKiEoV.jpg",
  ip = (e) => {
    const t = new IntersectionObserver((r) => {
      r.forEach((l) => {
        console.log(l), l.isIntersecting && l.target.classList.add("show");
      });
    });
    return (
      document.querySelectorAll(".hidden").forEach((r) => t.observe(r)),
      o.jsx("div", {
        children: o.jsxs("div", {
          className: "container mt-5 pt-5",
          style: {
            backgroundColor: e.mode === "dark" ? "#000000" : "white",
            color: e.mode === "dark" ? "white" : "black",
          },
          children: [
            o.jsx("div", {
              className: "row text-center",
              children: o.jsx("h2", {
                className: "fw-bold fs-2 mb-5",
                children: "About Me",
              }),
            }),
            o.jsxs("div", {
              className: "row row-cols-1 row-cols-lg-2 g-4",
              children: [
                o.jsxs("div", {
                  className: "col methree hidden",
                  children: [
                    o.jsxs("div", {
                      class: "spinner",
                      children: [
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                      ],
                    }),
                    o.jsx("img", {
                      src: lp,
                      alt: "",
                      className: "rounded-circle ",
                    }),
                    o.jsxs("div", {
                      class: "spinner1",
                      children: [
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                        o.jsx("div", {}),
                      ],
                    }),
                  ],
                }),
                o.jsxs("div", {
                  className: "col methreetxt hidden",
                  children: [
                    o.jsx("p", {
                      children:
                        "Hi, I’m Yash Singhal, a front-end developer dedicated to building beautiful and functional web experiences. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life with precision and creativity. I’m passionate about translating design concepts into intuitive and engaging user interfaces. By staying current with the latest web technologies and best practices, I ensure that my projects are both cutting-edge and user-friendly. I thrive on collaboration and am always eager to tackle new challenges and push the boundaries of what’s possible on the web.",
                    }),
                    o.jsx("p", {
                      children:
                        "When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously improving my skills. Let’s connect and explore how we can create something amazing together!",
                    }),
                    o.jsxs("div", {
                      class: "banter-loader",
                      children: [
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                        o.jsx("div", { class: "banter-loader__box" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  Ys = "qw-CVtJTuzP.png",
  op = (e) =>
    o.jsx("div", {
      children: o.jsxs("div", {
        className: "container mt-5 pt-5 ",
        style: {
          backgroundColor: e.mode === "dark" ? "#000000" : "white",
          color: e.mode === "dark" ? "white" : "black",
        },
        children: [
          o.jsxs("div", {
            className: "row text-center text-center mb-5",
            children: [
              o.jsx("h2", {
                className: "fw-bold fs-2 ",
                children: "My Eduaction",
              }),
              o.jsx("p", {
                children:
                  "Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.",
              }),
            ],
          }),
          o.jsxs("div", {
            className: "row row-cols-1 row-cols-lg-2 text-center g-4",
            children: [
              o.jsx("div", {
                className: "col  ",
                children: o.jsx("div", {
                  class: "card card2 mb-3",
                  style: {
                    maxWidth: "540px",
                    margin: "auto",
                    backgroundColor: e.mode === "dark" ? "#000814" : "white",
                    color: e.mode === "dark" ? "white" : "black",
                    border: "1.5px solid ",
                    borderRadius: "5px",
                    borderColor: e.mode === "dark" ? "white" : "#000000",
                  },
                  children: o.jsxs("div", {
                    class: "row g-0",
                    children: [
                      o.jsx("div", {
                        class: "col-md-4",
                        children: o.jsx("img", {
                          src: Ys,
                          class: "img-fluid rounded-start",
                          alt: "...",
                          style: { marginTop: "30px" },
                        }),
                      }),
                      o.jsx("div", {
                        class: "col-md-8",
                        children: o.jsxs("div", {
                          className: "card-body",
                          children: [
                            o.jsxs("h4", {
                              className: "card-title fs-2",
                              children: [
                                "Class 10 ",
                                o.jsx("sup", { children: "th" }),
                              ],
                            }),
                            o.jsx("h2", {
                              className: "card-text fs-4 fw-bold",
                              children: "Constancia School",
                            }),
                            o.jsx("h2", {
                              className: "card-text fs-4 fw-bold",
                              children: "ICSE Board",
                            }),
                            o.jsx("p", {
                              className: "card-text fs-4 fw-semibold mb-0",
                              children: "83.16 %",
                            }),
                            o.jsx("p", {
                              className: "fs-5 fs-semibold",
                              children: "2019-2020",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              o.jsx("div", {
                className: "col  ",
                children: o.jsx("div", {
                  class: "card card2 mb-3",
                  style: {
                    maxWidth: "540px",
                    margin: "auto",
                    backgroundColor: e.mode === "dark" ? "#000814" : "white",
                    color: e.mode === "dark" ? "white" : "black",
                    border: "1.5px solid ",
                    borderRadius: "5px",
                    borderColor: e.mode === "dark" ? "white" : "#000000",
                  },
                  children: o.jsxs("div", {
                    class: "row g-0",
                    children: [
                      o.jsx("div", {
                        class: "col-md-4",
                        children: o.jsx("img", {
                          src: Ys,
                          class: "img-fluid rounded-start",
                          alt: "...",
                          style: { marginTop: "30px" },
                        }),
                      }),
                      o.jsx("div", {
                        class: "col-md-8",
                        children: o.jsxs("div", {
                          className: "card-body",
                          children: [
                            o.jsxs("h4", {
                              className: "card-title fs-2",
                              children: [
                                "Class 12 ",
                                o.jsx("sup", { children: "th" }),
                              ],
                            }),
                            o.jsx("h2", {
                              className: "card-text fs-4 fw-bold",
                              children: "Constancia School",
                            }),
                            o.jsx("h2", {
                              className: "card-text fs-4 fw-bold",
                              children: "ISC Board",
                            }),
                            o.jsx("p", {
                              className: "card-text fs-4 fw-semibold mb-0",
                              children: "89.80 %",
                            }),
                            o.jsx("p", {
                              className: "fs-5 fs-semibold",
                              children: "2020-2022",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    });
function sp() {
  const [e, t] = je.useState("light"),
    n = () => {
      e === "light"
        ? (t("dark"), (document.body.style.backgroundColor = "#000000"))
        : (t("light"), (document.body.style.backgroundColor = "white"));
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Of, { mode: e, toggleMode: n }),
      o.jsx("section", {
        id: "home",
        children: o.jsx($f, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "about",
        children: o.jsx(ip, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "skills",
        children: o.jsx(Hf, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "education",
        children: o.jsx(op, { mode: e, toggleMode: n }),
      }),
      o.jsxs("section", {
        id: "projects",
        children: [
          o.jsx(Vf, { mode: e, toggleMode: n }),
          o.jsx(ep, { mode: e, toggleMode: n }),
        ],
      }),
      o.jsx("section", {
        id: "contact",
        children: o.jsx(np, { mode: e, toggleMode: n }),
      }),
      o.jsx(rp, { mode: e, toggleMode: n }),
    ],
  });
}
Yl.createRoot(document.getElementById("root")).render(
  o.jsx(wr.StrictMode, { children: o.jsx(sp, {}) })
);
