// 'use strict';

// var React = require('react-native');
// var {
//     StyleSheet,
//     PixelRatio,
//     Platform
// } = React;

import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native'

// 一般app 只有竖屏模式，所以可以只获取一次 width
const deviceWidthDp = Dimensions.get('window').width
const uiWidthPx = 375

function scalePx2dp(uiElementPx) {
    return uiElementPx * deviceWidthDp / uiWidthPx
}

const globals = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        backgroundColor: '#fdfdfd',
    },
    bold: {
        fontWeight: 'bold',
    },

    iconStyle: {
        width: Platform.OS === 'ios' ? 30 : 25,
        height: Platform.OS === 'ios' ? 30 : 25,
    },

    tc: {
        textAlign: 'center',
    },
    tl: {
        textAlign: 'left',
    },
    tr: {
        textAlign: 'right',
    },
    center: {
        justifyContent: 'center',/*垂直居中*/
        alignItems: 'center',/*水平居中*/
    },
    lineLeftRight: {
        borderLeftWidth: 1 / (PixelRatio.get()),
        borderRightWidth: 1 / (PixelRatio.get()),
        borderColor: '#ddd',
    },
    lineBottom: {
        borderBottomWidth: 1 / (PixelRatio.get()),
        borderColor: '#ddd',
    },
    lineTop: {
        borderTopWidth: 1 / (PixelRatio.get()),
        borderColor: '#ddd',
    },
    tabBarIcon: {
        width: 26,
        height: 26,
    },
    scrollViewContainer: {
        flex: 1
    },
    "global-empty": {
        "width": scalePx2dp(150),
        "marginTop": scalePx2dp(60),
        "marginRight": "auto",
        "marginBottom": scalePx2dp(60),
        "marginLeft": "auto"
    },
    "global-empty__pic": {
        "width": scalePx2dp(150),
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": scalePx2dp(10),
        "marginLeft": "auto"
    },
    "global-empty__intro": {
        "width": scalePx2dp(150),
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": scalePx2dp(10),
        "marginLeft": "auto"
    },
    "global-empty__pic-img": {
        "width": scalePx2dp(150),
        "height": scalePx2dp(150)
    },
    "global-empty__text": {
        "fontSize": scalePx2dp(14),
        "color": "#777",
        "textAlign": "center"
    },
    "am-button-primary": {
        "marginTop": scalePx2dp(30),
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "backgroundColor": "#6b40bd",
        "borderColor": "transparent"
    },
    "am-button-ghost": {
        "marginTop": scalePx2dp(30),
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "borderWidth": scalePx2dp(1),
        "borderStyle": "solid",
        "borderColor": "#aa66a2"
    },
    "am-button-primary-text": {
        "letterSpacing": scalePx2dp(2),
        "color": "#fff"
    },
    "am-button-ghost-text": {
        "letterSpacing": scalePx2dp(2),
        "color": "#aa66a2"
    },
    "am-buttons": {
        "marginTop": scalePx2dp(30),
        "marginRight": "5%",
        "marginBottom": scalePx2dp(30),
        "marginLeft": "5%"
    },
    "am-button-disabled": {
        "backgroundColor": "#afafaf",
        "borderColor": "transparent",
        "marginTop": scalePx2dp(30),
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
});

module.exports = globals;