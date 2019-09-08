import React, { Component } from 'react';

import { View, Image, Text, TouchableWithoutFeedback, ScrollView } from "react-native";

import globals from "@/src/styles/globals";

import indexStyleSheet from "./setting_styles";

const _styleSheet = indexStyleSheet;

class Setting extends Component {
    static navigationOptions = {
        title: '设置',
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
                <View style={_styleSheet["setting"]}>
                    <View style={_styleSheet["setting-link"]}>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                            sourceUri: 'https://www.codekid.top/#/pages/webview/about', title: '关于我们'
                        })} style={_styleSheet["index__Navigator"]}>
                            <View style={_styleSheet["setting-link__item"]}>
                                <View style={_styleSheet["setting-link__title"]}>
                                    <Text style={_styleSheet["setting-link__title-text"]}>关于我们</Text>
                                </View>
                                <View style={_styleSheet["setting-link__extra"]}>
                                    <Text style={_styleSheet["setting-link__extra-text"]}>1.0.0</Text>
                                </View>
                                <View style={_styleSheet["setting-link__arrow"]}>
                                    <Image
                                        style={_styleSheet["setting-link__arrow--active"]}
                                        source={require('@/src/assets/images/other/arrow_right.png')}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                            sourceUri: 'https://www.codekid.top/#/pages/webview/agreement_detail', title: '使用协议'
                        })} style={_styleSheet["index__Navigator"]}>
                            <View style={_styleSheet["setting-link__item"]}>
                                <View style={_styleSheet["setting-link__title"]}>
                                    <Text style={_styleSheet["setting-link__title-text"]}>使用协议</Text>
                                </View>

                                <View style={_styleSheet["setting-link__arrow"]}>
                                    <Image
                                        style={_styleSheet["setting-link__arrow--active"]}
                                        source={require('@/src/assets/images/other/arrow_right.png')}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Webview', {
                            sourceUri: 'https://www.codekid.top/#/pages/webview/privacy_detail', title: '隐私政策'
                        })} style={_styleSheet["index__Navigator"]}>
                            <View style={_styleSheet["setting-link__item"]}>
                                <View style={_styleSheet["setting-link__title"]}>
                                    <Text style={_styleSheet["setting-link__title-text"]}>隐私政策</Text>
                                </View>

                                <View style={_styleSheet["setting-link__arrow"]}>
                                    <Image
                                        style={_styleSheet["setting-link__arrow--active"]}
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

export default Setting;