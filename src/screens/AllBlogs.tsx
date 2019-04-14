import * as React from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { NavigationScreenOptions, NavigationScreenProps } from 'react-navigation';
import { json } from '../utils/api'
import BlogPreviewCard from '../components/BlogPreviewCard';





interface Props extends NavigationScreenProps { }
interface State {
    blogs: {
        id: number,
        title: string,
        body: string,
        firstname: string,
        lastname: string,
        _created: Date
    }[];
}
export default class AllBlogs extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Blogs"
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            blogs: []
        };
    }

    async componentDidMount() {
        try {
            let blogs = await json('https://cherry-pie-19862.herokuapp.com/api/blogs')
            this.setState({ blogs })
        } catch (e) {
            console.log(e)
            Alert.alert("Messed Up")
        }
    }

    renderBlogs() {
        return this.state.blogs.map(blog => {
            return <BlogPreviewCard key={blog.id} blog={blog} />
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>

                    {this.renderBlogs()}

                </ScrollView>
                {/* <Text style={styles.welcome}>AllBlogs ScreenText</Text>
                <Button title="Go To Single Blog" onPress={() => this.props.navigation.navigate("SingleBlog")} /> */}
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


});