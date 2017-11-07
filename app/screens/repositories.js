import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Title from '../repoComponents/Title';
import SearchBox from '../repoComponents/SearchBox';

//search repositories page
class RepoSearch extends Component {
    render() {
        return (
            <View>
                <Title />
                <SearchBox />
            </View>
        );
    }
}

export default RepoSearch;