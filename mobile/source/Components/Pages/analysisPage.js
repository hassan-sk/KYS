import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback, Button } from 'react-native';

import * as actions from '../../Actions'
import s from '../../Styling/Pages/analysisPageStyling';




class AnalysisPage extends Component {
    
    render() {
        return (
            <View style={s.mainView}>
             
            <Text>Hello anal</Text>
                        
            </View> 
        )
    }

}

const mstp = (state) => {
    return {
        loading: state.analysis.loading
    }
}

export default connect(mstp, null)(AnalysisPage);