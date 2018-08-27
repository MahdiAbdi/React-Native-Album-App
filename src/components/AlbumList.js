import React, {Component} from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            albums: [],
            isFetched: false
        }
    }

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))
            .then(response => this.setState({isFetched: true}));
    }

    render() {

        return (
            <ScrollView>
                {this.state.isFetched ? this.state.albums.map(album =>
                    <AlbumDetail key={album.title} album={album} />
                ) : <Text>Loading...!</Text>}
            </ScrollView>
        );
    }
}

export default AlbumList;