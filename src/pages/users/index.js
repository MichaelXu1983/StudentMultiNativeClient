import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import globals from '@/src/styles/globals';

import indexStyleSheet from './index_styles';

const _styleSheet = indexStyleSheet;

class Users extends Component {
  static navigationOptions = {
    title: '课程',
  };
  componentDidMount() {}

  render() {
    return (
      //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => {
          console.log('onScroll!');
        }}
        scrollEventThrottle={200}
        style={globals.scrollViewContainer}>
        <View style={_styleSheet.users}>
          <View style={_styleSheet['users-header']}>
            <View style={_styleSheet['users-header-bg']}>
              <Image
                style={_styleSheet.users__bg}
                source={require('@/src/assets/images/users/users_bg.png')}
              />
            </View>
            <View style={_styleSheet.users__avatarUrl}>
              <Image
                style={_styleSheet['users__avatarUrl-img']}
                source={require('@/src/assets/images/other/avatar.png')}
              />
            </View>
            <View style={_styleSheet['users-card']}>
              <View style={_styleSheet['users-card__username']}>
                <Text style={_styleSheet['users-card__text-title']}>
                  小朋友
                </Text>
              </View>
            </View>
          </View>
          <View style={_styleSheet['users-link']}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('MessageList')}
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['users-link__item']}>
                <View style={_styleSheet['users-link__icon']}>
                  <Image
                    style={_styleSheet['users-link__icon-help']}
                    source={require('@/src/assets/images/users/icon/crown.png')}
                  />
                </View>
                <View style={_styleSheet['users-link__title']}>
                  <Text style={_styleSheet['users-link__title-text']}>
                    官方推荐
                  </Text>
                </View>
                <View style={_styleSheet['users-link__subtitle']}>
                  <Text style={_styleSheet['users-link__subtitle-text']} />
                </View>
                <View style={_styleSheet['users-link__arrow']}>
                  <Image
                    style={_styleSheet['users-link__arrow--active']}
                    source={require('@/src/assets/images/other/arrow_right.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('NoticeList')}
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['users-link__item']}>
                <View style={_styleSheet['users-link__icon']}>
                  <Image
                    style={_styleSheet['users-link__icon-help']}
                    source={require('@/src/assets/images/users/icon/notice.png')}
                  />
                </View>
                <View style={_styleSheet['users-link__title']}>
                  <Text style={_styleSheet['users-link__title-text']}>
                    公告中心
                  </Text>
                </View>
                <View style={_styleSheet['users-link__subtitle']}>
                  <Text style={_styleSheet['users-link__subtitle-text']} />
                </View>
                <View style={_styleSheet['users-link__arrow']}>
                  <Image
                    style={_styleSheet['users-link__arrow--active']}
                    source={require('@/src/assets/images/other/arrow_right.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              // onPress={() => this.props.navigation.navigate('HelpList')}
              onPress={() =>
                this.props.navigation.navigate('Webview', {
                  sourceUri: 'https://www.codekid.top/#/pages/users/help_list',
                  title: '帮助中心',
                })
              }
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['users-link__item']}>
                <View style={_styleSheet['users-link__icon']}>
                  <Image
                    style={_styleSheet['users-link__icon-help']}
                    source={require('@/src/assets/images/users/icon/help.png')}
                  />
                </View>
                <View style={_styleSheet['users-link__title']}>
                  <Text style={_styleSheet['users-link__title-text']}>
                    帮助中心
                  </Text>
                </View>
                <View style={_styleSheet['users-link__arrow']}>
                  <Image
                    style={_styleSheet['users-link__arrow--active']}
                    source={require('@/src/assets/images/other/arrow_right.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              // onPress={() => this.props.navigation.navigate('Setting')}
              onPress={() =>
                this.props.navigation.navigate('Webview', {
                  sourceUri: 'https://www.codekid.top/#/pages/users/setting',
                  title: '设置',
                })
              }
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['users-link__item']}>
                <View style={_styleSheet['users-link__icon']}>
                  <Image
                    style={_styleSheet['users-link__icon-help']}
                    source={require('@/src/assets/images/users/icon/setting.png')}
                  />
                </View>
                <View style={_styleSheet['users-link__title']}>
                  <Text style={_styleSheet['users-link__title-text']}>
                    设置
                  </Text>
                </View>
                <View style={_styleSheet['users-link__arrow']}>
                  <Image
                    style={_styleSheet['users-link__arrow--active']}
                    source={require('@/src/assets/images/other/arrow_right.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Users;
