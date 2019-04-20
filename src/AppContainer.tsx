import * as React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AllBlogs from './screens/AllBlogs';
import SingleBlog from './screens/SingleBlog';
import Login from './screens/Login';
import AuthLoading from './screens/AuthLoading';
import Test from './screens/screenTemplate';
import { Icon } from 'react-native-elements';
const AuthStack = createStackNavigator(
    {
        Login
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0091ea'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
)

const AppStack = createStackNavigator({
    //screens
    AllBlogs,
    SingleBlog,

},
    {
        //generic styling
        initialRouteName: 'AllBlogs',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#43005B'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }
)



const BlogsTab = createBottomTabNavigator(
    {
        Blogs: AppStack,
        Test
    },
    {
        initialRouteName: 'Blogs',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                let { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Blogs') {
                    iconName = 'rss';
                } else if (routeName === 'Test') {
                    iconName = 'code'
                }
                return (<Icon
                    color={`${tintColor}`}
                    type='font-awesome'
                    name={`${iconName}`}
                    size={25}
                />)
            }
        }),
        tabBarOptions: {
            activeBackgroundColor: '#43005B',
            inactiveBackgroundColor: '#43005B',
            activeTintColor:'white',
            inactiveTintColor: 'gray'
        }
    }
)

export default createAppContainer(createSwitchNavigator(
    {
        App: BlogsTab,
        Auth: AuthStack,
        AuthLoading
    },
    {
        initialRouteName: 'AuthLoading'
    }
));