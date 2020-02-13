import {Dimensions} from 'react-native';

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width;
const uiWidthPx = 375;

function scalePx2dp(uiElementPx) {
  return (uiElementPx * deviceWidthDp) / uiWidthPx;
}
const globalData = {};

function setGlobalData(key, val) {
  globalData[key] = val;
}

function getGlobalData(key) {
  return globalData[key];
}

setGlobalData('businessDomain', 'https://www.tdreamer.com');

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return true;
}

export {scalePx2dp, setGlobalData, getGlobalData, isEmptyObject};
