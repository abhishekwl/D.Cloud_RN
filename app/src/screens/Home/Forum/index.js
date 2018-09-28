import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback } from 'react-native';
import { Container, Content, Item, Input, Icon, Button, Spinner, Thumbnail } from 'native-base';
import firebase from 'firebase';
import Carousel from 'react-native-snap-carousel';
//LOCAL
import config from '../../../../config';
import Logo from '../../../components/Logo';

export default class Forum extends React.Component {
    state = {
        user: null
    };

    componentDidMount() {
        if(firebase.apps.length===0) {
            firebase.initializeApp({
                apiKey: "AIzaSyBcNqrPKB9T9-2VKRFsLUtsytj4O09xqWA",
                authDomain: "musicx-46c2d.firebaseapp.com",
                databaseURL: "https://musicx-46c2d.firebaseio.com",
                projectId: "musicx-46c2d",
                storageBucket: "musicx-46c2d.appspot.com",
                messagingSenderId: "629755735207"
            });
            this.setState({ user: firebase.auth().currentUser });
        }
    }

    render() {
        const {
            containerStyle,
            contentStyle,
            logoLayoutStyle,
            thumbnailStyle
        } = styles;

        return (
            <Container style={ containerStyle }>
                <Content padder style={ contentStyle }>
                    <View style={ logoLayoutStyle }>
                        <Logo size={40} text='Forum' />
                        <Thumbnail
                            style={ thumbnailStyle }
                            source={ {uri: this.state.user?this.state.user.photoURL:'http://profilepicturesdp.com/wp-content/uploads/2018/07/png-profile-picture-6.png'} }
                            small
                        />
                    </View>
                </Content>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: config.COLOR_BACKGROUND
    },
    contentStyle: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16
    },
    logoLayoutStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    thumbnailStyle: {
        borderWidth: 2,
        borderColor: config.COLOR_TEXT_DARK
    }
});