/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];

var {AppRegistry, StyleSheet, Text, View} = React;

var AwesomeReactNativeProject = React.createClass({

    render: function() {
      var movies = MOCKED_MOVIES_DATA[ 0];
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native! It's cool!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit index.ios.js
            </Text>
            <Text style={styles.instructions}>
              Press Cmd+R to reload,{'\n'}
              Cmd+Control+Z for dev menu
            </Text>
          </View>
        );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'right',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('AwesomeReactNativeProject', () => AwesomeReactNativeProject);
