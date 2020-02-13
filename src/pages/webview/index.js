import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import indexStyleSheet from './index_styles.js';

const _styleSheet = indexStyleSheet;

class Webview extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title'),
    };
  };
  state = {
    //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
  };
  componentDidMount() {
    // alert(this.props.navigation.getParam('title'))
    // navigationOptions = {
    //     title:this.props.navigation.getParam('title')
    // }
  }
  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color="#8151a2"
        size="large"
        style={_styleSheet.ActivityIndicatorStyle}
      />
    );
  }
  render() {
    const {navigation} = this.props;
    const sourceUri = navigation.getParam('sourceUri');
    return (
      //里面只能包含值或表达式，不能有逻辑语句，但可以调用包含逻辑语句的函数表达式
      <WebView
        source={{uri: sourceUri}}
        style={_styleSheet.WebViewStyle}
        onLoadProgress={e => {
          console.log(e.nativeEvent.progress);
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}
      />
    );
  }
}

export default Webview;
