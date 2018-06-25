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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\SarahHerr\\source\\repos\\personal\\QuoteBuilder\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\SarahHerr\\source\\repos\\personal\\QuoteBuilder\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(204);

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            username: "",
            password: ""
        };
        _this.handleCloseModal = _this.handleCloseModal.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleCloseModal",
        value: function handleCloseModal() {}
    }, {
        key: "render",
        value: function render() {
            console.log("LOGIN MODAL");
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    _reactModal2.default,
                    {
                        isOpen: this.props.showLogin,
                        contentLabel: "onRequestClose Example",
                        onRequestClose: this.handleCloseModal,
                        className: "Modal",
                        overlayClassName: "Overlay" },
                    _react2.default.createElement(
                        "p",
                        null,
                        "Modal text!"
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.handleCloseModal },
                        "Close Modal"
                    )
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\SarahHerr\\source\\repos\\personal\\QuoteBuilder\\node_modules\\react-modal\\lib\\index.js'");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h1",
            { className: "title" },
            _react2.default.createElement(
                "strong",
                null,
                props.title
            )
        )
    );
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\SarahHerr\\source\\repos\\personal\\QuoteBuilder\\node_modules\\react\\react.js'");

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Root;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _QuoteBuilder = __webpack_require__(95);

var _QuoteBuilder2 = _interopRequireDefault(_QuoteBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// dev dependencies
function Root() {
  return _react2.default.createElement(_QuoteBuilder2.default, null);
}

// containers

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\SarahHerr\\source\\repos\\personal\\QuoteBuilder\\node_modules\\react-dom\\index.js'");

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(201)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        { className: "final-buttons-container" },
        _react2.default.createElement(
            "button",
            { className: "final-buttons", onClick: props.handleAdd },
            "Add Another Type"
        ),
        _react2.default.createElement(
            "button",
            { className: "final-buttons" },
            "Finish"
        )
    );
};

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _FixtureTypeItem = __webpack_require__(88);

var _FixtureTypeItem2 = _interopRequireDefault(_FixtureTypeItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fixOptions = {
    prefix: [{ value: "SS" }],
    channel: [{ initials: "", value: "" }, { initials: "E", value: "None" }, { initials: "S", value: "Surface Mount" }, { initials: "C", value: "Corner" }],
    lens: [{ initials: "", value: "" }, { initials: "FM", value: "Flat Milky" }, { initials: "FF", value: "Flat Frosted" }],
    intensity: [{ value: "" }, { value: "2.5" }, { value: "5.0" }, { value: "10.0" }],
    cct: [{ initials: "", value: "" }, { initials: "22", value: "2200K" }, { initials: "27", value: "2700K" }, { initials: "30", value: "3000K" }, { initials: "35", value: "3500K" }, { initials: "41", value: "4100K" }, { initials: "55", value: "5500K" }],
    powderCoating: [{ value: "" }, { value: "None" }, { value: "Matte White" }, { value: "Matte Black" }, { value: "Custom" }],
    dimming: [{ value: "" }, { value: "None" }, { value: "0-10" }, { value: "MLV" }, { value: "DMX" }]
};

var FixtureType = function (_React$Component) {
    _inherits(FixtureType, _React$Component);

    function FixtureType() {
        _classCallCheck(this, FixtureType);

        return _possibleConstructorReturn(this, (FixtureType.__proto__ || Object.getPrototypeOf(FixtureType)).apply(this, arguments));
    }

    _createClass(FixtureType, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                { className: "fixture-form" },
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Fixture prefix",
                    keyStr: "",
                    values: fixOptions.prefix }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Channel",
                    keyStr: "channel",
                    values: fixOptions.channel,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.channel ? this.props.fixVals.channel.value : "" }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Lens",
                    keyStr: "lens",
                    values: fixOptions.lens,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.lens ? this.props.fixVals.lens.value : "" }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Intensity",
                    keyStr: "intensity",
                    values: fixOptions.intensity,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.intensity ? this.props.fixVals.intensity.value : "" }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "CCT",
                    keyStr: "cct",
                    values: fixOptions.cct,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.cct ? this.props.fixVals.cct.value : "" }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Powder coating",
                    keyStr: "powderCoating",
                    values: fixOptions.powderCoating,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.powderCoating ? this.props.fixVals.powderCoating.value : "" }),
                _react2.default.createElement(_FixtureTypeItem2.default, {
                    title: "Control / Dimming",
                    keyStr: "dimming",
                    values: fixOptions.dimming,
                    handleSelect: this.props.handleSelect,
                    defaultVal: this.props.fixVals && this.props.fixVals.dimming ? this.props.fixVals.dimming.value : "" })
            );
        }
    }]);

    return FixtureType;
}(_react2.default.Component);

