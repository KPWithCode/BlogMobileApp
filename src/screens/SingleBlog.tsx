import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';


interface Props { }
interface State { }
export default class SingleBlog extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Single Blog"
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>SingleBlog Screen</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});