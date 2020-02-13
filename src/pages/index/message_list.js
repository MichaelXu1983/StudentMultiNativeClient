import React, {Component} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import globals from '@/src/styles/globals';

import indexStyleSheet from './message_list_styles.js';

const _styleSheet = indexStyleSheet;

class MessageList extends Component {
  static navigationOptions = {
    title: '消息中心',
  };
  state = {
    //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
    isMesRead: 0,
  };
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
        <View style={_styleSheet.message}>
          <View style={_styleSheet['message-item__container']}>
            <View style={globals['global-empty']}>
              <View style={globals['global-empty__pic']}>
                <Image
                  style={globals['global-empty__pic-img']}
                  source={require('../../assets/images/no_data/message.png')}
                />
              </View>
              <View style={globals['global-empty__intro']}>
                <Text style={globals['global-empty__text']}>暂无消息</Text>
              </View>
            </View>
            {/* <View style={_styleSheet["message-item"]}>
                            {this.state.isMesRead === 0 && <View style={_styleSheet["message-item__status"]}></View>}

                            <View style={_styleSheet["message-item__intro-container"]}>
                                <View style={_styleSheet["message-item__intro-maintitle"]}>
                                    <Text style={_styleSheet["message-item__maintitle"]}>新注册用户畅玩新注册用户畅玩新注册用户畅玩新注册用户畅玩</Text>
                                </View>
                                <View style={_styleSheet["message-item__intro"]}>
                                    <Text style={_styleSheet["message-item__date-text"]}>2019-08-01 09:30</Text>
                                </View>
                            </View>
                            <View style={_styleSheet["message-item__thumb"]}><Text style={_styleSheet["message-item__text"]}>只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩只需三步，注册会员，即可试运营期间畅玩</Text></View>
                        </View> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default MessageList;
