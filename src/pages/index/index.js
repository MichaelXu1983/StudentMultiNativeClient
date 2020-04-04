import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';

import {getGlobalData} from '@/src/utils/index';

import httpRequest from '@/src/utils/request';

import globals from '@/src/styles/globals';

import indexStyleSheet from './index_styles';

const _styleSheet = indexStyleSheet;

import {Carousel} from '@ant-design/react-native';

class Index extends Component {
  static navigationOptions = {
    title: '首页',
  };
  state = {
    //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
    // data: ['1'],
    recomList: [],
    guideList: [],
    imgHeight: 176,
    hasNewNotice: false, // 新公告提示红点
    hasNewMessage: false, // 新消息提示红点
  };
  componentDidMount() {
    httpRequest('/api/v1/contents/1/172').then(r => {
      this.setState({
        recomList: r.value,
      });
    });
    httpRequest('/api/v1/contents/1/174').then(r => {
      this.setState({
        guideList: r.value,
      });
    });
    // simulate img loading
    // setTimeout(() => {
    //   this.setState({
    //     data: ['AiyWuByWklrrUDlFignR'],
    //   });
    // }, 100);
  }
  onHorizontalSelectedIndexChange(index) {
    /* tslint:disable: no-console */
    console.log('horizontal change to', index);
  }
  render() {
    const {recomList, guideList} = this.state;
    return (
      //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => {
          console.log('onScroll!');
        }}
        scrollEventThrottle={200}
        style={globals.scrollViewContainer}>
        <View style={_styleSheet.index}>
          <Image
            style={_styleSheet.index__bg}
            source={require('@/src/assets/images/index/index_bg.png')}
          />
          <View style={_styleSheet['index-header']}>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('NoticeList')}
              style={_styleSheet.index__notice}>
              <View>
                <Image
                  style={_styleSheet['index__notice-icon']}
                  source={require('@/src/assets/images/index/notice.png')}
                />
                {this.state.hasNewNotice && (
                  <View style={_styleSheet['index__notice-status']}>
                    <View style={_styleSheet['index__notice-status-border']} />
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate('MessageList')}
              style={_styleSheet.index__message}>
              <View>
                <Image
                  style={_styleSheet['index__message-icon']}
                  source={require('@/src/assets/images/index/crown.png')}
                />
                {this.state.hasNewMessage && (
                  <View style={_styleSheet['index__message-status']}>
                    <View style={_styleSheet['index__message-status-border']} />
                  </View>
                )}
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={_styleSheet['index-card']}>
            <View style={_styleSheet['index-card__username']}>
              <Text
                numberOfLines={1}
                style={_styleSheet['index-card__username-text']}>
                亲爱的小朋友
              </Text>
            </View>
            <TouchableWithoutFeedback
              key="coursesList"
              onPress={() => this.props.navigation.navigate('课程')}
              open-type="switchTab"
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['index-card__button']}>
                <Text style={_styleSheet['index-card__button-text']}>
                  开始学习
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <View style={_styleSheet['index-card__tips']}>
              <Text
                numberOfLines={1}
                style={_styleSheet['index-card__tips-text']}>
                点击【开始学习】，开始你的编程之旅吧
              </Text>
            </View>
            <View style={_styleSheet['index-card__footer']}>
              <View style={_styleSheet['index-card__icon']}>
                <Image
                  style={_styleSheet['index-card__icon-ok']}
                  source={require('@/src/assets/images/index/ok.png')}
                />
                <Text style={_styleSheet['index-card__icon-text']}>思维</Text>
              </View>
              <View style={_styleSheet['index-card__icon']}>
                <Image
                  style={_styleSheet['index-card__icon-ok']}
                  source={require('@/src/assets/images/index/ok.png')}
                />
                <Text style={_styleSheet['index-card__icon-text']}>创新</Text>
              </View>
              <View style={_styleSheet['index-card__icon']}>
                <Image
                  style={_styleSheet['index-card__icon-ok']}
                  source={require('@/src/assets/images/index/ok.png')}
                />
                <Text style={_styleSheet['index-card__icon-text']}>合作</Text>
              </View>
            </View>
          </View>
          <View style={_styleSheet['index-notice']}>
            <View style={_styleSheet.index__maintitle}>
              <Text style={_styleSheet['index__maintitle-text']}>官方推荐</Text>
            </View>

            <Carousel
              style={_styleSheet['index-notice__swiper']}
              dots={false}
              autoplay
              infinite
              autoplayInterval={6000}
              afterChange={this.onHorizontalSelectedIndexChange}>
              {Array.isArray(recomList) &&
                recomList.length !== 0 &&
                recomList.map(item => (
                  <TouchableWithoutFeedback
                    key={item.id}
                    onPress={() =>
                      this.props.navigation.navigate('Webview', {
                        sourceUri: item.source,
                        title: item.title,
                      })
                    }
                    style={_styleSheet['index-notice__swiper-navigator']}>
                    <Image
                      style={_styleSheet['index-notice__swiper-img']}
                      source={{
                        uri: getGlobalData('businessDomain') + item.imageUrl,
                      }}
                    />
                  </TouchableWithoutFeedback>
                ))}
            </Carousel>
          </View>
          <View style={_styleSheet['index-guide']}>
            <View style={_styleSheet.index__maintitle}>
              <Text style={_styleSheet['index__maintitle-text']}>操作指引</Text>
            </View>
            <View style={_styleSheet['index-guide__content']}>
              {Array.isArray(guideList) &&
                guideList.length !== 0 &&
                guideList.map(item => (
                  <TouchableWithoutFeedback
                    key={item.id}
                    onPress={() =>
                      this.props.navigation.navigate('Webview', {
                        sourceUri: item.source,
                        title: item.title,
                      })
                    }
                    style={_styleSheet.index__Navigator}>
                    <Image
                      style={_styleSheet['index-guide__bg']}
                      source={{
                        uri: getGlobalData('businessDomain') + item.imageUrl,
                      }}
                    />
                  </TouchableWithoutFeedback>
                ))}
              {/* <TouchableWithoutFeedback
                key="attentionDetail"
                onPress={() =>
                  this.props.navigation.navigate('Webview', {
                    sourceUri:
                      'https://www.codekid.top/#/pages/webview/attention_detail',
                    title: '上课须知',
                  })
                }
                style={_styleSheet.index__Navigator}>
                <Image
                  style={_styleSheet['index-guide__bg-left']}
                  source={require('@/src/assets/images/index/guide_bg_left.png')}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() =>
                  this.props.navigation.navigate('Webview', {
                    sourceUri:
                      'https://www.codekid.top/#/pages/webview/guide_detail',
                    title: '上课指南',
                  })
                }
                style={_styleSheet.index__Navigator}>
                <Image
                  style={_styleSheet['index-guide__bg-right']}
                  source={require('@/src/assets/images/index/guide_bg_right.png')}
                />
              </TouchableWithoutFeedback>*/}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Index;
