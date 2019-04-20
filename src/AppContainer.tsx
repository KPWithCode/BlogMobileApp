import * as React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import AllBlogs from './screens/AllBlogs'
import SingleBlog from './screens/SingleBlog'
import Login from './screens/Login';
import AuthLoading from './screens/AuthLoading';
import Test from './screens/screenTemplate'

const AuthStack = createStackNavigator(
    {
        Login
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



const blogsTab = createBottomTabNavigator(
{
    Blogs: AppStack,
    Test: Test
}

) 

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
        AuthLoading
    },
    {
        initialRouteName: 'AuthLoading'
    }
));