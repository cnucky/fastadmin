(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0e455c8c"], {
    "37d6": function (t, e, i) {
    }, "4fbe": function (t, e, i) {
    }, 5399: function (t, e, i) {
        "use strict";
        var a = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "cube-page",
                class: t.type
            }, [i("header", {staticClass: "header"}, [i("h1", [t._v(t._s(t.title))]), i("i", {
                staticClass: "cubeic-back",
                on: {click: t.back}
            }, [i("van-icon", {
                attrs: {
                    size: "20px",
                    name: "arrow-left"
                }
            })], 1)]), i("div", {staticClass: "wrapper"}, [i("section", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.desc,
                    expression: "desc"
                }], staticClass: "desc"
            }, [t._t("desc", [t._v(t._s(t.desc))])], 2), i("main", {staticClass: "content"}, [t._t("content", [t._v(t._s(t.content))])], 2)])])
        }, n = [], s = {
            props: {
                title: {type: String, default: "", required: !0},
                type: {type: String, default: ""},
                desc: {type: String, default: ""},
                content: {type: String, default: ""}
            }, methods: {
                back: function () {
                    window.history.length > 1 ? this.$router.back() : this.$router.push("/")
                }
            }
        }, o = s, c = (i("7dda"), i("cf63"), i("2877")), l = Object(c["a"])(o, a, n, !1, null, "a378effe", null);
        e["a"] = l.exports
    }, "76ab": function (t, e, i) {
    }, "7dda": function (t, e, i) {
        "use strict";
        var a = i("bcd4"), n = i.n(a);
        n.a
    }, "7f7f": function (t, e, i) {
        var a = i("86cc").f, n = Function.prototype, s = /^\s*function ([^ (]*)/, o = "name";
        o in n || i("9e1e") && a(n, o, {
            configurable: !0, get: function () {
                try {
                    return ("" + this).match(s)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, "8a65": function (t, e, i) {
        "use strict";
        var a = i("76ab"), n = i.n(a);
        n.a
    }, "96e1": function (t, e, i) {
        "use strict";
        i.r(e);
        var a = function () {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {staticClass: "Relist"}, [i("cube-page", {
                attrs: {
                    type: "New-view",
                    title: t.toptitle
                }
            }, [i("div", {attrs: {slot: "content"}, slot: "content"}, [i("van-tabbar", {
                attrs: {fixed: !1},
                on: {change: t.onChange},
                model: {
                    value: t.sel_active, callback: function (e) {
                        t.sel_active = e
                    }, expression: "sel_active"
                }
            }, [i("van-tabbar-item", {attrs: {icon: "youzan-shield"}}, [t._v("综合")]), i("van-tabbar-item", {
                attrs: {
                    icon: "hot",
                    info: "hot"
                }
            }, [t._v("销量")]), i("van-tabbar-item", {
                attrs: {
                    icon: "gold-coin",
                    info: "低"
                }
            }, [t._v("价格")])], 1), i("van-list", {
                attrs: {finished: t.finished, "finished-text": "没有更多了"},
                on: {load: t.onLoad},
                model: {
                    value: t.loading, callback: function (e) {
                        t.loading = e
                    }, expression: "loading"
                }
            }, t._l(t.list, function (e) {
                return i("van-card", {
                    key: e.id,
                    attrs: {
                        "custom-class": "van-card-root-c",
                        price: "¥" + e.goods_min_price,
                        "origin-price": "销量:" + e.goods_sales,
                        title: e.goods_name,
                        centered: !0,
                        "lazy-load": !0,
                        thumb: e.image
                    },
                    on: {
                        click: function (i) {
                            return t.togoods(e.id)
                        }
                    }
                })
            }), 1)], 1)]), i("cube-view")], 1)
        }, n = [], s = (i("7f7f"), i("ce11")), o = i("5399"), c = i("c290"), l = {
            components: {CubeView: s["a"], CubePage: o["a"]}, data: function () {
                return {
                    sel_active: 0,
                    list: [],
                    loading: !1,
                    finished: !1,
                    toptitle: "",
                    page: 1,
                    last_page: null,
                    noList: !0,
                    sel_type: "normal",
                    c_id: -1,
                    title: ""
                }
            }, created: function () {
                this.c_id = this.$route.query.cid || -1, this.title = this.$route.query.name || "", this.toptitle = this.title || "所有商品", this.axios_Request(!0)
            }, methods: {
                togoods: function (t) {
                    this.$router.push({path: "relist/goods", query: {id: t}})
                }, onChange: function () {
                    console.log(this.sel_active);
                    var t = ["normal", "sales", "price"];
                    this.sel_type = t[this.sel_active], console.log(this.sel_type), this.axios_Request(!0)
                }, onLoad: function () {
                    if (this.page >= this.last_page && null != this.last_page) return this.finished = !0, !1;
                    this.axios_Request(!1, ++this.page)
                }, axios_Request: function (t, e) {
                    var i = "/addons/litestore/api.goods/category_list", a = this;
                    c["a"](i, {id: a.c_id, page: e || 1, types: a.sel_type, name: a.title}, function (i) {
                        a.loading = !1;
                        var n = i.data.listdata, s = a.list;
                        !0 === t || "undefined" === typeof s ? (a.list = n, a.noList = 0 == n.length, a.finished = e || 1 >= i.data.pagedata.last_page) : (a.list = s.concat(n), a.noList = !1, a.finished = 0 == n.length), a.last_page = i.data.pagedata.last_page, console.log(i)
                    })
                }
            }
        }, r = l, u = (i("8a65"), i("2877")), d = Object(u["a"])(r, a, n, !1, null, null, null);
        e["default"] = d.exports
    }, bcd4: function (t, e, i) {
    }, c153: function (t, e, i) {
        "use strict";
        var a = i("37d6"), n = i.n(a);
        n.a
    }, ce11: function (t, e, i) {
        "use strict";
        var a = function () {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("transition", {attrs: {name: "page-move"}}, [i("router-view", {staticClass: "cube-view"})], 1)
            }, n = [], s = {methods: {}}, o = s, c = (i("c153"), i("2877")),
            l = Object(c["a"])(o, a, n, !1, null, null, null);
        e["a"] = l.exports
    }, cf63: function (t, e, i) {
        "use strict";
        var a = i("4fbe"), n = i.n(a);
        n.a
    }
}]);
//# sourceMappingURL=chunk-0e455c8c.e6bc1143.js.map