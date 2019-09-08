const path = require('path');
const fs = require('fs');
// for 1.x
// const defaultVars = require('antd-mobile/lib/style/themes/default');
// for 2.x
const defaultVars = require('@ant-design/react-native/lib/style/themes/default');
const customVars = require('../../styles/theme');
// for 1.x
// const themePath = path.resolve(require.resolve('antd-mobile'), '../style/themes/default.js');
// for 2.x
const themePath = path.resolve(require.resolve('@ant-design/react-native'), '../style/themes/default.js');
const themeVars = Object.assign({}, defaultVars, customVars);

if (fs.statSync(themePath).isFile()) {
  fs.writeFileSync(
    themePath,
    "'use strict';Object.defineProperty(exports, '__esModule', {value: true});var brandPrimary = '#000'; var brandPrimaryTap = '#6b40bd';exports['default'] = " + JSON.stringify(themeVars) + " \n module.exports = exports['default'];"
  );
}