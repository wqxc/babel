"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime-corejs2/helpers/classCallCheck")
);

var _createClass2 = _interopRequireDefault(
  require("@babel/runtime-corejs2/helpers/createClass")
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime-corejs2/helpers/possibleConstructorReturn")
);

var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime-corejs2/helpers/getPrototypeOf")
);

var _inherits2 = _interopRequireDefault(
  require("@babel/runtime-corejs2/helpers/inherits")
);

var _react = _interopRequireDefault(require("react"));

// import * as recast from "recast";
var App =
  /*#__PURE__*/
  (function(_React$Component) {
    (0, _inherits2["default"])(App, _React$Component);

    function App() {
      (0, _classCallCheck2["default"])(this, App);
      return (0, _possibleConstructorReturn2["default"])(
        this,
        (0, _getPrototypeOf2["default"])(App).apply(this, arguments)
      );
    }

    (0, _createClass2["default"])(App, [
      {
        key: "componentDidMount",
        value: function componentDidMount() {
          console.log("123");
        }
      },
      {
        key: "render",
        value: function render() {
          return _react["default"].createElement("div", null, "1233");
        }
      }
    ]);
    return App;
  })(_react["default"].Component);
