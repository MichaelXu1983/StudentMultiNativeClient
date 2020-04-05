import {StyleSheet, Platform} from 'react-native';

import {scalePx2dp} from '@/src/utils/index';

export default StyleSheet.create({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : 0,
  },
  ContainerStyle: {
    paddingTop: scalePx2dp(10),
    paddingBottom: scalePx2dp(10),
    paddingLeft: scalePx2dp(20),
    paddingRight: scalePx2dp(20),
    marginTop: Platform.OS === 'ios' ? 0 : 0,
  },
  ActivityIndicatorStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
