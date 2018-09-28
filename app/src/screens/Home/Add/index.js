import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Container, Content, Item, Input, Icon, Button, Spinner, Thumbnail } from 'native-base';
import firebase from 'firebase';
import Carousel from 'react-native-snap-carousel';
import MapView from 'react-native-maps';
//LOCAL
import config from '../../../../config';
import Logo from '../../../components/Logo';

export default class Add extends React.Component {
    state = {
        user: null,
        location: null,
        mapLoaded: false
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
        navigator.geolocation
            .getCurrentPosition(position=>this.setState({ location: position.coords, mapLoaded: true })
            ,error=>this.notify(error.toString()),
            );
    }

    render() {
        const {
            containerStyle,
            contentStyle,
            logoLayoutStyle,
            thumbnailStyle,
            videoStyle
        } = styles;

        return (
            <Container style={ containerStyle }>
                <Content padder>
                    <Logo size={40} text='Upload' />
                </Content>
            </Container>
        );
    }

    notify(message) {
        Alert.alert(config.APP_NAME, message);
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
    videoStyle: {
        height: 256,
        flex: 1
    }
});