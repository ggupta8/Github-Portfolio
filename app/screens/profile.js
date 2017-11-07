import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Title from '../components/Title';
import SearchBox from '../components/SearchBox';

//profile tab
class ProfileSearch extends Component {
    render() {
        return (
            <View>
                <Title />
                <SearchBox />
            </View>
        );
    }
}

export default ProfileSearch;