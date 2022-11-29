/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Card/index.js":
/*!***************************!*\
  !*** ./src/Card/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const Card = props => {
  const {
    children,
    title,
    icon,
    fullWidth
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `card ${fullWidth ? 'fullWidth' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-header"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dashicon, {
    className: "icon",
    icon: icon
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "title"
  }, title)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-content"
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/Header/index.js":
/*!*****************************!*\
  !*** ./src/Header/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const Header = props => {
  const {
    page,
    pages,
    setPage
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Deploy github', _package_json__WEBPACK_IMPORTED_MODULE_1__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "version"
  }, "v", _package_json__WEBPACK_IMPORTED_MODULE_1__.version), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Dashicon, {
    className: "icon",
    icon: "admin-tools"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "navigation"
  }, pages.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: `${page === index ? 'activ' : ''}`,
    key: index,
    onClick: () => setPage(index)
  }, item.name)))));
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/Navigation/index.js":
/*!*********************************!*\
  !*** ./src/Navigation/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const Navigation = props => {
  const {
    page,
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `panel ${page === index ? "activ" : ""}`
  }, item)));
};
/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/Pages/Help/index.js":
/*!*********************************!*\
  !*** ./src/Pages/Help/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Card */ "./src/Card/index.js");





const PageHelp = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Помощь', _package_json__WEBPACK_IMPORTED_MODULE_3__.name),
    icon: "info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Остались вопросы? Пожалуйста, ознакомьтесь с нашей полной документацией для получения подробной
					информации о том, как использовать плагин. Мы ответим на ваши вопросы.`, _package_json__WEBPACK_IMPORTED_MODULE_3__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    href: "https://github.com/UrijHoruzij/wp-deploy",
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Перейти к документации`, _package_json__WEBPACK_IMPORTED_MODULE_3__.name))));
};
/* harmony default export */ __webpack_exports__["default"] = (PageHelp);

/***/ }),

/***/ "./src/Pages/Settings/index.js":
/*!*************************************!*\
  !*** ./src/Pages/Settings/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

const {
  useState,
  useEffect
} = wp.element;




const PageSettings = props => {
  const {
    noticeShow
  } = props;
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState({});
  const [save, setSave] = useState(false);
  const updateSettings = async () => {
    if (!save) {
      setSave(true);
      let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
        path: '/wp/v2/wp-deploy/set-settings',
        method: 'POST',
        data: {
          event: settings.event,
          user: settings.user,
          repos: settings.repos,
          token: settings.token
        }
      });
      noticeShow(res.status, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Настройки сохранены', _package_json__WEBPACK_IMPORTED_MODULE_2__.name));
      setSave(false);
    }
  };
  const changeSettings = updatedValue => {
    setSettings({
      ...settings,
      ...updatedValue
    });
  };
  const getSettings = async () => {
    let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: '/wp/v2/wp-deploy/get-settings'
    });
    setSettings(res);
  };
  useEffect(async () => {
    await getSettings();
    setLoading(false);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card settings"
  }, !loading ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Название события', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: settings.event,
    onChange: value => changeSettings({
      event: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Имя пользователя', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: settings.user,
    onChange: value => changeSettings({
      user: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Название репозитория', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: settings.repos,
    onChange: value => changeSettings({
      repos: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "heading"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Токен', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: settings.token,
    onChange: value => changeSettings({
      token: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    isBusy: save,
    onClick: updateSettings,
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Сохранить', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null));
};
/* harmony default export */ __webpack_exports__["default"] = (PageSettings);

/***/ }),

/***/ "./src/Pages/Start/index.js":
/*!**********************************!*\
  !*** ./src/Pages/Start/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../package.json */ "./package.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Card */ "./src/Card/index.js");

const {
  useState
} = wp.element;





