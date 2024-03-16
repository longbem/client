exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 1401:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ItemList_container___67Uf",
	"title": "ItemList_title__hbtye",
	"price": "ItemList_price__sOBIG"
};


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ItemList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/ItemList/index.module.scss
var index_module = __webpack_require__(1401);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/utils/format.ts
const formatPrice = (value, decimalCount)=>{
    const decimalLength = decimalCount || 6;
    if (!value) {
        return "0";
    } else {
        const splitPoint = value.toString().split(".");
        if (splitPoint[1] && splitPoint[1].length >= decimalLength) {
            return `${splitPoint[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${splitPoint[1].slice(0, decimalLength)}`;
        } else {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
};

;// CONCATENATED MODULE: ./src/components/ItemList/index.tsx




const ItemList = ({ item  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Image, {
                width: "100%",
                alt: item?.image,
                src: item?.image
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Typography, {
                className: (index_module_default()).title,
                children: item?.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Typography, {
                className: (index_module_default()).price,
                children: `Giá từ: ${formatPrice(item?.price)}`
            })
        ]
    });
};
/* harmony default export */ const components_ItemList = (ItemList);


/***/ })

};
;