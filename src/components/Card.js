import React, {Component} from  'react';
import { View } from 'react-native';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = {
  containerStyle: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      elevation: 2,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
  }
};

export default Card;