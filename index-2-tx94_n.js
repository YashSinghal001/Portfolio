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
var Gs = { exports: {} },
  tl = {},
  Xs = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xn = Symbol.for("react.element"),
  ac = Symbol.for("react.portal"),
  uc = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  dc = Symbol.for("react.profiler"),
  fc = Symbol.for("react.provider"),
  pc = Symbol.for("react.context"),
  hc = Symbol.for("react.forward_ref"),
  mc = Symbol.for("react.suspense"),
  gc = Symbol.for("react.memo"),
  vc = Symbol.for("react.lazy"),
  Mo = Symbol.iterator;
function yc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mo && e[Mo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var bs = {
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
    (this.updater = n || bs);
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
function Hi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Js),
    (this.updater = n || bs);
}
var _i = (Hi.prototype = new qs());
_i.constructor = Hi;
Zs(_i, ln.prototype);
_i.isPureReactComponent = !0;
var Bo = Array.isArray,
  $s = Object.prototype.hasOwnProperty,
  Qi = { current: null },
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
      $s.call(t, r) && !ea.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), d = 0; d < a; d++) u[d] = arguments[d + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Xn,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Qi.current,
  };
}
function xc(e, t) {
  return {
    $$typeof: Xn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Vi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xn;
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
var Fo = /\/+/g;
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
          case Xn:
          case ac:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (l = l(s)),
      (e = r === "" ? "." + wl(s, 0) : r),
      Bo(l)
        ? ((n = ""),
          e != null && (n = e.replace(Fo, "$&/") + "/"),
          yr(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (Vi(l) &&
            (l = xc(
              l,
              n +
                (!l.key || (s && s.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fo, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Bo(e)))
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
    ReactCurrentOwner: Qi,
  };
function na() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
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
    if (!Vi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = ln;
T.Fragment = uc;
T.Profiler = dc;
T.PureComponent = Hi;
T.StrictMode = cc;
T.Suspense = mc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jc;
T.act = na;
T.cloneElement = function (e, t, n) {
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
      (t.ref !== void 0 && ((i = t.ref), (s = Qi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      $s.call(t, u) &&
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
  return { $$typeof: Xn, type: e.type, key: l, ref: i, props: r, _owner: s };
};
T.createContext = function (e) {
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
T.createElement = ta;
T.createFactory = function (e) {
  var t = ta.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: hc, render: e };
};
T.isValidElement = Vi;
T.lazy = function (e) {
  return { $$typeof: vc, _payload: { _status: -1, _result: e }, _init: kc };
};
T.memo = function (e, t) {
  return { $$typeof: gc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
T.unstable_act = na;
T.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function (e) {
  return se.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function () {
  return se.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return se.current.useRef(e);
};
T.useState = function (e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return se.current.useTransition();
};
T.version = "18.3.1";
Xs.exports = T;
var je = Xs.exports;
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
  Ac = Symbol.for("react.element"),
  Cc = Symbol.for("react.fragment"),
  Ec = Object.prototype.hasOwnProperty,
  Nc = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
    $$typeof: Ac,
    type: e,
    key: i,
    ref: s,
    props: l,
    _owner: Nc.current,
  };
}
tl.Fragment = Cc;
tl.jsx = ra;
tl.jsxs = ra;
Gs.exports = tl;
var o = Gs.exports,
  Kl = {},
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
  function t(A, P) {
    var L = A.length;
    A.push(P);
    e: for (; 0 < L; ) {
      var Y = (L - 1) >>> 1,
        b = A[Y];
      if (0 < l(b, P)) (A[Y] = P), (A[L] = b), (L = Y);
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var P = A[0],
      L = A.pop();
    if (L !== P) {
      A[0] = L;
      e: for (var Y = 0, b = A.length, $n = b >>> 1; Y < $n; ) {
        var gt = 2 * (Y + 1) - 1,
          xl = A[gt],
          vt = gt + 1,
          er = A[vt];
        if (0 > l(xl, L))
          vt < b && 0 > l(er, xl)
            ? ((A[Y] = er), (A[vt] = L), (Y = vt))
            : ((A[Y] = xl), (A[gt] = L), (Y = gt));
        else if (vt < b && 0 > l(er, L)) (A[Y] = er), (A[vt] = L), (Y = vt);
        else break e;
      }
    }
    return P;
  }
  function l(A, P) {
    var L = A.sortIndex - P.sortIndex;
    return L !== 0 ? L : A.id - P.id;
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
    g = 1,
    m = null,
    h = 3,
    x = !1,
    w = !1,
    k = !1,
    B = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(A) {
    for (var P = n(d); P !== null; ) {
      if (P.callback === null) r(d);
      else if (P.startTime <= A)
        r(d), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(d);
    }
  }
  function v(A) {
    if (((k = !1), p(A), !w))
      if (n(u) !== null) (w = !0), vl(S);
      else {
        var P = n(d);
        P !== null && yl(v, P.startTime - A);
      }
  }
  function S(A, P) {
    (w = !1), k && ((k = !1), f(N), (N = -1)), (x = !0);
    var L = h;
    try {
      for (
        p(P), m = n(u);
        m !== null && (!(m.expirationTime > P) || (A && !Ne()));

      ) {
        var Y = m.callback;
        if (typeof Y == "function") {
          (m.callback = null), (h = m.priorityLevel);
          var b = Y(m.expirationTime <= P);
          (P = e.unstable_now()),
            typeof b == "function" ? (m.callback = b) : m === n(u) && r(u),
            p(P);
        } else r(u);
        m = n(u);
      }
      if (m !== null) var $n = !0;
      else {
        var gt = n(d);
        gt !== null && yl(v, gt.startTime - P), ($n = !1);
      }
      return $n;
    } finally {
      (m = null), (h = L), (x = !1);
    }
  }
  var C = !1,
    E = null,
    N = -1,
    V = 5,
    R = -1;
  function Ne() {
    return !(e.unstable_now() - R < V);
  }
  function an() {
    if (E !== null) {
      var A = e.unstable_now();
      R = A;
      var P = !0;
      try {
        P = E(!0, A);
      } finally {
        P ? un() : ((C = !1), (E = null));
      }
    } else C = !1;
  }
  var un;
  if (typeof c == "function")
    un = function () {
      c(an);
    };
  else if (typeof MessageChannel < "u") {
    var Do = new MessageChannel(),
      oc = Do.port2;
    (Do.port1.onmessage = an),
      (un = function () {
        oc.postMessage(null);
      });
  } else
    un = function () {
      B(an, 0);
    };
  function vl(A) {
    (E = A), C || ((C = !0), un());
  }
  function yl(A, P) {
    N = B(function () {
      A(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || x || ((w = !0), vl(S));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (A) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var L = h;
      h = P;
      try {
        return A();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, P) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var L = h;
      h = A;
      try {
        return P();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (A, P, L) {
      var Y = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? Y + L : Y))
          : (L = Y),
        A)
      ) {
        case 1:
          var b = -1;
          break;
        case 2:
          b = 250;
          break;
        case 5:
          b = 1073741823;
          break;
        case 4:
          b = 1e4;
          break;
        default:
          b = 5e3;
      }
      return (
        (b = L + b),
        (A = {
          id: g++,
          callback: P,
          priorityLevel: A,
          startTime: L,
          expirationTime: b,
          sortIndex: -1,
        }),
        L > Y
          ? ((A.sortIndex = L),
            t(d, A),
            n(u) === null &&
              A === n(d) &&
              (k ? (f(N), (N = -1)) : (k = !0), yl(v, L - Y)))
          : ((A.sortIndex = b), t(u, A), w || x || ((w = !0), vl(S))),
        A
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (A) {
      var P = h;
      return function () {
        var L = h;
        h = P;
        try {
          return A.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(oa);
ia.exports = oa;
var Lc = ia.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tc = je,
  ve = Lc;
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
  Rn = {};
function Tt(e, t) {
  Jt(e, t), Jt(e + "Capture", t);
}
function Jt(e, t) {
  for (Rn[e] = t, e = 0; e < t.length; e++) sa.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  Rc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  Ho = {};
function Ic(e) {
  return Gl.call(Ho, e)
    ? !0
    : Gl.call(Uo, e)
    ? !1
    : Rc.test(e)
    ? (Ho[e] = !0)
    : ((Uo[e] = !0), !1);
}
function Oc(e, t, n, r) {
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
function zc(e, t, n, r) {
  if (t === null || typeof t > "u" || Oc(e, t, n, r)) return !0;
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
var Yi = /[\-:]([a-z])/g;
function Wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Wi);
    ee[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Yi, Wi);
    ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Yi, Wi);
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
function Ki(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (zc(t, n, l, r) && (n = null),
    r || l === null
      ? Ic(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var be = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  nr = Symbol.for("react.element"),
  Ot = Symbol.for("react.portal"),
  zt = Symbol.for("react.fragment"),
  Gi = Symbol.for("react.strict_mode"),
  Xl = Symbol.for("react.profiler"),
  aa = Symbol.for("react.provider"),
  ua = Symbol.for("react.context"),
  Xi = Symbol.for("react.forward_ref"),
  bl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  bi = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  ca = Symbol.for("react.offscreen"),
  _o = Symbol.iterator;
function cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_o && e[_o]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _ = Object.assign,
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
function Dc(e) {
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
    case zt:
      return "Fragment";
    case Ot:
      return "Portal";
    case Xl:
      return "Profiler";
    case Gi:
      return "StrictMode";
    case bl:
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
      case Xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bi:
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
function Mc(e) {
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
      return t === Gi ? "StrictMode" : "Mode";
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
function Bc(e) {
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
  e._valueTracker || (e._valueTracker = Bc(e));
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
function Rr(e) {
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
  return _({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qo(e, t) {
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
  (t = t.checked), t != null && Ki(e, "checked", t, !1);
}
function $l(e, t) {
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
function Vo(e, t, n) {
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
  (t !== "number" || Rr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Wt(e, t, n, r) {
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
  return _({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Yo(e, t) {
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
function Wo(e) {
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
  ga = (function (e) {
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
function In(e, t) {
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
  Fc = ["Webkit", "ms", "Moz", "O"];
Object.keys(jn).forEach(function (e) {
  Fc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (jn[t] = jn[e]);
  });
});
function va(e, t, n) {
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
        l = va(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Uc = _(
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
    if (Uc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
  Kt = null,
  Gt = null;
function Ko(e) {
  if ((e = Jn(e))) {
    if (typeof oi != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = ol(t)), oi(e.stateNode, e.type, t));
  }
}
function xa(e) {
  Kt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Kt = e);
}
function wa() {
  if (Kt) {
    var e = Kt,
      t = Gt;
    if (((Gt = Kt = null), Ko(e), t)) for (e = 0; e < t.length; e++) Ko(t[e]);
  }
}
function ka(e, t) {
  return e(t);
}
function ja() {}
var Al = !1;
function Sa(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return ka(e, t, n);
  } finally {
    (Al = !1), (Kt !== null || Gt !== null) && (ja(), wa());
  }
}
function On(e, t) {
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
if (We)
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
function Hc(e, t, n, r, l, i, s, a, u) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (g) {
    this.onError(g);
  }
}
var Sn = !1,
  Ir = null,
  Or = !1,
  ai = null,
  _c = {
    onError: function (e) {
      (Sn = !0), (Ir = e);
    },
  };
function Qc(e, t, n, r, l, i, s, a, u) {
  (Sn = !1), (Ir = null), Hc.apply(_c, arguments);
}
function Vc(e, t, n, r, l, i, s, a, u) {
  if ((Qc.apply(this, arguments), Sn)) {
    if (Sn) {
      var d = Ir;
      (Sn = !1), (Ir = null);
    } else throw Error(y(198));
    Or || ((Or = !0), (ai = d));
  }
}
function Rt(e) {
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
function Aa(e) {
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
function Go(e) {
  if (Rt(e) !== e) throw Error(y(188));
}
function Yc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rt(e)), t === null)) throw Error(y(188));
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
        if (i === n) return Go(l), e;
        if (i === r) return Go(l), t;
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
function Ca(e) {
  return (e = Yc(e)), e !== null ? Ea(e) : null;
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
var Na = ve.unstable_scheduleCallback,
  Xo = ve.unstable_cancelCallback,
  Wc = ve.unstable_shouldYield,
  Kc = ve.unstable_requestPaint,
  W = ve.unstable_now,
  Gc = ve.unstable_getCurrentPriorityLevel,
  Ji = ve.unstable_ImmediatePriority,
  Pa = ve.unstable_UserBlockingPriority,
  zr = ve.unstable_NormalPriority,
  Xc = ve.unstable_LowPriority,
  La = ve.unstable_IdlePriority,
  nl = null,
  Fe = null;
function bc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : qc,
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
function Dr(e, t) {
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
      (n = 31 - Ie(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function $c(e, t) {
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
    var s = 31 - Ie(i),
      a = 1 << s,
      u = l[s];
    u === -1
      ? (!(a & n) || a & r) && (l[s] = $c(a, t))
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
function Ta() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function Cl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ie(t)),
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
    var l = 31 - Ie(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function qi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ie(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var O = 0;
function Ra(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ia,
  $i,
  Oa,
  za,
  Da,
  ci = !1,
  sr = [],
  rt = null,
  lt = null,
  it = null,
  zn = new Map(),
  Dn = new Map(),
  $e = [],
  nd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function bo(e, t) {
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
      zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dn.delete(t.pointerId);
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
      t !== null && ((t = Jn(t)), t !== null && $i(t)),
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
      return zn.set(i, fn(zn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Dn.set(i, fn(Dn.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Ma(e) {
  var t = wt(e.target);
  if (t !== null) {
    var n = Rt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Aa(n)), t !== null)) {
          (e.blockedOn = t),
            Da(e.priority, function () {
              Oa(n);
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
    } else return (t = Jn(n)), t !== null && $i(t), (e.blockedOn = n), !1;
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
    zn.forEach(Zo),
    Dn.forEach(Zo);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      ve.unstable_scheduleCallback(ve.unstable_NormalPriority, ld)));
}
function Mn(e) {
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
      zn.forEach(t),
      Dn.forEach(t),
      n = 0;
    n < $e.length;
    n++
  )
    (r = $e[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < $e.length && ((n = $e[0]), n.blockedOn === null); )
    Ma(n), n.blockedOn === null && $e.shift();
}
var Xt = be.ReactCurrentBatchConfig,
  Mr = !0;
function id(e, t, n, r) {
  var l = O,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (O = 1), eo(e, t, n, r);
  } finally {
    (O = l), (Xt.transition = i);
  }
}
function od(e, t, n, r) {
  var l = O,
    i = Xt.transition;
  Xt.transition = null;
  try {
    (O = 4), eo(e, t, n, r);
  } finally {
    (O = l), (Xt.transition = i);
  }
}
function eo(e, t, n, r) {
  if (Mr) {
    var l = di(e, t, n, r);
    if (l === null) Dl(e, t, r, Br, n), bo(e, r);
    else if (rd(l, e, t, n, r)) r.stopPropagation();
    else if ((bo(e, r), t & 4 && -1 < nd.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jn(l);
        if (
          (i !== null && Ia(i),
          (i = di(e, t, n, r)),
          i === null && Dl(e, t, r, Br, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Dl(e, t, r, null, n);
  }
}
var Br = null;
function di(e, t, n, r) {
  if (((Br = null), (e = Zi(r)), (e = wt(e)), e !== null))
    if (((t = Rt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Aa(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Br = e), null;
}
function Ba(e) {
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
      switch (Gc()) {
        case Ji:
          return 1;
        case Pa:
          return 4;
        case zr:
        case Xc:
          return 16;
        case La:
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
function Fa() {
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
    _(t.prototype, {
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
  Zn = _({}, on, { view: 0, detail: 0 }),
  sd = xe(Zn),
  El,
  Nl,
  hn,
  rl = _({}, Zn, {
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
              ? ((El = e.screenX - hn.screenX), (Nl = e.screenY - hn.screenY))
              : (Nl = El = 0),
            (hn = e)),
          El);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  qo = xe(rl),
  ad = _({}, rl, { dataTransfer: 0 }),
  ud = xe(ad),
  cd = _({}, Zn, { relatedTarget: 0 }),
  Pl = xe(cd),
  dd = _({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fd = xe(dd),
  pd = _({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hd = xe(pd),
  md = _({}, on, { data: 0 }),
  $o = xe(md),
  gd = {
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
  vd = {
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
var wd = _({}, Zn, {
    key: function (e) {
      if (e.key) {
        var t = gd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? vd[e.keyCode] || "Unidentified"
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
  jd = _({}, rl, {
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
  Sd = _({}, Zn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ro,
  }),
  Ad = xe(Sd),
  Cd = _({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ed = xe(Cd),
  Nd = _({}, rl, {
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
  Pd = xe(Nd),
  Ld = [9, 13, 27, 32],
  lo = We && "CompositionEvent" in window,
  An = null;
We && "documentMode" in document && (An = document.documentMode);
var Td = We && "TextEvent" in window && !An,
  Ua = We && (!lo || (An && 8 < An && 11 >= An)),
  ts = " ",
  ns = !1;
function Ha(e, t) {
  switch (e) {
    case "keyup":
      return Ld.indexOf(t.keyCode) !== -1;
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
function _a(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dt = !1;
function Rd(e, t) {
  switch (e) {
    case "compositionend":
      return _a(t);
    case "keypress":
      return t.which !== 32 ? null : ((ns = !0), ts);
    case "textInput":
      return (e = t.data), e === ts && ns ? null : e;
    default:
      return null;
  }
}
function Id(e, t) {
  if (Dt)
    return e === "compositionend" || (!lo && Ha(e, t))
      ? ((e = Fa()), (jr = to = tt = null), (Dt = !1), e)
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
      return Ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Od = {
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
  return t === "input" ? !!Od[e.type] : t === "textarea";
}
function Qa(e, t, n, r) {
  xa(r),
    (t = Fr(t, "onChange")),
    0 < t.length &&
      ((n = new no("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Cn = null,
  Bn = null;
function zd(e) {
  $a(e, 0);
}
function ll(e) {
  var t = Ft(e);
  if (fa(t)) return e;
}
function Dd(e, t) {
  if (e === "change") return t;
}
var Va = !1;
if (We) {
  var Ll;
  if (We) {
    var Tl = "oninput" in document;
    if (!Tl) {
      var ls = document.createElement("div");
      ls.setAttribute("oninput", "return;"),
        (Tl = typeof ls.oninput == "function");
    }
    Ll = Tl;
  } else Ll = !1;
  Va = Ll && (!document.documentMode || 9 < document.documentMode);
}
function is() {
  Cn && (Cn.detachEvent("onpropertychange", Ya), (Bn = Cn = null));
}
function Ya(e) {
  if (e.propertyName === "value" && ll(Bn)) {
    var t = [];
    Qa(t, Bn, e, Zi(e)), Sa(zd, t);
  }
}
function Md(e, t, n) {
  e === "focusin"
    ? (is(), (Cn = t), (Bn = n), Cn.attachEvent("onpropertychange", Ya))
    : e === "focusout" && is();
}
function Bd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ll(Bn);
}
function Fd(e, t) {
  if (e === "click") return ll(t);
}
function Ud(e, t) {
  if (e === "input" || e === "change") return ll(t);
}
function Hd(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ze = typeof Object.is == "function" ? Object.is : Hd;
function Fn(e, t) {
  if (ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Gl.call(t, l) || !ze(e[l], t[l])) return !1;
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
function Wa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ka() {
  for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Rr(e.document);
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
function _d(e) {
  var t = Ka(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wa(n.ownerDocument.documentElement, n)
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
var Qd = We && "documentMode" in document && 11 >= document.documentMode,
  Mt = null,
  fi = null,
  En = null,
  pi = !1;
function as(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  pi ||
    Mt == null ||
    Mt !== Rr(r) ||
    ((r = Mt),
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
    (En && Fn(En, r)) ||
      ((En = r),
      (r = Fr(fi, "onSelect")),
      0 < r.length &&
        ((t = new no("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mt))));
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
var Bt = {
    animationend: ur("Animation", "AnimationEnd"),
    animationiteration: ur("Animation", "AnimationIteration"),
    animationstart: ur("Animation", "AnimationStart"),
    transitionend: ur("Transition", "TransitionEnd"),
  },
  Rl = {},
  Ga = {};
We &&
  ((Ga = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Bt.animationend.animation,
    delete Bt.animationiteration.animation,
    delete Bt.animationstart.animation),
  "TransitionEvent" in window || delete Bt.transitionend.transition);
function il(e) {
  if (Rl[e]) return Rl[e];
  if (!Bt[e]) return e;
  var t = Bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ga) return (Rl[e] = t[n]);
  return e;
}
var Xa = il("animationend"),
  ba = il("animationiteration"),
  Za = il("animationstart"),
  Ja = il("transitionend"),
  qa = new Map(),
  us =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  qa.set(e, t), Tt(t, [e]);
}
for (var Il = 0; Il < us.length; Il++) {
  var Ol = us[Il],
    Vd = Ol.toLowerCase(),
    Yd = Ol[0].toUpperCase() + Ol.slice(1);
  pt(Vd, "on" + Yd);
}
pt(Xa, "onAnimationEnd");
pt(ba, "onAnimationIteration");
pt(Za, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(Ja, "onTransitionEnd");
Jt("onMouseEnter", ["mouseout", "mouseover"]);
Jt("onMouseLeave", ["mouseout", "mouseover"]);
Jt("onPointerEnter", ["pointerout", "pointerover"]);
Jt("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Wd = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function cs(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Vc(r, t, void 0, e), (e.currentTarget = null);
}
function $a(e, t) {
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
  if (Or) throw ((e = ai), (Or = !1), (ai = null), e);
}
function D(e, t) {
  var n = t[yi];
  n === void 0 && (n = t[yi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (eu(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), eu(n, e, r, t);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Un(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      sa.forEach(function (n) {
        n !== "selectionchange" && (Wd.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[cr] || ((t[cr] = !0), zl("selectionchange", !1, t));
  }
}
function eu(e, t, n, r) {
  switch (Ba(t)) {
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
function Dl(e, t, n, r, l) {
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
      g = Zi(n),
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
            x = Ad;
            break;
          case Xa:
          case ba:
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
          B = !k && e === "scroll",
          f = k ? (h !== null ? h + "Capture" : null) : h;
        k = [];
        for (var c = d, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = On(c, f)), v != null && k.push(Hn(c, v, p)))),
            B)
          )
            break;
          c = c.return;
        }
        0 < k.length &&
          ((h = new x(h, w, null, n, g)), m.push({ event: h, listeners: k }));
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
            (wt(w) || w[Ke]))
        )
          break e;
        if (
          (x || h) &&
          ((h =
            g.window === g
              ? g
              : (h = g.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          x
            ? ((w = n.relatedTarget || n.toElement),
              (x = d),
              (w = w ? wt(w) : null),
              w !== null &&
                ((B = Rt(w)), w !== B || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((x = null), (w = d)),
          x !== w)
        ) {
          if (
            ((k = qo),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((k = es),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (B = x == null ? h : Ft(x)),
            (p = w == null ? h : Ft(w)),
            (h = new k(v, c + "leave", x, n, g)),
            (h.target = B),
            (h.relatedTarget = p),
            (v = null),
            wt(g) === d &&
              ((k = new k(f, c + "enter", w, n, g)),
              (k.target = p),
              (k.relatedTarget = B),
              (v = k)),
            (B = v),
            x && w)
          )
            t: {
              for (k = x, f = w, c = 0, p = k; p; p = It(p)) c++;
              for (p = 0, v = f; v; v = It(v)) p++;
              for (; 0 < c - p; ) (k = It(k)), c--;
              for (; 0 < p - c; ) (f = It(f)), p--;
              for (; c--; ) {
                if (k === f || (f !== null && k === f.alternate)) break t;
                (k = It(k)), (f = It(f));
              }
              k = null;
            }
          else k = null;
          x !== null && ds(m, h, x, k, !1),
            w !== null && B !== null && ds(m, B, w, k, !0);
        }
      }
      e: {
        if (
          ((h = d ? Ft(d) : window),
          (x = h.nodeName && h.nodeName.toLowerCase()),
          x === "select" || (x === "input" && h.type === "file"))
        )
          var S = Dd;
        else if (rs(h))
          if (Va) S = Ud;
          else {
            S = Bd;
            var C = Md;
          }
        else
          (x = h.nodeName) &&
            x.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Fd);
        if (S && (S = S(e, d))) {
          Qa(m, S, n, g);
          break e;
        }
        C && C(e, h, d),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            ei(h, "number", h.value);
      }
      switch (((C = d ? Ft(d) : window), e)) {
        case "focusin":
          (rs(C) || C.contentEditable === "true") &&
            ((Mt = C), (fi = d), (En = null));
          break;
        case "focusout":
          En = fi = Mt = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), as(m, n, g);
          break;
        case "selectionchange":
          if (Qd) break;
        case "keydown":
        case "keyup":
          as(m, n, g);
      }
      var E;
      if (lo)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        Dt
          ? Ha(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (Ua &&
          n.locale !== "ko" &&
          (Dt || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && Dt && (E = Fa())
            : ((tt = g),
              (to = "value" in tt ? tt.value : tt.textContent),
              (Dt = !0))),
        (C = Fr(d, N)),
        0 < C.length &&
          ((N = new $o(N, e, null, n, g)),
          m.push({ event: N, listeners: C }),
          E ? (N.data = E) : ((E = _a(n)), E !== null && (N.data = E)))),
        (E = Td ? Rd(e, n) : Id(e, n)) &&
          ((d = Fr(d, "onBeforeInput")),
          0 < d.length &&
            ((g = new $o("onBeforeInput", "beforeinput", null, n, g)),
            m.push({ event: g, listeners: d }),
            (g.data = E)));
    }
    $a(m, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Fr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = On(e, n)),
      i != null && r.unshift(Hn(e, i, l)),
      (i = On(e, t)),
      i != null && r.push(Hn(e, i, l))),
      (e = e.return);
  }
  return r;
}
function It(e) {
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
        ? ((u = On(n, i)), u != null && s.unshift(Hn(n, u, a)))
        : l || ((u = On(n, i)), u != null && s.push(Hn(n, u, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Kd = /\r\n?/g,
  Gd = /\u0000|\uFFFD/g;
function fs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Kd,
      `
`
    )
    .replace(Gd, "");
}
function dr(e, t, n) {
  if (((t = fs(t)), fs(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var hi = null,
  mi = null;
function gi(e, t) {
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
var vi = typeof setTimeout == "function" ? setTimeout : void 0,
  Xd = typeof clearTimeout == "function" ? clearTimeout : void 0,
  ps = typeof Promise == "function" ? Promise : void 0,
  bd =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof ps < "u"
      ? function (e) {
          return ps.resolve(null).then(e).catch(Zd);
        }
      : vi;
function Zd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Mn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Mn(t);
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
  Be = "__reactFiber$" + sn,
  _n = "__reactProps$" + sn,
  Ke = "__reactContainer$" + sn,
  yi = "__reactEvents$" + sn,
  Jd = "__reactListeners$" + sn,
  qd = "__reactHandles$" + sn;
function wt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ke] || n[Be])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hs(e); e !== null; ) {
          if ((n = e[Be])) return n;
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
    (e = e[Be] || e[Ke]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ft(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function ol(e) {
  return e[_n] || null;
}
var xi = [],
  Ut = -1;
function ht(e) {
  return { current: e };
}
function M(e) {
  0 > Ut || ((e.current = xi[Ut]), (xi[Ut] = null), Ut--);
}
function z(e, t) {
  Ut++, (xi[Ut] = e.current), (e.current = t);
}
var ft = {},
  le = ht(ft),
  de = ht(!1),
  Ct = ft;
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
function Hr() {
  M(de), M(le);
}
function ms(e, t, n) {
  if (le.current !== ft) throw Error(y(168));
  z(le, t), z(de, n);
}
function tu(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Mc(e) || "Unknown", l));
  return _({}, n, r);
}
function _r(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (Ct = le.current),
    z(le, e),
    z(de, de.current),
    !0
  );
}
function gs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = tu(e, t, Ct)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      M(de),
      M(le),
      z(le, e))
    : M(de),
    z(de, n);
}
var _e = null,
  sl = !1,
  Bl = !1;
function nu(e) {
  _e === null ? (_e = [e]) : _e.push(e);
}
function $d(e) {
  (sl = !0), nu(e);
}
function mt() {
  if (!Bl && _e !== null) {
    Bl = !0;
    var e = 0,
      t = O;
    try {
      var n = _e;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (_e = null), (sl = !1);
    } catch (l) {
      throw (_e !== null && (_e = _e.slice(e + 1)), Na(Ji, mt), l);
    } finally {
      (O = t), (Bl = !1);
    }
  }
  return null;
}
var Ht = [],
  _t = 0,
  Qr = null,
  Vr = 0,
  we = [],
  ke = 0,
  Et = null,
  Qe = 1,
  Ve = "";
function yt(e, t) {
  (Ht[_t++] = Vr), (Ht[_t++] = Qr), (Qr = e), (Vr = t);
}
function ru(e, t, n) {
  (we[ke++] = Qe), (we[ke++] = Ve), (we[ke++] = Et), (Et = e);
  var r = Qe;
  e = Ve;
  var l = 32 - Ie(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - Ie(t) + l;
  if (30 < i) {
    var s = l - (l % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (l -= s),
      (Qe = (1 << (32 - Ie(t) + l)) | (n << l) | r),
      (Ve = i + e);
  } else (Qe = (1 << i) | (n << l) | r), (Ve = e);
}
function oo(e) {
  e.return !== null && (yt(e, 1), ru(e, 1, 0));
}
function so(e) {
  for (; e === Qr; )
    (Qr = Ht[--_t]), (Ht[_t] = null), (Vr = Ht[--_t]), (Ht[_t] = null);
  for (; e === Et; )
    (Et = we[--ke]),
      (we[ke] = null),
      (Ve = we[--ke]),
      (we[ke] = null),
      (Qe = we[--ke]),
      (we[ke] = null);
}
var ge = null,
  me = null,
  F = !1,
  Re = null;
function lu(e, t) {
  var n = Se(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function vs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ge = e), (me = ot(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ge = e), (me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Et !== null ? { id: Qe, overflow: Ve } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Se(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ge = e),
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
  if (F) {
    var t = me;
    if (t) {
      var n = t;
      if (!vs(e, t)) {
        if (wi(e)) throw Error(y(418));
        t = ot(n.nextSibling);
        var r = ge;
        t && vs(e, t)
          ? lu(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (F = !1), (ge = e));
      }
    } else {
      if (wi(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (F = !1), (ge = e);
    }
  }
}
function ys(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ge = e;
}
function fr(e) {
  if (e !== ge) return !1;
  if (!F) return ys(e), (F = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !gi(e.type, e.memoizedProps))),
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
  } else me = ge ? ot(e.stateNode.nextSibling) : null;
  return !0;
}
function iu() {
  for (var e = me; e; ) e = ot(e.nextSibling);
}
function $t() {
  (me = ge = null), (F = !1);
}
function ao(e) {
  Re === null ? (Re = [e]) : Re.push(e);
}
var ef = be.ReactCurrentBatchConfig;
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
  function a(f, c, p, v) {
    return c === null || c.tag !== 6
      ? ((c = Yl(p, f.mode, v)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function u(f, c, p, v) {
    var S = p.type;
    return S === zt
      ? g(f, c, p.props.children, v, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Je &&
            xs(S) === c.type))
      ? ((v = l(c, p.props)), (v.ref = mn(f, c, p)), (v.return = f), v)
      : ((v = Tr(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = mn(f, c, p)),
        (v.return = f),
        v);
  }
  function d(f, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Wl(p, f.mode, v)), (c.return = f), c)
      : ((c = l(c, p.children || [])), (c.return = f), c);
  }
  function g(f, c, p, v, S) {
    return c === null || c.tag !== 7
      ? ((c = At(p, f.mode, v, S)), (c.return = f), c)
      : ((c = l(c, p)), (c.return = f), c);
  }
  function m(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Yl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case nr:
          return (
            (p = Tr(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = mn(f, null, c)),
            (p.return = f),
            p
          );
        case Ot:
          return (c = Wl(c, f.mode, p)), (c.return = f), c;
        case Je:
          var v = c._init;
          return m(f, v(c._payload), p);
      }
      if (xn(c) || cn(c))
        return (c = At(c, f.mode, p, null)), (c.return = f), c;
      pr(f, c);
    }
    return null;
  }
  function h(f, c, p, v) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : a(f, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case nr:
          return p.key === S ? u(f, c, p, v) : null;
        case Ot:
          return p.key === S ? d(f, c, p, v) : null;
        case Je:
          return (S = p._init), h(f, c, S(p._payload), v);
      }
      if (xn(p) || cn(p)) return S !== null ? null : g(f, c, p, v, null);
      pr(f, p);
    }
    return null;
  }
  function x(f, c, p, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), a(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case nr:
          return (f = f.get(v.key === null ? p : v.key) || null), u(c, f, v, S);
        case Ot:
          return (f = f.get(v.key === null ? p : v.key) || null), d(c, f, v, S);
        case Je:
          var C = v._init;
          return x(f, c, p, C(v._payload), S);
      }
      if (xn(v) || cn(v)) return (f = f.get(p) || null), g(c, f, v, S, null);
      pr(c, v);
    }
    return null;
  }
  function w(f, c, p, v) {
    for (
      var S = null, C = null, E = c, N = (c = 0), V = null;
      E !== null && N < p.length;
      N++
    ) {
      E.index > N ? ((V = E), (E = null)) : (V = E.sibling);
      var R = h(f, E, p[N], v);
      if (R === null) {
        E === null && (E = V);
        break;
      }
      e && E && R.alternate === null && t(f, E),
        (c = i(R, c, N)),
        C === null ? (S = R) : (C.sibling = R),
        (C = R),
        (E = V);
    }
    if (N === p.length) return n(f, E), F && yt(f, N), S;
    if (E === null) {
      for (; N < p.length; N++)
        (E = m(f, p[N], v)),
          E !== null &&
            ((c = i(E, c, N)), C === null ? (S = E) : (C.sibling = E), (C = E));
      return F && yt(f, N), S;
    }
    for (E = r(f, E); N < p.length; N++)
      (V = x(E, f, N, p[N], v)),
        V !== null &&
          (e && V.alternate !== null && E.delete(V.key === null ? N : V.key),
          (c = i(V, c, N)),
          C === null ? (S = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        E.forEach(function (Ne) {
          return t(f, Ne);
        }),
      F && yt(f, N),
      S
    );
  }
  function k(f, c, p, v) {
    var S = cn(p);
    if (typeof S != "function") throw Error(y(150));
    if (((p = S.call(p)), p == null)) throw Error(y(151));
    for (
      var C = (S = null), E = c, N = (c = 0), V = null, R = p.next();
      E !== null && !R.done;
      N++, R = p.next()
    ) {
      E.index > N ? ((V = E), (E = null)) : (V = E.sibling);
      var Ne = h(f, E, R.value, v);
      if (Ne === null) {
        E === null && (E = V);
        break;
      }
      e && E && Ne.alternate === null && t(f, E),
        (c = i(Ne, c, N)),
        C === null ? (S = Ne) : (C.sibling = Ne),
        (C = Ne),
        (E = V);
    }
    if (R.done) return n(f, E), F && yt(f, N), S;
    if (E === null) {
      for (; !R.done; N++, R = p.next())
        (R = m(f, R.value, v)),
          R !== null &&
            ((c = i(R, c, N)), C === null ? (S = R) : (C.sibling = R), (C = R));
      return F && yt(f, N), S;
    }
    for (E = r(f, E); !R.done; N++, R = p.next())
      (R = x(E, f, N, R.value, v)),
        R !== null &&
          (e && R.alternate !== null && E.delete(R.key === null ? N : R.key),
          (c = i(R, c, N)),
          C === null ? (S = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        E.forEach(function (an) {
          return t(f, an);
        }),
      F && yt(f, N),
      S
    );
  }
  function B(f, c, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === zt &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case nr:
          e: {
            for (var S = p.key, C = c; C !== null; ) {
              if (C.key === S) {
                if (((S = p.type), S === zt)) {
                  if (C.tag === 7) {
                    n(f, C.sibling),
                      (c = l(C, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  C.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Je &&
                    xs(S) === C.type)
                ) {
                  n(f, C.sibling),
                    (c = l(C, p.props)),
                    (c.ref = mn(f, C, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            p.type === zt
              ? ((c = At(p.props.children, f.mode, v, p.key)),
                (c.return = f),
                (f = c))
              : ((v = Tr(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = mn(f, c, p)),
                (v.return = f),
                (f = v));
          }
          return s(f);
        case Ot:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
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
            (c = Wl(p, f.mode, v)), (c.return = f), (f = c);
          }
          return s(f);
        case Je:
          return (C = p._init), B(f, c, C(p._payload), v);
      }
      if (xn(p)) return w(f, c, p, v);
      if (cn(p)) return k(f, c, p, v);
      pr(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Yl(p, f.mode, v)), (c.return = f), (f = c)),
        s(f))
      : n(f, c);
  }
  return B;
}
var en = ou(!0),
  su = ou(!1),
  Yr = ht(null),
  Wr = null,
  Qt = null,
  uo = null;
function co() {
  uo = Qt = Wr = null;
}
function fo(e) {
  var t = Yr.current;
  M(Yr), (e._currentValue = t);
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
function bt(e, t) {
  (Wr = e),
    (uo = Qt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ce = !0), (e.firstContext = null));
}
function Ce(e) {
  var t = e._currentValue;
  if (uo !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Qt === null)) {
      if (Wr === null) throw Error(y(308));
      (Qt = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Qt = Qt.next = e;
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
    Ge(e, r)
  );
}
function Ge(e, t) {
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
function Ye(e, t) {
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
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ge(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), po(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ge(e, n)
  );
}
function Ar(e, t, n) {
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
function Kr(e, t, n, r) {
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
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (a = g.lastBaseUpdate),
      a !== s &&
        (a === null ? (g.firstBaseUpdate = d) : (a.next = d),
        (g.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var m = l.baseState;
    (s = 0), (g = d = u = null), (a = i);
    do {
      var h = a.lane,
        x = a.eventTime;
      if ((r & h) === h) {
        g !== null &&
          (g = g.next =
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
              m = _({}, m, h);
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
          g === null ? ((d = g = x), (u = m)) : (g = g.next = x),
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
      (g === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = g),
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
  Ue = ht(qn),
  Qn = ht(qn),
  Vn = ht(qn);
function jt(e) {
  if (e === qn) throw Error(y(174));
  return e;
}
function mo(e, t) {
  switch ((z(Vn, t), z(Qn, e), z(Ue, qn), (e = t.nodeType), e)) {
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
  M(Ue), z(Ue, t);
}
function tn() {
  M(Ue), M(Qn), M(Vn);
}
function cu(e) {
  jt(Vn.current);
  var t = jt(Ue.current),
    n = ni(t, e.type);
  t !== n && (z(Qn, e), z(Ue, n));
}
function go(e) {
  Qn.current === e && (M(Ue), M(Qn));
}
var U = ht(0);
function Gr(e) {
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
var Fl = [];
function vo() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Cr = be.ReactCurrentDispatcher,
  Ul = be.ReactCurrentBatchConfig,
  Nt = 0,
  H = null,
  G = null,
  Z = null,
  Xr = !1,
  Nn = !1,
  Yn = 0,
  tf = 0;
function te() {
  throw Error(y(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ze(e[n], t[n])) return !1;
  return !0;
}
function xo(e, t, n, r, l, i) {
  if (
    ((Nt = i),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cr.current = e === null || e.memoizedState === null ? of : sf),
    (e = n(r, l)),
    Nn)
  ) {
    i = 0;
    do {
      if (((Nn = !1), (Yn = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = G = null),
        (t.updateQueue = null),
        (Cr.current = af),
        (e = n(r, l));
    } while (Nn);
  }
  if (
    ((Cr.current = br),
    (t = G !== null && G.next !== null),
    (Nt = 0),
    (Z = G = H = null),
    (Xr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function wo() {
  var e = Yn !== 0;
  return (Yn = 0), e;
}
function Me() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function Ee() {
  if (G === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = Z === null ? H.memoizedState : Z.next;
  if (t !== null) (Z = t), (G = e);
  else {
    if (e === null) throw Error(y(310));
    (G = e),
      (e = {
        memoizedState: G.memoizedState,
        baseState: G.baseState,
        baseQueue: G.baseQueue,
        queue: G.queue,
        next: null,
      }),
      Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = Ee(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = G,
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
      var g = d.lane;
      if ((Nt & g) === g)
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
          lane: g,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        u === null ? ((a = u = m), (s = r)) : (u = u.next = m),
          (H.lanes |= g),
          (Pt |= g);
      }
      d = d.next;
    } while (d !== null && d !== i);
    u === null ? (s = r) : (u.next = a),
      ze(r, t.memoizedState) || (ce = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (Pt |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function _l(e) {
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
    ze(i, t.memoizedState) || (ce = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function du() {}
function fu(e, t) {
  var n = H,
    r = Ee(),
    l = t(),
    i = !ze(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    ko(mu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Kn(9, hu.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    Nt & 30 || pu(n, t, l);
  }
  return l;
}
function pu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hu(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), gu(t) && vu(e);
}
function mu(e, t, n) {
  return n(function () {
    gu(t) && vu(e);
  });
}
function gu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ze(e, n);
  } catch {
    return !0;
  }
}
function vu(e) {
  var t = Ge(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function js(e) {
  var t = Me();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = lf.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function Kn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
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
  var l = Me();
  (H.flags |= e),
    (l.memoizedState = Kn(1 | t, n, void 0, r === void 0 ? null : r));
}
function al(e, t, n, r) {
  var l = Ee();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var s = G.memoizedState;
    if (((i = s.destroy), r !== null && yo(r, s.deps))) {
      l.memoizedState = Kn(t, n, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Kn(1 | t, n, i, r));
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
function Au(e, t) {
  var n = Ee();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cu(e, t, n) {
  return Nt & 21
    ? (ze(n, t) || ((n = Ta()), (H.lanes |= n), (Pt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = n));
}
function nf(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Ul.transition = r);
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
    Nu(e))
  )
    Pu(t, n);
  else if (((n = au(e, t, n, r)), n !== null)) {
    var l = oe();
    Oe(n, e, r, l), Lu(n, t, r);
  }
}
function lf(e, t, n) {
  var r = ut(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nu(e)) Pu(t, l);
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
        if (((l.hasEagerState = !0), (l.eagerState = a), ze(a, s))) {
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
      n !== null && ((l = oe()), Oe(n, e, r, l), Lu(n, t, r));
  }
}
function Nu(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function Pu(e, t) {
  Nn = Xr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Lu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qi(e, n);
  }
}
var br = {
    readContext: Ce,
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
    readContext: Ce,
    useCallback: function (e, t) {
      return (Me().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ce,
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
      var n = Me();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Me();
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
        (e = e.dispatch = rf.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Me();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: js,
    useDebugValue: jo,
    useDeferredValue: function (e) {
      return (Me().memoizedState = e);
    },
    useTransition: function () {
      var e = js(!1),
        t = e[0];
      return (e = nf.bind(null, e[1])), (Me().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Me();
      if (F) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        Nt & 30 || pu(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        Ss(mu.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Kn(9, hu.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Me(),
        t = J.identifierPrefix;
      if (F) {
        var n = Ve,
          r = Qe;
        (n = (r & ~(1 << (32 - Ie(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  sf = {
    readContext: Ce,
    useCallback: Su,
    useContext: Ce,
    useEffect: ko,
    useImperativeHandle: ju,
    useInsertionEffect: xu,
    useLayoutEffect: wu,
    useMemo: Au,
    useReducer: Hl,
    useRef: yu,
    useState: function () {
      return Hl(Wn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = Ee();
      return Cu(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Wn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: du,
    useSyncExternalStore: fu,
    useId: Eu,
    unstable_isNewReconciler: !1,
  },
  af = {
    readContext: Ce,
    useCallback: Su,
    useContext: Ce,
    useEffect: ko,
    useImperativeHandle: ju,
    useInsertionEffect: xu,
    useLayoutEffect: wu,
    useMemo: Au,
    useReducer: _l,
    useRef: yu,
    useState: function () {
      return _l(Wn);
    },
    useDebugValue: jo,
    useDeferredValue: function (e) {
      var t = Ee();
      return G === null ? (t.memoizedState = e) : Cu(t, G.memoizedState, e);
    },
    useTransition: function () {
      var e = _l(Wn)[0],
        t = Ee().memoizedState;
      return [e, t];
    },
    useMutableSource: du,
    useSyncExternalStore: fu,
    useId: Eu,
    unstable_isNewReconciler: !1,
  };
function Le(e, t) {
  if (e && e.defaultProps) {
    (t = _({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Si(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Rt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ut(e),
      i = Ye(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Oe(t, e, l, r), Ar(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ut(e),
      i = Ye(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = st(e, i, l)),
      t !== null && (Oe(t, e, l, r), Ar(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ut(e),
      l = Ye(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = st(e, l, r)),
      t !== null && (Oe(t, e, r, n), Ar(t, e, r));
  },
};
function As(e, t, n, r, l, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Fn(n, r) || !Fn(l, i)
      : !0
  );
}
function Tu(e, t, n) {
  var r = !1,
    l = ft,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ce(i))
      : ((l = fe(t) ? Ct : le.current),
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
function Cs(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ul.enqueueReplaceState(t, t.state, null);
}
function Ai(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), ho(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ce(i))
    : ((i = fe(t) ? Ct : le.current), (l.context = qt(e, i))),
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
      Kr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dc(r)), (r = r.return);
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
function Ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ci(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var uf = typeof WeakMap == "function" ? WeakMap : Map;
function Ru(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Di = r)), Ci(e, t);
    }),
    n
  );
}
function Iu(e, t, n) {
  (n = Ye(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ci(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ci(e, t),
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
function Ns(e) {
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
              : ((t = Ye(-1, 1)), (t.tag = 2), st(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var cf = be.ReactCurrentOwner,
  ce = !1;
function ie(e, t, n, r) {
  t.child = e === null ? su(t, null, n, r) : en(t, e.child, n, r);
}
function Ls(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    bt(t, l),
    (r = xo(e, t, n, r, i, l)),
    (n = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (F && n && oo(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Ts(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !To(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ou(e, t, i, r, l))
      : ((e = Tr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Fn), n(s, r) && e.ref === t.ref)
    )
      return Xe(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ou(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Fn(i, r) && e.ref === t.ref)
      if (((ce = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (t.lanes = e.lanes), Xe(e, t, l);
  }
  return Ei(e, t, n, r, l);
}
function zu(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Yt, he),
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
          z(Yt, he),
          (he |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        z(Yt, he),
        (he |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Yt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function Du(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ei(e, t, n, r, l) {
  var i = fe(n) ? Ct : le.current;
  return (
    (i = qt(t, i)),
    bt(t, l),
    (n = xo(e, t, n, r, i, l)),
    (r = wo()),
    e !== null && !ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Xe(e, t, l))
      : (F && r && oo(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Rs(e, t, n, r, l) {
  if (fe(n)) {
    var i = !0;
    _r(t);
  } else i = !1;
  if ((bt(t, l), t.stateNode === null))
    Nr(e, t), Tu(t, n, r), Ai(t, n, r, l), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var u = s.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Ce(d))
      : ((d = fe(n) ? Ct : le.current), (d = qt(t, d)));
    var g = n.getDerivedStateFromProps,
      m =
        typeof g == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || u !== d) && Cs(t, s, r, d)),
      (qe = !1);
    var h = t.memoizedState;
    (s.state = h),
      Kr(t, r, s, l),
      (u = t.memoizedState),
      a !== r || h !== u || de.current || qe
        ? (typeof g == "function" && (Si(t, n, g, r), (u = t.memoizedState)),
          (a = qe || As(t, n, a, r, h, u, d))
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
      (d = t.type === t.elementType ? a : Le(t.type, a)),
      (s.props = d),
      (m = t.pendingProps),
      (h = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = Ce(u))
        : ((u = fe(n) ? Ct : le.current), (u = qt(t, u)));
    var x = n.getDerivedStateFromProps;
    (g =
      typeof x == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== m || h !== u) && Cs(t, s, r, u)),
      (qe = !1),
      (h = t.memoizedState),
      (s.state = h),
      Kr(t, r, s, l);
    var w = t.memoizedState;
    a !== m || h !== w || de.current || qe
      ? (typeof x == "function" && (Si(t, n, x, r), (w = t.memoizedState)),
        (d = qe || As(t, n, d, r, h, w, u) || !1)
          ? (g ||
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
  return Ni(e, t, n, r, i, l);
}
function Ni(e, t, n, r, l, i) {
  Du(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return l && gs(t, n, !1), Xe(e, t, i);
  (r = t.stateNode), (cf.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = en(t, e.child, null, i)), (t.child = en(t, null, a, i)))
      : ie(e, t, a, i),
    (t.memoizedState = r.state),
    l && gs(t, n, !0),
    t.child
  );
}
function Mu(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ms(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ms(e, t.context, !1),
    mo(e, t.containerInfo);
}
function Is(e, t, n, r, l) {
  return $t(), ao(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Li(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Bu(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    z(U, l & 1),
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
              (e = At(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Li(n)),
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
      a !== null ? (i = ct(a, i)) : ((i = At(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Li(n)
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
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), hr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = At(i, l, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && en(t, e.child, null, s),
        (t.child.memoizedState = Li(s)),
        (t.memoizedState = Pi),
        i);
  if (!(t.mode & 1)) return hr(e, t, s, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(y(419))), (r = Ql(i, r, void 0)), hr(e, t, s, r);
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
          ((i.retryLane = l), Ge(e, l), Oe(r, e, l, -1));
    }
    return Lo(), (r = Ql(Error(y(421)))), hr(e, t, s, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Af.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (me = ot(l.nextSibling)),
      (ge = t),
      (F = !0),
      (Re = null),
      e !== null &&
        ((we[ke++] = Qe),
        (we[ke++] = Ve),
        (we[ke++] = Et),
        (Qe = e.id),
        (Ve = e.overflow),
        (Et = t)),
      (t = So(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Os(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ji(e.return, t, n);
}
function Vl(e, t, n, r, l) {
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
function Fu(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Os(e, n, t);
        else if (e.tag === 19) Os(e, n, t);
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
  if ((z(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Gr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Vl(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Gr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Vl(t, !0, n, null, i);
        break;
      case "together":
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Nr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Xe(e, t, n) {
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
      Mu(t), $t();
      break;
    case 5:
      cu(t);
      break;
    case 1:
      fe(t.type) && _r(t);
      break;
    case 4:
      mo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      z(Yr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Bu(e, t, n)
          : (z(U, U.current & 1),
            (e = Xe(e, t, n)),
            e !== null ? e.sibling : null);
      z(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        z(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), zu(e, t, n);
  }
  return Xe(e, t, n);
}
var Uu, Ti, Hu, _u;
Uu = function (e, t) {
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
Ti = function () {};
Hu = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), jt(Ue.current);
    var i = null;
    switch (n) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (l = _({}, l, { value: void 0 })),
          (r = _({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ti(e, l)), (r = ti(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
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
            (Rn.hasOwnProperty(d)
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
              (Rn.hasOwnProperty(d)
                ? (u != null && d === "onScroll" && D("scroll", e),
                  i || a === u || (i = []))
                : (i = i || []).push(d, u));
    }
    n && (i = i || []).push("style", n);
    var d = i;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
_u = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gn(e, t) {
  if (!F)
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
      return fe(t.type) && Hr(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        tn(),
        M(de),
        M(le),
        vo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Re !== null && (Fi(Re), (Re = null)))),
        Ti(e, t),
        ne(t),
        null
      );
    case 5:
      go(t);
      var l = jt(Vn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Hu(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = jt(Ue.current)), fr(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Be] = t), (r[_n] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) D(kn[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Qo(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Yo(r, i), D("invalid", r);
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
                : Rn.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  D("scroll", r);
            }
          switch (n) {
            case "input":
              rr(r), Vo(r, i, !0);
              break;
            case "textarea":
              rr(r), Wo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
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
            (e[Be] = t),
            (e[_n] = r),
            Uu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = li(n, r)), n)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) D(kn[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Qo(e, r), (l = ql(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = _({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Yo(e, r), (l = ti(e, r)), D("invalid", e);
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
                  ? ((u = u ? u.__html : void 0), u != null && ga(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && In(e, u)
                    : typeof u == "number" && In(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Rn.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && D("scroll", e)
                      : u != null && Ki(e, i, u, s));
              }
            switch (n) {
              case "input":
                rr(e), Vo(e, r, !1);
                break;
              case "textarea":
                rr(e), Wo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Wt(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Wt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
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
      if (e && t.stateNode != null) _u(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = jt(Vn.current)), jt(Ue.current), fr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Be] = t),
            (i = r.nodeValue !== n) && ((e = ge), e !== null))
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
            (r[Be] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (M(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (F && me !== null && t.mode & 1 && !(t.flags & 128))
          iu(), $t(), (t.flags |= 98560), (i = !1);
        else if (((i = fr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Be] = t;
          } else
            $t(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (i = !1);
        } else Re !== null && (Fi(Re), (Re = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? X === 0 && (X = 3) : Lo())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        tn(), Ti(e, t), e === null && Un(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return fo(t.type._context), ne(t), null;
    case 17:
      return fe(t.type) && Hr(), ne(t), null;
    case 19:
      if ((M(U), (i = t.memoizedState), i === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) gn(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Gr(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    gn(i, !1),
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
                return z(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            W() > rn &&
            ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Gr(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gn(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !F)
            )
              return ne(t), null;
          } else
            2 * W() - i.renderingStartTime > rn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gn(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = W()),
          (t.sibling = null),
          (n = U.current),
          z(U, r ? (n & 1) | 2 : n & 1),
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
        fe(t.type) && Hr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        tn(),
        M(de),
        M(le),
        vo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return go(t), null;
    case 13:
      if ((M(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        $t();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return M(U), null;
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
function Vt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Q(e, t, r);
      }
    else n.current = null;
}
function Ri(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var zs = !1;
function gf(e, t) {
  if (((hi = Mr), (e = Ka()), io(e))) {
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
            g = 0,
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
                h === i && ++g === r && (u = s),
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
  for (mi = { focusedElem: e, selectionRange: n }, Mr = !1, j = t; j !== null; )
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
                    B = w.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? k : Le(t.type, k),
                      B
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
        } catch (v) {
          Q(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (j = e);
          break;
        }
        j = t.return;
      }
  return (w = zs), (zs = !1), w;
}
function Pn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ri(t, n, i);
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
function Ii(e) {
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
function Qu(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Qu(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Be], delete t[_n], delete t[yi], delete t[Jd], delete t[qd])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Vu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ds(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Vu(e.return)) return null;
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
function Oi(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, t, n), e = e.sibling; e !== null; ) Oi(e, t, n), (e = e.sibling);
}
function zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), (e = e.sibling);
}
var q = null,
  Te = !1;
function Ze(e, t, n) {
  for (n = n.child; n !== null; ) Yu(e, t, n), (n = n.sibling);
}
function Yu(e, t, n) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(nl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      re || Vt(n, t);
    case 6:
      var r = q,
        l = Te;
      (q = null),
        Ze(e, t, n),
        (q = r),
        (Te = l),
        q !== null &&
          (Te
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (Te
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            Mn(e))
          : Ml(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = Te),
        (q = n.stateNode.containerInfo),
        (Te = !0),
        Ze(e, t, n),
        (q = r),
        (Te = l);
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
            s !== void 0 && (i & 2 || i & 4) && Ri(n, t, s),
            (l = l.next);
        } while (l !== r);
      }
      Ze(e, t, n);
      break;
    case 1:
      if (
        !re &&
        (Vt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Q(n, t, a);
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
function Ms(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mf()),
      t.forEach(function (r) {
        var l = Cf.bind(null, e, r);
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
              (q = a.stateNode), (Te = !1);
              break e;
            case 3:
              (q = a.stateNode.containerInfo), (Te = !0);
              break e;
            case 4:
              (q = a.stateNode.containerInfo), (Te = !0);
              break e;
          }
          a = a.return;
        }
        if (q === null) throw Error(y(160));
        Yu(i, s, l), (q = null), (Te = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (d) {
        Q(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wu(t, e), (t = t.sibling);
}
function Wu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), De(e), r & 4)) {
        try {
          Pn(3, e, e.return), cl(3, e);
        } catch (k) {
          Q(e, e.return, k);
        }
        try {
          Pn(5, e, e.return);
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 1:
      Pe(t, e), De(e), r & 512 && n !== null && Vt(n, n.return);
      break;
    case 5:
      if (
        (Pe(t, e),
        De(e),
        r & 512 && n !== null && Vt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          In(l, "");
        } catch (k) {
          Q(e, e.return, k);
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
              var g = u[s],
                m = u[s + 1];
              g === "style"
                ? ya(l, m)
                : g === "dangerouslySetInnerHTML"
                ? ga(l, m)
                : g === "children"
                ? In(l, m)
                : Ki(l, g, m, d);
            }
            switch (a) {
              case "input":
                $l(l, i);
                break;
              case "textarea":
                ha(l, i);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var x = i.value;
                x != null
                  ? Wt(l, !!i.multiple, x, !1)
                  : h !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Wt(l, !!i.multiple, i.defaultValue, !0)
                      : Wt(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[_n] = i;
          } catch (k) {
            Q(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), De(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (k) {
          Q(e, e.return, k);
        }
      }
      break;
    case 3:
      if (
        (Pe(t, e), De(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Mn(t.containerInfo);
        } catch (k) {
          Q(e, e.return, k);
        }
      break;
    case 4:
      Pe(t, e), De(e);
      break;
    case 13:
      Pe(t, e),
        De(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Eo = W())),
        r & 4 && Ms(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((re = (d = re) || g), Pe(t, e), (re = d)) : Pe(t, e),
        De(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !g && e.mode & 1)
        )
          for (j = e, g = e.child; g !== null; ) {
            for (m = j = g; j !== null; ) {
              switch (((h = j), (x = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pn(4, h, h.return);
                  break;
                case 1:
                  Vt(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (k) {
                      Q(r, n, k);
                    }
                  }
                  break;
                case 5:
                  Vt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Fs(m);
                    continue;
                  }
              }
              x !== null ? ((x.return = h), (j = x)) : Fs(m);
            }
            g = g.sibling;
          }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
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
                      (a.style.display = va("display", s)));
              } catch (k) {
                Q(e, e.return, k);
              }
            }
          } else if (m.tag === 6) {
            if (g === null)
              try {
                m.stateNode.nodeValue = d ? "" : m.memoizedProps;
              } catch (k) {
                Q(e, e.return, k);
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
            g === m && (g = null), (m = m.return);
          }
          g === m && (g = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Pe(t, e), De(e), r & 4 && Ms(e);
      break;
    case 21:
      break;
    default:
      Pe(t, e), De(e);
  }
}
function De(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Vu(n)) {
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
          r.flags & 32 && (In(l, ""), (r.flags &= -33));
          var i = Ds(e);
          zi(e, i, l);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Ds(e);
          Oi(e, a, s);
          break;
        default:
          throw Error(y(161));
      }
    } catch (u) {
      Q(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function vf(e, t, n) {
  (j = e), Ku(e);
}
function Ku(e, t, n) {
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
                ? Us(l)
                : u !== null
                ? ((u.return = s), (j = u))
                : Us(l);
        for (; i !== null; ) (j = i), Ku(i), (i = i.sibling);
        (j = l), (mr = a), (re = d);
      }
      Bs(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (j = i)) : Bs(e);
  }
}
function Bs(e) {
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
                      : Le(t.type, n.memoizedProps);
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
                  var g = d.memoizedState;
                  if (g !== null) {
                    var m = g.dehydrated;
                    m !== null && Mn(m);
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
        re || (t.flags & 512 && Ii(t));
      } catch (h) {
        Q(t, t.return, h);
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
function Fs(e) {
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
function Us(e) {
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
            Q(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              Q(t, l, u);
            }
          }
          var i = t.return;
          try {
            Ii(t);
          } catch (u) {
            Q(t, i, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ii(t);
          } catch (u) {
            Q(t, s, u);
          }
      }
    } catch (u) {
      Q(t, t.return, u);
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
  Zr = be.ReactCurrentDispatcher,
  Ao = be.ReactCurrentOwner,
  Ae = be.ReactCurrentBatchConfig,
  I = 0,
  J = null,
  K = null,
  $ = 0,
  he = 0,
  Yt = ht(0),
  X = 0,
  Gn = null,
  Pt = 0,
  dl = 0,
  Co = 0,
  Ln = null,
  ue = null,
  Eo = 0,
  rn = 1 / 0,
  He = null,
  Jr = !1,
  Di = null,
  at = null,
  gr = !1,
  nt = null,
  qr = 0,
  Tn = 0,
  Mi = null,
  Pr = -1,
  Lr = 0;
function oe() {
  return I & 6 ? W() : Pr !== -1 ? Pr : (Pr = W());
}
function ut(e) {
  return e.mode & 1
    ? I & 2 && $ !== 0
      ? $ & -$
      : ef.transition !== null
      ? (Lr === 0 && (Lr = Ta()), Lr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ba(e.type))),
        e)
    : 1;
}
function Oe(e, t, n, r) {
  if (50 < Tn) throw ((Tn = 0), (Mi = null), Error(y(185)));
  bn(e, n, r),
    (!(I & 2) || e !== J) &&
      (e === J && (!(I & 2) && (dl |= n), X === 4 && et(e, $)),
      pe(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((rn = W() + 500), sl && mt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  ed(e, t);
  var r = Dr(e, e === J ? $ : 0);
  if (r === 0)
    n !== null && Xo(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xo(n), t === 1))
      e.tag === 0 ? $d(Hs.bind(null, e)) : nu(Hs.bind(null, e)),
        bd(function () {
          !(I & 6) && mt();
        }),
        (n = null);
    else {
      switch (Ra(r)) {
        case 1:
          n = Ji;
          break;
        case 4:
          n = Pa;
          break;
        case 16:
          n = zr;
          break;
        case 536870912:
          n = La;
          break;
        default:
          n = zr;
      }
      n = ec(n, Gu.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gu(e, t) {
  if (((Pr = -1), (Lr = 0), I & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Zt() && e.callbackNode !== n) return null;
  var r = Dr(e, e === J ? $ : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = $r(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = bu();
    (J !== e || $ !== t) && ((He = null), (rn = W() + 500), St(e, t));
    do
      try {
        kf();
        break;
      } catch (a) {
        Xu(e, a);
      }
    while (!0);
    co(),
      (Zr.current = i),
      (I = l),
      K !== null ? (t = 0) : ((J = null), ($ = 0), (t = X));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = ui(e)), l !== 0 && ((r = l), (t = Bi(e, l)))), t === 1)
    )
      throw ((n = Gn), St(e, 0), et(e, r), pe(e, W()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !xf(l) &&
          ((t = $r(e, r)),
          t === 2 && ((i = ui(e)), i !== 0 && ((r = i), (t = Bi(e, i)))),
          t === 1))
      )
        throw ((n = Gn), St(e, 0), et(e, r), pe(e, W()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          xt(e, ue, He);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Eo + 500 - W()), 10 < t))
          ) {
            if (Dr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = vi(xt.bind(null, e, ue, He), t);
            break;
          }
          xt(e, ue, He);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var s = 31 - Ie(r);
            (i = 1 << s), (s = t[s]), s > l && (l = s), (r &= ~i);
          }
          if (
            ((r = l),
            (r = W() - r),
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
            e.timeoutHandle = vi(xt.bind(null, e, ue, He), r);
            break;
          }
          xt(e, ue, He);
          break;
        case 5:
          xt(e, ue, He);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, W()), e.callbackNode === n ? Gu.bind(null, e) : null;
}
function Bi(e, t) {
  var n = Ln;
  return (
    e.current.memoizedState.isDehydrated && (St(e, t).flags |= 256),
    (e = $r(e, t)),
    e !== 2 && ((t = ue), (ue = n), t !== null && Fi(t)),
    e
  );
}
function Fi(e) {
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
            if (!ze(i(), l)) return !1;
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
    t &= ~Co,
      t &= ~dl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ie(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Hs(e) {
  if (I & 6) throw Error(y(327));
  Zt();
  var t = Dr(e, 0);
  if (!(t & 1)) return pe(e, W()), null;
  var n = $r(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ui(e);
    r !== 0 && ((t = r), (n = Bi(e, r)));
  }
  if (n === 1) throw ((n = Gn), St(e, 0), et(e, t), pe(e, W()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    xt(e, ue, He),
    pe(e, W()),
    null
  );
}
function No(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((rn = W() + 500), sl && mt());
  }
}
function Lt(e) {
  nt !== null && nt.tag === 0 && !(I & 6) && Zt();
  var t = I;
  I |= 1;
  var n = Ae.transition,
    r = O;
  try {
    if (((Ae.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ae.transition = n), (I = t), !(I & 6) && mt();
  }
}
function Po() {
  (he = Yt.current), M(Yt);
}
function St(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Xd(n)), K !== null))
    for (n = K.return; n !== null; ) {
      var r = n;
      switch ((so(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Hr();
          break;
        case 3:
          tn(), M(de), M(le), vo();
          break;
        case 5:
          go(r);
          break;
        case 4:
          tn();
          break;
        case 13:
          M(U);
          break;
        case 19:
          M(U);
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
    (K = e = ct(e.current, null)),
    ($ = he = t),
    (X = 0),
    (Gn = null),
    (Co = dl = Pt = 0),
    (ue = Ln = null),
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
function Xu(e, t) {
  do {
    var n = K;
    try {
      if ((co(), (Cr.current = br), Xr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Xr = !1;
      }
      if (
        ((Nt = 0),
        (Z = G = H = null),
        (Nn = !1),
        (Yn = 0),
        (Ao.current = null),
        n === null || n.return === null)
      ) {
        (X = 1), (Gn = t), (K = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          u = t;
        if (
          ((t = $),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var d = u,
            g = a,
            m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = g.alternate;
            h
              ? ((g.updateQueue = h.updateQueue),
                (g.memoizedState = h.memoizedState),
                (g.lanes = h.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var x = Ns(s);
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
              Es(i, d, t), Lo();
              break e;
            }
            u = Error(y(426));
          }
        } else if (F && a.mode & 1) {
          var B = Ns(s);
          if (B !== null) {
            !(B.flags & 65536) && (B.flags |= 256),
              Ps(B, s, a, i, t),
              ao(nn(u, a));
            break e;
          }
        }
        (i = u = nn(u, a)),
          X !== 4 && (X = 2),
          Ln === null ? (Ln = [i]) : Ln.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Ru(i, u, t);
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
                var v = Iu(i, a, t);
                ws(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ju(n);
    } catch (S) {
      (t = S), K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function bu() {
  var e = Zr.current;
  return (Zr.current = br), e === null ? br : e;
}
function Lo() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Pt & 268435455) && !(dl & 268435455)) || et(J, $);
}
function $r(e, t) {
  var n = I;
  I |= 2;
  var r = bu();
  (J !== e || $ !== t) && ((He = null), St(e, t));
  do
    try {
      wf();
      break;
    } catch (l) {
      Xu(e, l);
    }
  while (!0);
  if ((co(), (I = n), (Zr.current = r), K !== null)) throw Error(y(261));
  return (J = null), ($ = 0), X;
}
function wf() {
  for (; K !== null; ) Zu(K);
}
function kf() {
  for (; K !== null && !Wc(); ) Zu(K);
}
function Zu(e) {
  var t = $u(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ju(e) : (K = t),
    (Ao.current = null);
}
function Ju(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = hf(n, t)), n !== null)) {
        (n.flags &= 32767), (K = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((n = pf(n, t, he)), n !== null)) {
      K = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function xt(e, t, n) {
  var r = O,
    l = Ae.transition;
  try {
    (Ae.transition = null), (O = 1), jf(e, t, n, r);
  } finally {
    (Ae.transition = l), (O = r);
  }
  return null;
}
function jf(e, t, n, r) {
  do Zt();
  while (nt !== null);
  if (I & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (td(e, i),
    e === J && ((K = J = null), ($ = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      gr ||
      ((gr = !0),
      ec(zr, function () {
        return Zt(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ae.transition), (Ae.transition = null);
    var s = O;
    O = 1;
    var a = I;
    (I |= 4),
      (Ao.current = null),
      gf(e, n),
      Wu(n, e),
      _d(mi),
      (Mr = !!hi),
      (mi = hi = null),
      (e.current = n),
      vf(n),
      Kc(),
      (I = a),
      (O = s),
      (Ae.transition = i);
  } else e.current = n;
  if (
    (gr && ((gr = !1), (nt = e), (qr = l)),
    (i = e.pendingLanes),
    i === 0 && (at = null),
    bc(n.stateNode),
    pe(e, W()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Jr) throw ((Jr = !1), (e = Di), (Di = null), e);
  return (
    qr & 1 && e.tag !== 0 && Zt(),
    (i = e.pendingLanes),
    i & 1 ? (e === Mi ? Tn++ : ((Tn = 0), (Mi = e))) : (Tn = 0),
    mt(),
    null
  );
}
function Zt() {
  if (nt !== null) {
    var e = Ra(qr),
      t = Ae.transition,
      n = O;
    try {
      if (((Ae.transition = null), (O = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (qr = 0), I & 6)) throw Error(y(331));
        var l = I;
        for (I |= 4, j = e.current; j !== null; ) {
          var i = j,
            s = i.child;
          if (j.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var d = a[u];
                for (j = d; j !== null; ) {
                  var g = j;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pn(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) (m.return = g), (j = m);
                  else
                    for (; j !== null; ) {
                      g = j;
                      var h = g.sibling,
                        x = g.return;
                      if ((Qu(g), g === d)) {
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
                    var B = k.sibling;
                    (k.sibling = null), (k = B);
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
                  Q(a, a.return, S);
                }
              if (a === s) {
                j = null;
                break e;
              }
              var v = a.sibling;
              if (v !== null) {
                (v.return = a.return), (j = v);
                break e;
              }
              j = a.return;
            }
        }
        if (
          ((I = l), mt(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), (Ae.transition = t);
    }
  }
  return !1;
}
function _s(e, t, n) {
  (t = nn(n, t)),
    (t = Ru(e, t, 1)),
    (e = st(e, t, 1)),
    (t = oe()),
    e !== null && (bn(e, 1, t), pe(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) _s(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        _s(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (at === null || !at.has(r)))
        ) {
          (e = nn(n, e)),
            (e = Iu(t, e, 1)),
            (t = st(t, e, 1)),
            (e = oe()),
            t !== null && (bn(t, 1, e), pe(t, e));
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
      ($ & n) === n &&
      (X === 4 || (X === 3 && ($ & 130023424) === $ && 500 > W() - Eo)
        ? St(e, 0)
        : (Co |= n)),
    pe(e, t);
}
function qu(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (t = 1));
  var n = oe();
  (e = Ge(e, t)), e !== null && (bn(e, t, n), pe(e, n));
}
function Af(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), qu(e, n);
}
function Cf(e, t) {
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
var $u;
$u = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ce = !1), ff(e, t, n);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), F && t.flags & 1048576 && ru(t, Vr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Nr(e, t), (e = t.pendingProps);
      var l = qt(t, le.current);
      bt(t, n), (l = xo(null, t, r, e, l, n));
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
            fe(r) ? ((i = !0), _r(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            ho(t),
            (l.updater = ul),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ai(t, r, e, n),
            (t = Ni(null, t, r, !0, i, n)))
          : ((t.tag = 0), F && i && oo(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Nr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Nf(r)),
          (e = Le(r, e)),
          l)
        ) {
          case 0:
            t = Ei(null, t, r, e, n);
            break e;
          case 1:
            t = Rs(null, t, r, e, n);
            break e;
          case 11:
            t = Ls(null, t, r, e, n);
            break e;
          case 14:
            t = Ts(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Ei(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Rs(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Mu(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          uu(e, t),
          Kr(t, r, null, n);
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
            (l = nn(Error(y(423)), t)), (t = Is(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = nn(Error(y(424)), t)), (t = Is(e, t, r, n, l));
            break e;
          } else
            for (
              me = ot(t.stateNode.containerInfo.firstChild),
                ge = t,
                F = !0,
                Re = null,
                n = su(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($t(), r === l)) {
            t = Xe(e, t, n);
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
        gi(r, l) ? (s = null) : i !== null && gi(r, i) && (t.flags |= 32),
        Du(e, t),
        ie(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ki(t), null;
    case 13:
      return Bu(e, t, n);
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
        (l = t.elementType === r ? l : Le(r, l)),
        Ls(e, t, r, l, n)
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
          z(Yr, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (ze(i.value, s)) {
            if (i.children === l.children && !de.current) {
              t = Xe(e, t, n);
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
                      (u = Ye(-1, n & -n)), (u.tag = 2);
                      var d = i.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var g = d.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
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
        bt(t, n),
        (l = Ce(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Le(r, t.pendingProps)),
        (l = Le(r.type, l)),
        Ts(e, t, r, l, n)
      );
    case 15:
      return Ou(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Le(r, l)),
        Nr(e, t),
        (t.tag = 1),
        fe(r) ? ((e = !0), _r(t)) : (e = !1),
        bt(t, n),
        Tu(t, r, l),
        Ai(t, r, l, n),
        Ni(null, t, r, !0, e, n)
      );
    case 19:
      return Fu(e, t, n);
    case 22:
      return zu(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function ec(e, t) {
  return Na(e, t);
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
function To(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Nf(e) {
  if (typeof e == "function") return To(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xi)) return 11;
    if (e === bi) return 14;
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
function Tr(e, t, n, r, l, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) To(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case zt:
        return At(n.children, l, i, t);
      case Gi:
        (s = 8), (l |= 8);
        break;
      case Xl:
        return (
          (e = Se(12, n, t, l | 2)), (e.elementType = Xl), (e.lanes = i), e
        );
      case bl:
        return (e = Se(13, n, t, l)), (e.elementType = bl), (e.lanes = i), e;
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
            case Xi:
              s = 11;
              break e;
            case bi:
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
function At(e, t, n, r) {
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
function Yl(e, t, n) {
  return (e = Se(6, e, null, t)), (e.lanes = n), e;
}
function Wl(e, t, n) {
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
    (this.eventTimes = Cl(0)),
    (this.expirationTimes = Cl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Cl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ro(e, t, n, r, l, i, s, a, u) {
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
function Lf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ot,
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
    if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
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
    (e = Ro(n, r, !0, e, l, i, s, a, u)),
    (e.context = tc(null)),
    (n = e.current),
    (r = oe()),
    (l = ut(n)),
    (i = Ye(r, l)),
    (i.callback = t ?? null),
    st(n, i, l),
    (e.current.lanes = l),
    bn(e, l, r),
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
    (t = Ye(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = st(l, t, s)),
    e !== null && (Oe(e, l, s, i), Ar(e, l, s)),
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
function Qs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Io(e, t) {
  Qs(e, t), (e = e.alternate) && Qs(e, t);
}
function Tf() {
  return null;
}
var rc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oo(e) {
  this._internalRoot = e;
}
hl.prototype.render = Oo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  pl(e, t, null, null);
};
hl.prototype.unmount = Oo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Lt(function () {
      pl(null, e, null, null);
    }),
      (t[Ke] = null);
  }
};
function hl(e) {
  this._internalRoot = e;
}
hl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = za();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < $e.length && t !== 0 && t < $e[n].priority; n++);
    $e.splice(n, 0, e), n === 0 && Ma(e);
  }
};
function zo(e) {
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
function Vs() {}
function Rf(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var d = el(s);
        i.call(d);
      };
    }
    var s = nc(t, r, e, 0, null, !1, !1, "", Vs);
    return (
      (e._reactRootContainer = s),
      (e[Ke] = s.current),
      Un(e.nodeType === 8 ? e.parentNode : e),
      Lt(),
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
  var u = Ro(e, 0, !1, null, null, !1, !1, "", Vs);
  return (
    (e._reactRootContainer = u),
    (e[Ke] = u.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    Lt(function () {
      pl(t, u, n, r);
    }),
    u
  );
}
function gl(e, t, n, r, l) {
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
  } else s = Rf(n, t, e, l, r);
  return el(s);
}
Ia = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = wn(t.pendingLanes);
        n !== 0 &&
          (qi(t, n | 1), pe(t, W()), !(I & 6) && ((rn = W() + 500), mt()));
      }
      break;
    case 13:
      Lt(function () {
        var r = Ge(e, 1);
        if (r !== null) {
          var l = oe();
          Oe(r, e, 1, l);
        }
      }),
        Io(e, 1);
  }
};
$i = function (e) {
  if (e.tag === 13) {
    var t = Ge(e, 134217728);
    if (t !== null) {
      var n = oe();
      Oe(t, e, 134217728, n);
    }
    Io(e, 134217728);
  }
};
Oa = function (e) {
  if (e.tag === 13) {
    var t = ut(e),
      n = Ge(e, t);
    if (n !== null) {
      var r = oe();
      Oe(n, e, t, r);
    }
    Io(e, t);
  }
};
za = function () {
  return O;
};
Da = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
oi = function (e, t, n) {
  switch (t) {
    case "input":
      if (($l(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            fa(r), $l(r, l);
          }
        }
      }
      break;
    case "textarea":
      ha(e, n);
      break;
    case "select":
      (t = n.value), t != null && Wt(e, !!n.multiple, t, !1);
  }
};
ka = No;
ja = Lt;
var If = { usingClientEntryPoint: !1, Events: [Jn, Ft, ol, xa, wa, No] },
  vn = {
    findFiberByHostInstance: wt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Of = {
    bundleType: vn.bundleType,
    version: vn.version,
    rendererPackageName: vn.rendererPackageName,
    rendererConfig: vn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: be.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ca(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vn.findFiberByHostInstance || Tf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vr.isDisabled && vr.supportsFiber)
    try {
      (nl = vr.inject(Of)), (Fe = vr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!zo(t)) throw Error(y(200));
  return Lf(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!zo(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = rc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ro(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ke] = t.current),
    Un(e.nodeType === 8 ? e.parentNode : e),
    new Oo(t)
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
  return (e = Ca(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Lt(e);
};
ye.hydrate = function (e, t, n) {
  if (!ml(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!zo(e)) throw Error(y(405));
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
    (e[Ke] = t.current),
    Un(e),
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
  return gl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (Lt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ke] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = No;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ml(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
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
var zf = la.exports,
  Ys = zf;
(Kl.createRoot = Ys.createRoot), (Kl.hydrateRoot = Ys.hydrateRoot);
const Df = (e) => {
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
  Mf = "Resume-BpHCc5pE.pdf";
function Ui() {
  return (
    (Ui = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ui.apply(this, arguments)
  );
}
var Bf = {
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
  Ff = new ((function () {
    function e() {}
    var t = e.prototype;
    return (
      (t.load = function (n, r, l) {
        if (
          ((n.el = typeof l == "string" ? document.querySelector(l) : l),
          (n.options = Ui({}, Bf, r)),
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
  Ws = new ((function () {
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
  Uf = (function () {
    function e(n, r) {
      Ff.load(this, r, n), this.begin();
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
              r = Ws.typeHtmlChars(n, r, l);
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
                var g = n.substring(0, r),
                  m = n.substring(g.length + 1, r + s),
                  h = n.substring(r + s + 1);
                (n = g + m + h), s--;
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
            r = Ws.backSpaceHtmlChars(n, r, l);
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
          h = new Uf(m, { ...a });
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
      const g = i
        ? wr.cloneElement(i, { ref: u })
        : wr.createElement("span", { style: e, ref: u });
      return wr.createElement(
        "span",
        { style: e, className: t, "data-testid": "react-typed" },
        g
      );
    }
  ),
  Hf = () =>
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
  _f = (e) =>
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
                o.jsx(Hf, {}),
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
                        href: Mf,
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
  Qf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFgUlEQVR4nO1ZWYgcZRDujTFqPPAAbyO+RER8UVH0IYuoGDUmonTVsBuMvqxijBhCyLHz/79HzLEazycPEFGi5MUHNbImZqaqZ9dAVhCNIJrDyG6iq5HEKJpEM1I9OzN/90z39MzOTBbZgn6Zrr+6qv46vqpxnEmapElqEuU7FHp3aqS3NdBOBfyXRj6okb9SSK8boFnC40xESmP2KgW0XSPn4x/KpVPe1c5EojTSgwrpz9rKFx6FdEQDdTsTgbRLCzTS8ZKCwH9o4FeVm71p+b2bzzPd284yLt2ggdbbRiqgfzXQwydUeZXK3q6BjlpKbe9FuiyKv7dr4HINtK18E3yskBcngJbOzZ2pkYat0NhqFmROrXXOzBmaLrzWje0z7uC5TrtJAb1geX6XhEvSs6KwAt5j3cTzrdU2rEB35lK5/qICJsWz65VRKLel2/vbuN4Mp12kgY3l/U8alaOQNpdDiZ5y2kGuu/EkDfzjeLxfJDmrS47gPW1pcgboWsv7I2JQo7LkrAL6ueyM3PVOq0kDL7K89uZ45SmkxxTwL768FD/eHC3jPgj8frl6eD32O+PumKaR1klpVEgHFNCqJDe0aPamUzQSijFOq0kjDUVduQJaWwEdgPdppFEN9JsG+kkheRr5DZ2ihVLNnHaTBvqhZEBIAcmJpHhoDNgJBBkUzy92B09riwEK+XBRgSXz+08fnwEBY0Y1estabog0ndINuDum1Qoh6djLu7xz5DFu5kIF2VvE4xr4Ix+VYgX/LgGCLTPA9rIoZL8Tg8SIAg+NKuA+05mZGiXLzMucrVx6RCHtDcJtPqaQnow72zBppC+LH2rWYGKkeqVooVSu0G18mAQgxgufMzRdIa8uGQD8qTWYzHOaSCtSWy5QyB+HciMryLcx5f2Q4H5J3GI910DPWo2sz2k65TsU8NPBm+D+hjq+DZll5i0NMeUb+NxpEWkJKZnayoY8U5/yhe1CaVQUxcshVawedNwgz2xEQem+coNaGp10buA++S1gBNAKewRVQHckFq6Rd1tV4d2AYKSNFgxe34gBPuSo7AXrKtc0tMF6/21Pz9DJtYWneLF1aFgGc/u91GnLM4dWuoOX1G2ADzEqesBImE++bfMq4EdjBRuTn2Lj/TRmu6oqgDxo5cIHdRvgd95K3ORUoTR4D1jf2hs7NxjwbrNC5/uo7Feud529kdDIv4oHpZGFO3TV80ivVNwAlst1QCeTn2I3O4N0c7Rg4Jcsj5iko2UoFNbGnSsoxF/YYapqdF67tEp1jDNgoFx5+MZYRTozU8f2nzVjOWT4Q1ZIHBCcFMfvfwtolpUHn8UYYI14buaMWoKrI1AajlQEeebYwrdo7BNOApK1jfWN3ZGMtvAk3S9iiFlTjVcggUL6xor5r5Pki7UQK60voxVC3l9kXNlNF9UUbCHQuCSWZVZgrQh0qJ4maFxvhmX4/khGDbSl7E3PdZpAsi8Vb9td1WD2vnpk6EDeMEUzIvdaCeaNd1cjTgjB5H+krjcA8AasHFORrP7UFJiUaGkjiheSld4L1nk6ooDur1eWRm+ZBV2Oxm3AnTBkLmKUpLNq2s1eo5HeEU8HE5t21irLYfKBowC+YIleVftgYb+TC5dGMUy53GnmD5wvPUDKbK9LV4wtal+Uzl2tsWngt+yhRCHf6ocE8HMKvHvSbu7K0tycyl3sv0deXVGigTkRmBOSjYMG2lRVoeTP1vCAriG7xN5s64SPTGpyI059lO/ws78Kcoz50GH5l7LaPy+FakQbqnVvHSUPaET+gxtXMfEhQ4ru1kCvFTZz/qZNgNxBDfyd/48L8BqTys5N0r0lnIRXA70ssKCAfun3gkxBqTQk3zKQvaslm4lJmqT/Gf0HFZZJJZ6aOJMAAAAASUVORK5CYII=",
  Vf = "Netlify-B4FiNhHG.png",
  Yf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII=",
  Wf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII=",
  Kf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO2Zu0vDUBSH828lBQVRF63ugpskoojooIsgKmpxFFRQEETEyQoOiVrtgxYcKpRah2qF+ii+ELVJ6iM1OXKFoiYR05Sm90I+ONuB/L7cc8lNQlEuLi4uWMMxQjvHCGGO5mWOEcCRonmZpfkQ6+G9lYb3ORaa+VNmspI7DzhUN73dakcgXOvg3PcqBMsWYGlewkdAEO2sAOBUVDUErKCpGsjPCuTORIhuXcHsYBy6PQQJmJHLiODrOiBXAFFUVFgcSZArUJIY7YjiJ6Dv628KwPJYEgqSYugN+y/wFygVktBznyuQIzDQvGfoVd4+yBFA865HfHonQ6C3fgeS0TtDbyb5iJ+Af/7kVwXWs3BzLpv2rkyl8BOwSvrwAXrqtskUOIrdQ1/DrqXwWAqgM1IicgvD7SEyBX4+B/obA3gJmPUOeYOwMZf+Oj7o8c+f4C9QKhRWz+VpnhyBobagof9VLpIjgDatQaBAkMDmgnGEbi9k/AXQ6KD5N9vEkc1LvATKQVU1GO+MkSuwtXT673WwFHiRirA2c2wpfM0FNA1AzitwnZUgvncNq9Opr9dMzmL4qgk4WRTJnxZZRsjbEQhhJLBfvoCH92IjQAstlB3Qz4Vah+cYfoKqBPRzAX2fd3JPsDQvobGxfeddXFxcKKf4BKis2RSvB6ZeAAAAAElFTkSuQmCC",
  Gf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nO2WT0hVQRTGz/GZ7yEiRJJ/SsMiRaigUFwUhQgGouLChZS5Cmmj5c4kol1tRNoYLcJ0JRKUFYmUJi5EQSP/dEFxkUW4iQyUIMS+mHe5jtN7ihLeO8L54OPBmXmX+c2c+90hEolEIisFh2CTSQAcOQFIC+1GQbcM5CV2gt91SIw6we885EPm2GHarYJeMATACX7XIS3k/M+O8YZ7282xmT5CbTkjI42RGGJkHWbUVTJmX+4DgMFOQiSsx2iTkyMcHbcWYH2WkHtU18NJjILj7q9XKz7D+PPJUoCPz3U9IYEx/cKtLw4STmQzbl5jrExYfALDXbqu2uj3lJ7/64NlKRQP4MuQWa8uZXx+t9PnWQCgfPmC+eJGwozrNYz5/n0C8G2YcLYgNoFCIRdkddJyAGW1yNYGRkpyLMjpPMaPMcsBPH8fJdxvJqQfMiEar3KwACrvtwP4N+d/jlM0/7352Rk+AqgUqSphvH6kawsDJsCrDj3W/YBQeCo279tb9H+SDvgE0NNG0c+/lya36hkddwnnz5ktoe4+ar66/3i1kmLG1yG3vjxOuFSkx9TX2heAuTcaYCufPKavBg9bzZNhZhxJN68SyrcbfGyh908JqSnxF69a4e0Ts/fv3Nge+GJh/CjdMwDlpRFCUx0jJ9PNc3VNriljTD6LP3+sh3ClgpGf6+7+wVR34Y/vEdZmtkq1PQTwwyQAjpwAfG0hkUgkIj/0FxH0JVVHu8XgAAAAAElFTkSuQmCC",
  Xf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOUlEQVR4nO2Zz0tUURTHH+f8AZnZ2KjlLAQzZJJWBUpFKdEvcJXIKEaGBGJEiYvACLQf1MYWJRkYGM27gxFtWgYt+gfClS6UoAKxcOzV9hv33RmvD6fgzWLefXgPfBdz5jzu9/PuOTOPdx3Hhg0bNsyN7J/9JLx5dr0NFh4qKtfbIPHrrZPLN5dtnl3vR8WNi236Kb2E9u/f+ejNo6BcaICtbUO7EpGINUA+PMCWO2AAACwA2R1I2BYKFTtiiLmlHZw+FdShDlDNgZgAPFko/cfzag08OAXaUx9TAFHQqIgRQFun30J0og/84ovOHzkTDwCqrtPfXRrXi2cmdb6+Gdz/EHz7HXhsHtRzB5RIGQhwsl8vfm1a5RrT4JmV7W32bBHU2GoYQO9dnS/sAA89VblsHnRuGDzwqPQuRQZw8QbownVw333w3KpePH1a1Y6/V59nv4H2pnzx5ce+qGsweoCSKraPrJVmi/npJQVc02DOEG9qbhX04BPo7DCoqlbXJ5tAEx+Ctc+XQZ1XzAAIzMC/tDsJ6roKnvocMEcdPYYDSONHu5UOHlO13aPa4C1hOICsnf2q6iY/KqBkE/j1urr+ZtZ8AMpMBHq/CMTy2uOZGABU7QNn7oFfftfGZlZA50eiG+KyJJ9Q5RykDgd/pWIDEEJsAYTdAdgWEjt2iF2DXu663npoAHm48N9H5UrK9URoAHkyIg8XDDC/5rz53eCUfUojvJx8Px+B+bx/58s2b8OGDRtOBeIvz9/EsXcp1C0AAAAASUVORK5CYII=",
  bf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfUlEQVR4nO2Z20sjVxzHR0tLu/QG7fZp2z9ACoVOHDNJdJI4mcxkotgWr9UnFQQv9cFL8RbxwY24also26UPImjFiu2DVBHRBx/ESx+sbkFQtGIsqHW90EQTSU75HXZCms3EyWXcF7/wgzAz0e/n/H5zzvmdEMSd7nSnhJWfn/9KdnY2bTabW8xm84TJZPrTZDI9MxqNPgiGYZ5lZWU9zczMnDAYDC16vV5LEEQq8bLFcdyHFovFybKsKzs7G0GYzWYcJpMJGY1GHAzD4MjKykKZmZk49Hr9vsFgeEhR1INbN87z/H2O456wLOu1WCyIZVkUK4DBYMCh1+u9NE0/Zhjm/Vsxz3FcicViOeE4DoH5JAAgnU4H8Q9N00WqGSdJ8lWe53+0Wq0IzKsAgGiahvgB/ldSzdvt9ntWq3WK53l0CwBIq9X+RpLkvWSOPDZ/iwCIoqjZtLS01xIGgLIRBAGbhwDjklkIMJ8IgE6nQxkZGThCAZ5fe5yo+S/BfCgAjHhPTw+amZlB/f39KDc3F5sF0xKAZD7UeDgAGBUEAfX29qKpqSnU1taGjYcBII1GUxiX+by8vPcEQTgOBwCD29vbSNLl5SUaGRnBpSUZLioqQpWVlai+vh5HRUUFKigoCJYLZGx0dBR5vd7g31lbW4OyeQEgPT39hCTJ2KdYURSf2Gw2FA4A4ff7UbgODw/R+vo6BpKTx+PBRo+Pj1+4d3V1FREArlEU9X1M5nmef2Cz2byRAHJycpBaouQBvCRJfhTL6DtFUUSRAOAljjbK8er8/BzKRQ4A3oWHisw7HI5UURT35QDgHdjY2Eg6wPLycrQMAIALNo03AtjtdhrMRwKA0W9tbUWBQCDpAIFAANXV1WHzkQAgOyRJUkrKp0UOAKbQ/f19pJb29vaw6SgAXyvJwC+RAGCabG5uRmqruro6aD4cQKPRjCvJwNNIAFA+Y2NjqgMMDQ1hwzIA60oycBIJAMpnYWFBdYDZ2VlsVgbgWEkGvJEAYPVcWVlRHWBxcTEawJUSALdcBubn51UHmJ6ejgbwr5IS+kvuHRgfH1cdYHh4WPYdIElyVwnA73KzUGdnp+oAjY2N0WahZSUA43LrAGyd3W63aubdbjde6aOsA2NKAOqiLWSQYrU0ODgYdSHTaDTVNwKIoviJHIDUTsK2Odna3NwMNjpRAD6OazMnmZf2Q1BKS0tLSd3IcRwXsSMLAdgjCCKFUCKbzdYqAYBp6LBqamqCTTwE1KrD4UBbW1txG9/Z2UEdHR1B4xF64lCAm/dBoSdvoiheAgCM/MDAAO7CoHRqa2vxoiY199D7lpSU4GcmJyfR6emprGG4B89AL11YWIiNSicS4acSYQBXNE1/QMQiURS/k0oIRryhoSHYEpaWlv4vGwACjTxch9ZQTj6fD5WVleHe+KZjlYwQgPT09G9iMv88C28LguAKXcicTic6OjrCWwooMciEBACZgFX0Js3NzWGzMQD8TZLkO0Q8EgThi0j9wMHBAYaA+i0uLsbR1dWFLi4ubgQ4OzvDBmMAyIvLfEgmHoV2ZO3t7bh7glhdXUW7u7vI5XLhXaQSwfeUAlAU5SSSoBRBEH6SemIol+7u7oRWZIUAPyftR5D8/Pw3eJ6fkNYDgIDPTU1NqK+vD5+uQbemtFdWADDOMMzrRJKVYrVaO0MPd0PPReHYMBkAWq32W1V/frJarZ9zHOcKP51OAsC+Vqv9jLgN5ebmvsVxXD/LsleJAuh0ukudTveIYZg3idsWwzDvsiz7ldls3q2qqkJKVV5eDuVyoNfrOw0Gw33iZQshlHp0dPTp6elpg8fj+dXn861fX18f+P1+DwR89vl8f8A9eAaehe8Qd7rTnYhE9R+kV7M+FoRFRQAAAABJRU5ErkJggg==",
  Zf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFlElEQVR4nO1Xa2xURRQeQERUrG1ntoD4woIS8bmdu+UR6967xQooYCxBpSq7Zy4v8REV/0iqxkR8JMZfYkKMiUZC/eEzJEi6Z5YCf6j4iATUKA9jCA+x3XtLA0HWnNlH19Jaomy7Nf2SyXbPvZ39zsx3vjPD2BCGMIR+QadTNZENZniOfGhQJ+E51tpkRC5ngxFts6rLfFse9hz5AhtsSDWy4Z5jbfIdK9VhW0vZYEKqvn6E58j1RN6z5ekTkeBVbLAgVVNzke9YTUTeJODId9mg0rxjJfLI70/WBDk9S9VVjvLDodm+bb3l29ZGzw7dzIoJ7Y6c7Dvypxx52+rww9YtR6dPH+M78nnfsY6mn8kNbTNnlrJiQkc4FPRt+Xse+ZO+I+u82qqpvmPtzdaCZ1srWbGhsyZ0jedYh7rIy9MdtlxA8eyq0250ONY8VozwHLk5S55G0qlaQXGSSi6piFzIihFe7bSA51hn8op2HcVTweBIz5GdGc3vZsWK9khoUn7RZouzw66+Im9X9rLi7rby10wCO3PxuspRxoWysrozOIMVK3xHrjFEbastVV09Oi/+ZtcuyGZW1J3XtvYYohGpuh/kchILyxtZsSI5K3iD78jjpHeSVTbuReSDuV0IW8+wYsYJR05LNzM5NxujZHzbOpJJIsqKHclIaIrvyC/JRrMx37aOkZSOR4IlA8uOMcYhHhRKr+aA7wnATVzh2kBM11au2jQq+05HjTXBd6puM3+HQ/d6jtxHR43uc5UrLQXoJqHwBwEY527ijoIRL3kELxeACaF0Kj3wTF8/aIo7bDUcq7MuM4Sj28YLF2cKhQ1lgBMqFm++xMQUrqc5OeCJUrelMPeGAGB1F/lcEkmu8FsOegsN2hFaUa70J+a70q0C9B6h8CBXujP7P8LV9d1SHSaU3pt5/lhBEjBJKIwIwE856KNnJ9PbwCQH/E4o3MhBN5ZHm6/vaW7RtburWX+Atp5HcZGIYoMAvJ9WVcT0fZRkWSxhlcX0FLECLz2XuUqWt5RypX0jIzc+p+DkJzy1YzTJJLPCDSSBf3p//Mot5QEX5/embw76dTMX6D2sES8oGPHcD7rxOX+TCeABAfoLofAdrvTbNITCDzK1sU8A/pkuUu1xVz/OGlO5RscB5wqlT3PAw4HY1n66YjamhnNARQVMbnSOtXBQAK4TbmIWc1tNjwhAfF5aOriRXIkNBDhsmRyI4eIA4DIB+jkO+hUaAvBZDolYwI0741w0l/p8iBhWCsBVY6PNV7OBAlc6SivIQX8sVuDYriepYUQ64OqbBOiHhdIfUuO7LLajbMDIsvqmERVRnMrdxO0Vy7YHKCQAj+fLxMjBxHqWFQd9iByqX3mXLG8pNZ0ySzb9+TkdH7jCRaZI+9A/FagAvUFA/K6eHGvskq2CK/1aX272r8CV/rrLbbSm9n/WO0v1pADoBdk6IG0b/cd0rXCbr+uLGAe9kOavcOOh856AcY8uCewjCZ2vuSuWbQ8I0C8JwFO0SwWpEVoVrvBIN9//SgC+wQEfELH4DNOgMtbYI+q/v5C7iXHk86Zrp0knhMKTGYvdRfWVn9h5TaI8um1MxiK/6VXr1KyoPtLjAFf4Mw0B2N7L++3k/+UxfU9+YyPbpS7PCgVqOKR3AfgiV/p9rvQ2qhNDGPShPGf6gyv8hVZXKGw2p1TAV8l6TcetbxqRP68AvJUr/ZEA3Ub3hIIlQKtV+mjiSpLFf52qAhLXcsAnyRzS1ou7+uc44baO5ErfzZV+gm5kdEzmLgKdkcpdrDKutKRlIg3quKaOYno2HfwE4MsC8DOu9P6MlE4ZW3Zxfr6U+hGpYYasi/O5i2vMFRH0TgH4o1D4G0kp7TJGXrs56BajfVc/TbezcW7rxQNAeghD+F/gL76ssK8TFCCXAAAAAElFTkSuQmCC",
  Jf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHaUlEQVR4nO1ZZ2wcRRS+UCIQRSB6hyBASPQAQlSJLoooooUmEgKIhBQChBZu5mxCiygxRQoCQhSEIKSA6JFQaAIE/AGsENn7Zn0uuX1vL3YCQYQYOPRmZ/b2yt6t7Q2/PNLI592Z1+bNe997m8mMjtHx/w6xqrRNDvxLJWBOKpwrHZwooP/AodJpVWsPEkCThKLHhKJsDrzzRKm0VWZLDgHeMQJwjVRUqp34mXD8sxPQOFcCrhKA/9ah8YPIe+O2iPCPdtE+QpFnmP0kgB6SioQAfEsq+j0iyGLhFPas3v9Yb+9uQuEb4TrAdVLhqwJoFp+AUNTOz4Ui58lf/Z1SV0AAvmys9OGCH0vbVrxzB3aRCu8TCtdb4YRDF9n37HJWef4rAO8S7aWxFTTaS2Ml0Kd6DaBMV3jX3c5auUXhsbHrOor7S6CPjRB/C0XTeUrAf4zwS/kk4va3OHRY4FqYT1cBwNOt6yRZLwEfjPp4NhDqvkR7Ff3Ee/iSj1jwskB0q3GNt5PuyQJ+aBUQDq1MzEvRMt7DUWnYAtcQBbo7cAF8JqEQIlDYG5SAg0b5XJK9AqhN83LpuhELXhbIv8P49XPNBcApRmD2+2tziq7m+2ACwLTkCniXp6gA3hQIRYsarcspOkuqwOLCpZmhUMq/3SgwmAM6ozEvWhwYyzs3NQUE0CU2hMaucXFvAbg2YE5tNYIBzjcn0zcXvL3iFcD3zQmckpoCHBHMHeiOPtOQQtGMLOB8oYjMmk1ZB/sEYL8OpcHslw72SaA/jSsWhUNtHGJ1johAEamwh9fM7Vi7R2oKZEqlMZEktcIySXdiT0BbX/6+VOR+PL9+V3OBvxLVDIEtiu8J8F6XijbreN/p3cNYhmEH711SKm3Nk39rKJL3xuUU3mvcbLPspIUBjcD1wrAL+iS/5LvDWX7Igot23FEqeiS0up7+H4b4J2GSKZXGMDAzz5cnpS+BjKVxFdPQPN3CwTaLSyDNy7jkeqFoDsuUTHjwbrT+zKGQ0z/jGuH4J5qjzodMgSaZZxsYRiRVgE9DAg7ovQ5ODI2hMK/9H/qPYZ46qRkYIhWhAP/6WKJ81ELRS5GjfEc4haMqlSOl8ZBLx88rFHYIARrglMwQhwScavj4jD4FFE82/3dG17WAd7TNzmY+X7duEIpeMAt+51OIYWpCIT1p4DQDtHZWPrqutXPdAfrkFP7Gk12mRflH1DFYu6ExRwA9ZVzxqXq8hcKbQ9gOOL/ypYsXhq7QRSfEWY2RqFFgXRa8gXoZk4UPsH7lpedQyu8q+XqXWz+Xrl/Up+v442P5O/54bZBqrCQUrTSWmB63ObL268gF+97eh8j7pXGhUihaUhOegb4rRzb6til/l2baYBI+ZMvzw0ZY3Y5WpzixjDJrS0hroZhYv6FmveOfbd+3AE1uqsCavt3tqQ1LAdmJ0yzDnOOdMxQFKpiakXO8c8I1jjdjeAqYUo5hQVMCin5u5EJhjK83q+uJUqULCcDV1fRq+APNMu72cdRq59sI1OgSMZI0ghezBk5UX2KONhr71FxiKlbnClG+xHyB/bhTLfP3T7KRqGadxeE6jCq8uR4B7iIYYZ4QQJObhNElgWviBrZ8tfAVYdSlmRyajTKv1LW8i7cIoI2xhRUnB04SEYst5yQSfR8mLheP0wIArjauMTUzzEQmAHuf7u7evpzpyY8aJOhF0bsRN3uuYQNMOjQhkmG5MF+WA7pYKDrTKNZVN38MAUro7oUJHNKhCdWZniOT5gm0PGwOABW4wkvEgGGCBHq4Asw5GGB5hz5p7SocUhP3gVYkVcBedAH4UUgn741j2oaW5mVOd4CzPsuUGeoIGlZ0mwT8QkJ1RKGCUPiBdPBVLmIC5XC2htPdxf1q4HR3cT8Np13/Ab3fpU05Ra8xjUjHL5q5P2few4LTMfdjowV5FjWmOzEvlWez+MbqwDCiwR0zyyQaadhPudMguvCZrKN9lI/8zyxgTxBKucDHweC31xOelCIvq/BZbjFqX4/cHy5bdVZ2i0empkBOeZc1K+p18xawty5aDLoNL5oQ2N0o40tT1Odc74rUFOAYbPx+YaN1QaLDvwJl/TtqQqbCzTkHT2tEQwItqih00hgS8E4bg5ut5Y6aDn1BNXeNBP8G/j+YCcAahJ25sK804mHxR9LWIrfHja9vto0ubvgm5NVm9s4ZseARopPq4vm4oYt9zwJETlafJuUlTfnIFzyTdnudkWii9QpnR9vrxoUeGEp7Xbh4YSatwVjFokDGQbGC5/19bRQx3YQZUuH9trnLmbcR5BBAh2tlFW1KJYFFhwRcYHF4zeehjuLO+luXhdGc/h280r7n+tXC5aDPg7M5O2eiNNpLY8ulLb6ZqvCagYt7G0ClXUl3Jfi7AdDCEJiZWrWelTWU0BA7XLeRYXbwuZYekYp+scpHsVaqg+F13GdWAfRNTuEFzWhwIaItXW5YlSrwVSeemtnSH7oF4FVS0eNS4dPc1GrtwEOH+6FbMh2gebojmLR9ODpGRya18R/WoypcGRnl8QAAAABJRU5ErkJggg==",
  qf = (e) =>
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
                      o.jsx("img", { src: Yf, width: "40px", alt: "" }),
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
                      o.jsx("img", { src: Wf, width: "40px", alt: "" }),
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
                      o.jsx("img", { src: Kf, width: "40px", alt: "" }),
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
                      o.jsx("img", { src: Gf, width: "40px", alt: "" }),
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
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "React JS ",
                      o.jsx("img", { src: Jf, width: "40px", alt: "" }),
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
                ],
              }),
              o.jsxs("div", {
                className: "col",
                children: [
                  o.jsxs("h4", {
                    children: [
                      "Redux ",
                      o.jsx("img", { src: Qf, width: "40px", alt: "" }),
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
                      "Java ",
                      o.jsx("img", { src: Zf, width: "40px", alt: "" }),
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
                      "GitHub ",
                      o.jsx("img", { src: bf, width: "40px", alt: "" }),
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
                      "Netlify ",
                      o.jsx("img", { src: Vf, width: "40px", alt: "" }),
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
                  o.jsx("br", {}),
                  o.jsxs("h4", {
                    children: [
                      "Adobe Photoshop ",
                      o.jsx("img", { src: Xf, width: "40px", alt: "" }),
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
  $f = "online-8uhyc_Ep.png",
  ep = (e) =>
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
              children: o.jsx("img", { src: $f, alt: "" }),
            }),
          ],
        }),
      }),
    }),
  tp = "Project1-DK1tIadi.png",
  np = "Project2-CCpSNmG7.png",
  rp = "Project3-04gukf0n.png",
  lp = "Project4-DK1npiQB.png",
  ip = "Project5-PgLLbYFI.png",
  op = "Project6-WtHjktfX.png",
  sp = "Age-IDmTMCqz.png",
  ap = "Cal-Bgqb5GMx.png",
  up = "Tour-BF9nW1G6.png",
  cp = (e) =>
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
                      children: o.jsx("img", { src: tp, alt: "" }),
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
                      children: o.jsx("img", { src: up, alt: "" }),
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
                              href: "https://github.com/YashSinghal001/Tour-And-Travels",
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
                              href: "https://yashsinghal001.github.io/Tour-And-Travels/",
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
                      children: o.jsx("img", { src: np, alt: "" }),
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
                      children: o.jsx("img", { src: rp, alt: "" }),
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
                      children: o.jsx("img", { src: lp, alt: "" }),
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
                              href: "https://github.com/YashSinghal001/FoodRecipe",
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
                      children: o.jsx("img", { src: ip, alt: "" }),
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
                      children: o.jsx("img", { src: ap, alt: "" }),
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
                      children: o.jsx("img", { src: op, alt: "" }),
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
                      children: o.jsx("img", { src: sp, alt: "" }),
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
  dp = () => {
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
  fp = (e) => {
    const [t, n] = je.useState({ name: "", email: "", message: "", copy: !1 }),
      [r, l] = je.useState({}),
      i = (u) => {
        const { name: d, value: g, type: m, checked: h } = u.target;
        n({ ...t, [d]: m === "checkbox" ? h : g });
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
                  o.jsx("h5", { children: o.jsx(dp, {}) }),
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
  pp = (e) =>
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
  hp = "Me3-4eAKiEoV.jpg",
  mp = (e) => {
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
                      src: hp,
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
  Ks = "qw-CVtJTuzP.png",
  gp = (e) =>
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
                          src: Ks,
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
                          src: Ks,
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
function vp() {
  const [e, t] = je.useState("light"),
    n = () => {
      e === "light"
        ? (t("dark"), (document.body.style.backgroundColor = "#000000"))
        : (t("light"), (document.body.style.backgroundColor = "white"));
    };
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx(Df, { mode: e, toggleMode: n }),
      o.jsx("section", {
        id: "home",
        children: o.jsx(_f, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "about",
        children: o.jsx(mp, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "skills",
        children: o.jsx(qf, { mode: e, toggleMode: n }),
      }),
      o.jsx("section", {
        id: "education",
        children: o.jsx(gp, { mode: e, toggleMode: n }),
      }),
      o.jsxs("section", {
        id: "projects",
        children: [
          o.jsx(ep, { mode: e, toggleMode: n }),
          o.jsx(cp, { mode: e, toggleMode: n }),
        ],
      }),
      o.jsx("section", {
        id: "contact",
        children: o.jsx(fp, { mode: e, toggleMode: n }),
      }),
      o.jsx(pp, { mode: e, toggleMode: n }),
    ],
  });
}
Kl.createRoot(document.getElementById("root")).render(
  o.jsx(wr.StrictMode, { children: o.jsx(vp, {}) })
);