exports.default = FixtureType;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "div",
        { className: "fixture-form-cell" },
        _react2.default.createElement(
            "p",
            { className: "fixture-form-label" },
            props.title,
            ":"
        ),
        _react2.default.createElement(
            "select",
            {
                className: "fixture-form-select",
                onChange: function onChange(e) {
                    return props.handleSelect(props.keyStr, e);
                },
                defaultValue: props.defaultVal },
            props.values.map(function (val) {
                return _react2.default.createElement(
                    "option",
                    { key: val.value },
                    val.initials ? val.initials + " - " + val.value : val.value
                );
            })
        )
    );
};

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        "p",
        { className: "part-number" },
        "Part # ",
        props.partNumber
    );
};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            group: "",
            quantity: 0,
            lengthFt: 0,
            lengthIn: 0,
            trimmable: false,
            symmetrical: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.runWatts = _this.runWatts.bind(_this);
        _this.totalWatts = _this.totalWatts.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleChange",
        value: function handleChange(evt) {
            evt.preventDefault();
            console.log(evt.target.value);
            var stateObj = {};
            stateObj[evt.target.name] = Number(evt.target.value) * 1;
            this.setState(stateObj);
        }
    }, {
        key: "handleKeyDown",
        value: function handleKeyDown(evt, name) {
            var key = evt.key;
            var stateKey = evt.target.name;
            if (key === "ArrowUp" || key === "ArrowDown") {
                var stateObj = {};
                var increment = key === "ArrowUp" ? 1 : this.state[stateKey] <= 0 ? 0 : -1;
                stateObj[stateKey] = Number(this.state[stateKey]) + increment;
                this.setState(stateObj);
            }
        }
    }, {
        key: "runWatts",
        value: function runWatts() {
            var x = this.props.intensity * (this.state.lengthFt + this.state.lengthIn / 12);
            console.log("runwatss", typeof x === "undefined" ? "undefined" : _typeof(x), x);
            return x;
        }
    }, {
        key: "totalWatts",
        value: function totalWatts() {
            var runWatts = this.runWatts();
            var x = runWatts * this.state.quantity;
            console.log("totalWatts()", this.state.quantity, x);
            return x;
        }
    }, {
        key: "render",
        value: function render() {
            console.log("RUN ROW", this.props);
            return _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", { name: "group", className: "channeltbl-body-input",
                        value: this.state.group,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", { name: "quantity", className: "channeltbl-body-input",
                        value: this.state.quantity,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", { name: "lengthFt", className: "channeltbl-body-input",
                        value: this.state.lengthFt,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", {
                        name: "lengthIn",
                        className: "channeltbl-body-input",
                        value: this.state.lengthIn,
                        onChange: this.handleChange,
                        onKeyDown: this.handleKeyDown })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", {
                        name: "runWatts",
                        className: "channeltbl-body-input",
                        value: this.runWatts() })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body" },
                    _react2.default.createElement("input", {
                        name: "totalWatts",
                        className: "channeltbl-body-input",
                        value: this.totalWatts() })
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body channeltbl-toggle" },
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", {
                            name: "timmable",
                            value: this.state.trimmable,
                            type: "checkbox",
                            onChange: this.handleChange })
                    )
                ),
                _react2.default.createElement(
                    "td",
                    { className: "channeltbl-body channeltbl-toggle" },
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", {
                            name: "symmetrical",
                            value: this.state.symmetrical,
                            type: "checkbox",
                            onChange: this.handleChange })
                    )
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _RunRow = __webpack_require__(90);

