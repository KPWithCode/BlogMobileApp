import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import { NavigationScreenOptions, NavigationScreenProps, createSwitchNavigator } from 'react-navigation';
import { json, SetAccessToken, getUser } from '../utils/api'


interface Props extends NavigationScreenProps { }
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

    async componentDidMount() {
        let user = await getUser();
        if (user && user.role === 'admin') {
            this.props.navigation.navigate('AllBlogs')
        }
    }

    async handleLogin() {
        try {
            let result = await json('https://cherry-pie-19862.herokuapp.com//auth/login', 'POST', {
                email: this.state.email,
                password: this.state.password
            })
            console.log(result)
            if (result) {
                await SetAccessToken(result.token, { userid: result.userid, role: result.role });
                let user = await getUser();
                console.log(user)
                if (user && user.role === 'admin') {
                    this.props.navigation.navigate('AllBlogs')
                } else {
                    Alert.alert('Invalid Credentials')
                }
            }

        } catch (e) {
            console.log(e)
            Alert.alert('Problem Logging In. Contact Admin!!')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Input value={this.state.email}
                        textContentType='emailAddress'
                        containerStyle={{ marginVertical: 5 }}
                        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                        placeholder="Email"
                        onChangeText={(text) => this.setState({ email: text })}
                    />

                    <Input value={this.state.password}
                        secureTextEntry={true}
                        textContentType='password'
                        containerStyle={{ marginVertical: 5 }}
                        placeholder="Password"
                        leftIcon={{ type: 'font-awesome', name: 'key' }}
                        onChangeText={(text) => this.setState({ password: text })} />
                </View>

                <View style={{ flex: 1 }}>
                    <Button
                        raised
                        title="Login"
                        containerStyle={{ margin: 10 }}
                        buttonStyle={{ backgroundColor: '#AE3CD7' }}
                        // onPress={() => this.handleLogin()} 
                        onPress={() => this.handleLogin()}
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