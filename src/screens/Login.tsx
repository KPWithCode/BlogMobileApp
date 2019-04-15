import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationScreenOptions, NavigationParams } from 'react-navigation';
import { json } from '../utils/api'


interface Props { }
interface State { }


export default class Login extends React.Component<Props, State> {

    render() {
        return (
            <View style={styles.container}>
                <Text h1 style={{ margin: 20 }}>Login Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
})