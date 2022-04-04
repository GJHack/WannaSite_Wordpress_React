/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _scripts_Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Main.js */ "./src/scripts/Main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);

 //Можно использовать SCSS. Стоит обработчик. Мне удобнее просто CSS




react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.render(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_scripts_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.querySelector("#App"));

/***/ }),

/***/ "./src/scripts/Main.js":
/*!*****************************!*\
  !*** ./src/scripts/Main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_Posts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Posts.js */ "./src/scripts/modules/Posts.js");
/* harmony import */ var _modules_SideMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/SideMenu.js */ "./src/scripts/modules/SideMenu.js");
/* harmony import */ var _modules_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Header.js */ "./src/scripts/modules/Header.js");
/* harmony import */ var _modules_Worker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Worker.js */ "./src/scripts/modules/Worker.js");







function Main(_ref) {
  let {} = _ref;
  const [clickCount, setClickCount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const [page, setPage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('main');
  const siteUrl = 'http://localhost/myBlogWp/'; //Меняем на свой URL либо если на хостинге ставим тупо "/"

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [page]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_modules_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    siteUrl: siteUrl,
    page: page,
    setPage: setPage,
    getMenu: _modules_Worker_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    extraClass: `header${page}`
  }), //Главная страница
  page == 'main' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: `bodyKey_${page}`,
    className: "mainContainer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "headerBlock",
    onClick: () => Object(_modules_Worker_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Welcome to easy dev.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bodyContainer"
  })) : false, //Главная страница
  page == 'blog' ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    key: `bodyKey_${page}`,
    className: "mainContainer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "headerBlock",
    onClick: () => Object(_modules_Worker_js__WEBPACK_IMPORTED_MODULE_5__["default"])()
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u043C\u043E\u0439 \u0443\u044E\u0442\u043D\u044B\u0439 \u0431\u043B\u043E\u0433."), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, "Welcome to easy dev.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bodyContainer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_modules_Posts_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteUrl: siteUrl
  }))) : false, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_modules_SideMenu_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    siteUrl: siteUrl
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/scripts/modules/Header.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Header(_ref) {
  var _headMenu$;

  let {
    siteUrl,
    getMenu,
    page,
    setPage,
    extraClass
  } = _ref;
  const [headMenu, setHeadMenu] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    'title': 'Главная',
    'desc': 'main',
    'action': () => setPage('main'),
    'alt': 'Переход на главную страницу',
    'id': 0
  }, {
    'title': 'Блог',
    'desc': 'blog',
    'action': () => {
      setPage('blog');
    },
    'alt': 'Переход в блог',
    'id': 1
  }]);
  if (headMenu[0].title == 'menu') getMenu(siteUrl, setHeadMenu);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [headMenu]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [page]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: `headerMenu ${extraClass}`
  }, ((_headMenu$ = headMenu[0]) === null || _headMenu$ === void 0 ? void 0 : _headMenu$.title) != 'menu' ? headMenu.map((item, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: '#',
      className: `${item.desc == page ? 'activeHeaderMenuItem' : 'headerMenuItem '}`,
      alt: item.alt,
      key: item.id + "_KEY",
      onClick: () => {
        item.action();
      }
    }, " ", item.title, " ");
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h5", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."));
}

/***/ }),

/***/ "./src/scripts/modules/Posts.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/Posts.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Posts = _ref => {
  let {
    siteUrl,
    page,
    setPage
  } = _ref;
  const [postsArray, setPostsArray] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(['false']);
  const [clickedPost, setClickedPost] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const getPosts = () => {
    let temp_posts = [];
    fetch(`${siteUrl}/wp-json/wp/v2/posts`).then(response => response.json()).then(data => {
      for (let post of data) {
        temp_posts.push(post);
      }

      console.log(`Количество записей: ${temp_posts.length}`);
      setPostsArray(temp_posts);
      temp_posts = [];
      setTimeout(() => {
        getPosts();
      }, 5000);
    }).catch(err => {
      console.log('Ошибка в получение постов.');
    });
  };

  if (postsArray[0] == 'false') getPosts();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, [postsArray]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(clickedPost);
  }, [clickedPost]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
    className: "postsContainer"
  }, postsArray.map((item, index) => {
    var _item$title, _item$excerpt, _item$content;

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Post, {
      checkID: `keyPost_${item.id}`,
      title: item === null || item === void 0 ? void 0 : (_item$title = item.title) === null || _item$title === void 0 ? void 0 : _item$title.rendered,
      description: item === null || item === void 0 ? void 0 : (_item$excerpt = item.excerpt) === null || _item$excerpt === void 0 ? void 0 : _item$excerpt.rendered,
      content: item === null || item === void 0 ? void 0 : (_item$content = item.content) === null || _item$content === void 0 ? void 0 : _item$content.rendered,
      clickedPost: clickedPost,
      setClickedPost: setClickedPost
    });
  })));
};

const Post = _ref2 => {
  let {
    clickedPost,
    setClickedPost,
    checkID,
    description,
    title,
    content
  } = _ref2;
  console.log(checkID);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    console.log(clickedPost);
  }, [clickedPost]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("article", {
    className: `postBlock ${clickedPost === checkID ? 'clickedPost' : ''}`,
    onClick: evt => setClickedPost(checkID)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, title), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dangerouslySetInnerHTML: {
      __html: clickedPost !== checkID ? description : content
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ }),

/***/ "./src/scripts/modules/SideMenu.js":
/*!*****************************************!*\
  !*** ./src/scripts/modules/SideMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Worker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Worker.js */ "./src/scripts/modules/Worker.js");




function SideMenu(_ref) {
  let {
    siteUrl
  } = _ref;
  const [sideMenu, setSideMenu] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    'title': 'menu'
  }]);
  if (sideMenu[0].title == 'menu') Object(_Worker_js__WEBPACK_IMPORTED_MODULE_2__["default"])(siteUrl, setSideMenu);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("nav", {
    className: "sideMenu"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, sideMenu[0].title != 'menu' ? sideMenu.map((item, index) => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
      key: `sideMenuKey__${index}`
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
      href: item.url
    }, item.title));
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...")));
}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./src/scripts/modules/Worker.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/Worker.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const getMenu = (siteUrl, funcState) => {
  if (typeof funcState === 'function') {
    let temp_array = [];
    fetch(`${siteUrl}/wp-json/wp/v2/menu`).then(response => response.json()).then(data => {
      for (let item of data) {
        temp_array.push(item);
      }

      funcState(temp_array); //Пересмотреть таймер обновления

      setTimeout(() => {
        getMenu();
      }, 5000);
    }).catch(e => console.log(e));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getMenu);

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map