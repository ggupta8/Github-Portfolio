import React, { Component } from 'react';
import { TextInput, View, Button, Text, FlatList, Linking } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { repos: '', all: [], data: [], loading: false };
    }


    goToLink = (url) => {
         url ? Linking.openURL(url) : <View />;
    }

    fetchData = () => {
        this.setState({ loading: true });
        const repos = this.state.repos;
        fetch(`https://api.github.com/search/repositories?q=${repos}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ all: data, data: data.items, loading: false });
            })
            .catch(err => console.log(err));
    }
    
    renderResult() {
        if (this.state.all.total_count == 0) {
            return (
                <Text style={textStyle}> The repository wasnt found </Text>
            );
        }
        return ( 
            <List>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) => (     
                    <ListItem
                        title={item.name}
                        subtitle={item.owner.login}
                        onPress={() => this.goToLink(item.svn_url)}
                        containerStyle={{ borderBottomWidth: 0 }}
                    />
                    )}
                />
            </List>
        );
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.inputBoxStyle}
                    placeholder="Enter Repository"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.props.repos}
                    onChangeText={(repos) => this.setState({ repos })}
                />
                <Button
                    title="Get Repository" 
                    onPress={this.fetchData}
                />

                {this.renderResult()}

            </View>
        );
    }
}

const styles = {
    inputBoxStyle: {
        height: 40,
        textAlign: 'center',
        marginTop: 20
    },
    notFoundStyle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10
    }
};

export default SearchBox;