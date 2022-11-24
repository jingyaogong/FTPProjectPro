/** 2.7.6 | MIT Licensed */ ;
! function(d) {
	"use strict";
	var t, h = d.document,
		m = {
			modules: {},
			status: {},
			timeout: 10,
			event: {}
		},
		r = function() {
			this.v = "2.7.6"
		},
		e = d.LAYUI_GLOBAL || {},
		v = (t = h.currentScript ? h.currentScript.src : function() {
			for (var t, e = h.scripts, o = e.length - 1, r = o; 0 < r; r--)
				if ("interactive" === e[r].readyState) {
					t = e[r].src;
					break
				} return t || e[o].src
		}(), m.dir = e.dir || t.substring(0, t.lastIndexOf("/") + 1)),
		g = function(t, e) {
			e = e || "log", d.console && console[e] && console[e]("layui error hint: " + t)
		},
		b = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
		N = m.builtin = {
			lay: "lay",
			layer: "layer",
			laydate: "laydate",
			laypage: "laypage",
			laytpl: "laytpl",
			layedit: "layedit",
			form: "form",
			upload: "ftp.html",
			dropdown: "dropdown",
			transfer: "transfer",
			tree: "tree",
			table: "table",
			element: "element",
			rate: "rate",
			colorpicker: "colorpicker",
			slider: "slider",
			carousel: "carousel",
			flow: "flow",
			util: "util",
			code: "code",
			jquery: "jquery",
			all: "all",
			"layui.all": "layui.all"
		},
		s = (r.prototype.cache = m, r.prototype.define = function(t, r) {
			return "function" == typeof t && (r = t, t = []), this.use(t, function() {
				var o = function(t, e) {
					layui[t] = e, m.status[t] = !0
				};
				return "function" == typeof r && r(function(t, e) {
					o(t, e), m.callback[t] = function() {
						r(o)
					}
				}), this
			}, null, "define"), this
		}, r.prototype.use = function(o, t, e, r) {
			var n = this,
				i = m.dir = m.dir || v,
				a = h.getElementsByTagName("head")[0],
				u = (o = "string" == typeof o ? [o] : "function" == typeof o ? (t = o, ["all"]) : o, d.jQuery &&
					jQuery.fn.on && (n.each(o, function(t, e) {
						"jquery" === e && o.splice(t, 1)
					}), layui.jquery = layui.$ = jQuery), o[0]),
				l = 0;

			function s(t, e) {
				var o = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
				"load" !== t.type && !o.test((t.currentTarget || t.srcElement).readyState) || (m.modules[u] = e, a
					.removeChild(p),
					function r() {
						return ++l > 1e3 * m.timeout / 4 ? g(u + " is not a valid module", "error") : void(m
							.status[u] ? c() : setTimeout(r, 4))
					}())
			}

			function c() {
				e.push(layui[u]), 1 < o.length ? n.use(o.slice(1), t, e, r) : "function" == typeof t && (layui
					.jquery && "function" == typeof layui.jquery && "define" !== r ? layui.jquery(function() {
						t.apply(layui, e)
					}) : t.apply(layui, e))
			}
			if (e = e || [], m.host = m.host || (i.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0],
				0 === o.length || layui["layui.all"] && N[u]) return c(), n;
			var p, y = (y = (N[u] ? i + "modules/" : !/^\{\/\}/.test(n.modules[u]) && m.base || "") + (n.modules[
				u] || u) + ".js").replace(/^\{\/\}/, "");
			return !m.modules[u] && layui[u] && (m.modules[u] = y), m.modules[u] ? function f() {
				return ++l > 1e3 * m.timeout / 4 ? g(u + " is not a valid module", "error") : void("string" ==
					typeof m.modules[u] && m.status[u] ? c() : setTimeout(f, 4))
			}() : ((p = h.createElement("script"))["async"] = !0, p.charset = "utf-8", p.src = y + ((i = !0 ===
				m.version ? m.v || (new Date).getTime() : m.version || "") ? "?v=" + i : ""), a.appendChild(
				p), !p.attachEvent || p.attachEvent.toString && p.attachEvent.toString().indexOf(
				"[native code") < 0 || b ? p.addEventListener("load", function(t) {
				s(t, y)
			}, !1) : p.attachEvent("onreadystatechange", function(t) {
				s(t, y)
			}), m.modules[u] = y), n
		}, r.prototype.disuse = function(t) {
			var o = this;
			return t = o.isArray(t) ? t : [t], o.each(t, function(t, e) {
				m.status[e], delete o[e], delete N[e], delete o.modules[e], delete m.status[e], delete m
					.modules[e]
			}), o
		}, r.prototype.getStyle = function(t, e) {
			t = t.currentStyle || d.getComputedStyle(t, null);
			return t[t.getPropertyValue ? "getPropertyValue" : "getAttribute"](e)
		}, r.prototype.link = function(o, r, t) {
			var n = this,
				e = h.getElementsByTagName("head")[0],
				i = h.createElement("link"),
				t = ((t = "string" == typeof r ? r : t) || o).replace(/\.|\//g, ""),
				a = i.id = "layuicss-" + t,
				u = "creating",
				l = 0;
			return i.rel = "stylesheet", i.href = o + (m.debug ? "?v=" + (new Date).getTime() : ""), i.media =
				"all", h.getElementById(a) || e.appendChild(i), "function" != typeof r || function s(t) {
					var e = h.getElementById(a);
					return ++l > 1e3 * m.timeout / 100 ? g(o + " timeout") : void(1989 === parseInt(n.getStyle(e,
						"width")) ? (t === u && e.removeAttribute("lay-status"), e.getAttribute(
						"lay-status") === u ? setTimeout(s, 100) : r()) : (e.setAttribute("lay-status", u),
						setTimeout(function() {
							s(u)
						}, 100)))
				}(), n
		}, r.prototype.addcss = function(t, e, o) {
			return layui.link(m.dir + "css/" + t, e, o)
		}, m.callback = {}, r.prototype.factory = function(t) {
			if (layui[t]) return "function" == typeof m.callback[t] ? m.callback[t] : null
		}, r.prototype.img = function(t, e, o) {
			var r = new Image;
			if (r.src = t, r.complete) return e(r);
			r.onload = function() {
				r.onload = null, "function" == typeof e && e(r)
			}, r.onerror = function(t) {
				r.onerror = null, "function" == typeof o && o(t)
			}
		}, r.prototype.config = function(t) {
			for (var e in t = t || {}) m[e] = t[e];
			return this
		}, r.prototype.modules = function() {
			var t, e = {};
			for (t in N) e[t] = N[t];
			return e
		}(), r.prototype.extend = function(t) {
			for (var e in t = t || {}) this[e] || this.modules[e] ? g(e + " Module already exists", "error") : this
				.modules[e] = t[e];
			return this
		}, r.prototype.router = r.prototype.hash = function(t) {
			var o = {
				path: [],
				search: {},
				hash: ((t = t || location.hash).match(/[^#](#.*$)/) || [])[1] || ""
			};
			return /^#\//.test(t) && (t = t.replace(/^#\//, ""), o.href = "/" + t, t = t.replace(/([^#])(#.*$)/,
				"$1").split("/") || [], this.each(t, function(t, e) {
				/^\w+=/.test(e) ? (e = e.split("="), o.search[e[0]] = e[1]) : o.path.push(e)
			})), o
		}, r.prototype.url = function(t) {
			var n, e, o = this;
			return {
				pathname: (t ? ((t.match(/\.[^.]+?\/.+/) || [])[0] || "").replace(/^[^\/]+/, "").replace(/\?.+/,
					"") : location.pathname).replace(/^\//, "").split("/"),
				search: (n = {}, e = (t ? ((t.match(/\?.+/) || [])[0] || "").replace(/\#.+/, "") : location.search)
					.replace(/^\?+/, "").split("&"), o.each(e, function(t, e) {
						var o = e.indexOf("="),
							r = o < 0 ? e.substr(0, e.length) : 0 !== o && e.substr(0, o);
						r && (n[r] = 0 < o ? e.substr(o + 1) : null)
					}), n),
				hash: o.router(t ? (t.match(/#.+/) || [])[0] || "/" : location.hash)
			}
		}, r.prototype.data = function(t, e, o) {
			if (t = t || "layui", o = o || localStorage, d.JSON && d.JSON.parse) {
				if (null === e) return delete o[t];
				e = "object" == typeof e ? e : {
					key: e
				};
				try {
					var r = JSON.parse(o[t])
				} catch (n) {
					r = {}
				}
				return "value" in e && (r[e.key] = e.value), e.remove && delete r[e.key], o[t] = JSON.stringify(r),
					e.key ? r[e.key] : r
			}
		}, r.prototype.sessionData = function(t, e) {
			return this.data(t, e, sessionStorage)
		}, r.prototype.device = function(t) {
			var o = navigator.userAgent.toLowerCase(),
				e = function(t) {
					var e = new RegExp(t + "/([^\\s\\_\\-]+)");
					return (t = (o.match(e) || [])[1]) || !1
				},
				r = {
					os: /windows/.test(o) ? "windows" : /linux/.test(o) ? "linux" : /iphone|ipod|ipad|ios/.test(o) ?
						"ios" : /mac/.test(o) ? "mac" : void 0,
					ie: !!(d.ActiveXObject || "ActiveXObject" in d) && ((o.match(/msie\s(\d+)/) || [])[1] || "11"),
					weixin: e("micromessenger")
				};
			return t && !r[t] && (r[t] = e(t)), r.android = /android/.test(o), r.ios = "ios" === r.os, r.mobile = !(
				!r.android && !r.ios), r
		}, r.prototype.hint = function() {
			return {
				error: g
			}
		}, r.prototype._typeof = r.prototype.type = function(t) {
			return null === t ? String(t) : "object" == typeof t || "function" == typeof t ? (e = (e = Object
					.prototype.toString.call(t).match(/\s(.+)\]$/) || [])[1] || "Object", new RegExp(
					"\\b(Function|Array|Date|RegExp|Object|Error|Symbol)\\b").test(e) ? e.toLowerCase() :
				"object") : typeof t;
			var e
		}, r.prototype._isArray = r.prototype.isArray = function(t) {
			var e, o = this.type(t);
			return !(!t || "object" != typeof t || t === d) && (e = "length" in t && t.length, "array" === o ||
				0 === e || "number" == typeof e && 0 < e && e - 1 in t)
		}, r.prototype.each = function(t, o) {
			var e, r = function(t, e) {
				return o.call(e[t], t, e[t])
			};
			if ("function" != typeof o) return this;
			if (this.isArray(t = t || []))
				for (e = 0; e < t.length && !r(e, t); e++);
			else
				for (e in t)
					if (r(e, t)) break;
			return this
		}, r.prototype.sort = function(t, n, e) {
			var o = JSON.parse(JSON.stringify(t || []));
			return "object" !== this.type(t) || n ? "object" != typeof t ? [o] : (o.sort(function(t, e) {
				var o = t[n],
					r = e[n];
				if (!isNaN(t) && !isNaN(e)) return t - e;
				if (!isNaN(t) && isNaN(e)) {
					if (!n || "object" != typeof e) return -1;
					o = t
				} else if (isNaN(t) && !isNaN(e)) {
					if (!n || "object" != typeof t) return 1;
					r = e
				}
				t = [!isNaN(o), !isNaN(r)];
				return t[0] && t[1] ? o && !r && 0 !== r ? 1 : !o && 0 !== o && r ? -1 : o - r : t[0] ||
					t[1] ? t[0] || !t[1] ? -1 : !t[0] || t[1] ? 1 : void 0 : r < o ? 1 : o < r ? -1 : 0
			}), e && o.reverse(), o) : o
		}, r.prototype.stope = function(t) {
			t = t || d.event;
			try {
				t.stopPropagation()
			} catch (e) {
				t.cancelBubble = !0
			}
		}, "LAYUI-EVENT-REMOVE");
	r.prototype.onevent = function(t, e, o) {
		return "string" != typeof t || "function" != typeof o ? this : r.event(t, e, null, o)
	}, r.prototype.event = r.event = function(t, e, o, r) {
		var n = this,
			i = null,
			a = (e || "").match(/\((.*)\)$/) || [],
			t = (t + "." + e).replace(a[0], ""),
			u = a[1] || "",
			l = function(t, e) {
				!1 === (e && e.call(n, o)) && null === i && (i = !1)
			};
		return o === s ? (delete(n.cache.event[t] || {})[u], n) : r ? (m.event[t] = m.event[t] || {}, m.event[t][
			u] = [r], this) : (layui.each(m.event[t], function(t, e) {
			"{*}" === u ? layui.each(e, l) : ("" === t && layui.each(e, l), u && t === u && layui.each(
				e, l))
		}), i)
	}, r.prototype.on = function(t, e, o) {
		return this.onevent.call(this, e, t, o)
	}, r.prototype.off = function(t, e) {
		return this.event.call(this, e, t, s)
	}, d.layui = new r
}(window);
layui.define(function(a) {
	var i = layui.cache;
	layui.config({
		dir: i.dir.replace(/lay\/dest\/$/, "")
	}), a("layui.all", layui.v)
});
! function(l) {
	"use strict";
	var t, f = l.document,
		h = function(t) {
			return new i(t)
		},
		i = function(t) {
			for (var e = 0, n = "object" == typeof t ? [t] : (this.selector = t, f.querySelectorAll(t || null)); e < n
				.length; e++) this.push(n[e])
		};
	(i.prototype = []).constructor = i, h.extend = function() {
			var t, e = 1,
				n = arguments,
				o = function(t, e) {
					for (var n in t = t || ("array" === layui.type(e) ? [] : {}), e) t[n] = e[n] && e[n].constructor ===
						Object ? o(t[n], e[n]) : e[n];
					return t
				};
			for (n[0] = "object" == typeof n[0] ? n[0] : {}, t = n.length; e < t; e++) "object" == typeof n[e] && o(n[
				0], n[e]);
			return n[0]
		}, h.v = "1.0.8", h.ie = (t = navigator.userAgent.toLowerCase(), !!(l.ActiveXObject || "ActiveXObject" in l) &&
			((t.match(/msie\s(\d+)/) || [])[1] || "11")), h.layui = layui || {}, h.getPath = layui.cache.dir, h.stope =
		layui.stope, h.each = function() {
			return layui.each.apply(layui, arguments), this
		}, h.digit = function(t, e) {
			if ("string" != typeof t && "number" != typeof t) return "";
			var n = "";
			e = e || 2;
			for (var o = (t = String(t)).length; o < e; o++) n += "0";
			return t < Math.pow(10, e) ? n + t : t
		}, h.elem = function(t, e) {
			var n = f.createElement(t);
			return h.each(e || {}, function(t, e) {
				n.setAttribute(t, e)
			}), n
		}, h.hasScrollbar = function() {
			return f.body.scrollHeight > (l.innerHeight || f.documentElement.clientHeight)
		}, h.position = function(t, e, n) {
			var o, i, r, c, u, a, s;
			e && (n = n || {}, t !== f && t !== h("body")[0] || (n.clickType = "right"), u = "right" === n.clickType ? {
					left: (u = n.e || l.event || {}).clientX,
					top: u.clientY,
					right: u.clientX,
					bottom: u.clientY
				} : t.getBoundingClientRect(), a = e.offsetWidth, s = e.offsetHeight, o = function(t) {
					return f.body[t = t ? "scrollLeft" : "scrollTop"] | f.documentElement[t]
				}, r = u.left, c = u.bottom, "center" === n.align ? r -= (a - t.offsetWidth) / 2 : "right" === n
				.align && (r = r - a + t.offsetWidth), (r = r + a + 5 > (i = function(t) {
					return f.documentElement[t ? "clientWidth" : "clientHeight"]
				})("width") ? i("width") - a - 5 : r) < 5 && (r = 5), c + s + 5 > i() && (u.top > s + 5 ? c = u
					.top - s - 10 : "right" === n.clickType ? (c = i() - s - 10) < 0 && (c = 0) : c = 5), (a = n
					.position) && (e.style.position = a), e.style.left = r + ("fixed" === a ? 0 : o(1)) + "px", e
				.style.top = c + ("fixed" === a ? 0 : o()) + "px", h.hasScrollbar() || (s = e
				.getBoundingClientRect(), !n.SYSTEM_RELOAD && s.bottom + 5 > i() && (n.SYSTEM_RELOAD = !0,
					setTimeout(function() {
						h.position(t, e, n)
					}, 50))))
		}, h.options = function(t, e) {
			t = h(t), e = e || "lay-options";
			try {
				return new Function("return " + (t.attr(e) || "{}"))()
			} catch (n) {
				return hint.error("parseerror\uff1a" + n, "error"), {}
			}
		}, h.isTopElem = function(n) {
			var t = [f, h("body")[0]],
				o = !1;
			return h.each(t, function(t, e) {
				if (e === n) return o = !0
			}), o
		}, i.addStr = function(n, t) {
			return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), h.each(t, function(t, e) {
				new RegExp("\\b" + e + "\\b").test(n) || (n = n + " " + e)
			}), n.replace(/^\s|\s$/, "")
		}, i.removeStr = function(n, t) {
			return n = n.replace(/\s+/, " "), t = t.replace(/\s+/, " ").split(" "), h.each(t, function(t, e) {
				e = new RegExp("\\b" + e + "\\b");
				e.test(n) && (n = n.replace(e, ""))
			}), n.replace(/\s+/, " ").replace(/^\s|\s$/, "")
		}, i.prototype.find = function(o) {
			var i = this,
				r = 0,
				c = [],
				u = "object" == typeof o;
			return this.each(function(t, e) {
				for (var n = u ? e.contains(o) : e.querySelectorAll(o || null); r < n.length; r++) c.push(n[r]);
				i.shift()
			}), u || (i.selector = (i.selector ? i.selector + " " : "") + o), h.each(c, function(t, e) {
				i.push(e)
			}), i
		}, i.prototype.each = function(t) {
			return h.each.call(this, this, t)
		}, i.prototype.addClass = function(n, o) {
			return this.each(function(t, e) {
				e.className = i[o ? "removeStr" : "addStr"](e.className, n)
			})
		}, i.prototype.removeClass = function(t) {
			return this.addClass(t, !0)
		}, i.prototype.hasClass = function(n) {
			var o = !1;
			return this.each(function(t, e) {
				new RegExp("\\b" + n + "\\b").test(e.className) && (o = !0)
			}), o
		}, i.prototype.css = function(e, o) {
			var t = this,
				i = function(t) {
					return isNaN(t) ? t : t + "px"
				};
			return "string" != typeof e || o !== undefined ? t.each(function(t, n) {
				"object" == typeof e ? h.each(e, function(t, e) {
					n.style[t] = i(e)
				}) : n.style[e] = i(o)
			}) : 0 < t.length ? t[0].style[e] : void 0
		}, i.prototype.width = function(n) {
			var o = this;
			return n !== undefined ? o.each(function(t, e) {
				o.css("width", n)
			}) : 0 < o.length ? o[0].offsetWidth : void 0
		}, i.prototype.height = function(n) {
			var o = this;
			return n !== undefined ? o.each(function(t, e) {
				o.css("height", n)
			}) : 0 < o.length ? o[0].offsetHeight : void 0
		}, i.prototype.attr = function(n, o) {
			var t = this;
			return o !== undefined ? t.each(function(t, e) {
				e.setAttribute(n, o)
			}) : 0 < t.length ? t[0].getAttribute(n) : void 0
		}, i.prototype.removeAttr = function(n) {
			return this.each(function(t, e) {
				e.removeAttribute(n)
			})
		}, i.prototype.html = function(n) {
			var t = this;
			return n !== undefined ? this.each(function(t, e) {
				e.innerHTML = n
			}) : 0 < t.length ? t[0].innerHTML : void 0
		}, i.prototype.val = function(n) {
			var t = this;
			return n !== undefined ? this.each(function(t, e) {
				e.value = n
			}) : 0 < t.length ? t[0].value : void 0
		}, i.prototype.append = function(n) {
			return this.each(function(t, e) {
				"object" == typeof n ? e.appendChild(n) : e.innerHTML = e.innerHTML + n
			})
		}, i.prototype.remove = function(n) {
			return this.each(function(t, e) {
				n ? e.removeChild(n) : e.parentNode.removeChild(e)
			})
		}, i.prototype.on = function(n, o) {
			return this.each(function(t, e) {
				e.attachEvent ? e.attachEvent("on" + n, function(t) {
					t.target = t.srcElement, o.call(e, t)
				}) : e.addEventListener(n, o, !1)
			})
		}, i.prototype.off = function(n, o) {
			return this.each(function(t, e) {
				e.detachEvent ? e.detachEvent("on" + n, o) : e.removeEventListener(n, o, !1)
			})
		}, l.lay = h, l.layui && layui.define && layui.define(function(t) {
			t("lay", h)
		})
}(window, window.document);
layui.define(function(e) {
	"use strict";
	var p = {
			open: "{{",
			close: "}}"
		},
		a = {
			exp: function(e) {
				return new RegExp(e, "g")
			},
			query: function(e, r, n) {
				return l((r || "") + p.open + ["#([\\s\\S])+?", "([^{#}])*?"][e || 0] + p.close + (n || ""))
			},
			escape: function(e) {
				return e === undefined || null === e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e
					.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
					.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
			},
			error: function(e, r) {
				var n = "Laytpl Error: ";
				return "object" == typeof console && console.error(n + e + "\n" + (r || "")), n + e
			}
		},
		l = a.exp,
		r = function(e) {
			this.tpl = e
		},
		n = (r.pt = r.prototype, window.errors = 0, r.pt.parse = function(e, r) {
			var n = e,
				c = l("^" + p.open + "#", ""),
				t = l(p.close + "$", "");
			e = '"use strict";var view = "' + (e = e.replace(/\s+|\r|\t|\n/g, " ").replace(l(p.open + "#"),
					p.open + "# ").replace(l(p.close + "}"), "} " + p.close).replace(/\\/g, "\\\\")
				.replace(l(p.open + "!(.+?)!" + p.close), function(e) {
					return e = e.replace(l("^" + p.open + "!"), "").replace(l("!" + p.close), "")
						.replace(l(p.open + "|" + p.close), function(e) {
							return e.replace(/(.)/g, "\\$1")
						})
				}).replace(/(?="|')/g, "\\").replace(a.query(), function(e) {
					return '";' + (e = e.replace(c, "").replace(t, "")).replace(/\\(.)/g, "$1") +
						';view+="'
				}).replace(a.query(1), function(e) {
					var r = '"+laytpl.escape(';
					return e.replace(/\s/g, "") === p.open + p.close ? "" : (e = e.replace(l(p
							.open + "|" + p.close), ""), /^=/.test(e) ? e = e.replace(/^=/,
						"") : /^-/.test(e) && (e = e.replace(/^-/, ""), r = '"+('), r + e
						.replace(/\\(.)/g, "$1") + ')+"')
				})) + '";return view;';
			try {
				return this.cache = e = new Function("d, laytpl", e), e(r, a)
			} catch (o) {
				return delete this.cache, a.error(o, n)
			}
		}, r.pt.render = function(e, r) {
			var n = this;
			return e ? (e = n.cache ? n.cache(e, a) : n.parse(n.tpl, e), r ? void r(e) : e) : a.error(
				"no data")
		}, function(e) {
			return "string" != typeof e ? a.error("Template not found") : new r(e)
		});
	n.config = function(e) {
		for (var r in e = e || {}) p[r] = e[r]
	}, n.v = "1.2.0", e("laytpl", n)
});
layui.define(function(e) {
	"use strict";
	var n = document,
		u = "getElementById",
		c = "getElementsByTagName",
		a = "layui-disabled",
		t = function(e) {
			var a = this;
			a.config = e || {}, a.config.index = ++o.index, a.render(!0)
		},
		o = (t.prototype.type = function() {
			var e = this.config;
			if ("object" == typeof e.elem) return e.elem.length === undefined ? 2 : 3
		}, t.prototype.view = function() {
			var t, i, r = this.config,
				n = r.groups = "groups" in r ? Number(r.groups) || 0 : 5,
				u = (r.layout = "object" == typeof r.layout ? r.layout : ["prev", "page", "next"], r.count =
					Number(r.count) || 0, r.curr = Number(r.curr) || 1, r.limits = "object" == typeof r
					.limits ? r.limits : [10, 20, 30, 40, 50], r.limit = Number(r.limit) || 10, r.pages =
					Math.ceil(r.count / r.limit) || 1, r.curr > r.pages ? r.curr = r.pages : r.curr < 1 && (
						r.curr = 1), n < 0 ? n = 1 : n > r.pages && (n = r.pages), r.prev = "prev" in r ? r
					.prev : "&#x4E0A;&#x4E00;&#x9875;", r.next = "next" in r ? r.next :
					"&#x4E0B;&#x4E00;&#x9875;", r.pages > n ? Math.ceil((r.curr + (1 < n ? 1 : 0)) / (0 <
						n ? n : 1)) : 1),
				s = {
					prev: r.prev ? '<a href="javascript:;" class="layui-laypage-prev' + (1 == r.curr ? " " +
						a : "") + '" data-page="' + (r.curr - 1) + '">' + r.prev + "</a>" : "",
					page: function() {
						var e = [];
						if (r.count < 1) return "";
						1 < u && !1 !== r.first && 0 !== n && e.push(
							'<a href="javascript:;" class="layui-laypage-first" data-page="1"  title="&#x9996;&#x9875;">' +
							(r.first || 1) + "</a>");
						var a = Math.floor((n - 1) / 2),
							t = 1 < u ? r.curr - a : 1,
							i = 1 < u ? (a = r.curr + (n - a - 1)) > r.pages ? r.pages : a : n;
						for (i - t < n - 1 && (t = i - n + 1), !1 !== r.first && 2 < t && e.push(
								'<span class="layui-laypage-spr">&#x2026;</span>'); t <= i; t++) t === r
							.curr ? e.push(
								'<span class="layui-laypage-curr"><em class="layui-laypage-em" ' + (/^#/
									.test(r.theme) ? 'style="background-color:' + r.theme + ';"' : "") +
								"></em><em>" + t + "</em></span>") : e.push(
								'<a href="javascript:;" data-page="' + t + '">' + t + "</a>");
						return r.pages > n && r.pages > i && !1 !== r.last && (i + 1 < r.pages && e
							.push('<span class="layui-laypage-spr">&#x2026;</span>'), 0 !== n && e
							.push(
								'<a href="javascript:;" class="layui-laypage-last" title="&#x5C3E;&#x9875;"  data-page="' +
								r.pages + '">' + (r.last || r.pages) + "</a>")), e.join("")
					}(),
					next: r.next ? '<a href="javascript:;" class="layui-laypage-next' + (r.curr == r.pages ?
						" " + a : "") + '" data-page="' + (r.curr + 1) + '">' + r.next + "</a>" : "",
					count: '<span class="layui-laypage-count">\u5171 ' + r.count + " \u6761</span>",
					limit: (t = ['<span class="layui-laypage-limits"><select lay-ignore>'], layui.each(r
						.limits,
						function(e, a) {
							t.push('<option value="' + a + '"' + (a === r.limit ? "selected" : "") +
								">" + a + " \u6761/\u9875</option>")
						}), t.join("") + "</select></span>"),
					refresh: ['<a href="javascript:;" data-page="' + r.curr +
						'" class="layui-laypage-refresh">',
						'<i class="layui-icon layui-icon-refresh"></i>', "</a>"
					].join(""),
					skip: ['<span class="layui-laypage-skip">&#x5230;&#x7B2C;',
						'<input type="text" min="1" value="' + r.curr + '" class="layui-input">',
						'&#x9875;<button type="button" class="layui-laypage-btn">&#x786e;&#x5b9a;</button>',
						"</span>"
					].join("")
				};
			return ['<div class="layui-box layui-laypage layui-laypage-' + (r.theme ? /^#/.test(r.theme) ?
				"molv" : r.theme : "default") + '" id="layui-laypage-' + r.index + '">', (i = [],
				layui.each(r.layout, function(e, a) {
					s[a] && i.push(s[a])
				}), i.join("")), "</div>"].join("")
		}, t.prototype.jump = function(e, a) {
			if (e) {
				var t = this,
					i = t.config,
					r = e.children,
					n = e[c]("button")[0],
					u = e[c]("input")[0],
					e = e[c]("select")[0],
					s = function() {
						var e = Number(u.value.replace(/\s|\D/g, ""));
						e && (i.curr = e, t.render())
					};
				if (a) return s();
				for (var l = 0, p = r.length; l < p; l++) "a" === r[l].nodeName.toLowerCase() && o.on(r[l],
					"click",
					function() {
						var e = Number(this.getAttribute("data-page"));
						e < 1 || e > i.pages || (i.curr = e, t.render())
					});
				e && o.on(e, "change", function() {
					var e = this.value;
					i.curr * e > i.count && (i.curr = Math.ceil(i.count / e)), i.limit = e, t
						.render()
				}), n && o.on(n, "click", function() {
					s()
				})
			}
		}, t.prototype.skip = function(t) {
			var i, e;
			t && (i = this, (e = t[c]("input")[0]) && o.on(e, "keyup", function(e) {
				var a = this.value,
					e = e.keyCode;
				/^(37|38|39|40)$/.test(e) || (/\D/.test(a) && (this.value = a.replace(/\D/,
					"")), 13 === e && i.jump(t, !0))
			}))
		}, t.prototype.render = function(e) {
			var a = this,
				t = a.config,
				i = a.type(),
				r = a.view(),
				i = (2 === i ? t.elem && (t.elem.innerHTML = r) : 3 === i ? t.elem.html(r) : n[u](t.elem) &&
					(n[u](t.elem).innerHTML = r), t.jump && t.jump(t, e), n[u]("layui-laypage-" + t.index));
			a.jump(i), t.hash && !e && (location.hash = "!" + t.hash + "=" + t.curr), a.skip(i)
		}, {
			render: function(e) {
				return new t(e).index
			},
			index: layui.laypage ? layui.laypage.index + 1e4 : 0,
			on: function(a, e, t) {
				return a.attachEvent ? a.attachEvent("on" + e, function(e) {
					e.target = e.srcElement, t.call(a, e)
				}) : a.addEventListener(e, t, !1), this
			}
		});
	e("laypage", o)
});
! function(i, r) {
	"use strict";
	var n = i.layui && layui.define,
		l = {
			getPath: i.lay && lay.getPath ? lay.getPath : "",
			link: function(e, t, a) {
				u.path && i.lay && lay.layui && lay.layui.link(u.path + e, t, a)
			}
		},
		e = i.LAYUI_GLOBAL || {},
		u = {
			v: "5.3.1",
			config: {
				weekStart: 0
			},
			index: i.laydate && i.laydate.v ? 1e5 : 0,
			path: e.laydate_dir || l.getPath,
			set: function(e) {
				var t = this;
				return t.config = lay.extend({}, t.config, e), t
			},
			ready: function(e) {
				var t = "laydate",
					a = (n ? "modules/laydate/" : "theme/") + "default/laydate.css?v=" + u.v;
				return n ? layui.addcss(a, e, t) : l.link(a, e, t), this
			}
		},
		s = function() {
			var t = this,
				e = t.config.id;
			return {
				hint: function(e) {
					t.hint.call(t, e)
				},
				config: (s.that[e] = t).config
			}
		},
		a = "laydate",
		w = "layui-this",
		x = "laydate-disabled",
		h = [100, 2e5],
		p = "layui-laydate-static",
		M = "layui-laydate-list",
		o = "layui-laydate-hint",
		E = ".laydate-btns-confirm",
		C = "laydate-time-text",
		k = "laydate-btns-time",
		f = "layui-laydate-preview",
		g = function(e) {
			var t = this,
				a = (t.index = ++u.index, t.config = lay.extend({}, t.config, u.config, e), lay(e.elem || t.config
					.elem));
			if (1 < a.length) return layui.each(a, function() {
				u.render(lay.extend({}, t.config, {
					elem: this
				}))
			}), t;
			(e = t.config).id = "id" in e ? e.id : t.index, u.ready(function() {
				t.init()
			})
		},
		y = "yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";
	s.formatArr = function(e) {
		return (e || "").match(new RegExp(y + "|.", "g")) || []
	}, g.isLeapYear = function(e) {
		return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
	}, g.prototype.config = {
		type: "date",
		range: !1,
		format: "yyyy-MM-dd",
		value: null,
		isInitValue: !0,
		min: "1900-1-1",
		max: "2099-12-31",
		trigger: "click",
		show: !1,
		showBottom: !0,
		isPreview: !0,
		btns: ["clear", "now", "confirm"],
		lang: "cn",
		theme: "default",
		position: null,
		calendar: !1,
		mark: {},
		holidays: null,
		zIndex: null,
		done: null,
		change: null
	}, g.prototype.lang = function() {
		var e = {
			cn: {
				weeks: ["\u65e5", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d"],
				time: ["\u65f6", "\u5206", "\u79d2"],
				timeTips: "\u9009\u62e9\u65f6\u95f4",
				startTime: "\u5f00\u59cb\u65f6\u95f4",
				endTime: "\u7ed3\u675f\u65f6\u95f4",
				dateTips: "\u8fd4\u56de\u65e5\u671f",
				month: ["\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b",
					"\u4e5d", "\u5341", "\u5341\u4e00", "\u5341\u4e8c"
				],
				tools: {
					confirm: "\u786e\u5b9a",
					clear: "\u6e05\u7a7a",
					now: "\u73b0\u5728"
				},
				timeout: "\u7ed3\u675f\u65f6\u95f4\u4e0d\u80fd\u65e9\u4e8e\u5f00\u59cb\u65f6\u95f4<br>\u8bf7\u91cd\u65b0\u9009\u62e9",
				invalidDate: "\u4e0d\u5728\u6709\u6548\u65e5\u671f\u6216\u65f6\u95f4\u8303\u56f4\u5185",
				formatError: [
					"\u65e5\u671f\u683c\u5f0f\u4e0d\u5408\u6cd5<br>\u5fc5\u987b\u9075\u5faa\u4e0b\u8ff0\u683c\u5f0f\uff1a<br>",
					"<br>\u5df2\u4e3a\u4f60\u91cd\u7f6e"
				],
				preview: "\u5f53\u524d\u9009\u4e2d\u7684\u7ed3\u679c"
			},
			en: {
				weeks: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				time: ["Hours", "Minutes", "Seconds"],
				timeTips: "Select Time",
				startTime: "Start Time",
				endTime: "End Time",
				dateTips: "Select Date",
				month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				tools: {
					confirm: "Confirm",
					clear: "Clear",
					now: "Now"
				},
				timeout: "End time cannot be less than start Time<br>Please re-select",
				invalidDate: "Invalid date",
				formatError: ["The date format error<br>Must be followed\uff1a<br>", "<br>It has been reset"],
				preview: "The selected result"
			}
		};
		return e[this.config.lang] || e.cn
	}, g.prototype.init = function() {
		var r = this,
			o = r.config,
			e = "static" === o.position,
			t = {
				year: "yyyy",
				month: "yyyy-MM",
				date: "yyyy-MM-dd",
				time: "HH:mm:ss",
				datetime: "yyyy-MM-dd HH:mm:ss"
			};
		o.elem = lay(o.elem), o.eventElem = lay(o.eventElem), o.elem[0] && (r.rangeStr = o.range ? "string" ==
			typeof o.range ? o.range : "-" : "", "array" === layui.type(o.range) && (r.rangeElem = [lay(o.range[
				0]), lay(o.range[1])]), t[o.type] || (i.console && console.error && console.error(
				"laydate type error:'" + o.type + "' is not supported"), o.type = "date"), o.format === t
			.date && (o.format = t[o.type] || t.date), r.format = s.formatArr(o.format), o.weekStart && !
			/^[0-6]$/.test(o.weekStart) && (t = r.lang(), o.weekStart = t.weeks.indexOf(o.weekStart), -1 === o
				.weekStart && (o.weekStart = 0)), r.EXP_IF = "", r.EXP_SPLIT = "", lay.each(r.format, function(
				e, t) {
				e = new RegExp(y).test(t) ? "\\d{" + (new RegExp(y).test(r.format[0 === e ? e + 1 : e -
						1] || "") ? /^yyyy|y$/.test(t) ? 4 : t.length : /^yyyy$/.test(t) ? "1,4" : /^y$/
					.test(t) ? "1,308" : "1,2") + "}" : "\\" + t;
				r.EXP_IF = r.EXP_IF + e, r.EXP_SPLIT = r.EXP_SPLIT + "(" + e + ")"
			}), r.EXP_IF_ONE = new RegExp("^" + r.EXP_IF + "$"), r.EXP_IF = new RegExp("^" + (o.range ? r
				.EXP_IF + "\\s\\" + r.rangeStr + "\\s" + r.EXP_IF : r.EXP_IF) + "$"), r.EXP_SPLIT = new RegExp(
				"^" + r.EXP_SPLIT + "$", ""), r.isInput(o.elem[0]) || "focus" === o.trigger && (o.trigger =
				"click"), o.elem.attr("lay-key") || (o.elem.attr("lay-key", r.index), o.eventElem.attr(
				"lay-key", r.index)), o.mark = lay.extend({}, o.calendar && "cn" === o.lang ? {
				"0-1-1": "\u5143\u65e6",
				"0-2-14": "\u60c5\u4eba",
				"0-3-8": "\u5987\u5973",
				"0-3-12": "\u690d\u6811",
				"0-4-1": "\u611a\u4eba",
				"0-5-1": "\u52b3\u52a8",
				"0-5-4": "\u9752\u5e74",
				"0-6-1": "\u513f\u7ae5",
				"0-9-10": "\u6559\u5e08",
				"0-10-1": "\u56fd\u5e86",
				"0-12-25": "\u5723\u8bde"
			} : {}, o.mark), lay.each(["min", "max"], function(e, t) {
				var a, n, i = [],
					l = [];
				l = "number" == typeof o[t] ? (n = o[t], a = new Date, a = r.newDate({
					year: a.getFullYear(),
					month: a.getMonth(),
					date: a.getDate(),
					hours: "23",
					minutes: "59",
					seconds: "59"
				}).getTime(), i = [(n = new Date(n ? n < 864e5 ? a + 864e5 * n : n : a))
					.getFullYear(), n.getMonth() + 1, n.getDate()
				], [n.getHours(), n.getMinutes(), n.getSeconds()]) : (i = (o[t].match(/\d+-\d+-\d+/) ||
					[""])[0].split("-"), (o[t].match(/\d+:\d+:\d+/) || [""])[0].split(":")), o[t] = {
					year: 0 | i[0] || (new Date).getFullYear(),
					month: i[1] ? (0 | i[1]) - 1 : (new Date).getMonth(),
					date: 0 | i[2] || (new Date).getDate(),
					hours: 0 | l[0],
					minutes: 0 | l[1],
					seconds: 0 | l[2]
				}
			}), r.elemID = "layui-laydate" + o.elem.attr("lay-key"), (o.show || e) && r.render(), e || r
			.events(), o.value && o.isInitValue && ("date" === layui.type(o.value) ? r.setValue(r.parse(0, r
				.systemDate(o.value))) : r.setValue(o.value)))
	}, g.prototype.render = function() {
		var n, e, t = this,
			o = t.config,
			s = t.lang(),
			i = "static" === o.position,
			a = t.elem = lay.elem("div", {
				id: t.elemID,
				"class": ["layui-laydate", o.range ? " layui-laydate-range" : "", i ? " " + p : "", o.theme &&
					"default" !== o.theme && !/^#/.test(o.theme) ? " laydate-theme-" + o.theme : ""
				].join("")
			}),
			y = t.elemMain = [],
			d = t.elemHeader = [],
			m = t.elemCont = [],
			c = t.table = [],
			l = t.footer = lay.elem("div", {
				"class": "layui-laydate-footer"
			});
		o.zIndex && (a.style.zIndex = o.zIndex), lay.each(new Array(2), function(e) {
				if (!o.range && 0 < e) return !0;
				var a = lay.elem("div", {
						"class": "layui-laydate-header"
					}),
					t = [((t = lay.elem("i", {
						"class": "layui-icon laydate-icon laydate-prev-y"
					})).innerHTML = "&#xe65a;", t), ((t = lay.elem("i", {
						"class": "layui-icon laydate-icon laydate-prev-m"
					})).innerHTML = "&#xe603;", t), (t = lay.elem("div", {
							"class": "laydate-set-ym"
						}), n = lay.elem("span"), l = lay.elem("span"), t.appendChild(n), t.appendChild(l),
						t), ((n = lay.elem("i", {
						"class": "layui-icon laydate-icon laydate-next-m"
					})).innerHTML = "&#xe602;", n), ((l = lay.elem("i", {
						"class": "layui-icon laydate-icon laydate-next-y"
					})).innerHTML = "&#xe65b;", l)],
					n = lay.elem("div", {
						"class": "layui-laydate-content"
					}),
					i = lay.elem("table"),
					l = lay.elem("thead"),
					r = lay.elem("tr");
				lay.each(t, function(e, t) {
					a.appendChild(t)
				}), l.appendChild(r), lay.each(new Array(6), function(a) {
					var n = i.insertRow(0);
					lay.each(new Array(7), function(e) {
						var t;
						0 === a && ((t = lay.elem("th")).innerHTML = s.weeks[(e + o.weekStart) %
							7], r.appendChild(t)), n.insertCell(e)
					})
				}), i.insertBefore(l, i.children[0]), n.appendChild(i), y[e] = lay.elem("div", {
					"class": "layui-laydate-main laydate-main-list-" + e
				}), y[e].appendChild(a), y[e].appendChild(n), d.push(t), m.push(n), c.push(i)
			}), lay(l).html((e = [], n = [], "datetime" === o.type && e.push('<span lay-type="datetime" class="' +
				k + '">' + s.timeTips + "</span>"), !o.range && "datetime" === o.type || e.push(
				'<span class="' + f + '" title="' + s.preview + '"></span>'), lay.each(o.btns, function(e,
				t) {
				var a = s.tools[t] || "btn";
				o.range && "now" === t || (i && "clear" === t && (a = "cn" === o.lang ? "\u91cd\u7f6e" :
					"Reset"), n.push('<span lay-type="' + t + '" class="laydate-btns-' + t +
					'">' + a + "</span>"))
			}), e.push('<div class="laydate-footer-btns">' + n.join("") + "</div>"), e.join(""))), lay.each(y,
				function(e, t) {
					a.appendChild(t)
				}), o.showBottom && a.appendChild(l), /^#/.test(o.theme) && (e = lay.elem("style"), l = [
				"#{{id}} .layui-laydate-header{background-color:{{theme}};}",
				"#{{id}} .layui-this{background-color:{{theme}} !important;}"
			].join("").replace(/{{id}}/g, t.elemID).replace(/{{theme}}/g, o.theme), "styleSheet" in e ? (e
				.setAttribute("type", "text/css"), e.styleSheet.cssText = l) : e.innerHTML = l, lay(a).addClass(
				"laydate-theme-molv"), a.appendChild(e)), t.remove(g.thisElemDate), u.thisId = o.id, i ? o.elem
			.append(a) : (r.body.appendChild(a), t.position()), t.checkDate().calendar(null, 0, "init"), t
			.changeEvent(), g.thisElemDate = t.elemID, "function" == typeof o.ready && o.ready(lay.extend({}, o
				.dateTime, {
					month: o.dateTime.month + 1
				})), t.preview()
	}, g.prototype.remove = function(e) {
		var t = this,
			a = t.config,
			n = lay("#" + (e || t.elemID));
		return n[0] && (n.hasClass(p) || t.checkDate(function() {
			n.remove(), delete u.thisId, "function" == typeof a.close && a.close(t)
		})), t
	}, g.prototype.position = function() {
		var e = this.config;
		return lay.position(this.bindElem || e.elem[0], this.elem, {
			position: e.position
		}), this
	}, g.prototype.hint = function(e) {
		var t = this,
			a = (t.config, lay.elem("div", {
				"class": o
			}));
		t.elem && (a.innerHTML = e || "", lay(t.elem).find("." + o).remove(), t.elem.appendChild(a), clearTimeout(t
			.hinTimer), t.hinTimer = setTimeout(function() {
			lay(t.elem).find("." + o).remove()
		}, 3e3))
	}, g.prototype.getAsYM = function(e, t, a) {
		return a ? t-- : t++, t < 0 && (t = 11, e--), 11 < t && (t = 0, e++), [e, t]
	}, g.prototype.systemDate = function(e) {
		var t = e || new Date;
		return {
			year: t.getFullYear(),
			month: t.getMonth(),
			date: t.getDate(),
			hours: e ? e.getHours() : 0,
			minutes: e ? e.getMinutes() : 0,
			seconds: e ? e.getSeconds() : 0
		}
	}, g.prototype.checkDate = function(e) {
		var t, o, s = this,
			y = (new Date, s.config),
			a = s.lang(),
			n = y.dateTime = y.dateTime || s.systemDate(),
			i = s.bindElem || y.elem[0],
			l = (s.isInput(i), function() {
				if (s.rangeElem) {
					var e = [s.rangeElem[0].val(), s.rangeElem[1].val()];
					if (e[0] && e[1]) return e.join(" " + s.rangeStr + " ")
				}
				return s.isInput(i) ? i.value : "static" === y.position ? "" : lay(i).attr("lay-date")
			}()),
			d = function(e) {
				e.year > h[1] && (e.year = h[1], o = !0), 11 < e.month && (e.month = 11, o = !0), 59 < e.seconds &&
					(e.seconds = 0, e.minutes++, o = !0), 59 < e.minutes && (e.minutes = 0, e.hours++, o = !0), 23 <
					e.hours && (e.hours = 0, o = !0), t = u.getEndDate(e.month + 1, e.year), e.date > t && (e.date =
						t, o = !0)
			},
			r = function(n, i, l) {
				var r = ["startTime", "endTime"];
				i = (i.match(s.EXP_SPLIT) || []).slice(1), l = l || 0, y.range && (s[r[l]] = s[r[l]] || {}), lay
					.each(s.format, function(e, t) {
						var a = parseFloat(i[e]);
						i[e].length < t.length && (o = !0), /yyyy|y/.test(t) ? (a < h[0] && (a = h[0], o = !0),
								n.year = a) : /MM|M/.test(t) ? (a < 1 && (a = 1, o = !0), n.month = a - 1) :
							/dd|d/.test(t) ? (a < 1 && (a = 1, o = !0), n.date = a) : /HH|H/.test(t) ? (a < 0 &&
								(o = !(a = 0)), 23 < a && (a = 23, o = !0), n.hours = a, y.range && (s[r[l]]
									.hours = a)) : /mm|m/.test(t) ? (a < 0 && (o = !(a = 0)), 59 < a && (a = 59,
								o = !0), n.minutes = a, y.range && (s[r[l]].minutes = a)) : /ss|s/.test(t) && (
								a < 0 && (o = !(a = 0)), 59 < a && (a = 59, o = !0), n.seconds = a, y.range && (
									s[r[l]].seconds = a))
					}), d(n)
			};
		if ("limit" === e) return d(n), s;
		"string" == typeof(l = l || y.value) && (l = l.replace(/\s+/g, " ").replace(/^\s|\s$/g, ""));
		var m, c = function() {
			var e, t, a;
			y.range && (s.endDate = s.endDate || lay.extend({}, y.dateTime, (e = {}, t = y.dateTime, a = s
				.getAsYM(t.year, t.month), "year" === y.type ? e.year = t.year + 1 : "time" !== y
				.type && (e.year = a[0], e.month = a[1]), "datetime" !== y.type && "time" !== y
				.type || (e.hours = 23, e.minutes = e.seconds = 59), e)))
		};
		return c(), "string" == typeof l && l ? s.EXP_IF.test(l) ? y.range ? (l = l.split(" " + s.rangeStr + " "),
				lay.each([y.dateTime, s.endDate], function(e, t) {
					r(t, l[e], e)
				})) : r(n, l) : (s.hint(a.formatError[0] + (y.range ? y.format + " " + s.rangeStr + " " + y.format :
				y.format) + a.formatError[1]), o = !0) : l && "date" === layui.type(l) ? y.dateTime = s.systemDate(
				l) : (y.dateTime = s.systemDate(), delete s.startTime, delete s.endDate, c(), delete s.endTime), s
			.rangeElem && (a = [s.rangeElem[0].val(), s.rangeElem[1].val()], m = [y.dateTime, s.endDate], lay.each(
				a,
				function(e, t) {
					s.EXP_IF_ONE.test(t) && r(m[e], t, e)
				})), d(n), y.range && d(s.endDate), o && l && s.setValue(!y.range || s.endDate ? s.parse() : ""), s
			.getDateTime(n) > s.getDateTime(y.max) ? n = y.dateTime = lay.extend({}, y.max) : s.getDateTime(n) < s
			.getDateTime(y.min) && (n = y.dateTime = lay.extend({}, y.min)), y.range && ((s.getDateTime(s.endDate) <
				s.getDateTime(y.min) || s.getDateTime(s.endDate) > s.getDateTime(y.max)) && (s.endDate = lay
				.extend({}, y.max)), s.startTime = {
				hours: y.dateTime.hours,
				minutes: y.dateTime.minutes,
				seconds: y.dateTime.seconds
			}, s.endTime = {
				hours: s.endDate.hours,
				minutes: s.endDate.minutes,
				seconds: s.endDate.seconds
			}), e && e(), s
	}, g.prototype.mark = function(e, a) {
		var n, t = this.config;
		return lay.each(t.mark, function(e, t) {
			e = e.split("-");
			e[0] != a[0] && 0 != e[0] || e[1] != a[1] && 0 != e[1] || e[2] != a[2] || (n = t || a[2])
		}), n && e.html('<span class="laydate-day-mark">' + n + "</span>"), this
	}, g.prototype.holidays = function(n, i) {
		var e = this.config,
			l = ["", "work"];
		return "array" !== layui.type(e.holidays) || lay.each(e.holidays, function(a, e) {
			lay.each(e, function(e, t) {
				t === n.attr("lay-ymd") && n.html('<span class="laydate-day-holidays"' + (l[a] ?
					'type="' + l[a] + '"' : "") + ">" + i[2] + "</span>")
			})
		}), this
	}, g.prototype.limit = function(e, t, a, i) {
		var l = this,
			n = l.config,
			r = {},
			a = (i ? 0 : 41) < a ? l.endDate : n.dateTime,
			a = lay.extend({}, a, t || {});
		return lay.each({
			now: a,
			min: n.min,
			max: n.max
		}, function(e, a) {
			var n;
			r[e] = l.newDate(lay.extend({
				year: a.year,
				month: a.month,
				date: a.date
			}, (n = {}, lay.each(i, function(e, t) {
				n[t] = a[t]
			}), n))).getTime()
		}), t = r.now < r.min || r.now > r.max, e && e[t ? "addClass" : "removeClass"](x), t
	}, g.prototype.thisDateTime = function(e) {
		var t = this.config;
		return e ? this.endDate : t.dateTime
	}, g.prototype.calendar = function(e, t, a) {
		var i, l, r, o = this,
			n = o.config,
			t = t ? 1 : 0,
			s = e || o.thisDateTime(t),
			y = new Date,
			d = o.lang(),
			m = "date" !== n.type && "datetime" !== n.type,
			c = lay(o.table[t]).find("td"),
			t = lay(o.elemHeader[t][2]).find("span");
		return s.year < h[0] && (s.year = h[0], o.hint(d.invalidDate)), s.year > h[1] && (s.year = h[1], o.hint(d
				.invalidDate)), o.firstDate || (o.firstDate = lay.extend({}, s)), y.setFullYear(s.year, s.month, 1),
			i = (y.getDay() + (7 - n.weekStart)) % 7, l = u.getEndDate(s.month || 12, s.year), r = u.getEndDate(s
				.month + 1, s.year), lay.each(c, function(e, t) {
				var a = [s.year, s.month],
					n = 0;
				(t = lay(t)).removeAttr("class"), e < i ? (n = l - i + e, t.addClass("laydate-day-prev"), a = o
						.getAsYM(s.year, s.month, "sub")) : i <= e && e < r + i ? (n = e - i) + 1 === s.date &&
					t.addClass(w) : (n = e - r - i, t.addClass("laydate-day-next"), a = o.getAsYM(s.year, s
						.month)), a[1]++, a[2] = n + 1, t.attr("lay-ymd", a.join("-")).html(a[2]), o.mark(t, a)
					.holidays(t, a).limit(t, {
						year: a[0],
						month: a[1] - 1,
						date: a[2]
					}, e)
			}), lay(t[0]).attr("lay-ym", s.year + "-" + (s.month + 1)), lay(t[1]).attr("lay-ym", s.year + "-" + (s
				.month + 1)), "cn" === n.lang ? (lay(t[0]).attr("lay-type", "year").html(s.year + " \u5e74"), lay(t[
				1]).attr("lay-type", "month").html(s.month + 1 + " \u6708")) : (lay(t[0]).attr("lay-type", "month")
				.html(d.month[s.month]), lay(t[1]).attr("lay-type", "year").html(s.year)), m && (n.range ? e && (o
				.listYM = [
					[n.dateTime.year, n.dateTime.month + 1],
					[o.endDate.year, o.endDate.month + 1]
				], o.list(n.type, 0).list(n.type, 1), "time" === n.type ? o.setBtnStatus("\u65f6\u95f4", lay
					.extend({}, o.systemDate(), o.startTime), lay.extend({}, o.systemDate(), o.endTime)) : o
				.setBtnStatus(!0)) : (o.listYM = [
				[s.year, s.month + 1]
			], o.list(n.type, 0))), n.range && "init" === a && !e && o.calendar(o.endDate, 1), n.range || o.limit(
				lay(o.footer).find(E), null, 0, ["hours", "minutes", "seconds"]), o.setBtnStatus(), o
	}, g.prototype.list = function(t, n) {
		var i, l, e, r, o = this,
			s = o.config,
			y = s.dateTime,
			d = o.lang(),
			a = s.range && "date" !== s.type && "datetime" !== s.type,
			m = lay.elem("ul", {
				"class": M + " " + {
					year: "laydate-year-list",
					month: "laydate-month-list",
					time: "laydate-time-list"
				} [t]
			}),
			c = o.elemHeader[n],
			u = lay(c[2]).find("span"),
			h = o.elemCont[n || 0],
			p = lay(h).find("." + M)[0],
			f = "cn" === s.lang,
			g = f ? "\u5e74" : "",
			v = o.listYM[n] || {},
			T = ["hours", "minutes", "seconds"],
			D = ["startTime", "endTime"][n];
		return v[0] < 1 && (v[0] = 1), "year" === t ? (e = i = v[0] - 7, i < 1 && (e = i = 1), lay.each(new Array(
				15), function(e) {
				var t = lay.elem("li", {
						"lay-ym": i
					}),
					a = {
						year: i,
						month: 0,
						date: 1
					};
				i == v[0] && lay(t).addClass(w), t.innerHTML = i + g, m.appendChild(t), o.limit(lay(t), a,
					n), i++
			}), lay(u[f ? 0 : 1]).attr("lay-ym", i - 8 + "-" + v[1]).html(e + g + " - " + (i - 1) + g)) :
			"month" === t ? (lay.each(new Array(12), function(e) {
				var t = lay.elem("li", {
						"lay-ym": e
					}),
					a = {
						year: v[0],
						month: e,
						date: 1
					};
				e + 1 == v[1] && lay(t).addClass(w), t.innerHTML = d.month[e] + (f ? "\u6708" : ""), m
					.appendChild(t), o.limit(lay(t), a, n)
			}), lay(u[f ? 0 : 1]).attr("lay-ym", v[0] + "-" + v[1]).html(v[0] + g)) : "time" === t && (l =
			function() {
				lay(m).find("ol").each(function(a, e) {
					lay(e).find("li").each(function(e, t) {
						o.limit(lay(t), [{
							hours: e
						}, {
							hours: o[D].hours,
							minutes: e
						}, {
							hours: o[D].hours,
							minutes: o[D].minutes,
							seconds: e
						}][a], n, [
							["hours"],
							["hours", "minutes"],
							["hours", "minutes", "seconds"]
						][a])
					})
				}), s.range || o.limit(lay(o.footer).find(E), o[D], 0, ["hours", "minutes", "seconds"])
			}, s.range ? o[D] || (o[D] = "startTime" === D ? y : o.endDate) : o[D] = y, lay.each([24, 60, 60],
				function(t, e) {
					var a = lay.elem("li"),
						n = ["<p>" + d.time[t] + "</p><ol>"];
					lay.each(new Array(e), function(e) {
						n.push("<li" + (o[D][T[t]] === e ? ' class="' + w + '"' : "") + ">" + lay.digit(
							e, 2) + "</li>")
					}), a.innerHTML = n.join("") + "</ol>", m.appendChild(a)
				}), l()), p && h.removeChild(p), h.appendChild(m), "year" === t || "month" === t ? (lay(o.elemMain[
				n]).addClass("laydate-ym-show"), lay(m).find("li").on("click", function() {
				var e = 0 | lay(this).attr("lay-ym");
				lay(this).hasClass(x) || (0 === n ? (y[t] = e, o.limit(lay(o.footer).find(E), null, 0)) : o
					.endDate[t] = e, "year" === s.type || "month" === s.type ? (lay(m).find("." + w)
						.removeClass(w), lay(this).addClass(w), "month" === s.type && "year" === t && (o
							.listYM[n][0] = e, a && ((n ? o.endDate : y).year = e), o.list("month", n))
						) : (o.checkDate("limit").calendar(null, n), o.closeList()), o.setBtnStatus(), s
					.range || ("month" === s.type && "month" === t || "year" === s.type && "year" ===
					t) && o.setValue(o.parse()).remove().done(), o.done(null, "change"), lay(o.footer)
					.find("." + k).removeClass(x))
			})) : (e = lay.elem("span", {
					"class": C
				}), r = function() {
					lay(m).find("ol").each(function(e) {
						var a = this,
							t = lay(a).find("li");
						a.scrollTop = 30 * (o[D][T[e]] - 2), a.scrollTop <= 0 && t.each(function(e, t) {
							if (!lay(this).hasClass(x)) return a.scrollTop = 30 * (e - 2), !0
						})
					})
				}, u = lay(c[2]).find("." + C), r(), e.innerHTML = s.range ? [d.startTime, d.endTime][n] : d
				.timeTips, lay(o.elemMain[n]).addClass("laydate-time-show"), u[0] && u.remove(), c[2].appendChild(
				e), lay(m).find("ol").each(function(t) {
					var a = this;
					lay(a).find("li").on("click", function() {
						var e = 0 | this.innerHTML;
						lay(this).hasClass(x) || (s.range ? o[D][T[t]] = e : y[T[t]] = e, lay(a).find(
								"." + w).removeClass(w), lay(this).addClass(w), l(), r(), !o
							.endDate && "time" !== s.type || o.done(null, "change"), o
							.setBtnStatus())
					})
				})), o
	}, g.prototype.listYM = [], g.prototype.closeList = function() {
		var a = this;
		a.config;
		lay.each(a.elemCont, function(e, t) {
			lay(this).find("." + M).remove(), lay(a.elemMain[e]).removeClass(
				"laydate-ym-show laydate-time-show")
		}), lay(a.elem).find("." + C).remove()
	}, g.prototype.setBtnStatus = function(e, t, a) {
		var n = this,
			i = n.config,
			l = n.lang(),
			r = lay(n.footer).find(E);
		i.range && "time" !== i.type && (t = t || i.dateTime, a = a || n.endDate, i = n.newDate(t).getTime() > n
			.newDate(a).getTime(), n.limit(null, t) || n.limit(null, a) ? r.addClass(x) : r[i ? "addClass" :
				"removeClass"](x), e && i && n.hint("string" == typeof e ? l.timeout.replace(/\u65e5\u671f/g,
				e) : l.timeout))
	}, g.prototype.parse = function(e, t) {
		var a = this,
			n = a.config,
			t = t || ("end" == e ? lay.extend({}, a.endDate, a.endTime) : n.range ? lay.extend({}, n.dateTime, a
				.startTime) : n.dateTime),
			t = u.parse(t, a.format, 1);
		return n.range && e === undefined ? t + " " + a.rangeStr + " " + a.parse("end") : t
	}, g.prototype.newDate = function(e) {
		return e = e || {}, new Date(e.year || 1, e.month || 0, e.date || 1, e.hours || 0, e.minutes || 0, e
			.seconds || 0)
	}, g.prototype.getDateTime = function(e) {
		return this.newDate(e).getTime()
	}, g.prototype.setValue = function(e) {
		var t = this,
			a = t.config,
			n = t.bindElem || a.elem[0];
		return "static" === a.position || (e = e || "", t.isInput(n) ? lay(n).val(e) : (a = t.rangeElem) ? (
			"array" !== layui.type(e) && (e = e.split(" " + t.rangeStr + " ")), a[0].val(e[0] || ""), a[1]
			.val(e[1] || "")) : (0 === lay(n).find("*").length && lay(n).html(e), lay(n).attr("lay-date",
			e))), t
	}, g.prototype.preview = function() {
		var e, t = this,
			a = t.config;
		a.isPreview && (e = lay(t.elem).find("." + f), a = !a.range || t.endDate ? t.parse() : "", e.html(a).css({
			color: "#5FB878"
		}), setTimeout(function() {
			e.css({
				color: "#666"
			})
		}, 300))
	}, g.prototype.done = function(e, t) {
		var a = this,
			n = a.config,
			i = lay.extend({}, lay.extend(n.dateTime, a.startTime)),
			l = lay.extend({}, lay.extend(a.endDate, a.endTime));
		return lay.each([i, l], function(e, t) {
				"month" in t && lay.extend(t, {
					month: t.month + 1
				})
			}), a.preview(), e = e || [a.parse(), i, l], "function" == typeof n[t || "done"] && n[t || "done"]
			.apply(n, e), a
	}, g.prototype.choose = function(e, a) {
		var n = this,
			i = n.config,
			l = n.thisDateTime(a),
			t = (lay(n.elem).find("td"), {
				year: 0 | (t = e.attr("lay-ymd").split("-"))[0],
				month: (0 | t[1]) - 1,
				date: 0 | t[2]
			});
		e.hasClass(x) || (lay.extend(l, t), i.range ? (lay.each(["startTime", "endTime"], function(e, t) {
				n[t] = n[t] || {
					hours: e ? 23 : 0,
					minutes: e ? 59 : 0,
					seconds: e ? 59 : 0
				}, a === e && (n.getDateTime(lay.extend({}, l, n[t])) < n.getDateTime(i.min) ? (n[
						t] = {
							hours: i.min.hours,
							minutes: i.min.minutes,
							seconds: i.min.seconds
						}, lay.extend(l, n[t])) : n.getDateTime(lay.extend({}, l, n[t])) > n
					.getDateTime(i.max) && (n[t] = {
						hours: i.max.hours,
						minutes: i.max.minutes,
						seconds: i.max.seconds
					}, lay.extend(l, n[t])))
			}), n.calendar(null, a).done(null, "change")) : "static" === i.position ? n.calendar().done().done(
				null, "change") : "date" === i.type ? n.setValue(n.parse()).remove().done() : "datetime" === i
			.type && n.calendar().done(null, "change"))
	}, g.prototype.tool = function(e, t) {
		var a = this,
			n = a.config,
			i = a.lang(),
			l = n.dateTime,
			r = "static" === n.position,
			o = {
				datetime: function() {
					lay(e).hasClass(x) || (a.list("time", 0), n.range && a.list("time", 1), lay(e).attr(
						"lay-type", "date").html(a.lang().dateTips))
				},
				date: function() {
					a.closeList(), lay(e).attr("lay-type", "datetime").html(a.lang().timeTips)
				},
				clear: function() {
					r && (lay.extend(l, a.firstDate), a.calendar()), n.range && (delete n.dateTime, delete a
						.endDate, delete a.startTime, delete a.endTime), a.setValue("").remove(), a.done([
						"", {}, {}
					])
				},
				now: function() {
					var e = new Date;
					lay.extend(l, a.systemDate(), {
						hours: e.getHours(),
						minutes: e.getMinutes(),
						seconds: e.getSeconds()
					}), a.setValue(a.parse()).remove(), r && a.calendar(), a.done()
				},
				confirm: function() {
					if (n.range) {
						if (lay(e).hasClass(x)) return a.hint("time" === n.type ? i.timeout.replace(
							/\u65e5\u671f/g, "\u65f6\u95f4") : i.timeout)
					} else if (lay(e).hasClass(x)) return a.hint(i.invalidDate);
					a.setValue(a.parse()).remove(), a.done()
				}
			};
		o[t] && o[t]()
	}, g.prototype.change = function(n) {
		var i = this,
			l = i.config,
			r = i.thisDateTime(n),
			o = l.range && ("year" === l.type || "month" === l.type),
			s = i.elemCont[n || 0],
			y = i.listYM[n],
			e = function(e) {
				var t = lay(s).find(".laydate-year-list")[0],
					a = lay(s).find(".laydate-month-list")[0];
				return t && (y[0] = e ? y[0] - 15 : y[0] + 15, i.list("year", n)), a && (e ? y[0]-- : y[0]++, i
					.list("month", n)), (t || a) && (lay.extend(r, {
					year: y[0]
				}), o && (r.year = y[0]), l.range || i.done(null, "change"), l.range || i.limit(lay(i
					.footer).find(E), {
					year: y[0]
				})), i.setBtnStatus(), t || a
			};
		return {
			prevYear: function() {
				e("sub") || (r.year--, i.checkDate("limit").calendar(null, n), i.done(null, "change"))
			},
			prevMonth: function() {
				var e = i.getAsYM(r.year, r.month, "sub");
				lay.extend(r, {
					year: e[0],
					month: e[1]
				}), i.checkDate("limit").calendar(null, n), i.done(null, "change")
			},
			nextMonth: function() {
				var e = i.getAsYM(r.year, r.month);
				lay.extend(r, {
					year: e[0],
					month: e[1]
				}), i.checkDate("limit").calendar(null, n), i.done(null, "change")
			},
			nextYear: function() {
				e() || (r.year++, i.checkDate("limit").calendar(null, n), i.done(null, "change"))
			}
		}
	}, g.prototype.changeEvent = function() {
		var i = this;
		i.config;
		lay(i.elem).on("click", function(e) {
			lay.stope(e)
		}).on("mousedown", function(e) {
			lay.stope(e)
		}), lay.each(i.elemHeader, function(n, e) {
			lay(e[0]).on("click", function(e) {
				i.change(n).prevYear()
			}), lay(e[1]).on("click", function(e) {
				i.change(n).prevMonth()
			}), lay(e[2]).find("span").on("click", function(e) {
				var t = lay(this),
					a = t.attr("lay-ym"),
					t = t.attr("lay-type");
				a && (a = a.split("-"), i.listYM[n] = [0 | a[0], 0 | a[1]], i.list(t, n), lay(i
					.footer).find("." + k).addClass(x))
			}), lay(e[3]).on("click", function(e) {
				i.change(n).nextMonth()
			}), lay(e[4]).on("click", function(e) {
				i.change(n).nextYear()
			})
		}), lay.each(i.table, function(e, t) {
			lay(t).find("td").on("click", function() {
				i.choose(lay(this), e)
			})
		}), lay(i.footer).find("span").on("click", function() {
			var e = lay(this).attr("lay-type");
			i.tool(this, e)
		})
	}, g.prototype.isInput = function(e) {
		return /input|textarea/.test(e.tagName.toLocaleLowerCase()) || /INPUT|TEXTAREA/.test(e.tagName)
	}, g.prototype.events = function() {
		var a = this,
			n = a.config,
			e = function(e, t) {
				e.on(n.trigger, function() {
					u.thisId !== n.id && (t && (a.bindElem = this), a.render())
				})
			};
		n.elem[0] && !n.elem[0].eventHandler && (e(n.elem, "bind"), e(n.eventElem), n.elem[0].eventHandler = !0)
	}, s.that = {}, s.getThis = function(e) {
		var t = s.that[e];
		return !t && n && layui.hint().error(e ? a + " instance with ID '" + e + "' not found" :
			"ID argument required"), t
	}, l.run = function(n) {
		n(r).on("mousedown", function(e) {
			var t, a;
			!u.thisId || (t = s.getThis(u.thisId)) && (a = t.config, e.target !== a.elem[0] && e.target !==
				a.eventElem[0] && e.target !== n(a.closeStop)[0] && t.remove())
		}).on("keydown", function(e) {
			var t;
			!u.thisId || (t = s.getThis(u.thisId)) && "static" !== t.config.position && 13 === e.keyCode &&
				n("#" + t.elemID)[0] && t.elemID === g.thisElemDate && (e.preventDefault(), n(t.footer)
					.find(E)[0].click())
		}), n(i).on("resize", function() {
			if (u.thisId) {
				var e = s.getThis(u.thisId);
				if (e) return !(!e.elem || !n(".layui-laydate")[0]) && void e.position()
			}
		})
	}, u.render = function(e) {
		e = new g(e);
		return s.call(e)
	}, u.parse = function(a, n, i) {
		return a = a || {}, n = ((n = "string" == typeof n ? s.formatArr(n) : n) || []).concat(), lay.each(n,
			function(e, t) {
				/yyyy|y/.test(t) ? n[e] = lay.digit(a.year, t.length) : /MM|M/.test(t) ? n[e] = lay.digit(a
						.month + (i || 0), t.length) : /dd|d/.test(t) ? n[e] = lay.digit(a.date, t.length) :
					/HH|H/.test(t) ? n[e] = lay.digit(a.hours, t.length) : /mm|m/.test(t) ? n[e] = lay.digit(a
						.minutes, t.length) : /ss|s/.test(t) && (n[e] = lay.digit(a.seconds, t.length))
			}), n.join("")
	}, u.getEndDate = function(e, t) {
		var a = new Date;
		return a.setFullYear(t || a.getFullYear(), e || a.getMonth() + 1, 1), new Date(a.getTime() - 864e5)
		.getDate()
	}, u.close = function(e) {
		e = s.getThis(e || u.thisId);
		if (e) return e.remove()
	}, n ? (u.ready(), layui.define("lay", function(e) {
		u.path = layui.cache.dir, l.run(lay), e(a, u)
	})) : "function" == typeof define && define.amd ? define(function() {
		return l.run(lay), u
	}) : (u.ready(), l.run(i.lay), i.laydate = u)
}(window, window.document);
! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e) : function(e) {
		if (e.document) return t(e);
		throw new Error("jQuery requires a window with a document")
	} : t(e)
}("undefined" != typeof window ? window : this, function(T, M) {
	var f = [],
		g = T.document,
		c = f.slice,
		O = f.concat,
		R = f.push,
		P = f.indexOf,
		B = {},
		W = B.toString,
		m = B.hasOwnProperty,
		y = {},
		e = "1.12.4",
		C = function(e, t) {
			return new C.fn.init(e, t)
		},
		I = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		$ = /^-ms-/,
		z = /-([\da-z])/gi,
		X = function(e, t) {
			return t.toUpperCase()
		};

	function U(e) {
		var t = !!e && "length" in e && e.length,
			n = C.type(e);
		return "function" !== n && !C.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t &&
			t - 1 in e)
	}
	C.fn = C.prototype = {
		jquery: e,
		constructor: C,
		selector: "",
		length: 0,
		toArray: function() {
			return c.call(this)
		},
		get: function(e) {
			return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this)
		},
		pushStack: function(e) {
			e = C.merge(this.constructor(), e);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(e) {
			return C.each(this, e)
		},
		map: function(n) {
			return this.pushStack(C.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice: function() {
			return this.pushStack(c.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				e = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= e && e < t ? [this[e]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: R,
		sort: f.sort,
		splice: f.splice
	}, C.extend = C.fn.extend = function() {
		var e, t, n, r, i, o = arguments[0] || {},
			a = 1,
			s = arguments.length,
			u = !1;
		for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || C
			.isFunction(o) || (o = {}), a === s && (o = this, a--); a < s; a++)
			if (null != (r = arguments[a]))
				for (n in r) i = o[n], o !== (t = r[n]) && (u && t && (C.isPlainObject(t) || (e = C.isArray(
					t))) ? (i = e ? (e = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {},
						o[n] = C.extend(u, i, t)) : t !== undefined && (o[n] = t));
		return o
	}, C.extend({
		expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === C.type(e)
		},
		isArray: Array.isArray || function(e) {
			return "array" === C.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			var t = e && e.toString();
			return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
		},
		isEmptyObject: function(e) {
			for (var t in e) return !1;
			return !0
		},
		isPlainObject: function(e) {
			if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
			try {
				if (e.constructor && !m.call(e, "constructor") && !m.call(e.constructor.prototype,
						"isPrototypeOf")) return !1
			} catch (n) {
				return !1
			}
			if (!y.ownFirst)
				for (var t in e) return m.call(e, t);
			for (t in e);
			return t === undefined || m.call(e, t)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[W.call(e)] ||
				"object" : typeof e
		},
		globalEval: function(e) {
			e && C.trim(e) && (T.execScript || function(e) {
				T.eval.call(T, e)
			})(e)
		},
		camelCase: function(e) {
			return e.replace($, "ms-").replace(z, X)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var n, r = 0;
			if (U(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(I, "")
		},
		makeArray: function(e, t) {
			t = t || [];
			return null != e && (U(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : R.call(t,
				e)), t
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (P) return P.call(t, e, n);
				for (r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
					if (n in t && t[n] === e) return n
			}
			return -1
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; r < n;) e[i++] = t[r++];
			if (n != n)
				for (; t[r] !== undefined;) e[i++] = t[r++];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) != a && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, o = 0,
				a = [];
			if (U(e))
				for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
			else
				for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
			return O.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r;
			return "string" == typeof t && (r = e[t], t = e, e = r), C.isFunction(e) ? (n = c.call(
				arguments, 2), (r = function() {
				return e.apply(t || this, n.concat(c.call(arguments)))
			}).guid = e.guid = e.guid || C.guid++, r) : undefined
		},
		now: function() {
			return +new Date
		},
		support: y
	}), "function" == typeof Symbol && (C.fn[Symbol.iterator] = f[Symbol.iterator]), C.each(
		"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
		function(e, t) {
			B["[object " + t + "]"] = t.toLowerCase()
		});
	var e = function(M) {
			var e, g, b, o, O, w, R, P, T, u, l, C, E, t, N, m, r, i, y, k = "sizzle" + +new Date,
				v = M.document,
				S = 0,
				B = 0,
				W = le(),
				I = le(),
				A = le(),
				$ = function(e, t) {
					return e === t && (l = !0), 0
				},
				z = {}.hasOwnProperty,
				n = [],
				X = n.pop,
				U = n.push,
				D = n.push,
				V = n.slice,
				j = function(e, t) {
					for (var n = 0, r = e.length; n < r; n++)
						if (e[n] === t) return n;
					return -1
				},
				Y =
				"checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				a = "[\\x20\\t\\r\\n\\f]",
				s = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				J = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a +
				"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
				G = ":(" + s +
				")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + J +
				")*)|.*)\\)|)",
				K = new RegExp(a + "+", "g"),
				L = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
				Q = new RegExp("^" + a + "*," + a + "*"),
				Z = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
				ee = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]", "g"),
				te = new RegExp(G),
				ne = new RegExp("^" + s + "$"),
				f = {
					ID: new RegExp("^#(" + s + ")"),
					CLASS: new RegExp("^\\.(" + s + ")"),
					TAG: new RegExp("^(" + s + "|[*])"),
					ATTR: new RegExp("^" + J),
					PSEUDO: new RegExp("^" + G),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a +
						"*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)",
						"i"),
					bool: new RegExp("^(?:" + Y + ")$", "i"),
					needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a +
						"*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
				},
				re = /^(?:input|select|textarea|button)$/i,
				ie = /^h\d$/i,
				c = /^[^{]+\{\s*\[native \w/,
				oe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ae = /[+~]/,
				se = /'|\\/g,
				d = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)", "ig"),
				p = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r != r || n ? t : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 |
						55296, 1023 & r | 56320)
				},
				ue = function() {
					C()
				};
			try {
				D.apply(n = V.call(v.childNodes), v.childNodes), n[v.childNodes.length].nodeType
			} catch (F) {
				D = {
					apply: n.length ? function(e, t) {
						U.apply(e, V.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}

			function H(e, t, n, r) {
				var i, o, a, s, u, l, c, f, d = t && t.ownerDocument,
					p = t ? t.nodeType : 9;
				if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
				if (!r && ((t ? t.ownerDocument || t : v) !== E && C(t), t = t || E, N)) {
					if (11 !== p && (l = oe.exec(e)))
						if (i = l[1]) {
							if (9 === p) {
								if (!(a = t.getElementById(i))) return n;
								if (a.id === i) return n.push(a), n
							} else if (d && (a = d.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), n
						} else {
							if (l[2]) return D.apply(n, t.getElementsByTagName(e)), n;
							if ((i = l[3]) && g.getElementsByClassName && t.getElementsByClassName) return D.apply(
								n, t.getElementsByClassName(i)), n
						} if (g.qsa && !A[e + " "] && (!m || !m.test(e))) {
						if (1 !== p) d = t, f = e;
						else if ("object" !== t.nodeName.toLowerCase()) {
							for ((s = t.getAttribute("id")) ? s = s.replace(se, "\\$&") : t.setAttribute("id", s =
									k), o = (c = w(e)).length, u = ne.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
								c[o] = u + " " + _(c[o]);
							f = c.join(","), d = ae.test(e) && de(t.parentNode) || t
						}
						if (f) try {
							return D.apply(n, d.querySelectorAll(f)), n
						} catch (h) {} finally {
							s === k && t.removeAttribute("id")
						}
					}
				}
				return P(e.replace(L, "$1"), t, n, r)
			}

			function le() {
				var n = [];

				function r(e, t) {
					return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
				}
				return r
			}

			function q(e) {
				return e[k] = !0, e
			}

			function h(e) {
				var t = E.createElement("div");
				try {
					return !!e(t)
				} catch (F) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t)
				}
			}

			function ce(e, t) {
				for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
			}

			function fe(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e
						.sourceIndex || 1 << 31);
				if (r) return r;
				if (n)
					for (; n = n.nextSibling;)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function x(a) {
				return q(function(o) {
					return o = +o, q(function(e, t) {
						for (var n, r = a([], e.length, o), i = r.length; i--;) e[n = r[i]] && (e[
							n] = !(t[n] = e[n]))
					})
				})
			}

			function de(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			for (e in g = H.support = {}, O = H.isXML = function(e) {
					e = e && (e.ownerDocument || e).documentElement;
					return !!e && "HTML" !== e.nodeName
				}, C = H.setDocument = function(e) {
					var e = e ? e.ownerDocument || e : v;
					return e !== E && 9 === e.nodeType && e.documentElement && (t = (E = e).documentElement, N = !O(
							E), (e = E.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener(
							"unload", ue, !1) : e.attachEvent && e.attachEvent("onunload", ue)), g.attributes =
						h(function(e) {
							return e.className = "i", !e.getAttribute("className")
						}), g.getElementsByTagName = h(function(e) {
							return e.appendChild(E.createComment("")), !e.getElementsByTagName("*").length
						}), g.getElementsByClassName = c.test(E.getElementsByClassName), g.getById = h(function(
							e) {
							return t.appendChild(e).id = k, !E.getElementsByName || !E.getElementsByName(k)
								.length
						}), g.getById ? (b.find.ID = function(e, t) {
							if ("undefined" != typeof t.getElementById && N) return (e = t.getElementById(
								e)) ? [e] : []
						}, b.filter.ID = function(e) {
							var t = e.replace(d, p);
							return function(e) {
								return e.getAttribute("id") === t
							}
						}) : (delete b.find.ID, b.filter.ID = function(e) {
							var t = e.replace(d, p);
							return function(e) {
								e = "undefined" != typeof e.getAttributeNode && e.getAttributeNode(
								"id");
								return e && e.value === t
							}
						}), b.find.TAG = g.getElementsByTagName ? function(e, t) {
							return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : g
								.qsa ? t.querySelectorAll(e) : void 0
						} : function(e, t) {
							var n, r = [],
								i = 0,
								o = t.getElementsByTagName(e);
							if ("*" !== e) return o;
							for (; n = o[i++];) 1 === n.nodeType && r.push(n);
							return r
						}, b.find.CLASS = g.getElementsByClassName && function(e, t) {
							if ("undefined" != typeof t.getElementsByClassName && N) return t
								.getElementsByClassName(e)
						}, r = [], m = [], (g.qsa = c.test(E.querySelectorAll)) && (h(function(e) {
							t.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k +
								"-\r\\' msallowcapture=''><option selected=''></option></select>", e
								.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" +
									a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m
								.push("\\[" + a + "*(?:value|" + Y + ")"), e.querySelectorAll("[id~=" +
									k + "-]").length || m.push("~="), e.querySelectorAll(":checked")
								.length || m.push(":checked"), e.querySelectorAll("a#" + k + "+*")
								.length || m.push(".#.+[+~]")
						}), h(function(e) {
							var t = E.createElement("input");
							t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name",
								"D"), e.querySelectorAll("[name=d]").length && m.push("name" + a +
									"*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(
									":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
						})), (g.matchesSelector = c.test(i = t.matches || t.webkitMatchesSelector || t
							.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector)) && h(function(
						e) {
							g.disconnectedMatch = i.call(e, "div"), i.call(e, "[s!='']:x"), r.push("!=", G)
						}), m = m.length && new RegExp(m.join("|")), r = r.length && new RegExp(r.join("|")),
						e = c.test(t.compareDocumentPosition), y = e || c.test(t.contains) ? function(e, t) {
							var n = 9 === e.nodeType ? e.documentElement : e,
								t = t && t.parentNode;
							return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e
								.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
						} : function(e, t) {
							if (t)
								for (; t = t.parentNode;)
									if (t === e) return !0;
							return !1
						}, $ = e ? function(e, t) {
							if (e === t) return l = !0, 0;
							var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
							return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e
									.compareDocumentPosition(t) : 1) || !g.sortDetached && t
								.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === v && y(v,
									e) ? -1 : t === E || t.ownerDocument === v && y(v, t) ? 1 : u ? j(u,
								e) - j(u, t) : 0 : 4 & n ? -1 : 1)
						} : function(e, t) {
							if (e === t) return l = !0, 0;
							var n, r = 0,
								i = e.parentNode,
								o = t.parentNode,
								a = [e],
								s = [t];
							if (!i || !o) return e === E ? -1 : t === E ? 1 : i ? -1 : o ? 1 : u ? j(u, e) - j(
								u, t) : 0;
							if (i === o) return fe(e, t);
							for (n = e; n = n.parentNode;) a.unshift(n);
							for (n = t; n = n.parentNode;) s.unshift(n);
							for (; a[r] === s[r];) r++;
							return r ? fe(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0
						}), E
				}, H.matches = function(e, t) {
					return H(e, null, null, t)
				}, H.matchesSelector = function(e, t) {
					if ((e.ownerDocument || e) !== E && C(e), t = t.replace(ee, "='$1']"), g.matchesSelector && N &&
						!A[t + " "] && (!r || !r.test(t)) && (!m || !m.test(t))) try {
						var n = i.call(e, t);
						if (n || g.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (F) {}
					return 0 < H(t, E, null, [e]).length
				}, H.contains = function(e, t) {
					return (e.ownerDocument || e) !== E && C(e), y(e, t)
				}, H.attr = function(e, t) {
					(e.ownerDocument || e) !== E && C(e);
					var n = b.attrHandle[t.toLowerCase()],
						n = n && z.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !N) : undefined;
					return n !== undefined ? n : g.attributes || !N ? e.getAttribute(t) : (n = e.getAttributeNode(
						t)) && n.specified ? n.value : null
				}, H.error = function(e) {
					throw new Error("Syntax error, unrecognized expression: " + e)
				}, H.uniqueSort = function(e) {
					var t, n = [],
						r = 0,
						i = 0;
					if (l = !g.detectDuplicates, u = !g.sortStable && e.slice(0), e.sort($), l) {
						for (; t = e[i++];) t === e[i] && (r = n.push(i));
						for (; r--;) e.splice(n[r], 1)
					}
					return u = null, e
				}, o = H.getText = function(e) {
					var t, n = "",
						r = 0,
						i = e.nodeType;
					if (i) {
						if (1 === i || 9 === i || 11 === i) {
							if ("string" == typeof e.textContent) return e.textContent;
							for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
						} else if (3 === i || 4 === i) return e.nodeValue
					} else
						for (; t = e[r++];) n += o(t);
					return n
				}, (b = H.selectors = {
					cacheLength: 50,
					createPseudo: q,
					match: f,
					attrHandle: {},
					find: {},
					relative: {
						">": {
							dir: "parentNode",
							first: !0
						},
						" ": {
							dir: "parentNode"
						},
						"+": {
							dir: "previousSibling",
							first: !0
						},
						"~": {
							dir: "previousSibling"
						}
					},
					preFilter: {
						ATTR: function(e) {
							return e[1] = e[1].replace(d, p), e[3] = (e[3] || e[4] || e[5] || "").replace(d,
								p), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
						},
						CHILD: function(e) {
							return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || H.error(
									e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] ||
									"odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && H
								.error(e[0]), e
						},
						PSEUDO: function(e) {
							var t, n = !e[6] && e[2];
							return f.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && te
								.test(n) && (t = w(n, !0)) && (t = n.indexOf(")", n.length - t) - n
									.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e
								.slice(0, 3))
						}
					},
					filter: {
						TAG: function(e) {
							var t = e.replace(d, p).toLowerCase();
							return "*" === e ? function() {
								return !0
							} : function(e) {
								return e.nodeName && e.nodeName.toLowerCase() === t
							}
						},
						CLASS: function(e) {
							var t = W[e + " "];
							return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && W(e,
								function(e) {
									return t.test("string" == typeof e.className && e.className ||
										"undefined" != typeof e.getAttribute && e.getAttribute(
											"class") || "")
								})
						},
						ATTR: function(t, n, r) {
							return function(e) {
								e = H.attr(e, t);
								return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r :
									"!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) :
									"*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(
										-r.length) === r : "~=" === n ? -1 < (" " + e.replace(K,
										" ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(
										0, r.length + 1) === r + "-"))
							}
						},
						CHILD: function(h, e, t, g, m) {
							var y = "nth" !== h.slice(0, 3),
								v = "last" !== h.slice(-4),
								x = "of-type" === e;
							return 1 === g && 0 === m ? function(e) {
								return !!e.parentNode
							} : function(e, t, n) {
								var r, i, o, a, s, u, l = y != v ? "nextSibling" : "previousSibling",
									c = e.parentNode,
									f = x && e.nodeName.toLowerCase(),
									d = !n && !x,
									p = !1;
								if (c) {
									if (y) {
										for (; l;) {
											for (a = e; a = a[l];)
												if (x ? a.nodeName.toLowerCase() === f : 1 === a
													.nodeType) return !1;
											u = l = "only" === h && !u && "nextSibling"
										}
										return !0
									}
									if (u = [v ? c.firstChild : c.lastChild], v && d) {
										for (p = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a
													.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] ===
												S && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s &&
											a && a[l] || (p = s = 0) || u.pop();)
											if (1 === a.nodeType && ++p && a === e) {
												i[h] = [S, s, p];
												break
											}
									} else if (!1 === (p = d ? s = (r = (i = (o = (a = e)[k] || (a[
											k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[
											0] === S && r[1] : p))
										for (;
											(a = ++s && a && a[l] || (p = s = 0) || u.pop()) && ((x ? a
													.nodeName.toLowerCase() !== f : 1 !== a.nodeType) ||
												!++p || (d && ((i = (o = a[k] || (a[k] = {}))[a
													.uniqueID] || (o[a.uniqueID] = {}))[h] = [S,
													p
												]), a !== e)););
									return (p -= m) === g || p % g == 0 && 0 <= p / g
								}
							}
						},
						PSEUDO: function(e, o) {
							var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || H.error(
								"unsupported pseudo: " + e);
							return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters
								.hasOwnProperty(e.toLowerCase()) ? q(function(e, t) {
									for (var n, r = a(e, o), i = r.length; i--;) e[n = j(e, r[
										i])] = !(t[n] = r[i])
								}) : function(e) {
									return a(e, 0, t)
								}) : a
						}
					},
					pseudos: {
						not: q(function(e) {
							var r = [],
								i = [],
								s = R(e.replace(L, "$1"));
							return s[k] ? q(function(e, t, n, r) {
								for (var i, o = s(e, null, r, []), a = e.length; a--;)(i = o[
									a]) && (e[a] = !(t[a] = i))
							}) : function(e, t, n) {
								return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
							}
						}),
						has: q(function(t) {
							return function(e) {
								return 0 < H(t, e).length
							}
						}),
						contains: q(function(t) {
							return t = t.replace(d, p),
								function(e) {
									return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
								}
						}),
						lang: q(function(n) {
							return ne.test(n || "") || H.error("unsupported lang: " + n), n = n.replace(
									d, p).toLowerCase(),
								function(e) {
									var t;
									do {
										if (t = N ? e.lang : e.getAttribute("xml:lang") || e
											.getAttribute("lang")) return (t = t.toLowerCase()) === n ||
											0 === t.indexOf(n + "-")
									} while ((e = e.parentNode) && 1 === e.nodeType);
									return !1
								}
						}),
						target: function(e) {
							var t = M.location && M.location.hash;
							return t && t.slice(1) === e.id
						},
						root: function(e) {
							return e === t
						},
						focus: function(e) {
							return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(e.type || e
								.href || ~e.tabIndex)
						},
						enabled: function(e) {
							return !1 === e.disabled
						},
						disabled: function(e) {
							return !0 === e.disabled
						},
						checked: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && !!e.checked || "option" === t && !!e.selected
						},
						selected: function(e) {
							return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
						},
						empty: function(e) {
							for (e = e.firstChild; e; e = e.nextSibling)
								if (e.nodeType < 6) return !1;
							return !0
						},
						parent: function(e) {
							return !b.pseudos.empty(e)
						},
						header: function(e) {
							return ie.test(e.nodeName)
						},
						input: function(e) {
							return re.test(e.nodeName)
						},
						button: function(e) {
							var t = e.nodeName.toLowerCase();
							return "input" === t && "button" === e.type || "button" === t
						},
						text: function(e) {
							return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (
								e = e.getAttribute("type")) || "text" === e.toLowerCase())
						},
						first: x(function() {
							return [0]
						}),
						last: x(function(e, t) {
							return [t - 1]
						}),
						eq: x(function(e, t, n) {
							return [n < 0 ? n + t : n]
						}),
						even: x(function(e, t) {
							for (var n = 0; n < t; n += 2) e.push(n);
							return e
						}),
						odd: x(function(e, t) {
							for (var n = 1; n < t; n += 2) e.push(n);
							return e
						}),
						lt: x(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; 0 <= --r;) e.push(r);
							return e
						}),
						gt: x(function(e, t, n) {
							for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
							return e
						})
					}
				}).pseudos.nth = b.pseudos.eq, {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) b.pseudos[e] = function(t) {
				return function(e) {
					return "input" === e.nodeName.toLowerCase() && e.type === t
				}
			}(e);
			for (e in {
					submit: !0,
					reset: !0
				}) b.pseudos[e] = function(n) {
				return function(e) {
					var t = e.nodeName.toLowerCase();
					return ("input" === t || "button" === t) && e.type === n
				}
			}(e);

			function pe() {}

			function _(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r
			}

			function he(a, e, t) {
				var s = e.dir,
					u = t && "parentNode" === s,
					l = B++;
				return e.first ? function(e, t, n) {
					for (; e = e[s];)
						if (1 === e.nodeType || u) return a(e, t, n)
				} : function(e, t, n) {
					var r, i, o = [S, l];
					if (n) {
						for (; e = e[s];)
							if ((1 === e.nodeType || u) && a(e, t, n)) return !0
					} else
						for (; e = e[s];)
							if (1 === e.nodeType || u) {
								if ((r = (i = (i = e[k] || (e[k] = {}))[e.uniqueID] || (i[e.uniqueID] = {}))[
									s]) && r[0] === S && r[1] === l) return o[2] = r[2];
								if ((i[s] = o)[2] = a(e, t, n)) return !0
							}
				}
			}

			function ge(i) {
				return 1 < i.length ? function(e, t, n) {
					for (var r = i.length; r--;)
						if (!i[r](e, t, n)) return !1;
					return !0
				} : i[0]
			}

			function me(e, t, n, r, i) {
				for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(o = e[s]) || n && !n(o, r,
					i) || (a.push(o), l && t.push(s));
				return a
			}

			function ye(p, h, g, m, y, e) {
				return m && !m[k] && (m = ye(m)), y && !y[k] && (y = ye(y, e)), q(function(e, t, n, r) {
					var i, o, a, s = [],
						u = [],
						l = t.length,
						c = e || function(e, t, n) {
							for (var r = 0, i = t.length; r < i; r++) H(e, t[r], n);
							return n
						}(h || "*", n.nodeType ? [n] : n, []),
						f = !p || !e && h ? c : me(c, s, p, n, r),
						d = g ? y || (e ? p : l || m) ? [] : t : f;
					if (g && g(f, d, n, r), m)
						for (i = me(d, u), m(i, [], n, r), o = i.length; o--;)(a = i[o]) && (d[u[o]] = !(f[
							u[o]] = a));
					if (e) {
						if (y || p) {
							if (y) {
								for (i = [], o = d.length; o--;)(a = d[o]) && i.push(f[o] = a);
								y(null, d = [], i, r)
							}
							for (o = d.length; o--;)(a = d[o]) && -1 < (i = y ? j(e, a) : s[o]) && (e[i] = !
								(t[i] = a))
						}
					} else d = me(d === t ? d.splice(l, d.length) : d), y ? y(null, t, d, r) : D.apply(t, d)
				})
			}
			return pe.prototype = b.filters = b.pseudos, b.setFilters = new pe, w = H.tokenize = function(e, t) {
					var n, r, i, o, a, s, u, l = I[e + " "];
					if (l) return t ? 0 : l.slice(0);
					for (a = e, s = [], u = b.preFilter; a;) {
						for (o in n && !(r = Q.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])),
							n = !1, (r = Z.exec(a)) && (n = r.shift(), i.push({
								value: n,
								type: r[0].replace(L, " ")
							}), a = a.slice(n.length)), b.filter) !(r = f[o].exec(a)) || u[o] && !(r = u[o](r)) || (
							n = r.shift(), i.push({
								value: n,
								type: o,
								matches: r
							}), a = a.slice(n.length));
						if (!n) break
					}
					return t ? a.length : a ? H.error(e) : I(e, s).slice(0)
				}, R = H.compile = function(e, t) {
					var n, m, y, v, x, r, i = [],
						o = [],
						a = A[e + " "];
					if (!a) {
						for (n = (t = t || w(e)).length; n--;)((a = function f(e) {
							for (var r, t, n, i = e.length, o = b.relative[e[0].type], a = o || b
									.relative[" "], s = o ? 1 : 0, u = he(function(e) {
										return e === r
									}, a, !0), l = he(function(e) {
										return -1 < j(r, e)
									}, a, !0), c = [function(e, t, n) {
										return e = !o && (n || t !== T) || ((r = t).nodeType ? u :
											l)(e, t, n), r = null, e
									}]; s < i; s++)
								if (t = b.relative[e[s].type]) c = [he(ge(c), t)];
								else {
									if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
										for (n = ++s; n < i && !b.relative[e[n].type]; n++);
										return ye(1 < s && ge(c), 1 < s && _(e.slice(0, s - 1).concat({
												value: " " === e[s - 2].type ? "*" : ""
											})).replace(L, "$1"), t, s < n && f(e.slice(s, n)), n <
											i && f(e = e.slice(n)), n < i && _(e))
									}
									c.push(t)
								} return ge(c)
						}(t[n]))[k] ? i : o).push(a);
						(a = A(e, (m = o, v = 0 < (y = i).length, x = 0 < m.length, r = function(e, t, n, r, i) {
							var o, a, s, u = 0,
								l = "0",
								c = e && [],
								f = [],
								d = T,
								p = e || x && b.find.TAG("*", i),
								h = S += null == d ? 1 : Math.random() || .1,
								g = p.length;
							for (i && (T = t === E || t || i); l !== g && null != (o = p[l]); l++) {
								if (x && o) {
									for (a = 0, t || o.ownerDocument === E || (C(o), n = !N); s = m[
										a++];)
										if (s(o, t || E, n)) {
											r.push(o);
											break
										} i && (S = h)
								}
								v && ((o = !s && o) && u--, e && c.push(o))
							}
							if (u += l, v && l !== u) {
								for (a = 0; s = y[a++];) s(c, f, t, n);
								if (e) {
									if (0 < u)
										for (; l--;) c[l] || f[l] || (f[l] = X.call(r));
									f = me(f)
								}
								D.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && H
									.uniqueSort(r)
							}
							return i && (S = h, T = d), c
						}, v ? q(r) : r))).selector = e
					}
					return a
				}, P = H.select = function(e, t, n, r) {
					var i, o, a, s, u, l = "function" == typeof e && e,
						c = !r && w(e = l.selector || e);
					if (n = n || [], 1 === c.length) {
						if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && g.getById && 9 ===
							t.nodeType && N && b.relative[o[1].type]) {
							if (!(t = (b.find.ID(a.matches[0].replace(d, p), t) || [])[0])) return n;
							l && (t = t.parentNode), e = e.slice(o.shift().value.length)
						}
						for (i = f.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]);)
							if ((u = b.find[s]) && (r = u(a.matches[0].replace(d, p), ae.test(o[0].type) && de(t
									.parentNode) || t))) {
								if (o.splice(i, 1), e = r.length && _(o)) break;
								return D.apply(n, r), n
							}
					}
					return (l || R(e, c))(r, t, !N, n, !t || ae.test(e) && de(t.parentNode) || t), n
				}, g.sortStable = k.split("").sort($).join("") === k, g.detectDuplicates = !!l, C(), g
				.sortDetached = h(function(e) {
					return 1 & e.compareDocumentPosition(E.createElement("div"))
				}), h(function(e) {
					return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
				}) || ce("type|href|height|width", function(e, t, n) {
					if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
				}), g.attributes && h(function(e) {
					return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild
						.getAttribute("value")
				}) || ce("value", function(e, t, n) {
					if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
				}), h(function(e) {
					return null == e.getAttribute("disabled")
				}) || ce(Y, function(e, t, n) {
					if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ?
						n.value : null
				}), H
		}(T),
		r = (C.find = e, C.expr = e.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = e.uniqueSort,
			C.text = e.getText, C.isXMLDoc = e.isXML, C.contains = e.contains,
			function(e, t, n) {
				for (var r = [], i = n !== undefined;
					(e = e[t]) && 9 !== e.nodeType;)
					if (1 === e.nodeType) {
						if (i && C(e).is(n)) break;
						r.push(e)
					} return r
			}),
		V = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Y = C.expr.match.needsContext,
		J = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		G = /^.[^:#\[\.,]*$/;

	function K(e, n, r) {
		if (C.isFunction(n)) return C.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== r
		});
		if (n.nodeType) return C.grep(e, function(e) {
			return e === n !== r
		});
		if ("string" == typeof n) {
			if (G.test(n)) return C.filter(n, e, r);
			n = C.filter(n, e)
		}
		return C.grep(e, function(e) {
			return -1 < C.inArray(e, n) !== r
		})
	}
	C.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ?
			[r] : [] : C.find.matches(e, C.grep(t, function(e) {
				return 1 === e.nodeType
			}))
	}, C.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
				for (t = 0; t < i; t++)
					if (C.contains(r[t], this)) return !0
			}));
			for (t = 0; t < i; t++) C.find(e, r[t], n);
			return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this
				.selector + " " + e : e, n
		},
		filter: function(e) {
			return this.pushStack(K(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(K(this, e || [], !0))
		},
		is: function(e) {
			return !!K(this, "string" == typeof e && Y.test(e) ? C(e) : e || [], !1).length
		}
	});
	var Q, Z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ee = ((C.fn.init = function(e, t, n) {
			if (!e) return this;
			if (n = n || Q, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this
					.length = 1, this) : C.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) :
				e(C) : (e.selector !== undefined && (this.selector = e.selector, this.context = e
					.context), C.makeArray(e, this));
			if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e,
					null
				] : Z.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(
			e);
			if (r[1]) {
				if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t
						.ownerDocument || t : g, !0)), J.test(r[1]) && C.isPlainObject(t))
					for (var r in t) C.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this
			}
			if ((n = g.getElementById(r[2])) && n.parentNode) {
				if (n.id !== r[2]) return Q.find(e);
				this.length = 1, this[0] = n
			}
			return this.context = g, this.selector = e, this
		}).prototype = C.fn, Q = C(g), /^(?:parents|prev(?:Until|All))/),
		te = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function ne(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	C.fn.extend({
		has: function(e) {
			var t, n = C(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; t < r; t++)
					if (C.contains(this, n[t])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = Y.test(e) || "string" != typeof e ? C(e,
					t || this.context) : 0; r < i; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find
							.matchesSelector(n, e))) {
						o.push(n);
						break
					} return this.pushStack(1 < o.length ? C.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e,
				this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), C.each({
		parent: function(e) {
			e = e.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(e) {
			return r(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return r(e, "parentNode", n)
		},
		next: function(e) {
			return ne(e, "nextSibling")
		},
		prev: function(e) {
			return ne(e, "previousSibling")
		},
		nextAll: function(e) {
			return r(e, "nextSibling")
		},
		prevAll: function(e) {
			return r(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return r(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return r(e, "previousSibling", n)
		},
		siblings: function(e) {
			return V((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return V(e.firstChild)
		},
		contents: function(e) {
			return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([],
				e.childNodes)
		}
	}, function(r, i) {
		C.fn[r] = function(e, t) {
			var n = C.map(this, i, e);
			return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t,
				n)), 1 < this.length && (te[r] || (n = C.uniqueSort(n)), ee.test(r) && (n = n
				.reverse())), this.pushStack(n)
		}
	});
	var re, ie, E = /\S+/g;

	function oe() {
		g.addEventListener ? (g.removeEventListener("DOMContentLoaded", i), T.removeEventListener("load", i)) : (g
			.detachEvent("onreadystatechange", i), T.detachEvent("onload", i))
	}

	function i() {
		!g.addEventListener && "load" !== T.event.type && "complete" !== g.readyState || (oe(), C.ready())
	}
	for (ie in C.Callbacks = function(r) {
			var e, n;
			r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(E) || [], function(e, t) {
				n[t] = !0
			}), n) : C.extend({}, r);
			var i, t, o, a, s = [],
				u = [],
				l = -1,
				c = function() {
					for (a = r.once, o = i = !0; u.length; l = -1)
						for (t = u.shift(); ++l < s.length;) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l =
							s.length, t = !1);
					r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
				},
				f = {
					add: function() {
						return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
							C.each(e, function(e, t) {
								C.isFunction(t) ? r.unique && f.has(t) || s.push(t) : t && t
									.length && "string" !== C.type(t) && n(t)
							})
						}(arguments), t && !i && c()), this
					},
					remove: function() {
						return C.each(arguments, function(e, t) {
							for (var n; - 1 < (n = C.inArray(t, s, n));) s.splice(n, 1), n <= l && l--
						}), this
					},
					has: function(e) {
						return e ? -1 < C.inArray(e, s) : 0 < s.length
					},
					empty: function() {
						return s = s && [], this
					},
					disable: function() {
						return a = u = [], s = t = "", this
					},
					disabled: function() {
						return !s
					},
					lock: function() {
						return a = !0, t || f.disable(), this
					},
					locked: function() {
						return !!a
					},
					fireWith: function(e, t) {
						return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
					},
					fire: function() {
						return f.fireWith(this, arguments), this
					},
					fired: function() {
						return !!o
					}
				};
			return f
		}, C.extend({
			Deferred: function(e) {
				var o = [
						["resolve", "done", C.Callbacks("once memory"), "resolved"],
						["reject", "fail", C.Callbacks("once memory"), "rejected"],
						["notify", "progress", C.Callbacks("memory")]
					],
					i = "pending",
					a = {
						state: function() {
							return i
						},
						always: function() {
							return s.done(arguments).fail(arguments), this
						},
						then: function() {
							var i = arguments;
							return C.Deferred(function(r) {
								C.each(o, function(e, t) {
									var n = C.isFunction(i[e]) && i[e];
									s[t[1]](function() {
										var e = n && n.apply(this, arguments);
										e && C.isFunction(e.promise) ? e
											.promise().progress(r.notify).done(r
												.resolve).fail(r.reject) : r[t[
												0] + "With"](this === a ? r
												.promise() : this, n ? [e] :
												arguments)
									})
								}), i = null
							}).promise()
						},
						promise: function(e) {
							return null != e ? C.extend(e, a) : a
						}
					},
					s = {};
				return a.pipe = a.then, C.each(o, function(e, t) {
					var n = t[2],
						r = t[3];
					a[t[1]] = n.add, r && n.add(function() {
						i = r
					}, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() {
						return s[t[0] + "With"](this === s ? a : this, arguments), this
					}, s[t[0] + "With"] = n.fireWith
				}), a.promise(s), e && e.call(s, s), s
			},
			when: function(e) {
				var i, t, n, r = 0,
					o = c.call(arguments),
					a = o.length,
					s = 1 !== a || e && C.isFunction(e.promise) ? a : 0,
					u = 1 === s ? e : C.Deferred(),
					l = function(t, n, r) {
						return function(e) {
							n[t] = this, r[t] = 1 < arguments.length ? c.call(arguments) : e, r === i ?
								u.notifyWith(n, r) : --s || u.resolveWith(n, r)
						}
					};
				if (1 < a)
					for (i = new Array(a), t = new Array(a), n = new Array(a); r < a; r++) o[r] && C
						.isFunction(o[r].promise) ? o[r].promise().progress(l(r, t, i)).done(l(r, n, o))
						.fail(u.reject) : --s;
				return s || u.resolveWith(n, o), u.promise()
			}
		}), C.fn.ready = function(e) {
			return C.ready.promise().done(e), this
		}, C.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function(e) {
				e ? C.readyWait++ : C.ready(!0)
			},
			ready: function(e) {
				(!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || (re
					.resolveWith(g, [C]), C.fn.triggerHandler && (C(g).triggerHandler("ready"), C(g)
						.off("ready")))
			}
		}), C.ready.promise = function(e) {
			if (!re)
				if (re = C.Deferred(), "complete" === g.readyState || "loading" !== g.readyState && !g
					.documentElement.doScroll) T.setTimeout(C.ready);
				else if (g.addEventListener) g.addEventListener("DOMContentLoaded", i), T.addEventListener("load",
				i);
			else {
				g.attachEvent("onreadystatechange", i), T.attachEvent("onload", i);
				var t = !1;
				try {
					t = null == T.frameElement && g.documentElement
				} catch (n) {}
				t && t.doScroll && ! function r() {
					if (!C.isReady) {
						try {
							t.doScroll("left")
						} catch (n) {
							return T.setTimeout(r, 50)
						}
						oe(), C.ready()
					}
				}()
			}
			return re.promise(e)
		}, C.ready.promise(), C(y)) break;
	y.ownFirst = "0" === ie, y.inlineBlockNeedsLayout = !1, C(function() {
		var e, t, n = g.getElementsByTagName("body")[0];
		n && n.style && (e = g.createElement("div"), (t = g.createElement("div")).style.cssText =
			"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(t)
			.appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText =
				"display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", y
				.inlineBlockNeedsLayout = e = 3 === e.offsetWidth, e && (n.style.zoom = 1)), n
			.removeChild(t))
	});
	e = g.createElement("div");
	y.deleteExpando = !0;
	try {
		delete e.test
	} catch (yn) {
		y.deleteExpando = !1
	}
	var o, v = function(e) {
			var t = C.noData[(e.nodeName + " ").toLowerCase()],
				n = +e.nodeType || 1;
			return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
		},
		ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		se = /([A-Z])/g;

	function ue(e, t, n) {
		if (n === undefined && 1 === e.nodeType) {
			var r = "data-" + t.replace(se, "-$1").toLowerCase();
			if ("string" == typeof(n = e.getAttribute(r))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ae.test(n) ? C
						.parseJSON(n) : n)
				} catch (i) {}
				C.data(e, t, n)
			} else n = undefined
		}
		return n
	}

	function le(e) {
		for (var t in e)
			if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return;
		return 1
	}

	function ce(e, t, n, r) {
		if (v(e)) {
			var i, o = C.expando,
				a = e.nodeType,
				s = a ? C.cache : e,
				u = a ? e[o] : e[o] && o;
			if (u && s[u] && (r || s[u].data) || n !== undefined || "string" != typeof t) return s[u = u || (a ? e[
					o] = f.pop() || C.guid++ : o)] || (s[u] = a ? {} : {
					toJSON: C.noop
				}), "object" != typeof t && "function" != typeof t || (r ? s[u] = C.extend(s[u], t) : s[u]
					.data = C.extend(s[u].data, t)), e = s[u], r || (e.data || (e.data = {}), e = e.data), n !==
				undefined && (e[C.camelCase(t)] = n), "string" == typeof t ? null == (i = e[t]) && (i = e[C
					.camelCase(t)]) : i = e, i
		}
	}

	function fe(e, t, n) {
		if (v(e)) {
			var r, i, o = e.nodeType,
				a = o ? C.cache : e,
				s = o ? e[C.expando] : C.expando;
			if (a[s]) {
				if (t && (r = n ? a[s] : a[s].data)) {
					i = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in r || (t = C.camelCase(t)) in r ?
						[t] : t.split(" ")).length;
					for (; i--;) delete r[t[i]];
					if (n ? !le(r) : !C.isEmptyObject(r)) return
				}(n || (delete a[s].data, le(a[s]))) && (o ? C.cleanData([e], !0) : y.deleteExpando || a != a
					.window ? delete a[s] : a[s] = undefined)
			}
		}
	}
	C.extend({
		cache: {},
		noData: {
			"applet ": !0,
			"embed ": !0,
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
		hasData: function(e) {
			return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !le(e)
		},
		data: function(e, t, n) {
			return ce(e, t, n)
		},
		removeData: function(e, t) {
			return fe(e, t)
		},
		_data: function(e, t, n) {
			return ce(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return fe(e, t, !0)
		}
	}), C.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (e !== undefined) return "object" == typeof e ? this.each(function() {
				C.data(this, e)
			}) : 1 < arguments.length ? this.each(function() {
				C.data(this, e, t)
			}) : o ? ue(o, e, C.data(o, e)) : undefined;
			if (this.length && (i = C.data(o), 1 === o.nodeType && !C._data(o, "parsedAttrs"))) {
				for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && ue(o, r = C
					.camelCase(r.slice(5)), i[r]);
				C._data(o, "parsedAttrs", !0)
			}
			return i
		},
		removeData: function(e) {
			return this.each(function() {
				C.removeData(this, e)
			})
		}
	}), C.extend({
		queue: function(e, t, n) {
			var r;
			if (e) return r = C._data(e, t = (t || "fx") + "queue"), n && (!r || C.isArray(n) ? r = C
				._data(e, t, C.makeArray(n)) : r.push(n)), r || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = C.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = C._queueHooks(e, t);
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"),
				delete o.stop, i.call(e, function() {
					C.dequeue(e, t)
				}, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return C._data(e, n) || C._data(e, n, {
				empty: C.Callbacks("once memory").add(function() {
					C._removeData(e, t + "queue"), C._removeData(e, n)
				})
			})
		}
	}), C.fn.extend({
		queue: function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[
				0], t) : n === undefined ? this : this.each(function() {
				var e = C.queue(this, t, n);
				C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this,
					t)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				C.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = C.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = C._data(o[a],
				e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	}), y.shrinkWrapBlocks = function() {
		return null != o ? o : (o = !1, (t = g.getElementsByTagName("body")[0]) && t.style ? (e = g
			.createElement("div"), (n = g.createElement("div")).style.cssText =
			"position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n)
			.appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
				e.appendChild(g.createElement("div")).style.width = "5px", o = 3 !== e.offsetWidth), t
			.removeChild(n), o) : void 0);
		var e, t, n
	};
	var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		de = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
		s = ["Top", "Right", "Bottom", "Left"],
		pe = function(e, t) {
			return "none" === C.css(e = t || e, "display") || !C.contains(e.ownerDocument, e)
		};

	function he(e, t, n, r) {
		var i, o = 1,
			a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return C.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
			c = (C.cssNumber[t] || "px" !== l && +u) && de.exec(C.css(e, t));
		if (c && c[3] !== l)
			for (l = l || c[3], n = n || [], c = +u || 1; c /= o = o || ".5", C.style(e, t, c + l), o !== (o = s() /
					u) && 1 !== o && --a;);
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r
			.end = i)), i
	}
	var d = function(e, t, n, r, i, o, a) {
			var s = 0,
				u = e.length,
				l = null == n;
			if ("object" === C.type(n))
				for (s in i = !0, n) d(e, t, s, n[s], !0, o, a);
			else if (r !== undefined && (i = !0, C.isFunction(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (
					l = t,
					function(e, t, n) {
						return l.call(C(e), n)
					}) : t))
				for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		ge = /^(?:checkbox|radio)$/i,
		me = /<([\w:-]+)/,
		ye = /^$|\/(?:java|ecma)script/i,
		ve = /^\s+/,
		xe =
		"abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

	function be(e) {
		var t = xe.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement)
			for (; t.length;) n.createElement(t.pop());
		return n
	}
	S = g.createElement("div"), k = g.createDocumentFragment(), q = g.createElement("input"), S.innerHTML =
		"  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", y.leadingWhitespace = 3 === S
		.firstChild.nodeType, y.tbody = !S.getElementsByTagName("tbody").length, y.htmlSerialize = !!S
		.getElementsByTagName("link").length, y.html5Clone = "<:nav></:nav>" !== g.createElement("nav").cloneNode(!
			0).outerHTML, q.type = "checkbox", q.checked = !0, k.appendChild(q), y.appendChecked = q.checked, S
		.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!S.cloneNode(!0).lastChild.defaultValue, k
		.appendChild(S), (q = g.createElement("input")).setAttribute("type", "radio"), q.setAttribute("checked",
			"checked"), q.setAttribute("name", "t"), S.appendChild(q), y.checkClone = S.cloneNode(!0).cloneNode(!0)
		.lastChild.checked, y.noCloneEvent = !!S.addEventListener, S[C.expando] = 1, y.attributes = !S.getAttribute(
			C.expando);
	var x = {
		option: [1, "<select multiple='multiple'>", "</select>"],
		legend: [1, "<fieldset>", "</fieldset>"],
		area: [1, "<map>", "</map>"],
		param: [1, "<object>", "</object>"],
		thead: [1, "<table>", "</table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: y.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
	};

	function b(e, t) {
		var n, r, i = 0,
			o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !=
			typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : undefined;
		if (!o)
			for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || C.nodeName(r, t) ? o.push(r) : C
				.merge(o, b(r, t));
		return t === undefined || t && C.nodeName(e, t) ? C.merge([e], o) : o
	}

	function we(e, t) {
		for (var n, r = 0; null != (n = e[r]); r++) C._data(n, "globalEval", !t || C._data(t[r], "globalEval"))
	}
	x.optgroup = x.option, x.tbody = x.tfoot = x.colgroup = x.caption = x.thead, x.th = x.td;
	var Te = /<|&#?\w+;/,
		Ce = /<tbody/i;

	function Ee(e) {
		ge.test(e.type) && (e.defaultChecked = e.checked)
	}

	function Ne(e, t, n, r, i) {
		for (var o, a, s, u, l, c, f, d = e.length, p = be(t), h = [], g = 0; g < d; g++)
			if ((a = e[g]) || 0 === a)
				if ("object" === C.type(a)) C.merge(h, a.nodeType ? [a] : a);
				else if (Te.test(a)) {
			for (u = u || p.appendChild(t.createElement("div")), l = (me.exec(a) || ["", ""])[1].toLowerCase(), f =
				x[l] || x._default, u.innerHTML = f[1] + C.htmlPrefilter(a) + f[2], o = f[0]; o--;) u = u.lastChild;
			if (!y.leadingWhitespace && ve.test(a) && h.push(t.createTextNode(ve.exec(a)[0])), !y.tbody)
				for (o = (a = "table" !== l || Ce.test(a) ? "<table>" !== f[1] || Ce.test(a) ? 0 : u : u
					.firstChild) && a.childNodes.length; o--;) C.nodeName(c = a.childNodes[o], "tbody") && !c
					.childNodes.length && a.removeChild(c);
			for (C.merge(h, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
			u = p.lastChild
		} else h.push(t.createTextNode(a));
		for (u && p.removeChild(u), y.appendChecked || C.grep(b(h, "input"), Ee), g = 0; a = h[g++];)
			if (r && -1 < C.inArray(a, r)) i && i.push(a);
			else if (s = C.contains(a.ownerDocument, a), u = b(p.appendChild(a), "script"), s && we(u), n)
			for (o = 0; a = u[o++];) ye.test(a.type || "") && n.push(a);
		return u = null, p
	}
	var ke, Se, Ae = g.createElement("div");
	for (ke in {
			submit: !0,
			change: !0,
			focusin: !0
		})(y[ke] = (Se = "on" + ke) in T) || (Ae.setAttribute(Se, "t"), y[ke] = !1 === Ae.attributes[Se].expando);
	var De = /^(?:input|select|textarea)$/i,
		je = /^key/,
		Le = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		He = /^(?:focusinfocus|focusoutblur)$/,
		qe = /^([^.]*)(?:\.(.+)|)/;

	function _e() {
		return !0
	}

	function u() {
		return !1
	}

	function Fe() {
		try {
			return g.activeElement
		} catch (e) {}
	}

	function Me(e, t, n, r, i, o) {
		var a, s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (r = r || n, n = undefined), t) Me(e, s, n, r, t[s], o);
			return e
		}
		if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r =
				undefined) : (i = r, r = n, n = undefined)), !1 === i) i = u;
		else if (!i) return e;
		return 1 === o && (a = i, (i = function(e) {
			return C().off(e), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
			C.event.add(this, t, i, r, n)
		})
	}
	C.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, d, p, h = C._data(e);
			if (h)
				for (n.handler && (n = (s = n).handler, i = s.selector), n.guid || (n.guid = C.guid++), (o =
						h.events) || (o = h.events = {}), (l = h.handle) || ((l = h.handle = function(e) {
						return void 0 === C || e && C.event.triggered === e.type ? undefined : C
							.event.dispatch.apply(l.elem, arguments)
					}).elem = e), a = (t = (t || "").match(E) || [""]).length; a--;) f = p = (d = qe.exec(t[
					a]) || [])[1], d = (d[2] || "").split(".").sort(), f && (u = C.event.special[f] ||
					{}, f = (i ? u.delegateType : u.bindType) || f, u = C.event.special[f] || {}, p = C
					.extend({
						type: f,
						origType: p,
						data: r,
						handler: n,
						guid: n.guid,
						selector: i,
						needsContext: i && C.expr.match.needsContext.test(i),
						namespace: d.join(".")
					}, s), (c = o[f]) || ((c = o[f] = []).delegateCount = 0, u.setup && !1 !== u.setup
						.call(e, r, d, l) || (e.addEventListener ? e.addEventListener(f, l, !1) : e
							.attachEvent && e.attachEvent("on" + f, l))), u.add && (u.add.call(e, p), p
						.handler.guid || (p.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0,
						p) : c.push(p), C.event.global[f] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, d, p, h, g, m = C.hasData(e) && C._data(e);
			if (m && (c = m.events)) {
				for (l = (t = (t || "").match(E) || [""]).length; l--;)
					if (p = g = (s = qe.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
						for (f = C.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) ||
							p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") +
								"(\\.|$)"), u = o = d.length; o--;) a = d[o], !i && g !== a.origType || n &&
							n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && (
								"**" !== r || !a.selector) || (d.splice(o, 1), a.selector && d
								.delegateCount--, f.remove && f.remove.call(e, a));
						u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C
							.removeEvent(e, p, m.handle), delete c[p])
					} else
						for (p in c) C.event.remove(e, p + t[l], n, r, !0);
				C.isEmptyObject(c) && (delete m.handle, C._removeData(e, "events"))
			}
		},
		trigger: function(e, t, n, r) {
			var i, o, a, s, u, l, c = [n || g],
				f = m.call(e, "type") ? e.type : e,
				d = m.call(e, "namespace") ? e.namespace.split(".") : [],
				p = u = n = n || g;
			if (3 !== n.nodeType && 8 !== n.nodeType && !He.test(f + C.event.triggered) && (-1 < f.indexOf(
						".") && (f = (d = f.split(".")).shift(), d.sort()), o = f.indexOf(":") < 0 && "on" +
					f, (e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = r ?
					2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d
						.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e
						.target = n), t = null == t ? [e] : C.makeArray(t, [e]), s = C.event.special[f] ||
					{}, r || !s.trigger || !1 !== s.trigger.apply(n, t))) {
				if (!r && !s.noBubble && !C.isWindow(n)) {
					for (a = s.delegateType || f, He.test(a + f) || (p = p.parentNode); p; p = p.parentNode)
						c.push(p), u = p;
					u === (n.ownerDocument || g) && c.push(u.defaultView || u.parentWindow || T)
				}
				for (l = 0;
					(p = c[l++]) && !e.isPropagationStopped();) e.type = 1 < l ? a : s.bindType || f, (i = (
					C._data(p, "events") || {})[e.type] && C._data(p, "handle")) && i.apply(p, t), (i =
					o && p[o]) && i.apply && v(p) && (e.result = i.apply(p, t), !1 === e.result && e
					.preventDefault());
				if (e.type = f, !r && !e.isDefaultPrevented() && (!s._default || !1 === s._default.apply(c
						.pop(), t)) && v(n) && o && n[f] && !C.isWindow(n)) {
					(u = n[o]) && (n[o] = null), C.event.triggered = f;
					try {
						n[f]()
					} catch (h) {}
					C.event.triggered = undefined, u && (n[o] = u)
				}
				return e.result
			}
		},
		dispatch: function(e) {
			e = C.event.fix(e);
			var t, n, r, i, o, a = c.call(arguments),
				s = (C._data(this, "events") || {})[e.type] || [],
				u = C.event.special[e.type] || {};
			if ((a[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
				for (o = C.event.handlers.call(this, e, s), t = 0;
					(r = o[t++]) && !e.isPropagationStopped();)
					for (e.currentTarget = r.elem, n = 0;
						(i = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e
						.rnamespace.test(i.namespace) || (e.handleObj = i, e.data = i.data, (i = ((C.event
								.special[i.origType] || {}).handle || i.handler).apply(r.elem, a)) !==
							undefined && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation())
							);
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
				for (; u != this; u = u.parentNode || this)
					if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
						for (r = [], n = 0; n < s; n++) r[i = (o = t[n]).selector + " "] === undefined && (
							r[i] = o.needsContext ? -1 < C(i, this).index(u) : C.find(i, this, null, [
								u]).length), r[i] && r.push(o);
						r.length && a.push({
							elem: u,
							handlers: r
						})
					} return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		fix: function(e) {
			if (e[C.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : je.test(i) ? this.keyHooks :
					{}), r = a.props ? this.props.concat(a.props) : this.props, e = new C.Event(o), t = r
				.length; t--;) e[n = r[t]] = o[n];
			return e.target || (e.target = o.srcElement || g), 3 === e.target.nodeType && (e.target = e
				.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
			.split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
				.split(" "),
			filter: function(e, t) {
				var n, r, i = t.button,
					o = t.fromElement;
				return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || g)
					.documentElement, n = n.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n
						.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t
					.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n
						.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ?
					t.toElement : o), e.which || i === undefined || (e.which = 1 & i ? 1 : 2 & i ? 3 :
					4 & i ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== Fe() && this.focus) try {
						return this.focus(), !1
					} catch (e) {}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === Fe() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if (C.nodeName(this, "input") && "checkbox" === this.type && this.click) return this
						.click(), !1
				},
				_default: function(e) {
					return C.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n) {
			e = C.extend(new C.Event, n, {
				type: e,
				isSimulated: !0
			});
			C.event.trigger(e, null, t), e.isDefaultPrevented() && n.preventDefault()
		}
	}, C.removeEvent = g.removeEventListener ? function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	} : function(e, t, n) {
		t = "on" + t;
		e.detachEvent && ("undefined" == typeof e[t] && (e[t] = null), e.detachEvent(t, n))
	}, C.Event = function(e, t) {
		if (!(this instanceof C.Event)) return new C.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e
				.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? _e : u) : this
			.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), this[C.expando] = !
			0
	}, C.Event.prototype = {
		constructor: C.Event,
		isDefaultPrevented: u,
		isPropagationStopped: u,
		isImmediatePropagationStopped: u,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = _e, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = _e, e && !this.isSimulated && (e.stopPropagation && e
				.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = _e, e && e.stopImmediatePropagation && e
				.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, i) {
		C.event.special[e] = {
			delegateType: i,
			bindType: i,
			handle: function(e) {
				var t, n = e.relatedTarget,
					r = e.handleObj;
				return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r
					.handler.apply(this, arguments), e.type = i), t
			}
		}
	}), y.submit || (C.event.special.submit = {
		setup: function() {
			if (C.nodeName(this, "form")) return !1;
			C.event.add(this, "click._submit keypress._submit", function(e) {
				e = e.target, e = C.nodeName(e, "input") || C.nodeName(e, "button") ? C.prop(e,
					"form") : undefined;
				e && !C._data(e, "submit") && (C.event.add(e, "submit._submit", function(e) {
					e._submitBubble = !0
				}), C._data(e, "submit", !0))
			})
		},
		postDispatch: function(e) {
			e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && C.event
				.simulate("submit", this.parentNode, e))
		},
		teardown: function() {
			if (C.nodeName(this, "form")) return !1;
			C.event.remove(this, "._submit")
		}
	}), y.change || (C.event.special.change = {
		setup: function() {
			if (De.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (C
				.event.add(this, "propertychange._change", function(e) {
					"checked" === e.originalEvent.propertyName && (this._justChanged = !0)
				}), C.event.add(this, "click._change", function(e) {
					this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event
						.simulate("change", this, e)
				})), !1;
			C.event.add(this, "beforeactivate._change", function(e) {
				e = e.target;
				De.test(e.nodeName) && !C._data(e, "change") && (C.event.add(e,
					"change._change",
					function(e) {
						!this.parentNode || e.isSimulated || e.isTrigger || C.event
							.simulate("change", this.parentNode, e)
					}), C._data(e, "change", !0))
			})
		},
		handle: function(e) {
			var t = e.target;
			if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t
				.type) return e.handleObj.handler.apply(this, arguments)
		},
		teardown: function() {
			return C.event.remove(this, "._change"), !De.test(this.nodeName)
		}
	}), y.focusin || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, r) {
		var i = function(e) {
			C.event.simulate(r, e.target, C.event.fix(e))
		};
		C.event.special[r] = {
			setup: function() {
				var e = this.ownerDocument || this,
					t = C._data(e, r);
				t || e.addEventListener(n, i, !0), C._data(e, r, (t || 0) + 1)
			},
			teardown: function() {
				var e = this.ownerDocument || this,
					t = C._data(e, r) - 1;
				t ? C._data(e, r, t) : (e.removeEventListener(n, i, !0), C._removeData(e, r))
			}
		}
	}), C.fn.extend({
		on: function(e, t, n, r) {
			return Me(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return Me(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r
					.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler
					), this;
			if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t =
				undefined), !1 === n && (n = u), this.each(function() {
				C.event.remove(this, e, n, t)
			});
			for (i in e) this.off(i, t, e[i]);
			return this
		},
		trigger: function(e, t) {
			return this.each(function() {
				C.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if (n) return C.event.trigger(e, t, n, !0)
		}
	});
	var Oe = / jQuery\d+="(?:null|\d+)"/g,
		Re = new RegExp("<(?:" + xe + ")[\\s/>]", "i"),
		Pe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Be = /<script|<style|<link/i,
		We = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ie = /^true\/(.*)/,
		$e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ze = be(g).appendChild(g.createElement("div"));

	function Xe(e, t) {
		return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e
			.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function Ue(e) {
		return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
	}

	function Ve(e) {
		var t = Ie.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function Ye(e, t) {
		if (1 === t.nodeType && C.hasData(e)) {
			var n, r, i, e = C._data(e),
				o = C._data(t, e),
				a = e.events;
			if (a)
				for (n in delete o.handle, o.events = {}, a)
					for (r = 0, i = a[n].length; r < i; r++) C.event.add(t, n, a[n][r]);
			o.data && (o.data = C.extend({}, o.data))
		}
	}

	function w(n, r, i, o) {
		r = O.apply([], r);
		var e, t, a, s, u, l, c = 0,
			f = n.length,
			d = f - 1,
			p = r[0],
			h = C.isFunction(p);
		if (h || 1 < f && "string" == typeof p && !y.checkClone && We.test(p)) return n.each(function(e) {
			var t = n.eq(e);
			h && (r[0] = p.call(this, e, t.html())), w(t, r, i, o)
		});
		if (f && (e = (l = Ne(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === l.childNodes.length && (l = e),
				e || o)) {
			for (a = (s = C.map(b(l, "script"), Ue)).length; c < f; c++) t = l, c !== d && (t = C.clone(t, !0, !0),
				a && C.merge(s, b(t, "script"))), i.call(n[c], t, c);
			if (a)
				for (u = s[s.length - 1].ownerDocument, C.map(s, Ve), c = 0; c < a; c++) t = s[c], ye.test(t.type ||
					"") && !C._data(t, "globalEval") && C.contains(u, t) && (t.src ? C._evalUrl && C._evalUrl(t
					.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace($e, "")));
			l = e = null
		}
		return n
	}

	function Je(e, t, n) {
		for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || C
			.cleanData(b(r)), r.parentNode && (n && C.contains(r.ownerDocument, r) && we(b(r, "script")), r
				.parentNode.removeChild(r));
		return e
	}
	C.extend({
		htmlPrefilter: function(e) {
			return e.replace(Pe, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var r, i, o, a, s, u = C.contains(e.ownerDocument, e);
			if (y.html5Clone || C.isXMLDoc(e) || !Re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!
				0) : (ze.innerHTML = e.outerHTML, ze.removeChild(o = ze.firstChild)), !(y
					.noCloneEvent && y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C
					.isXMLDoc(e)))
				for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a)
					if (r[a]) {
						f = c = l = p = d = void 0;
						var l, c, f, d = i,
							p = r[a];
						if (1 === p.nodeType) {
							if (l = p.nodeName.toLowerCase(), !y.noCloneEvent && p[C.expando]) {
								for (c in (f = C._data(p)).events) C.removeEvent(p, c, f.handle);
								p.removeAttribute(C.expando)
							}
							"script" === l && p.text !== d.text ? (Ue(p).text = d.text, Ve(p)) :
								"object" === l ? (p.parentNode && (p.outerHTML = d.outerHTML), y
									.html5Clone && d.innerHTML && !C.trim(p.innerHTML) && (p.innerHTML =
										d.innerHTML)) : "input" === l && ge.test(d.type) ? (p
									.defaultChecked = p.checked = d.checked, p.value !== d.value && (p
										.value = d.value)) : "option" === l ? p.defaultSelected = p
								.selected = d.defaultSelected : "input" !== l && "textarea" !== l || (p
									.defaultValue = d.defaultValue)
						}
					} if (t)
				if (n)
					for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++) Ye(i, r[a]);
				else Ye(e, o);
			return 0 < (r = b(o, "script")).length && we(r, !u && b(e, "script")), r = s = i = null, o
		},
		cleanData: function(e, t) {
			for (var n, r, i, o, a = 0, s = C.expando, u = C.cache, l = y.attributes, c = C.event
					.special; null != (n = e[a]); a++)
				if ((t || v(n)) && (o = (i = n[s]) && u[i])) {
					if (o.events)
						for (r in o.events) c[r] ? C.event.remove(n, r) : C.removeEvent(n, r, o.handle);
					u[i] && (delete u[i], l || "undefined" == typeof n.removeAttribute ? n[s] =
						undefined : n.removeAttribute(s), f.push(i))
				}
		}
	}), C.fn.extend({
		domManip: w,
		detach: function(e) {
			return Je(this, e, !0)
		},
		remove: function(e) {
			return Je(this, e)
		},
		text: function(e) {
			return d(this, function(e) {
				return e === undefined ? C.text(this) : this.empty().append((this[0] && this[0]
					.ownerDocument || g).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return w(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Xe(this,
					e).appendChild(e)
			})
		},
		prepend: function() {
			return w(this, arguments, function(e) {
				var t;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Xe(
					this, e)).insertBefore(e, t.firstChild)
			})
		},
		before: function() {
			return w(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return w(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) {
				for (1 === e.nodeType && C.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e
					.firstChild);
				e.options && C.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return C.clone(this, e, t)
			})
		},
		html: function(e) {
			return d(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (e === undefined) return 1 === t.nodeType ? t.innerHTML.replace(Oe, "") :
					undefined;
				if ("string" == typeof e && !Be.test(e) && (y.htmlSerialize || !Re.test(e)) && (
						y.leadingWhitespace || !ve.test(e)) && !x[(me.exec(e) || ["", ""])[1]
						.toLowerCase()]) {
					e = C.htmlPrefilter(e);
					try {
						for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(b(
							t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return w(this, arguments, function(e) {
				var t = this.parentNode;
				C.inArray(this, n) < 0 && (C.cleanData(b(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, a) {
		C.fn[e] = function(e) {
			for (var t, n = 0, r = [], i = C(e), o = i.length - 1; n <= o; n++) t = n === o ? this :
				this.clone(!0), C(i[n])[a](t), R.apply(r, t.get());
			return this.pushStack(r)
		}
	});
	var Ge, Ke = {
		HTML: "block",
		BODY: "block"
	};

	function Qe(e, t) {
		e = C(t.createElement(e)).appendTo(t.body), t = C.css(e[0], "display");
		return e.detach(), t
	}

	function Ze(e) {
		var t = g,
			n = Ke[e];
		return n || ("none" !== (n = Qe(e, t)) && n || ((t = ((Ge = (Ge || C(
					"<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0]
				.contentWindow || Ge[0].contentDocument).document).write(), t.close(), n = Qe(e, t), Ge
			.detach()), Ke[e] = n), n
	}
	var n, et, tt, nt, rt, it, ot, a, at = /^margin/,
		st = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
		ut = function(e, t, n, r) {
			var i, o = {};
			for (i in t) o[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.apply(e, r || []), t) e.style[i] = o[i];
			return r
		},
		lt = g.documentElement;

	function t() {
		var e, t = g.documentElement;
		t.appendChild(ot), a.style.cssText =
			"-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
			n = tt = it = !1, et = rt = !0, T.getComputedStyle && (e = T.getComputedStyle(a), n = "1%" !== (e || {})
				.top, it = "2px" === (e || {}).marginLeft, tt = "4px" === (e || {
					width: "4px"
				}).width, a.style.marginRight = "50%", et = "4px" === (e || {
					marginRight: "4px"
				}).marginRight, (e = a.appendChild(g.createElement("div"))).style.cssText = a.style.cssText =
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
				e.style.marginRight = e.style.width = "0", a.style.width = "1px", rt = !parseFloat((T
					.getComputedStyle(e) || {}).marginRight), a.removeChild(e)), a.style.display = "none", (nt =
				0 === a.getClientRects().length) && (a.style.display = "", a.innerHTML =
				"<table><tr><td></td><td>t</td></tr></table>", a.childNodes[0].style.borderCollapse = "separate", (
					e = a.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none",
				(nt = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", nt = 0 ===
					e[0].offsetHeight)), t.removeChild(ot)
	}
	ot = g.createElement("div"), (a = g.createElement("div")).style && (a.style.cssText = "float:left;opacity:.5", y
		.opacity = "0.5" === a.style.opacity, y.cssFloat = !!a.style.cssFloat, a.style.backgroundClip =
		"content-box", a.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === a.style
		.backgroundClip, (ot = g.createElement("div")).style.cssText =
		"border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a
		.innerHTML = "", ot.appendChild(a), y.boxSizing = "" === a.style.boxSizing || "" === a.style
		.MozBoxSizing || "" === a.style.WebkitBoxSizing, C.extend(y, {
			reliableHiddenOffsets: function() {
				return null == n && t(), nt
			},
			boxSizingReliable: function() {
				return null == n && t(), tt
			},
			pixelMarginRight: function() {
				return null == n && t(), et
			},
			pixelPosition: function() {
				return null == n && t(), n
			},
			reliableMarginRight: function() {
				return null == n && t(), rt
			},
			reliableMarginLeft: function() {
				return null == n && t(), it
			}
		}));
	var l, p, ct = /^(top|right|bottom|left)$/;

	function ft(e, t) {
		return {
			get: function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	T.getComputedStyle ? (l = function(e) {
		var t = e.ownerDocument.defaultView;
		return (t = t && t.opener ? t : T).getComputedStyle(e)
	}, p = function(e, t, n) {
		var r, i, o = e.style;
		return "" !== (i = (n = n || l(e)) ? n.getPropertyValue(t) || n[t] : undefined) && i !==
			undefined || C.contains(e.ownerDocument, e) || (i = C.style(e, t)), n && !y
		.pixelMarginRight() && st.test(i) && at.test(t) && (e = o.width, t = o.minWidth, r = o.maxWidth, o
				.minWidth = o.maxWidth = o.width = i, i = n.width, o.width = e, o.minWidth = t, o.maxWidth =
				r), i === undefined ? i : i + ""
	}) : lt.currentStyle && (l = function(e) {
		return e.currentStyle
	}, p = function(e, t, n) {
		var r, i, o, a = e.style;
		return null == (n = (n = n || l(e)) ? n[t] : undefined) && a && a[t] && (n = a[t]), st.test(n) && !
			ct.test(t) && (r = a.left, (o = (i = e.runtimeStyle) && i.left) && (i.left = e.currentStyle
					.left), a.left = "fontSize" === t ? "1em" : n, n = a.pixelLeft + "px", a.left = r, o &&
				(i.left = o)), n === undefined ? n : n + "" || "auto"
	});
	var dt = /alpha\([^)]*\)/i,
		pt = /opacity\s*=\s*([^)]*)/i,
		ht = /^(none|table(?!-c[ea]).+)/,
		gt = new RegExp("^(" + e + ")(.*)$", "i"),
		mt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		yt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		vt = ["Webkit", "O", "Moz", "ms"],
		xt = g.createElement("div").style;

	function bt(e) {
		if (e in xt) return e;
		for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = vt.length; n--;)
			if ((e = vt[n] + t) in xt) return e
	}

	function wt(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++)(r = e[a]).style && (o[a] = C._data(r,
			"olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" ===
			r.style.display && pe(r) && (o[a] = C._data(r, "olddisplay", Ze(r.nodeName)))) : (i = pe(r), (
			n && "none" !== n || !i) && C._data(r, "olddisplay", i ? n : C.css(r, "display"))));
		for (a = 0; a < s; a++) !(r = e[a]).style || t && "none" !== r.style.display && "" !== r.style.display || (r
			.style.display = t ? o[a] || "" : "none");
		return e
	}

	function Tt(e, t, n) {
		var r = gt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function Ct(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
			"margin" === n && (a += C.css(e, n + s[o], !0, i)), r ? ("content" === n && (a -= C.css(e, "padding" +
				s[o], !0, i)), "margin" !== n && (a -= C.css(e, "border" + s[o] + "Width", !0, i))) : (a += C.css(e,
				"padding" + s[o], !0, i), "padding" !== n && (a += C.css(e, "border" + s[o] + "Width", !0, i)));
		return a
	}

	function Et(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = l(e),
			a = y.boxSizing && "border-box" === C.css(e, "boxSizing", !1, o);
		if (i <= 0 || null == i) {
			if (((i = p(e, t, o)) < 0 || null == i) && (i = e.style[t]), st.test(i)) return i;
			r = a && (y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + Ct(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}

	function h(e, t, n, r, i) {
		return new h.prototype.init(e, t, n, r, i)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) return "" === (t = p(e, "opacity")) ? "1" : t
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": y.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = C.camelCase(t),
					u = e.style;
				if (t = C.cssProps[s] || (C.cssProps[s] = bt(s) || s), a = C.cssHooks[t] || C.cssHooks[
						s], n === undefined) return a && "get" in a && (i = a.get(e, !1, r)) !==
					undefined ? i : u[t];
				if ("string" === (o = typeof n) && (i = de.exec(n)) && i[1] && (n = he(e, t, i), o =
						"number"), null != n && n == n && ("number" === o && (n += i && i[3] || (C
							.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t
						.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && (n = a.set(e,
							n, r)) === undefined))) try {
					u[t] = n
				} catch (l) {}
			}
		},
		css: function(e, t, n, r) {
			var i, o = C.camelCase(t);
			return t = C.cssProps[o] || (C.cssProps[o] = bt(o) || o), "normal" === (i = (i = (o = C
					.cssHooks[t] || C.cssHooks[o]) && "get" in o ? o.get(e, !0, n) : i) ===
				undefined ? p(e, t, r) : i) && t in yt && (i = yt[t]), "" === n || n ? (o =
				parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
		}
	}), C.each(["height", "width"], function(e, i) {
		C.cssHooks[i] = {
			get: function(e, t, n) {
				if (t) return ht.test(C.css(e, "display")) && 0 === e.offsetWidth ? ut(e, mt,
					function() {
						return Et(e, i, n)
					}) : Et(e, i, n)
			},
			set: function(e, t, n) {
				var r = n && l(e);
				return Tt(0, t, n ? Ct(e, i, n, y.boxSizing && "border-box" === C.css(e,
					"boxSizing", !1, r), r) : 0)
			}
		}
	}), y.opacity || (C.cssHooks.opacity = {
		get: function(e, t) {
			return pt.test((t && e.currentStyle ? e.currentStyle : e.style).filter || "") ? .01 *
				parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				e = e.currentStyle,
				r = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				i = e && e.filter || n.filter || "";
			((n.zoom = 1) <= t || "" === t) && "" === C.trim(i.replace(dt, "")) && n.removeAttribute &&
				(n.removeAttribute("filter"), "" === t || e && !e.filter) || (n.filter = dt.test(i) ? i
					.replace(dt, r) : i + " " + r)
		}
	}), C.cssHooks.marginRight = ft(y.reliableMarginRight, function(e, t) {
		if (t) return ut(e, {
			display: "inline-block"
		}, p, [e, "marginRight"])
	}), C.cssHooks.marginLeft = ft(y.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat(p(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e
			.getBoundingClientRect().left - ut(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			}) : 0)) + "px"
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(i, o) {
		C.cssHooks[i + o] = {
			expand: function(e) {
				for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
					n[i + s[t] + o] = r[t] || r[t - 2] || r[0];
				return n
			}
		}, at.test(i) || (C.cssHooks[i + o].set = Tt)
	}), C.fn.extend({
		css: function(e, t) {
			return d(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (C.isArray(t)) {
					for (r = l(e), i = t.length; a < i; a++) o[t[a]] = C.css(e, t[a], !1, r);
					return o
				}
				return n !== undefined ? C.style(e, t, n) : C.css(e, t)
			}, e, t, 1 < arguments.length)
		},
		show: function() {
			return wt(this, !0)
		},
		hide: function() {
			return wt(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				pe(this) ? C(this).show() : C(this).hide()
			})
		}
	}), ((C.Tween = h).prototype = {
		constructor: h,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || C.easing._default, this.options = t, this
				.start = this.now = this.cur(), this.end = r, this.unit = o || (C.cssNumber[n] ? "" :
					"px")
		},
		cur: function() {
			var e = h.propHooks[this.prop];
			return (e && e.get ? e : h.propHooks._default).get(this)
		},
		run: function(e) {
			var t, n = h.propHooks[this.prop];
			return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options
				.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this
				.end - this.start) * t + this.start, this.options.step && this.options.step.call(
				this.elem, this.now, this), (n && n.set ? n : h.propHooks._default).set(this), this
		}
	}).init.prototype = h.prototype, (h.propHooks = {
		_default: {
			get: function(e) {
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ?
					e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(e) {
				C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem
					.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C
					.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = h.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, C.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, C.fx = h.prototype.init, C.fx.step = {};
	var N, Nt, k, S, kt = /^(?:toggle|show|hide)$/,
		St = /queueHooks$/;

	function At() {
		return T.setTimeout(function() {
			N = undefined
		}), N = C.now()
	}

	function Dt(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = s[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function jt(e, t, n) {
		for (var r, i = (A.tweeners[t] || []).concat(A.tweeners["*"]), o = 0, a = i.length; o < a; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function A(i, e, t) {
		var n, o, r, a, s, u, l, c = 0,
			f = A.prefilters.length,
			d = C.Deferred().always(function() {
				delete p.elem
			}),
			p = function() {
				if (o) return !1;
				for (var e = N || At(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration ||
						0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
				return d.notifyWith(i, [h, t, e]), t < 1 && r ? e : (d.resolveWith(i, [h]), !1)
			},
			h = d.promise({
				elem: i,
				props: C.extend({}, e),
				opts: C.extend(!0, {
					specialEasing: {},
					easing: C.easing._default
				}, t),
				originalProperties: e,
				originalOptions: t,
				startTime: N || At(),
				duration: t.duration,
				tweens: [],
				createTween: function(e, t) {
					t = C.Tween(i, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
					return h.tweens.push(t), t
				},
				stop: function(e) {
					var t = 0,
						n = e ? h.tweens.length : 0;
					if (o) return this;
					for (o = !0; t < n; t++) h.tweens[t].run(1);
					return e ? (d.notifyWith(i, [h, 1, 0]), d.resolveWith(i, [h, e])) : d.rejectWith(i, [h,
						e
					]), this
				}
			}),
			g = h.props,
			m = g,
			y = h.opts.specialEasing;
		for (r in m)
			if (s = y[a = C.camelCase(r)], u = m[r], C.isArray(u) && (s = u[1], u = m[r] = u[0]), r !== a && (m[a] =
					u, delete m[r]), (l = C.cssHooks[a]) && "expand" in l)
				for (r in u = l.expand(u), delete m[a], u) r in m || (m[r] = u[r], y[r] = s);
			else y[a] = s;
		for (; c < f; c++)
			if (n = A.prefilters[c].call(h, i, g, h.opts)) return C.isFunction(n.stop) && (C._queueHooks(h.elem, h
				.opts.queue).stop = C.proxy(n.stop, n)), n;
		return C.map(g, jt, h), C.isFunction(h.opts.start) && h.opts.start.call(i, h), C.fx.timer(C.extend(p, {
			elem: i,
			anim: h,
			queue: h.opts.queue
		})), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts
			.always)
	}
	C.Animation = C.extend(A, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return he(n.elem, e, de.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				for (var n, r = 0, i = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(E)).length; r <
					i; r++) n = e[r], A.tweeners[n] = A.tweeners[n] || [], A.tweeners[n].unshift(t)
			},
			prefilters: [function(t, e, n) {
				var r, i, o, a, s, u, l, c = this,
					f = {},
					d = t.style,
					p = t.nodeType && pe(t),
					h = C._data(t, "fxshow");
				for (r in n.queue || (null == (s = C._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
						u = s.empty.fire, s.empty.fire = function() {
							s.unqueued || u()
						}), s.unqueued++, c.always(function() {
						c.always(function() {
							s.unqueued--, C.queue(t, "fx").length || s.empty.fire()
						})
					})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d
						.overflow, d.overflowX, d.overflowY
					], "inline" === ("none" === (l = C.css(t, "display")) ? C._data(t,
						"olddisplay") || Ze(t.nodeName) : l) && "none" === C.css(t, "float") && (y
						.inlineBlockNeedsLayout && "inline" !== Ze(t.nodeName) ? d.zoom = 1 : d
						.display = "inline-block")), n.overflow && (d.overflow = "hidden", y
						.shrinkWrapBlocks() || c.always(function() {
							d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n
								.overflow[2]
						})), e)
					if (i = e[r], kt.exec(i)) {
						if (delete e[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
							if ("show" !== i || !h || h[r] === undefined) continue;
							p = !0
						}
						f[r] = h && h[r] || C.style(t, r)
					} else l = undefined;
				if (C.isEmptyObject(f)) "inline" === ("none" === l ? Ze(t.nodeName) : l) && (d.display =
					l);
				else
					for (r in h ? "hidden" in h && (p = h.hidden) : h = C._data(t, "fxshow", {}), o && (
							h.hidden = !p), p ? C(t).show() : c.done(function() {
							C(t).hide()
						}), c.done(function() {
							for (var e in C._removeData(t, "fxshow"), f) C.style(t, e, f[e])
						}), f) a = jt(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a
						.start, a.start = "width" === r || "height" === r ? 1 : 0))
			}],
			prefilter: function(e, t) {
				t ? A.prefilters.unshift(e) : A.prefilters.push(e)
			}
		}), C.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? C.extend({}, e) : {
				complete: n || !n && t || C.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !C.isFunction(t) && t
			};
			return r.duration = C.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in C.fx
				.speeds ? C.fx.speeds[r.duration] : C.fx.speeds._default, null != r.queue && !0 !== r.queue || (r
					.queue = "fx"), r.old = r.complete, r.complete = function() {
					C.isFunction(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
				}, r
		}, C.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(pe).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(t, e, n, r) {
				var i = C.isEmptyObject(t),
					o = C.speed(e, n, r),
					e = function() {
						var e = A(this, C.extend({}, t), o);
						(i || C._data(this, "finish")) && e.stop(!0)
					};
				return e.finish = e, i || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
			},
			stop: function(i, e, o) {
				var a = function(e) {
					var t = e.stop;
					delete e.stop, t(o)
				};
				return "string" != typeof i && (o = e, e = i, i = undefined), e && !1 !== i && this.queue(
					i || "fx", []), this.each(function() {
					var e = !0,
						t = null != i && i + "queueHooks",
						n = C.timers,
						r = C._data(this);
					if (t) r[t] && r[t].stop && a(r[t]);
					else
						for (t in r) r[t] && r[t].stop && St.test(t) && a(r[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i ||
						(n[t].anim.stop(o), e = !1, n.splice(t, 1));
					!e && o || C.dequeue(this, i)
				})
			},
			finish: function(a) {
				return !1 !== a && (a = a || "fx"), this.each(function() {
					var e, t = C._data(this),
						n = t[a + "queue"],
						r = t[a + "queueHooks"],
						i = C.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0),
						e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim
						.stop(!0), i.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
			}
		}), C.each(["toggle", "show", "hide"], function(e, r) {
			var i = C.fn[r];
			C.fn[r] = function(e, t, n) {
				return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Dt(r, !
					0), e, t, n)
			}
		}), C.each({
			slideDown: Dt("show"),
			slideUp: Dt("hide"),
			slideToggle: Dt("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, r) {
			C.fn[e] = function(e, t, n) {
				return this.animate(r, e, t, n)
			}
		}), C.timers = [], C.fx.tick = function() {
			var e, t = C.timers,
				n = 0;
			for (N = C.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
			t.length || C.fx.stop(), N = undefined
		}, C.fx.timer = function(e) {
			C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
		}, C.fx.interval = 13, C.fx.start = function() {
			Nt = Nt || T.setInterval(C.fx.tick, C.fx.interval)
		}, C.fx.stop = function() {
			T.clearInterval(Nt), Nt = null
		}, C.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, C.fn.delay = function(r, e) {
			return r = C.fx && C.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
				var n = T.setTimeout(e, r);
				t.stop = function() {
					T.clearTimeout(n)
				}
			})
		}, k = g.createElement("input"), q = g.createElement("div"), S = g.createElement("select"), e = S
		.appendChild(g.createElement("option")), (q = g.createElement("div")).setAttribute("className", "t"), q
		.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", F = q
		.getElementsByTagName("a")[0], k.setAttribute("type", "checkbox"), q.appendChild(k), (F = q
			.getElementsByTagName("a")[0]).style.cssText = "top:1px", y.getSetAttribute = "t" !== q.className, y
		.style = /top/.test(F.getAttribute("style")), y.hrefNormalized = "/a" === F.getAttribute("href"), y
		.checkOn = !!k.value, y.optSelected = e.selected, y.enctype = !!g.createElement("form").enctype, S
		.disabled = !0, y.optDisabled = !e.disabled, (k = g.createElement("input")).setAttribute("value", ""), y
		.input = "" === k.getAttribute("value"), k.value = "t", k.setAttribute("type", "radio"), y.radioValue =
		"t" === k.value;
	var Lt = /\r/g,
		Ht = /[\x20\t\r\n\f]+/g;
	C.fn.extend({
		val: function(t) {
			var n, e, r, i = this[0];
			return arguments.length ? (r = C.isFunction(t), this.each(function(e) {
					1 === this.nodeType && (null == (e = r ? t.call(this, e, C(this).val()) :
						t) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e =
							C.map(e, function(e) {
								return null == e ? "" : e + ""
							})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName
							.toLowerCase()]) && "set" in n && n.set(this, e, "value") !==
						undefined || (this.value = e))
				})) : i ? (n = C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) && "get" in
				n && (e = n.get(i, "value")) !== undefined ? e : "string" == typeof(e = i.value) ? e
				.replace(Lt, "") : null == e ? "" : e : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = C.find.attr(e, "value");
					return null != t ? t : C.trim(C.text(e)).replace(Ht, " ")
				}
			},
			select: {
				get: function(e) {
					for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type || r <
							0, o = i ? null : [], a = i ? r + 1 : n.length, s = r < 0 ? a : i ? r :
							0; s < a; s++)
						if (((t = n[s]).selected || s === r) && (y.optDisabled ? !t.disabled : null ===
								t.getAttribute("disabled")) && (!t.parentNode.disabled || !C.nodeName(t
								.parentNode, "optgroup"))) {
							if (t = C(t).val(), i) return t;
							o.push(t)
						} return o
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = C.makeArray(t), a = i.length; a--;)
						if (r = i[a], -1 < C.inArray(C.valHooks.option.get(r), o)) try {
							r.selected = n = !0
						} catch (s) {
							r.scrollHeight
						} else r.selected = !1;
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), C.each(["radio", "checkbox"], function() {
		C.valHooks[this] = {
			set: function(e, t) {
				if (C.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
			}
		}, y.checkOn || (C.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var D, qt, j = C.expr.attrHandle,
		_t = /^(?:checked|selected)$/i,
		L = y.getSetAttribute,
		Ft = y.input,
		Mt = (C.fn.extend({
			attr: function(e, t) {
				return d(this, C.attr, e, t, 1 < arguments.length)
			},
			removeAttr: function(e) {
				return this.each(function() {
					C.removeAttr(this, e)
				})
			}
		}), C.extend({
			attr: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? C.prop(
					e, t, n) : (1 === o && C.isXMLDoc(e) || (t = t.toLowerCase(), i = C
						.attrHooks[t] || (C.expr.match.bool.test(t) ? qt : D)), n !==
					undefined ? null === n ? void C.removeAttr(e, t) : i && "set" in i && (r = i
						.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : !(
						i && "get" in i && null !== (r = i.get(e, t))) && null == (r = C.find
						.attr(e, t)) ? undefined : r)
			},
			attrHooks: {
				type: {
					set: function(e, t) {
						var n;
						if (!y.radioValue && "radio" === t && C.nodeName(e, "input")) return n = e
							.value, e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			},
			removeAttr: function(e, t) {
				var n, r, i = 0,
					o = t && t.match(E);
				if (o && 1 === e.nodeType)
					for (; n = o[i++];) r = C.propFix[n] || n, C.expr.match.bool.test(n) ? Ft && L || !
						_t.test(n) ? e[r] = !1 : e[C.camelCase("default-" + n)] = e[r] = !1 : C.attr(e,
							n, ""), e.removeAttribute(L ? n : r)
			}
		}), qt = {
			set: function(e, t, n) {
				return !1 === t ? C.removeAttr(e, n) : Ft && L || !_t.test(n) ? e.setAttribute(!L && C
					.propFix[n] || n, n) : e[C.camelCase("default-" + n)] = e[n] = !0, n
			}
		}, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var o = j[t] || C.find.attr;
			Ft && L || !_t.test(t) ? j[t] = function(e, t, n) {
				var r, i;
				return n || (i = j[t], j[t] = r, r = null != o(e, t, n) ? t.toLowerCase() : null, j[t] =
					i), r
			} : j[t] = function(e, t, n) {
				if (!n) return e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
			}
		}), Ft && L || (C.attrHooks.value = {
			set: function(e, t, n) {
				if (!C.nodeName(e, "input")) return D && D.set(e, t, n);
				e.defaultValue = t
			}
		}), L || (D = {
			set: function(e, t, n) {
				var r = e.getAttributeNode(n);
				if (r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "",
					"value" === n || t === e.getAttribute(n)) return t
			}
		}, j.id = j.name = j.coords = function(e, t, n) {
			if (!n) return (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
		}, C.valHooks.button = {
			get: function(e, t) {
				t = e.getAttributeNode(t);
				if (t && t.specified) return t.value
			},
			set: D.set
		}, C.attrHooks.contenteditable = {
			set: function(e, t, n) {
				D.set(e, "" !== t && t, n)
			}
		}, C.each(["width", "height"], function(e, n) {
			C.attrHooks[n] = {
				set: function(e, t) {
					if ("" === t) return e.setAttribute(n, "auto"), t
				}
			}
		})), y.style || (C.attrHooks.style = {
			get: function(e) {
				return e.style.cssText || undefined
			},
			set: function(e, t) {
				return e.style.cssText = t + ""
			}
		}), /^(?:input|select|textarea|button|object)$/i),
		Ot = /^(?:a|area)$/i,
		Rt = (C.fn.extend({
			prop: function(e, t) {
				return d(this, C.prop, e, t, 1 < arguments.length)
			},
			removeProp: function(t) {
				return t = C.propFix[t] || t, this.each(function() {
					try {
						this[t] = undefined, delete this[t]
					} catch (e) {}
				})
			}
		}), C.extend({
			prop: function(e, t, n) {
				var r, i, o = e.nodeType;
				if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[
					t] || t, i = C.propHooks[t]), n !== undefined ? i && "set" in i && (r = i
					.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (
					r = i.get(e, t)) ? r : e[t]
			},
			propHooks: {
				tabIndex: {
					get: function(e) {
						var t = C.find.attr(e, "tabindex");
						return t ? parseInt(t, 10) : Mt.test(e.nodeName) || Ot.test(e.nodeName) && e
							.href ? 0 : -1
					}
				}
			},
			propFix: {
				"for": "htmlFor",
				"class": "className"
			}
		}), y.hrefNormalized || C.each(["href", "src"], function(e, t) {
			C.propHooks[t] = {
				get: function(e) {
					return e.getAttribute(t, 4)
				}
			}
		}), y.optSelected || (C.propHooks.selected = {
			get: function(e) {
				e = e.parentNode;
				return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
			},
			set: function(e) {
				e = e.parentNode;
				e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
			}
		}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan",
			"useMap", "frameBorder", "contentEditable"
		], function() {
			C.propFix[this.toLowerCase()] = this
		}), y.enctype || (C.propFix.enctype = "encoding"), /[\t\r\n\f]/g);

	function H(e) {
		return C.attr(e, "class") || ""
	}
	C.fn.extend({
		addClass: function(t) {
			var e, n, r, i, o, a, s = 0;
			if (C.isFunction(t)) return this.each(function(e) {
				C(this).addClass(t.call(this, e, H(this)))
			});
			if ("string" == typeof t && t)
				for (e = t.match(E) || []; n = this[s++];)
					if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
						for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
						a !== (a = C.trim(r)) && C.attr(n, "class", a)
					} return this
		},
		removeClass: function(t) {
			var e, n, r, i, o, a, s = 0;
			if (C.isFunction(t)) return this.each(function(e) {
				C(this).removeClass(t.call(this, e, H(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof t && t)
				for (e = t.match(E) || []; n = this[s++];)
					if (a = H(n), r = 1 === n.nodeType && (" " + a + " ").replace(Rt, " ")) {
						for (o = 0; i = e[o++];)
							for (; - 1 < r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
						a !== (a = C.trim(r)) && C.attr(n, "class", a)
					} return this
		},
		toggleClass: function(i, t) {
			var o = typeof i;
			return "boolean" == typeof t && "string" == o ? t ? this.addClass(i) : this.removeClass(i) :
				C.isFunction(i) ? this.each(function(e) {
					C(this).toggleClass(i.call(this, e, H(this), t), t)
				}) : this.each(function() {
					var e, t, n, r;
					if ("string" == o)
						for (t = 0, n = C(this), r = i.match(E) || []; e = r[t++];) n.hasClass(e) ?
							n.removeClass(e) : n.addClass(e);
					else i !== undefined && "boolean" != o || ((e = H(this)) && C._data(this,
						"__className__", e), C.attr(this, "class", !e && !1 !== i && C
						._data(this, "__className__") || ""))
				})
		},
		hasClass: function(e) {
			for (var t, n = 0, r = " " + e + " "; t = this[n++];)
				if (1 === t.nodeType && -1 < (" " + H(t) + " ").replace(Rt, " ").indexOf(r)) return !0;
			return !1
		}
	}), C.each(
		"blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
		.split(" "),
		function(e, n) {
			C.fn[n] = function(e, t) {
				return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
			}
		}), C.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	});
	var q = T.location,
		Pt = C.now(),
		Bt = /\?/,
		Wt =
		/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
		It = (C.parseJSON = function(e) {
			if (T.JSON && T.JSON.parse) return T.JSON.parse(e + "");
			var i, o = null,
				t = C.trim(e + "");
			return t && !C.trim(t.replace(Wt, function(e, t, n, r) {
				return 0 === (o = i && t ? 0 : o) ? e : (i = n || t, o += !r - !n, "")
			})) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
		}, C.parseXML = function(e) {
			var t;
			if (!e || "string" != typeof e) return null;
			try {
				T.DOMParser ? t = (new T.DOMParser).parseFromString(e, "text/xml") : ((t = new T.ActiveXObject(
					"Microsoft.XMLDOM"))["async"] = "false", t.loadXML(e))
			} catch (n) {
				t = undefined
			}
			return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error(
				"Invalid XML: " + e), t
		}, /#.*$/),
		$t = /([?&])_=[^&]*/,
		zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Xt = /^(?:GET|HEAD)$/,
		Ut = /^\/\//,
		Vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		Yt = {},
		Jt = {},
		Gt = "*/".concat("*"),
		Kt = q.href,
		_ = Vt.exec(Kt.toLowerCase()) || [];

	function Qt(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n, r = 0,
				i = e.toLowerCase().match(E) || [];
			if (C.isFunction(t))
				for (; n = i[r++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(
					t)) : (o[n] = o[n] || []).push(t)
		}
	}

	function Zt(t, r, i, o) {
		var a = {},
			s = t === Jt;

		function u(e) {
			var n;
			return a[e] = !0, C.each(t[e] || [], function(e, t) {
				t = t(r, i, o);
				return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
					u(t), !1)
			}), n
		}
		return u(r.dataTypes[0]) || !a["*"] && u("*")
	}

	function en(e, t) {
		var n, r, i = C.ajaxSettings.flatOptions || {};
		for (r in t) t[r] !== undefined && ((i[r] ? e : n = n || {})[r] = t[r]);
		return n && C.extend(!0, e, n), e
	}

	function tn(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t,
					e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (!(a = l[u + " " + o] || l["* " + o]))
				for (i in l)
					if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
						break
					} if (!0 !== a)
				if (a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch (f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function nn(e) {
		if (!C.contains(e.ownerDocument || g, e)) return !0;
		for (; e && 1 === e.nodeType;) {
			if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type)
			return !0;
			e = e.parentNode
		}
		var t;
		return !1
	}
	C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Kt,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_[1]),
			global: !0,
			processData: !0,
			"async": !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Gt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": C.parseJSON,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? en(en(e, C.ajaxSettings), t) : en(C.ajaxSettings, e)
		},
		ajaxPrefilter: Qt(Yt),
		ajaxTransport: Qt(Jt),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = undefined);
			var n, u, l, c, f, d, r, p = C.ajaxSetup({}, t = t || {}),
				h = p.context || p,
				g = p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
				m = C.Deferred(),
				y = C.Callbacks("once memory"),
				v = p.statusCode || {},
				i = {},
				o = {},
				x = 0,
				a = "canceled",
				b = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!r)
								for (r = {}; t = zt.exec(l);) r[t[1].toLowerCase()] = t[2];
							t = r[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? l : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = o[n] = o[n] || e, i[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function(e) {
						if (e)
							if (x < 2)
								for (var t in e) v[t] = [v[t], e[t]];
							else b.always(e[b.status]);
						return this
					},
					abort: function(e) {
						e = e || a;
						return d && d.abort(e), s(0, e), this
					}
				};
			if (m.promise(b).complete = y.add, b.success = b.done, b.error = b.fail, p.url = ((e || p
					.url || Kt) + "").replace(It, "").replace(Ut, _[1] + "//"), p.type = t.method || t
				.type || p.method || p.type, p.dataTypes = C.trim(p.dataType || "*").toLowerCase()
				.match(E) || [""], null == p.crossDomain && (e = Vt.exec(p.url.toLowerCase()), p
					.crossDomain = !(!e || e[1] === _[1] && e[2] === _[2] && (e[3] || ("http:" === e[
						1] ? "80" : "443")) === (_[3] || ("http:" === _[1] ? "80" : "443")))), p.data &&
				p.processData && "string" != typeof p.data && (p.data = C.param(p.data, p.traditional)),
				Zt(Yt, p, t, b), 2 === x) return b;
			for (n in (f = C.event && p.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), p
				.type = p.type.toUpperCase(), p.hasContent = !Xt.test(p.type), u = p.url, p
				.hasContent || (p.data && (u = p.url += (Bt.test(u) ? "&" : "?") + p.data, delete p
					.data), !1 === p.cache && (p.url = $t.test(u) ? u.replace($t, "$1_=" + Pt++) :
					u + (Bt.test(u) ? "&" : "?") + "_=" + Pt++)), p.ifModified && (C.lastModified[u] &&
					b.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && b
					.setRequestHeader("If-None-Match", C.etag[u])), (p.data && p.hasContent && !1 !== p
					.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
				b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p
						.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : p
					.accepts["*"]), p.headers) b.setRequestHeader(n, p.headers[n]);
			if (p.beforeSend && (!1 === p.beforeSend.call(h, b, p) || 2 === x)) return b.abort();
			for (n in a = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) b[n](p[n]);
			if (d = Zt(Jt, p, t, b)) {
				if (b.readyState = 1, f && g.trigger("ajaxSend", [b, p]), 2 === x) return b;
				p["async"] && 0 < p.timeout && (c = T.setTimeout(function() {
					b.abort("timeout")
				}, p.timeout));
				try {
					x = 1, d.send(i, s)
				} catch (w) {
					if (!(x < 2)) throw w;
					s(-1, w)
				}
			} else s(-1, "No Transport");

			function s(e, t, n, r) {
				var i, o, a, s = t;
				2 !== x && (x = 2, c && T.clearTimeout(c), d = undefined, l = r || "", b.readyState =
					0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t,
					n) {
						for (var r, i, o, a, s = e.contents, u = e.dataTypes;
							"*" === u[0];) u.shift(), i === undefined && (i = e.mimeType || t
							.getResponseHeader("Content-Type"));
						if (i)
							for (a in s)
								if (s[a] && s[a].test(i)) {
									u.unshift(a);
									break
								} if (u[0] in n) o = u[0];
						else {
							for (a in n) {
								if (!u[0] || e.converters[a + " " + u[0]]) {
									o = a;
									break
								}
								r = r || a
							}
							o = o || r
						}
						if (o) return o !== u[0] && u.unshift(o), n[o]
					}(p, b, n)), a = tn(p, a, b, r), r ? (p.ifModified && ((n = b.getResponseHeader(
							"Last-Modified")) && (C.lastModified[u] = n), (n = b
							.getResponseHeader("etag")) && (C.etag[u] = n)), 204 === e || "HEAD" ===
						p.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, i =
							a.data, r = !(o = a.error))) : (o = s, !e && s || (s = "error", e < 0 &&
						(e = 0))), b.status = e, b.statusText = (t || s) + "", r ? m.resolveWith(h,
						[i, s, b]) : m.rejectWith(h, [b, s, o]), b.statusCode(v), v = undefined,
					f && g.trigger(r ? "ajaxSuccess" : "ajaxError", [b, p, r ? i : o]), y.fireWith(
						h, [b, s]), f && (g.trigger("ajaxComplete", [b, p]), --C.active || C.event
						.trigger("ajaxStop")))
			}
			return b
		},
		getJSON: function(e, t, n) {
			return C.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return C.get(e, undefined, t, "script")
		}
	}), C.each(["get", "post"], function(e, i) {
		C[i] = function(e, t, n, r) {
			return C.isFunction(t) && (r = r || n, n = t, t = undefined), C.ajax(C.extend({
				url: e,
				type: i,
				dataType: r,
				data: t,
				success: n
			}, C.isPlainObject(e) && e))
		}
	}), C._evalUrl = function(e) {
		return C.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			"async": !1,
			global: !1,
			"throws": !0
		})
	}, C.fn.extend({
		wrapAll: function(t) {
			return C.isFunction(t) ? this.each(function(e) {
				C(this).wrapAll(t.call(this, e))
			}) : (this[0] && (e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode &&
				e.insertBefore(this[0]), e.map(function() {
					for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e
						.firstChild;
					return e
				}).append(this)), this);
			var e
		},
		wrapInner: function(n) {
			return C.isFunction(n) ? this.each(function(e) {
				C(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = C(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap: function(t) {
			var n = C.isFunction(t);
			return this.each(function(e) {
				C(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
			}).end()
		}
	}), C.expr.filters.hidden = function(e) {
		return y.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects()
			.length : nn(e)
	}, C.expr.filters.visible = function(e) {
		return !C.expr.filters.hidden(e)
	};
	var rn = /%20/g,
		on = /\[\]$/,
		an = /\r?\n/g,
		sn = /^(?:submit|button|image|reset|file)$/i,
		un = /^(?:input|select|textarea|keygen)/i;
	C.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = C.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" +
					encodeURIComponent(t)
			};
		if (t === undefined && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !
			C.isPlainObject(e)) C.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) ! function o(n, e, r, i) {
				if (C.isArray(e)) C.each(e, function(e, t) {
					r || on.test(n) ? i(n, t) : o(n + "[" + ("object" == typeof t && null != t ? e :
						"") + "]", t, r, i)
				});
				else if (r || "object" !== C.type(e)) i(n, e);
				else
					for (var t in e) o(n + "[" + t + "]", e[t], r, i)
			}(n, e[n], t, i);
		return r.join("&").replace(rn, "+")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = C.prop(this, "elements");
				return e ? C.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !C(this).is(":disabled") && un.test(this.nodeName) && !sn
					.test(e) && (this.checked || !ge.test(e))
			}).map(function(e, t) {
				var n = C(this).val();
				return null == n ? null : C.isArray(n) ? C.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(an, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(an, "\r\n")
				}
			}).get()
		}
	}), C.ajaxSettings.xhr = T.ActiveXObject !== undefined ? function() {
		return this.isLocal ? dn() : 8 < g.documentMode ? fn() : /^(get|post|head|put|delete|options)$/i.test(
			this.type) && fn() || dn()
	} : fn;
	var ln = 0,
		cn = {},
		F = C.ajaxSettings.xhr();

	function fn() {
		try {
			return new T.XMLHttpRequest
		} catch (e) {}
	}

	function dn() {
		try {
			return new T.ActiveXObject("Microsoft.XMLHTTP")
		} catch (e) {}
	}
	T.attachEvent && T.attachEvent("onunload", function() {
		for (var e in cn) cn[e](undefined, !0)
	}), y.cors = !!F && "withCredentials" in F, (F = y.ajax = !!F) && C.ajaxTransport(function(l) {
		var c;
		if (!l.crossDomain || y.cors) return {
			send: function(e, a) {
				var t, s = l.xhr(),
					u = ++ln;
				if (s.open(l.type, l.url, l["async"], l.username, l.password), l.xhrFields)
					for (t in l.xhrFields) s[t] = l.xhrFields[t];
				for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l
					.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] =
						"XMLHttpRequest"), e) e[t] !== undefined && s.setRequestHeader(t, e[t] +
				"");
				s.send(l.hasContent && l.data || null), c = function(e, t) {
						var n, r, i;
						if (c && (t || 4 === s.readyState))
							if (delete cn[u], c = undefined, s.onreadystatechange = C.noop, t) 4 !==
								s.readyState && s.abort();
							else {
								i = {}, n = s.status, "string" == typeof s.responseText && (i.text =
									s.responseText);
								try {
									r = s.statusText
								} catch (o) {
									r = ""
								}
								n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = i
									.text ? 200 : 404
							} i && a(n, r, i, s.getAllResponseHeaders())
					}, l["async"] ? 4 === s.readyState ? T.setTimeout(c) : s.onreadystatechange =
					cn[u] = c : c()
			},
			abort: function() {
				c && c(undefined, !0)
			}
		}
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return C.globalEval(e), e
			}
		}
	}), C.ajaxPrefilter("script", function(e) {
		e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), C.ajaxTransport("script", function(t) {
		var r, i;
		if (t.crossDomain) return i = g.head || C("head")[0] || g.documentElement, {
			send: function(e, n) {
				(r = g.createElement("script"))["async"] = !0, t.scriptCharset && (r.charset = t
						.scriptCharset), r.src = t.url, r.onload = r.onreadystatechange =
					function(e, t) {
						!t && r.readyState && !/loaded|complete/.test(r.readyState) || (r
							.onload = r.onreadystatechange = null, r.parentNode && r
							.parentNode.removeChild(r), r = null, t || n(200, "success"))
					}, i.insertBefore(r, i.firstChild)
			},
			abort: function() {
				r && r.onload(undefined, !0)
			}
		}
	});
	var pn = [],
		hn = /(=)\?(?=&|$)|\?\?/,
		gn = (C.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = pn.pop() || C.expando + "_" + Pt++;
				return this[e] = !0, e
			}
		}), C.ajaxPrefilter("json jsonp", function(e, t, n) {
			var r, i, o, a = !1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 ===
				(e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) &&
				"data");
			if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = C.isFunction(e
				.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hn,
					"$1" + r) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp +
					"=" + r), e.converters["script json"] = function() {
					return o || C.error(r + " was not called"), o[0]
				}, e.dataTypes[0] = "json", i = T[r], T[r] = function() {
					o = arguments
				}, n.always(function() {
					i === undefined ? C(T).removeProp(r) : T[r] = i, e[r] && (e.jsonpCallback = t
							.jsonpCallback, pn.push(r)), o && C.isFunction(i) && i(o[0]), o = i =
						undefined
				}), "script"
		}), C.parseHTML = function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || g;
			var r = J.exec(e),
				n = !n && [];
			return r ? [t.createElement(r[1])] : (r = Ne([e], t, n), n && n.length && C(n).remove(), C.merge([],
				r.childNodes))
		}, C.fn.load);

	function mn(e) {
		return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
	}
	return C.fn.load = function(e, t, n) {
		if ("string" != typeof e && gn) return gn.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return -1 < s && (r = C.trim(e.slice(s, e.length)), e = e.slice(0, s)), C.isFunction(t) ? (n = t, t =
			undefined) : t && "object" == typeof t && (i = "POST"), 0 < a.length && C.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e,
	t) {
		C.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), C.expr.filters.animated = function(t) {
		return C.grep(C.timers, function(e) {
			return t === e.elem
		}).length
	}, C.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s = C.css(e, "position"),
				u = C(e),
				l = {};
			"static" === s && (e.style.position = "relative"), o = u.offset(), r = C.css(e, "top"), a = C
				.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < C.inArray("auto", [r, a]) ?
				(i = (s = u.position()).top, s.left) : (i = parseFloat(r) || 0, parseFloat(a) || 0), null !=
				(t = C.isFunction(t) ? t.call(e, n, C.extend({}, o)) : t).top && (l.top = t.top - o.top +
				i), null != t.left && (l.left = t.left - o.left + s), "using" in t ? t.using.call(e, l) : u
				.css(l)
		}
	}, C.fn.extend({
		offset: function(t) {
			if (arguments.length) return t === undefined ? this : this.each(function(e) {
				C.offset.setOffset(this, t, e)
			});
			var e, n = {
					top: 0,
					left: 0
				},
				r = this[0],
				i = r && r.ownerDocument;
			return i ? (e = i.documentElement, C.contains(e, r) ? ("undefined" != typeof r
				.getBoundingClientRect && (n = r.getBoundingClientRect()), r = mn(i), {
					top: n.top + (r.pageYOffset || e.scrollTop) - (e.clientTop || 0),
					left: n.left + (r.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
				}) : n) : void 0
		},
		position: function() {
			var e, t, n, r;
			if (this[0]) return n = {
				top: 0,
				left: 0
			}, r = this[0], "fixed" === C.css(r, "position") ? t = r.getBoundingClientRect() : (
				e = this.offsetParent(), t = this.offset(), (n = C.nodeName(e[0], "html") ? n :
					e.offset()).top += C.css(e[0], "borderTopWidth", !0), n.left += C.css(e[0],
					"borderLeftWidth", !0)), {
				top: t.top - n.top - C.css(r, "marginTop", !0),
				left: t.left - n.left - C.css(r, "marginLeft", !0)
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C
					.css(e, "position");) e = e.offsetParent;
				return e || lt
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, i) {
		var o = /Y/.test(i);
		C.fn[t] = function(e) {
			return d(this, function(e, t, n) {
				var r = mn(e);
				if (n === undefined) return r ? i in r ? r[i] : r.document.documentElement[t] :
					e[t];
				r ? r.scrollTo(o ? C(r).scrollLeft() : n, o ? n : C(r).scrollTop()) : e[t] = n
			}, t, e, arguments.length, null)
		}
	}), C.each(["top", "left"], function(e, n) {
		C.cssHooks[n] = ft(y.pixelPosition, function(e, t) {
			if (t) return t = p(e, n), st.test(t) ? C(e).position()[n] + "px" : t
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(o, a) {
		C.each({
			padding: "inner" + o,
			content: a,
			"": "outer" + o
		}, function(r, e) {
			C.fn[e] = function(e, t) {
				var n = arguments.length && (r || "boolean" != typeof e),
					i = r || (!0 === e || !0 === t ? "margin" : "border");
				return d(this, function(e, t, n) {
					var r;
					return C.isWindow(e) ? e.document.documentElement["client" + o] :
						9 === e.nodeType ? (r = e.documentElement, Math.max(e.body[
								"scroll" + o], r["scroll" + o], e.body["offset" +
							o], r["offset" + o], r["client" + o])) : n === undefined ? C
						.css(e, t, i) : C.style(e, t, n, i)
				}, a, n ? e : undefined, n, null)
			}
		})
	}), C.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), C.fn.size = function() {
		return this.length
	}, C.fn.andSelf = C.fn.addBack, layui.define(function(e) {
		e("jquery", layui.$ = C)
	}), C
});
! function(p) {
	"use strict";
	var h, f, e, n = p.layui && layui.define,
		c = {
			getPath: (e = document.currentScript ? document.currentScript.src : function() {
				for (var e, t = document.scripts, i = t.length - 1, n = i; 0 < n; n--)
					if ("interactive" === t[n].readyState) {
						e = t[n].src;
						break
					} return e || t[i].src
			}(), (p.LAYUI_GLOBAL || {}).layer_dir || e.substring(0, e.lastIndexOf("/") + 1)),
			config: {},
			end: {},
			minIndex: 0,
			minLeft: [],
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			type: ["dialog", "page", "iframe", "loading", "tips"],
			getStyle: function(e, t) {
				e = e.currentStyle || p.getComputedStyle(e, null);
				return e[e.getPropertyValue ? "getPropertyValue" : "getAttribute"](t)
			},
			link: function(e, i, t) {
				var n, a, o, s, r, l;
				m.path && (n = document.getElementsByTagName("head")[0], a = document.createElement("link"), o = ((
						t = "string" == typeof i ? i : t) || e).replace(/\.|\//g, ""), s = "layuicss-" + o, r =
					"creating", l = 0, a.rel = "stylesheet", a.href = m.path + e, a.id = s, document
					.getElementById(s) || n.appendChild(a), "function" == typeof i && function f(e) {
						var t = document.getElementById(s);
						return 100 < ++l ? p.console && console.error(o + ".css: Invalid") : void(1989 ===
							parseInt(c.getStyle(t, "width")) ? (e === r && t.removeAttribute("lay-status"),
								t.getAttribute("lay-status") === r ? setTimeout(f, 100) : i()) : (t
								.setAttribute("lay-status", r), setTimeout(function() {
									f(r)
								}, 100)))
					}())
			}
		},
		m = {
			v: "3.5.1",
			ie: (e = navigator.userAgent.toLowerCase(), !!(p.ActiveXObject || "ActiveXObject" in p) && ((e.match(
				/msie\s(\d+)/) || [])[1] || "11")),
			index: p.layer && p.layer.v ? 1e5 : 0,
			path: c.getPath,
			config: function(e, t) {
				return m.cache = c.config = h.extend({}, c.config, e = e || {}), m.path = c.config.path || m.path,
					"string" == typeof e.extend && (e.extend = [e.extend]), c.config.path && m.ready(), e.extend &&
					(n ? layui.addcss("modules/layer/" + e.extend) : c.link("theme/" + e.extend)), this
			},
			ready: function(e) {
				var t = "layer",
					i = (n ? "modules/layer/" : "theme/") + "default/layer.css?v=" + m.v;
				return n ? layui.addcss(i, e, t) : c.link(i, e, t), this
			},
			alert: function(e, t, i) {
				var n = "function" == typeof t;
				return m.open(h.extend({
					content: e,
					yes: i = n ? t : i
				}, n ? {} : t))
			},
			confirm: function(e, t, i, n) {
				var a = "function" == typeof t;
				return a && (n = i, i = t), m.open(h.extend({
					content: e,
					btn: c.btn,
					yes: i,
					btn2: n
				}, a ? {} : t))
			},
			msg: function(e, t, i) {
				var n = "function" == typeof t,
					a = c.config.skin,
					a = (a ? a + " " + a + "-msg" : "") || "layui-layer-msg",
					o = d.anim.length - 1;
				return n && (i = t), m.open(h.extend({
					content: e,
					time: 3e3,
					shade: !1,
					skin: a,
					title: !1,
					closeBtn: !1,
					btn: !1,
					resize: !1,
					end: i
				}, n && !c.config.skin ? {
					skin: a + " layui-layer-hui",
					anim: o
				} : (-1 !== (t = t || {}).icon && (void 0 !== t.icon || c.config.skin) || (t.skin = a +
					" " + (t.skin || "layui-layer-hui")), t)))
			},
			load: function(e, t) {
				return m.open(h.extend({
					type: 3,
					icon: e || 0,
					resize: !1,
					shade: .01
				}, t))
			},
			tips: function(e, t, i) {
				return m.open(h.extend({
					type: 4,
					content: [e, t],
					closeBtn: !1,
					time: 3e3,
					shade: !1,
					resize: !1,
					fixed: !1,
					maxWidth: 260
				}, i))
			}
		},
		t = function(e) {
			var t = this,
				i = function() {
					t.creat()
				};
			t.index = ++m.index, t.config.maxWidth = h(f).width() - 30, t.config = h.extend({}, t.config, c.config, e),
				document.body ? i() : setTimeout(function() {
					i()
				}, 30)
		},
		d = (t.pt = t.prototype, ["layui-layer", ".layui-layer-title", ".layui-layer-main", ".layui-layer-dialog",
			"layui-layer-iframe", "layui-layer-content", "layui-layer-btn", "layui-layer-close"
		]),
		i = (d.anim = ["layer-anim-00", "layer-anim-01", "layer-anim-02", "layer-anim-03", "layer-anim-04",
			"layer-anim-05", "layer-anim-06"
		], d.SHADE = "layui-layer-shade", d.MOVE = "layui-layer-move", t.pt.config = {
			type: 0,
			shade: .3,
			fixed: !0,
			move: d[1],
			title: "&#x4FE1;&#x606F;",
			offset: "auto",
			area: "auto",
			closeBtn: 1,
			time: 0,
			zIndex: 19891014,
			maxWidth: 360,
			anim: 0,
			isOutAnim: !0,
			minStack: !0,
			icon: -1,
			moveType: 1,
			resize: !0,
			scrollbar: !0,
			tips: 2
		}, t.pt.vessel = function(e, t) {
			var i = this.index,
				n = this.config,
				a = n.zIndex + i,
				o = "object" == typeof n.title,
				s = n.maxmin && (1 === n.type || 2 === n.type),
				o = n.title ? '<div class="layui-layer-title" style="' + (o ? n.title[1] : "") + '">' + (o ? n
					.title[0] : n.title) + "</div>" : "";
			return n.zIndex = a, t([n.shade ? '<div class="' + d.SHADE + '" id="' + d.SHADE + i + '" times="' + i +
				'" style="z-index:' + (a - 1) + '; "></div>' : "", '<div class="' + d[0] + " layui-layer-" +
				c.type[n.type] + (0 != n.type && 2 != n.type || n.shade ? "" : " layui-layer-border") +
				" " + (n.skin || "") + '" id="' + d[0] + i + '" type="' + c.type[n.type] + '" times="' + i +
				'" showtime="' + n.time + '" conType="' + (e ? "object" : "string") + '" style="z-index: ' +
				a + "; width:" + n.area[0] + ";height:" + n.area[1] + ";position:" + (n.fixed ? "fixed;" :
					"absolute;") + '">' + (e && 2 != n.type ? "" : o) + '<div id="' + (n.id || "") +
				'" class="layui-layer-content' + (0 == n.type && -1 !== n.icon ? " layui-layer-padding" :
					"") + (3 == n.type ? " layui-layer-loading" + n.icon : "") + '">' + (0 == n.type && -
					1 !== n.icon ? '<i class="layui-layer-ico layui-layer-ico' + n.icon + '"></i>' : "") + (
					(1 != n.type || !e) && n.content || "") + '</div><span class="layui-layer-setwin">' + (
					i = s ?
					'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>' :
					"", n.closeBtn && (i += '<a class="layui-layer-ico ' + d[7] + " " + d[7] + (n.title ? n
						.closeBtn : 4 == n.type ? "1" : "2") + '" href="javascript:;"></a>'), i) +
				"</span>" + (n.btn ? function() {
					var e = "";
					"string" == typeof n.btn && (n.btn = [n.btn]);
					for (var t = 0, i = n.btn.length; t < i; t++) e += '<a class="' + d[6] + t + '">' +
						n.btn[t] + "</a>";
					return '<div class="' + d[6] + " layui-layer-btn-" + (n.btnAlign || "") + '">' + e +
						"</div>"
				}() : "") + (n.resize ? '<span class="layui-layer-resize"></span>' : "") + "</div>"
			], o, h('<div class="' + d.MOVE + '" id="' + d.MOVE + '"></div>')), this
		}, t.pt.creat = function() {
			var e, n = this,
				a = n.config,
				o = n.index,
				s = "object" == typeof(l = a.content),
				r = h("body");
			if (!a.id || !h("#" + a.id)[0]) {
				switch ("string" == typeof a.area && (a.area = "auto" === a.area ? ["", ""] : [a.area, ""]), a
					.shift && (a.anim = a.shift), 6 == m.ie && (a.fixed = !1), a.type) {
					case 0:
						a.btn = "btn" in a ? a.btn : c.btn[0], m.closeAll("dialog");
						break;
					case 2:
						var l = a.content = s ? a.content : [a.content || "", "auto"];
						a.content = '<iframe scrolling="' + (a.content[1] || "auto") +
							'" allowtransparency="true" id="' + d[4] + o + '" name="' + d[4] + o +
							'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="' + a
							.content[0] + '"></iframe>';
						break;
					case 3:
						delete a.title, delete a.closeBtn, -1 === a.icon && a.icon, m.closeAll("loading");
						break;
					case 4:
						s || (a.content = [a.content, "body"]), a.follow = a.content[1], a.content = a.content[0] +
							'<i class="layui-layer-TipsG"></i>', delete a.title, a.tips = "object" == typeof a
							.tips ? a.tips : [a.tips, !0], a.tipsMore || m.closeAll("tips")
				}
				n.vessel(s, function(e, t, i) {
					r.append(e[0]), s ? 2 == a.type || 4 == a.type ? h("body").append(e[1]) : l.parents(
							"." + d[0])[0] || (l.data("display", l.css("display")).show().addClass(
								"layui-layer-wrap").wrap(e[1]), h("#" + d[0] + o).find("." + d[5]).before(
							t)) : r.append(e[1]), h("#" + d.MOVE)[0] || r.append(c.moveElem = i), n.layero =
						h("#" + d[0] + o), n.shadeo = h("#" + d.SHADE + o), a.scrollbar || d.html.css(
							"overflow", "hidden").attr("layer-full", o)
				}).auto(o), n.shadeo.css({
					"background-color": a.shade[1] || "#000",
					opacity: a.shade[0] || a.shade
				}), 2 == a.type && 6 == m.ie && n.layero.find("iframe").attr("src", l[0]), 4 == a.type ? n
				.tips() : (n.offset(), parseInt(c.getStyle(document.getElementById(d.MOVE), "z-index")) || (n
					.layero.css("visibility", "hidden"), m.ready(function() {
						n.offset(), n.layero.css("visibility", "visible")
					}))), a.fixed && f.on("resize", function() {
					n.offset(), (/^\d+%$/.test(a.area[0]) || /^\d+%$/.test(a.area[1])) && n.auto(o), 4 == a
						.type && n.tips()
				}), a.time <= 0 || setTimeout(function() {
					m.close(n.index)
				}, a.time), n.move().callback(), d.anim[a.anim] && (e = "layer-anim " + d.anim[a.anim], n.layero
					.addClass(e).one(
						"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
						function() {
							h(this).removeClass(e)
						})), a.isOutAnim && n.layero.data("isOutAnim", !0)
			}
		}, t.pt.auto = function(e) {
			var t = this.config,
				i = h("#" + d[0] + e),
				n = ("" === t.area[0] && 0 < t.maxWidth && (m.ie && m.ie < 8 && t.btn && i.width(i.innerWidth()), i
					.outerWidth() > t.maxWidth && i.width(t.maxWidth)), [i.innerWidth(), i.innerHeight()]),
				a = i.find(d[1]).outerHeight() || 0,
				o = i.find("." + d[6]).outerHeight() || 0,
				e = function(e) {
					(e = i.find(e)).height(n[1] - a - o - 2 * (0 | parseFloat(e.css("padding-top"))))
				};
			return 2 === t.type ? e("iframe") : "" === t.area[1] ? 0 < t.maxHeight && i.outerHeight() > t
				.maxHeight ? (n[1] = t.maxHeight, e("." + d[5])) : t.fixed && n[1] >= f.height() && (n[1] = f
					.height(), e("." + d[5])) : e("." + d[5]), this
		}, t.pt.offset = function() {
			var e = this,
				t = e.config,
				i = e.layero,
				n = [i.outerWidth(), i.outerHeight()],
				a = "object" == typeof t.offset;
			e.offsetTop = (f.height() - n[1]) / 2, e.offsetLeft = (f.width() - n[0]) / 2, a ? (e.offsetTop = t
					.offset[0], e.offsetLeft = t.offset[1] || e.offsetLeft) : "auto" !== t.offset && ("t" === t
					.offset ? e.offsetTop = 0 : "r" === t.offset ? e.offsetLeft = f.width() - n[0] : "b" === t
					.offset ? e.offsetTop = f.height() - n[1] : "l" === t.offset ? e.offsetLeft = 0 : "lt" === t
					.offset ? (e.offsetTop = 0, e.offsetLeft = 0) : "lb" === t.offset ? (e.offsetTop = f.height() -
						n[1], e.offsetLeft = 0) : "rt" === t.offset ? (e.offsetTop = 0, e.offsetLeft = f.width() -
						n[0]) : "rb" === t.offset ? (e.offsetTop = f.height() - n[1], e.offsetLeft = f.width() - n[
						0]) : e.offsetTop = t.offset), t.fixed || (e.offsetTop = /%$/.test(e.offsetTop) ? f
				.height() * parseFloat(e.offsetTop) / 100 : parseFloat(e.offsetTop), e.offsetLeft = /%$/.test(e
						.offsetLeft) ? f.width() * parseFloat(e.offsetLeft) / 100 : parseFloat(e.offsetLeft), e
					.offsetTop += f.scrollTop(), e.offsetLeft += f.scrollLeft()), i.attr("minLeft") && (e
					.offsetTop = f.height() - (i.find(d[1]).outerHeight() || 0), e.offsetLeft = i.css("left")), i
				.css({
					top: e.offsetTop,
					left: e.offsetLeft
				})
		}, t.pt.tips = function() {
			var e = this.config,
				t = this.layero,
				i = [t.outerWidth(), t.outerHeight()],
				n = h(e.follow),
				a = {
					width: (n = n[0] ? n : h("body")).outerWidth(),
					height: n.outerHeight(),
					top: n.offset().top,
					left: n.offset().left
				},
				o = t.find(".layui-layer-TipsG"),
				n = e.tips[0];
			e.tips[1] || o.remove(), a.autoLeft = function() {
					0 < a.left + i[0] - f.width() ? (a.tipLeft = a.left + a.width - i[0], o.css({
						right: 12,
						left: "auto"
					})) : a.tipLeft = a.left
				}, a.where = [function() {
					a.autoLeft(), a.tipTop = a.top - i[1] - 10, o.removeClass("layui-layer-TipsB").addClass(
						"layui-layer-TipsT").css("border-right-color", e.tips[1])
				}, function() {
					a.tipLeft = a.left + a.width + 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsL")
						.addClass("layui-layer-TipsR").css("border-bottom-color", e.tips[1])
				}, function() {
					a.autoLeft(), a.tipTop = a.top + a.height + 10, o.removeClass("layui-layer-TipsT").addClass(
						"layui-layer-TipsB").css("border-right-color", e.tips[1])
				}, function() {
					a.tipLeft = a.left - i[0] - 10, a.tipTop = a.top, o.removeClass("layui-layer-TipsR")
						.addClass("layui-layer-TipsL").css("border-bottom-color", e.tips[1])
				}], a.where[n - 1](), 1 === n ? a.top - (f.scrollTop() + i[1] + 16) < 0 && a.where[2]() : 2 === n ?
				0 < f.width() - (a.left + a.width + i[0] + 16) || a.where[3]() : 3 === n ? 0 < a.top - f
			.scrollTop() + a.height + i[1] + 16 - f.height() && a.where[0]() : 4 === n && 0 < i[0] + 16 - a.left &&
				a.where[1](), t.find("." + d[5]).css({
					"background-color": e.tips[1],
					"padding-right": e.closeBtn ? "30px" : ""
				}), t.css({
					left: a.tipLeft - (e.fixed ? f.scrollLeft() : 0),
					top: a.tipTop - (e.fixed ? f.scrollTop() : 0)
				})
		}, t.pt.move = function() {
			var o = this,
				s = o.config,
				e = h(document),
				r = o.layero,
				t = r.find(s.move),
				i = r.find(".layui-layer-resize"),
				l = {};
			return s.move && t.css("cursor", "move"), t.on("mousedown", function(e) {
				e.preventDefault(), s.move && (l.moveStart = !0, l.offset = [e.clientX - parseFloat(r.css(
					"left")), e.clientY - parseFloat(r.css("top"))], c.moveElem.css("cursor",
					"move").show())
			}), i.on("mousedown", function(e) {
				e.preventDefault(), l.resizeStart = !0, l.offset = [e.clientX, e.clientY], l.area = [r
					.outerWidth(), r.outerHeight()
				], c.moveElem.css("cursor", "se-resize").show()
			}), e.on("mousemove", function(e) {
				var t, i, n, a;
				l.moveStart && (n = e.clientX - l.offset[0], a = e.clientY - l.offset[1], t = "fixed" === r
					.css("position"), e.preventDefault(), l.stX = t ? 0 : f.scrollLeft(), l.stY = t ?
					0 : f.scrollTop(), s.moveOut || (t = f.width() - r.outerWidth() + l.stX, i = f
						.height() - r.outerHeight() + l.stY, t < (n = n < l.stX ? l.stX : n) && (n = t),
						i < (a = a < l.stY ? l.stY : a) && (a = i)), r.css({
						left: n,
						top: a
					})), s.resize && l.resizeStart && (n = e.clientX - l.offset[0], a = e.clientY - l
					.offset[1], e.preventDefault(), m.style(o.index, {
						width: l.area[0] + n,
						height: l.area[1] + a
					}), l.isResize = !0, s.resizing && s.resizing(r))
			}).on("mouseup", function(e) {
				l.moveStart && (delete l.moveStart, c.moveElem.hide(), s.moveEnd && s.moveEnd(r)), l
					.resizeStart && (delete l.resizeStart, c.moveElem.hide())
			}), o
		}, t.pt.callback = function() {
			var t = this,
				i = t.layero,
				n = t.config;
			t.openLayer(), n.success && (2 == n.type ? i.find("iframe").on("load", function() {
				n.success(i, t.index, t)
			}) : n.success(i, t.index, t)), 6 == m.ie && t.IE6(i), i.find("." + d[6]).children("a").on("click",
				function() {
					var e = h(this).index();
					0 === e ? n.yes ? n.yes(t.index, i) : n.btn1 ? n.btn1(t.index, i) : m.close(t.index) : !
						1 !== (n["btn" + (e + 1)] && n["btn" + (e + 1)](t.index, i)) && m.close(t.index)
				}), i.find("." + d[7]).on("click", function() {
				!1 !== (n.cancel && n.cancel(t.index, i)) && m.close(t.index)
			}), n.shadeClose && t.shadeo.on("click", function() {
				m.close(t.index)
			}), i.find(".layui-layer-min").on("click", function() {
				!1 !== (n.min && n.min(i, t.index)) && m.min(t.index, n)
			}), i.find(".layui-layer-max").on("click", function() {
				h(this).hasClass("layui-layer-maxmin") ? (m.restore(t.index), n.restore && n.restore(i, t
					.index)) : (m.full(t.index, n), setTimeout(function() {
					n.full && n.full(i, t.index)
				}, 100))
			}), n.end && (c.end[t.index] = n.end)
		}, c.reselect = function() {
			h.each(h("select"), function(e, t) {
				var i = h(this);
				i.parents("." + d[0])[0] || 1 == i.attr("layer") && h("." + d[0]).length < 1 && i
					.removeAttr("layer").show()
			})
		}, t.pt.IE6 = function(e) {
			h("select").each(function(e, t) {
				var i = h(this);
				i.parents("." + d[0])[0] || "none" !== i.css("display") && i.attr({
					layer: "1"
				}).hide()
			})
		}, t.pt.openLayer = function() {
			m.zIndex = this.config.zIndex, m.setTop = function(e) {
				return m.zIndex = parseInt(e[0].style.zIndex), e.on("mousedown", function() {
					m.zIndex++, e.css("z-index", m.zIndex + 1)
				}), m.zIndex
			}
		}, c.record = function(e) {
			var t = [e.width(), e.height(), e.position().top, e.position().left + parseFloat(e.css("margin-left"))];
			e.find(".layui-layer-max").addClass("layui-layer-maxmin"), e.attr({
				area: t
			})
		}, c.rescollbar = function(e) {
			d.html.attr("layer-full") == e && (d.html[0].style.removeProperty ? d.html[0].style.removeProperty(
				"overflow") : d.html[0].style.removeAttribute("overflow"), d.html.removeAttr("layer-full"))
		}, (p.layer = m).getChildFrame = function(e, t) {
			return t = t || h("." + d[4]).attr("times"), h("#" + d[0] + t).find("iframe").contents().find(e)
		}, m.getFrameIndex = function(e) {
			return h("#" + e).parents("." + d[4]).attr("times")
		}, m.iframeAuto = function(e) {
			var t, i, n;
			e && (t = m.getChildFrame("html", e).outerHeight(), i = (e = h("#" + d[0] + e)).find(d[1])
			.outerHeight() || 0, n = e.find("." + d[6]).outerHeight() || 0, e.css({
					height: t + i + n
				}), e.find("iframe").css({
					height: t
				}))
		}, m.iframeSrc = function(e, t) {
			h("#" + d[0] + e).find("iframe").attr("src", t)
		}, m.style = function(e, t, i) {
			var e = h("#" + d[0] + e),
				n = e.find(".layui-layer-content"),
				a = e.attr("type"),
				o = e.find(d[1]).outerHeight() || 0,
				s = e.find("." + d[6]).outerHeight() || 0;
			e.attr("minLeft");
			a !== c.type[3] && a !== c.type[4] && (i || (parseFloat(t.width) <= 260 && (t.width = 260), parseFloat(t
					.height) - o - s <= 64 && (t.height = 64 + o + s)), e.css(t), s = e.find("." + d[6])
				.outerHeight() || 0, a === c.type[2] ? e.find("iframe").css({
					height: parseFloat(t.height) - o - s
				}) : n.css({
					height: parseFloat(t.height) - o - s - parseFloat(n.css("padding-top")) - parseFloat(n
						.css("padding-bottom"))
				}))
		}, m.min = function(e, t) {
			t = t || {};
			var i = h("#" + d[0] + e),
				n = h("#" + d.SHADE + e),
				a = i.find(d[1]).outerHeight() || 0,
				o = i.attr("minLeft") || 181 * c.minIndex + "px",
				s = i.css("position"),
				r = {
					width: 180,
					height: a,
					position: "fixed",
					overflow: "hidden"
				};
			c.record(i), c.minLeft[0] && (o = c.minLeft[0], c.minLeft.shift()), t.minStack && (r.left = o, r.top = f
					.height() - a, i.attr("minLeft") || c.minIndex++, i.attr("minLeft", o)), i.attr("position", s),
				m.style(e, r, !0), i.find(".layui-layer-min").hide(), "page" === i.attr("type") && i.find(d[4])
				.hide(), c.rescollbar(e), n.hide()
		}, m.restore = function(e) {
			var t = h("#" + d[0] + e),
				i = h("#" + d.SHADE + e),
				n = t.attr("area").split(",");
			t.attr("type");
			m.style(e, {
					width: parseFloat(n[0]),
					height: parseFloat(n[1]),
					top: parseFloat(n[2]),
					left: parseFloat(n[3]),
					position: t.attr("position"),
					overflow: "visible"
				}, !0), t.find(".layui-layer-max").removeClass("layui-layer-maxmin"), t.find(".layui-layer-min")
				.show(), "page" === t.attr("type") && t.find(d[4]).show(), c.rescollbar(e), i.show()
		}, m.full = function(t) {
			var i = h("#" + d[0] + t);
			c.record(i), d.html.attr("layer-full") || d.html.css("overflow", "hidden").attr("layer-full", t),
				clearTimeout(void 0), setTimeout(function() {
					var e = "fixed" === i.css("position");
					m.style(t, {
						top: e ? 0 : f.scrollTop(),
						left: e ? 0 : f.scrollLeft(),
						width: f.width(),
						height: f.height()
					}, !0), i.find(".layui-layer-min").hide()
				}, 100)
		}, m.title = function(e, t) {
			h("#" + d[0] + (t || m.index)).find(d[1]).html(e)
		}, m.close = function(a, o) {
			var s, e, r = h("#" + d[0] + a),
				l = r.attr("type");
			r[0] && (s = "layui-layer-wrap", e = function() {
					if (l === c.type[1] && "object" === r.attr("conType")) {
						r.children(":not(." + d[5] + ")").remove();
						for (var e = r.find("." + s), t = 0; t < 2; t++) e.unwrap();
						e.css("display", e.data("display")).removeClass(s)
					} else {
						if (l === c.type[2]) try {
							var i = h("#" + d[4] + a)[0];
							i.contentWindow.document.write(""), i.contentWindow.close(), r.find("." + d[5])[
								0].removeChild(i)
						} catch (n) {}
						r[0].innerHTML = "", r.remove()
					}
					"function" == typeof c.end[a] && c.end[a](), delete c.end[a], "function" == typeof o && o()
				}, r.data("isOutAnim") && r.addClass("layer-anim layer-anim-close"), h("#layui-layer-moves, #" +
					d.SHADE + a).remove(), 6 == m.ie && c.reselect(), c.rescollbar(a), r.attr("minLeft") && (c
					.minIndex--, c.minLeft.push(r.attr("minLeft"))), m.ie && m.ie < 10 || !r.data("isOutAnim") ?
				e() : setTimeout(function() {
					e()
				}, 200))
		}, m.closeAll = function(n, a) {
			"function" == typeof n && (a = n, n = null);
			var o = h("." + d[0]);
			h.each(o, function(e) {
				var t = h(this),
					i = n ? t.attr("type") === n : 1;
				i && m.close(t.attr("times"), e === o.length - 1 ? a : null)
			}), 0 === o.length && "function" == typeof a && a()
		}, m.cache || {}),
		g = function(e) {
			return i.skin ? " " + i.skin + " " + i.skin + "-" + e : ""
		};
	m.prompt = function(i, n) {
		var e = "";
		"function" == typeof(i = i || {}) && (n = i), i.area && (e = 'style="width: ' + (t = i.area)[0] +
			"; height: " + t[1] + ';"', delete i.area);
		var a, t = 2 == i.formType ? '<textarea class="layui-layer-input"' + e + "></textarea>" : '<input type="' +
			(1 == i.formType ? "password" : "text") + '" class="layui-layer-input">',
			o = i.success;
		return delete i.success, m.open(h.extend({
			type: 1,
			btn: ["&#x786E;&#x5B9A;", "&#x53D6;&#x6D88;"],
			content: t,
			skin: "layui-layer-prompt" + g("prompt"),
			maxWidth: f.width(),
			success: function(e) {
				(a = e.find(".layui-layer-input")).val(i.value || "").focus(), "function" ==
					typeof o && o(e)
			},
			resize: !1,
			yes: function(e) {
				var t = a.val();
				"" === t ? a.focus() : t.length > (i.maxlength || 500) ? m.tips(
					"&#x6700;&#x591A;&#x8F93;&#x5165;" + (i.maxlength || 500) +
					"&#x4E2A;&#x5B57;&#x6570;", a, {
						tips: 1
					}) : n && n(t, e, a)
			}
		}, i))
	}, m.tab = function(n) {
		var a = (n = n || {}).tab || {},
			o = "layui-this",
			s = n.success;
		return delete n.success, m.open(h.extend({
			type: 1,
			skin: "layui-layer-tab" + g("tab"),
			resize: !1,
			title: function() {
				var e = a.length,
					t = 1,
					i = "";
				if (0 < e)
					for (i = '<span class="' + o + '">' + a[0].title + "</span>"; t < e; t++) i +=
						"<span>" + a[t].title + "</span>";
				return i
			}(),
			content: '<ul class="layui-layer-tabmain">' + function() {
				var e = a.length,
					t = 1,
					i = "";
				if (0 < e)
					for (i = '<li class="layui-layer-tabli ' + o + '">' + (a[0].content ||
							"no content") + "</li>"; t < e; t++) i +=
						'<li class="layui-layer-tabli">' + (a[t].content || "no  content") +
						"</li>";
				return i
			}() + "</ul>",
			success: function(e) {
				var t = e.find(".layui-layer-title").children(),
					i = e.find(".layui-layer-tabmain").children();
				t.on("mousedown", function(e) {
					e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
					var e = h(this),
						t = e.index();
					e.addClass(o).siblings().removeClass(o), i.eq(t).show().siblings()
					.hide(), "function" == typeof n.change && n.change(t)
				}), "function" == typeof s && s(e)
			}
		}, n))
	}, m.photos = function(i, e, n) {
		var a = {};
		if ((i = i || {}).photos) {
			var t = !("string" == typeof i.photos || i.photos instanceof h),
				o = t ? i.photos : {},
				s = o.data || [],
				r = o.start || 0,
				l = (a.imgIndex = 1 + (0 | r), i.img = i.img || "img", i.success);
			if (delete i.success, t) {
				if (0 === s.length) return m.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")
			} else {
				var f = h(i.photos),
					c = function() {
						s = [], f.find(i.img).each(function(e) {
							var t = h(this);
							t.attr("layer-index", e), s.push({
								alt: t.attr("alt"),
								pid: t.attr("layer-pid"),
								src: t.attr("layer-src") || t.attr("src"),
								thumb: t.attr("src")
							})
						})
					};
				if (c(), 0 === s.length) return;
				if (e || f.on("click", i.img, function() {
						c();
						var e = h(this).attr("layer-index");
						m.photos(h.extend(i, {
							photos: {
								start: e,
								data: s,
								tab: i.tab
							},
							full: i.full
						}), !0)
					}), !e) return
			}
			a.imgprev = function(e) {
				a.imgIndex--, a.imgIndex < 1 && (a.imgIndex = s.length), a.tabimg(e)
			}, a.imgnext = function(e, t) {
				a.imgIndex++, a.imgIndex > s.length && (a.imgIndex = 1, t) || a.tabimg(e)
			}, a.keyup = function(e) {
				var t;
				a.end || (t = e.keyCode, e.preventDefault(), 37 === t ? a.imgprev(!0) : 39 === t ? a.imgnext(!
					0) : 27 === t && m.close(a.index))
			}, a.tabimg = function(e) {
				if (!(s.length <= 1)) return o.start = a.imgIndex - 1, m.close(a.index), m.photos(i, !0, e)
			}, a.event = function() {
				a.bigimg.find(".layui-layer-imgprev").on("click", function(e) {
					e.preventDefault(), a.imgprev(!0)
				}), a.bigimg.find(".layui-layer-imgnext").on("click", function(e) {
					e.preventDefault(), a.imgnext(!0)
				}), h(document).on("keyup", a.keyup)
			}, a.loadi = m.load(1, {
				shade: !("shade" in i) && .9,
				scrollbar: !1
			});
			var t = s[r].src,
				d = function(e) {
					var t;
					m.close(a.loadi), n && (i.anim = -1), a.index = m.open(h.extend({
						type: 1,
						id: "layui-layer-photos",
						area: (e = [e.width, e.height], t = [h(p).width() - 100, h(p).height() - 100], !
							i.full && (e[0] > t[0] || e[1] > t[1]) && ((t = [e[0] / t[0], e[1] / t[
									1]])[1] < t[0] ? (e[0] = e[0] / t[0], e[1] = e[1] / t[0]) : t[
								0] < t[1] && (e[0] = e[0] / t[1], e[1] = e[1] / t[1])), [e[0] +
								"px", e[1] + "px"
							]),
						title: !1,
						shade: .9,
						shadeClose: !0,
						closeBtn: !1,
						move: ".layui-layer-phimg img",
						moveType: 1,
						scrollbar: !1,
						moveOut: !0,
						anim: 5,
						isOutAnim: !1,
						skin: "layui-layer-photos" + g("photos"),
						content: '<div class="layui-layer-phimg"><img src="' + s[r].src + '" alt="' + (
							s[r].alt || "") + '" layer-pid="' + s[r].pid + '">' + (1 < s.length ?
							'<div class="layui-layer-imgsee"><span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span><div class="layui-layer-imgbar" style="display:' +
							(n ? "block" : "") +
							'"><span class="layui-layer-imgtit"><a href="javascript:;">' + (s[r]
								.alt || "") + "</a><em>" + a.imgIndex + " / " + s.length +
							"</em></span></div></div>" : "") + "</div>",
						success: function(e, t) {
							a.bigimg = e.find(".layui-layer-phimg"), a.imgsee = e.find(
									".layui-layer-imgbar"), a.event(e), i.tab && i.tab(s[r], e),
								"function" == typeof l && l(e)
						},
						end: function() {
							a.end = !0, h(document).off("keyup", a.keyup)
						}
					}, i))
				},
				u = function() {
					m.close(a.loadi), m.msg(
						"&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;", {
							time: 3e4,
							btn: ["&#x4E0B;&#x4E00;&#x5F20;", "&#x4E0D;&#x770B;&#x4E86;"],
							yes: function() {
								1 < s.length && a.imgnext(!0, !0)
							}
						})
				},
				y = new Image;
			(y.src = t, y.complete) ? d(y): (y.onload = function() {
				y.onload = null, d(y)
			}, y.onerror = function(e) {
				y.onerror = null, u(e)
			})
		}
	}, c.run = function(e) {
		f = (h = e)(p), d.html = h("html"), m.open = function(e) {
			return new t(e).index
		}
	}, p.layui && layui.define ? (m.ready(), layui.define("jquery", function(e) {
		m.path = layui.cache.dir, c.run(layui.$), e("layer", p.layer = m)
	})) : "function" == typeof define && define.amd ? define(["jquery"], function() {
		return c.run(p.jQuery), m
	}) : (m.ready(), c.run(p.jQuery))
}(window);
layui.define("jquery", function(e) {
	"use strict";
	var u = layui.$,
		a = layui.hint(),
		o = {
			fixbar: function(t) {
				var e, i, n = "layui-fixbar",
					o = "layui-fixbar-top",
					a = u(document),
					r = u("body"),
					l = ((t = u.extend({
							showHeight: 200
						}, t)).bar1 = !0 === t.bar1 ? "&#xe606;" : t.bar1, t.bar2 = !0 === t.bar2 ?
						"&#xe607;" : t.bar2, t.bgcolor = t.bgcolor ? "background-color:" + t.bgcolor : "", [
							t.bar1, t.bar2, "&#xe604;"
						]),
					l = u(['<ul class="' + n + '">', t.bar1 ?
						'<li class="layui-icon" lay-type="bar1" style="' + t.bgcolor + '">' + l[0] +
						"</li>" : "", t.bar2 ? '<li class="layui-icon" lay-type="bar2" style="' + t
						.bgcolor + '">' + l[1] + "</li>" : "", '<li class="layui-icon ' + o +
						'" lay-type="top" style="' + t.bgcolor + '">' + l[2] + "</li>", "</ul>"
					].join("")),
					c = l.find("." + o),
					g = function() {
						a.scrollTop() >= t.showHeight ? e || (c.show(), e = 1) : e && (c.hide(), e = 0)
					};
				u("." + n)[0] || ("object" == typeof t.css && l.css(t.css), r.append(l), g(), l.find("li")
					.on("click", function() {
						var e = u(this).attr("lay-type");
						"top" === e && u("html,body").animate({
							scrollTop: 0
						}, 200), t.click && t.click.call(this, e)
					}), a.on("scroll", function() {
						clearTimeout(i), i = setTimeout(function() {
							g()
						}, 100)
					}))
			},
			countdown: function(e, t, i) {
				var n = this,
					o = "function" == typeof t,
					a = new Date(e).getTime(),
					r = new Date(!t || o ? (new Date).getTime() : t).getTime(),
					a = a - r,
					l = [Math.floor(a / 864e5), Math.floor(a / 36e5) % 24, Math.floor(a / 6e4) % 60, Math
						.floor(a / 1e3) % 60
					],
					o = (o && (i = t), setTimeout(function() {
						n.countdown(e, r + 1e3, i)
					}, 1e3));
				return i && i(0 < a ? l : [0, 0, 0, 0], t, o), a <= 0 && clearTimeout(o), o
			},
			timeAgo: function(e, t) {
				var i = this,
					n = [
						[],
						[]
					],
					o = (new Date).getTime() - new Date(e).getTime();
				return 26784e5 < o ? (o = new Date(e), n[0][0] = i.digit(o.getFullYear(), 4), n[0][1] = i
						.digit(o.getMonth() + 1), n[0][2] = i.digit(o.getDate()), t || (n[1][0] = i.digit(o
							.getHours()), n[1][1] = i.digit(o.getMinutes()), n[1][2] = i.digit(o
							.getSeconds())), n[0].join("-") + " " + n[1].join(":")) : 864e5 <= o ? (o /
						1e3 / 60 / 60 / 24 | 0) + "\u5929\u524d" : 36e5 <= o ? (o / 1e3 / 60 / 60 | 0) +
					"\u5c0f\u65f6\u524d" : 18e4 <= o ? (o / 1e3 / 60 | 0) + "\u5206\u949f\u524d" : o < 0 ?
					"\u672a\u6765" : "\u521a\u521a"
			},
			digit: function(e, t) {
				var i = "";
				t = t || 2;
				for (var n = (e = String(e)).length; n < t; n++) i += "0";
				return e < Math.pow(10, t) ? i + (0 | e) : e
			},
			toDateString: function(e, t) {
				if (null === e || "" === e) return "";
				var i = this,
					n = new Date(function() {
						if (e) return !isNaN(e) && "string" == typeof e ? parseInt(e) : e
					}() || new Date),
					o = [i.digit(n.getFullYear(), 4), i.digit(n.getMonth() + 1), i.digit(n.getDate())],
					i = [i.digit(n.getHours()), i.digit(n.getMinutes()), i.digit(n.getSeconds())];
				return n.getDate() ? (t = t || "yyyy-MM-dd HH:mm:ss").replace(/yyyy/g, o[0]).replace(/MM/g,
					o[1]).replace(/dd/g, o[2]).replace(/HH/g, i[0]).replace(/mm/g, i[1]).replace(/ss/g,
					i[2]) : (a.error('Invalid Msec for "util.toDateString(Msec)"'), "")
			},
			escape: function(e) {
				return e === undefined || null === e ? "" : /[<"'>]|&(?=#[a-zA-Z0-9]+)/g.test(e += "") ? e
					.replace(/&(?!#?[a-zA-Z0-9]+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
					.replace(/'/g, "&#39;").replace(/"/g, "&quot;") : e
			},
			unescape: function(e) {
				return e !== undefined && null !== e || (e = ""), (e += "").replace(/\&amp;/g, "&").replace(
					/\&lt;/g, "<").replace(/\&gt;/g, ">").replace(/\&#39;/g, "'").replace(/\&quot;/g,
					'"')
			},
			toVisibleArea: function(e) {
				var t, i, n, o, a, r, l, c;
				(e = u.extend({
					margin: 160,
					duration: 200,
					type: "y"
				}, e)).scrollElem[0] && e.thisElem[0] && (t = e.scrollElem, l = e.thisElem, n = (a = "y" ===
					e.type) ? "top" : "left", o = t[i = a ? "scrollTop" : "scrollLeft"](), a = t[a ?
					"height" : "width"](), r = t.offset()[n], c = {}, ((l = l.offset()[n] - r) > a -
					e.margin || l < e.margin) && (c[i] = l - a / 2 + o, t.animate(c, e.duration)))
			},
			event: function(i, n, e) {
				var t = u("body");
				return e = e || "click", n = o.event[i] = u.extend(!0, o.event[i], n) || {}, o.event
					.UTIL_EVENT_CALLBACK = o.event.UTIL_EVENT_CALLBACK || {}, t.off(e, "*[" + i + "]", o
						.event.UTIL_EVENT_CALLBACK[i]), o.event.UTIL_EVENT_CALLBACK[i] = function() {
						var e = u(this),
							t = e.attr(i);
						"function" == typeof n[t] && n[t].call(this, e)
					}, t.on(e, "*[" + i + "]", o.event.UTIL_EVENT_CALLBACK[i]), n
			}
		};
	o.on = o.event, e("util", o)
});
layui.define(["jquery", "laytpl", "lay"], function(e) {
	"use strict";
	var n, i, t, s = layui.$,
		m = layui.laytpl,
		a = layui.hint(),
		l = layui.device().mobile ? "click" : "mousedown",
		o = "dropdown",
		r = "layui_" + o + "_index",
		c = {
			config: {},
			index: layui[o] ? layui[o].index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = s.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, o, e, i)
			}
		},
		p = function() {
			var i = this,
				e = i.config,
				t = e.id;
			return p.that[t] = i, {
				config: e,
				reload: function(e) {
					i.reload.call(i, e)
				}
			}
		},
		u = "layui-menu-item-up",
		d = "layui-menu-item-down",
		y = "layui-menu-body-title",
		f = "layui-menu-item-group",
		g = "layui-menu-item-parent",
		h = "layui-menu-item-checked",
		v = "layui-menu-item-checked2",
		w = "layui-menu-body-panel",
		C = "layui-menu-body-panel-left",
		V = "." + f + ">." + y,
		k = function(e) {
			var i = this;
			i.index = ++c.index, i.config = s.extend({}, i.config, c.config, e), i.init()
		};
	k.prototype.config = {
		trigger: "click",
		content: "",
		className: "",
		style: "",
		show: !1,
		isAllowSpread: !0,
		isSpreadItem: !0,
		data: [],
		delay: 300
	}, k.prototype.reload = function(e) {
		var i = this;
		i.config = s.extend({}, i.config, e), i.init(!0)
	}, k.prototype.init = function(e) {
		var i = this,
			t = i.config,
			n = t.elem = s(t.elem);
		return 1 < n.length ? (layui.each(n, function() {
			c.render(s.extend({}, t, {
				elem: this
			}))
		}), i) : !e && n[0] && n.data(r) ? (n = p.getThis(n.data(r))) ? n.reload(t) : void 0 : (t.id =
			"id" in t ? t.id : i.index, t.show && i.render(e), void i.events())
	}, k.prototype.render = function(e) {
		var n = this,
			u = n.config,
			i = s("body"),
			d = function(r, e) {
				return layui.each(e, function(e, i) {
					var t, n = i.child && 0 < i.child.length,
						a = ("isSpreadItem" in i ? i : u).isSpreadItem,
						l = i.templet ? m(i.templet).render(i) : u.templet ? m(u.templet).render(
						i) : i.title,
						o = (n && (i.type = i.type || "parent"), i.type ? {
							group: "group",
							parent: "parent",
							"-": "-"
						} [i.type] || "parent" : "");
					("-" === o || i.title || i.id || n) && ((l = s(["<li" + (t = {
						group: "layui-menu-item-group" + (u.isAllowSpread ? a ?
							" layui-menu-item-down" :
							" layui-menu-item-up" : ""),
						parent: g,
						"-": "layui-menu-item-divider"
					}, n || o ? ' class="' + t[o] + '"' : "") + ">", (t = "href" in
						i ? '<a href="' + i.href + '" target="' + (i.target ||
							"_self") + '">' + l + "</a>" : l, n ? '<div class="' +
						y + '">' + t + ("parent" === o ?
							'<i class="layui-icon layui-icon-right"></i>' :
							"group" === o && u.isAllowSpread ?
							'<i class="layui-icon layui-icon-' + (a ? "up" :
							"down") + '"></i>' : "") + "</div>" : '<div class="' +
						y + '">' + t + "</div>"), "</li>"].join(""))).data("item", i), n && (a =
						s('<div class="layui-panel layui-menu-body-panel"></div>'), t = s(
							"<ul></ul>"), "parent" === o ? (a.append(d(t, i.child)), l.append(
							a)) : l.append(d(t, i.child))), r.append(l))
				}), r
			},
			t = ['<div class="layui-dropdown layui-border-box layui-panel layui-anim layui-anim-downbit">',
				"</div>"
			].join("");
		!(e = "contextmenu" !== u.trigger && !lay.isTopElem(u.elem[0]) ? e : !0) && u.elem.data(r +
			"_opened") || (n.elemView = s(t), n.elemView.append(u.content || (e = s(
				'<ul class="layui-menu layui-dropdown-menu"></ul>'), 0 < u.data.length ? d(e, u
				.data) : e.html('<li class="layui-menu-item-none">no menu</li>'), e)), u.className && n
			.elemView.addClass(u.className), u.style && n.elemView.attr("style", u.style), c.thisId = u
			.id, n.remove(), i.append(n.elemView), u.elem.data(r + "_opened", !0), n.position(), (p
				.prevElem = n.elemView).data("prevElem", u.elem), n.elemView.find(".layui-menu").on(l,
				function(e) {
					layui.stope(e)
				}), n.elemView.find(".layui-menu li").on("click", function(e) {
				var i = s(this),
					t = i.data("item") || {};
				t.child && 0 < t.child.length || "-" === t.type || (n.remove(), "function" ==
					typeof u.click && u.click(t, i))
			}), n.elemView.find(V).on("click", function(e) {
				var i = s(this).parent();
				"group" === (i.data("item") || {}).type && u.isAllowSpread && p.spread(i)
			}), "mouseenter" === u.trigger && n.elemView.on("mouseenter", function() {
				clearTimeout(p.timer)
			}).on("mouseleave", function() {
				n.delayRemove()
			}))
	}, k.prototype.position = function(e) {
		var i = this.config;
		lay.position(i.elem[0], this.elemView[0], {
			position: i.position,
			e: this.e,
			clickType: "contextmenu" === i.trigger ? "right" : null,
			align: i.align || null
		})
	}, k.prototype.remove = function() {
		this.config;
		var e = p.prevElem;
		e && (e.data("prevElem") && e.data("prevElem").data(r + "_opened", !1), e.remove())
	}, k.prototype.delayRemove = function() {
		var e = this,
			i = e.config;
		clearTimeout(p.timer), p.timer = setTimeout(function() {
			e.remove()
		}, i.delay)
	}, k.prototype.events = function() {
		var i = this,
			t = i.config;
		"hover" === t.trigger && (t.trigger = "mouseenter"), i.prevElem && i.prevElem.off(t.trigger, i
			.prevElemCallback), i.prevElem = t.elem, i.prevElemCallback = function(e) {
			clearTimeout(p.timer), i.e = e, i.render(), e.preventDefault(), "function" == typeof t
				.ready && t.ready(i.elemView, t.elem, i.e.target)
		}, t.elem.on(t.trigger, i.prevElemCallback), "mouseenter" === t.trigger && t.elem.on(
			"mouseleave",
			function() {
				i.delayRemove()
			})
	}, p.that = {}, p.getThis = function(e) {
		var i = p.that[e];
		return i || a.error(e ? o + " instance with ID '" + e + "' not found" : "ID argument required"), i
	}, p.spread = function(e) {
		var i = e.children("." + y).find(".layui-icon");
		e.hasClass(u) ? (e.removeClass(u).addClass(d), i.removeClass("layui-icon-down").addClass(
			"layui-icon-up")) : (e.removeClass(d).addClass(u), i.removeClass("layui-icon-up").addClass(
			"layui-icon-down"))
	}, n = s(window), i = s(document), n.on("resize", function() {
		if (c.thisId) {
			var e = p.getThis(c.thisId);
			if (e) {
				if (!e.elemView[0] || !s(".layui-dropdown")[0]) return !1;
				"contextmenu" === e.config.trigger ? e.remove() : e.position()
			}
		}
	}), i.on(l, function(e) {
		var i, t;
		!c.thisId || (i = p.getThis(c.thisId)) && (t = i.config, !lay.isTopElem(t.elem[0]) &&
			"contextmenu" !== t.trigger && (e.target === t.elem[0] || t.elem.find(e.target)[0] || e
				.target === i.elemView[0] || i.elemView && i.elemView.find(e.target)[0]) || i
			.remove())
	}), t = ".layui-menu:not(.layui-dropdown-menu) li", i.on("click", t, function(e) {
		var i = s(this),
			t = i.parents(".layui-menu").eq(0),
			n = i.hasClass(f) || i.hasClass(g),
			a = t.attr("lay-filter") || t.attr("id"),
			l = lay.options(this);
		i.hasClass("layui-menu-item-divider") || n || (t.find("." + h).removeClass(h), t.find("." + v)
			.removeClass(v), i.addClass(h), i.parents("." + g).addClass(v), layui.event.call(this,
				o, "click(" + a + ")", l))
	}), i.on("click", t + V, function(e) {
		var i = s(this).parents("." + f + ":eq(0)"),
			t = lay.options(i[0]);
		"isAllowSpread" in t && !t.isAllowSpread || p.spread(i)
	}), t = ".layui-menu ." + g, i.on("mouseenter", t, function(e) {
		var i, t = s(this).find("." + w);
		t[0] && ((i = t[0].getBoundingClientRect()).right > n.width() && (t.addClass(C), (i = t[0]
				.getBoundingClientRect()).left < 0 && t.removeClass(C)), i.bottom > n.height() && t
			.eq(0).css("margin-top", -(i.bottom - n.height() + 5)))
	}).on("mouseleave", t, function(e) {
		var i = s(this).children("." + w);
		i.removeClass(C), i.css("margin-top", 0)
	}), c.reload = function(e, i) {
		e = p.getThis(e);
		return e ? (e.reload(i), p.call(e)) : this
	}, c.render = function(e) {
		e = new k(e);
		return p.call(e)
	}, e(o, c)
});
layui.define("jquery", function(e) {
	"use strict";
	var h = layui.$,
		t = {
			config: {},
			index: layui.slider ? layui.slider.index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = h.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, a, e, i)
			}
		},
		a = "slider",
		c = "layui-disabled",
		y = "layui-slider-bar",
		g = "layui-slider-wrap",
		b = "layui-slider-wrap-btn",
		x = "layui-slider-tips",
		T = "layui-slider-input-txt",
		w = "layui-slider-hover",
		i = function(e) {
			var i = this;
			i.index = ++t.index, i.config = h.extend({}, i.config, t.config, e), i.render()
		};
	i.prototype.config = {
		type: "default",
		min: 0,
		max: 100,
		value: 0,
		step: 1,
		showstep: !1,
		tips: !0,
		input: !1,
		range: !1,
		height: 200,
		disabled: !1,
		theme: "#009688"
	}, i.prototype.render = function() {
		var a, n = this,
			l = n.config,
			e = (l.step < 1 && (l.step = 1), l.max < l.min && (l.max = l.min + l.step), l.range ? (l.value =
				"object" == typeof l.value ? l.value : [l.min, l.value], i = Math.min(l.value[0], l
					.value[1]), s = Math.max(l.value[0], l.value[1]), l.value[0] = i > l.min ? i : l
				.min, l.value[1] = s > l.min ? s : l.min, l.value[0] = l.value[0] > l.max ? l.max : l
				.value[0], l.value[1] = l.value[1] > l.max ? l.max : l.value[1], i = Math.floor((l
					.value[0] - l.min) / (l.max - l.min) * 100), t = (s = Math.floor((l.value[1] - l
					.min) / (l.max - l.min) * 100)) - i + "%", i += "%", s += "%") : ("object" ==
				typeof l.value && (l.value = Math.min.apply(null, l.value)), l.value < l.min && (l
					.value = l.min), l.value > l.max && (l.value = l.max), t = Math.floor((l.value - l
					.min) / (l.max - l.min) * 100) + "%"), l.disabled ? "#c2c2c2" : l.theme),
			i = '<div class="layui-slider ' + ("vertical" === l.type ? "layui-slider-vertical" : "") +
			'">' + (l.tips ? '<div class="' + x + '"></div>' : "") +
			'<div class="layui-slider-bar" style="background:' + e + "; " + ("vertical" === l.type ?
				"height" : "width") + ":" + t + ";" + ("vertical" === l.type ? "bottom" : "left") + ":" + (
				i || 0) + ';"></div><div class="layui-slider-wrap" style="' + ("vertical" === l.type ?
				"bottom" : "left") + ":" + (i || t) +
			';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' + e + ';"></div></div>' + (l
				.range ? '<div class="layui-slider-wrap" style="' + ("vertical" === l.type ? "bottom" :
					"left") + ":" + s + ';"><div class="layui-slider-wrap-btn" style="border: 2px solid ' +
				e + ';"></div></div>' : "") + "</div>",
			t = h(l.elem),
			s = t.next(".layui-slider");
		if (s[0] && s.remove(), n.elemTemp = h(i), l.range ? (n.elemTemp.find("." + g).eq(0).data("value", l
				.value[0]), n.elemTemp.find("." + g).eq(1).data("value", l.value[1])) : n.elemTemp.find(
				"." + g).data("value", l.value), t.html(n.elemTemp), "vertical" === l.type && n.elemTemp
			.height(l.height + "px"), l.showstep) {
			for (var o = (l.max - l.min) / l.step, r = "", u = 1; u < 1 + o; u++) {
				var d = 100 * u / o;
				d < 100 && (r += '<div class="layui-slider-step" style="' + ("vertical" === l.type ?
					"bottom" : "left") + ":" + d + '%"></div>')
			}
			n.elemTemp.append(r)
		}
		l.input && !l.range && (e = h(
			'<div class="layui-slider-input layui-input"><div class="layui-slider-input-txt"><input type="text" class="layui-input"></div><div class="layui-slider-input-btn"><i class="layui-icon layui-icon-up"></i><i class="layui-icon layui-icon-down"></i></div></div>'
			), t.css("position", "relative"), t.append(e), t.find("." + T).children("input").val(l
			.value), "vertical" === l.type ? e.css({
			left: 0,
			top: -48
		}) : n.elemTemp.css("margin-right", e.outerWidth() + 15)), l.disabled ? (n.elemTemp.addClass(c),
			n.elemTemp.find("." + b).addClass(c)) : n.slide(), n.elemTemp.find("." + b).on("mouseover",
			function() {
				var e = "vertical" === l.type ? l.height : n.elemTemp[0].offsetWidth,
					i = n.elemTemp.find("." + g),
					t = ("vertical" === l.type ? e - h(this).parent()[0].offsetTop - i.height() : h(
						this).parent()[0].offsetLeft) / e * 100,
					i = h(this).parent().data("value"),
					e = l.setTips ? l.setTips(i) : i;
				n.elemTemp.find("." + x).html(e), clearTimeout(a), a = setTimeout(function() {
					"vertical" === l.type ? n.elemTemp.find("." + x).css({
						bottom: t + "%",
						"margin-bottom": "20px",
						display: "inline-block"
					}) : n.elemTemp.find("." + x).css({
						left: t + "%",
						display: "inline-block"
					})
				}, 300)
			}).on("mouseout", function() {
			clearTimeout(a), n.elemTemp.find("." + x).css("display", "none")
		})
	}, i.prototype.slide = function(e, i, t) {
		var o = this.config,
			r = this.elemTemp,
			u = function() {
				return "vertical" === o.type ? o.height : r[0].offsetWidth
			},
			d = r.find("." + g),
			s = r.next(".layui-slider-input"),
			c = s.children("." + T).children("input").val(),
			m = 100 / ((o.max - o.min) / Math.ceil(o.step)),
			v = function(e, i) {
				e = 100 < (e = 100 < Math.ceil(e) * m ? Math.ceil(e) * m : Math.round(e) * m) ? 100 : e, d
					.eq(i).css("vertical" === o.type ? "bottom" : "left", e + "%");
				var t, a = p(d[0].offsetLeft),
					n = o.range ? p(d[1].offsetLeft) : 0,
					l = ("vertical" === o.type ? (r.find("." + x).css({
							bottom: e + "%",
							"margin-bottom": "20px"
						}), a = p(u() - d[0].offsetTop - d.height()), n = o.range ? p(u() - d[1]
							.offsetTop - d.height()) : 0) : r.find("." + x).css("left", e + "%"), a = 100 <
						a ? 100 : a, n = 100 < n ? 100 : n, Math.min(a, n)),
					a = Math.abs(a - n),
					n = ("vertical" === o.type ? r.find("." + y).css({
						height: a + "%",
						bottom: l + "%"
					}) : r.find("." + y).css({
						width: a + "%",
						left: l + "%"
					}), o.min + Math.round((o.max - o.min) * e / 100));
				c = n, s.children("." + T).children("input").val(c), d.eq(i).data("value", n), r.find("." +
					x).html(o.setTips ? o.setTips(n) : n), o.range && (t = [d.eq(0).data("value"), d.eq(
					1).data("value")])[0] > t[1] && t.reverse(), o.change && o.change(o.range ? t : n)
			},
			p = function(e) {
				var i = e / u() * 100 / m,
					t = Math.round(i) * m;
				return t = e == u() ? Math.ceil(i) * m : t
			},
			f = h(['<div class="layui-auxiliar-moving" id="LAY-slider-moving"></div'].join(""));
		if ("set" === e) return v(i, t);
		r.find("." + b).each(function(l) {
			var s = h(this);
			s.on("mousedown", function(e) {
				e = e || window.event;
				var i, t, a = s.parent()[0].offsetLeft,
					n = e.clientX;
				"vertical" === o.type && (a = u() - s.parent()[0].offsetTop - d.height(),
					n = e.clientY);
				e = function(e) {
					e = e || window.event;
					var i = a + ("vertical" === o.type ? n - e.clientY : e.clientX - n),
						i = (i = (i = i < 0 ? 0 : i) > u() ? u() : i) / u() * 100 / m;
					v(i, l), s.addClass(w), r.find("." + x).show(), e.preventDefault()
				}, i = function() {
					s.removeClass(w), r.find("." + x).hide()
				}, t = function() {
					i && i(), f.remove()
				}, h("#LAY-slider-moving")[0] || h("body").append(f), f.on("mousemove",
					e), f.on("mouseup", t).on("mouseleave", t)
			})
		}), r.on("click", function(e) {
			var i = h("." + b),
				t = h(this);
			!i.is(event.target) && 0 === i.has(event.target).length && i.length && (t = (i = (i = (
					i = "vertical" === o.type ? u() - e.clientY + t.offset().top - h(
						window).scrollTop() : e.clientX - t.offset().left - h(window)
					.scrollLeft()) < 0 ? 0 : i) > u() ? u() : i) / u() * 100 / m, i = o.range ?
				"vertical" === o.type ? Math.abs(i - parseInt(h(d[0]).css("bottom"))) > Math
				.abs(i - parseInt(h(d[1]).css("bottom"))) ? 1 : 0 : Math.abs(i - d[0]
					.offsetLeft) > Math.abs(i - d[1].offsetLeft) ? 1 : 0 : 0, v(t, i), e
				.preventDefault())
		}), s.children(".layui-slider-input-btn").children("i").each(function(i) {
			h(this).on("click", function() {
				c = s.children("." + T).children("input").val();
				var e = ((c = 1 == i ? c - o.step < o.min ? o.min : Number(c) - o.step :
						Number(c) + o.step > o.max ? o.max : Number(c) + o.step) - o
					.min) / (o.max - o.min) * 100 / m;
				v(e, 0)
			})
		});
		var a = function() {
			var e = this.value,
				e = (e = (e = (e = isNaN(e) ? 0 : e) < o.min ? o.min : e) > o.max ? o.max : e, ((this
					.value = e) - o.min) / (o.max - o.min) * 100 / m);
			v(e, 0)
		};
		s.children("." + T).children("input").on("keydown", function(e) {
			13 === e.keyCode && (e.preventDefault(), a.call(this))
		}).on("change", a)
	}, i.prototype.events = function() {
		this.config
	}, t.render = function(e) {
		e = new i(e);
		return function() {
			var t = this,
				a = t.config;
			return {
				setValue: function(e, i) {
					return a.value = e, t.slide("set", e, i || 0)
				},
				config: a
			}
		}.call(e)
	}, e(a, t)
});
layui.define(["jquery", "lay"], function(e) {
	"use strict";
	var k = layui.jquery,
		n = layui.lay,
		r = layui.device().mobile ? "click" : "mousedown",
		l = {
			config: {},
			index: layui.colorpicker ? layui.colorpicker.index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = k.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, "colorpicker", e, i)
			}
		},
		t = "layui-colorpicker",
		c = ".layui-colorpicker-main",
		y = "layui-icon-down",
		x = "layui-icon-close",
		P = "layui-colorpicker-trigger-span",
		C = "layui-colorpicker-trigger-i",
		B = "layui-colorpicker-side-slider",
		w = "layui-colorpicker-basis",
		D = "layui-colorpicker-alpha-bgcolor",
		j = "layui-colorpicker-alpha-slider",
		E = "layui-colorpicker-basis-cursor",
		F = "layui-colorpicker-main-input",
		H = function(e) {
			var i = {
					h: 0,
					s: 0,
					b: 0
				},
				o = Math.min(e.r, e.g, e.b),
				r = Math.max(e.r, e.g, e.b),
				n = r - o;
			return i.b = r, i.s = 0 != r ? 255 * n / r : 0, 0 != i.s ? e.r == r ? i.h = (e.g - e.b) / n : e.g ==
				r ? i.h = 2 + (e.b - e.r) / n : i.h = 4 + (e.r - e.g) / n : i.h = -1, r == o && (i.h = 0), i
				.h *= 60, i.h < 0 && (i.h += 360), i.s *= 100 / 255, i.b *= 100 / 255, i
		},
		M = function(e) {
			var i, o = {},
				r = e.h,
				n = 255 * e.s / 100,
				e = 255 * e.b / 100;
			return 0 == n ? o.r = o.g = o.b = e : (e = r % 60 * ((i = e) - (n = (255 - n) * e / 255)) / 60, (r =
				360 == r ? 0 : r) < 60 ? (o.r = i, o.b = n, o.g = n + e) : r < 120 ? (o.g = i, o.b = n,
				o.r = i - e) : r < 180 ? (o.g = i, o.r = n, o.b = n + e) : r < 240 ? (o.b = i, o.r = n,
				o.g = i - e) : r < 300 ? (o.b = i, o.g = n, o.r = n + e) : r < 360 ? (o.r = i, o.g = n,
				o.b = i - e) : (o.r = 0, o.g = 0, o.b = 0)), {
				r: Math.round(o.r),
				g: Math.round(o.g),
				b: Math.round(o.b)
			}
		},
		f = function(e) {
			var e = M(e),
				o = [e.r.toString(16), e.g.toString(16), e.b.toString(16)];
			return k.each(o, function(e, i) {
				1 == i.length && (o[e] = "0" + i)
			}), o.join("")
		},
		Y = function(e) {
			e = e.match(/[0-9]{1,3}/g) || [];
			return {
				r: e[0],
				g: e[1],
				b: e[2]
			}
		},
		I = k(window),
		a = k(document),
		s = function(e) {
			this.index = ++l.index, this.config = k.extend({}, this.config, l.config, e), this.render()
		};
	s.prototype.config = {
		color: "",
		size: null,
		alpha: !1,
		format: "hex",
		predefine: !1,
		colors: ["#009688", "#5FB878", "#1E9FFF", "#FF5722", "#FFB800", "#01AAED", "#999", "#c00",
			"#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585", "rgb(0, 186, 189)",
			"rgb(255, 120, 0)", "rgb(250, 212, 0)", "#393D49", "rgba(0,0,0,.5)",
			"rgba(255, 69, 0, 0.68)", "rgba(144, 240, 144, 0.5)", "rgba(31, 147, 255, 0.73)"
		]
	}, s.prototype.render = function() {
		var e = this,
			i = e.config,
			o = k(i.elem);
		if (1 < o.length) return layui.each(o, function() {
			l.render(k.extend({}, i, {
				elem: this
			}))
		}), e;
		k.extend(i, n.options(o[0]));
		var o = k(['<div class="layui-unselect layui-colorpicker">', "<span " + ("rgb" == i.format && i
					.alpha ? 'class="layui-colorpicker-trigger-bgcolor"' : "") + ">",
				'<span class="layui-colorpicker-trigger-span" ', 'lay-type="' + ("rgb" == i.format ? i
					.alpha ? "rgba" : "torgb" : "") + '" ', 'style="' + (o = "", i.color ? (o = i.color,
					3 < (i.color.match(/[0-9]{1,3}/g) || []).length && (i.alpha && "rgb" == i
						.format || (o = "#" + f(H(Y(i.color))))), "background: " + o) : o) + '">',
				'<i class="layui-icon layui-colorpicker-trigger-i ' + (i.color ? y : x) + '"></i>',
				"</span>", "</span>", "</div>"
			].join("")),
			r = i.elem = k(i.elem);
		i.size && o.addClass("layui-colorpicker-" + i.size), r.addClass("layui-inline").html(e
			.elemColorBox = o), e.color = e.elemColorBox.find("." + P)[0].style.background, e.events()
	}, s.prototype.renderPicker = function() {
		var o, e = this,
			i = e.config,
			r = e.elemColorBox[0],
			i = e.elemPicker = k(['<div id="layui-colorpicker' + e.index + '" data-index="' + e.index +
				'" class="layui-anim layui-anim-downbit layui-colorpicker-main">',
				'<div class="layui-colorpicker-main-wrapper">', '<div class="layui-colorpicker-basis">',
				'<div class="layui-colorpicker-basis-white"></div>',
				'<div class="layui-colorpicker-basis-black"></div>',
				'<div class="layui-colorpicker-basis-cursor"></div>', "</div>",
				'<div class="layui-colorpicker-side">',
				'<div class="layui-colorpicker-side-slider"></div>', "</div>", "</div>",
				'<div class="layui-colorpicker-main-alpha ' + (i.alpha ? "layui-show" : "") + '">',
				'<div class="layui-colorpicker-alpha-bgcolor">',
				'<div class="layui-colorpicker-alpha-slider"></div>', "</div>", "</div>", i.predefine ?
				(o = ['<div class="layui-colorpicker-main-pre">'], layui.each(i.colors, function(e, i) {
					o.push(['<div class="layui-colorpicker-pre' + (3 < (i.match(
								/[0-9]{1,3}/g) || []).length ?
							" layui-colorpicker-pre-isalpha" : "") + '">',
						'<div style="background:' + i + '"></div>', "</div>"
					].join(""))
				}), o.push("</div>"), o.join("")) : "", '<div class="layui-colorpicker-main-input">',
				'<div class="layui-inline">', '<input type="text" class="layui-input">', "</div>",
				'<div class="layui-btn-container">',
				'<button class="layui-btn layui-btn-primary layui-btn-sm" colorpicker-events="clear">\u6e05\u7a7a</button>',
				'<button class="layui-btn layui-btn-sm" colorpicker-events="confirm">\u786e\u5b9a</button>',
				"</div", "</div>", "</div>"
			].join(""));
		e.elemColorBox.find("." + P)[0];
		k(c)[0] && k(c).data("index") == e.index ? e.removePicker(s.thisElemInd) : (e.removePicker(s
				.thisElemInd), k("body").append(i)), s.thisElemInd = e.index, s.thisColor = r.style
			.background, e.position(), e.pickerEvents()
	}, s.prototype.removePicker = function(e) {
		this.config;
		return k("#layui-colorpicker" + (e || this.index)).remove(), this
	}, s.prototype.position = function() {
		var e = this,
			i = e.config;
		return n.position(e.bindElem || e.elemColorBox[0], e.elemPicker[0], {
			position: i.position,
			align: "center"
		}), e
	}, s.prototype.val = function() {
		var e, i = this,
			o = (i.config, i.elemColorBox.find("." + P)),
			r = i.elemPicker.find("." + F),
			n = o[0].style.backgroundColor;
		n ? (e = H(Y(n)), o = o.attr("lay-type"), i.select(e.h, e.s, e.b), "torgb" === o && r.find("input")
			.val(n), "rgba" === o && (e = Y(n), 3 == (n.match(/[0-9]{1,3}/g) || []).length ? (r.find(
						"input").val("rgba(" + e.r + ", " + e.g + ", " + e.b + ", 1)"), i.elemPicker
					.find("." + j).css("left", 280)) : (r.find("input").val(n), o = 280 * n.slice(n
					.lastIndexOf(",") + 1, n.length - 1), i.elemPicker.find("." + j).css("left", o)), i
				.elemPicker.find("." + D)[0].style.background = "linear-gradient(to right, rgba(" + e
				.r + ", " + e.g + ", " + e.b + ", 0), rgb(" + e.r + ", " + e.g + ", " + e.b + "))")) : (
			i.select(0, 100, 100), r.find("input").val(""), i.elemPicker.find("." + D)[0].style
			.background = "", i.elemPicker.find("." + j).css("left", 280))
	}, s.prototype.side = function() {
		var n = this,
			l = n.config,
			t = n.elemColorBox.find("." + P),
			c = t.attr("lay-type"),
			a = n.elemPicker.find(".layui-colorpicker-side"),
			e = n.elemPicker.find("." + B),
			s = n.elemPicker.find("." + w),
			r = n.elemPicker.find("." + E),
			d = n.elemPicker.find("." + D),
			f = n.elemPicker.find("." + j),
			u = e[0].offsetTop / 180 * 360,
			p = 100 - (r[0].offsetTop + 3) / 180 * 100,
			g = (r[0].offsetLeft + 3) / 260 * 100,
			h = Math.round(f[0].offsetLeft / 280 * 100) / 100,
			v = n.elemColorBox.find("." + C),
			i = n.elemPicker.find(".layui-colorpicker-pre").children("div"),
			b = function(e, i, o, r) {
				n.select(e, i, o);
				e = M({
					h: e,
					s: i,
					b: o
				});
				v.addClass(y).removeClass(x), t[0].style.background = "rgb(" + e.r + ", " + e.g + ", " + e
					.b + ")", "torgb" === c && n.elemPicker.find("." + F).find("input").val("rgb(" + e.r +
						", " + e.g + ", " + e.b + ")"), "rgba" === c && (f.css("left", 280 * r), n
						.elemPicker.find("." + F).find("input").val("rgba(" + e.r + ", " + e.g + ", " + e
							.b + ", " + r + ")"), t[0].style.background = "rgba(" + e.r + ", " + e.g +
						", " + e.b + ", " + r + ")", d[0].style.background =
						"linear-gradient(to right, rgba(" + e.r + ", " + e.g + ", " + e.b + ", 0), rgb(" + e
						.r + ", " + e.g + ", " + e.b + "))"), l.change && l.change(n.elemPicker.find("." +
						F).find("input").val())
			},
			o = k(['<div class="layui-auxiliar-moving" id="LAY-colorpicker-moving"></div>'].join("")),
			m = function(e) {
				k("#LAY-colorpicker-moving")[0] || k("body").append(o), o.on("mousemove", e), o.on(
					"mouseup",
					function() {
						o.remove()
					}).on("mouseleave", function() {
					o.remove()
				})
			};
		e.on("mousedown", function(e) {
			var r = this.offsetTop,
				n = e.clientY;
			m(function(e) {
				var i = r + (e.clientY - n),
					o = a[0].offsetHeight,
					o = (i = o < (i = i < 0 ? 0 : i) ? o : i) / 180 * 360;
				b(u = o, g, p, h), e.preventDefault()
			}), e.preventDefault()
		}), a.on("click", function(e) {
			var i = e.clientY - k(this).offset().top,
				i = (i = (i = i < 0 ? 0 : i) > this.offsetHeight ? this.offsetHeight : i) / 180 *
				360;
			b(u = i, g, p, h), e.preventDefault()
		}), r.on("mousedown", function(e) {
			var l = this.offsetTop,
				t = this.offsetLeft,
				c = e.clientY,
				a = e.clientX;
			layui.stope(e), m(function(e) {
				var i = l + (e.clientY - c),
					o = t + (e.clientX - a),
					r = s[0].offsetHeight - 3,
					n = s[0].offsetWidth - 3,
					n = ((o = n < (o = o < -3 ? -3 : o) ? n : o) + 3) / 260 * 100,
					o = 100 - ((i = r < (i = i < -3 ? -3 : i) ? r : i) + 3) / 180 * 100;
				b(u, g = n, p = o, h), e.preventDefault()
			}), e.preventDefault()
		}), s.on("mousedown", function(e) {
			var i = e.clientY - k(this).offset().top - 3 + I.scrollTop(),
				o = e.clientX - k(this).offset().left - 3 + I.scrollLeft(),
				o = ((i = i < -3 ? -3 : i) > this.offsetHeight - 3 && (i = this.offsetHeight - 3), (
					(o = (o = o < -3 ? -3 : o) > this.offsetWidth - 3 ? this.offsetWidth - 3 :
						o) + 3) / 260 * 100),
				i = 100 - (i + 3) / 180 * 100;
			b(u, g = o, p = i, h), layui.stope(e), e.preventDefault(), r.trigger(e, "mousedown")
		}), f.on("mousedown", function(e) {
			var r = this.offsetLeft,
				n = e.clientX;
			m(function(e) {
				var i = r + (e.clientX - n),
					o = d[0].offsetWidth,
					o = (o < (i = i < 0 ? 0 : i) && (i = o), Math.round(i / 280 * 100) /
						100);
				b(u, g, p, h = o), e.preventDefault()
			}), e.preventDefault()
		}), d.on("click", function(e) {
			var i = e.clientX - k(this).offset().left,
				i = ((i = i < 0 ? 0 : i) > this.offsetWidth && (i = this.offsetWidth), Math.round(
					i / 280 * 100) / 100);
			b(u, g, p, h = i), e.preventDefault()
		}), i.each(function() {
			k(this).on("click", function() {
				k(this).parent(".layui-colorpicker-pre").addClass("selected").siblings()
					.removeClass("selected");
				var e = this.style.backgroundColor,
					i = H(Y(e)),
					o = e.slice(e.lastIndexOf(",") + 1, e.length - 1);
				u = i.h, g = i.s, p = i.b, 3 == (e.match(/[0-9]{1,3}/g) || []).length && (
					o = 1), h = o, b(i.h, i.s, i.b, o)
			})
		})
	}, s.prototype.select = function(e, i, o, r) {
		var n = this,
			l = (n.config, f({
				h: e,
				s: 100,
				b: 100
			})),
			t = f({
				h: e,
				s: i,
				b: o
			}),
			e = e / 360 * 180,
			o = 180 - o / 100 * 180 - 3,
			i = i / 100 * 260 - 3;
		n.elemPicker.find("." + B).css("top", e), n.elemPicker.find("." + w)[0].style.background = "#" + l,
			n.elemPicker.find("." + E).css({
				top: o,
				left: i
			}), "change" !== r && n.elemPicker.find("." + F).find("input").val("#" + t)
	}, s.prototype.pickerEvents = function() {
		var c = this,
			a = c.config,
			s = c.elemColorBox.find("." + P),
			d = c.elemPicker.find("." + F + " input"),
			o = {
				clear: function(e) {
					s[0].style.background = "", c.elemColorBox.find("." + C).removeClass(y).addClass(x),
						c.color = "", a.done && a.done(""), c.removePicker()
				},
				confirm: function(e, i) {
					var o, r, n = d.val(),
						l = n,
						t = {};
					if (-1 < n.indexOf(",") ? (t = H(Y(n)), c.select(t.h, t.s, t.b), s[0].style
							.background = l = "#" + f(t), 3 < (n.match(/[0-9]{1,3}/g) || []).length &&
							"rgba" === s.attr("lay-type") && (o = 280 * n.slice(n.lastIndexOf(",") + 1,
									n.length - 1), c.elemPicker.find("." + j).css("left", o), l = s[0]
								.style.background = n)) : (3 == (o = -1 < (o = n).indexOf("#") ? o
							.substring(1) : o).length && (o = (r = o.split(""))[0] + r[0] + r[1] +
							r[1] + r[2] + r[2]), r = {
							r: (o = parseInt(o, 16)) >> 16,
							g: (65280 & o) >> 8,
							b: 255 & o
						}, t = H(r), s[0].style.background = l = "#" + f(t), c.elemColorBox.find(
							"." + C).removeClass(x).addClass(y)), "change" === i) return c.select(t.h, t
						.s, t.b, i), void(a.change && a.change(l));
					c.color = n, a.done && a.done(n), c.removePicker()
				}
			};
		c.elemPicker.on("click", "*[colorpicker-events]", function() {
			var e = k(this),
				i = e.attr("colorpicker-events");
			o[i] && o[i].call(this, e)
		}), d.on("keyup", function(e) {
			var i = k(this);
			o.confirm.call(this, i, 13 === e.keyCode ? null : "change")
		})
	}, s.prototype.events = function() {
		var i = this,
			e = i.config,
			o = i.elemColorBox.find("." + P);
		i.elemColorBox.on("click", function() {
			i.renderPicker(), k(c)[0] && (i.val(), i.side())
		}), e.elem[0] && !i.elemColorBox[0].eventHandler && (a.on(r, function(e) {
			k(e.target).hasClass(t) || k(e.target).parents("." + t)[0] || k(e.target).hasClass(c
				.replace(/\./g, "")) || k(e.target).parents(c)[0] || i.elemPicker && (i
				.color ? (e = H(Y(i.color)), i.select(e.h, e.s, e.b)) : i.elemColorBox.find(
					"." + C).removeClass(y).addClass(x), o[0].style.background = i.color ||
				"", i.removePicker())
		}), I.on("resize", function() {
			if (!i.elemPicker || !k(c)[0]) return !1;
			i.position()
		}), i.elemColorBox[0].eventHandler = !0)
	}, l.render = function(e) {
		e = new s(e);
		return function() {
			return {
				config: this.config
			}
		}.call(e)
	}, e("colorpicker", l)
});
layui.define("jquery", function(t) {
	"use strict";
	var u = layui.$,
		d = (layui.hint(), layui.device()),
		c = "element",
		r = "layui-this",
		y = "layui-show",
		i = function() {
			this.config = {}
		},
		h = (i.prototype.set = function(t) {
			return u.extend(!0, this.config, t), this
		}, i.prototype.on = function(t, i) {
			return layui.onevent.call(this, c, t, i)
		}, i.prototype.tabAdd = function(t, i) {
			var a, t = u(".layui-tab[lay-filter=" + t + "]"),
				e = t.children(".layui-tab-title"),
				l = e.children(".layui-tab-bar"),
				t = t.children(".layui-tab-content"),
				n = "<li" + (a = [], layui.each(i, function(t, i) {
					/^(title|content)$/.test(t) || a.push("lay-" + t + '="' + i + '"')
				}), 0 < a.length && a.unshift(""), a.join(" ")) + ">" + (i.title || "unnaming") + "</li>";
			return l[0] ? l.before(n) : e.append(n), t.append('<div class="layui-tab-item">' + (i.content ||
				"") + "</div>"), C.hideTabMore(!0), C.tabAuto(), this
		}, i.prototype.tabDelete = function(t, i) {
			t = u(".layui-tab[lay-filter=" + t + "]").children(".layui-tab-title").find('>li[lay-id="' + i +
				'"]');
			return C.tabDelete(null, t), this
		}, i.prototype.tabChange = function(t, i) {
			t = u(".layui-tab[lay-filter=" + t + "]").children(".layui-tab-title").find('>li[lay-id="' + i +
				'"]');
			return C.tabClick.call(t[0], null, null, t), this
		}, i.prototype.tab = function(a) {
			a = a || {}, e.on("click", a.headerElem, function(t) {
				var i = u(this).index();
				C.tabClick.call(this, t, i, null, a)
			})
		}, i.prototype.progress = function(t, i) {
			var a = "layui-progress",
				t = u("." + a + "[lay-filter=" + t + "]").find("." + a + "-bar"),
				a = t.find("." + a + "-text");
			return t.css("width", i).attr("lay-percent", i), a.text(i), this
		}, ".layui-nav"),
		f = "layui-nav-item",
		l = "layui-nav-bar",
		p = "layui-nav-tree",
		b = "layui-nav-child",
		v = "layui-nav-more",
		m = "layui-anim layui-anim-upbit",
		C = {
			tabClick: function(t, i, a, e) {
				e = e || {};
				var a = a || u(this),
					i = i || a.parent().children("li").index(a),
					l = e.headerElem ? a.parent() : a.parents(".layui-tab").eq(0),
					e = e.bodyElem ? u(e.bodyElem) : l.children(".layui-tab-content").children(
						".layui-tab-item"),
					n = a.find("a"),
					n = "javascript:;" !== n.attr("href") && "_blank" === n.attr("target"),
					s = "string" == typeof a.attr("lay-unselect"),
					o = l.attr("lay-filter");
				n || s || (a.addClass(r).siblings().removeClass(r), e.eq(i).addClass(y).siblings()
					.removeClass(y)), layui.event.call(this, c, "tab(" + o + ")", {
					elem: l,
					index: i
				})
			},
			tabDelete: function(t, i) {
				var i = i || u(this).parent(),
					a = i.index(),
					e = i.parents(".layui-tab").eq(0),
					l = e.children(".layui-tab-content").children(".layui-tab-item"),
					n = e.attr("lay-filter");
				i.hasClass(r) && (i.next()[0] && i.next().is("li") ? C.tabClick.call(i.next()[0], null, a +
					1) : i.prev()[0] && i.prev().is("li") && C.tabClick.call(i.prev()[0], null, a -
					1)), i.remove(), l.eq(a).remove(), setTimeout(function() {
					C.tabAuto()
				}, 50), layui.event.call(this, c, "tabDelete(" + n + ")", {
					elem: e,
					index: a
				})
			},
			tabAuto: function() {
				var e = "layui-tab-bar",
					l = "layui-tab-close",
					n = this;
				u(".layui-tab").each(function() {
					var t = u(this),
						i = t.children(".layui-tab-title"),
						a = (t.children(".layui-tab-content").children(".layui-tab-item"),
							'lay-stope="tabmore"'),
						a = u('<span class="layui-unselect layui-tab-bar" ' + a + "><i " + a +
							' class="layui-icon">&#xe61a;</i></span>');
					n === window && 8 != d.ie && C.hideTabMore(!0), t.attr("lay-allowClose") && i
						.find("li").each(function() {
							var t, i = u(this);
							i.find("." + l)[0] || ((t = u(
								'<i class="layui-icon layui-icon-close layui-unselect ' +
								l + '"></i>')).on("click", C.tabDelete), i.append(t))
						}), "string" != typeof t.attr("lay-unauto") && (i.prop("scrollWidth") > i
							.outerWidth() + 1 ? i.find("." + e)[0] || (i.append(a), t.attr(
								"overflow", ""), a.on("click", function(t) {
								i[this.title ? "removeClass" : "addClass"](
									"layui-tab-more"), this.title = this.title ? "" :
									"\u6536\u7f29"
							})) : (i.find("." + e).remove(), t.removeAttr("overflow")))
				})
			},
			hideTabMore: function(t) {
				var i = u(".layui-tab-title");
				!0 !== t && "tabmore" === u(t.target).attr("lay-stope") || (i.removeClass("layui-tab-more"),
					i.find(".layui-tab-bar").attr("title", ""))
			},
			clickThis: function() {
				var t = u(this),
					i = t.parents(h),
					a = i.attr("lay-filter"),
					e = t.parent(),
					l = t.siblings("." + b),
					n = "string" == typeof e.attr("lay-unselect");
				"javascript:;" !== t.attr("href") && "_blank" === t.attr("target") || n || l[0] || (i.find(
					"." + r).removeClass(r), e.addClass(r)), i.hasClass(p) && (l.removeClass(m), l[0] &&
					(e["none" === l.css("display") ? "addClass" : "removeClass"](f + "ed"), "all" === i
						.attr("lay-shrink") && e.siblings().removeClass(f + "ed"))), layui.event.call(
					this, c, "nav(" + a + ")", t)
			},
			collapse: function() {
				var t = u(this),
					i = t.find(".layui-colla-icon"),
					a = t.siblings(".layui-colla-content"),
					e = t.parents(".layui-collapse").eq(0),
					l = e.attr("lay-filter"),
					n = "none" === a.css("display");
				"string" == typeof e.attr("lay-accordion") && ((e = e.children(".layui-colla-item")
						.children("." + y)).siblings(".layui-colla-title").children(".layui-colla-icon")
					.html("&#xe602;"), e.removeClass(y)), a[n ? "addClass" : "removeClass"](y), i.html(
					n ? "&#xe61a;" : "&#xe602;"), layui.event.call(this, c, "collapse(" + l + ")", {
					title: t,
					content: a,
					show: n
				})
			}
		},
		a = (i.prototype.render = i.prototype.init = function(t, i) {
			var a = i ? '[lay-filter="' + i + '"]' : "",
				i = {
					tab: function() {
						C.tabAuto.call({})
					},
					nav: function() {
						var s = {},
							o = {},
							c = {},
							r = "layui-nav-title";
						u(h + a).each(function(t) {
							var i = u(this),
								a = u('<span class="' + l + '"></span>'),
								e = i.find("." + f);
							i.find("." + l)[0] || (i.append(a), (i.hasClass(p) ? e.find(
								"dd,>." + r) : e).on("mouseenter", function() {
								! function(t, i, a) {
									var e, l = u(this),
										n = l.find("." + b);
									i.hasClass(p) ? n[0] || (e = l.children("." +
										r), t.css({
											top: l.offset().top - i.offset()
												.top,
											height: (e[0] ? e : l)
												.outerHeight(),
											opacity: 1
										})) : (n.addClass(m), n.hasClass(
											"layui-nav-child-c") && n.css({
											left: -(n.outerWidth() - l
												.width()) / 2
										}), n[0] ? t.css({
											left: t.position().left + t
												.width() / 2,
											width: 0,
											opacity: 0
										}) : t.css({
											left: l.position().left +
												parseFloat(l.css(
													"marginLeft")),
											top: l.position().top + l
												.height() - t.height()
										}), s[a] = setTimeout(function() {
											t.css({
												width: n[0] ? 0 : l
													.width(),
												opacity: n[0] ? 0 :
													1
											})
										}, d.ie && d.ie < 10 ? 0 : 200),
										clearTimeout(c[a]), "block" === n.css(
											"display") && clearTimeout(o[a]), o[
											a] = setTimeout(function() {
											n.addClass(y), l.find("." + v)
												.addClass(v + "d")
										}, 300))
								}.call(this, a, i, t)
							}).on("mouseleave", function() {
								i.hasClass(p) ? a.css({
									height: 0,
									opacity: 0
								}) : (clearTimeout(o[t]), o[t] = setTimeout(
									function() {
										i.find("." + b).removeClass(y), i
											.find("." + v).removeClass(v +
												"d")
									}, 300))
							}), i.on("mouseleave", function() {
								clearTimeout(s[t]), c[t] = setTimeout(function() {
									i.hasClass(p) || a.css({
										width: 0,
										left: a.position().left + a
											.width() / 2,
										opacity: 0
									})
								}, 200)
							})), e.find("a").each(function() {
								var t = u(this);
								t.parent();
								t.siblings("." + b)[0] && !t.children("." + v)[0] && t
									.append('<i class="layui-icon layui-icon-down ' +
										v + '"></i>'), t.off("click", C.clickThis).on(
										"click", C.clickThis)
							})
						})
					},
					breadcrumb: function() {
						u(".layui-breadcrumb" + a).each(function() {
							var t = u(this),
								i = "lay-separator",
								a = t.attr(i) || "/",
								e = t.find("a");
							e.next("span[" + i + "]")[0] || (e.each(function(t) {
								t !== e.length - 1 && u(this).after("<span " + i +
									">" + a + "</span>")
							}), t.css("visibility", "visible"))
						})
					},
					progress: function() {
						var e = "layui-progress";
						u("." + e + a).each(function() {
							var t = u(this),
								i = t.find(".layui-progress-bar"),
								a = i.attr("lay-percent");
							i.css("width", /^.+\/.+$/.test(a) ? 100 * new Function("return " +
								a)() + "%" : a), t.attr("lay-showPercent") && setTimeout(
								function() {
									i.html('<span class="' + e + '-text">' + a + "</span>")
								}, 350)
						})
					},
					collapse: function() {
						u(".layui-collapse" + a).each(function() {
							u(this).find(".layui-colla-item").each(function() {
								var t = u(this),
									i = t.find(".layui-colla-title"),
									t = "none" === t.find(".layui-colla-content").css(
										"display");
								i.find(".layui-colla-icon").remove(), i.append(
									'<i class="layui-icon layui-colla-icon">' + (t ?
										"&#xe602;" : "&#xe61a;") + "</i>"), i.off(
									"click", C.collapse).on("click", C.collapse)
							})
						})
					}
				};
			return i[t] ? i[t]() : layui.each(i, function(t, i) {
				i()
			})
		}, new i),
		e = u(document);
	u(function() {
		a.render()
	});
	e.on("click", ".layui-tab-title li", C.tabClick), e.on("click", C.hideTabMore), u(window).on("resize", C
		.tabAuto), t(c, a)
});
layui.define("layer", function(e) {
	"use strict";
	var v = layui.$,
		t = layui.layer,
		r = layui.hint(),
		y = layui.device(),
		i = {
			config: {},
			set: function(e) {
				var t = this;
				return t.config = v.extend({}, t.config, e), t
			},
			on: function(e, t) {
				return layui.onevent.call(this, n, e, t)
			}
		},
		n = "ftp.html",
		o = "layui-upload-file",
		a = "layui-upload-form",
		F = "layui-upload-iframe",
		b = "layui-upload-choose",
		x = function(e) {
			var t = this;
			t.config = v.extend({}, t.config, i.config, e), t.render()
		};
	x.prototype.config = {
		accept: "images",
		exts: "",
		auto: !0,
		bindAction: "",
		url: "",
		force: "",
		field: "file",
		acceptMime: "",
		method: "post",
		data: {},
		drag: !0,
		size: 0,
		number: 0,
		multiple: !1
	}, x.prototype.render = function(e) {
		var t = this;
		(e = t.config).elem = v(e.elem), e.bindAction = v(e.bindAction), t.file(), t.events()
	}, x.prototype.file = function() {
		var e = this,
			t = e.config,
			i = e.elemFile = v(['<input class="' + o + '" type="file" accept="' + t.acceptMime +
				'" name="' + t.field + '"', t.multiple ? " multiple" : "", ">"
			].join("")),
			n = t.elem.next();
		(n.hasClass(o) || n.hasClass(a)) && n.remove(), y.ie && y.ie < 10 && t.elem.wrap(
			'<div class="layui-upload-wrap"></div>'), e.isFile() ? (e.elemFile = t.elem, t.field = t
			.elem[0].name) : t.elem.after(i), y.ie && y.ie < 10 && e.initIE()
	}, x.prototype.initIE = function() {
		var i, e = this.config,
			t = v('<iframe id="' + F + '" class="' + F + '" name="' + F + '" frameborder="0"></iframe>'),
			n = v(['<form target="' + F + '" class="' + a +
				'" method="post" key="set-mine" enctype="multipart/form-data" action="' + e.url + '">',
				"</form>"
			].join(""));
		v("#" + F)[0] || v("body").append(t), e.elem.next().hasClass(a) || (this.elemFile.wrap(n), e.elem
			.next("." + a).append((i = [], layui.each(e.data, function(e, t) {
				t = "function" == typeof t ? t() : t, i.push('<input type="hidden" name="' +
					e + '" value="' + t + '">')
			}), i.join(""))))
	}, x.prototype.msg = function(e) {
		return t.msg(e, {
			icon: 2,
			shift: 6
		})
	}, x.prototype.isFile = function() {
		var e = this.config.elem[0];
		if (e) return "input" === e.tagName.toLocaleLowerCase() && "file" === e.type
	}, x.prototype.preview = function(n) {
		window.FileReader && layui.each(this.chooseFiles, function(e, t) {
			var i = new FileReader;
			i.readAsDataURL(t), i.onload = function() {
				n && n(e, t, this.result)
			}
		})
	}, x.prototype.upload = function(i, e) {
		var n, o, t, a, l = this,
			r = l.config,
			u = l.elemFile[0],
			c = function() {
				var t = 0,
					o = 0,
					e = i || l.files || l.chooseFiles || u.files,
					a = function() {
						r.multiple && t + o === l.fileLength && "function" == typeof r.allDone && r
					.allDone({
							total: l.fileLength,
							successful: t,
							failed: o
						})
					};
				layui.each(e, function(i, e) {
					var n = new FormData,
						e = (n.append(r.field, e), layui.each(r.data, function(e, t) {
							t = "function" == typeof t ? t() : t, n.append(e, t)
						}), {
							url: r.url,
							type: "post",
							data: n,
							contentType: !1,
							processData: !1,
							dataType: "json",
							headers: r.headers || {},
							success: function(e) {
								t++, f(i, e), a()
							},
							error: function(e) {
								o++, l.msg("Request URL is abnormal: " + (e.statusText ||
									"error")), p(i), a()
							}
						});
					"function" == typeof r.progress && (e.xhr = function() {
						var e = v.ajaxSettings.xhr();
						return e.upload.addEventListener("progress", function(e) {
							var t;
							e.lengthComputable && (t = Math.floor(e.loaded / e
								.total * 100), r.progress(t, (r.item || r
								.elem)[0], e, i))
						}), e
					}), v.ajax(e)
				})
			},
			s = function() {
				var n = v("#" + F);
				l.elemFile.parent().submit(), clearInterval(x.timer), x.timer = setInterval(function() {
					var e, t = n.contents().find("body");
					try {
						e = t.text()
					} catch (i) {
						l.msg("Cross-domain requests are not supported"), clearInterval(x.timer),
						p()
					}
					e && (clearInterval(x.timer), t.html(""), f(0, e))
				}, 30)
			},
			f = function(e, t) {
				if (l.elemFile.next("." + b).remove(), u.value = "", "json" === r.force && "object" !=
					typeof t) try {
					t = JSON.parse(t)
				} catch (i) {
					return t = {}, l.msg("Please return JSON data format")
				}
				"function" == typeof r.done && r.done(t, e || 0, function(e) {
					l.upload(e)
				})
			},
			p = function(e) {
				r.auto && (u.value = ""), "function" == typeof r.error && r.error(e || 0, function(e) {
					l.upload(e)
				})
			},
			d = r.exts,
			m = (o = [], layui.each(i || l.chooseFiles, function(e, t) {
				o.push(t.name)
			}), o),
			h = {
				preview: function(e) {
					l.preview(e)
				},
				upload: function(e, t) {
					var i = {};
					i[e] = t, l.upload(i)
				},
				pushFile: function() {
					return l.files = l.files || {}, layui.each(l.chooseFiles, function(e, t) {
						l.files[e] = t
					}), l.files
				},
				resetFile: function(e, t, i) {
					t = new File([t], i);
					l.files = l.files || {}, l.files[e] = t
				}
			},
			g = {
				file: "\u6587\u4ef6",
				images: "\u56fe\u7247",
				video: "\u89c6\u9891",
				audio: "\u97f3\u9891"
			} [r.accept] || "\u6587\u4ef6",
			m = 0 === m.length ? u.value.match(/[^\/\\]+\..+/g) || [] || "" : m;
		if (0 !== m.length) {
			switch (r.accept) {
				case "file":
					layui.each(m, function(e, t) {
						if (d && !RegExp(".\\.(" + d + ")$", "i").test(escape(t))) return n = !0
					});
					break;
				case "video":
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "avi|mp4|wma|rmvb|rm|flash|3gp|flv") + ")$",
								"i").test(escape(t))) return n = !0
					});
					break;
				case "audio":
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "mp3|wav|mid") + ")$", "i").test(escape(t)))
							return n = !0
					});
					break;
				default:
					layui.each(m, function(e, t) {
						if (!RegExp(".\\.(" + (d || "jpg|png|gif|bmp|jpeg") + ")$", "i").test(
								escape(t))) return n = !0
					})
			}
			if (n) return l.msg("\u9009\u62e9\u7684" + g +
				"\u4e2d\u5305\u542b\u4e0d\u652f\u6301\u7684\u683c\u5f0f"), u.value = "";
			if ("choose" !== e && !r.auto || (r.choose && r.choose(h), "choose" !== e)) {
				if (l.fileLength = (t = 0, g = i || l.files || l.chooseFiles || u.files, layui.each(g,
						function() {
							t++
						}), t), r.number && l.fileLength > r.number) return l.msg(
					"\u540c\u65f6\u6700\u591a\u53ea\u80fd\u4e0a\u4f20: " + r.number +
					" \u4e2a\u6587\u4ef6<br>\u60a8\u5f53\u524d\u5df2\u7ecf\u9009\u62e9\u4e86: " + l
					.fileLength + " \u4e2a\u6587\u4ef6");
				if (0 < r.size && !(y.ie && y.ie < 10))
					if (layui.each(l.chooseFiles, function(e, t) {
							t.size > 1024 * r.size && (t = 1 <= (t = r.size / 1024) ? t.toFixed(2) +
								"MB" : r.size + "KB", u.value = "", a = t)
						}), a) return l.msg("\u6587\u4ef6\u5927\u5c0f\u4e0d\u80fd\u8d85\u8fc7 " + a);
				if (!r.before || !1 !== r.before(h)) y.ie ? (9 < y.ie ? c : s)() : c()
			}
		}
	}, x.prototype.reload = function(e) {
		delete(e = e || {}).elem, delete e.bindAction;
		(e = this.config = v.extend({}, this.config, i.config, e)).elem.next().attr({
			name: e.name,
			accept: e.acceptMime,
			multiple: e.multiple
		})
	}, x.prototype.events = function() {
		var n = this,
			o = n.config,
			a = function(e) {
				n.chooseFiles = {}, layui.each(e, function(e, t) {
					var i = (new Date).getTime();
					n.chooseFiles[i + "-" + e] = t
				})
			},
			l = function(e, t) {
				var i = n.elemFile,
					e = (o.item || o.elem, 1 < e.length ? e.length + "\u4e2a\u6587\u4ef6" : (e[0] || {})
						.name || i[0].value.match(/[^\/\\]+\..+/g) || [] || "");
				i.next().hasClass(b) && i.next().remove(), n.upload(null, "choose"), n.isFile() || o
					.choose || i.after('<span class="layui-inline ' + b + '">' + e + "</span>")
			};
		o.elem.off("upload.start").on("upload.start", function() {
			var e = v(this),
				t = e.attr("lay-data");
			if (t) try {
				t = new Function("return " + t)(), n.config = v.extend({}, o, t)
			} catch (i) {
				r.error("Upload element property lay-data configuration item has a syntax error: " +
					t)
			}
			n.config.item = e, n.elemFile[0].click()
		}), y.ie && y.ie < 10 || o.elem.off("upload.over").on("upload.over", function() {
			v(this).attr("lay-over", "")
		}).off("upload.leave").on("upload.leave", function() {
			v(this).removeAttr("lay-over")
		}).off("upload.drop").on("upload.drop", function(e, t) {
			var i = v(this),
				t = t.originalEvent.dataTransfer.files || [];
			i.removeAttr("lay-over"), a(t), o.auto ? n.upload() : l(t)
		}), n.elemFile.off("upload.change").on("upload.change", function() {
			var e = this.files || [];
			a(e), o.auto ? n.upload() : l(e)
		}), o.bindAction.off("upload.action").on("upload.action", function() {
			n.upload()
		}), o.elem.data("haveEvents") || (n.elemFile.on("change", function() {
			v(this).trigger("upload.change")
		}), o.elem.on("click", function() {
			n.isFile() || v(this).trigger("upload.start")
		}), o.drag && o.elem.on("dragover", function(e) {
			e.preventDefault(), v(this).trigger("upload.over")
		}).on("dragleave", function(e) {
			v(this).trigger("upload.leave")
		}).on("drop", function(e) {
			e.preventDefault(), v(this).trigger("upload.drop", e)
		}), o.bindAction.on("click", function() {
			v(this).trigger("upload.action")
		}), o.elem.data("haveEvents", !0))
	}, i.render = function(e) {
		e = new x(e);
		return function() {
			var t = this;
			return {
				upload: function(e) {
					t.upload.call(t, e)
				},
				reload: function(e) {
					t.reload.call(t, e)
				},
				config: t.config
			}
		}.call(e)
	}, e(n, i)
});
layui.define(["layer", "util"], function(e) {
	"use strict";
	var C = layui.$,
		h = layui.layer,
		d = layui.util,
		l = layui.hint(),
		w = (layui.device(), "form"),
		o = ".layui-form",
		T = "layui-this",
		$ = "layui-hide",
		E = "layui-disabled",
		t = function() {
			this.config = {
				verify: {
					required: [/[\S]+/, "\u5fc5\u586b\u9879\u4e0d\u80fd\u4e3a\u7a7a"],
					phone: [/^1\d{10}$/, "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"],
					email: [/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
						"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e"
					],
					url: [/^(#|(http(s?)):\/\/|\/\/)[^\s]+\.[^\s]+$/,
						"\u94fe\u63a5\u683c\u5f0f\u4e0d\u6b63\u786e"
					],
					number: function(e) {
						if (!e || isNaN(e)) return "\u53ea\u80fd\u586b\u5199\u6570\u5b57"
					},
					date: [/^(\d{4})[-\/](\d{1}|0\d{1}|1[0-2])([-\/](\d{1}|0\d{1}|[1-2][0-9]|3[0-1]))*$/,
						"\u65e5\u671f\u683c\u5f0f\u4e0d\u6b63\u786e"
					],
					identity: [/(^\d{15}$)|(^\d{17}(x|X|\d)$)/,
						"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7"
					]
				},
				autocomplete: null
			}
		},
		i = (t.prototype.set = function(e) {
			return C.extend(!0, this.config, e), this
		}, t.prototype.verify = function(e) {
			return C.extend(!0, this.config.verify, e), this
		}, t.prototype.getFormElem = function(e) {
			return C(o + (e ? '[lay-filter="' + e + '"]' : ""))
		}, t.prototype.on = function(e, t) {
			return layui.onevent.call(this, w, e, t)
		}, t.prototype.val = function(e, i) {
			return this.getFormElem(e).each(function(e, t) {
				var a = C(this);
				layui.each(i, function(e, t) {
					var i, e = a.find('[name="' + e + '"]');
					e[0] && ("checkbox" === (i = e[0].type) ? e[0].checked = t : "radio" ===
						i ? e.each(function() {
							this.value == t && (this.checked = !0)
						}) : e.val(t))
				})
			}), r.render(null, e), this.getValue(e)
		}, t.prototype.getValue = function(e, t) {
			t = t || this.getFormElem(e);
			var a = {},
				n = {},
				e = t.find("input,select,textarea");
			return layui.each(e, function(e, t) {
				var i;
				C(this);
				t.name = (t.name || "").replace(/^\s*|\s*&/, ""), t.name && (/^.*\[\]$/.test(t
					.name) && (i = t.name.match(/^(.*)\[\]$/g)[0], a[i] = 0 | a[i], i = t.name
						.replace(/^(.*)\[\]$/, "$1[" + a[i]++ + "]")), /^checkbox|radio$/.test(t
						.type) && !t.checked || (n[i || t.name] = t.value))
			}), n
		}, t.prototype.render = function(e, t) {
			var i = this.config,
				a = C(o + (t ? '[lay-filter="' + t + '"]' : "")),
				n = {
					input: function(e) {
						e = e || a.find("input,textarea");
						i.autocomplete && e.attr("autocomplete", i.autocomplete)
					},
					select: function(e) {
						var p, c = "\u8bf7\u9009\u62e9",
							m = "layui-form-select",
							g = "layui-select-title",
							k = "layui-select-none",
							x = "",
							e = e || a.find("select"),
							b = function(e, t) {
								C(e.target).parent().hasClass(g) && !t || (C("." + m).removeClass(m +
									"ed " + m + "up"), p && x && p.val(x)), p = null
							},
							u = function(a, e, t) {
								var s, r, i, n, o, l, c = C(this),
									u = a.find("." + g),
									d = u.find("input"),
									f = a.find("dl"),
									h = f.children("dd"),
									y = f.children("dt"),
									v = this.selectedIndex;
								e || (r = c.attr("lay-search"), i = function() {
									var e = a.offset().top + a.outerHeight() + 5 - q
									.scrollTop(),
										t = f.outerHeight();
									v = c[0].selectedIndex, a.addClass(m + "ed"), h.removeClass(
											$), y.removeClass($), s = null, h.eq(v).addClass(T)
										.siblings().removeClass(T), e + t > q.height() && t <=
										e && a.addClass(m + "up"), o()
								}, n = function(e) {
									a.removeClass(m + "ed " + m + "up"), d.blur(), s = null,
										e || l(d.val(), function(e) {
											var t = c[0].selectedIndex;
											e && (x = C(c[0].options[t]).html(), 0 === t &&
												x === d.attr("placeholder") && (x = ""),
												d.val(x || ""))
										})
								}, o = function() {
									var e, t, i = f.children("dd." + T);
									i[0] && (e = i.position().top, t = f.height(), i = i
									.height(), t < e && f.scrollTop(e + f.scrollTop() -
										t + i - 5), e < 0 && f.scrollTop(e + f
										.scrollTop() - 5))
								}, u.on("click", function(e) {
									a.hasClass(m + "ed") ? n() : (b(e, !0), i()), f.find(
										"." + k).remove()
								}), u.find(".layui-edge").on("click", function() {
									d.focus()
								}), d.on("keyup", function(e) {
									9 === e.keyCode && i()
								}).on("keydown", function(l) {
									var e = l.keyCode,
										r = (9 === e && n(), function(a, n) {
											l.preventDefault();
											var e = function() {
													var e = f.children("dd." + T);
													if (f.children("dd." + $)[0] &&
														"next" === a) {
														var t = f.children("dd:not(." +
																$ + ",." + E + ")"),
															i = t.eq(0).index();
														if (0 <= i && i < e.index() && !
															t.hasClass(T)) return t.eq(
																0).prev()[0] ? t.eq(
																0).prev() : f
															.children(":last")
													}
													return n && n[0] ? n : s && s[0] ?
														s : e
												}(),
												t = e[a](),
												i = e[a]("dd:not(." + $ + ")");
											return t[0] ? (s = e[a](), i[0] && !i
													.hasClass(E) || !s[0] ? (i.addClass(
															T).siblings().removeClass(
														T), void o()) : r(a, s)) : s =
												null
										});
									38 === e && r("prev"), 40 === e && r("next"), 13 ===
										e && (l.preventDefault(), f.children("dd." + T)
											.trigger("click"))
								}), l = function(a, e, n) {
									var l = 0,
										t = (layui.each(h, function() {
											var e = C(this),
												t = e.text(),
												i = ("cs" !== r && (t = t.toLowerCase(),
														a = a.toLowerCase()), -1 === t
													.indexOf(a));
											("" === a || "blur" === n ? a !== t : i) &&
											l++, "keyup" === n && e[i ? "addClass" :
												"removeClass"]($)
										}), "keyup" === n && layui.each(y, function() {
											var e = C(this),
												t = e.nextUntil("dt").filter("dd");
											e[t.length == t.filter("." + $).length ?
												"addClass" : "removeClass"]($)
										}), l === h.length);
									return e(t), t
								}, t && d.on("keyup", function(e) {
									var t = this.value,
										e = e.keyCode;
									if (9 === e || 13 === e || 37 === e || 38 === e ||
										39 === e || 40 === e) return !1;
									l(t, function(e) {
											e ? f.find("." + k)[0] || f.append(
													'<p class="' + k +
													'">\u65e0\u5339\u914d\u9879</p>') :
												f.find("." + k).remove()
										}, "keyup"), "" === t && f.find("." + k).remove(),
										o()
								}).on("blur", function(e) {
									var t = c[0].selectedIndex;
									p = d, x = C(c[0].options[t]).html(), 0 === t && x === d
										.attr("placeholder") && (x = ""), setTimeout(
											function() {
												l(d.val(), function(e) {
													x || d.val("")
												}, "blur")
											}, 200)
								}), h.on("click", function() {
									var e = C(this),
										t = e.attr("lay-value"),
										i = c.attr("lay-filter");
									return e.hasClass(E) || (e.hasClass(
										"layui-select-tips") ? d.val("") : (d.val(e
											.text()), e.addClass(T)), e.siblings()
										.removeClass(T), c.val(t).removeClass(
											"layui-form-danger"), layui.event.call(this,
											w, "select(" + i + ")", {
												elem: c[0],
												value: t,
												othis: a
											}), n(!0)), !1
								}), a.find("dl>dt").on("click", function(e) {
									return !1
								}), C(document).off("click", b).on("click", b))
							};
						e.each(function(e, t) {
							var i = C(this),
								a = i.next("." + m),
								n = this.disabled,
								l = t.value,
								r = C(t.options[t.selectedIndex]),
								t = t.options[0];
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							var s, o = "string" == typeof i.attr("lay-search"),
								t = t && !t.value && t.innerHTML || c,
								r = C(['<div class="' + (o ? "" : "layui-unselect ") + m, (n ?
										" layui-select-disabled" : "") + '">',
									'<div class="' + g + '">',
									'<input type="text" placeholder="' + d.escape(C.trim(
									t)) + '" value="' + d.escape(C.trim(l ? r.html() :
									"")) + '"' + (!n && o ? "" : " readonly") +
									' class="layui-input' + (o ? "" : " layui-unselect") + (
										n ? " " + E : "") + '">',
									'<i class="layui-edge"></i></div>',
									'<dl class="layui-anim layui-anim-upbit' + (i.find(
										"optgroup")[0] ? " layui-select-group" : "") + '">',
									(t = i.find("*"), s = [], layui.each(t, function(e, t) {
											0 !== e || t.value ? "optgroup" === t
												.tagName.toLowerCase() ? s.push("<dt>" +
													t.label + "</dt>") : s.push(
													'<dd lay-value="' + d.escape(t
														.value) + '" class="' + (l === t
														.value ? T : "") + (t.disabled ?
														" " + E : "") + '">' + C.trim(t
														.innerHTML) + "</dd>") : s.push(
													'<dd lay-value="" class="layui-select-tips">' +
													C.trim(t.innerHTML || c) + "</dd>")
										}), 0 === s.length && s.push(
											'<dd lay-value="" class="' + E +
											'">\u6ca1\u6709\u9009\u9879</dd>'), s.join("") +
										"</dl>"), "</div>"
								].join(""));
							a[0] && a.remove(), i.after(r), u.call(this, r, n, o)
						})
					},
					checkbox: function(e) {
						var o = {
								checkbox: ["layui-form-checkbox", "layui-form-checked", "checkbox"],
								_switch: ["layui-form-switch", "layui-form-onswitch", "switch"]
							},
							e = e || a.find("input[type=checkbox]");
						e.each(function(e, t) {
							var i = C(this),
								a = i.attr("lay-skin"),
								n = (i.attr("lay-text") || "").split("|"),
								l = this.disabled,
								r = o[a = "switch" === a ? "_" + a : a] || o.checkbox;
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							var s = i.next("." + r[0]),
								t = C(['<div class="layui-unselect ' + r[0], t.checked ? " " +
									r[1] : "", l ? " layui-checkbox-disabled " + E : "",
									'"', a ? ' lay-skin="' + a + '"' : "", ">", (l = {
										checkbox: [t.title.replace(/\s/g, "") ?
											"<span>" + t.title + "</span>" : "",
											'<i class="layui-icon layui-icon-ok"></i>'
										].join(""),
										_switch: "<em>" + ((t.checked ? n[0] : n[1]) ||
											"") + "</em><i></i>"
									})[a] || l.checkbox, "</div>"
								].join(""));
							s[0] && s.remove(), i.after(t),
								function(i, a) {
									var n = C(this);
									i.on("click", function() {
										var e = n.attr("lay-filter"),
											t = (n.attr("lay-text") || "").split("|");
										n[0].disabled || (n[0].checked ? (n[0]
												.checked = !1, i.removeClass(a[1])
												.find("em").text(t[1])) : (n[0]
												.checked = !0, i.addClass(a[1])
												.find("em").text(t[0])), layui.event
											.call(n[0], w, a[2] + "(" + e + ")", {
												elem: n[0],
												value: n[0].value,
												othis: i
											}))
									})
								}.call(this, t, r)
						})
					},
					radio: function(e) {
						var r = "layui-form-radio",
							s = ["&#xe643;", "&#xe63f;"],
							e = e || a.find("input[type=radio]");
						e.each(function(e, t) {
							var i = C(this),
								a = i.next("." + r),
								n = this.disabled;
							if ("string" == typeof i.attr("lay-ignore")) return i.show();
							a[0] && a.remove();
							n = C(['<div class="layui-unselect ' + r, t.checked ? " " + r +
								"ed" : "", (n ? " layui-radio-disabled " + E : "") +
								'">', '<i class="layui-anim layui-icon">' + s[t
									.checked ? 0 : 1] + "</i>", "<div>" + (a = t
									.title || "", a = "string" == typeof i.next().attr(
										"lay-radio") ? i.next().html() : a) + "</div>",
								"</div>"
							].join(""));
							i.after(n),
								function(a) {
									var n = C(this),
										l = "layui-anim-scaleSpring";
									a.on("click", function() {
										var e = n[0].name,
											t = n.parents(o),
											i = n.attr("lay-filter"),
											e = t.find("input[name=" + e.replace(
												/(\.|#|\[|\])/g, "\\$1") + "]");
										n[0].disabled || (layui.each(e, function() {
												var e = C(this).next("." + r);
												this.checked = !1, e
													.removeClass(r + "ed"), e
													.find(".layui-icon")
													.removeClass(l).html(s[1])
											}), n[0].checked = !0, a.addClass(r +
												"ed"), a.find(".layui-icon")
											.addClass(l).html(s[0]), layui.event
											.call(n[0], w, "radio(" + i + ")", {
												elem: n[0],
												value: n[0].value,
												othis: a
											}))
									})
								}.call(this, n)
						})
					}
				};
			return "object" === layui.type(e) ? e.each(function(e, t) {
				var i = C(t);
				i.closest(o).length && ("SELECT" === t.tagName ? n.select(i) : "INPUT" === t
					.tagName && ("checkbox" === (t = t.type) || "radio" === t ? n[t](i) : n
						.input(i)))
			}) : e ? n[e] ? n[e]() : l.error('\u4e0d\u652f\u6301\u7684 "' + e +
				'" \u8868\u5355\u6e32\u67d3') : layui.each(n, function(e, t) {
				t()
			}), this
		}, t.prototype.validate = function(e) {
			var u = null,
				d = r.config.verify,
				f = "layui-form-danger";
			return !(e = C(e))[0] || (e.attr("lay-verify") !== undefined || !1 !== this.validate(e.find(
				"*[lay-verify]"))) && (layui.each(e, function(e, r) {
				var s = C(this),
					t = (s.attr("lay-verify") || "").split("|"),
					o = s.attr("lay-verType"),
					c = s.val();
				if (s.removeClass(f), layui.each(t, function(e, t) {
						var i = "",
							a = d[t];
						if (a) {
							var n = "function" == typeof a ? i = a(c, r) : !a[0].test(c),
								l = "select" === r.tagName.toLowerCase() ||
								/^checkbox|radio$/.test(r.type),
								i = i || a[1];
							if ("required" === t && (i = s.attr("lay-reqText") || i), n)
								return "tips" === o ? h.tips(i, "string" != typeof s.attr(
									"lay-ignore") && l ? s.next() : s, {
									tips: 1
								}) : "alert" === o ? h.alert(i, {
									title: "\u63d0\u793a",
									shadeClose: !0
								}) : /\bstring|number\b/.test(typeof i) && h.msg(i, {
									icon: 5,
									shift: 6
								}), setTimeout(function() {
									(l ? s.next().find("input") : r).focus()
								}, 7), s.addClass(f), u = !0
						}
					}), u) return u
			}), !u)
		}, t.prototype.submit = function(e, t) {
			var i = C(this),
				e = "string" == typeof e ? e : i.attr("lay-filter"),
				a = this.getFormElem ? this.getFormElem(e) : i.parents(o).eq(0),
				n = a.find("*[lay-verify]");
			if (!r.validate(n)) return !1;
			n = r.getValue(null, a), a = {
				elem: this.getFormElem ? window.event && window.event.target : this,
				form: (this.getFormElem ? a : i.parents("form"))[0],
				field: n
			};
			return "function" == typeof t && t(a), layui.event.call(this, w, "submit(" + e + ")", a)
		}),
		r = new t,
		t = C(document),
		q = C(window);
	C(function() {
		r.render()
	}), t.on("reset", o, function() {
		var e = C(this).attr("lay-filter");
		setTimeout(function() {
			r.render(null, e)
		}, 50)
	}), t.on("submit", o, i).on("click", "*[lay-submit]", i), e(w, r)
});
layui.define(["laytpl", "laypage", "form", "util"], function(e) {
	"use strict";
	var m = layui.$,
		v = layui.laytpl,
		c = layui.laypage,
		g = layui.layer,
		y = layui.form,
		b = layui.util,
		f = layui.hint(),
		h = layui.device(),
		x = {
			config: {
				checkName: "LAY_CHECKED",
				indexName: "LAY_TABLE_INDEX",
				disabledName: "LAY_DISABLED"
			},
			cache: {},
			index: layui.table ? layui.table.index + 1e4 : 0,
			set: function(e) {
				var t = this;
				return t.config = m.extend({}, t.config, e), t
			},
			on: function(e, t) {
				return layui.onevent.call(this, C, e, t)
			}
		},
		p = function() {
			var a = this,
				e = a.config,
				i = e.id || e.index;
			return i && (p.that[i] = a, p.config[i] = e), {
				config: e,
				reload: function(e, t) {
					a.reload.call(a, e, t)
				},
				reloadData: function(e, t) {
					x.reloadData(i, e, t)
				},
				setColsWidth: function() {
					a.setColsWidth.call(a)
				},
				resize: function() {
					a.resize.call(a)
				}
			}
		},
		l = function(e) {
			var t = p.config[e];
			return t || f.error(e ? "The table instance with ID '" + e + "' not found" :
				"ID argument required"), t || null
		},
		k = function(e) {
			var t = this.config || {},
				a = (e = e || {}).item3,
				i = e.content,
				t = (("escape" in a ? a : t).escape && (i = b.escape(i)), e.text && a.exportTemplet || a
					.templet || a.toolbar);
			return t && (i = "function" == typeof t ? t.call(a, e.tplData, e.obj) : v(m(t).html() || String(i))
				.render(m.extend({
					LAY_COL: a
				}, e.tplData))), e.text ? m("<div>" + i + "</div>").text() : i
		},
		C = "table",
		w = "layui-hide",
		r = "layui-hide-v",
		d = "layui-none",
		s = "layui-table-view",
		u = ".layui-table-header",
		T = ".layui-table-body",
		L = ".layui-table-pageview",
		N = ".layui-table-sort",
		D = "layui-table-edit",
		A = "layui-table-hover",
		E = "layui-table-col-special",
		_ = "LAY_TABLE_MOVE_DICT",
		t = function(e) {
			return ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
				'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
				"<thead>", "{{# layui.each(d.data.cols, function(i1, item1){ }}", "<tr>",
				"{{# layui.each(item1, function(i2, item2){ }}",
				'{{# if(item2.fixed && item2.fixed !== "right"){ left = true; } }}',
				'{{# if(item2.fixed === "right"){ right = true; } }}', (e = e || {}).fixed && "right" !== e
				.fixed ? '{{# if(item2.fixed && item2.fixed !== "right"){ }}' : "right" === e.fixed ?
				'{{# if(item2.fixed === "right"){ }}' : "",
				"{{# var isSort = !(item2.colGroup) && item2.sort; }}",
				'<th data-field="{{= item2.field||i2 }}" data-key="{{=d.index}}-{{=i1}}-{{=i2}}" {{# if( item2.parentKey){ }}data-parentkey="{{= item2.parentKey }}"{{# } }} {{# if(item2.minWidth){ }}data-minwidth="{{=item2.minWidth}}"{{# } }} {{#if(item2.colspan){}} colspan="{{=item2.colspan}}"{{#} if(item2.rowspan){}} rowspan="{{=item2.rowspan}}"{{#}}} {{# if(item2.unresize || item2.colGroup){ }}data-unresize="true"{{# } }} class="{{# if(item2.hide){ }}layui-hide{{# } }}{{# if(isSort){ }} layui-unselect{{# } }}{{# if(!item2.field){ }} layui-table-col-special{{# } }}">',
				'<div class="layui-table-cell laytable-cell-', "{{# if(item2.colGroup){ }}", "group",
				"{{# } else { }}", "{{=d.index}}-{{=i1}}-{{=i2}}", '{{# if(item2.type !== "normal"){ }}',
				" laytable-cell-{{= item2.type }}", "{{# } }}", "{{# } }}",
				'" {{#if(item2.align){}}align="{{=item2.align}}"{{#}}}>',
				'{{# if(item2.type === "checkbox"){ }}',
				'<input type="checkbox" name="layTableCheckbox" lay-skin="primary" lay-filter="layTableAllChoose" {{# if(item2[d.data.checkName]){ }}checked{{# }; }}>',
				"{{# } else { }}", '<span>{{-item2.title||""}}</span>', "{{# if(isSort){ }}",
				'<span class="layui-table-sort layui-inline"><i class="layui-edge layui-table-sort-asc" title="\u5347\u5e8f"></i><i class="layui-edge layui-table-sort-desc" title="\u964d\u5e8f"></i></span>',
				"{{# } }}", "{{# } }}", "</div>", "</th>", e.fixed ? "{{# }; }}" : "", "{{# }); }}",
				"</tr>", "{{# }); }}", "</thead>", "</table>"
			].join("")
		},
		a = ['<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
			'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
			"<tbody></tbody>", "</table>"
		].join(""),
		j = [, "{{# if(d.data.toolbar){ }}", '<div class="layui-table-tool">',
			'<div class="layui-table-tool-temp"></div>', '<div class="layui-table-tool-self"></div>', "</div>",
			"{{# } }}", '<div class="layui-table-box">', "{{# if(d.data.loading){ }}",
			'<div class="layui-table-init" style="background-color: #fff;">',
			'<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
			"</div>", "{{# } }}", "{{# var left, right; }}", '<div class="layui-table-header">', t(), "</div>",
			'<div class="layui-table-body layui-table-main">', a, "</div>", "{{# if(left){ }}",
			'<div class="layui-table-fixed layui-table-fixed-l">', '<div class="layui-table-header">', t({
				fixed: !0
			}), "</div>", '<div class="layui-table-body">', a, "</div>", "</div>", "{{# }; }}",
			"{{# if(right){ }}", '<div class="layui-table-fixed layui-table-fixed-r layui-hide">',
			'<div class="layui-table-header">', t({
				fixed: "right"
			}), '<div class="layui-table-mend"></div>', "</div>", '<div class="layui-table-body">', a, "</div>",
			"</div>", "{{# }; }}", "</div>", "{{# if(d.data.totalRow){ }}", '<div class="layui-table-total">',
			'<table cellspacing="0" cellpadding="0" border="0" class="layui-table" ',
			'{{# if(d.data.skin){ }}lay-skin="{{=d.data.skin}}"{{# } }} {{# if(d.data.size){ }}lay-size="{{=d.data.size}}"{{# } }} {{# if(d.data.even){ }}lay-even{{# } }}>',
			'<tbody><tr><td><div class="layui-table-cell" style="visibility: hidden;">Total</div></td></tr></tbody>',
			"</table>", "</div>", "{{# } }}", '<div class="layui-table-column layui-table-page layui-hide">',
			'<div class="layui-inline layui-table-pageview" id="layui-table-page{{=d.index}}"></div>', "</div>",
			"<style>", "{{# layui.each(d.data.cols, function(i1, item1){",
			"layui.each(item1, function(i2, item2){ }}", ".laytable-cell-{{=d.index}}-{{=i1}}-{{=i2}}{ ",
			"{{# if(item2.width){ }}", "width: {{=item2.width}}px;", "{{# } }}", " }", "{{# });", "}); }}",
			"{{# if(d.data.lineStyle){",
			'var cellClassName = ".layui-table-view-"+ d.index +" .layui-table-body .layui-table .layui-table-cell";',
			"}}", "{{= cellClassName }}{",
			"display: -webkit-box; -webkit-box-align: center; white-space: normal; {{- d.data.lineStyle }} ",
			"}", "{{= cellClassName }}:hover{overflow: auto;}", "{{# } }}", "{{# if(d.data.css){ }}",
			"{{- d.data.css }}", "{{# } }}", "</style>"
		].join(""),
		R = m(window),
		S = m(document),
		i = function(e) {
			this.index = ++x.index, this.config = m.extend({}, this.config, x.config, e), this.render()
		},
		F = (i.prototype.config = {
			limit: 10,
			loading: !0,
			escape: !0,
			cellMinWidth: 60,
			editTrigger: "click",
			defaultToolbar: ["filter", "exports", "print"],
			autoSort: !0,
			text: {
				none: "\u65e0\u6570\u636e"
			}
		}, i.prototype.render = function(e) {
			var t = this,
				a = t.config;
			if (a.elem = m(a.elem), a.where = a.where || {}, a.id = a.id || a.elem.attr("id") || t.index, a
				.request = m.extend({
					pageName: "page",
					limitName: "limit"
				}, a.request), a.response = m.extend({
					statusName: "code",
					statusCode: 0,
					msgName: "msg",
					dataName: "data",
					totalRowName: "totalRow",
					countName: "count"
				}, a.response), "object" == typeof a.page && (a.limit = a.page.limit || a.limit, a.limits =
					a.page.limits || a.limits, t.page = a.page.curr = a.page.curr || 1, delete a.page.elem,
					delete a.page.jump), !a.elem[0]) return t;
			if ("reloadData" === e) return t.pullData(t.page, {
				type: "reloadData"
			});
			a.height && /^full-\d+$/.test(a.height) && (t.fullHeightGap = a.height.split("-")[1], a.height =
				R.height() - t.fullHeightGap), t.setInit();
			var i, l, e = a.elem,
				n = e.next("." + s),
				o = t.elem = m("<div></div>");
			o.addClass((i = [s, s + "-" + t.index, "layui-form", "layui-border-box"], a.className && i.push(
					a.className), i.join(" "))).attr({
					"lay-filter": "LAY-TABLE-FORM-DF-" + t.index,
					"lay-id": a.id,
					style: (i = [], a.width && i.push("width:" + a.width + "px;"), a.height && i.push(
						"height:" + a.height + "px;"), i.join(""))
				}).html(v(j).render({
					data: a,
					index: t.index
				})), a.index = t.index, t.key = a.id || a.index, n[0] && n.remove(), e.after(o), t.layTool =
				o.find(".layui-table-tool"), t.layBox = o.find(".layui-table-box"), t.layHeader = o.find(u),
				t.layMain = o.find(".layui-table-main"), t.layBody = o.find(T), t.layFixed = o.find(
					".layui-table-fixed"), t.layFixLeft = o.find(".layui-table-fixed-l"), t.layFixRight = o
				.find(".layui-table-fixed-r"), t.layTotal = o.find(".layui-table-total"), t.layPage = o
				.find(".layui-table-page"), t.renderToolbar(), t.renderPagebar(), t.fullSize(), 1 < a.cols
				.length && (i = t.layFixed.find(u).find("th"), l = t.layHeader.first(), layui.each(i,
					function(e, t) {
						(t = m(t)).height(l.find('th[data-key="' + t.attr("data-key") + '"]').height() +
							"px")
					})), t.pullData(t.page), t.events()
		}, i.prototype.initOpts = function(e) {
			this.config;
			e.checkbox && (e.type = "checkbox"), e.space && (e.type = "space"), e.type || (e.type =
				"normal"), "normal" !== e.type && (e.unresize = !0, e.width = e.width || {
				checkbox: 50,
				radio: 50,
				space: 30,
				numbers: 60
			} [e.type])
		}, i.prototype.setInit = function(e) {
			var l, a, c = this,
				r = c.config;
			if (r.clientWidth = r.width || (l = function(e) {
					var t, a = (e = e || r.elem.parent()).width();
					try {
						t = "none" === e.css("display")
					} catch (i) {}
					return !e[0] || a && !t ? a : l(e.parent())
				})(), "width" === e) return r.clientWidth;
			r.css && -1 === r.css.indexOf(s) && (a = r.css.split("}"), layui.each(a, function(e, t) {
				t && (a[e] = "." + s + "-" + c.index + " " + t)
			}), r.css = a.join("}"));
			var d = function(a, e, i, l) {
				var n, o;
				l ? (l.key = a + "-" + i, l.hide = l.hide || !1, l.colspan = l.colspan || 1, l.rowspan =
					l.rowspan || 1, c.initOpts(l), (n = a + (parseInt(l.rowspan) || 1)) < r.cols
					.length ? (l.colGroup = !0, o = 0, layui.each(r.cols[n], function(e, t) {
						t.HAS_PARENT || 1 <= o && o == (l.colspan || 1) || (t.HAS_PARENT = !
							0, t.parentKey = a + "-" + i, o += parseInt(1 < t.colspan ?
								t.colspan : 1), d(n, r.cols[n], e, t))
					})) : l.colGroup = !1) : e.splice(i, 1)
			};
			layui.each(r.cols, function(a, i) {
				if (a) return !0;
				layui.each(i, function(e, t) {
					d(a, i, e, t)
				})
			})
		}, i.prototype.renderToolbar = function() {
			var e = this.config,
				t = [
					'<div class="layui-inline" lay-event="add"><i class="layui-icon layui-icon-add-1"></i></div>',
					'<div class="layui-inline" lay-event="update"><i class="layui-icon layui-icon-edit"></i></div>',
					'<div class="layui-inline" lay-event="delete"><i class="layui-icon layui-icon-delete"></i></div>'
				].join(""),
				a = this.layTool.find(".layui-table-tool-temp"),
				i = ("default" === e.toolbar ? a.html(t) : "string" == typeof e.toolbar && (t = m(e.toolbar)
					.html() || "") && a.html(v(t).render(e)), {
					filter: {
						title: "\u7b5b\u9009\u5217",
						layEvent: "LAYTABLE_COLS",
						icon: "layui-icon-cols"
					},
					exports: {
						title: "\u5bfc\u51fa",
						layEvent: "LAYTABLE_EXPORT",
						icon: "layui-icon-export"
					},
					print: {
						title: "\u6253\u5370",
						layEvent: "LAYTABLE_PRINT",
						icon: "layui-icon-print"
					}
				}),
				l = [];
			"object" == typeof e.defaultToolbar && layui.each(e.defaultToolbar, function(e, t) {
				t = "string" == typeof t ? i[t] : t;
				t && l.push('<div class="layui-inline" title="' + t.title + '" lay-event="' + t
					.layEvent + '"><i class="layui-icon ' + t.icon + '"></i></div>')
			}), this.layTool.find(".layui-table-tool-self").html(l.join(""))
		}, i.prototype.renderPagebar = function() {
			var e, t = this.config,
				a = this.layPagebar = m('<div class="layui-inline layui-table-pagebar"></div>');
			t.pagebar && ((e = m(t.pagebar).html() || "") && a.append(v(e).render(t)), this.layPage.append(
				a))
		}, i.prototype.setParentCol = function(e, t) {
			var a = this.config,
				i = this.layHeader.find('th[data-key="' + a.index + "-" + t + '"]'),
				l = parseInt(i.attr("colspan")) || 0;
			i[0] && (t = t.split("-"), t = a.cols[t[0]][t[1]], e ? l-- : l++, i.attr("colspan", l), i[l <
				1 ? "addClass" : "removeClass"](w), t.colspan = l, t.hide = l < 1, (a = i.data(
				"parentkey")) && this.setParentCol(e, a))
		}, i.prototype.setColsPatch = function() {
			var a = this,
				e = a.config;
			layui.each(e.cols, function(e, t) {
				layui.each(t, function(e, t) {
					t.hide && a.setParentCol(t.hide, t.parentKey)
				})
			})
		}, i.prototype.setColsWidth = function() {
			var t, a, i = this,
				o = i.config,
				l = 0,
				c = 0,
				r = 0,
				d = 0,
				s = i.setInit("width"),
				e = (i.eachCols(function(e, t) {
					t.hide || l++
				}), s = s - ("line" === o.skin || "nob" === o.skin ? 2 : l + 1) - i.getScrollWidth(i
					.layMain[0]) - 1, function(n) {
					layui.each(o.cols, function(e, l) {
						layui.each(l, function(e, t) {
							var a = 0,
								i = t.minWidth || o.cellMinWidth;
							t ? t.colGroup || t.hide || (n ? r && r < i && (c--, a =
								i) : (a = t.width || 0, /\d+%$/.test(a) ? (a = Math
									.floor(parseFloat(a) / 100 * s)) < i && (a =
									i) : a || (t.width = a = 0, c++)), t.hide && (
									a = 0), d += a) : l.splice(e, 1)
						})
					}), d < s && c && (r = (s - d) / c)
				}),
				n = (e(), e(!0), i.autoColNums = c, i.eachCols(function(e, t) {
						var a = t.minWidth || o.cellMinWidth;
						t.colGroup || t.hide || (0 === t.width ? i.getCssRule(o.index + "-" + t.key,
							function(e) {
								e.style.width = Math.floor(a <= r ? r : a) + "px"
							}) : /\d+%$/.test(t.width) && i.getCssRule(o.index + "-" + t.key,
							function(e) {
								e.style.width = Math.floor(parseFloat(t.width) / 100 * s) + "px"
							}))
					}), i.layMain.width() - i.getScrollWidth(i.layMain[0]) - i.layMain.children("table")
					.outerWidth());
			i.autoColNums && -l <= n && n <= l && (e = (a = (t = function(e) {
				return !(e = e || i.layHeader.eq(0).find("thead th:last-child")).data(
					"field") && e.prev()[0] ? t(e.prev()) : e
			})()).data("key"), i.getCssRule(e, function(e) {
				var t = e.style.width || a.outerWidth();
				e.style.width = parseFloat(t) + n + "px", 0 < i.layMain.height() - i.layMain
					.prop("clientHeight") && (e.style.width = parseFloat(e.style.width) - 1 +
						"px")
			})), i.loading(!0)
		}, i.prototype.resize = function() {
			this.fullSize(), this.setColsWidth(), this.scrollPatch()
		}, i.prototype.reload = function(e, t, a) {
			var i = this;
			e = e || {}, delete i.haveInit, layui.each(e, function(e, t) {
				"array" === layui.type(t) && delete i.config[e]
			}), i.config = m.extend(t, {}, i.config, e), i.render(a)
		}, i.prototype.errorView = function(e) {
			var t = this,
				a = t.layMain.find("." + d),
				e = m('<div class="' + d + '">' + (e || "Error") + "</div>");
			a[0] && (t.layNone.remove(), a.remove()), t.layFixed.addClass(w), t.layMain.find("tbody").html(
					""), t.layMain.append(t.layNone = e), t.layTotal.addClass(r), t.layPage.find(L)
				.addClass(r), x.cache[t.key] = [], t.syncCheckAll()
		}, i.prototype.page = 1, i.prototype.pullData = function(t, a) {
			var e, i = this,
				l = i.config,
				n = l.request,
				o = l.response,
				c = function() {
					"object" == typeof l.initSort && i.sort(l.initSort.field, l.initSort.type)
				};
			a = a || {}, "function" == typeof l.before && l.before(l), i.startTime = (new Date).getTime(), l
				.url ? ((e = {})[n.pageName] = t, e[n.limitName] = l.limit, n = m.extend(e, l.where), l
					.contentType && 0 == l.contentType.indexOf("application/json") && (n = JSON.stringify(
						n)), i.loading(), m.ajax({
						type: l.method || "get",
						url: l.url,
						contentType: l.contentType,
						data: n,
						dataType: l.dataType || "json",
						jsonpCallback: l.jsonpCallback,
						headers: l.headers || {},
						success: function(e) {
							(e = "function" == typeof l.parseData ? l.parseData(e) || e : e)[o
								.statusName] != o.statusCode ? (i.renderForm(), i.errorView(e[o
										.msgName] ||
									'\u8fd4\u56de\u7684\u6570\u636e\u4e0d\u7b26\u5408\u89c4\u8303\uff0c\u6b63\u786e\u7684\u6210\u529f\u72b6\u6001\u7801\u5e94\u4e3a\uff1a"' +
									o.statusName + '": ' + o.statusCode)) : (i.renderData({
									res: e,
									curr: t,
									count: e[o.countName],
									type: a.type
								}), c(), l.time = (new Date).getTime() - i.startTime + " ms"), i
								.setColsWidth(), "function" == typeof l.done && l.done(e, t, e[o
									.countName])
						},
						error: function(e, t) {
							i.errorView(
									"\u8bf7\u6c42\u5f02\u5e38\uff0c\u9519\u8bef\u63d0\u793a\uff1a" +
									t), i.renderForm(), i.setColsWidth(), "function" == typeof l
								.error && l.error(e, t)
						}
					})) : "array" === layui.type(l.data) && (e = t * l.limit - l.limit, (n = {})[o
					.dataName] = l.data.concat().splice(e, l.limit), n[o.countName] = l.data.length,
					"object" == typeof l.totalRow && (n[o.totalRowName] = m.extend({}, l.totalRow)), i
					.renderData({
						res: n,
						curr: t,
						count: n[o.countName],
						type: a.type
					}), c(), i.setColsWidth(), "function" == typeof l.done && l.done(n, t, n[o.countName]))
		}, i.prototype.eachCols = function(e) {
			return x.eachCols(null, e, this.config.cols), this
		}, i.prototype.col = function(e) {
			try {
				return e = e.split("-"), this.config.cols[e[1]][e[2]]
			} catch (t) {
				return f.error(t), {}
			}
		}, i.prototype.renderData = function(e) {
			var u = this,
				y = u.config,
				t = e.res,
				l = e.curr,
				a = e.count,
				n = e.sort,
				i = t[y.response.dataName] || [],
				t = t[y.response.totalRowName],
				h = [],
				f = [],
				p = [],
				o = function() {
					var s;
					if (y.HAS_SET_COLS_PATCH || u.setColsPatch(), y.HAS_SET_COLS_PATCH = !0, !n && u
						.sortKey) return u.sort(u.sortKey.field, u.sortKey.sort, !0);
					layui.each(i, function(o, c) {
							var a = [],
								i = [],
								r = [],
								d = o + y.limit * (l - 1) + 1;
							"array" === layui.type(c) && 0 === c.length || (n || (c[x.config
									.indexName] = o), u.eachCols(function(e, l) {
									var e = l.field || e,
										t = y.index + "-" + l.key,
										n = c[e];
									n !== undefined && null !== n || (n = ""), l.colGroup || (
										t = ['<td data-field="' + e + '" data-key="' + t +
											'" ' + (e = [], l.templet && e.push(
													'data-content="' + b.escape(n) + '"'), l
												.toolbar && e.push('data-off="true"'), l
												.event && e.push('lay-event="' + l.event +
													'"'), l.minWidth && e.push(
													'data-minwidth="' + l.minWidth + '"'), e
												.join(" ")) + ' class="' + (e = [], l
												.hide && e.push(w), l.field || e.push(E), e
												.join(" ")) + '">',
											'<div class="layui-table-cell laytable-cell-' +
											("normal" === l.type ? t : t +
												" laytable-cell-" + l.type) + '"' + (l
												.align ? ' align="' + l.align + '"' : "") +
											(e = [], l.style && e.push('style="' + l.style +
												'"'), e.join(" ")) + ">" + function() {
												var e, t = m.extend(!0, {
														LAY_INDEX: d,
														LAY_COL: l
													}, c),
													a = x.config.checkName,
													i = x.config.disabledName;
												switch (l.type) {
													case "checkbox":
														return '<input type="checkbox" name="layTableCheckbox" lay-skin="primary" ' +
															(e = [], l[a] && (c[a] = l[a],
																	l[a] && (e[0] =
																		"checked")), t[a] &&
																(e[0] = "checked"), t[i] &&
																e.push("disabled"), e.join(
																	" ")) + ">";
													case "radio":
														return t[a] && (s = o),
															'<input type="radio" name="layTableRadio_' +
															y.index + '" ' + (e = [], t[
																a] && (e[0] = "checked"), t[
																	i] && e.push(
																"disabled"), e.join(" ")) +
															' lay-type="layTableRadio">';
													case "numbers":
														return d
												}
												return l.toolbar ? v(m(l.toolbar).html() ||
													"").render(t) : k.call(u, {
													item3: l,
													content: n,
													tplData: t
												})
											}(), "</div></td>"
										].join(""), a.push(t), l.fixed && "right" !== l
										.fixed && i.push(t), "right" === l.fixed && r.push(
											t))
								}), h.push('<tr data-index="' + o + '">' + a.join("") + "</tr>"), f
								.push('<tr data-index="' + o + '">' + i.join("") + "</tr>"), p.push(
									'<tr data-index="' + o + '">' + r.join("") + "</tr>"))
						}), "fixed" === y.scrollPos && "reloadData" === e.type || u.layBody.scrollTop(0),
						"reset" === y.scrollPos && u.layBody.scrollLeft(0), u.layMain.find("." + d)
					.remove(), u.layMain.find("tbody").html(h.join("")), u.layFixLeft.find("tbody").html(f
							.join("")), u.layFixRight.find("tbody").html(p.join("")), u.renderForm(),
						"number" == typeof s && u.setThisRowChecked(s), u.syncCheckAll(), u.fullSize(), u
						.haveInit ? u.scrollPatch() : setTimeout(function() {
							u.scrollPatch()
						}, 50), u.haveInit = !0, g.close(u.tipsIndex)
				};
			return x.cache[u.key] = i, u.layTotal[0 == i.length ? "addClass" : "removeClass"](r), u.layPage[
				y.page || y.pagebar ? "removeClass" : "addClass"](w), u.layPage.find(L)[!y.page || 0 ==
				a || 0 === i.length && 1 == l ? "addClass" : "removeClass"](r), 0 === i.length ? (u
				.renderForm(), u.errorView(y.text.none)) : (u.layFixLeft.removeClass(w), n ? o() : (o(),
				u.renderTotal(i, t), u.layTotal && u.layTotal.removeClass(w), void(y.page && (y
					.page = m.extend({
						elem: "layui-table-page" + y.index,
						count: a,
						limit: y.limit,
						limits: y.limits || [10, 20, 30, 40, 50, 60, 70, 80, 90],
						groups: 3,
						layout: ["prev", "page", "next", "skip", "count", "limit"],
						prev: '<i class="layui-icon">&#xe603;</i>',
						next: '<i class="layui-icon">&#xe602;</i>',
						jump: function(e, t) {
							t || (u.page = e.curr, y.limit = e.limit, u.pullData(e
								.curr))
						}
					}, y.page), y.page.count = a, c.render(y.page)))))
		}, i.prototype.renderTotal = function(e, o) {
			var c, r = this,
				d = r.config,
				s = {};
			d.totalRow && (layui.each(e, function(e, i) {
				"array" === layui.type(i) && 0 === i.length || r.eachCols(function(e, t) {
					var e = t.field || e,
						a = i[e];
					t.totalRow && (s[e] = (s[e] || 0) + (parseFloat(a) || 0))
				})
			}), r.dataTotal = {}, c = [], r.eachCols(function(e, t) {
				var a, e = t.field || e,
					i = o && o[t.field],
					l = (a = t.totalRowText || "", n = "totalRowDecimals" in t ? t
						.totalRowDecimals : 2, n = parseFloat(s[e]).toFixed(n), (l = {
							LAY_COL: t
						})[e] = n, n = t.totalRow && k.call(r, {
							item3: t,
							content: n,
							tplData: l
						}) || a, i || n),
					n = ['<td data-field="' + e + '" data-key="' + d.index + "-" + t.key +
						'" ' + (a = [], t.align && a.push('align="' + t.align + '"'), t
							.minWidth && a.push('data-minwidth="' + t.minWidth + '"'), a.join(
								" ")) + ' class="' + (n = [], t.hide && n.push(w), t.field || n
							.push(E), n.join(" ")) + '">',
						'<div class="layui-table-cell laytable-cell-' + (a = d.index + "-" + t
							.key, "normal" === t.type ? a : a + " laytable-cell-" + t.type) +
						'"' + (n = [], t.style && n.push('style="' + t.style + '"'), n.join(
							" ")) + ">" + ("string" == typeof(a = t.totalRow || d.totalRow) ? v(
							a).render(m.extend({
							TOTAL_NUMS: i || s[e],
							LAY_COL: t
						}, t)) : l), "</div></td>"
					].join("");
				t.field && (r.dataTotal[e] = l), c.push(n)
			}), r.layTotal.find("tbody").html("<tr>" + c.join("") + "</tr>"))
		}, i.prototype.getColElem = function(e, t) {
			var a = this.config;
			return e.eq(0).find(".laytable-cell-" + a.index + "-" + t + ":eq(0)")
		}, i.prototype.renderForm = function(e) {
			this.config;
			var t = this.elem.attr("lay-filter");
			y.render(e, t)
		}, i.prototype.setThisRowChecked = function(e) {
			this.config;
			var t = "layui-table-click";
			this.layBody.find('tr[data-index="' + e + '"]').addClass(t).siblings("tr").removeClass(t)
		}, i.prototype.sort = function(l, e, t, a) {
			var i, n = this,
				o = {},
				c = n.config,
				r = c.elem.attr("lay-filter"),
				d = x.cache[n.key];
			"string" == typeof l && (s = l, n.layHeader.find("th").each(function(e, t) {
				var a = m(this),
					i = a.data("field");
				if (i === l) return l = a, s = i, !1
			}));
			try {
				var s = s || l.data("field"),
					u = l.data("key");
				if (n.sortKey && !t && s === n.sortKey.field && e === n.sortKey.sort) return;
				var y = n.layHeader.find("th .laytable-cell-" + u).find(N);
				n.layHeader.find("th").find(N).removeAttr("lay-sort"), y.attr("lay-sort", e || null), n
					.layFixed.find("th")
			} catch (h) {
				f.error("Table modules: sort field '" + s + "' not matched")
			}
			n.sortKey = {
				field: s,
				sort: e
			}, c.autoSort && ("asc" === e ? i = layui.sort(d, s) : "desc" === e ? i = layui.sort(d, s, !
				0) : (i = layui.sort(d, x.config.indexName), delete n.sortKey, delete c.initSort)), o[c
				.response.dataName] = i || d, n.renderData({
				res: o,
				curr: n.page,
				count: n.count,
				sort: !0
			}), a && (c.initSort = {
				field: s,
				type: e
			}, layui.event.call(l, C, "sort(" + r + ")", c.initSort))
		}, i.prototype.loading = function(e) {
			var t = this;
			t.config.loading && (e ? (t.layInit && t.layInit.remove(), delete t.layInit, t.layBox.find(
				".layui-table-init").remove()) : (t.layInit = m(['<div class="layui-table-init">',
				'<i class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>',
				"</div>"
			].join("")), t.layBox.append(t.layInit)))
		}, i.prototype.setCheckData = function(e, t) {
			var a = this.config,
				i = x.cache[this.key];
			i[e] && "array" !== layui.type(i[e]) && (i[e][a.checkName] = t)
		}, i.prototype.syncCheckAll = function() {
			var e = this,
				i = e.config,
				t = e.layHeader.find('input[name="layTableCheckbox"]'),
				a = function(a) {
					return e.eachCols(function(e, t) {
						"checkbox" === t.type && (t[i.checkName] = a)
					}), a
				};
			t[0] && (x.checkStatus(e.key).isAll ? (t[0].checked || (t.prop("checked", !0), e.renderForm(
				"checkbox")), a(!0)) : (t[0].checked && (t.prop("checked", !1), e.renderForm(
				"checkbox")), a(!1)))
		}, i.prototype.getCssRule = function(a, i) {
			var e = this.elem.find("style")[0],
				e = e.sheet || e.styleSheet || {},
				e = e.cssRules || e.rules;
			layui.each(e, function(e, t) {
				if (t.selectorText === ".laytable-cell-" + a) return i(t), !0
			})
		}, i.prototype.fullSize = function() {
			var e = this,
				t = e.config,
				a = t.height;
			e.fullHeightGap && (a = R.height() - e.fullHeightGap, e.elem.css("height", a = a < 135 ? 135 :
				a)), a && (a = parseFloat(a) - (e.layHeader.outerHeight() || 38), t.toolbar && (a -= e
					.layTool.outerHeight() || 50), t.totalRow && (a -= e.layTotal.outerHeight() || 40),
				(t.page || t.pagebar) && (a -= e.layPage.outerHeight() || 43), e.layMain.outerHeight(a))
		}, i.prototype.getScrollWidth = function(e) {
			var t = 0;
			return e ? t = e.offsetWidth - e.clientWidth : ((e = document.createElement("div")).style
				.width = "100px", e.style.height = "100px", e.style.overflowY = "scroll", document.body
				.appendChild(e), t = e.offsetWidth - e.clientWidth, document.body.removeChild(e)), t
		}, i.prototype.scrollPatch = function() {
			var e = this,
				t = e.layMain.children("table"),
				a = e.layMain.width() - e.layMain.prop("clientWidth"),
				i = e.layMain.height() - e.layMain.prop("clientHeight"),
				l = (e.getScrollWidth(e.layMain[0]), t.outerWidth() - e.layMain.width()),
				n = function(e) {
					var t;
					a && i ? (e = e.eq(0)).find(".layui-table-patch")[0] || ((t = m(
						'<th class="layui-table-patch"><div class="layui-table-cell"></div></th>'
						)).find("div").css({
						width: a
					}), e.find("tr").append(t)) : e.find(".layui-table-patch").remove()
				};
			n(e.layHeader), n(e.layTotal);
			n = e.layMain.height() - i;
			e.layFixed.find(T).css("height", t.height() >= n ? n : "auto"), e.layFixRight[0 < l ?
				"removeClass" : "addClass"](w), e.layFixRight.css("right", a - 1)
		}, i.prototype.events = function() {
			var s = this,
				r = s.config,
				d = r.elem.attr("lay-filter"),
				e = s.layHeader.find("th"),
				u = ".layui-table-cell",
				i = m("body"),
				l = {},
				n = (s.layTool.on("click", "*[lay-event]", function(e) {
					var a, i = m(this),
						t = i.attr("lay-event"),
						l = function(e) {
							var t = m(e.list),
								a = m('<ul class="layui-table-tool-panel"></ul>');
							a.html(t), r.height && a.css("max-height", r.height - (s.layTool
									.outerHeight() || 50)), i.find(".layui-table-tool-panel")[0] ||
								i.append(a), s.renderForm(), a.on("click", function(e) {
									layui.stope(e)
								}), e.done && e.done(a, t)
						};
					switch (layui.stope(e), S.trigger("table.tool.panel.remove"), g.close(s
						.tipsIndex), t) {
						case "LAYTABLE_COLS":
							l({
								list: (a = [], s.eachCols(function(e, t) {
									t.field && "normal" == t.type && a.push(
										'<li><input type="checkbox" name="' +
										t.field + '" data-key="' + t.key +
										'" data-parentkey="' + (t
											.parentKey || "") +
										'" lay-skin="primary" ' + (t.hide ?
											"" : "checked") + ' title="' + b
										.escape(t.title || t.field) +
										'" lay-filter="LAY_TABLE_TOOL_COLS"></li>'
										)
								}), a.join("")),
								done: function() {
									y.on("checkbox(LAY_TABLE_TOOL_COLS)", function(e) {
										var e = m(e.elem),
											i = this.checked,
											l = e.data("key"),
											n = e.data("parentkey");
										layui.each(r.cols, function(a, e) {
											layui.each(e, function(e,
											t) {
												a + "-" + e ===
													l && (e = t
														.hide, t
														.hide = !
														i, s
														.elem
														.find(
															'*[data-key="' +
															r
															.index +
															"-" +
															l +
															'"]'
															)[
															i ?
															"removeClass" :
															"addClass"
															](
														w), e !=
														t
														.hide &&
														s
														.setParentCol(
															!i,
															n),
														s
														.resize()
														)
											})
										})
									})
								}
							});
							break;
						case "LAYTABLE_EXPORT":
							h.ie ? g.tips(
								"\u5bfc\u51fa\u529f\u80fd\u4e0d\u652f\u6301 IE\uff0c\u8bf7\u7528 Chrome \u7b49\u9ad8\u7ea7\u6d4f\u89c8\u5668\u5bfc\u51fa",
								this, {
									tips: 3
								}) : l({
								list: ['<li data-type="csv">\u5bfc\u51fa csv \u683c\u5f0f\u6587\u4ef6</li>',
									'<li data-type="xls">\u5bfc\u51fa xls \u683c\u5f0f\u6587\u4ef6</li>'
								].join(""),
								done: function(e, t) {
									t.on("click", function() {
										var e = m(this).data("type");
										x.exportFile.call(s, r.id, null, e)
									})
								}
							});
							break;
						case "LAYTABLE_PRINT":
							var n = window.open("about:blank", "_blank"),
								o = ["<style>", "body{font-size: 12px; color: #5F5F5F;}",
									"table{width: 100%; border-collapse: collapse; border-spacing: 0;}",
									"th,td{line-height: 20px; padding: 9px 15px; border: 1px solid #ccc; text-align: left; font-size: 12px; color: #5F5F5F;}",
									"a{color: #5F5F5F; text-decoration:none;}",
									"*.layui-hide{display: none}", "</style>"
								].join(""),
								c = m(s.layHeader.html());
							c.append(s.layMain.find("table").html()), c.append(s.layTotal.find(
									"table").html()), c.find("th.layui-table-patch").remove(), c
								.find("thead>tr>th." + E).filter(function(e, t) {
									return !m(t).children(".laytable-cell-group").length
								}).remove(), c.find("tbody>tr>td." + E).remove(), n.document.write(
									o + c.prop("outerHTML")), n.document.close(), n.print(), n
								.close()
					}
					layui.event.call(this, C, "toolbar(" + d + ")", m.extend({
						event: t,
						config: r
					}, {}))
				}), s.layPagebar.on("click", "*[lay-event]", function(e) {
					var t = m(this).attr("lay-event");
					layui.event.call(this, C, "pagebar(" + d + ")", m.extend({
						event: t,
						config: r
					}, {}))
				}), e.on("mousemove", function(e) {
					var t = m(this),
						a = t.offset().left,
						e = e.clientX - a;
					t.data("unresize") || p.eventMoveElem || (l.allowResize = t.width() - e <= 10, i
						.css("cursor", l.allowResize ? "col-resize" : ""))
				}).on("mouseleave", function() {
					m(this);
					p.eventMoveElem || i.css("cursor", "")
				}).on("mousedown", function(e) {
					var t, a = m(this);
					l.allowResize && (t = a.data("key"), e.preventDefault(), l.offset = [e.clientX,
						e.clientY
					], s.getCssRule(t, function(e) {
						var t = e.style.width || a.outerWidth();
						l.rule = e, l.ruleWidth = parseFloat(t), l.minWidth = a.data(
							"minwidth") || r.cellMinWidth
					}), a.data(_, l), p.eventMoveElem = a)
				}), p.docEvent || S.on("mousemove", function(e) {
					var t;
					p.eventMoveElem && (t = p.eventMoveElem.data(_) || {}, p.eventMoveElem.data(
						"resizing", 1), e.preventDefault(), t.rule && ((e = t.ruleWidth + e
							.clientX - t.offset[0]) < t.minWidth && (e = t.minWidth), t.rule
						.style.width = e + "px", g.close(s.tipsIndex)))
				}).on("mouseup", function(e) {
					p.eventMoveElem && (l = {}, i.css("cursor", ""), s.scrollPatch(), p
						.eventMoveElem.removeData(_), delete p.eventMoveElem)
				}), p.docEvent = !0, e.on("click", function(e) {
					var t = m(this),
						a = t.find(N),
						i = a.attr("lay-sort");
					if (!a[0] || 1 === t.data("resizing")) return t.removeData("resizing");
					s.sort(t, "asc" === i ? "desc" : "desc" === i ? null : "asc", null, !0)
				}).find(N + " .layui-edge ").on("click", function(e) {
					var t = m(this),
						a = t.index(),
						t = t.parents("th").eq(0).data("field");
					layui.stope(e), 0 === a ? s.sort(t, "asc", null, !0) : s.sort(t, "desc", null, !
						0)
				}), s.commonMember = function(e) {
					var t = m(this).parents("tr").eq(0).data("index"),
						r = s.layBody.find('tr[data-index="' + t + '"]'),
						d = (d = x.cache[s.key] || [])[t] || {};
					return m.extend({
						tr: r,
						data: x.clearCacheKey(d),
						del: function() {
							x.cache[s.key][t] = [], r.remove(), s.scrollPatch()
						},
						update: function(e, c) {
							e = e || {}, layui.each(e, function(i, l) {
								var n = r.children('td[data-field="' + i + '"]'),
									o = n.children(u);
								i in d && (d[i] = l), s.eachCols(function(e, t) {
									var a;
									t.field == i ? (o.html(k.call(s, {
										item3: t,
										content: l,
										tplData: d
									})), n.data("content", l)) : c && (t
										.templet || t.toolbar) && (e = r
										.children('td[data-field="' + (t
											.field || e) + '"]'), a = d[
											t.field], e.children(u)
										.html(k.call(s, {
											item3: t,
											content: a,
											tplData: d
										})), e.data("content", a))
								})
							}), s.renderForm()
						}
					}, e)
				}),
				t = (s.elem.on("click", 'input[name="layTableCheckbox"]+', function() {
					var e = m(this).prev(),
						t = s.layBody.find('input[name="layTableCheckbox"]'),
						a = e.parents("tr").eq(0).data("index"),
						i = e[0].checked,
						l = "layTableAllChoose" === e.attr("lay-filter");
					e[0].disabled || (l ? (t.each(function(e, t) {
						t.checked = i, s.setCheckData(e, i)
					}), s.syncCheckAll(), s.renderForm("checkbox")) : (s.setCheckData(a, i),
						s.syncCheckAll()), layui.event.call(e[0], C, "checkbox(" + d + ")",
						n.call(e[0], {
							checked: i,
							type: l ? "all" : "one"
						})))
				}), s.elem.on("click", 'input[lay-type="layTableRadio"]+', function() {
					var e = m(this).prev(),
						t = e[0].checked,
						a = x.cache[s.key],
						i = e.parents("tr").eq(0).data("index");
					layui.each(a, function(e, t) {
						i === e ? t[r.checkName] = !0 : delete t[r.checkName]
					}), s.setThisRowChecked(i), layui.event.call(this, C, "radio(" + d + ")", n
						.call(this, {
							checked: t
						}))
				}), s.layBody.on("mouseenter", "tr", function() {
					var e = m(this),
						t = e.index();
					e.data("off") || s.layBody.find("tr:eq(" + t + ")").addClass(A)
				}).on("mouseleave", "tr", function() {
					var e = m(this),
						t = e.index();
					e.data("off") || s.layBody.find("tr:eq(" + t + ")").removeClass(A)
				}).on("click", "tr", function() {
					t.call(this, "row")
				}).on("dblclick", "tr", function() {
					t.call(this, "rowDouble")
				}), function(e) {
					var t = m(this);
					t.data("off") || layui.event.call(this, C, e + "(" + d + ")", n.call(t.children(
						"td")[0]))
				}),
				o = (s.layBody.on("change", "." + D, function() {
					var e = m(this),
						t = this.value,
						a = e.parent().data("field"),
						e = e.parents("tr").eq(0).data("index");
					x.cache[s.key][e][a] = t, layui.event.call(this, C, "edit(" + d + ")", n.call(
						this, {
							value: t,
							field: a
						}))
				}).on("blur", "." + D, function() {
					var e, t = m(this),
						a = t.parent(),
						i = a.data("key"),
						l = t.closest("tr").data("index"),
						l = x.cache[s.key][l];
					t.siblings(u).html((e = t[0].value, k.call(s, {
						item3: s.col(i),
						content: e,
						tplData: l
					}))), a.data("content", t[0].value), t.remove()
				}), s.layBody.on(r.editTrigger, "td", function(e) {
					var t, a, i, l, n = m(this);
					n.data("off") || (t = n.data("field"), l = n.data("key"), l = s.col(l), a = n
						.closest("tr").data("index"), a = x.cache[s.key][a], i = n.children(u),
						(l = "function" == typeof l.edit ? l.edit(a) : l.edit) && ((l = m(
								"textarea" === l ? '<textarea class="layui-input ' + D +
								'"></textarea>' : '<input class="layui-input ' + D + '">'))[0]
							.value = n.data("content") || a[t] || i.text(), n.find("." + D)[
							0] || n.append(l), l.focus(), layui.stope(e)))
				}).on("mouseenter", "td", function() {
					a.call(this)
				}).on("mouseleave", "td", function() {
					a.call(this, "hide")
				}), "layui-table-grid-down"),
				a = function(e) {
					var t = m(this),
						a = t.children(u);
					t.data("off") || (e ? t.find(".layui-table-grid-down").remove() : !(a.prop(
							"scrollWidth") > a.outerWidth() || 0 < a.find("br").length) || r
						.lineStyle || a.find("." + o)[0] || t.append('<div class="' + o +
							'"><i class="layui-icon layui-icon-down"></i></div>'))
				},
				c = (s.layBody.on("click", "." + o, function(e) {
					var t = m(this).parent().children(u);
					s.tipsIndex = g.tips([
						'<div class="layui-table-tips-main" style="margin-top: -' + (t
							.height() + 23) + "px;" + ("sm" === r.size ?
							"padding: 4px 15px; font-size: 12px;" : "lg" === r.size ?
							"padding: 14px 15px;" : "") + '">', t.html(), "</div>",
						'<i class="layui-icon layui-table-tips-c layui-icon-close"></i>'
					].join(""), t[0], {
						tips: [3, ""],
						time: -1,
						anim: -1,
						maxWidth: h.ios || h.android ? 300 : s.elem.width() / 2,
						isOutAnim: !1,
						skin: "layui-table-tips",
						success: function(e, t) {
							e.find(".layui-table-tips-c").on("click", function() {
								g.close(t)
							})
						}
					}), layui.stope(e)
				}), function(e) {
					var t = m(this),
						a = t.parents("tr").eq(0).data("index");
					layui.event.call(this, C, (e || "tool") + "(" + d + ")", n.call(this, {
						event: t.attr("lay-event")
					})), s.setThisRowChecked(a)
				});
			s.layBody.on("click", "*[lay-event]", function(e) {
				c.call(this), layui.stope(e)
			}).on("dblclick", "*[lay-event]", function(e) {
				c.call(this, "toolDouble"), layui.stope(e)
			}), s.layMain.on("scroll", function() {
				var e = m(this),
					t = e.scrollLeft(),
					e = e.scrollTop();
				s.layHeader.scrollLeft(t), s.layTotal.scrollLeft(t), s.layFixed.find(T).scrollTop(
					e), g.close(s.tipsIndex)
			}), R.on("resize", function() {
				s.resize()
			})
		}, S.on("click", function() {
			S.trigger("table.remove.tool.panel")
		}), S.on("table.remove.tool.panel", function() {
			m(".layui-table-tool-panel").remove()
		}), x.init = function(a, i) {
			i = i || {};
			var e = m(a ? 'table[lay-filter="' + a + '"]' : ".layui-table[lay-data]"),
				c = "Table element property lay-data configuration item has a syntax error: ";
			return e.each(function() {
				var e = m(this),
					t = e.attr("lay-data");
				try {
					t = new Function("return " + t)()
				} catch (l) {
					f.error(c + t, "error")
				}
				var n = [],
					o = m.extend({
						elem: this,
						cols: [],
						data: [],
						skin: e.attr("lay-skin"),
						size: e.attr("lay-size"),
						even: "string" == typeof e.attr("lay-even")
					}, x.config, i, t);
				a && e.hide(), e.find("thead>tr").each(function(i) {
					o.cols[i] = [], m(this).children().each(function(e) {
						var t = m(this),
							a = t.attr("lay-data");
						try {
							a = new Function("return " + a)()
						} catch (l) {
							return f.error(c + a)
						}
						t = m.extend({
							title: t.text(),
							colspan: t.attr("colspan") || 1,
							rowspan: t.attr("rowspan") || 1
						}, a);
						t.colspan < 2 && n.push(t), o.cols[i].push(t)
					})
				}), e.find("tbody>tr").each(function(e) {
					var a = m(this),
						l = {};
					a.children("td").each(function(e, t) {
						var a = m(this),
							i = a.data("field");
						if (i) return l[i] = a.html()
					}), layui.each(n, function(e, t) {
						e = a.children("td").eq(e);
						l[t.field] = e.html()
					}), o.data[e] = l
				}), x.render(o)
			}), this
		}, p.that = {}, p.config = {}, function(a, i, e, l) {
			var n, o;
			l.colGroup && (n = 0, a++, l.CHILD_COLS = [], o = e + (parseInt(l.rowspan) || 1), layui.each(i[
				o], function(e, t) {
				t.parentKey ? t.parentKey === l.key && (t.PARENT_COL_INDEX = a, l.CHILD_COLS
					.push(t), F(a, i, o, t)) : t.PARENT_COL_INDEX || 1 <= n && n == (l
					.colspan || 1) || (t.PARENT_COL_INDEX = a, l.CHILD_COLS.push(t), n += t
					.hide ? 0 : parseInt(1 < t.colspan ? t.colspan : 1), F(a, i, o, t))
			}))
		});
	x.eachCols = function(e, a, i) {
		var e = p.config[e] || {},
			l = [],
			n = (i = m.extend(!0, [], i || e.cols), layui.each(i, function(a, e) {
				if (a) return !0;
				layui.each(e, function(e, t) {
					F(0, i, a, t), t.PARENT_COL_INDEX || l.push(t)
				})
			}), function(e) {
				layui.each(e || l, function(e, t) {
					if (t.CHILD_COLS) return n(t.CHILD_COLS);
					"function" == typeof a && a(e, t)
				})
			});
		n()
	}, x.checkStatus = function(e) {
		var a = 0,
			i = 0,
			l = [],
			e = x.cache[e] || [];
		return layui.each(e, function(e, t) {
			"array" === layui.type(t) ? i++ : t[x.config.checkName] && (a++, t[x.config
				.disabledName] || l.push(x.clearCacheKey(t)))
		}), {
			data: l,
			isAll: !!e.length && a === e.length - i
		}
	}, x.getData = function(e) {
		var a = [],
			e = x.cache[e] || [];
		return layui.each(e, function(e, t) {
			"array" !== layui.type(t) && a.push(x.clearCacheKey(t))
		}), a
	}, x.exportFile = function(e, t, a) {
		t = t || x.clearCacheKey(x.cache[e]);
		var c, i, l, r, n = (a = "object" == typeof a ? a : (n = {}, a && (n.type = a), n)).type || "csv",
			d = p.that[e],
			o = p.config[e] || {},
			s = {
				csv: "text/csv",
				xls: "application/vnd.ms-excel"
			} [n],
			u = document.createElement("a");
		if (h.ie) return f.error("IE_NOT_SUPPORT_EXPORTS");
		u.href = "data:" + s + ";charset=utf-8,\ufeff" + encodeURIComponent((c = [], i = [], l = [], r = {},
				layui.each(t, function(l, n) {
					var o = [];
					"object" == typeof e ? (layui.each(e, function(e, t) {
						0 == l && c.push(t || "")
					}), layui.each(x.clearCacheKey(n), function(e, t) {
						o.push('"' + (t || "") + '"')
					})) : x.eachCols(e, function(e, t) {
						var a, i;
						t.field && "normal" == t.type && (t.hide ? 0 == l && (r[t.field] = !
							0) : (a = n[t.field], i = d.layBody.find(
								'tr[data-index="' + l + '"]>td'), a !== undefined &&
							null !== a || (a = ""), 0 == l && c.push(t.title || ""),
							o.push('"' + k.call(d, {
								item3: t,
								content: a,
								tplData: n,
								text: "text",
								obj: d.commonMember.call(i.eq(0), {
									td: function(e) {
										return i.filter(
											'[data-field="' +
											e + '"]')
									}
								})
							}) + '"')))
					}), i.push(o.join(","))
				}), d && layui.each(d.dataTotal, function(e, t) {
					r[e] || l.push(t)
				}), c.join(",") + "\r\n" + i.join("\r\n") + "\r\n" + l.join(","))), u.download = (a.title ||
				o.title || "table_" + (o.index || "")) + "." + n, document.body.appendChild(u), u.click(),
			document.body.removeChild(u)
	}, x.resize = function(e) {
		e ? l(e) && p.that[e].resize() : layui.each(p.that, function() {
			this.resize()
		})
	}, x.reload = function(e, t, a, i) {
		if (l(e)) return e = p.that[e], e.reload(t, a, i), p.call(e)
	}, x.reloadData = function() {
		var a = m.extend([], arguments),
			i = (a[3] = "reloadData", new RegExp("^(" + ["data", "url", "method", "contentType", "dataType",
				"jsonpCallback", "headers", "where", "page", "limit", "request", "response",
				"parseData", "scrollPos"
			].join("|") + ")$"));
		return layui.each(a[1], function(e, t) {
			i.test(e) || delete a[1][e]
		}), x.reload.apply(null, a)
	}, x.render = function(e) {
		e = new i(e);
		return p.call(e)
	}, x.clearCacheKey = function(e) {
		return delete(e = m.extend({}, e))[x.config.checkName], delete e[x.config.indexName], delete e[x
			.config.disabledName], e
	}, m(function() {
		x.init()
	}), e(C, x)
});
layui.define("form", function(e) {
	"use strict";
	var u = layui.$,
		i = layui.form,
		p = layui.layer,
		n = "tree",
		a = {
			config: {},
			index: layui[n] ? layui[n].index + 1e4 : 0,
			set: function(e) {
				var i = this;
				return i.config = u.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, n, e, i)
			}
		},
		t = function() {
			var i = this,
				e = i.config,
				n = e.id || i.index;
			return t.that[n] = i, {
				config: t.config[n] = e,
				reload: function(e) {
					i.reload.call(i, e)
				},
				getChecked: function() {
					return i.getChecked.call(i)
				},
				setChecked: function(e) {
					return i.setChecked.call(i, e)
				}
			}
		},
		y = "layui-hide",
		d = "layui-disabled",
		f = "layui-tree-set",
		C = "layui-tree-iconClick",
		k = "layui-icon-addition",
		v = "layui-icon-subtraction",
		m = "layui-tree-entry",
		x = "layui-tree-main",
		b = "layui-tree-txt",
		g = "layui-tree-pack",
		w = "layui-tree-spread",
		N = "layui-tree-setLineShort",
		T = "layui-tree-showLine",
		L = "layui-tree-lineExtend",
		l = function(e) {
			var i = this;
			i.index = ++a.index, i.config = u.extend({}, i.config, a.config, e), i.render()
		};
	l.prototype.config = {
		data: [],
		showCheckbox: !1,
		showLine: !0,
		accordion: !1,
		onlyIconControl: !1,
		isJump: !1,
		edit: !1,
		text: {
			defaultNodeName: "\u672a\u547d\u540d",
			none: "\u65e0\u6570\u636e"
		}
	}, l.prototype.reload = function(e) {
		var n = this;
		layui.each(e, function(e, i) {
			"array" === layui.type(i) && delete n.config[e]
		}), n.config = u.extend(!0, {}, n.config, e), n.render()
	}, l.prototype.render = function() {
		var e = this,
			i = e.config,
			n = (e.checkids = [], u('<div class="layui-tree' + (i.showCheckbox ? " layui-form" : "") + (i
					.showLine ? " layui-tree-line" : "") + '" lay-filter="LAY-tree-' + e.index +
				'"></div>')),
			a = (e.tree(n), i.elem = u(i.elem));
		if (a[0]) {
			if (e.key = i.id || e.index, e.elem = n, e.elemNone = u('<div class="layui-tree-emptyText">' + i
					.text.none + "</div>"), a.html(e.elem), 0 == e.elem.find(".layui-tree-set").length)
				return e.elem.append(e.elemNone);
			i.showCheckbox && e.renderForm("checkbox"), e.elem.find(".layui-tree-set").each(function() {
				var e = u(this);
				e.parent(".layui-tree-pack")[0] || e.addClass("layui-tree-setHide"), !e.next()[0] &&
					e.parents(".layui-tree-pack").eq(1).hasClass("layui-tree-lineExtend") && e
					.addClass(N), e.next()[0] || e.parents(".layui-tree-set").eq(0).next()[0] || e
					.addClass(N)
			}), e.events()
		}
	}, l.prototype.renderForm = function(e) {
		i.render(e, "LAY-tree-" + this.index)
	}, l.prototype.tree = function(l, e) {
		var r = this,
			c = r.config,
			e = e || c.data;
		layui.each(e, function(e, i) {
			var n = i.children && 0 < i.children.length,
				a = u('<div class="layui-tree-pack" ' + (i.spread ? 'style="display: block;"' :
					"") + "></div>"),
				t = u(['<div data-id="' + i.id + '" class="layui-tree-set' + (i.spread ?
						" layui-tree-spread" : "") + (i.checked ? " layui-tree-checkedFirst" :
						"") + '">', '<div class="layui-tree-entry">',
					'<div class="layui-tree-main">', c.showLine ? n ?
					'<span class="layui-tree-iconClick layui-tree-icon"><i class="layui-icon ' +
					(i.spread ? "layui-icon-subtraction" : "layui-icon-addition") +
					'"></i></span>' :
					'<span class="layui-tree-iconClick"><i class="layui-icon layui-icon-file"></i></span>' :
					'<span class="layui-tree-iconClick"><i class="layui-tree-iconArrow ' + (n ?
						"" : y) + '"></i></span>', c.showCheckbox ?
					'<input type="checkbox" name="' + (i.field || "layuiTreeCheck_" + i.id) +
					'" same="layuiTreeCheck" lay-skin="primary" ' + (i.disabled ? "disabled" :
						"") + ' value="' + i.id + '">' : "", c.isJump && i.href ? '<a href="' +
					i.href + '" target="_blank" class="' + b + '">' + (i.title || i.label || c
						.text.defaultNodeName) + "</a>" : '<span class="' + b + (i.disabled ?
						" " + d : "") + '">' + (i.title || i.label || c.text.defaultNodeName) +
					"</span>", "</div>",
					function() {
						if (!c.edit) return "";
						var n = {
								add: '<i class="layui-icon layui-icon-add-1"  data-type="add"></i>',
								update: '<i class="layui-icon layui-icon-edit" data-type="update"></i>',
								del: '<i class="layui-icon layui-icon-delete" data-type="del"></i>'
							},
							a = ['<div class="layui-btn-group layui-tree-btnGroup">'];
						return !0 === c.edit && (c.edit = ["update", "del"]), "object" ==
							typeof c.edit ? (layui.each(c.edit, function(e, i) {
								a.push(n[i] || "")
							}), a.join("") + "</div>") : void 0
					}(), "</div></div>"
				].join(""));
			n && (t.append(a), r.tree(a, i.children)), l.append(t), t.prev("." + f)[0] && t.prev()
				.children(".layui-tree-pack").addClass("layui-tree-showLine"), n || t.parent(
					".layui-tree-pack").addClass("layui-tree-lineExtend"), r.spread(t, i), c
				.showCheckbox && (i.checked && r.checkids.push(i.id), r.checkClick(t, i)), c.edit &&
				r.operate(t, i)
		})
	}, l.prototype.spread = function(a, e) {
		var t = this.config,
			i = a.children("." + m),
			n = i.children("." + x),
			l = i.find("." + C),
			i = i.find("." + b),
			r = t.onlyIconControl ? l : n,
			c = "";
		r.on("click", function(e) {
			var i = a.children("." + g),
				n = (r.children(".layui-icon")[0] ? r : r.find(".layui-tree-icon")).children(
					".layui-icon");
			i[0] ? a.hasClass(w) ? (a.removeClass(w), i.slideUp(200), n.removeClass(v).addClass(
				k)) : (a.addClass(w), i.slideDown(200), n.addClass(v).removeClass(k), t.accordion &&
					((i = a.siblings("." + f)).removeClass(w), i.children("." + g).slideUp(200), i
						.find(".layui-tree-icon").children(".layui-icon").removeClass(v).addClass(k)
						)) : c = "normal"
		}), i.on("click", function() {
			u(this).hasClass(d) || (c = a.hasClass(w) ? t.onlyIconControl ? "open" : "close" : t
				.onlyIconControl ? "close" : "open", t.click && t.click({
					elem: a,
					state: c,
					data: e
				}))
		})
	}, l.prototype.setCheckbox = function(e, i, n) {
		this.config;
		var t, l = n.prop("checked");
		n.prop("disabled") || ("object" != typeof i.children && !e.find("." + g)[0] || e.find("." + g).find(
			'input[same="layuiTreeCheck"]').each(function() {
			this.disabled || (this.checked = l)
		}), (t = function(e) {
			var i, n, a;
			e.parents("." + f)[0] && (n = (e = e.parent("." + g)).parent(), a = e.prev().find(
				'input[same="layuiTreeCheck"]'), l ? a.prop("checked", l) : (e.find(
				'input[same="layuiTreeCheck"]').each(function() {
				this.checked && (i = !0)
			}), i || a.prop("checked", !1)), t(n))
		})(e), this.renderForm("checkbox"))
	}, l.prototype.checkClick = function(n, a) {
		var t = this,
			l = t.config;
		n.children("." + m).children("." + x).on("click", 'input[same="layuiTreeCheck"]+', function(e) {
			layui.stope(e);
			var e = u(this).prev(),
				i = e.prop("checked");
			e.prop("disabled") || (t.setCheckbox(n, a, e), l.oncheck && l.oncheck({
				elem: n,
				checked: i,
				data: a
			}))
		})
	}, l.prototype.operate = function(c, d) {
		var s = this,
			o = s.config,
			e = c.children("." + m),
			h = e.children("." + x);
		e.children(".layui-tree-btnGroup").on("click", ".layui-icon", function(e) {
			layui.stope(e);
			var i, e = u(this).data("type"),
				a = c.children("." + g),
				t = {
					data: d,
					type: e,
					elem: c
				};
			if ("add" == e) {
				a[0] || (o.showLine ? (h.find("." + C).addClass("layui-tree-icon"), h.find("." + C)
						.children(".layui-icon").addClass(k).removeClass("layui-icon-file")) : h
					.find(".layui-tree-iconArrow").removeClass(y), c.append(
						'<div class="layui-tree-pack"></div>'));
				var n, l = o.operate && o.operate(t),
					r = {};
				if (r.title = o.text.defaultNodeName, r.id = l, s.tree(c.children("." + g), [r]), o
					.showLine && (a[0] ? (a.hasClass(L) || a.addClass(L), c.find("." + g).each(
							function() {
								u(this).children("." + f).last().addClass(N)
							}), (a.children("." + f).last().prev().hasClass(N) ? a.children(
							"." + f).last().prev() : a.children("." + f).last()).removeClass(N),
						!c.parent("." + g)[0] && c.next()[0] && a.children("." + f).last()
						.removeClass(N)) : (l = c.siblings("." + f), n = 1, r = c.parent("." +
							g), layui.each(l, function(e, i) {
							u(i).children("." + g)[0] || (n = 0)
						}), 1 == n ? (l.children("." + g).addClass(T), l.children("." + g)
							.children("." + f).removeClass(N), c.children("." + g).addClass(T),
							r.removeClass(L), r.children("." + f).last().children("." + g)
							.children("." + f).last().addClass(N)) : c.children("." + g)
						.children("." + f).addClass(N))), !o.showCheckbox) return;
				h.find('input[same="layuiTreeCheck"]')[0].checked && (c.children("." + g).children(
						"." + f).last().find('input[same="layuiTreeCheck"]')[0].checked = !0), s
					.renderForm("checkbox")
			} else "update" == e ? (l = h.children("." + b).html(), h.children("." + b).html(""), h
				.append('<input type="text" class="layui-tree-editInput">'), h.children(
					".layui-tree-editInput").val(l).focus(), i = function(e) {
					var i = (i = e.val().trim()) || o.text.defaultNodeName;
					e.remove(), h.children("." + b).html(i), t.data.title = i, o.operate && o
						.operate(t)
				}, h.children(".layui-tree-editInput").blur(function() {
					i(u(this))
				}), h.children(".layui-tree-editInput").on("keydown", function(e) {
					13 === e.keyCode && (e.preventDefault(), i(u(this)))
				})) : p.confirm(
				'\u786e\u8ba4\u5220\u9664\u8be5\u8282\u70b9 "<span style="color: #999;">' + (d
					.title || "") + '</span>" \u5417\uff1f',
				function(e) {
					if (o.operate && o.operate(t), t.status = "remove", p.close(e), !c.prev(
							"." + f)[0] && !c.next("." + f)[0] && !c.parent("." + g)[0])
					return c.remove(), void s.elem.append(s.elemNone);
					var l, n, i;
					c.siblings("." + f).children("." + m)[0] ? (o.showCheckbox && (l = function(
							e) {
							var i, n, a, t;
							e.parents("." + f)[0] && (i = e.siblings("." + f).children(
									"." + m), n = (e = e.parent("." + g).prev())
								.find('input[same="layuiTreeCheck"]')[0], a = 1, (
									t = 0) == n.checked && (i.each(function(e, i) {
									i = u(i).find(
										'input[same="layuiTreeCheck"]')[
										0];
									0 != i.checked || i.disabled || (a = 0),
										i.disabled || (t = 1)
								}), 1 == a && 1 == t && (n.checked = !0, s
									.renderForm("checkbox"), l(e.parent("." +
										f)))))
						})(c), o.showLine && (e = c.siblings("." + f), n = 1, i = c.parent(
								"." + g), layui.each(e, function(e, i) {
								u(i).children("." + g)[0] || (n = 0)
							}), 1 == n ? (a[0] || (i.removeClass(L), e.children("." + g)
									.addClass(T), e.children("." + g).children("." + f)
									.removeClass(N)), (c.next()[0] ? i.children("." + f)
									.last() : c.prev()).children("." + g).children("." + f)
								.last().addClass(N), c.next()[0] || c.parents("." + f)[1] ||
								c.parents("." + f).eq(0).next()[0] || c.prev("." + f)
								.addClass(N)) : !c.next()[0] && c.hasClass(N) && c.prev()
							.addClass(N))) : (e = c.parent("." + g).prev(), o.showLine ? (e
							.find("." + C).removeClass("layui-tree-icon"), e.find("." + C)
							.children(".layui-icon").removeClass(v).addClass(
								"layui-icon-file"), (i = e.parents("." + g).eq(0)).addClass(
								L), i.children("." + f).each(function() {
								u(this).children("." + g).children("." + f).last()
									.addClass(N)
							})) : e.find(".layui-tree-iconArrow").addClass(y), c.parents(
							"." + f).eq(0).removeClass(w), c.parent("." + g).remove()), c
						.remove()
				})
		})
	}, l.prototype.events = function() {
		var i = this,
			t = i.config;
		i.elem.find(".layui-tree-checkedFirst");
		i.setChecked(i.checkids), i.elem.find(".layui-tree-search").on("keyup", function() {
			var e = u(this),
				n = e.val(),
				e = e.nextAll(),
				a = [];
			e.find("." + b).each(function() {
					var i, e = u(this).parents("." + m); - 1 != u(this).html().indexOf(n) && (a
						.push(u(this).parent()), (i = function(e) {
							e.addClass("layui-tree-searchShow"), e.parent("." + g)[0] &&
								i(e.parent("." + g).parent("." + f))
						})(e.parent("." + f)))
				}), e.find("." + m).each(function() {
					var e = u(this).parent("." + f);
					e.hasClass("layui-tree-searchShow") || e.addClass(y)
				}), 0 == e.find(".layui-tree-searchShow").length && i.elem.append(i.elemNone), t
				.onsearch && t.onsearch({
					elem: a
				})
		}), i.elem.find(".layui-tree-search").on("keydown", function() {
			u(this).nextAll().find("." + m).each(function() {
				u(this).parent("." + f).removeClass("layui-tree-searchShow " + y)
			}), u(".layui-tree-emptyText")[0] && u(".layui-tree-emptyText").remove()
		})
	}, l.prototype.getChecked = function() {
		var e = this.config,
			i = [],
			n = [],
			t = (this.elem.find(".layui-form-checked").each(function() {
				i.push(u(this).prev()[0].value)
			}), function(e, a) {
				layui.each(e, function(e, n) {
					layui.each(i, function(e, i) {
						if (n.id == i) return delete(i = u.extend({}, n)).children, a
							.push(i), n.children && (i.children = [], t(n.children,
								i.children)), !0
					})
				})
			});
		return t(u.extend({}, e.data), n), n
	}, l.prototype.setChecked = function(l) {
		this.config;
		this.elem.find("." + f).each(function(e, i) {
			var n = u(this).data("id"),
				a = u(i).children("." + m).find('input[same="layuiTreeCheck"]'),
				t = a.next();
			if ("number" == typeof l) {
				if (n == l) return a[0].checked || t.click(), !1
			} else "object" == typeof l && layui.each(l, function(e, i) {
				if (i == n && !a[0].checked) return t.click(), !0
			})
		})
	}, t.that = {}, t.config = {}, a.reload = function(e, i) {
		e = t.that[e];
		return e.reload(i), t.call(e)
	}, a.getChecked = function(e) {
		return t.that[e].getChecked()
	}, a.setChecked = function(e, i) {
		return t.that[e].setChecked(i)
	}, a.render = function(e) {
		e = new l(e);
		return t.call(e)
	}, e(n, a)
});
layui.define(["laytpl", "form"], function(e) {
	"use strict";
	var s = layui.$,
		n = layui.laytpl,
		t = layui.form,
		a = "transfer",
		i = {
			config: {},
			index: layui[a] ? layui[a].index + 1e4 : 0,
			set: function(e) {
				var t = this;
				return t.config = s.extend({}, t.config, e), t
			},
			on: function(e, t) {
				return layui.onevent.call(this, a, e, t)
			}
		},
		l = function() {
			var t = this,
				e = t.config,
				a = e.id || t.index;
			return l.that[a] = t, {
				config: l.config[a] = e,
				reload: function(e) {
					t.reload.call(t, e)
				},
				getData: function() {
					return t.getData.call(t)
				}
			}
		},
		d = "layui-hide",
		h = "layui-btn-disabled",
		r = "layui-none",
		c = "layui-transfer-box",
		u = "layui-transfer-header",
		o = "layui-transfer-search",
		f = "layui-transfer-data",
		y = function(e) {
			return ['<div class="layui-transfer-box" data-index="' + (e = e || {}).index + '">',
				'<div class="layui-transfer-header">', '<input type="checkbox" name="' + e.checkAllName +
				'" lay-filter="layTransferCheckbox" lay-type="all" lay-skin="primary" title="{{ d.data.title[' +
				e.index + "] || 'list" + (e.index + 1) + "' }}\">", "</div>",
				"{{# if(d.data.showSearch){ }}", '<div class="layui-transfer-search">',
				'<i class="layui-icon layui-icon-search"></i>',
				'<input type="input" class="layui-input" placeholder="\u5173\u952e\u8bcd\u641c\u7d22">',
				"</div>", "{{# } }}", '<ul class="layui-transfer-data"></ul>', "</div>"
			].join("")
		},
		p = ['<div class="layui-transfer layui-form layui-border-box" lay-filter="LAY-transfer-{{ d.index }}">',
			y({
				index: 0,
				checkAllName: "layTransferLeftCheckAll"
			}), '<div class="layui-transfer-active">',
			'<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="0">',
			'<i class="layui-icon layui-icon-next"></i>', "</button>",
			'<button type="button" class="layui-btn layui-btn-sm layui-btn-primary layui-btn-disabled" data-index="1">',
			'<i class="layui-icon layui-icon-prev"></i>', "</button>", "</div>", y({
				index: 1,
				checkAllName: "layTransferRightCheckAll"
			}), "</div>"
		].join(""),
		v = function(e) {
			var t = this;
			t.index = ++i.index, t.config = s.extend({}, t.config, i.config, e), t.render()
		};
	v.prototype.config = {
		title: ["\u5217\u8868\u4e00", "\u5217\u8868\u4e8c"],
		width: 200,
		height: 360,
		data: [],
		value: [],
		showSearch: !1,
		id: "",
		text: {
			none: "\u65e0\u6570\u636e",
			searchNone: "\u65e0\u5339\u914d\u6570\u636e"
		}
	}, v.prototype.reload = function(e) {
		var t = this;
		t.config = s.extend({}, t.config, e), t.render()
	}, v.prototype.render = function() {
		var e = this,
			t = e.config,
			a = e.elem = s(n(p).render({
				data: t,
				index: e.index
			})),
			i = t.elem = s(t.elem);
		i[0] && (t.data = t.data || [], t.value = t.value || [], e.key = t.id || e.index, i.html(e.elem), e
			.layBox = e.elem.find("." + c), e.layHeader = e.elem.find("." + u), e.laySearch = e.elem
			.find("." + o), e.layData = a.find("." + f), e.layBtn = a.find(
				".layui-transfer-active .layui-btn"), e.layBox.css({
				width: t.width,
				height: t.height
			}), e.layData.css({
				height: (i = t.height - e.layHeader.outerHeight(), t.showSearch && (i -= e.laySearch
					.outerHeight()), i - 2)
			}), e.renderData(), e.events())
	}, v.prototype.renderData = function() {
		var e = this,
			i = (e.config, [{
				checkName: "layTransferLeftCheck",
				views: []
			}, {
				checkName: "layTransferRightCheck",
				views: []
			}]);
		e.parseData(function(e) {
				var t = e.selected ? 1 : 0,
					a = ["<li>", '<input type="checkbox" name="' + i[t].checkName +
						'" lay-skin="primary" lay-filter="layTransferCheckbox" title="' + e.title +
						'"' + (e.disabled ? " disabled" : "") + (e.checked ? " checked" : "") +
						' value="' + e.value + '">', "</li>"
					].join("");
				i[t].views.push(a), delete e.selected
			}), e.layData.eq(0).html(i[0].views.join("")), e.layData.eq(1).html(i[1].views.join("")), e
			.renderCheckBtn()
	}, v.prototype.renderForm = function(e) {
		t.render(e, "LAY-transfer-" + this.index)
	}, v.prototype.renderCheckBtn = function(r) {
		var c = this,
			o = c.config;
		r = r || {}, c.layBox.each(function(e) {
			var t = s(this),
				a = t.find("." + f),
				t = t.find("." + u).find('input[type="checkbox"]'),
				i = a.find('input[type="checkbox"]'),
				n = 0,
				l = !1;
			i.each(function() {
				var e = s(this).data("hide");
				(this.checked || this.disabled || e) && n++, this.checked && !e && (l = !0)
			}), t.prop("checked", l && n === i.length), c.layBtn.eq(e)[l ? "removeClass" :
				"addClass"](h), r.stopNone || (i = a.children("li:not(." + d + ")").length, c
				.noneView(a, i ? "" : o.text.none))
		}), c.renderForm("checkbox")
	}, v.prototype.noneView = function(e, t) {
		var a = s('<p class="layui-none">' + (t || "") + "</p>");
		e.find("." + r)[0] && e.find("." + r).remove(), t.replace(/\s/g, "") && e.append(a)
	}, v.prototype.setValue = function() {
		var e = this.config,
			t = [];
		return this.layBox.eq(1).find("." + f + ' input[type="checkbox"]').each(function() {
			s(this).data("hide") || t.push(this.value)
		}), e.value = t, this
	}, v.prototype.parseData = function(t) {
		var i = this.config,
			n = [];
		return layui.each(i.data, function(e, a) {
			a = ("function" == typeof i.parseData ? i.parseData(a) : a) || a, n.push(a = s
			.extend({}, a)), layui.each(i.value, function(e, t) {
				t == a.value && (a.selected = !0)
			}), t && t(a)
		}), i.data = n, this
	}, v.prototype.getData = function(e) {
		var t = this.config,
			i = [];
		return this.setValue(), layui.each(e || t.value, function(e, a) {
			layui.each(t.data, function(e, t) {
				delete t.selected, a == t.value && i.push(t)
			})
		}), i
	}, v.prototype.transfer = function(e, t) {
		var a, i = this,
			n = i.config,
			l = i.layBox.eq(e),
			r = [],
			t = (t ? ((a = (t = t).find('input[type="checkbox"]'))[0].checked = !1, l.siblings("." + c)
					.find("." + f).append(t.clone()), t.remove(), r.push(a[0].value), i.setValue()) : l
				.each(function(e) {
					s(this).find("." + f).children("li").each(function() {
						var e = s(this),
							t = e.find('input[type="checkbox"]'),
							a = t.data("hide");
						t[0].checked && !a && (t[0].checked = !1, l.siblings("." + c).find("." +
								f).append(e.clone()), e.remove(), r.push(t[0].value)), i
							.setValue()
					})
				}), i.renderCheckBtn(), l.siblings("." + c).find("." + o + " input"));
		"" !== t.val() && t.trigger("keyup"), n.onchange && n.onchange(i.getData(r), e)
	}, v.prototype.events = function() {
		var n = this,
			l = n.config;
		n.elem.on("click", 'input[lay-filter="layTransferCheckbox"]+', function() {
			var e = s(this).prev(),
				t = e[0].checked,
				a = e.parents("." + c).eq(0).find("." + f);
			e[0].disabled || ("all" === e.attr("lay-type") && a.find('input[type="checkbox"]').each(
				function() {
					this.disabled || (this.checked = t)
				}), setTimeout(function() {
				n.renderCheckBtn({
					stopNone: !0
				})
			}, 0))
		}), n.elem.on("dblclick", "." + f + ">li", function(e) {
			var t = s(this),
				a = t.children('input[type="checkbox"]'),
				i = t.parent().parent();
			a[0].disabled || n.transfer(i.data("index"), t)
		}), n.layBtn.on("click", function() {
			var e = s(this),
				t = e.data("index");
			e.hasClass(h) || n.transfer(t)
		}), n.laySearch.find("input").on("keyup", function() {
			var i = this.value,
				e = s(this).parents("." + o).eq(0).siblings("." + f),
				t = e.children("li"),
				t = (t.each(function() {
					var e = s(this),
						t = e.find('input[type="checkbox"]'),
						a = t[0].title,
						a = ("cs" !== l.showSearch && (a = a.toLowerCase(), i = i
							.toLowerCase()), -1 !== a.indexOf(i));
					e[a ? "removeClass" : "addClass"](d), t.data("hide", !a)
				}), n.renderCheckBtn(), t.length === e.children("li." + d).length);
			n.noneView(e, t ? l.text.searchNone : "")
		})
	}, l.that = {}, l.config = {}, i.reload = function(e, t) {
		e = l.that[e];
		return e.reload(t), l.call(e)
	}, i.getData = function(e) {
		return l.that[e].getData()
	}, i.render = function(e) {
		e = new v(e);
		return l.call(e)
	}, e(a, i)
});
layui.define("jquery", function(e) {
	"use strict";
	var a = layui.$,
		n = (layui.hint(), layui.device(), {
			config: {},
			set: function(e) {
				var i = this;
				return i.config = a.extend({}, i.config, e), i
			},
			on: function(e, i) {
				return layui.onevent.call(this, d, e, i)
			}
		}),
		d = "carousel",
		r = "layui-this",
		s = "layui-carousel-left",
		u = "layui-carousel-right",
		c = "layui-carousel-prev",
		m = "layui-carousel-next",
		t = "layui-carousel-arrow",
		l = "layui-carousel-ind",
		i = function(e) {
			var i = this;
			i.config = a.extend({}, i.config, n.config, e), i.render()
		};
	i.prototype.config = {
		width: "600px",
		height: "280px",
		full: !1,
		arrow: "hover",
		indicator: "inside",
		autoplay: !0,
		interval: 3e3,
		anim: "",
		trigger: "click",
		index: 0
	}, i.prototype.render = function() {
		var e = this,
			i = e.config;
		i.elem = a(i.elem), i.elem[0] && (e.elemItem = i.elem.find(">*[carousel-item]>*"), i.index < 0 && (i
				.index = 0), i.index >= e.elemItem.length && (i.index = e.elemItem.length - 1), i
			.interval < 800 && (i.interval = 800), i.full ? i.elem.css({
				position: "fixed",
				width: "100%",
				height: "100%",
				zIndex: 9999
			}) : i.elem.css({
				width: i.width,
				height: i.height
			}), i.elem.attr("lay-anim", i.anim), e.elemItem.eq(i.index).addClass(r), e.elemItem
			.length <= 1 || (e.indicator(), e.arrow(), e.autoplay(), e.events()))
	}, i.prototype.reload = function(e) {
		var i = this;
		clearInterval(i.timer), i.config = a.extend({}, i.config, e), i.render()
	}, i.prototype.prevIndex = function() {
		var e = this.config.index - 1;
		return e = e < 0 ? this.elemItem.length - 1 : e
	}, i.prototype.nextIndex = function() {
		var e = this.config.index + 1;
		return e = e >= this.elemItem.length ? 0 : e
	}, i.prototype.addIndex = function(e) {
		var i = this.config;
		i.index = i.index + (e = e || 1), i.index >= this.elemItem.length && (i.index = 0)
	}, i.prototype.subIndex = function(e) {
		var i = this.config;
		i.index = i.index - (e = e || 1), i.index < 0 && (i.index = this.elemItem.length - 1)
	}, i.prototype.autoplay = function() {
		var e = this,
			i = e.config;
		i.autoplay && (clearInterval(e.timer), e.timer = setInterval(function() {
			e.slide()
		}, i.interval))
	}, i.prototype.arrow = function() {
		var i = this,
			e = i.config,
			n = a(['<button class="layui-icon ' + t + '" lay-type="sub">' + ("updown" === e.anim ?
					"&#xe619;" : "&#xe603;") + "</button>", '<button class="layui-icon ' + t +
				'" lay-type="add">' + ("updown" === e.anim ? "&#xe61a;" : "&#xe602;") + "</button>"
			].join(""));
		e.elem.attr("lay-arrow", e.arrow), e.elem.find("." + t)[0] && e.elem.find("." + t).remove(), e.elem
			.append(n), n.on("click", function() {
				var e = a(this).attr("lay-type");
				i.slide(e)
			})
	}, i.prototype.indicator = function() {
		var i, n = this,
			t = n.config,
			e = n.elemInd = a(['<div class="' + l + '"><ul>', (i = [], layui.each(n.elemItem, function(e) {
				i.push("<li" + (t.index === e ? ' class="layui-this"' : "") + "></li>")
			}), i.join("")), "</ul></div>"].join(""));
		t.elem.attr("lay-indicator", t.indicator), t.elem.find("." + l)[0] && t.elem.find("." + l).remove(),
			t.elem.append(e), "updown" === t.anim && e.css("margin-top", -e.height() / 2), e.find("li").on(
				"hover" === t.trigger ? "mouseover" : t.trigger,
				function() {
					var e = a(this).index();
					e > t.index ? n.slide("add", e - t.index) : e < t.index && n.slide("sub", t.index - e)
				})
	}, i.prototype.slide = function(e, i) {
		var n = this,
			t = n.elemItem,
			a = n.config,
			l = a.index,
			o = a.elem.attr("lay-filter");
		n.haveSlide || ("sub" === e ? (n.subIndex(i), t.eq(a.index).addClass(c), setTimeout(function() {
				t.eq(l).addClass(u), t.eq(a.index).addClass(u)
			}, 50)) : (n.addIndex(i), t.eq(a.index).addClass(m), setTimeout(function() {
				t.eq(l).addClass(s), t.eq(a.index).addClass(s)
			}, 50)), setTimeout(function() {
				t.removeClass(r + " " + c + " " + m + " " + s + " " + u), t.eq(a.index).addClass(r),
					n.haveSlide = !1
			}, 300), n.elemInd.find("li").eq(a.index).addClass(r).siblings().removeClass(r), n
			.haveSlide = !0, e = {
				index: a.index,
				prevIndex: l,
				item: t.eq(a.index)
			}, "function" == typeof a.change && a.change(e), layui.event.call(this, d, "change(" + o +
				")", e))
	}, i.prototype.events = function() {
		var e = this,
			i = e.config;
		i.elem.data("haveEvents") || (i.elem.on("mouseenter", function() {
			"always" !== e.config.autoplay && clearInterval(e.timer)
		}).on("mouseleave", function() {
			"always" !== e.config.autoplay && e.autoplay()
		}), i.elem.data("haveEvents", !0))
	}, n.render = function(e) {
		return new i(e)
	}, e(d, n)
});
layui.define("jquery", function(e) {
	"use strict";
	var u = layui.jquery,
		l = {
			config: {},
			index: layui.rate ? layui.rate.index + 1e4 : 0,
			set: function(e) {
				var a = this;
				return a.config = u.extend({}, a.config, e), a
			},
			on: function(e, a) {
				return layui.onevent.call(this, i, e, a)
			}
		},
		i = "rate",
		c = "layui-icon-rate",
		r = "layui-icon-rate-solid",
		o = "layui-icon-rate-half",
		s = "layui-icon-rate-solid layui-icon-rate-half",
		f = "layui-icon-rate layui-icon-rate-half",
		a = function(e) {
			var a = this;
			a.index = ++l.index, a.config = u.extend({}, a.config, l.config, e), a.render()
		};
	a.prototype.config = {
		length: 5,
		text: !1,
		readonly: !1,
		half: !1,
		value: 0,
		theme: ""
	}, a.prototype.render = function() {
		for (var e = this, a = e.config, l = a.theme ? 'style="color: ' + a.theme + ';"' : "", i = (a.elem =
					u(a.elem), a.value > a.length && (a.value = a.length), parseInt(a.value) === a.value ||
					a.half || (a.value = Math.ceil(a.value) - a.value < .5 ? Math.ceil(a.value) : Math
						.floor(a.value)), '<ul class="layui-rate" ' + (a.readonly ? "readonly" : "") + ">"),
				n = 1; n <= a.length; n++) {
			var t = '<li class="layui-inline"><i class="layui-icon ' + (n > Math.floor(a.value) ? c : r) +
				'" ' + l + "></i></li>";
			a.half && parseInt(a.value) !== a.value && n == Math.ceil(a.value) ? i = i +
				'<li><i class="layui-icon layui-icon-rate-half" ' + l + "></i></li>" : i += t
		}
		i += "</ul>" + (a.text ? '<span class="layui-inline">' + a.value + "\u661f" : "") + "</span>";
		var o = a.elem,
			s = o.next(".layui-rate");
		s[0] && s.remove(), e.elemTemp = u(i), a.span = e.elemTemp.next("span"), a.setText && a.setText(a
			.value), o.html(e.elemTemp), o.addClass("layui-inline"), a.readonly || e.action()
	}, a.prototype.setvalue = function(e) {
		this.config.value = e, this.render()
	}, a.prototype.action = function() {
		var i = this.config,
			n = this.elemTemp,
			t = n.find("i").width();
		n.children("li").each(function(e) {
			var a = e + 1,
				l = u(this);
			l.on("click", function(e) {
				i.value = a, i.half && e.pageX - u(this).offset().left <= t / 2 && (i
					.value = i.value - .5), i.text && n.next("span").text(i.value +
					"\u661f"), i.choose && i.choose(i.value), i.setText && i.setText(i
					.value)
			}), l.on("mousemove", function(e) {
				n.find("i").each(function() {
					u(this).addClass(c).removeClass(s)
				}), n.find("i:lt(" + a + ")").each(function() {
					u(this).addClass(r).removeClass(f)
				}), i.half && e.pageX - u(this).offset().left <= t / 2 && l.children(
					"i").addClass(o).removeClass(r)
			}), l.on("mouseleave", function() {
				n.find("i").each(function() {
					u(this).addClass(c).removeClass(s)
				}), n.find("i:lt(" + Math.floor(i.value) + ")").each(function() {
					u(this).addClass(r).removeClass(f)
				}), i.half && parseInt(i.value) !== i.value && n.children("li:eq(" +
					Math.floor(i.value) + ")").children("i").addClass(o).removeClass(
					"layui-icon-rate-solid layui-icon-rate")
			})
		})
	}, a.prototype.events = function() {
		this.config
	}, l.render = function(e) {
		e = new a(e);
		return function() {
			var a = this;
			return {
				setvalue: function(e) {
					a.setvalue.call(a, e)
				},
				config: a.config
			}
		}.call(e)
	}, e(i, l)
});
layui.define("jquery", function(l) {
	"use strict";
	var g = layui.$,
		e = function(l) {};
	e.prototype.load = function(l) {
		var t, i, n, e, r, o, a, c, m, s, u, f, y, d = this,
			p = 0,
			h = g((l = l || {}).elem);
		if (h[0]) return e = g(l.scrollElem || document), r = l.mb || 50, o = !("isAuto" in l) || l.isAuto,
			a = l.end || "\u6ca1\u6709\u66f4\u591a\u4e86", c = l.scrollElem && l.scrollElem !==
			document, m = "<cite>\u52a0\u8f7d\u66f4\u591a</cite>", s = g(
				'<div class="layui-flow-more"><a href="javascript:;">' + m + "</a></div>"), h.find(
				".layui-flow-more")[0] || h.append(s), u = function(l, e) {
				l = g(l), s.before(l), (e = 0 == e || null) ? s.html(a) : s.find("a").html(m), i = e,
					t = null, y && y()
			}, f = function() {
				t = !0, s.find("a").html(
					'<i class="layui-anim layui-anim-rotate layui-anim-loop layui-icon ">&#xe63e;</i>'
					), "function" == typeof l.done && l.done(++p, u)
			}, f(), s.find("a").on("click", function() {
				g(this);
				i || t || f()
			}), l.isLazyimg && (y = d.lazyimg({
				elem: l.elem + " img",
				scrollElem: l.scrollElem
			})), o && e.on("scroll", function() {
				var e = g(this),
					o = e.scrollTop();
				n && clearTimeout(n), !i && h.width() && (n = setTimeout(function() {
					var l = (c ? e : g(window)).height();
					(c ? e.prop("scrollHeight") : document.documentElement
					.scrollHeight) - o - l <= r && (t || f())
				}, 100))
			}), d
	}, e.prototype.lazyimg = function(l) {
		var e, c = this,
			m = 0,
			s = g((l = l || {}).scrollElem || document),
			u = l.elem || "img",
			f = l.scrollElem && l.scrollElem !== document,
			y = function(e, l) {
				var o, t = s.scrollTop(),
					l = t + l,
					i = f ? e.offset().top - s.offset().top + t : e.offset().top;
				t <= i && i <= l && e.attr("lay-src") && (o = e.attr("lay-src"), layui.img(o, function() {
					var l = c.lazyimg.elem.eq(m);
					e.attr("src", o).removeAttr("lay-src"), l[0] && n(l), m++
				}, function() {
					c.lazyimg.elem.eq(m);
					e.removeAttr("lay-src")
				}))
			},
			n = function(l, e) {
				var o = (f ? e || s : g(window)).height(),
					t = s.scrollTop(),
					i = t + o;
				if (c.lazyimg.elem = g(u), l) y(l, o);
				else
					for (var n = 0; n < c.lazyimg.elem.length; n++) {
						var r = c.lazyimg.elem.eq(n),
							a = f ? r.offset().top - s.offset().top + t : r.offset().top;
						if (y(r, o), m = n, i < a) break
					}
			};
		return n(), s.on("scroll", function() {
			var l = g(this);
			e && clearTimeout(e), e = setTimeout(function() {
				n(null, l)
			}, 50)
		}), n
	}, l("flow", new e)
});
layui.define(["layer", "form"], function(t) {
	"use strict";
	var u = layui.$,
		c = layui.layer,
		a = layui.form,
		d = (layui.hint(), layui.device()),
		i = "layedit",
		y = "layui-disabled",
		e = function() {
			this.index = 0, this.config = {
				tool: ["strong", "italic", "underline", "del", "|", "left", "center", "right", "|", "link",
					"unlink"
				],
				hideTool: [],
				height: 280
			}
		},
		f = (e.prototype.set = function(t) {
			return u.extend(!0, this.config, t), this
		}, e.prototype.on = function(t, e) {
			return layui.onevent(i, t, e)
		}, e.prototype.build = function(t, e) {
			e = e || {};
			var i, l, a = this,
				n = a.config,
				o = "layui-layedit",
				s = u("string" == typeof t ? "#" + t : t),
				r = "LAY_layedit_" + ++a.index,
				c = s.next("." + o),
				n = u.extend({}, n, e),
				e = (i = [], l = {}, layui.each(n.hideTool, function(t, e) {
					l[e] = !0
				}), layui.each(n.tool, function(t, e) {
					C[e] && !l[e] && i.push(C[e])
				}), i.join("")),
				o = u(['<div class="' + o + '">', '<div class="layui-unselect layui-layedit-tool">' + e +
					"</div>", '<div class="layui-layedit-iframe">', '<iframe id="' + r + '" name="' +
					r + '" textarea="' + t + '" frameborder="0"></iframe>', "</div>", "</div>"
				].join(""));
			return d.ie && d.ie < 8 ? s.removeClass("layui-hide").addClass("layui-show") : (c[0] && c
				.remove(), f.call(a, o, s[0], n), s.addClass("layui-hide").after(o), a.index)
		}, e.prototype.getContent = function(t) {
			t = n(t);
			if (t[0]) return l(t[0].document.body.innerHTML)
		}, e.prototype.getText = function(t) {
			t = n(t);
			if (t[0]) return u(t[0].document.body).text()
		}, e.prototype.setContent = function(t, e, i) {
			var l = n(t);
			l[0] && (i ? u(l[0].document.body).append(e) : u(l[0].document.body).html(e), layedit.sync(t))
		}, e.prototype.sync = function(t) {
			t = n(t);
			t[0] && u("#" + t[1].attr("textarea")).val(l(t[0].document.body.innerHTML))
		}, e.prototype.getSelection = function(t) {
			var t = n(t);
			if (t[0]) return t = p(t[0].document), document.selection ? t.text : t.toString()
		}, function(a, n, o) {
			var s = this,
				r = a.find("iframe");
			r.css({
				height: o.height
			}).on("load", function() {
				var t = r.contents(),
					e = r.prop("contentWindow"),
					i = t.find("head"),
					l = u(["<style>", "*{margin: 0; padding: 0;}",
						"body{padding: 10px; line-height: 20px; overflow-x: hidden; word-wrap: break-word; font: 14px Helvetica Neue,Helvetica,PingFang SC,Microsoft YaHei,Tahoma,Arial,sans-serif; -webkit-box-sizing: border-box !important; -moz-box-sizing: border-box !important; box-sizing: border-box !important;}",
						"a{color:#01AAED; text-decoration:none;}a:hover{color:#c00}",
						"p{margin-bottom: 10px;}",
						"img{display: inline-block; border: none; vertical-align: middle;}",
						"pre{margin: 10px 0; padding: 10px; line-height: 20px; border: 1px solid #ddd; border-left-width: 6px; background-color: #F2F2F2; color: #333; font-family: Courier New; font-size: 12px;}",
						"</style>"
					].join("")),
					t = t.find("body");
				i.append(l), t.attr("contenteditable", "true").css({
					"min-height": o.height
				}).html(n.value || ""), m.apply(s, [e, r, n, o]), g.call(s, e, a, o)
			})
		}),
		n = function(t) {
			t = u("#LAY_layedit_" + t);
			return [t.prop("contentWindow"), t]
		},
		l = function(t) {
			return t = 8 == d.ie ? t.replace(/<.+>/g, function(t) {
				return t.toLowerCase()
			}) : t
		},
		m = function(e, t, i, l) {
			var a = e.document,
				n = u(a.body);
			n.on("keydown", function(t) {
				if (13 === t.keyCode) {
					var e = p(a);
					if ("pre" === h(e).parentNode.tagName.toLowerCase()) return t.shiftKey ? void 0 : (c
						.msg("\u8bf7\u6682\u65f6\u7528shift+enter"), !1);
					a.execCommand("formatBlock", !1, "<p>")
				}
			}), u(i).parents("form").on("submit", function() {
				var t = n.html();
				8 == d.ie && (t = t.replace(/<.+>/g, function(t) {
					return t.toLowerCase()
				})), i.value = t
			}), n.on("paste", function(t) {
				a.execCommand("formatBlock", !1, "<p>"), setTimeout(function() {
					o.call(e, n), i.value = n.html()
				}, 100)
			})
		},
		o = function(t) {
			this.document;
			t.find("*[style]").each(function() {
				var t = this.style.textAlign;
				this.removeAttribute("style"), u(this).css({
					"text-align": t || ""
				})
			}), t.find("table").addClass("layui-table"), t.find("script,link").remove()
		},
		p = function(t) {
			return t.selection ? t.selection.createRange() : t.getSelection().getRangeAt(0)
		},
		h = function(t) {
			return t.endContainer || t.parentElement().childNodes[0]
		},
		v = function(t, e, i) {
			var l, a, n = this.document,
				o = document.createElement(t);
			for (l in e) o.setAttribute(l, e[l]);
			o.removeAttribute("text"), n.selection ? (a = i.text || e.text, "a" === t && !a || (a && (o
				.innerHTML = a), i.pasteHTML(u(o).prop("outerHTML")), i.select())) : (a = i.toString() || e
				.text, "a" === t && !a || (a && (o.innerHTML = a), i.deleteContents(), i.insertNode(o)))
		},
		b = function(e, t) {
			var i = this.document,
				l = "layedit-tool-active",
				i = h(p(i)),
				a = function(t) {
					return e.find(".layedit-tool-" + t)
				};
			t && t[t.hasClass(l) ? "removeClass" : "addClass"](l), e.find(">i").removeClass(l), a("unlink")
				.addClass(y), u(i).parents().each(function() {
					var t = this.tagName.toLowerCase(),
						e = this.style.textAlign;
					"b" !== t && "strong" !== t || a("b").addClass(l), "i" !== t && "em" !== t || a("i")
						.addClass(l), "u" === t && a("u").addClass(l), "strike" === t && a("d").addClass(l),
						"p" === t && a("center" === e ? "center" : "right" === e ? "right" : "left")
						.addClass(l), "a" === t && (a("link").addClass(l), a("unlink").removeClass(y))
				})
		},
		g = function(a, t, e) {
			var n = a.document,
				o = u(n.body),
				s = {
					link: function(i) {
						var t = h(i),
							l = u(t).parent();
						x.call(o, {
							href: l.attr("href"),
							target: l.attr("target")
						}, function(t) {
							var e = l[0];
							"A" === e.tagName ? e.href = t.url : v.call(a, "a", {
								target: t.target,
								href: t.url,
								text: t.url
							}, i)
						})
					},
					unlink: function(t) {
						n.execCommand("unlink")
					},
					code: function(e) {
						k.call(o, function(t) {
							v.call(a, "pre", {
								text: t.code,
								"lay-lang": t.lang
							}, e)
						})
					},
					help: function() {
						c.open({
							type: 2,
							title: "\u5e2e\u52a9",
							area: ["600px", "380px"],
							shadeClose: !0,
							shade: .1,
							skin: "layui-layer-msg",
							content: ["", "no"]
						})
					}
				},
				r = t.find(".layui-layedit-tool"),
				i = function() {
					var t, e = u(this),
						i = e.attr("layedit-event"),
						l = e.attr("lay-command");
					e.hasClass(y) || (o.focus(), (t = p(n)).commonAncestorContainer, l ? (n.execCommand(l),
						/justifyLeft|justifyCenter|justifyRight/.test(l) && n.execCommand("formatBlock",
							!1, "<p>"), setTimeout(function() {
							o.focus()
						}, 10)) : s[i] && s[i].call(this, t), b.call(a, r, e))
				},
				l = /image/;
			r.find(">i").on("mousedown", function() {
				var t = u(this).attr("layedit-event");
				l.test(t) || i.call(this)
			}).on("click", function() {
				var t = u(this).attr("layedit-event");
				l.test(t) && i.call(this)
			}), o.on("click", function() {
				b.call(a, r)
			})
		},
		x = function(t, i) {
			var l = this,
				t = c.open({
					type: 1,
					id: "LAY_layedit_link",
					area: "350px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "\u8d85\u94fe\u63a5",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form" style="margin: 15px;">',
						'<li class="layui-form-item">',
						'<label class="layui-form-label" style="width: 60px;">URL</label>',
						'<div class="layui-input-block" style="margin-left: 90px">',
						'<input name="url" lay-verify="url" value="' + (t.href || "") +
						'" autofocus="true" autocomplete="off" class="layui-input">', "</div>", "</li>",
						'<li class="layui-form-item">',
						'<label class="layui-form-label" style="width: 60px;">\u6253\u5f00\u65b9\u5f0f</label>',
						'<div class="layui-input-block" style="margin-left: 90px">',
						'<input type="radio" name="target" value="_self" class="layui-input" title="\u5f53\u524d\u7a97\u53e3"' +
						("_self" !== t.target && t.target ? "" : "checked") + ">",
						'<input type="radio" name="target" value="_blank" class="layui-input" title="\u65b0\u7a97\u53e3" ' +
						("_blank" === t.target ? "checked" : "") + ">", "</div>", "</li>",
						'<li class="layui-form-item" style="text-align: center;">',
						'<button type="button" lay-submit lay-filter="layedit-link-yes" class="layui-btn"> \u786e\u5b9a </button>',
						'<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> \u53d6\u6d88 </button>',
						"</li>", "</ul>"
					].join(""),
					success: function(t, e) {
						a.render("radio"), t.find(".layui-btn-primary").on("click", function() {
							c.close(e), l.focus()
						}), a.on("submit(layedit-link-yes)", function(t) {
							c.close(x.index), i && i(t.field)
						})
					}
				});
			x.index = t
		},
		k = function(i) {
			var l = this,
				t = c.open({
					type: 1,
					id: "LAY_layedit_code",
					area: "550px",
					shade: .05,
					shadeClose: !0,
					moveType: 1,
					title: "\u63d2\u5165\u4ee3\u7801",
					skin: "layui-layer-msg",
					content: ['<ul class="layui-form layui-form-pane" style="margin: 15px;">',
						'<li class="layui-form-item">',
						'<label class="layui-form-label">\u8bf7\u9009\u62e9\u8bed\u8a00</label>',
						'<div class="layui-input-block">', '<select name="lang">',
						'<option value="JavaScript">JavaScript</option>',
						'<option value="HTML">HTML</option>', '<option value="CSS">CSS</option>',
						'<option value="Java">Java</option>', '<option value="PHP">PHP</option>',
						'<option value="C#">C#</option>', '<option value="Python">Python</option>',
						'<option value="Ruby">Ruby</option>', '<option value="Go">Go</option>',
						"</select>", "</div>", "</li>", '<li class="layui-form-item layui-form-text">',
						'<label class="layui-form-label">\u4ee3\u7801</label>',
						'<div class="layui-input-block">',
						'<textarea name="code" lay-verify="required" autofocus="true" class="layui-textarea" style="height: 200px;"></textarea>',
						"</div>", "</li>", '<li class="layui-form-item" style="text-align: center;">',
						'<button type="button" lay-submit lay-filter="layedit-code-yes" class="layui-btn"> \u786e\u5b9a </button>',
						'<button style="margin-left: 20px;" type="button" class="layui-btn layui-btn-primary"> \u53d6\u6d88 </button>',
						"</li>", "</ul>"
					].join(""),
					success: function(t, e) {
						a.render("select"), t.find(".layui-btn-primary").on("click", function() {
							c.close(e), l.focus()
						}), a.on("submit(layedit-code-yes)", function(t) {
							c.close(k.index), i && i(t.field)
						})
					}
				});
			k.index = t
		},
		C = {
			html: '<i class="layui-icon layedit-tool-html" title="HTML\u6e90\u4ee3\u7801" lay-command="html" layedit-event="html"">&#xe64b;</i><span class="layedit-tool-mid"></span>',
			strong: '<i class="layui-icon layedit-tool-b" title="\u52a0\u7c97" lay-command="Bold" layedit-event="b"">&#xe62b;</i>',
			italic: '<i class="layui-icon layedit-tool-i" title="\u659c\u4f53" lay-command="italic" layedit-event="i"">&#xe644;</i>',
			underline: '<i class="layui-icon layedit-tool-u" title="\u4e0b\u5212\u7ebf" lay-command="underline" layedit-event="u"">&#xe646;</i>',
			del: '<i class="layui-icon layedit-tool-d" title="\u5220\u9664\u7ebf" lay-command="strikeThrough" layedit-event="d"">&#xe64f;</i>',
			"|": '<span class="layedit-tool-mid"></span>',
			left: '<i class="layui-icon layedit-tool-left" title="\u5de6\u5bf9\u9f50" lay-command="justifyLeft" layedit-event="left"">&#xe649;</i>',
			center: '<i class="layui-icon layedit-tool-center" title="\u5c45\u4e2d\u5bf9\u9f50" lay-command="justifyCenter" layedit-event="center"">&#xe647;</i>',
			right: '<i class="layui-icon layedit-tool-right" title="\u53f3\u5bf9\u9f50" lay-command="justifyRight" layedit-event="right"">&#xe648;</i>',
			link: '<i class="layui-icon layedit-tool-link" title="\u63d2\u5165\u94fe\u63a5" layedit-event="link"">&#xe64c;</i>',
			unlink: '<i class="layui-icon layedit-tool-unlink layui-disabled" title="\u6e05\u9664\u94fe\u63a5" lay-command="unlink" layedit-event="unlink"">&#xe64d;</i>',
			face: '<i class="layui-icon layedit-tool-face" title="\u8868\u60c5" layedit-event="face"">&#xe650;</i>',
			image: '<i class="layui-icon layedit-tool-image" title="\u56fe\u7247" layedit-event="image">&#xe64a;<input type="file" name="file"></i>',
			code: '<i class="layui-icon layedit-tool-code" title="\u63d2\u5165\u4ee3\u7801" layedit-event="code">&#xe64e;</i>',
			help: '<i class="layui-icon layedit-tool-help" title="\u5e2e\u52a9" layedit-event="help">&#xe607;</i>'
		},
		e = new e;
	t(i, e)
});
layui.define(["lay", "util"], function(e) {
	"use strict";
	var d = layui.$,
		o = layui.util,
		u = "layui-code-title",
		l = {
			elem: ".layui-code",
			title: "&lt;/&gt;",
			about: "",
			ln: !0
		};
	e("code", function(e) {
		var c = e = d.extend({}, l, e);
		e.elem = d(e.elem), e.elem[0] && layui.each(e.elem.get().reverse(), function(e, l) {
			var t, a = d(l),
				i = (i = a.html(), d.trim(i).replace(/^\n|\n$/, "")),
				l = d.extend({}, c, lay.options(l), (t = {}, layui.each(["title", "height",
					"encode", "skin", "about"
				], function(e, l) {
					var i = a.attr("lay-" + l);
					"string" == typeof i && (t[l] = i)
				}), t)),
				s = l.ln ? "ol" : "ul",
				s = d("<" + s + ' class="layui-code-' + s + '">'),
				n = d('<div class="' + u + '">');
			a.addClass("layui-code-view layui-box"), l.skin && ("notepad" === l.skin && (l
				.skin = "dark"), a.addClass("layui-code-" + l.skin)), i = (i = l.encode ? o
				.escape(i) : i).replace(/[\r\t\n]+/g, "</li><li>"), a.html(s.html("<li>" +
				i + "</li>")), a.children("." + u)[0] || (n.html(l.title + (l.about ?
				'<div class="layui-code-about">' + l.about + "</div>" : "")), a.prepend(
				n)), 0 < (i = Math.floor(s.find("li").length / 100)) && s.css("margin-left",
				i + "px"), l.height && s.css("max-height", l.height)
		})
	})
}).addcss("modules/code.css?v=3", "skincodecss");
