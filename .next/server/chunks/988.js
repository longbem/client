exports.id = 988;
exports.ids = [988];
exports.modules = {

/***/ 6649:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Banner_container__ipNg0",
	"imageBanner": "Banner_imageBanner__M5VXi",
	"boxContent": "Banner_boxContent__opqdx",
	"welcome": "Banner_welcome__18QYG",
	"boxItemBanner": "Banner_boxItemBanner__h_v1_",
	"value": "Banner_value__SdOQl",
	"icon": "Banner_icon__ofd_8"
};


/***/ }),

/***/ 9988:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6649);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6157);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_icons_bi__WEBPACK_IMPORTED_MODULE_2__]);
react_icons_bi__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @next/next/no-img-element */ 



const ItemBanner = ({ icon , value  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().boxItemBanner),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon),
                children: icon || null
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().value),
                children: value
            })
        ]
    });
};
const Banner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                alt: "banner",
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imageBanner),
                src: "https://t3.ftcdn.net/jpg/04/87/00/24/240_F_487002444_c68D38jVD8KIpDSCQFYvU2lBjBlIoNxo.jpg"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().boxContent),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().welcome),
                        children: "Ch\xe0o mừng bạn đến với Bem"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemBanner, {
                        value: "T\xecm Mua Xe",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiRightArrowAlt, {
                            color: "#fff",
                            size: 20
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemBanner, {
                        value: "Gửi B\xe1n Xe",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiRightArrowAlt, {
                            color: "#fff",
                            size: 20
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemBanner, {
                        value: "Sửa Chữa/Bảo Dưỡng",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiRightArrowAlt, {
                            color: "#fff",
                            size: 20
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ItemBanner, {
                        value: "Tư Vấn",
                        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_2__.BiRightArrowAlt, {
                            size: 20,
                            color: "#fff"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;