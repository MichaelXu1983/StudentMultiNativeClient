import React, { Component } from 'react';

import { View, Image, Text, TouchableWithoutFeedback, ScrollView } from "react-native";

import globals from "@/src/styles/globals";

import indexStyleSheet from "./help_list_styles";

const _styleSheet = indexStyleSheet;

class HelpList extends Component {
    static navigationOptions = {
        title: '帮助中心',
    };
    componentDidMount() {

    }

    render() {
        return ( //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
            <ScrollView
                automaticallyAdjustContentInsets={false}
                onScroll={() => { console.log('onScroll!'); }}
                scrollEventThrottle={200}
                style={globals["scrollViewContainer"]}>
                <View style={_styleSheet["help"]}>

                    <View style={_styleSheet["help-link__item"]}>
                        <View style={_styleSheet["help-link__icon"]}>
                            <Image
                                style={_styleSheet["help-link__icon-help"]}
                                source={require('@/src/assets/images/help/help_guide.png')}
                            />
                        </View>
                        <View style={_styleSheet["help-link__ask"]}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                                sourceUri: 'https://www.codekid.top/#/pages/webview/attention', title: '上课须知'
                            })} style={_styleSheet["index__Navigator"]}>
                                <View style={_styleSheet["help-link__title"]}>
                                    <Text style={_styleSheet["help-link__title-text"]}>
                                        上课须知 ？
</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                                sourceUri: 'https://www.codekid.top/#/pages/webview/guide', title: '上课指南'
                            })} style={_styleSheet["index__Navigator"]}>
                                <View style={[_styleSheet["help-link__title"], _styleSheet["help-link__title-noborder"]]}>
                                    <Text style={_styleSheet["help-link__title-text"]}>上课指南 ？</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={_styleSheet["help-link__separator"]} />
                    <View style={_styleSheet["help-link__item"]}>
                        <View style={_styleSheet["help-link__icon"]}>
                            <Image
                                style={_styleSheet["help-link__icon-help"]}
                                source={require('@/src/assets/images/help/help_update.png')}
                            />
                        </View>
                        <View style={_styleSheet["help-link__ask"]}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                                sourceUri: 'https://www.codekid.top/#/pages/webview/update_time', title: '我们多长时间更新一次课程'
                            })} style={_styleSheet["index__Navigator"]}>
                                <View style={_styleSheet["help-link__title"]}>
                                    <Text style={_styleSheet["help-link__title-text"]}>
                                        我们多长时间更新一次课程 ？
</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                                sourceUri: 'https://www.codekid.top/#/pages/webview/update_notice', title: '如何收到课程更新通知'
                            })} style={_styleSheet["index__Navigator"]}>
                                <View style={_styleSheet["help-link__title"]}>
                                    <Text style={_styleSheet["help-link__title-text"]}>
                                        如何收到课程更新通知 ？
</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HelpList;