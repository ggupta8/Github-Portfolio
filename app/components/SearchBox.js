import React, { Component } from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import Result from './Result';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', data: '', loading: false };
    }

    fetchData = () => {
        this.setState({ loading: true });
        const username = this.state.user;
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data, loading: false });
            })
            .catch(err => console.log(err));
    }
    
    renderResult() {
        if (this.state.data.message) {
            return (
                <Text style={styles.notFoundStyle}>User not found</Text>
            );
        }
        return (
            <Result 
                name={this.state.data.name}
                image={this.state.data.avatar_url}
                user={this.state.user}
                bio={this.state.data.bio}
                website={this.state.data.blog}
                email={this.state.data.email}
                publicRepo={this.state.data.public_repos}
                followers={this.state.data.followers}
                following={this.state.data.following}
                createDate={this.state.data.created_at}
            />
        );
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.inputBoxStyle}
                    placeholder="Enter Github username"
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.props.user}
                    onChangeText={(user) => this.setState({ user })}
                />
                <Button
                    title="Get User" 
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