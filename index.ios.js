/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {AppRegistry, StyleSheet, Text, View, Image, ListView} = React;

var MOCKED_MOVIES_DATA = [
    {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}}
];
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

var AwesomeReactNativeProject = React.createClass({

    getInitialState: function() {
        return {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => (row1 !== row2)
            }),
            loaded: false
        };
    },

    componentDidMount: function() {
        this._fetchData();
    },

    render: function() {
        if (!this.state.loaded) {
            return this._renderLoadingView();
        }

        return (
            <ListView   dataSource={this.state.dataSource}
                    renderRow={this._renderMovie}
                    style={styles.listView}
            />
        );
    },

    _renderMovie: function(movie) {
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
    },

    _renderLoadingView: function() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading in Progress...
                </Text>
            </View>
        );
    },

    /**
     * Requesting data from the server
     * @private
     */
    _fetchData: function() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true
                })
            })
        .done();
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
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('AwesomeReactNativeProject', () => (AwesomeReactNativeProject));
