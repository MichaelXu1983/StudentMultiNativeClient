
import { StyleSheet } from 'react-native'

import { scalePx2dp } from '@/src/utils/index'

export default StyleSheet.create({
    "courses": {
        flex:1,
        "width": "100%",
        "minHeight": "100%"
    },
    "courses-header": {
        "position": "relative",
        "width": "100%",
        "height": scalePx2dp(240)
    },
    "courses__bg": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 79,
        "width": "100%",
        "height": "100%"
    },
    "courses-header__intro": {
        "position": "relative",
        "zIndex": 99,
        "paddingTop": scalePx2dp(10),
        "paddingRight": scalePx2dp(30),
        "paddingBottom": 0,
        "paddingLeft": scalePx2dp(30)
    },
    "courses-header__intro-subtitle": {
        "position": "relative",
        "zIndex": 99,
        "paddingTop": scalePx2dp(10),
        "paddingRight": scalePx2dp(30),
        "paddingBottom": 0,
        "paddingLeft": scalePx2dp(30),
        "maxHeight": scalePx2dp(120),
        "overflow": "hidden"
    },
    "courses-header__intro-maintitle": {
        "position": "relative",
        "zIndex": 99,
        "paddingTop": scalePx2dp(25),
        "paddingRight": scalePx2dp(30),
        "paddingBottom": 0,
        "paddingLeft": scalePx2dp(30)
    },
    "courses-header__maintitle-text": {
        "color": "#fff",
        "fontSize": scalePx2dp(18),
        "letterSpacing": scalePx2dp(1)
    },
    "courses-header__subtitle-text": {
        "color": "#fff",
        "fontSize": scalePx2dp(14),
        "lineHeight": scalePx2dp(23.5),
        "letterSpacing": scalePx2dp(1)
    },
    "courses-item__container": {
        "position": "relative",
        "zIndex": 99,
        "width": "90%",
        "minHeight": "100%",
        "marginTop": scalePx2dp(-50),
        "marginRight": "auto",
        "marginBottom": scalePx2dp(-50),
        "marginLeft": "auto",
        "paddingBottom": scalePx2dp(50)
    },
    "courses-item": {
        "marginBottom": scalePx2dp(25),
        "paddingBottom": scalePx2dp(15),
        "backgroundColor": "#f7f7f9",
        "borderRadius": scalePx2dp(10)
    },
    "courses-item__thumb": {
        "backgroundColor": "#70449e",
        "borderTopLeftRadius": scalePx2dp(10),
        "borderTopRightRadius": scalePx2dp(10)
    },
    "courses-item__thumb-img": {
        "width": "100%",
        "height": scalePx2dp(168),
        "borderTopLeftRadius": scalePx2dp(10),
        "borderTopRightRadius": scalePx2dp(10)
    },
    "courses-item__intro": {
        "paddingTop": scalePx2dp(10),
        "paddingRight": scalePx2dp(20),
        "paddingBottom": 0,
        "paddingLeft": scalePx2dp(20),
    },
    "courses-item__maintitle": {
        "paddingTop": scalePx2dp(20),
        "paddingLeft": scalePx2dp(20),
        "paddingRight": scalePx2dp(20),
    },
    "courses-item__maintitle-text": {
        "color": "#70449e",
        "fontSize": scalePx2dp(18)
    },
    "courses-item__subtitle": {
        "paddingTop": scalePx2dp(10),
        "paddingLeft": scalePx2dp(20),
        "paddingRight": scalePx2dp(20),
        "color": "#444",
        "fontSize": scalePx2dp(15)
    },
    "courses-item__subtitle-text": {
        "color": "#444",
        "fontSize": scalePx2dp(15),
        "lineHeight":scalePx2dp(24)
    }
})
