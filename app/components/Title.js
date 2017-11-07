import React from 'react';
import { Image, View, Text } from 'react-native';

//screen's title above search box
const Title = () => {
    const { containerStyle, imageStyle, titleStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={titleStyle}>Search for a User</Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 32,
        fontWeight: '600'
    }
};

export default Title;