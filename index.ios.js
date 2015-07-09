/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];

var {AppRegistry, StyleSheet, Text, View, Image} = React;

var AwesomeReactNativeProject = React.createClass({

    render: function() {
      var movie = MOCKED_MOVIES_DATA[ 0];
        return (
            <View style={styles.container}>
                <Image
                    source={{uri: movie.posters.thumbnail}}
                    style={styles.thumbnail}
                    />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    instructions: {
        textAlign: 'right',
        color: '#333333',
        marginBottom: 5
    },
    thumbnail: {
        width: 53,
        height: 81
    },
    rightContainer: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center'
    },
    year: {
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('AwesomeReactNativeProject', () => AwesomeReactNativeProject);
