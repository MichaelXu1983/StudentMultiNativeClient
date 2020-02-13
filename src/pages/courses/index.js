import React, {Component} from 'react';

import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {getGlobalData} from '@/src/utils/index';

import httpRequest from '@/src/utils/request';

import globals from '@/src/styles/globals';

import indexStyleSheet from './index_styles';

const _styleSheet = indexStyleSheet;

class Courses extends Component {
  static navigationOptions = {
    title: '课程',
  };
  state = {
    //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
    list: [],
  };
  componentDidMount() {
    httpRequest('/api/v1/contents/1/153').then(r => {
      this.setState({
        list: r.value,
      });
    });
  }
  render() {
    const {list} = this.state;

    return (
      //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
      <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => {
          console.log('onScroll!');
        }}
        scrollEventThrottle={200}
        style={globals.scrollViewContainer}>
        <View style={_styleSheet.courses}>
          <View style={_styleSheet['courses-header']}>
            <Image
              style={_styleSheet.courses__bg}
              source={require('@/src/assets/images/courses/courses_bg.png')}
            />
            <View style={_styleSheet['courses-header__intro-maintitle']}>
              <Text style={_styleSheet['courses-header__maintitle-text']}>
                计算机科学基础
              </Text>
            </View>
            <View style={_styleSheet['courses-header__intro-subtitle']}>
              <Text
                numberOfLines={4}
                style={_styleSheet['courses-header__subtitle-text']}>
                通过这些面向 4-18
                岁年龄段的课程，可以让孩子在动手创造益智游戏过程中，学习到编程思维，这将对他今后的数学、物理、化学等等学科产生积极的影响！
              </Text>
            </View>
          </View>
          <View style={_styleSheet['courses-item__container']}>
            {list.map(item => (
              <TouchableWithoutFeedback
                key={item.id}
                onPress={() =>
                  this.props.navigation.navigate('Webview', {
                    sourceUri: item.source,
                    title: item.title,
                  })
                }
                style={_styleSheet.index__Navigator}>
                <View style={_styleSheet['courses-item']}>
                  <View style={_styleSheet['courses-item__thumb']}>
                    <View style={_styleSheet['courses-item__thumb-loading']} />
                    <Image
                      style={_styleSheet['courses-item__thumb-img']}
                      source={{
                        uri: getGlobalData('businessDomain') + item.imageUrl,
                      }}
                    />
                  </View>
                  <View style={_styleSheet['courses-item__maintitle']}>
                    <Text style={_styleSheet['courses-item__maintitle-text']}>
                      {item.title}
                      <Text style={_styleSheet['courses-item__subscript']}>
                        &nbsp;&nbsp;&nbsp;{item.subTitle}
                      </Text>
                    </Text>
                  </View>
                  <View style={_styleSheet['courses-item__subtitle']}>
                    <Text style={_styleSheet['courses-item__subtitle-text']}>
                      {item.summary}
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}

            {/* <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate('Webview', {
                  sourceUri:
                    'https://studio.codekid.top/s/course2/stage/1/puzzle/2',
                  title: '课程 2',
                })
              }
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['courses-item']}>
                <View style={_styleSheet['courses-item__thumb']}>
                  <View style={_styleSheet['courses-item__thumb-loading']} />
                  <Image
                    style={_styleSheet['courses-item__thumb-img']}
                    source={{
                      uri:
                        'https://studio.codekid.top/shared/images/courses/logo_tall_course2.jpg',
                    }}
                  />
                </View>
                <View style={_styleSheet['courses-item__maintitle']}>
                  <Text style={_styleSheet['courses-item__maintitle-text']}>
                    课程 2
                    <Text style={_styleSheet['courses-item__subscript']}>
                      （6岁以上）
                    </Text>
                  </Text>
                </View>
                <View style={_styleSheet['courses-item__subtitle']}>
                  <Text style={_styleSheet['courses-item__subtitle-text']}>
                    为可以阅读的学生准备的计算机科学简介
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate('Webview', {
                  sourceUri:
                    'https://studio.codekid.top/s/course3/stage/1/puzzle/2',
                  title: '课程 3',
                })
              }
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['courses-item']}>
                <View style={_styleSheet['courses-item__thumb']}>
                  <View style={_styleSheet['courses-item__thumb-loading']} />
                  <Image
                    style={_styleSheet['courses-item__thumb-img']}
                    source={{
                      uri:
                        'https://studio.codekid.top/shared/images/courses/logo_tall_course3.jpg',
                    }}
                  />
                </View>
                <View style={_styleSheet['courses-item__maintitle']}>
                  <Text style={_styleSheet['courses-item__maintitle-text']}>
                    课程 3
                    <Text style={_styleSheet['courses-item__subscript']}>
                      （8-18岁）
                    </Text>
                  </Text>
                </View>
                <View style={_styleSheet['courses-item__subtitle']}>
                  <Text style={_styleSheet['courses-item__subtitle-text']}>
                    在创建游戏和交互的故事时，更深入的学习编程，这是课程2的延续
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() =>
                this.props.navigation.navigate('Webview', {
                  sourceUri:
                    'https://studio.codekid.top/s/course3/stage/19/puzzle/2',
                  title: '课程 4',
                })
              }
              style={_styleSheet.index__Navigator}>
              <View style={_styleSheet['courses-item']}>
                <View style={_styleSheet['courses-item__thumb']}>
                  <View style={_styleSheet['courses-item__thumb-loading']} />
                  <Image
                    style={_styleSheet['courses-item__thumb-img']}
                    source={{
                      uri:
                        'https://studio.codekid.top/shared/images/courses/logo_tall_course4.jpg',
                    }}
                  />
                </View>
                <View style={_styleSheet['courses-item__maintitle']}>
                  <Text style={_styleSheet['courses-item__maintitle-text']}>
                    课程 4
                    <Text style={_styleSheet['courses-item__subscript']}>
                      （10-18岁）
                    </Text>
                  </Text>
                </View>
                <View style={_styleSheet['courses-item__subtitle']}>
                  <Text style={_styleSheet['courses-item__subtitle-text']}>
                    通过计数循环和带有参数的函数等新概念来建立更复杂的程序，这是课程3的后续
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Courses;
