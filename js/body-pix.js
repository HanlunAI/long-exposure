// @tensorflow/tfjs-models Copyright 2019 Google
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@tensorflow/tfjs")) : "function" == typeof define && define.amd ? define(["exports", "@tensorflow/tfjs"], t) : t((e = e || self).bodyPix = {}, e.tf)
}(this, function(e, t) {
    "use strict";

    function r(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function u(e) {
                e.done ? o(e.value) : new r(function(t) {
                    t(e.value)
                }).then(a, s)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }

    function n(e, t) {
        var r, n, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function s(i) {
            return function(s) {
                return function(i) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                        switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], n = 0
                    } finally {
                        r = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, s])
            }
        }
    }
    var o = [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1]
        ],
        i = [8, 16, 32];

    function a(e) {
        t.util.assert("number" == typeof e, function() {
            return "outputStride is not a number"
        }), t.util.assert(i.indexOf(e) >= 0, function() {
            return "outputStride of " + e + " is invalid. It must be either 8, 16, or 32"
        })
    }
    var s = {
        100: [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1]
        ],
        75: [
            ["conv2d", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 2],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1],
            ["separableConv", 1]
        ],
        50: o,
        25: o
    };
    var u = function() {
            function e(e, r) {
                this.PREPROCESS_DIVISOR = t.scalar(127.5), this.ONE = t.scalar(1), this.modelWeights = e, this.convolutionDefinitions = r
            }
            return e.prototype.predict = function(e, r) {
                var n = this,
                    o = t.div(e.toFloat(), this.PREPROCESS_DIVISOR),
                    i = t.sub(o, this.ONE);
                return function(e, t) {
                    var r = 1,
                        n = 1;
                    return e.map(function(e, o) {
                        var i, a, s = e[0],
                            u = e[1];
                        return r === t ? (i = 1, a = n, n *= u) : (i = u, a = 1, r *= u), {
                            blockId: o,
                            convType: s,
                            stride: i,
                            rate: a,
                            outputStride: r
                        }
                    })
                }(this.convolutionDefinitions, r).reduce(function(e, t) {
                    var r = t.blockId,
                        o = t.stride,
                        i = t.convType,
                        a = t.rate;
                    if ("conv2d" === i) return n.conv(e, o, r);
                    if ("separableConv" === i) return n.separableConv(e, o, r, a);
                    throw Error("Unknown conv type of " + i)
                }, i)
            }, e.prototype.convToOutput = function(e, t) {
                return e.conv2d(this.weights(t), 1, "same").add(this.convBias(t, !1))
            }, e.prototype.conv = function(e, t, r) {
                var n = this.weights("Conv2d_" + String(r));
                return e.conv2d(n, t, "same").add(this.convBias("Conv2d_" + String(r))).clipByValue(0, 6)
            }, e.prototype.separableConv = function(e, t, r, n) {
                void 0 === n && (n = 1);
                var o = "Conv2d_" + String(r) + "_depthwise",
                    i = "Conv2d_" + String(r) + "_pointwise";
                return e.depthwiseConv2D(this.depthwiseWeights(o), t, "same", "NHWC", n).add(this.depthwiseBias(o)).clipByValue(0, 6).conv2d(this.weights(i), [1, 1], "same").add(this.convBias(i)).clipByValue(0, 6)
            }, e.prototype.weights = function(e) {
                return this.modelWeights.weights(e)
            }, e.prototype.convBias = function(e, t) {
                return void 0 === t && (t = !0), this.modelWeights.convBias(e, t)
            }, e.prototype.depthwiseBias = function(e) {
                return this.modelWeights.depthwiseBias(e)
            }, e.prototype.depthwiseWeights = function(e) {
                return this.modelWeights.depthwiseWeights(e)
            }, e.prototype.dispose = function() {
                this.modelWeights.dispose()
            }, e
        }(),
        d = "tf-models/savedmodel/",
        l = {
            1: {
                url: d + "posenet_mobilenet_100_partmap/",
                architecture: s[100]
            },
            .75: {
                url: d + "posenet_mobilenet_075_partmap/",
                architecture: s[75]
            },
            .5: {
                url: d + "posenet_mobilenet_050_partmap/",
                architecture: s[50]
            },
            .25: {
                url: d + "posenet_mobilenet_025_partmap/",
                architecture: s[25]
            }
        };

    function h(e, r) {
        return t.tidy(function() {
            return e.greater(t.scalar(r)).toInt()
        })
    }

    function p(e, r) {
        var n = r.shape,
            o = n[0],
            i = n[1],
            a = n[2];
        return t.tidy(function() {
            var n, s, u = function(e) {
                    var r = e.shape[2],
                        n = e.argMax(2).reshape([-1]);
                    return t.oneHot(n, r)
                }(r),
                d = t.range(0, a, 1, "int32").expandDims(1),
                l = u.matMul(d).toInt().reshape([o, i]).add(t.scalar(1, "int32"));
            return (n = l, s = e, n.mul(s)).sub(t.scalar(1, "int32"))
        })
    }
    var c = function() {
        function e(e) {
            this.graphModel = e
        }
        return e.prototype.weights = function(e) {
            return this.getVariable("MobilenetV1/" + e + "/weights")
        }, e.prototype.convBias = function(e, t) {
            return void 0 === t && (t = !0), this.getVariable("MobilenetV1/" + e + "/Conv2D_bias")
        }, e.prototype.depthwiseBias = function(e) {
            return this.getVariable("MobilenetV1/" + e + "/depthwise_bias")
        }, e.prototype.depthwiseWeights = function(e) {
            return this.getVariable("MobilenetV1/" + e + "/depthwise_weights")
        }, e.prototype.getVariable = function(e) {
            return this.graphModel.weights["" + e][0]
        }, e.prototype.dispose = function() {
            this.graphModel.dispose()
        }, e
    }();

    function f(e) {
        return e instanceof t.Tensor ? [e.shape[0], e.shape[1]] : [e.height, e.width]
    }

    function v(e, r, n) {
        var o = r[0],
            i = r[1];
        void 0 === n && (n = !1);
        var a, s, u, d, l, h, p = f(e),
            c = p[0],
            v = p[1] / c;
        if (v > i / o) {
            a = i;
            var g = o - (s = Math.ceil(a / v));
            u = 0, d = 0, l = Math.floor(g / 2), h = o - (s + l)
        } else {
            s = o;
            var b = i - (a = Math.ceil(o * v));
            u = Math.floor(b / 2), d = i - (a + u), l = 0, h = 0
        }
        return {
            resizedAndPadded: t.tidy(function() {
                var r, o = function(e) {
                    return e instanceof t.Tensor ? e : t.browser.fromPixels(e)
                }(e);
                return r = n ? o.reverse(1).resizeBilinear([s, a]) : o.resizeBilinear([s, a]), t.pad3d(r, [
                    [l, h],
                    [u, d],
                    [0, 0]
                ])
            }),
            paddedBy: [
                [l, h],
                [u, d]
            ]
        }
    }

    function g(e, r, n, o) {
        var i = r[0],
            a = r[1],
            s = n[0],
            u = n[1],
            d = o[0],
            l = d[0],
            h = d[1],
            p = o[1],
            c = p[0],
            f = p[1];
        return t.tidy(function() {
            return function(e, r, n) {
                var o = r[0],
                    i = r[1],
                    a = n[0],
                    s = a[0],
                    u = a[1],
                    d = n[1],
                    l = d[0],
                    h = d[1],
                    p = e.shape,
                    c = p[0],
                    f = p[1],
                    v = c - (s + u),
                    g = f - (l + h);
                return t.tidy(function() {
                    var r = t.slice3d(e, [s, l, 0], [v, g, e.shape[2]]),
                        n = r.resizeBilinear([o, i], !0);
                    return n
                })
            }(e.resizeBilinear([s, u], !0), [i, a], [
                [l, h],
                [c, f]
            ])
        })
    }
    var b = [353, 257],
        m = function() {
            function e(e) {
                this.mobileNet = e
            }
            return e.prototype.predictForSegmentation = function(e, r) {
                var n = this;
                return void 0 === r && (r = 16), a(r), t.tidy(function() {
                    var t = n.mobileNet.predict(e, r);
                    return n.mobileNet.convToOutput(t, "segment_2").sigmoid()
                })
            }, e.prototype.predictForPartMap = function(e, r) {
                var n = this;
                return void 0 === r && (r = 16), a(r), t.tidy(function() {
                    var t = n.mobileNet.predict(e, r),
                        o = n.mobileNet.convToOutput(t, "segment_2"),
                        i = n.mobileNet.convToOutput(t, "part_heatmap_2");
                    return {
                        segmentScores: o.sigmoid(),
                        partHeatmapScores: i.sigmoid()
                    }
                })
            }, e.prototype.estimatePersonSegmentation = function(e, o, i) {
                return void 0 === o && (o = 16), void 0 === i && (i = .5), r(this, void 0, void 0, function() {
                    var r, s, u, d, l, p = this;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return a(o), r = f(e), s = r[0], u = r[1], [4, (d = t.tidy(function() {
                                    var t = v(e, b),
                                        r = t.resizedAndPadded,
                                        n = t.paddedBy,
                                        a = p.predictForSegmentation(r, o),
                                        d = r.shape,
                                        l = d[0],
                                        c = d[1];
                                    return h(g(a, [s, u], [l, c], n).squeeze(), i)
                                })).data()];
                            case 1:
                                return l = n.sent(), d.dispose(), [2, {
                                    height: s,
                                    width: u,
                                    data: l
                                }]
                        }
                    })
                })
            }, e.prototype.estimatePartSegmentation = function(e, o, i) {
                return void 0 === o && (o = 16), void 0 === i && (i = .5), r(this, void 0, void 0, function() {
                    var r, s, u, d, l, c = this;
                    return n(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return a(o), r = f(e), s = r[0], u = r[1], [4, (d = t.tidy(function() {
                                    var t = v(e, b),
                                        r = t.resizedAndPadded,
                                        n = t.paddedBy,
                                        a = c.predictForPartMap(r, o),
                                        d = a.segmentScores,
                                        l = a.partHeatmapScores,
                                        f = r.shape,
                                        m = f[0],
                                        w = f[1],
                                        y = g(d, [s, u], [m, w], n),
                                        C = g(l, [s, u], [m, w], n);
                                    return p(h(y.squeeze(), i), C)
                                })).data()];
                            case 1:
                                return l = n.sent(), d.dispose(), [2, {
                                    height: s,
                                    width: u,
                                    data: l
                                }]
                        }
                    })
                })
            }, e.prototype.dispose = function() {
                this.mobileNet.dispose()
            }, e
        }();
    var w = {
        load: function(e) {
            return r(void 0, void 0, void 0, function() {
                var r, o, i, a;
                return n(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return r = l[e], o = r.url, [4, t.loadGraphModel(o + "model.json")];
                        case 1:
                            return i = n.sent(), a = new c(i), [2, new u(a, r.architecture)]
                    }
                })
            })
        }
    };
    var y = {};

    function C(e, t, r, n) {
        var o = e.width,
            i = e.height,
            a = t.width,
            s = t.height;
        if (o !== a || i !== s) throw new Error("error: dimensions must match. " + r + " has dimensions " + o + "x" + i + ", " + n + " has dimensions " + a + "x" + s)
    }

    function k(e) {
        var t = e.getContext("2d");
        t.scale(-1, 1), t.translate(-e.width, 0)
    }

    function M(e, t, r) {
        e.globalCompositeOperation = r, e.drawImage(t, 0, 0)
    }

    function x(e) {
        return y[e] || (y[e] = document.createElement("canvas")), y[e]
    }

    function B(e, t, r) {
        var n = e.height,
            o = e.width,
            i = r.getContext("2d");
        r.width = o, r.height = n, i.clearRect(0, 0, o, n), i.save(), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? function(e, t, r) {
            for (var n = e.getContext("2d"), o = 0, i = 1 / (2 * Math.PI * 5 * 5), a = r < 3 ? 1 : 2, s = -r; s <= r; s += a)
                for (var u = -r; u <= r; u += a) o += i * Math.exp(-(u * u + s * s) / 50);
            for (s = -r; s <= r; s += a)
                for (u = -r; u <= r; u += a) n.globalAlpha = i * Math.exp(-(u * u + s * s) / 50) / o * r, n.drawImage(t, u, s);
            n.globalAlpha = 1
        }(r, e, t) : (i.filter = "blur(" + t + "px)", i.drawImage(e, 0, 0, o, n)), i.restore()
    }

    function S(e, t, r) {
        var n = x(r);
        return 0 === t ? function(e, t) {
            var r = e.width,
                n = e.height;
            t.width = r, t.height = n, t.getContext("2d").drawImage(e, 0, 0, r, n)
        }(e, n) : B(e, t, n), n
    }

    function _(e, t) {
        var r = x(t);
        return function(e, t) {
            t.width = e.width, t.height = e.height, t.getContext("2d").putImageData(e, 0, 0)
        }(e, r), r
    }

    function I(e, t) {
        void 0 === t && (t = !0);
        for (var r = e.width, n = e.height, o = e.data, i = new Uint8ClampedArray(r * n * 4), a = 0; a < n * r; ++a) {
            var s = 255 * (t ? 1 - o[a] : o[a]),
                u = 4 * a;
            i[u + 0] = 0, i[u + 1] = 0, i[u + 2] = 0, i[u + 3] = Math.round(s)
        }
        return new ImageData(i, r, n)
    }
    var P = {
        blurred: "blurred",
        blurredMask: "blurred-mask",
        mask: "mask",
        lowresPartMask: "lowres-part-mask"
    };
    e.BodyPix = m, e.load = function(e) {
        return void 0 === e && (e = .75), r(this, void 0, void 0, function() {
            var r, o;
            return n(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (null == t) throw new Error("Cannot find TensorFlow.js. If you are using a <script> tag, please also include @tensorflow/tfjs on the page before using this model.");
                        return r = Object.keys(l), t.util.assert("number" == typeof e, function() {
                            return "got multiplier type of " + typeof e + " when it should be a number."
                        }), t.util.assert(r.indexOf(e.toString()) >= 0, function() {
                            return "invalid multiplier value of " + e + ".  No checkpoint exists for that multiplier. Must be one of " + r.join(",") + "."
                        }), [4, w.load(e)];
                    case 1:
                        return o = n.sent(), [2, new m(o)]
                }
            })
        })
    }, e.checkpoints = l, e.decodePartSegmentation = p, e.toMask = h, e.drawBokehEffect = function(e, t, r, n, o, i) {
        void 0 === n && (n = 3), void 0 === o && (o = 3), void 0 === i && (i = !1), C(t, r, "image", "segmentation");
        var a = S(t, n, P.blurred),
            s = function(e, t) {
                var r = _(I(e, !1), P.mask);
                return 0 === t ? r : S(r, t, P.blurredMask)
            }(r, o),
            u = e.getContext("2d");
        u.save(), i && k(e), u.drawImage(t, 0, 0), M(u, s, "destination-in"), M(u, a, "destination-over"), u.restore()
    }, e.drawMask = function(e, t, r, n, o, i) {
        void 0 === n && (n = .7), void 0 === o && (o = 0), void 0 === i && (i = !1), C(t, r, "image", "mask");
        var a = S(_(r, P.mask), o, P.blurredMask);
        e.width = a.width, e.height = a.height;
        var s = e.getContext("2d");
        s.save(), i && k(e), s.drawImage(t, 0, 0), s.globalAlpha = n, s.drawImage(a, 0, 0), s.restore()
    }, e.drawPixelatedMask = function(e, t, r, n, o, i, a) {
        void 0 === n && (n = .7), void 0 === o && (o = 0), void 0 === i && (i = !1), void 0 === a && (a = 10), C(t, r, "image", "mask");
        var s = S(_(r, P.mask), o, P.blurredMask);
        e.width = s.width, e.height = s.height;
        var u = e.getContext("2d");
        u.save(), i && k(e);
        var d = x(P.lowresPartMask),
            l = d.getContext("2d");
        d.width = s.width * (1 / a), d.height = s.height * (1 / a), l.drawImage(s, 0, 0, s.width, s.height, 0, 0, d.width, d.height), u.imageSmoothingEnabled = !1, u.drawImage(d, 0, 0, d.width, d.height, 0, 0, e.width, e.height);
        for (var h = 0; h < d.width; h++) u.beginPath(), u.strokeStyle = "#ffffff", u.moveTo(a * h, 0), u.lineTo(a * h, e.height), u.stroke();
        for (h = 0; h < d.height; h++) u.beginPath(), u.strokeStyle = "#ffffff", u.moveTo(0, a * h), u.lineTo(e.width, a * h), u.stroke();
        u.globalAlpha = 1 - n, u.drawImage(t, 0, 0), u.restore()
    }, e.toColoredPartImageData = function(e, t) {
        for (var r = e.width, n = e.height, o = e.data, i = new Uint8ClampedArray(r * n * 4), a = 0; a < n * r; ++a) {
            var s = Math.round(o[a]),
                u = 4 * a;
            if (-1 === s) i[u + 0] = 255, i[u + 1] = 255, i[u + 2] = 255, i[u + 3] = 255;
            else {
                var d = t[s];
                if (!d) throw new Error("No color could be found for part id " + s);
                i[u + 0] = d[0], i[u + 1] = d[1], i[u + 2] = d[2], i[u + 3] = 255
            }
        }
        return new ImageData(i, r, n)
    }, e.toMaskImageData = I, e.partChannels = ["leftFace", "rightFace", "rightUpperLegFront", "rightLowerLegBack", "rightUpperLegBack", "leftLowerLegFront", "leftUpperLegFront", "leftUpperLegBack", "leftLowerLegBack", "rightFeet", "rightLowerLegFront", "leftFeet", "torsoFront", "torsoBack", "rightUpperArmFront", "rightUpperArmBack", "rightLowerArmBack", "leftLowerArmFront", "leftUpperArmFront", "leftUpperArmBack", "leftLowerArmBack", "rightHand", "rightLowerArmFront", "leftHand"], e.resizeAndPadTo = v, e.scaleAndCropToInputTensorShape = g, Object.defineProperty(e, "__esModule", {
        value: !0
    })
});