var _RunRow2 = _interopRequireDefault(_RunRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            rows: [true, true, true]
        };
        _this.handleAddAnother = _this.handleAddAnother.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleAddAnother",
        value: function handleAddAnother() {
            var newRowNumber = this.state.rows.concat([true]);
            this.setState({ rows: newRowNumber });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            console.log("RUN TABLE", this.props);
            return _react2.default.createElement(
                "div",
                { className: "fixtype-container" },
                _react2.default.createElement(
                    "table",
                    { className: "channeltbl" },
                    _react2.default.createElement(
                        "thead",
                        null,
                        _react2.default.createElement(
                            "tr",
                            { className: "channeltbl-header" },
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Group"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Quantity"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Length (feet)"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Length (inches)"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Run Wattage"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Total Wattage"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Field trimmable?"
                            ),
                            _react2.default.createElement(
                                "th",
                                { className: "channeltbl-header-cell" },
                                "Symmetrical?"
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "tbody",
                        null,
                        this.state.rows.map(function (row, idx) {
                            return _react2.default.createElement(_RunRow2.default, { key: idx, intensity: _this2.props.fixture.fixtureVals && _this2.props.fixture.fixtureVals.intensity ? Number(_this2.props.fixture.fixtureVals.intensity.value) : 0 });
                        })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "channeltbl-btn" },
                    _react2.default.createElement(
                        "button",
                        { className: "channeltbl-add-btn", onClick: this.handleAddAnother },
                        "+"
                    )
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Title = __webpack_require__(33);

var _Title2 = _interopRequireDefault(_Title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            name: "",
            company: "",
            jobName: "",
            location: "",
            specifier: "",
            jobType: "",
            something: ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleChange",
        value: function handleChange(evt) {
            evt.preventDefault();
            var tempObj = {};
            tempObj[evt.target.name] = evt.target.value;
            this.setState(tempObj, this.props.sendJobInfo(this.state));
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Title2.default, { title: "DEFINE JOB" }),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Name:"
                    ),
                    _react2.default.createElement("input", { className: "jobinfo-item-input", name: "name", onChange: this.handleChange, value: this.state.name })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Company:"
                    ),
                    _react2.default.createElement("input", { className: "jobinfo-item-input", name: "company", onChange: this.handleChange, value: this.state.company })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Job Name:"
                    ),
                    _react2.default.createElement("input", { className: "jobinfo-item-input", name: "jobName", onChange: this.handleChange, value: this.state.jobName })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Location:"
                    ),
                    _react2.default.createElement("input", { className: "jobinfo-item-input", name: "location", onChange: this.handleChange, value: this.state.location })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Specifier:"
                    ),
                    _react2.default.createElement("input", { className: "jobinfo-item-input", name: "specifier", onChange: this.handleChange, value: this.state.specifier })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "jobinfo-container" },
                    _react2.default.createElement(
                        "p",
                        { className: "jobinfo-item-label" },
                        "Job Type:"
                    ),
                    _react2.default.createElement(
                        "select",
                        { className: "jobinfo-item-input", name: "jobType", onChange: this.handleChange, value: this.state.jobType },
                        _react2.default.createElement("option", null),
                        _react2.default.createElement(
                            "option",
                            null,
                            "Hospitality"
                        ),
                        _react2.default.createElement(
                            "option",
                            null,
                            "Residential"
                        ),
                        _react2.default.createElement(
                            "option",
                            null,
                            "Commercial"
                        )
                    )
                )
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Title = __webpack_require__(33);

var _Title2 = _interopRequireDefault(_Title);

var _RunTable = __webpack_require__(91);

