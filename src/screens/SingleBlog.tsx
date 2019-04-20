import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Badge, Text } from 'react-native-elements'
import { NavigationScreenOptions, NavigationParams } from 'react-navigation';
import { json } from '../utils/api';
import moment from 'moment';

interface Props extends NavigationParams { }
interface State {
    singleBlog: {
        id: number,
        title: string,
        body: string,
        _created: Date
    },
    tags: {
        name: string
    }[]

}
export default class SingleBlog extends React.Component<Props, State> {
    static navigationOptions: NavigationScreenOptions = {
        headerTitle: "Single Blog"
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            singleBlog: {
                id: 0,
                title: '',
                body: '',
                _created: new Date()
            },
            tags: []
        };
    }
    async componentDidMount() {
        const id = this.props.navigation.getParam('id', 'NO ID')
        try {
            let singleBlog = await json(`https://cherry-pie-19862.herokuapp.com/api/blogs/${id}`)
            let tags = await json(`https://cherry-pie-19862.herokuapp.com/api/blogtags/${id}`)
            this.setState({ singleBlog, tags })

        } catch (e) {
            console.log(e)
            Alert.alert("Messed Up")
        }
    }

    renderTags() {
        return this.state.tags.map((tag, i) => {
            <Badge key={i} value={tag.name}
                textStyle={styles.textStyle}
                badgeStyle={styles.badgeStyle}
            />
        })
    }
    render() {
        const { title, body, _created } = this.state.singleBlog

        return (
            <View style={styles.container}>
                <Text h3 style={styles.titleStyle}>{title}</Text>
                <Text style={styles.dateStyle}> on {moment(_created).format('MMM DD,YYYY')}</Text>
                <View>{this.renderTags()}</View>
                <Text>{body}</Text>
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
    titleStyle: {
        marginTop: 5,
        textAlign: 'center',
        color: '#FA68FF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    textStyle: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    badgeStyle: {
        padding: 15,
        backgroundColor: '#46FFA4',
        borderWidth: 2,
        borderColor: '#000',
        borderStyle: 'solid'

    },
    dateStyle: {
        marginTop: 15,
        padding: 10,
        fontSize: 16,
        textAlign: 'center',
        color: '#74FFDE',
        backgroundColor: '#343a40'
    }

});