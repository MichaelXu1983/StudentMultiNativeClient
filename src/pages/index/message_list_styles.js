import {StyleSheet} from 'react-native';

import {scalePx2dp} from '@/src/utils/index';

export default StyleSheet.create({
  message: {
    width: '100%',
    minHeight: '100%',
  },
  'message-item__container': {
    position: 'relative',
    zIndex: 99,
    width: '90%',
    minHeight: '100%',
    marginTop: 0,
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    paddingTop: scalePx2dp(25),
    paddingRight: 0,
    paddingBottom: scalePx2dp(25),
    paddingLeft: 0,
  },
  'message-item': {
    position: 'relative',
    marginBottom: scalePx2dp(25),
    backgroundColor: '#f3f3f3',
    paddingTop: scalePx2dp(15),
    paddingRight: scalePx2dp(15),
    paddingBottom: scalePx2dp(15),
    paddingLeft: scalePx2dp(15),
    borderRadius: scalePx2dp(10),
  },
  'message-item__status': {
    position: 'absolute',
    top: scalePx2dp(7),
    left: scalePx2dp(7),
    zIndex: 89,
    width: scalePx2dp(10),
    height: scalePx2dp(10),
    backgroundColor: '#f64272',
    borderRadius: scalePx2dp(5),
  },
  'message-item__intro-container': {
    display: 'flex',
    flexDirection: 'row',
  },
  'message-item__intro': {
    lineHeight: scalePx2dp(19),
    paddingLeft: scalePx2dp(10),
  },
  'message-item__thumb': {
    marginTop: scalePx2dp(10),
    lineHeight: scalePx2dp(20),
  },
  'message-item__intro-maintitle': {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    overflow: 'hidden',
    lineHeight: scalePx2dp(25),
  },
  'message-item__maintitle': {
    color: '#70449e',
    fontSize: scalePx2dp(17),
    lineHeight: scalePx2dp(25),
  },
  'message-item__subtitle': {
    color: '#444',
    fontSize: scalePx2dp(15),
  },
  'message-item__text': {
    color: '#777',
    fontSize: scalePx2dp(13),
    lineHeight: scalePx2dp(22),
  },
  'message-item__date-text': {
    color: '#9b9b9b',
    fontSize: scalePx2dp(13),
    lineHeight: scalePx2dp(22),
  },
});
