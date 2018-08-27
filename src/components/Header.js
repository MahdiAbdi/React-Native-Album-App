import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        elevation: 3
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;