import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, Linking, View } from 'react-native';

class Result extends Component {
    openLink = () => {
        var username = this.props.user;
        username ? Linking.openURL(`https://github.com/${username}`) : <View />;
    }

    //displays user search results
    render() {
        const { containerStyle, textStyle, imageStyle } = styles;
        return (
            <TouchableOpacity style={containerStyle} onPress={this.openLink}>
                <Image 
                    source={{ uri: this.props.image }} 
                    style={imageStyle}
                />
                <Text style={textStyle}>Name: {this.props.name}</Text>
                <Text style={textStyle}>Bio: {this.props.bio}</Text>
                <Text style={textStyle}>Website: {this.props.website}</Text>
                <Text style={textStyle}>Email: {this.props.email}</Text>
                <Text style={textStyle}>Number of Public Repos: {this.props.publicRepo}</Text>
                <Text style={textStyle}>Number of followers: {this.props.followers}</Text>
                <Text style={textStyle}>Number of following: {this.props.following}</Text>
                <Text style={textStyle}>Created Date: {this.props.createDate}</Text>
            </TouchableOpacity>
        );
    }
}
    

const styles = {
    containerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#e2e2e2',
        borderTopWidth: 1
    },
    textStyle: {
        fontSize: 17,
        fontWeight: '500',
        marginBottom: 10
    },
    imageStyle: {
        width: 100,
        height: 100,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10
    }
};

export default Result;