var _RunTable2 = _interopRequireDefault(_RunTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(_class, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Title2.default, { title: "DEFINE RUNS" }),
                _react2.default.createElement(_RunTable2.default, { fixture: this.props.fixture })
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Title = __webpack_require__(33);

var _Title2 = _interopRequireDefault(_Title);

var _FixtureType = __webpack_require__(87);

var _FixtureType2 = _interopRequireDefault(_FixtureType);

var _PartNumber = __webpack_require__(89);

var _PartNumber2 = _interopRequireDefault(_PartNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            partNumber: "",
            fixtureVals: {
                prefix: { value: "SS", initials: "SS" }
            }
        };
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.calculatePartNumber = _this.calculatePartNumber.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleSelect",
        value: function handleSelect(name, evt) {
            var _this2 = this;

            evt.preventDefault();
            console.log(evt.target.value);
            var val = evt.target.value;
            var stateObj = this.state.fixtureVals;
            stateObj[name] = { value: val, initials: val.split(" - ")[0].split(".")[0] };
            this.setState({ fixtureVals: stateObj }, function () {
                _this2.calculatePartNumber();
                _this2.props.sendFixtureInfo(_this2.state);
            });
        }
    }, {
        key: "calculatePartNumber",
        value: function calculatePartNumber() {
            console.log("calculating part number");
            var prefix = this.state.fixtureVals.prefix ? this.state.fixtureVals.prefix.initials : "";
            var channel = this.state.fixtureVals.channel ? this.state.fixtureVals.channel.initials : "";
            var lens = this.state.fixtureVals.lens ? this.state.fixtureVals.lens.initials : "";
            var intensity = this.state.fixtureVals.intensity ? this.state.fixtureVals.intensity.initials : "";
            var cct = this.state.fixtureVals.cct ? this.state.fixtureVals.cct.initials : "";
            var newPartNumber = "" + prefix + channel + lens + intensity + cct;
            console.log("new number:", newPartNumber);
            this.setState({ partNumber: newPartNumber });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(_Title2.default, { title: "DEFINE TYPE" }),
                _react2.default.createElement(_FixtureType2.default, {
                    fixVals: this.state.fixtureVals,
                    handleSelect: this.handleSelect }),
                _react2.default.createElement(_PartNumber2.default, { partNumber: this.state.partNumber })
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _DefineJob = __webpack_require__(92);

var _DefineJob2 = _interopRequireDefault(_DefineJob);

var _DefineType = __webpack_require__(94);

var _DefineType2 = _interopRequireDefault(_DefineType);

var _DefineRuns = __webpack_require__(93);

var _DefineRuns2 = _interopRequireDefault(_DefineRuns);

var _FinalButtons = __webpack_require__(86);

var _FinalButtons2 = _interopRequireDefault(_FinalButtons);

var _LoginModal = __webpack_require__(203);

var _LoginModal2 = _interopRequireDefault(_LoginModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

        _this.state = {
            job: {},
            fixtureType: {
                partNumber: "",
                vals: {},
                runs: []
            },
            showLogin: false
        };
        _this.handleAdd = _this.handleAdd.bind(_this);
        _this.handleJobInfo = _this.handleJobInfo.bind(_this);
        _this.handleFixtureInfo = _this.handleFixtureInfo.bind(_this);
        _this.login = _this.login.bind(_this);
        return _this;
    }

    _createClass(_class, [{
        key: "handleJobInfo",
        value: function handleJobInfo(jobState) {
            this.setState({ job: jobState });
        }
    }, {
        key: "handleFixtureInfo",
        value: function handleFixtureInfo(fixtureState) {
            var fixture = this.state.fixtureType;
            fixture.vals = fixtureState;

            this.setState({ fixtureType: fixture });
        }
    }, {
        key: "handleRunsInfo",
        value: function handleRunsInfo(runState) {
            var fixture = this.state.fixtureType;
            fixture.runs = runState;

            this.setState({ fixtureType: fixture });
        }
    }, {
        key: "handleAdd",
        value: function handleAdd(evt) {
            evt.preventDefault();
            var newFixTypes = this.state.fixtureTypes.map(function (ft) {
                ft.open = false;
                return ft;
            });
            var newType = { id: this.state.fixtureTypes.length, partNumber: "", open: true };
            newFixTypes.push(newType);
            this.setState({ fixtureTypes: newFixTypes });
        }
    }, {
        key: "login",
        value: function login() {
            console.log("LOGIN");
            this.setState({ showLogin: true });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "button",
                    { onClick: this.login },
                    "Login"
                ),
                this.state.showLogin ? _react2.default.createElement(_LoginModal2.default, null) : null,
                _react2.default.createElement(_DefineJob2.default, { sendJobInfo: this.handleJobInfo }),
                _react2.default.createElement(
                    "div",
                    { className: "define-container" },
                    _react2.default.createElement(_DefineType2.default, { sendFixtureInfo: this.handleFixtureInfo }),
                    _react2.default.createElement(_DefineRuns2.default, { fixture: this.state.fixtureType.vals })
                ),
                _react2.default.createElement(_FinalButtons2.default, { handleAdd: this.handleAdd })
            );
        }
    }]);

    return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(85);

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(84);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Root = __webpack_require__(83);

