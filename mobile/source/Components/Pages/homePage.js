import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../Actions';

class HomePage extends Component {


    render() {
        return (
            <View>
                <Text>This is the home page</Text>
            </View> 
        )
    }

}



export default connect(null, actions)(HomePage);