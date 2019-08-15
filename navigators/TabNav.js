import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import EventsList from '../screens/EventsList';
import GetEvents from '../screens/GetEvents';
import SaveEvent from '../screens/SaveEvent';
import TabBarIcon from '../components/TabBarIcon';


//create the stack navigators before we create the tab navigator

const ShowEventStack = createStackNavigator(
  {
    GetEvents: GetEvents,
    EventsList: EventsList,

  }
);

ShowEventStack.navigationOptions = {
  tabBarLabel: 'Get Events',
  tabBarIcon: TabBarIcon('favorite')
};


//create the bottom tab navigator

export default createBottomTabNavigator(
  {
    SaveEvent,
    ShowEventStack
  },
  {
    tabBarOptions: {
      // label and icon color of the active tab
      activeTintColor: 'salmon',
      // activeBackgroundColor: 'peachpuff',
      inactiveTintColor: 'burlywood',
      // inactiveBackgroundColor: 'cornsilk',

      style: { borderTopWidth: 5, borderTopColor: 'peachpuff' },

      //style object for tab tabBarLabel
      labelStyle: { fontWeight: 'bold'},

      //style object for the tab

      // tabStyle: { paddingBottom: 5},

      //whether to show label for tab or not

      showLabel: false,

      //whether to show the icon for tab or not default is true

      //showIcon:false,
    }
  }
)
