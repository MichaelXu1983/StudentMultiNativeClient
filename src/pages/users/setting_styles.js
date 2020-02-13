import {StyleSheet} from 'react-native';

import {scalePx2dp} from '@/src/utils/index';

export default StyleSheet.create({
  setting: {
    width: '100%',
    minHeight: '100%',
  },
  'setting-link': {
    width: '100%',
    paddingTop: scalePx2dp(20),
    paddingRight: 0,
    paddingBottom: scalePx2dp(20),
    paddingLeft: 0,
  },
  'setting-link__extra--help': {
    width: scalePx2dp(30),
    height: scalePx2dp(30),
  },
  'setting-link__item': {
    position: 'relative',
    overflow: 'hidden',
    width: '90%',
    marginTop: scalePx2dp(20),
    marginRight: 'auto',
    marginBottom: 0,
    marginLeft: 'auto',
    height: scalePx2dp(70),
    borderRadius: scalePx2dp(8),
    backgroundColor: '#f7f7f9',
  },
  'setting-link__extra': {
    position: 'absolute',
    right: scalePx2dp(45),
    top: 0,
    width: '30%',
  },
  'setting-link__extra-text': {
    fontSize: scalePx2dp(15),
    color: '#ccc',
    lineHeight: scalePx2dp(70),
    textAlign: 'right',
  },

  'setting-link__title': {
    position: 'absolute',
    left: scalePx2dp(20),
    top: 0,
    zIndex: 99,
    width: '90%',
    height: '100%',
  },
  'setting-link__title-text': {
    position: 'absolute',
    top: 0,
    fontSize: scalePx2dp(17),
    color: '#2a2a30',
    height: scalePx2dp(70),
    lineHeight: scalePx2dp(70),
  },
  'setting-link__arrow': {
    position: 'absolute',
    right: scalePx2dp(10),
    top: scalePx2dp(21.5),
    width: scalePx2dp(25),
  },
  'setting-link__arrow--active': {
    width: scalePx2dp(25),
    height: scalePx2dp(25),
  },
  'setting-link__title-chart-text': {
    width: '100%',
    fontSize: scalePx2dp(17),
    color: '#2a2a30',
    lineHeight: scalePx2dp(70),
    paddingRight: scalePx2dp(10),
  },
});
