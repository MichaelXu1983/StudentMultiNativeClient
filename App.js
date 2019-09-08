/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
// 载入导航器模块
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
// 载入页面模块
import Index from '@/src/pages/index/index.js';
import Courses from '@/src/pages/courses/index.js';
import MessageList from '@/src/pages/index/message_list.js';
import NoticeList from '@/src/pages/index/notice_list.js';
import Webview from '@/src/pages/webview/index.js';
import Users from '@/src/pages/users/index.js';
import Setting from '@/src/pages/users/setting.js';
import HelpList from '@/src/pages/users/help_list.js';

// 载入组件模块
import { Image } from "react-native";
// 载入全局样式模块
import globals from "@/src/styles/globals";

// 配置标签栏
const TabNavigator = createBottomTabNavigator(
  {
    '首页': {
      screen: Index,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require('@/src/assets/images/tab_bar/home.png')}
            style={[{ tintColor: tintColor }, globals.tabBarIcon]}
          />
        ),
      },
    },
    '课程': {
      screen: Courses,
      navigationOptions: {
        tabBarLabel: '课程',
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require('@/src/assets/images/tab_bar/courses.png')}
            style={[{ tintColor: tintColor }, globals.tabBarIcon]}
          />
        ),
      },
    },
    '我的': {
      screen: Users,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <Image
            source={require('@/src/assets/images/tab_bar/users.png')}
            style={[{ tintColor: tintColor }, globals.tabBarIcon]}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#8151a2', // 文字和图片选中颜色
      inactiveTintColor: '#c5c5c5', // 文字和图片未选中颜色
      showLabel: true, // 是否显示label
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
      tabStyle: {
        backgroundColor: '#fff', // Tab 背景色
      }
    }
  })

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName;
  return {
    headerTitle,
  };
}
// 配置路由
const App = createStackNavigator(
  {
    Index: {
      screen: TabNavigator,
    },
    MessageList: {
      screen: MessageList,
    },
    NoticeList: {
      screen: NoticeList,
    },
    Webview: {
      screen: Webview,
    },
    Setting: {
      screen: Setting,
    },
    HelpList: {
      screen: HelpList,
    },
  },
  {
    initialRouteName: "Index", // 默认首页
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#8151a2',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },

  })

export default createAppContainer(App);