exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 8621:
/***/ ((module) => {

// Exports
module.exports = {
	"boxLogo": "Admin_boxLogo__FhWXV",
	"logo": "Admin_logo__dB_7b",
	"managerLayout": "Admin_managerLayout__1t4_N"
};


/***/ }),

/***/ 8861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8621);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);







const { Header , Sider , Content  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;
const AdminLayout = ({ children  })=>{
    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    //@ts-ignore
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleLogout = ()=>{
        router.push("/admin/login");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)("adminId");
        (0,cookies_next__WEBPACK_IMPORTED_MODULE_4__.deleteCookie)("accessTokenAdmin");
    };
    const toggleCollapsed = ()=>{
        setCollapsed(!collapsed);
    };
    const activeMenu = ()=>{
        switch(router.pathname){
            case "/admin/dashboard":
                return [
                    "1"
                ];
            case "/admin/warehouse-management":
                return [
                    "2"
                ];
            case "/admin/about":
                return [
                    "3"
                ];
            default:
                return [];
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().managerLayout),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Sider, {
                trigger: null,
                collapsible: true,
                collapsed: collapsed,
                style: {
                    borderRight: "1px solid rgba(229,215,238,3)",
                    minWidth: "270px",
                    background: "#FFFFFF"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().boxLogo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                onClick: toggleCollapsed,
                                style: {
                                    top: collapsed ? 10 : -12
                                },
                                children: collapsed ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.MenuUnfoldOutlined, {
                                    rev: undefined
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.MenuFoldOutlined, {
                                    rev: undefined
                                })
                            }),
                            !collapsed && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_6___default().logo),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                    width: 100,
                                    alt: "logo",
                                    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/BEM_logo.svg/686px-BEM_logo.svg.png?20210313041543"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                        theme: "light",
                        mode: "inline",
                        defaultSelectedKeys: activeMenu(),
                        style: {
                            height: "100vh"
                        },
                        items: [
                            {
                                key: "1",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CarOutlined, {
                                    rev: undefined
                                }),
                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        router.push("/admin/dashboard");
                                    },
                                    children: "Quản l\xfd Xe"
                                })
                            },
                            {
                                key: "2",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.HomeOutlined, {
                                    rev: undefined
                                }),
                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        router.push("/admin/warehouse-management");
                                    },
                                    children: "Quản l\xfd Kho"
                                })
                            },
                            {
                                key: "3",
                                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.InfoCircleOutlined, {
                                    rev: undefined
                                }),
                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    onClick: ()=>{
                                        router.push("/admin/about");
                                    },
                                    children: "Quản l\xfd Th\xf4ng tin"
                                })
                            }
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                className: "site-layout-background",
                style: {
                    padding: 26,
                    background: "#ffffff"
                },
                children: children
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);


/***/ })

};
;