const PageStart = props => {
  const {
    noticeShow
  } = props;
  const [deploy, setDeploy] = useState(false);
  const fetchDeploy = async () => {
    if (!deploy) {
      setDeploy(true);
      let res = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_4___default()({
        path: '/wp/v2/wp-deploy/build',
        method: 'POST'
      });
      if (res.status == 'success') {
        noticeShow(res.status, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Сборка запущена', _package_json__WEBPACK_IMPORTED_MODULE_1__.name));
      } else {
        noticeShow(res.status, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Ошибка сборки', _package_json__WEBPACK_IMPORTED_MODULE_1__.name));
      }
      setDeploy(false);
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Готовы начать? Проверьте настройки', _package_json__WEBPACK_IMPORTED_MODULE_1__.name),
    icon: "info"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Нужны еще подробности? Пожалуйста, ознакомьтесь с нашей полной документацией для получения подробной
					информации о том, как использовать плагин.`, _package_json__WEBPACK_IMPORTED_MODULE_1__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    href: "https://github.com/UrijHoruzij/wp-deploy",
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Перейти к документации', _package_json__WEBPACK_IMPORTED_MODULE_1__.name)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Собрать сайт', _package_json__WEBPACK_IMPORTED_MODULE_1__.name),
    icon: "hammer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "card-description"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Пожалуйста, введите в настройках необходимые данные для запуска сборки сайта.', _package_json__WEBPACK_IMPORTED_MODULE_1__.name)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isBusy: deploy,
    onClick: fetchDeploy,
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Собрать сайт', _package_json__WEBPACK_IMPORTED_MODULE_1__.name)))));
};
/* harmony default export */ __webpack_exports__["default"] = (PageStart);

/***/ }),

/***/ "./src/Sidebar/index.js":
/*!******************************!*\
  !*** ./src/Sidebar/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const SidebarSection = props => {
  const {
    title,
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sidebar-section"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, children));
};
const Sidebar = props => {
  const {
    children
  } = props;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    className: "sidebar card"
  }, children);
};
Sidebar.Section = SidebarSection;
/* harmony default export */ __webpack_exports__["default"] = (Sidebar);

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"wp-deploy","version":"1.0.0","description":"","main":"index.js","scripts":{"build":"wp-scripts build","check-engines":"wp-scripts check-engines","check-licenses":"wp-scripts check-licenses","lint:css":"wp-scripts lint-style","lint:js":"wp-scripts lint-js","lint:pkg-json":"wp-scripts lint-pkg-json","start":"wp-scripts start","test:e2e":"wp-scripts test-e2e","test:unit":"wp-scripts test-unit-js","prettier":"prettier ./wp-deploy.php --write"},"author":"Urij Horuzij","license":"MIT","devDependencies":{"@prettier/plugin-php":"^0.19.2","@wordpress/scripts":"^24.5.0","prettier":"^2.7.1"},"dependencies":{"@wordpress/api-fetch":"^6.18.0","@wordpress/components":"^22.0.0","@wordpress/i18n":"^4.21.0"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../package.json */ "./package.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ "./src/Navigation/index.js");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Sidebar */ "./src/Sidebar/index.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./src/Header/index.js");
/* harmony import */ var _Pages_Start__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/Start */ "./src/Pages/Start/index.js");
/* harmony import */ var _Pages_Help__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Pages/Help */ "./src/Pages/Help/index.js");
/* harmony import */ var _Pages_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pages/Settings */ "./src/Pages/Settings/index.js");

const {
  render,
  useState
} = wp.element;









const Main = () => {
  const [notice, setNotice] = useState(null);
  const [noticeMessage, setNoticeMessage] = useState('');
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState([{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Добро пожаловать', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Настройки', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Помощь', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)
  }]);
  const noticeShow = (status, message) => {
    setNotice(status);
    setNoticeMessage(message);
    setTimeout(() => setNotice(false), 5000);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "wp-deploy-dashboard"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pages: pages,
    page: page,
    setPage: setPage
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "main"
  }, notice && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    className: "custom-notice",
    status: notice,
    isDismissible: false
  }, noticeMessage), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-content columns start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    page: page
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Pages_Start__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noticeShow: noticeShow
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Pages_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noticeShow: noticeShow
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Pages_Help__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"].Section, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Сообщество', _package_json__WEBPACK_IMPORTED_MODULE_2__.name)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Делитесь своими мыслями, задавайте вопросы и помогайте друг другу в нашем сообществе! Будьте в курсе
							того, над чем мы работаем.`, _package_json__WEBPACK_IMPORTED_MODULE_2__.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
    href: "https://github.com/UrijHoruzij/wp-deploy"
  }, "Github"))))));
};
render((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Main, null), document.getElementById('wp-deploy-app'));
}();
/******/ })()
;
//# sourceMappingURL=index.js.map