var _Root2 = _interopRequireDefault(_Root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Root2.default, null), document.getElementById('app'));

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(100)(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 5%; }\n\nh1 {\n  text-align: center; }\n\nh2 {\n  text-align: center; }\n\nform {\n  font-size: 1.5em; }\n\nform * {\n  margin: 10px; }\n\n* {\n  color: #555;\n  text-align: center; }\n\np {\n  font-size: 1.2em; }\n\na {\n  font-size: 1.5em; }\n\na:hover {\n  text-decoration: none; }\n\nbody {\n  font-family: Helvetica, sans-serif, sans-serif;\n  background-color: white; }\n\n.define-title {\n  text-decoration: underline; }\n\n.fixture-type-form {\n  width: 100%; }\n\n.part-number {\n  color: grey; }\n\n.channeltbl {\n  width: 100%;\n  table-layout: fixed; }\n\n.channeltbl-header {\n  background-color: #a7a7a791;\n  height: 5vh; }\n\n.channeltbl-header-cell {\n  border: 1px solid #dddddd;\n  text-align: center;\n  font-size: 0.8em; }\n\n.channeltbl-body {\n  width: 30%;\n  height: 4vh;\n  border: 1px solid #dddddd; }\n\n.channeltbl-body-input {\n  width: 100%;\n  height: 100%;\n  border: none; }\n\n.channeltbl-toggle {\n  background-color: white; }\n\n.channeltbl-toggle-icon {\n  margin-top: 0.5em; }\n\n.channeltbl-btn {\n  display: flex;\n  justify-content: flex-end;\n  margin: 0;\n  padding: 0; }\n\n.channeltbl-add-btn {\n  background-color: #dddddd;\n  border: white solid 1px;\n  color: black;\n  width: 12.5%;\n  margin-right: 1px;\n  height: 2em; }\n\n.fixtype-optional {\n  color: grey; }\n\n.collapsed-container {\n  display: flex;\n  background-color: lightgrey;\n  border-radius: 8px;\n  margin: 1%; }\n\n.collapsed-info {\n  display: flex;\n  width: 95%; }\n\n.collapsed-partnum {\n  margin: 5px; }\n\n.collapsed-status {\n  margin: 5px; }\n\n.collapsed-partnum-text {\n  font-size: 1.2em;\n  padding: 5px 8px;\n  margin: 0; }\n\n.collapsed-status-text {\n  font-size: 1.2em;\n  padding: 5px 8px;\n  margin: 0; }\n\n.collapsed-arrows {\n  width: 5%;\n  align-self: center; }\n\n.collapsed-arrows-icon {\n  font-size: 1.7em;\n  margin-right: 30%; }\n\n.header {\n  display: flex; }\n\n.header-left {\n  display: flex;\n  width: 100%; }\n\n.type-container {\n  display: flex; }\n\n.type-label {\n  font-size: 1.5em; }\n\n.type-input {\n  height: 2em;\n  border: none;\n  width: 50%;\n  margin: 0 10px; }\n\n.open-arrows {\n  width: 5%;\n  align-self: center;\n  margin-right: -3%;\n  margin-top: -5%; }\n\n/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 28px; }\n\n/* Hide default HTML checkbox */\n.switch input {\n  display: none; }\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: -5px;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 21px;\n  width: 21px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.fixture-form {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.fixture-form-cell {\n  flex-direction: column;\n  display: flex; }\n\n.fixture-form-label {\n  font-size: 0.8em;\n  margin-left: 0.5em;\n  margin: 0;\n  text-align: left; }\n\n.fixture-form-select {\n  margin-top: 0;\n  margin-left: 0;\n  font-size: 0.8em;\n  background-color: #dddddd;\n  border: 0px; }\n\n.jobinfo-container {\n  display: flex; }\n\n.jobinfo-item-label {\n  width: 10%;\n  text-align: left;\n  margin: 5px 0; }\n\n.jobinfo-item-input {\n  margin: 0.5em;\n  border: 1px solid #dddddd;\n  text-align: left; }\n\n.title {\n  text-align: left; }\n  .title * {\n    font-size: 0.8em;\n    color: #f47f38;\n    font-family: monospace; }\n\n.final-buttons-container {\n  display: flex; }\n\n.final-buttons {\n  margin-right: 0.8em;\n  width: 11em;\n  border: 0;\n  background-color: #dddddd;\n  padding: 3px 0; }\n\n.define-container {\n  border: 1px solid #f47f38;\n  border-radius: 10px;\n  padding: 10px;\n  margin: 10px -10px; }\n\n.part-number {\n  background-color: #a7a7a7;\n  color: white;\n  padding-top: 0.2em;\n  padding-bottom: 0.2em;\n  margin: 0 0.5em; }\n\n.Modal {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n  right: 40px;\n  bottom: 40px;\n  background-color: papayawhip; }\n\n.Overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: black;\n  opacity: 0.5; }\n", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map