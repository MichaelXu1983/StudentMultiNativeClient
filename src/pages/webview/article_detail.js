import React, {Component} from 'react';
import {Dimensions, ScrollView, ActivityIndicator} from 'react-native';
import HTML from 'react-native-render-html';
import httpRequest from '@/src/utils/request';
import indexStyleSheet from './index_styles.js';

const _styleSheet = indexStyleSheet;

const htmlStyles = {
  tag: {
    img: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

class ArticleDetail extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('title') || '袋小鼠爱编程',
    };
  };
  state = {
    //定义状态机变量，只能使用this.setState改变其值，并且能通过计算得出的，就不要定义成需要重复渲染的状态机变量，减少渲染开销，提高性能
    detailString: '正在加载中...',
  };

  componentDidMount() {
    const url = this.props.navigation.getParam('url');
    httpRequest(url).then(r => {
      this.setState({
        detailString: r.value.content,
      });
    });
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
    return (
      <ScrollView style={{flex: 1}}>
        <HTML
          containerStyle={_styleSheet.ContainerStyle}
          html={this.state.detailString}
          imagesMaxWidth={Dimensions.get('window').width - 40}
          textSelectable={true}
          tagsStyles={htmlStyles.tag}
        />
      </ScrollView>
    );
  }
}

export default ArticleDetail;
