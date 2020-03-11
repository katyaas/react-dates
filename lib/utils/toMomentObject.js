"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toMomentObject;

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("../constants");

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? customFormat : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];

  var date = _moment["default"].utc(dateString, dateFormats, true);

  return date.isValid() ? date : null;
}