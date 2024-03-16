"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ request)
/* harmony export */ });
/* unused harmony export privateRequest */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8982);
/* harmony import */ var cookies_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies_next__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// console.log("process.env", process.env);
const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:4000/api",
    timeout: 1000
});
const request = instance;
const privateRequest = async (method, url, payload)=>{
    const tokenManager = await getCookie("accessToken");
    return instance({
        method: method,
        url: url,
        data: payload,
        headers: {
            Authorization: `Bearer ${tokenManager}`
        }
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4325:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ requestGetAbout),
/* harmony export */   "r": () => (/* binding */ requestUpdateAbout)
/* harmony export */ });
/* harmony import */ var _pages_api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(526);
/* harmony import */ var _utils_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8186);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_request__WEBPACK_IMPORTED_MODULE_0__]);
_pages_api_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const requestGetAbout = async ()=>{
    try {
        return _pages_api_request__WEBPACK_IMPORTED_MODULE_0__/* .request.get */ .W.get(_utils_path__WEBPACK_IMPORTED_MODULE_1__/* .API_PATH.ADMIN_ABOUT_INFO */ .v.ADMIN_ABOUT_INFO);
    } catch (error) {
        return Promise.reject(error);
    }
};
const requestUpdateAbout = async (data)=>{
    try {
        return _pages_api_request__WEBPACK_IMPORTED_MODULE_0__/* .request.post */ .W.post(_utils_path__WEBPACK_IMPORTED_MODULE_1__/* .API_PATH.ADMIN_UPDATE_ABOUT_INFO */ .v.ADMIN_UPDATE_ABOUT_INFO, data);
    } catch (error) {
        return Promise.reject(error);
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ API_PATH)
/* harmony export */ });
const API_PATH = {
    ADMIN_LOGIN: "/auth/user-login",
    ADMIN_ABOUT_INFO: "/about",
    ADMIN_UPDATE_ABOUT_INFO: "/about/update-about",
    LIST_USER: "/api/user/users"
};


/***/ })

};
;