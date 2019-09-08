import React, { Component } from 'react';
import {
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
    ScrollView
} from 'react-native';

import globals from "@/src/styles/globals";

import indexStyleSheet from "./notice_list_styles.js";

const _styleSheet = indexStyleSheet;

class NoticeList extends Component {
    static navigationOptions = {
        title: '公告中心',
    };
    state = { //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
        isMesRead: 0
    };
    render() {
        return ( //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
            <ScrollView
                automaticallyAdjustContentInsets={false}
                onScroll={() => { console.log('onScroll!'); }}
                scrollEventThrottle={200}
                style={globals["scrollViewContainer"]}>
                <View style={_styleSheet["notice"]}>
                    <View style={_styleSheet["notice-item__container"]}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                            sourceUri: 'https://www.codekid.top/#/pages/webview/notice_detail', title: '袋小鼠爱编程上线啦'
                        })} style={_styleSheet["index__Navigator"]}>
                            <View style={_styleSheet["notice-item"]}>
                                {this.state.isNoticeRead === 0 && <View style={_styleSheet["notice-item__status"]}></View>}
                                <View style={_styleSheet["notice-item__intro-container"]}>
                                    <View style={_styleSheet["notice-item__maintitle"]}>
                                        <Text style={_styleSheet["notice-item__maintitle-text"]}>袋小鼠爱编程上线啦</Text>
                                    </View>
                                    <View style={_styleSheet["notice-item__intro"]}>
                                        <Text style={_styleSheet["notice-item__date-text"]}>2019-08-11 09:30</Text>
                                    </View>
                                </View>
                                <View style={_styleSheet["notice-item__pic"]}>
                                    <Image
                                        style={_styleSheet["notice-item__pic-img"]}
                                        source={require('@/src/assets/images/tmp/banner.jpg')}
                                    />
                                </View>
                                <View style={_styleSheet["notice-item__link-border"]}></View>
                                <View style={_styleSheet["notice-item__link"]}>
                                    <View style={_styleSheet["notice-item__link-left"]}><Text style={_styleSheet["notice-item__link-text"]}>查看详情</Text></View>

                                    <View style={_styleSheet["notice-item__link-right"]}>
                                        <Image
                                            style={_styleSheet["notice-item__link-img"]}
                                            source={require('@/src/assets/images/other/arrow_right.png')}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default NoticeList;