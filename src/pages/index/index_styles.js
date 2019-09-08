import { StyleSheet } from 'react-native'

import { scalePx2dp } from '@/src/utils/index'


export default StyleSheet.create({
    "index": {
        "width": "100%",
        "minHeight": "100%",
    },
    "index__bg": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 1,
        "width": "100%",
        "height": scalePx2dp(295)
    },
    "index-header": {
        "position": "relative",
        "zIndex": 19,
        "width": "90%",
        flexDirection:'row',
        justifyContent:'space-between',
        "height": scalePx2dp(25),
        "marginTop": scalePx2dp(15),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "index__message": {
        flex:1,
        "width": scalePx2dp(17.5),
        "height": scalePx2dp(23),
    },
    "index__notice": {
        flex:1,
        "width": scalePx2dp(18.5),
        "height": scalePx2dp(23)
    },
    "index__notice-icon":{
      
        "width": scalePx2dp(18.5),
        "height": scalePx2dp(23)
    },
    "index__message-icon":{

        "width": scalePx2dp(17.5),
        "height": scalePx2dp(23),
    },
    "index__notice-status": {
        "position": "absolute",
        "top": scalePx2dp(5),
        "left": 0,
        "zIndex": 109,
        "width": scalePx2dp(10),
        "height": scalePx2dp(10),
        "backgroundColor": "#fff",
        "borderRadius": scalePx2dp(5)
    },
    "index__message-status": {
        "position": "absolute",
        "top": scalePx2dp(5),
        "left": "auto",
        "zIndex": 109,
        "width": scalePx2dp(10),
        "height": scalePx2dp(10),
        "backgroundColor": "#fff",
        "borderRadius": scalePx2dp(5),
        "right": 0
    },
    "index__notice-status-border": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "zIndex": 110,
        "width": scalePx2dp(8),
        "height": scalePx2dp(8),
        "marginTop": scalePx2dp(-4),
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": scalePx2dp(-4),
        "backgroundColor": "#f64272",
        "borderRadius": scalePx2dp(5)
    },
    "index__message-status-border": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "zIndex": 110,
        "width": scalePx2dp(8),
        "height": scalePx2dp(8),
        "marginTop": scalePx2dp(-4),
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": scalePx2dp(-4),
        "backgroundColor": "#f64272",
        "borderRadius": scalePx2dp(5)
    },
    "index-card": {
        "position": "relative",
        "zIndex": 100,
        "width": "90%",
        "height": scalePx2dp(225),
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "borderRadius": scalePx2dp(4),
        "backgroundColor": "#fff",
        "overflow": "hidden"
    },
    "index-card__username": {
        "width": "80%",
        "height": scalePx2dp(70),
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden",
        "textAlign": "center",
    },
    "index-card__button": {
        "width": scalePx2dp(150),
        "height": scalePx2dp(40),
        "lineHeight": scalePx2dp(40),
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": scalePx2dp(5),
        "marginLeft": "auto",
        "backgroundColor": "#6b40bd",
        "borderColor": "transparent",
        "borderRadius": scalePx2dp(30),
    },
    "index-card__tips": {
        "width": "80%",
        "height": scalePx2dp(44),
        "marginTop": scalePx2dp(15),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden",
    },
    "index-card__username-text": {
        "fontWeight": "400",
        "color": "#7d4c9f",
        "lineHeight": scalePx2dp(70),
        "fontSize": scalePx2dp(21),
        "textAlign": "center"
    },
    "index-card__button-text": {
        "lineHeight": scalePx2dp(40),
        "fontWeight": "400",
        "color": "#fff",
        "fontSize": scalePx2dp(15),
        "letterSpacing": scalePx2dp(2),
        "textAlign": "center"

    },
    "index-card__tips-text": {
        "fontWeight": "400",
        "color": "#777",
        "lineHeight": scalePx2dp(44),
        "fontSize": scalePx2dp(14),
        "textAlign": "center"

    },
    "index-card__footer": {
        "position": "absolute",
        "bottom": 0,
        "left": 0,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "row",
        "width": "100%",
        "height": scalePx2dp(30),
        "borderRadius": scalePx2dp(4),
        "backgroundColor": "#b39db72e"
    },
    "index-card__icon": {
        "flexGrow": 1,
        "flexShrink": 1,
        "flexBasis": 0,
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "row",
        "width": "100%",
        "height": "100%"
    },
    "index-card__icon-ok": {
        "width": scalePx2dp(15),
        "height": scalePx2dp(15),
    },
    "index-card__icon-text": {
        "paddingLeft": scalePx2dp(5),
        "fontSize": scalePx2dp(12),
        "color": "#7d4c9f",
        "textAlign": "center"
    },
    "index-notice": {
        "width": "90%",
        "marginTop": scalePx2dp(30),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "overflow": "hidden"
    },
    "index__maintitle": {
        "marginTop": scalePx2dp(10),
        "marginRight": 0,
        "marginBottom": scalePx2dp(10),
        "marginLeft": 0
    },
    "index__maintitle-text": {
        "fontSize": scalePx2dp(15),
        "color": "#444"
    },
    "index-notice__swiper": {
        "width": "100%",
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": scalePx2dp(80),
        "borderRadius": scalePx2dp(4),
        "textAlign": "center"
    },
    "index-notice__swiper-navigator": {
        "width": "100%",
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": scalePx2dp(80),
        "borderRadius": scalePx2dp(4),
        "textAlign": "center"
    },
    "index-notice__swiper-img": {
        "width": "100%",
        "maxWidth": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": scalePx2dp(80),
        "borderRadius": scalePx2dp(5),
    },
    "index-guide": {
        "width": "90%",
        "marginTop": scalePx2dp(10),
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingBottom": scalePx2dp(15),
        "overflow": "hidden",
    },
    "index-guide__content": {
        "position": "relative",
        "width": "100%",
        "height": scalePx2dp(80),
    },
    "index-guide__bg-left": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "zIndex": 19,
        "width": "48%",
        "height": "100%",
        "height": scalePx2dp(80),
        "borderRadius": scalePx2dp(4),
    },
    "index-guide__bg-right": {
        "position": "absolute",
        "left": "auto",
        "top": 0,
        "zIndex": 19,
        "width": "48%",
        "height": "100%",
        "right": 0,
        "height": scalePx2dp(80),
        "borderRadius": scalePx2dp(4),
    },

})