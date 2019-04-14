import * as React from 'react';

import { Text, Card, Button, Icon } from 'react-native-elements';



interface Props {
    blog: {
        id: number,
        title: string,
        body: string,
        firstname: string,
        lastname: string,
        _created: Date
    };
}

interface State { }

export default class BlogPreviewCard extends React.Component<Props, State> {



    render() {
        const { title, firstname, lastname } = this.props.blog;
        return (

            <Card
                title={title}
                image={{ uri: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80' }}>
                <Text style={{ marginBottom: 10 }}>{`Written by:\n\n${firstname} ${lastname}`} </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ backgroundColor: '#AE3CD7', borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='VIEW NOW' />
            </Card>
        )
    }
}