
import { StyleSheet } from 'react-native'

import { scalePx2dp } from '@/src/utils/index'

export default StyleSheet.create({
    "help-link__item": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "flexDirection": "row",
        "width": "100%",
        "backgroundColor": "#fff"
    },
    "help-link__icon": {
        "flexGrow": 1,
        "flexShrink": 1,
        "flexBasis": 0,
        "width": "100%"
    },
    "help-link__icon-help": {
        "width": scalePx2dp(70),
        "height": scalePx2dp(70),
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "help-link__ask": {
        "flexGrow": 3,
        "flexShrink": 1,
        "flexBasis": 0,
        "width": "100%"
    },
    "help-link__title": {
        "width": "auto",
        "paddingLeft": scalePx2dp(15),
        "borderWidth": scalePx2dp(1),
        "borderStyle": "solid",
        "borderColor": "#f7f7f9",
    },
    "help": {
        "width": "100%",
        "minHeight": "100%",
        "backgroundColor": "#f7f7f9"
    },
    "help-link__title-text": {
        "fontSize": scalePx2dp(14),
        "color": "#666",
        "lineHeight": scalePx2dp(60)
    },
    "help-link__arrow": {
        "width": scalePx2dp(25)
    },
    "help-link__arrow--active": {
        "width": scalePx2dp(25),
        "height": scalePx2dp(25)
    },
    "help-link__separator": {
        "height": scalePx2dp(5),
        "backgroundColor": "#f7f7f9"
    },
    "help-link__subtitle": {
        "paddingTop": scalePx2dp(5),
        "paddingRight": scalePx2dp(10),
        "paddingBottom": scalePx2dp(5),
        "paddingLeft": scalePx2dp(10)
    },
    "help-link__subtitle--text": {
        "fontSize": scalePx2dp(13),
        "color": "#666"
    }
})
