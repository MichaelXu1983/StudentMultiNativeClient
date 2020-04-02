import {StyleSheet} from 'react-native';

import {scalePx2dp} from '@/src/utils/index';

export default StyleSheet.create({
  'notice-item__container': {
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
  'notice-item__text': {
    color: '#777',
    fontSize: scalePx2dp(13),
    lineHeight: scalePx2dp(22),
  },
  'notice-item': {
    position: 'relative',
    marginBottom: scalePx2dp(25),
    backgroundColor: '#f3f3f3',
    paddingTop: scalePx2dp(15),
    paddingRight: scalePx2dp(15),
    paddingBottom: scalePx2dp(5),
    paddingLeft: scalePx2dp(15),
    borderRadius: scalePx2dp(10),
  },
  'notice-item__intro-container': {
    // flexDirection: 'row',
  },
  'notice-item__intro': {
    // paddingLeft: scalePx2dp(10),
  },
  'notice-item__thumb': {
    marginTop: scalePx2dp(10),
  },
  'notice-item__maintitle': {
    // flexGrow: 1,
    // flexShrink: 1,
    // flexBasis: 0,
    overflow: 'hidden',
  },
  'notice-item__maintitle-text': {
    color: '#70449e',
    fontSize: scalePx2dp(17),
    lineHeight: scalePx2dp(25),
  },
  'notice-item__subtitle': {
    color: '#444',
    fontSize: scalePx2dp(15),
  },
  notice: {
    width: '100%',
    minHeight: '100%',
  },
  'notice-item__link-border': {
    width: '100%',
    height: 0,
    borderWidth: scalePx2dp(0.6),
    borderColor: '#cecece',
    borderStyle: 'dashed',
    borderRadius: scalePx2dp(0.1),
  },
  'notice-item__link': {
    position: 'relative',
    height: scalePx2dp(34),
    lineHeight: scalePx2dp(34),
    paddingTop: scalePx2dp(5),
  },
  'notice-item__link-left': {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 89,
    height: '100%',
  },
  'notice-item__link-right': {
    position: 'absolute',
    right: 0,
    top: '50%',
    width: scalePx2dp(15),
    height: scalePx2dp(15),
    marginTop: scalePx2dp(-5),
  },
  'notice-item__link-img': {
    width: scalePx2dp(15),
    height: scalePx2dp(15),
  },
  'notice-item__link-text': {
    color: '#777',
    fontSize: scalePx2dp(13),
    lineHeight: scalePx2dp(34),
  },
  'notice-item__date-text': {
    color: '#9b9b9b',
    fontSize: scalePx2dp(13),
    lineHeight: scalePx2dp(22),
  },
  'notice-item__status': {
    position: 'absolute',
    top: scalePx2dp(7),
    left: scalePx2dp(7),
    zIndex: 89,
    width: scalePx2dp(10),
    height: scalePx2dp(10),
    backgroundColor: '#f64272',
    borderRadius: scalePx2dp(5),
  },
  'notice-item__pic': {
    width: '100%',
    height: scalePx2dp(80),
    marginTop: scalePx2dp(10),
    marginRight: 'auto',
    marginBottom: scalePx2dp(10),
    marginLeft: 'auto',
    borderRadius: scalePx2dp(5),
  },
  'notice-item__pic-img': {
    width: '100%',
    height: '100%',
    borderRadius: scalePx2dp(5),
  },
});
