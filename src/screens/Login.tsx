import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { NavigationScreenOptions, NavigationParams } from 'react-navigation';
import { json } from '../utils/api'


interface Props { }
interface State {
    email: string;
    password: string;
}


export default class Login extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Login"
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    async handleLogin() {
        try {
            let result = await json('https://cherry-pie-19862.herokuapp.com//auth/login', 'POST', {
                email: 'KyledaNovice@hooblah.com',
                password: 'Blogapp'
            })
            console.log(result)
        } catch (e) {
            console.log(e)
            Alert.alert('Problem Logging In. Contact Admin!!')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Input value={this.state.email}
                    leftIcon={{type: 'font-awesome',name: 'envelope'}}
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                    <Input value={this.state.password}
                        placeholder="Password"
                        leftIcon={{type: 'font-awesome',name: 'key'}}
                        onChangeText={(text) => this.setState({ password: text })} />
                </View>

                <View style={{ flex: 1 }}>
                    <Button
                        raised
                        title="Login"
                        containerStyle={{ margin: 10 }}
                        buttonStyle={{ backgroundColor: '#AE3CD7' }}
                        // onPress={() => this.handleLogin()} 
                        onPress={() => console.log('Test!')}
                    />
                </View>
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